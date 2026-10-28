/* Lecture 11 · Computer Vision & CNNs — web lesson */
TUTOR.addLesson({
  id: 'L11', num: 11,
  navTitle: 'Computer Vision & CNN',
  title: 'Computer Vision & CNNs: จาก pixel สู่ feature ที่เรียนรู้ได้',
  short: 'Tensor · Convolution · Padding/Stride/Pooling · CNN · Vision tasks · Transfer/Zero-shot · ResNet · ViT',
  slides: 'Lecture 11 · 36 สไลด์',
  intro: 'แนวคิดเดียวที่ร้อยทั้งบท: “backbone เรียน feature — head และ label กำหนดงาน” เราจะเริ่มจากภาพที่เป็นแค่ตารางตัวเลข → การเลื่อน kernel (convolution) → นับขนาดและพารามิเตอร์ของ CNN → งาน classification/detection/segmentation → และวิธีเรียนเมื่อมี label น้อย',
  sections: [
    {
      id: 'image', title: '1) ภาพดิจิทัลคือตารางตัวเลข · Tensor',
      html: `
<style>
.cvgrid{border-collapse:collapse;margin:6px 10px 6px 0;display:inline-table;vertical-align:top}
.cvgrid td{width:38px;height:30px;text-align:center;border:1px solid var(--line);font-family:Consolas,monospace;font-size:13.5px;background:var(--panel)}
.cvgrid td.pad{color:var(--mut);background:var(--code)}
.cvgrid td.hl{background:#ffe8a3;color:#000;font-weight:700}
.cvgrid td.oc{cursor:pointer}
.cvgrid td.oc:hover{outline:2px solid var(--brand)}
.cvgrid td.sel{background:var(--brand);color:#fff;font-weight:700}
.cvcap{font-size:13px;color:var(--mut);text-align:center}
.kimg{image-rendering:pixelated;width:256px;height:256px;margin-right:12px;display:inline-block}
</style>
<p>มนุษย์มองภาพแล้วเห็น “ดอกไม้” ทันที แต่คอมพิวเตอร์เห็นแค่ <b>ตารางตัวเลข</b> ทุกอย่างที่ “เข้าใจ” ต้องเรียนรู้จากรูปแบบของตัวเลขเหล่านั้น</p>
<figure class="slide"><img src="img/L11_p04.jpg" alt="grid of numbers"><figcaption>สไลด์หน้า 4 · ภาพเทา 390×585 · หน้าต่างสีแดงอ่านออกมาเป็นตัวเลข 0 (ดำ) – 255 (ขาว)</figcaption></figure>
<ol class="steps">
<li><b>Sampling → resolution</b>: วัดฉากบนกริด H × W ช่อง แต่ละช่องคือ 1 <b>pixel</b></li>
<li><b>Quantisation → intensity</b>: pixel 8-bit เก็บได้ 2⁸ = 256 ระดับ (0 = ดำ … 255 = ขาว)</li>
<li><b>โครงสร้างอยู่ที่เพื่อนบ้าน</b>: ขอบ ลายผิว รูปร่าง เกิดตรงที่ค่าข้างเคียง “เปลี่ยน” — pixel เดี่ยวไม่มีความหมาย</li>
</ol>
<figure class="slide"><img src="img/L11_p05.jpg" alt="channels"><figcaption>สไลด์หน้า 5 · ภาพสี H×W×3 = ช่องแดง + เขียว + น้ำเงิน</figcaption></figure>
<div class="callout def"><span class="lb">นิยาม</span><b>Channel</b> = ชั้นความเข้มของสีหนึ่ง · <b>Tensor</b> = อาร์เรย์หลายมิติที่ทุกโมเดลรับเป็นอินพุต (เวกเตอร์ = 1 มิติ, เมทริกซ์ = 2 มิติ, tensor = กี่มิติก็ได้)</div>
<div class="tblwrap"><table class="tbl">
<tr><th>ข้อมูล</th><th>Tensor shape</th><th>ตัวอย่าง</th></tr>
<tr><td>Grayscale</td><td>H × W</td><td>MNIST 28 × 28</td></tr>
<tr><td>Colour (RGB)</td><td>H × W × 3</td><td>224 × 224 × 3 = 150,528 ค่า</td></tr>
<tr><td>Mini-batch</td><td>B × C × H × W</td><td>32 × 3 × 224 × 224</td></tr>
<tr><td>Video</td><td>T × H × W × 3</td><td>10 วินาที 30 fps → T = 300</td></tr>
<tr><td>3-D medical</td><td>D × H × W</td><td>CT volume มี D slices</td></tr>
</table></div>
<div class="callout warn"><span class="lb">ก่อนฝึก</span>① Resize ให้ตรงขนาด input (เช่น 224×224) ② Scale 0–255 → 0–1 แล้ว normalise แต่ละ channel ด้วย mean/std ของ dataset ③ ระวัง layout: NumPy/OpenCV ใช้ H×W×C (<b>OpenCV โหลดเป็น BGR!</b>) แต่ PyTorch ต้องการ <b>C×H×W</b> — ตรวจ shape คือขั้นแรกของการ debug</div>
<details class="reveal"><summary>ลองคิดก่อน: batch ภาพสี 16 ภาพ ขนาด 128×128 ใน PyTorch มี shape อะไร และมีกี่ตัวเลข?</summary>shape = <b>16 × 3 × 128 × 128</b> (B×C×H×W) → 16 × 3 × 128 × 128 = <b>786,432</b> ตัวเลข</details>`
    },
    {
      id: 'conv', title: '2) Convolution: เลื่อน kernel · คูณทีละตัว · บวกรวม',
      html: `
<p>นึกถึง “แผ่นฉลุ” ขนาด 3×3 ที่เราวางทาบบนภาพทีละตำแหน่ง ตรงไหนที่ลวดลายใต้แผ่นตรงกับลวดลายบนแผ่น ผลรวมจะสูง — แผ่นฉลุนี้คือ <b>kernel</b> และตารางผลลัพธ์จากทุกตำแหน่งคือ <b>feature map</b></p>
<div class="callout def"><span class="lb">นิยาม</span><b>Convolution</b> = เลื่อน kernel (เมทริกซ์น้ำหนักเล็ก ๆ) ไปบนภาพ ทุกตำแหน่ง <b>คูณ element-wise แล้วบวกรวม (+ bias)</b> ได้ 1 ค่าของ feature map · <b>stride</b> = ระยะเลื่อนแต่ละครั้ง</div>
<div class="formula">y[i, j] = Σₘ Σₙ x[i+m, j+n] · w[m, n] + b</div>
<figure class="slide"><img src="img/L11_p07.jpg" alt="convolution"><figcaption>สไลด์หน้า 7 · Input 5×5 ∗ Kernel 3×3 = Feature map 3×3</figcaption></figure>
<h3>คำนวณช่องแรก (−19) ทีละพจน์</h3>
<ol class="steps">
<li><b>Place</b>: วาง kernel [−2 1 2; −2 3 2; −2 −2 2] ทับหน้าต่างมุมซ้ายบน [17 24 1; 23 5 7; 4 6 13]</li>
<li><b>Multiply</b>: 17·(−2), 24·1, 1·2, 23·(−2), 5·3, 7·2, 4·(−2), 6·(−2), 13·2 = −34, 24, 2, −46, 15, 14, −8, −12, 26</li>
<li><b>Sum</b>: −34 + 24 + 2 − 46 + 15 + 14 − 8 − 12 + 26 = <b>−19</b></li>
<li><b>Slide</b>: เลื่อนไปขวา 1 ช่อง (stride 1) ทำซ้ำ ได้ 10, 74 … จนครบ 3×3 = [−19 10 74; 3 72 36; 70 34 33]</li>
</ol>
<div class="demo" id="l11-conv"><h4>🔧 เครื่องคิดเลข Convolution (คลิกช่องผลลัพธ์เพื่อดูการคำนวณ)</h4>
<div class="row"><label style="white-space:normal">Input (แถวละบรรทัด)<br><textarea id="cv-in" rows="5" style="width:200px;font-family:Consolas,monospace">17 24 1 8 15
23 5 7 14 16
4 6 13 20 22
10 12 19 21 3
11 18 25 2 9</textarea></label>
<label style="white-space:normal">Kernel<br><textarea id="cv-k" rows="3" style="width:140px;font-family:Consolas,monospace">-2 1 2
-2 3 2
-2 -2 2</textarea></label>
<span><label>stride S <input type="number" id="cv-s" value="1" min="1" max="4"></label><br><label>padding P <input type="number" id="cv-p" value="0" min="0" max="3"></label><br><label>bias b <input type="number" id="cv-b" value="0" step="1"></label><br><button id="cv-go">คำนวณ</button></span></div>
<div id="cv-grids"></div><div class="out" id="cv-out"></div></div>
<div class="callout key"><span class="lb">จำ</span><b>1 kernel = 1 pattern detector</b>: ค่าสูง = “ลวดลายของฉันอยู่ตรงนี้” · ภาพสีมี kernel ขนาด K×K×C<sub>in</sub> (บวกครบทุก channel ได้ 1 map) · มี C<sub>out</sub> kernels → ได้ C<sub>out</sub> feature maps</div>
<div class="callout warn"><span class="lb">หมายเหตุ</span>“convolution” ใน deep learning จริง ๆ คือ <b>cross-correlation</b> (ไม่กลับ kernel 180°) — คำนวณตามสไลด์ได้เลย วางทับแล้วคูณตำแหน่งตรงกัน</div>`
    },
    {
      id: 'kernels', title: '3) Kernel ต่างกัน ผลต่างกัน',
      html: `
<figure class="slide"><img src="img/L11_p08.jpg" alt="kernels"><figcaption>สไลด์หน้า 8 · Original · Box blur · Sharpen · Sobel-x · Sobel-y · Laplacian</figcaption></figure>
<div class="tblwrap"><table class="tbl">
<tr><th>Kernel</th><th>ค่าตัวอย่าง</th><th>ผลลัพธ์</th></tr>
<tr><td>Smoothing (box blur)</td><td>สไลด์: 5×5 mean = 1/25·ones(5,5) (แบบ 3×3 = 1/9·[1 1 1; 1 1 1; 1 1 1] ก็ได้ — demo ด้านล่างใช้ 3×3) — ผลรวม 1</td><td>เฉลี่ยเพื่อนบ้าน → ลด noise แต่รายละเอียดหายไปด้วย</td></tr>
<tr><td>Sharpening</td><td>[0 −1 0; −1 5 −1; 0 −1 0] — กลางลบเพื่อนบ้าน</td><td>เพิ่มความต่างเฉพาะที่: ขอบชัดขึ้น noise ก็ชัดขึ้น</td></tr>
<tr><td>Sobel-x</td><td>[−1 0 1; −2 0 2; −1 0 1] — ผลรวม 0</td><td>หาขอบ <b>แนวตั้ง</b> (ความเข้มเปลี่ยนตามแกน x)</td></tr>
<tr><td>Sobel-y</td><td>[−1 −2 −1; 0 0 0; 1 2 1] — ผลรวม 0</td><td>หาขอบ <b>แนวนอน</b></td></tr>
<tr><td>Laplacian</td><td>[0 1 0; 1 −4 1; 0 1 0]</td><td>ขอบทุกทิศทาง</td></tr>
</table></div>
<div class="demo" id="l11-kern"><h4>🔧 ลองใส่ kernel กับภาพจริง (ภาพสังเคราะห์ 64×64)</h4>
<div class="row"><label>kernel <select id="kn-sel"><option value="id">Identity</option><option value="blur">Box blur</option><option value="sharp">Sharpen</option><option value="sx" selected>Sobel-x</option><option value="sy">Sobel-y</option><option value="lap">Laplacian</option></select></label><label><input type="checkbox" id="kn-noise" checked> เติม noise</label><button id="kn-go">วาดใหม่</button></div>
<canvas id="kn-a" width="64" height="64" class="kimg"></canvas><canvas id="kn-b" width="64" height="64" class="kimg"></canvas>
<div class="out" id="kn-out"></div></div>
<div class="callout key"><span class="lb">หลักจำ</span>kernel หาขอบ <b>ผลรวม = 0</b> → พื้นที่เรียบให้ 0 · kernel เบลอ <b>ผลรวม = 1</b> → รักษาความสว่าง · หลายสิบปีมนุษย์ออกแบบ kernel เหล่านี้เอง — <b>CNN เรียนค่าใน kernel จากข้อมูล</b></div>
<details class="reveal"><summary>ลองคิดก่อน: ภาพ 3 แถวที่ทุกแถวเป็น [0 0 0 10 10 10] ใส่ Sobel-x (valid) ได้ผลอะไร?</summary>ได้ <b>[0, 40, 40, 0]</b> — หน้าต่างที่อยู่บริเวณเรียบ (ทั้งดำหรือสว่าง) ได้ 0 ส่วนหน้าต่างที่คร่อมรอยต่อ 0→10 ได้ 10·1 + 10·2 + 10·1 = 40 → นี่คือ “ขอบแนวตั้ง”</details>`
    },
    {
      id: 'size', title: '4) Padding · Stride · Pooling: ควบคุมขนาด output',
      html: `
<div class="formula">O = (I − K + 2P) / S + 1        (ถ้าไม่ลงตัวให้ปัดลง)
I = ขนาด input · K = ขนาด kernel · P = padding · S = stride</div>
<div class="tblwrap"><table class="tbl">
<tr><th>Setting</th><th>O</th><th>ผล</th></tr>
<tr><td>I=5, K=3, P=0, S=1</td><td>3</td><td>“valid” — หดลง K−1</td></tr>
<tr><td>I=5, K=3, P=1, S=1</td><td>5</td><td>“same” — ขนาดคงเดิม (P = (K−1)/2)</td></tr>
<tr><td>I=32, K=3, P=1, S=2</td><td>16</td><td>strided — ลดครึ่ง (31/2 + 1 = 16.5 → 16)</td></tr>
</table></div>
<div class="callout def"><span class="lb">นิยาม</span><b>Zero padding</b> เติมขอบด้วย 0 ให้ pixel ริมถูกครอบคลุมบ่อยเท่ากลางและคุมขนาด · <b>Stride</b> ก้าวเลื่อน (S=2 ลดขนาดครึ่ง) · <b>Pooling</b> ย่อ feature map แบบตายตัว: <b>max</b> เอาค่ามากสุด / <b>average</b> เอาค่าเฉลี่ยในหน้าต่าง</div>
<figure class="slide"><img src="img/L11_p09_pool.jpg" alt="pooling"><figcaption>สไลด์หน้า 9 · Max pool 2×2 stride 2 = [8 2; 3 9] · Average pool = [4 1; 1.5 5.5]</figcaption></figure>
<div class="demo" id="l11-pool"><h4>🔧 Pooling 2×2 stride 2</h4>
<div class="row"><textarea id="pk-in" rows="4" style="width:170px;font-family:Consolas,monospace">1 3 2 1
4 8 1 0
2 1 7 4
0 3 2 9</textarea><button id="pk-go">คำนวณ</button></div><div class="out" id="pk-out"></div></div>
<div class="callout key"><span class="lb">คุณสมบัติ pooling</span><b>0 พารามิเตอร์</b> · เหลือ ¼ ของค่า (¼ ของงานคำนวณ) · <b>ทนการเลื่อนเล็กน้อย</b> (ค่า max ยังอยู่แม้ลวดลายขยับ 1 pixel) · จังหวะคลาสสิก <b>conv → ReLU → pool</b>: conv หาลวดลาย pool สรุปว่าอยู่ตรงไหน</div>
<h3>🔧 ไล่ shape และนับพารามิเตอร์ทั้งโมเดล</h3>
<div class="demo" id="l11-trace"><h4>Shape &amp; parameter tracer</h4>
<p class="mut">รูปแบบแต่ละบรรทัด: <code>conv K Cout P S</code> · <code>pool K S</code> · <code>gap</code> · <code>flatten</code> · <code>fc N</code></p>
<div class="row"><label>input H,W,C <input type="text" id="tr-in" value="32,32,3" style="width:110px"></label>
<button class="ghost" data-preset="simple">SimpleCNN (หน้า 12)</button><button class="ghost" data-preset="lenet">LeNet-5</button><button class="ghost" data-preset="q1">Q1 (หน้า 35)</button><button class="ghost" data-preset="gap">SimpleCNN + GAP</button></div>
<textarea id="tr-layers" rows="7" style="width:100%;max-width:420px;font-family:Consolas,monospace"></textarea><br><button id="tr-go">คำนวณ</button>
<div class="out" id="tr-out"></div></div>
<details class="reveal"><summary>ลองคิดก่อน: I = 7, K = 3, P = 0, S = 2 → O = ? และถ้าใช้ K = 5 อยากได้ขนาดเท่าเดิมด้วย S = 1 ต้อง pad เท่าไร?</summary>O = (7 − 3 + 0)/2 + 1 = <b>3</b> · ขนาดเท่าเดิมต้อง P = (K − 1)/2 = <b>2</b></details>`
    },
    {
      id: 'cnn', title: '5) ทำไมต้อง CNN · สถาปัตยกรรม · สิ่งที่แต่ละชั้นเรียน',
      html: `
<figure class="slide"><img src="img/L11_p11.jpg" alt="why not MLP"><figcaption>สไลด์หน้า 11 · ทำไมไม่ป้อน pixel เข้า MLP ตรง ๆ</figcaption></figure>
<p>ถ้า flatten ภาพ 224×224×3 แล้วป้อน MLP: มี <b>150,528 inputs</b> · hidden 1,000 neurons ชั้นเดียวก็ <b>≈150 ล้าน weights</b> · และถ้าแมวเลื่อนไป 1 pixel ทุก input เปลี่ยน MLP ต้องเรียนแมวใหม่ทุกตำแหน่ง</p>
<div class="grid2"><div class="callout def"><span class="lb">Locality → Local connectivity</span>pixel สัมพันธ์กับเพื่อนบ้าน แทบไม่เกี่ยวกับมุมไกล → แต่ละ neuron ต่อกับหน้าต่างเล็ก ๆ เท่านั้น</div><div class="callout def"><span class="lb">Translation → Weight sharing</span>ตัวจับขอบที่มีประโยชน์ตรงนี้ก็มีประโยชน์ทุกที่ → ใช้ kernel ชุดเดียวทุกตำแหน่ง</div></div>
<div class="formula">params ของชั้น conv = (K² · C_in + 1) · C_out
ตัวอย่าง Conv 3→64, K = 3 : (9·3 + 1)·64 = 1,792</div>
<div class="callout key"><span class="lb">จำ</span>local connectivity + weight sharing = ชั้น convolution → พารามิเตอร์ <b>ไม่โตตามขนาดภาพ</b> (ไม่ขึ้นกับ H, W, stride, padding)</div>
<figure class="slide"><img src="img/L11_p12.jpg" alt="CNN architecture"><figcaption>สไลด์หน้า 12 · CNN = feature extractor (backbone) + classifier (head)</figcaption></figure>
<div class="tblwrap"><table class="tbl">
<tr><th>ชั้น</th><th>output</th><th>พารามิเตอร์</th></tr>
<tr><td>input</td><td>32×32×3</td><td>—</td></tr>
<tr><td>conv 3×3 ×16 + ReLU (P=1)</td><td>32×32×16</td><td>(3·3·3+1)×16 = 448</td></tr>
<tr><td>max-pool 2×2</td><td>16×16×16</td><td>0</td></tr>
<tr><td>conv 3×3 ×32 + ReLU (P=1)</td><td>16×16×32</td><td>(3·3·16+1)×32 = 4,640</td></tr>
<tr><td>max-pool 2×2</td><td>8×8×32</td><td>0</td></tr>
<tr><td>flatten</td><td>2,048</td><td>0</td></tr>
<tr><td>FC + softmax</td><td>10</td><td>(2,048+1)×10 = 20,490</td></tr>
<tr><td><b>รวม</b></td><td></td><td><b>25,578 ≈ 25,600</b> (head ≈ 80%)</td></tr>
</table></div>
<p><b>Map หดลง channel เพิ่มขึ้น</b> และ head ที่ดูเล็กกลับถือพารามิเตอร์ส่วนใหญ่ — นี่คือเหตุผลที่โมเดลสมัยใหม่ใช้ Global Average Pooling แทน flatten</p>
<figure class="slide"><img src="img/L11_p13.jpg" alt="layers learn"><figcaption>สไลด์หน้า 13 · ชั้นต้นเห็นขอบ · ชั้นกลางเห็นชิ้นส่วน · ชั้นลึกเห็นวัตถุ</figcaption></figure>
<div class="callout def"><span class="lb">Receptive field</span>บริเวณบนภาพ input ที่ 1 หน่วย “มองเห็น” · conv 3×3 ซ้อน 3 ชั้นเห็น 7×7 pixel (เพิ่มชั้นละ 2) · pooling แต่ละครั้งทำให้การขยายเร็วขึ้นสองเท่า · ไม่มีใครออกแบบตัวจับเหล่านี้ — มันเกิดเองจาก gradient descent บนภาพที่มี label</div>
<h3>กล่องเครื่องมือ 7 ชิ้น (หน้า 14)</h3>
<div class="tblwrap"><table class="tbl">
<tr><th>ชิ้นส่วน</th><th>หน้าที่</th></tr>
<tr><td>Convolution</td><td>kernel K×K×C<sub>in</sub> เรียนได้ · ต่อเฉพาะที่ + แชร์น้ำหนัก → feature maps</td></tr>
<tr><td>Activation (ReLU)</td><td>max(0, z) เพิ่มความไม่เชิงเส้น · gradient = 1 เมื่อ z &gt; 0 ช่วยลด vanishing gradient</td></tr>
<tr><td>Pooling</td><td>max/average ย่อขนาด · ไม่มีพารามิเตอร์ · ทนการเลื่อนเล็กน้อย</td></tr>
<tr><td>Batch normalisation</td><td>normalise แต่ละ channel ต่อ mini-batch → ฝึกเสถียร เร็ว ใช้ learning rate สูงได้</td></tr>
<tr><td>Dropout</td><td>สุ่มปิดหน่วยระหว่างฝึก ไม่ให้พึ่งพากัน → ลด overfitting</td></tr>
<tr><td>Flatten / Global Avg Pool</td><td>map → เวกเตอร์ · GAP เก็บ 1 ค่าต่อ channel: พารามิเตอร์น้อย รับภาพได้ทุกขนาด</td></tr>
<tr><td>Fully connected + softmax</td><td>คะแนนคลาส → ความน่าจะเป็น · ฝึกด้วย cross-entropy</td></tr>
<tr><td>∑ ซ้อนเป็น block</td><td>Conv → BN → ReLU (→ pool) ซ้ำหลายรอบ · channel เพิ่มขึ้นขณะที่ map หดลง</td></tr>
</table></div>
<div class="formula">class SimpleCNN(nn.Module):
    def __init__(self, n_classes=10):
        super().__init__()
        self.features = nn.Sequential(                 # backbone
            nn.Conv2d(3, 16, 3, padding=1), nn.ReLU(),
            nn.MaxPool2d(2),                           # 32 → 16
            nn.Conv2d(16, 32, 3, padding=1), nn.ReLU(),
            nn.MaxPool2d(2))                           # 16 → 8
        self.head = nn.Linear(8 * 8 * 32, n_classes)   # head
    def forward(self, x):                              # x: B×3×32×32
        return self.head(self.features(x).flatten(1))

for x, y in train_loader:
    loss = nn.functional.cross_entropy(model(x), y)    # softmax อยู่ข้างใน
    opt.zero_grad(); loss.backward(); opt.step()</div>
<div class="callout key"><span class="lb">จำ</span>วงรอบการฝึกไม่เคยเปลี่ยน — เปลี่ยนแค่โมเดลข้างใน · งานใหม่ เปลี่ยนแค่ head · CNN สมัยใหม่ = การจัดเรียงใหม่ของชิ้นส่วนเดิม</div>`
    },
    {
      id: 'tasks', title: '6) 4 งานหลักของ Vision: classification · detection · segmentation',
      html: `
<figure class="slide"><img src="img/L11_p17.jpg" alt="four tasks"><figcaption>สไลด์หน้า 17 · งานต่างกันที่ output — backbone ใช้ร่วมกันได้</figcaption></figure>
<div class="tblwrap"><table class="tbl">
<tr><th>งาน</th><th>ตอบคำถาม</th><th>Head · Output shape</th><th>Label ที่ต้องใช้</th><th>Loss</th><th>โมเดล</th></tr>
<tr><td>Classification</td><td>ในภาพมีอะไร</td><td>GAP → FC(C) → softmax · C</td><td>1 class ต่อภาพ</td><td>cross-entropy</td><td>ResNet, EfficientNet, ViT</td></tr>
<tr><td>Object detection</td><td>อะไร อยู่ตรงไหน (ต่อวัตถุ)</td><td>box regressor + class ต่อ grid/anchor แล้ว NMS · N×(4+1+C)</td><td>box + class ทุกวัตถุ</td><td>box (L1/IoU) + CE</td><td>YOLO, SSD, Faster R-CNN, DETR</td></tr>
<tr><td>Semantic segmentation</td><td>pixel นี้คลาสอะไร</td><td>encoder–decoder + 1×1 conv · C×H×W</td><td>mask ทุก pixel</td><td>pixel-wise CE, Dice</td><td>FCN, U-Net, DeepLab</td></tr>
<tr><td>Instance segmentation</td><td>pixel ไหนเป็นวัตถุชิ้นไหน</td><td>detection head + mask branch · N×(box, class, mask)</td><td>polygon/mask ทุก instance</td><td>box + class + mask BCE</td><td>Mask R-CNN, YOLO-seg</td></tr>
</table></div>
<p>ต้นทุน annotation ต่อภาพ: label &lt; boxes &lt; pixel masks &lt; instance masks — <b>เลือกงานจากคำถามที่ต้องตอบ แล้ววางงบ label ก่อนเลือกโมเดล</b></p>
<h3>Object detection (หน้า 19)</h3>
<figure class="slide"><img src="img/L11_p19.jpg" alt="detection"><figcaption>สไลด์หน้า 19 · backbone + detection head ทำนายกล่องจำนวนมาก แล้ว NMS คัดเหลือกล่องสุดท้าย</figcaption></figure>
<ul>
<li><b>One-stage</b> (YOLO, SSD, RetinaNet): ผ่านครั้งเดียว ทำนาย box บนกริด/anchor หนาแน่น → เร็ว real-time · แต่ละ cell ทำนาย [x, y, w, h, obj, p₁…p_C]</li>
<li><b>Two-stage</b> (R-CNN → Faster R-CNN): Region Proposal Network เสนอ box ก่อน แล้ว head ที่สองจำแนกและปรับ → แม่นกว่า</li>
<li><b>NMS (Non-maximum suppression)</b>: เก็บ box คะแนนสูงสุด ทิ้ง box อื่นที่ทับกันเกิน IoU threshold</li>
</ul>
<div class="demo" id="l11-iou"><h4>🔧 IoU + การตัดสินใจของ NMS</h4>
<div class="row"><label>Box A (x1,y1,x2,y2) <input type="text" id="io-a" value="0,0,4,4" style="width:120px"></label><label>Box B <input type="text" id="io-b" value="2,2,6,6" style="width:120px"></label><label>NMS threshold <input type="number" id="io-t" value="0.5" step="0.05"></label><button id="io-go">คำนวณ</button></div>
<canvas id="io-cv" width="300" height="300"></canvas><div class="out" id="io-out"></div></div>
<h3>Semantic &amp; Instance segmentation (หน้า 20–21)</h3>
<div class="grid2"><figure class="slide"><img src="img/L11_p20.jpg" alt="semantic"><figcaption>สไลด์หน้า 20 · encoder–decoder (U-Net) ให้คะแนน C คลาสต่อ pixel</figcaption></figure><figure class="slide"><img src="img/L11_p21.jpg" alt="instance"><figcaption>สไลด์หน้า 21 · instance: mask แยกทุกวัตถุ</figcaption></figure></div>
<ol class="steps">
<li><b>Encoder</b> (conv + pool) ย่อ H×W เพื่อได้ context อย่างประหยัด</li>
<li><b>Decoder</b> ใช้ <b>transposed convolution</b> ขยายกลับเป็น H×W</li>
<li><b>Skip connections (U-Net)</b> ส่งรายละเอียดจาก encoder ไป decoder ให้ขอบคม</li>
<li><b>1×1 conv</b> ให้ C คะแนนต่อ pixel → argmax · loss = CE หรือ Dice ทุก pixel</li>
</ol>
<p><b>Semantic</b> บอก “pixel หมา pixel แมว” แต่นับตัวไม่ได้ · <b>Instance</b> บอก dog #1, dog #2, cat #1 นับได้ (Mask R-CNN = Faster R-CNN + mask branch) · <b>Panoptic</b> = instance สำหรับ “things” + semantic สำหรับ “stuff” เช่น ฟ้า ถนน</p>
<div class="demo" id="l11-task"><h4>🔧 เลือกงานให้ถูกกับคำถาม</h4>
<div class="row"><select id="tk-sel" style="width:auto">
<option value="0">นับรถในลานจอด</option><option value="1">วัดพื้นที่เนื้องอกในภาพ CT</option><option value="2">บอกว่าภาพ X-ray เป็นปอดอักเสบหรือไม่</option><option value="3">แยกเซลล์แต่ละเซลล์ที่ติดกันในภาพกล้องจุลทรรศน์ แล้วนับจำนวน</option><option value="4">รถไร้คนขับต้องรู้ทุก pixel ว่าเป็นถนน/ทางเท้า และนับคนเดินถนนด้วย</option><option value="5">ค้นหาคลาสใหม่ “แมวน้ำ” โดยไม่มีภาพ label เลย</option></select><button id="tk-go">ดูคำตอบ</button></div><div class="out" id="tk-out"></div></div>`
    },
    {
      id: 'imagenet', title: '7) ImageNet: 8 ปีจาก feature มือ สู่ความแม่นเหนือมนุษย์',
      html: `
<figure class="slide"><img src="img/L11_p23.jpg" alt="imagenet"><figcaption>สไลด์หน้า 23 · top-5 error บน ImageNet 2010–2017 (8 ปี; ภาพตัดขอบขวา: SENet 2017 = 2.3%) · เส้นประแดง = มนุษย์ ≈ 5.1%</figcaption></figure>
<div class="tblwrap"><table class="tbl">
<tr><th>ปี</th><th>โมเดล</th><th>สิ่งที่ปลดล็อก</th></tr>
<tr><td>2012</td><td><b>AlexNet</b></td><td>ReLU + GPU + dropout + 1.2M ภาพ: error <b>16.4%</b> vs อันดับสอง 26.2% → เริ่มยุค deep learning</td></tr>
<tr><td>2014</td><td><b>VGG / GoogLeNet</b></td><td>ซ้อน conv 3×3 ลึก · inception module เพื่อประสิทธิภาพ</td></tr>
<tr><td>2015</td><td><b>ResNet</b></td><td>skip connection → ฝึก <b>152 ชั้น</b> ได้ · <b>3.6%</b> ต่ำกว่ามนุษย์ (<b>≈ 5.1%</b>)</td></tr>
<tr><td>2017→</td><td><b>SENet · ViT (2020) · ConvNeXt (2022)</b></td><td>channel attention · Transformer บนภาพ · CNN สมัยใหม่</td></tr>
</table></div>
<p class="mut">ค่า top-5 error ในกราฟ: 2010 NEC (SIFT + SVM) 28.2% · 2011 XRCE (Fisher vectors) 25.8% · 2012 AlexNet 16.4% (8 ชั้น) · 2013 ZFNet 11.7% (8 ชั้น) · 2014 VGG 7.3% (19 ชั้น) / GoogLeNet 6.7% (22 ชั้น) · 2015 ResNet 3.6% (152 ชั้น — ต่ำกว่ามนุษย์เป็นครั้งแรก) · 2016 Trimps-Soushen ensemble 3.0% · 2017 SENet (attention) 2.3% · มนุษย์ ≈ 5.1% (เส้นประแดง)</p>
<p>ImageNet (ILSVRC): <b>1,000 คลาส · 1.28 ล้านภาพ train · 50k validation · 100k test</b> · แต่ละรุ่นกำจัดอุปสรรคหนึ่งอย่าง: ข้อมูล → การคำนวณ → vanishing gradient → ความลึก</p>`
    },
    {
      id: 'paradigms', title: '8) Learning paradigms: มี label กี่ภาพ?',
      html: `
<figure class="slide"><img src="img/L11_p25.jpg" alt="paradigms"><figcaption>สไลด์หน้า 25 · เรียงตามจำนวน label ที่ต้องใช้ · SSL เป็นฐานรากของทั้งหมด</figcaption></figure>
<div class="tblwrap"><table class="tbl">
<tr><th>Paradigm</th><th>Label</th><th>วิธี</th><th>ตัวอย่าง</th></tr>
<tr><td>Supervised</td><td>ทุกภาพ</td><td>เรียน feature + head จากศูนย์</td><td>ImageNet 1.28M labels</td></tr>
<tr><td>Transfer learning</td><td>หลักร้อย–พัน</td><td>ใช้ backbone ที่ pretrain แล้ว fine-tune</td><td>X-ray 500 ภาพ</td></tr>
<tr><td>Few-shot</td><td>K = 1–5 ต่อคลาสใหม่</td><td>เทียบ query กับ support examples ใน embedding space</td><td>prototypes</td></tr>
<tr><td>Zero-shot</td><td>ไม่มีเลยสำหรับคลาสใหม่</td><td>จับคู่ภาพกับคำบรรยายคลาสเป็นข้อความ</td><td>CLIP</td></tr>
</table></div>
<figure class="slide"><img src="img/L11_p26.jpg" alt="supervised vs ssl"><figcaption>สไลด์หน้า 26 · Supervised (มนุษย์ให้เป้า) vs Self-supervised (ข้อมูลสอนตัวเอง)</figcaption></figure>
<div class="callout def"><span class="lb">Self-supervised learning (SSL)</span>เรียน feature ทั่วไปจากภาพ <b>ไม่มี label</b> หลายล้านภาพ โดยสร้างเป้าเอง: <b>Contrastive / self-distillation</b> (SimCLR, MoCo, DINO) — สอง view ของภาพเดียวกันต้องใกล้กัน ภาพอื่นต้องห่าง · <b>Masked image modelling</b> (MAE) — ปิด ~75% ของ patch แล้วให้สร้างคืน · backbone ที่ได้ใช้ต่อกับ transfer, few-shot, zero-shot</div>
<h3>Transfer learning (หน้า 27)</h3>
<figure class="slide"><img src="img/L11_p27.jpg" alt="transfer"><figcaption>สไลด์หน้า 27 · copy weights จาก ImageNet → freeze ชั้นต้น → head ใหม่ C คลาส</figcaption></figure>
<div class="formula">m = torchvision.models.resnet18(weights="IMAGENET1K_V1")
for p in m.parameters(): p.requires_grad = False      # freeze
m.fc = nn.Linear(m.fc.in_features, n_classes)         # new head</div>
<div class="tblwrap"><table class="tbl">
<tr><th>อะไรต้อง fine-tune?</th><th>คล้าย ImageNet</th><th>ต่างมาก (เช่น X-ray)</th></tr>
<tr><td>ข้อมูลน้อย</td><td>freeze backbone ฝึกแค่ head</td><td>freeze ชั้นต้น fine-tune ชั้นหลัง</td></tr>
<tr><td>ข้อมูลมาก</td><td>fine-tune ทั้งหมดด้วย learning rate ต่ำ</td><td>fine-tune ทั้งหมด (หรือฝึกใหม่)</td></tr>
</table></div>
<div class="callout key"><span class="lb">ทำไมได้ผล</span>ชั้นต้นเรียน feature ทั่วไป (ขอบ ลายผิว) ที่ใช้ได้กับทุกงาน มีแค่ head ที่เฉพาะงาน · ใช้ <b>learning rate ต่ำ</b> ตอน fine-tune เพราะกำลังปรับน้ำหนักที่ดีอยู่แล้ว</div>
<figure class="slide"><img src="img/L11_p28.jpg" alt="zero few shot"><figcaption>สไลด์หน้า 28 · ซ้าย: CLIP zero-shot · ขวา: few-shot ด้วย prototypes (3-way 5-shot)</figcaption></figure>
<div class="grid2"><div class="callout def"><span class="lb">Zero-shot · CLIP</span>image encoder + text encoder → cosine similarity กับ “a photo of a cat” (0.92), dog (0.06), car (0.02) → คลาสใหม่แค่เขียน prompt ใหม่ ไม่ต้อง retrain</div><div class="callout def"><span class="lb">Few-shot · Prototypes</span>prototype = ค่าเฉลี่ย embedding ของ support 5 ภาพต่อคลาส → query ไปอยู่คลาสของ prototype ที่ใกล้ที่สุด ไม่ต้องฝึกน้ำหนักใหม่</div></div>
<details class="reveal"><summary>ลองคิดก่อน: มี X-ray 300 ภาพ 3 คลาส ควรใช้ paradigm ไหน freeze อะไร?</summary><b>Transfer learning</b>: ใช้ backbone ที่ pretrain บน ImageNet + head ใหม่ 3 คลาส · เนื่องจาก X-ray ต่างจาก ImageNet มากและข้อมูลน้อย → freeze ชั้นต้น fine-tune ชั้นหลังด้วย learning rate ต่ำ (สไลด์หน้า 35 Q3)</details>`
    },
    {
      id: 'beyond', title: '9) ResNet · Data augmentation · ViT · Foundation models',
      html: `
<figure class="slide"><img src="img/L11_p31.jpg" alt="resnet" style="max-width:420px"><figcaption>สไลด์หน้า 31 · residual block: y = F(x) + x</figcaption></figure>
<ol class="steps">
<li><b>ปริศนา</b>: plain network ลึกกว่า ~20 ชั้นฝึกได้แย่ลง — training error สูงขึ้น (จึง <b>ไม่ใช่ overfitting</b>)</li>
<li><b>วิธีแก้</b>: แต่ละ block เรียนแค่ “ส่วนต่าง” F(x) ส่วนเส้นทาง identity ส่ง x ผ่านไปตรง ๆ</li>
<li><b>ทำไมได้ผล</b>: ∂y/∂x = ∂F/∂x + 1 → “+1” คือทางด่วนให้ gradient ไหลถึงชั้นต้นโดยไม่หาย และการ “ไม่ทำอะไร” ทำได้ง่าย (F → 0)</li>
<li><b>ผล</b>: ฝึกได้ 152 ชั้น top-5 error 3.6% · skip connection ใช้ต่อใน U-Net, Transformer, diffusion</li>
</ol>
<figure class="slide"><img src="img/L11_p32.jpg" alt="augmentation"><figcaption>สไลด์หน้า 32 · original, horizontal flip, random crop, rotate, colour jitter, cutout</figcaption></figure>
<div class="callout warn"><span class="lb">Data augmentation</span>กฎข้อเดียว: <b>label ต้องคงเดิมหลังแปลงภาพ</b> — สอน invariance ที่เรารู้อยู่แล้ว · พังเมื่อ: flip “6” กลายเป็น “9” · flip ป้ายจราจรหรือ X-ray เปลี่ยนความหมาย · PyTorch: RandomResizedCrop, RandomHorizontalFlip, ColorJitter, RandomErasing (สุ่มใหม่ทุก epoch) — เป็น regularisation ที่มักคุ้มกว่าการขยายโมเดล</div>
<figure class="slide"><img src="img/L11_p33.jpg" alt="ViT"><figcaption>สไลด์หน้า 33 · Vision Transformer: ภาพเป็นลำดับของ patch</figcaption></figure>
<div class="tblwrap"><table class="tbl">
<tr><th></th><th>CNN</th><th>Vision Transformer</th></tr>
<tr><td>การทำงานหลัก</td><td>convolution เฉพาะที่ แชร์ kernel</td><td>self-attention ระหว่างทุก patch</td></tr>
<tr><td>สมมติฐานในตัว</td><td>locality + translation (prior แรง)</td><td>prior น้อย เรียนความสัมพันธ์จากข้อมูล</td></tr>
<tr><td>ข้อมูลที่ต้องใช้</td><td>ทำงานดีกับข้อมูลเล็ก–กลาง</td><td>ต้อง pretrain ขนาดใหญ่</td></tr>
<tr><td>Receptive field</td><td>โตตามความลึก</td><td>เห็นทั้งภาพตั้งแต่ชั้นแรก</td></tr>
</table></div>
<p>ViT: ตัดภาพเป็น patch → flatten + linear projection + position embedding → Transformer encoder → MLP head — ยังเป็นสูตร backbone → head เหมือนเดิม (เชื่อมกับ attention ใน L12)</p>
<div class="tblwrap"><table class="tbl">
<tr><th>Foundation model</th><th>ทำอะไรได้</th></tr>
<tr><td>CLIP (2021)</td><td>pretrain คู่ภาพ–ข้อความ ~400M คู่ → zero-shot classification และ retrieval</td></tr>
<tr><td>DINOv2 (2023)</td><td>feature ViT แบบ self-supervised ใช้ได้ทั้งที่ freeze + linear head</td></tr>
<tr><td>Grounding DINO / YOLO-World</td><td>พิมพ์ชื่อคลาสแล้วได้ box (open-vocabulary detection, zero-shot)</td></tr>
<tr><td>Segment Anything (SAM, 2023)</td><td>mask จากการคลิกจุด/กล่อง ฝึกบน 1.1B masks</td></tr>
<tr><td>SAM 2 (2024) · SAM 3 (2025)</td><td>ติดตาม mask ในวิดีโอ · segmentation จาก text concept</td></tr>
</table></div>
<p>วิธีใช้: <b>freeze → probe → fine-tune</b> คือ paradigm เดิมของส่วนที่ 8 บน backbone ขนาดใหญ่มาก — ปัจจุบันโปรเจกต์ส่วนใหญ่เริ่มจากเลือก pretrained model แล้วตัดสินใจว่าจะเพิ่ม head และ label อะไร</p>`
    },
    {
      id: 'summary', title: '10) สรุป: ทุกระบบภาพคือ 4 การตัดสินใจ',
      html: `
<div class="grid2">
<div class="card"><b>DATA</b> — ภาพ → tensor B×C×H×W, normalise, augment</div>
<div class="card"><b>BACKBONE</b> — เรียน feature: conv · ReLU · pool · BN (หรือ ViT)</div>
<div class="card"><b>HEAD</b> — กำหนดงาน: class · boxes · pixel mask · instance masks</div>
<div class="card"><b>LABELS</b> — กำหนด paradigm: full · some · few · none (+ self-supervised)</div></div>
<h3>Pause &amp; predict (สไลด์หน้า 35)</h3>
<details class="reveal"><summary>Q1: input 64×64×3 ผ่าน 32 filters 3×3, P = 1, S = 2 → output size? พารามิเตอร์?</summary>O = (64 − 3 + 2)/2 + 1 = 32.5 → <b>32</b> → <b>32×32×32</b> · params = (3·3·3 + 1)·32 = <b>896</b></details>
<details class="reveal"><summary>Q2: นับรถในลานจอด vs วัดพื้นที่เนื้องอกใน CT ใช้งาน head และ label อะไร?</summary>รถ: <b>detection</b> — box head, box labels · เนื้องอก: <b>segmentation</b> — pixel-wise head, mask labels</details>
<details class="reveal"><summary>Q3: มี X-ray 300 ภาพ 3 คลาส ใช้ paradigm ไหน freeze อะไร?</summary><b>Transfer learning</b>: ImageNet backbone + head ใหม่ 3 คลาส · freeze ชั้นต้น fine-tune ชั้นหลังด้วย LR ต่ำ</details>
<details class="reveal"><summary>Q4: ทำไม ResNet ฝึก 152 ชั้นได้ ทั้งที่ plain net ติดที่ ~20 ชั้น?</summary>identity skip ให้ ∂y/∂x = ∂F/∂x + 1 gradient จึงไปถึงชั้นต้นได้โดยไม่หายไป</details>
<div class="callout warn"><span class="lb">กับดักข้อสอบที่พบบ่อย</span>① พารามิเตอร์ conv ไม่ขึ้นกับขนาดภาพ/stride/padding ② ลืม +1 (bias) ในสูตร params ③ ลืมปัดลงในสูตร O ④ pooling มี 0 พารามิเตอร์ ⑤ semantic segmentation นับวัตถุไม่ได้ ⑥ zero-shot ยังต้อง pretrain (CLIP) ⑦ deep plain net แย่ลง = ปัญหา optimization ไม่ใช่ overfitting ⑧ fine-tune ใช้ learning rate ต่ำ</div>`
    }
  ],
  quiz: [
    { q: 'ภาพสี 224×224 แบบ RGB มีตัวเลขทั้งหมดกี่ค่า', c: ['50,176', '150,528', '224,224', '672'], a: 1, e: '224 × 224 × 3 = 150,528' },
    { q: 'PyTorch คาดหวัง layout ของ mini-batch ภาพแบบใด', c: ['B × H × W × C', 'H × W × C', 'B × C × H × W', 'C × B × H × W'], a: 2, e: 'PyTorch ใช้ B×C×H×W ส่วน NumPy/OpenCV ใช้ H×W×C (และ OpenCV เป็น BGR)' },
    { q: 'Input 5×5 kernel 3×3 padding 0 stride 1 จะได้ feature map ขนาดเท่าใด', c: ['5×5', '3×3', '2×2', '4×4'], a: 1, e: 'O = (5 − 3 + 0)/1 + 1 = 3' },
    { q: 'I = 32, K = 3, P = 1, S = 2 ได้ output ขนาดเท่าใด', c: ['32', '16', '15', '17'], a: 1, e: '(32 − 3 + 2)/2 + 1 = 16.5 → ปัดลงเป็น 16' },
    { q: 'Max pool 2×2 stride 2 บน [1 3 2 1; 4 8 1 0; 2 1 7 4; 0 3 2 9] ได้ผลใด', c: ['[4 1; 1.5 5.5]', '[8 2; 3 9]', '[8 1; 3 9]', '[1 0; 0 2]'], a: 1, e: 'หาค่ามากสุดของแต่ละบล็อก 2×2: 8, 2, 3, 9 ส่วน [4 1; 1.5 5.5] คือ average pool' },
    { q: 'kernel Sobel-x [−1 0 1; −2 0 2; −1 0 1] ใช้หาอะไร', c: ['ขอบแนวนอน', 'ขอบแนวตั้ง', 'เบลอภาพ', 'เพิ่มความสว่าง'], a: 1, e: 'Sobel-x ตอบสนองต่อการเปลี่ยนความเข้มตามแกน x = ขอบแนวตั้ง (หน้า 8)' },
    { q: 'ชั้น Conv รับ 3 channel ออก 64 channel kernel 3×3 มีพารามิเตอร์กี่ตัว', c: ['576', '1,728', '1,792', '1,856'], a: 2, e: '(3·3·3 + 1)·64 = 28 · 64 = 1,792 (อย่าลืม bias)' },
    { q: 'สองคุณสมบัติที่ทำให้ convolution มีพารามิเตอร์น้อยกว่า fully connected มาก คือข้อใด', c: ['dropout และ batch norm', 'local connectivity และ weight sharing', 'softmax และ cross-entropy', 'padding และ stride'], a: 1, e: 'locality → ต่อเฉพาะหน้าต่าง · translation → ใช้ kernel เดียวทุกตำแหน่ง (หน้า 11)' },
    { q: 'ใน SimpleCNN ของสไลด์ (32×32×3 → … → 10) ส่วนใดมีพารามิเตอร์มากที่สุด', c: ['conv1', 'conv2', 'FC head', 'max-pool'], a: 2, e: 'FC head (2,048+1)×10 = 20,490 ≈ 80% ของ 25,578 · pooling มี 0' },
    { q: 'ต้องการ “นับจำนวนรถในลานจอด” ควรใช้งานแบบใด', c: ['Image classification', 'Object detection', 'Semantic segmentation', 'Zero-shot classification'], a: 1, e: 'ต้องรู้ตำแหน่งและแยกวัตถุทีละคัน → detection (box head, box labels)' },
    { q: 'ข้อใดถูกต้องเกี่ยวกับ semantic segmentation', c: ['ให้ 1 label ต่อภาพ', 'ให้ label ทุก pixel แต่แยกวัตถุชิ้นต่าง ๆ ของคลาสเดียวกันไม่ได้', 'ให้ box ต่อวัตถุ', 'ไม่ต้องใช้ label ในการฝึก'], a: 1, e: 'semantic: “pixel หมา” แต่ไม่รู้ว่าหมาตัวไหน · instance segmentation จึงนับวัตถุได้' },
    { q: 'มี X-ray 300 ภาพ 3 คลาส วิธีที่เหมาะสมที่สุดคือ', c: ['ฝึก CNN จากศูนย์', 'Transfer learning: backbone pretrained + head ใหม่ 3 คลาส fine-tune ด้วย LR ต่ำ', 'ใช้ K-Means', 'เพิ่ม learning rate ให้สูงมาก'], a: 1, e: 'ข้อมูลน้อย → reuse backbone, freeze ชั้นต้น fine-tune ชั้นหลังด้วย LR ต่ำ (หน้า 27, 35)' },
    { q: 'ทำไม ResNet ฝึกได้ลึกถึง 152 ชั้น', c: ['เพราะใช้ dropout มาก', 'เพราะ skip connection ทำให้ ∂y/∂x = ∂F/∂x + 1 gradient ไม่หาย', 'เพราะไม่มี activation', 'เพราะใช้ภาพขนาดเล็ก'], a: 1, e: 'identity path เป็นทางด่วนของ gradient (หน้า 31)' },
    { q: 'CLIP จำแนกคลาสใหม่ได้โดยไม่ retrain ด้วยวิธีใด', c: ['สุ่มเดา', 'เทียบ cosine similarity ระหว่าง embedding ภาพกับ embedding ของข้อความ prompt', 'ใช้ NMS', 'เพิ่ม FC head ใหม่ทุกครั้ง'], a: 1, e: 'zero-shot: เขียน prompt “a photo of a …” ใหม่ แล้วเลือกข้อความที่ใกล้ภาพที่สุด (หน้า 28)' }
  ],
  init(root) {
    const $ = s => root.querySelector(s), f = TUTOR.fmt;
    const parseM = t => t.trim().split(/\n+/).map(l => TUTOR.nums(l)).filter(r => r.length);
    /* convolution calculator */
    let conv = null;
    const cvRun = () => {
      const X = parseM($('#cv-in').value), K = parseM($('#cv-k').value);
      const S = Math.max(1, +$('#cv-s').value || 1), P = Math.max(0, +$('#cv-p').value || 0), b = +$('#cv-b').value || 0;
      const H = X.length, W = X[0].length, kh = K.length, kw = K[0].length;
      const Xp = Array.from({ length: H + 2 * P }, (_, i) => Array.from({ length: W + 2 * P }, (_, j) => (i >= P && i < H + P && j >= P && j < W + P) ? X[i - P][j - P] : 0));
      const OH = Math.floor((H - kh + 2 * P) / S) + 1, OW = Math.floor((W - kw + 2 * P) / S) + 1;
      if (OH < 1 || OW < 1) { $('#cv-out').textContent = 'kernel ใหญ่กว่า input (หลัง pad) — ปรับค่าใหม่'; $('#cv-grids').innerHTML = ''; return; }
      const Y = Array.from({ length: OH }, (_, i) => Array.from({ length: OW }, (_, j) => { let s = b; for (let m = 0; m < kh; m++) for (let n = 0; n < kw; n++) s += Xp[i * S + m][j * S + n] * K[m][n]; return s; }));
      const wMsg = (W !== H || kw !== kh) ? ` · กว้าง: (${W} − ${kw} + ${2 * P})/${S} + 1` : '';
      conv = { Xp, K, Y, S, P, b, kh, kw, H, W, sizeMsg: `O = (I − K + 2P)/S + 1 = (${H} − ${kh} + ${2 * P})/${S} + 1${wMsg} → ${OH}×${OW} (ปัดลง)` };
      cvDraw(0, 0);
    };
    const cvDraw = (oi, oj) => {
      const { Xp, K, Y, S, P, b, kh, kw } = conv;
      const inWin = (i, j) => i >= oi * S && i < oi * S + kh && j >= oj * S && j < oj * S + kw;
      const tIn = '<table class="cvgrid">' + Xp.map((r, i) => '<tr>' + r.map((v, j) => { const pad = i < P || j < P || i >= Xp.length - P || j >= r.length - P; return `<td class="${pad ? 'pad ' : ''}${inWin(i, j) ? 'hl' : ''}">${v}</td>`; }).join('') + '</tr>').join('') + '</table>';
      const tK = '<table class="cvgrid">' + K.map(r => '<tr>' + r.map(v => `<td>${v}</td>`).join('') + '</tr>').join('') + '</table>';
      const tY = '<table class="cvgrid">' + Y.map((r, i) => '<tr>' + r.map((v, j) => `<td class="oc ${i === oi && j === oj ? 'sel' : ''}" data-i="${i}" data-j="${j}">${f(v, 2)}</td>`).join('') + '</tr>').join('') + '</table>';
      $('#cv-grids').innerHTML = `<div style="display:inline-block"><div class="cvcap">Input${P ? ' (pad ' + P + ')' : ''}</div>${tIn}</div><div style="display:inline-block"><div class="cvcap">Kernel</div>${tK}</div><div style="display:inline-block"><div class="cvcap">Feature map</div>${tY}</div>`;
      const terms = []; for (let m = 0; m < kh; m++) for (let n = 0; n < kw; n++) terms.push(`${Xp[oi * S + m][oj * S + n]}·(${K[m][n]})`);
      $('#cv-out').textContent = `${conv.sizeMsg}\nช่อง output [${oi},${oj}] = ${terms.join(' + ')}${b ? ' + ' + b : ''}\n= ${f(Y[oi][oj], 3)}\n(คลิกช่องในตาราง output เพื่อดูช่องอื่น)`;
      $('#cv-grids').querySelectorAll('td.oc').forEach(td => td.onclick = () => cvDraw(+td.dataset.i, +td.dataset.j));
    };
    $('#cv-go').onclick = cvRun; cvRun();
    /* kernel effects on canvas */
    const KS = { id: [[0, 0, 0], [0, 1, 0], [0, 0, 0]], blur: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].map(r => r.map(v => v / 9)), sharp: [[0, -1, 0], [-1, 5, -1], [0, -1, 0]], sx: [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]], sy: [[-1, -2, -1], [0, 0, 0], [1, 2, 1]], lap: [[0, 1, 0], [1, -4, 1], [0, 1, 0]] };
    const N = 64;
    const makeImg = noise => { const im = []; for (let y = 0; y < N; y++) { const row = []; for (let x = 0; x < N; x++) { let v = 30 + x * 1.2; if (y >= 10 && y < 30 && x >= 8 && x < 28) v = 220; const dx = x - 44, dy = y - 42; if (dx * dx + dy * dy < 144) v = 60; if (y >= 50 && y < 56 && x >= 6 && x < 34) v = 250; if (noise) v += (Math.random() - 0.5) * 30; row.push(Math.max(0, Math.min(255, v))); } im.push(row); } return im; };
    const paint = (cv, im) => { const ctx = cv.getContext('2d'), d = ctx.createImageData(N, N); for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const v = Math.max(0, Math.min(255, im[y][x])), k = (y * N + x) * 4; d.data[k] = d.data[k + 1] = d.data[k + 2] = v; d.data[k + 3] = 255; } ctx.putImageData(d, 0, 0); };
    let baseImg = null;
    const knRun = regen => {
      if (regen || !baseImg) baseImg = makeImg($('#kn-noise').checked);
      const name = $('#kn-sel').value, Kk = KS[name], edge = name === 'sx' || name === 'sy' || name === 'lap';
      const out = []; for (let y = 0; y < N; y++) { const row = []; for (let x = 0; x < N; x++) { let s = 0; for (let m = -1; m <= 1; m++) for (let n = -1; n <= 1; n++) { const yy = y + m, xx = x + n; const v = (yy < 0 || yy >= N || xx < 0 || xx >= N) ? 0 : baseImg[yy][xx]; s += v * Kk[m + 1][n + 1]; } row.push(edge ? Math.abs(s) : s); } out.push(row); }
      paint($('#kn-a'), baseImg); paint($('#kn-b'), out);
      const sum = Kk.flat().reduce((a, v) => a + v, 0);
      $('#kn-out').textContent = `ซ้าย: ภาพต้นฉบับ · ขวา: หลังใส่ kernel ${name} (same padding ด้วย 0)\nkernel = ${JSON.stringify(Kk.map(r => r.map(v => +v.toFixed(3))))}\nผลรวมน้ำหนัก = ${f(sum, 3)} ${edge ? '→ แสดง |ผลลัพธ์| บริเวณเรียบจึงมืด ขอบสว่าง' : ''}`;
    };
    $('#kn-sel').onchange = () => knRun(false); $('#kn-noise').onchange = () => knRun(true); $('#kn-go').onclick = () => knRun(true); knRun(true);
    /* pooling */
    const pk = () => {
      const M = parseM($('#pk-in').value), H = M.length, W = M[0].length; const mx = [], av = [];
      for (let i = 0; i + 1 < H; i += 2) { const r1 = [], r2 = []; for (let j = 0; j + 1 < W; j += 2) { const b = [M[i][j], M[i][j + 1], M[i + 1][j], M[i + 1][j + 1]]; r1.push(Math.max(...b)); r2.push(b.reduce((a, v) => a + v, 0) / 4); } mx.push(r1); av.push(r2); }
      $('#pk-out').textContent = `Max pool  = [${mx.map(r => r.join(' ')).join(' ; ')}]\nAvg pool  = [${av.map(r => r.map(v => f(v, 3)).join(' ')).join(' ; ')}]\nขนาด ${H}×${W} → ${mx.length}×${mx[0] ? mx[0].length : 0} · พารามิเตอร์ = 0`;
    };
    $('#pk-go').onclick = pk; pk();
    /* shape tracer */
    const presets = { simple: ['32,32,3', 'conv 3 16 1 1\npool 2 2\nconv 3 32 1 1\npool 2 2\nflatten\nfc 10'], lenet: ['32,32,1', 'conv 5 6 0 1\npool 2 2\nconv 5 16 0 1\npool 2 2\nflatten\nfc 120\nfc 84\nfc 10'], q1: ['64,64,3', 'conv 3 32 1 2'], gap: ['32,32,3', 'conv 3 16 1 1\npool 2 2\nconv 3 32 1 1\npool 2 2\ngap\nfc 10'] };
    const tr = () => {
      let [h, w, c] = TUTOR.nums($('#tr-in').value); let vec = null, total = 0;
      const lines = [`input → ${h}×${w}×${c}`];
      $('#tr-layers').value.trim().split(/\n+/).forEach(l => {
        const t = l.trim().split(/\s+/), k = t[0].toLowerCase(), a = t.slice(1).map(Number);
        if (k === 'conv') { const [K, co, P = 0, S = 1] = a; const nh = Math.floor((h - K + 2 * P) / S) + 1, nw = Math.floor((w - K + 2 * P) / S) + 1; const p = (K * K * c + 1) * co; total += p; lines.push(`${l.padEnd(16)} → ${nh}×${nw}×${co}   params = (${K}²·${c}+1)·${co} = ${p.toLocaleString()}   [O = (${h}−${K}+${2 * P})/${S}+1]`); h = nh; w = nw; c = co; }
        else if (k === 'pool') { const [K, S = K] = a; h = Math.floor((h - K) / S) + 1; w = Math.floor((w - K) / S) + 1; lines.push(`${l.padEnd(16)} → ${h}×${w}×${c}   params = 0`); }
        else if (k === 'gap') { vec = c; lines.push(`${l.padEnd(16)} → ${c}   params = 0 (เฉลี่ย 1 ค่าต่อ channel)`); }
        else if (k === 'flatten') { vec = h * w * c; lines.push(`${l.padEnd(16)} → ${vec}   params = 0`); }
        else if (k === 'fc') { const n = a[0], nin = vec ?? h * w * c; const p = (nin + 1) * n; total += p; lines.push(`${l.padEnd(16)} → ${n}   params = (${nin}+1)·${n} = ${p.toLocaleString()}`); vec = n; }
        else if (l.trim()) lines.push(`${l}  ← ไม่รู้จักคำสั่งนี้`);
      });
      lines.push(`\nรวมพารามิเตอร์ = ${total.toLocaleString()}`);
      $('#tr-out').textContent = lines.join('\n');
    };
    root.querySelectorAll('#l11-trace [data-preset]').forEach(b => b.onclick = () => { const p = presets[b.dataset.preset]; $('#tr-in').value = p[0]; $('#tr-layers').value = p[1]; tr(); });
    $('#tr-go').onclick = tr; $('#tr-in').value = presets.simple[0]; $('#tr-layers').value = presets.simple[1]; tr();
    /* IoU */
    const io = () => {
      const A = TUTOR.nums($('#io-a').value), B = TUTOR.nums($('#io-b').value), th = +$('#io-t').value;
      const iw = Math.max(0, Math.min(A[2], B[2]) - Math.max(A[0], B[0])), ih = Math.max(0, Math.min(A[3], B[3]) - Math.max(A[1], B[1]));
      const inter = iw * ih, aA = (A[2] - A[0]) * (A[3] - A[1]), aB = (B[2] - B[0]) * (B[3] - B[1]), uni = aA + aB - inter, iou = uni > 0 ? inter / uni : 0;
      $('#io-out').textContent = `พื้นที่ซ้อน = ${f(iw)}×${f(ih)} = ${f(inter)}\nพื้นที่รวม = ${f(aA)} + ${f(aB)} − ${f(inter)} = ${f(uni)}\nIoU = ${f(inter)}/${f(uni)} = ${f(iou, 3)}\nNMS (threshold ${th}): ${iou > th ? 'IoU เกิน → ทิ้ง box ที่คะแนนต่ำกว่า (น่าจะเป็นวัตถุเดียวกัน)' : 'IoU ไม่เกิน → เก็บทั้งสอง box (น่าจะเป็นคนละวัตถุ)'}`;
      const cv = $('#io-cv'), ctx = cv.getContext('2d'); const mx = Math.max(A[2], B[2], A[3], B[3], 1), sc = 260 / mx;
      ctx.clearRect(0, 0, 300, 300); ctx.lineWidth = 3;
      ctx.fillStyle = 'rgba(31,95,168,.25)'; ctx.strokeStyle = '#1f5fa8'; ctx.fillRect(20 + A[0] * sc, 20 + A[1] * sc, (A[2] - A[0]) * sc, (A[3] - A[1]) * sc); ctx.strokeRect(20 + A[0] * sc, 20 + A[1] * sc, (A[2] - A[0]) * sc, (A[3] - A[1]) * sc);
      ctx.fillStyle = 'rgba(232,89,12,.25)'; ctx.strokeStyle = '#e8590c'; ctx.fillRect(20 + B[0] * sc, 20 + B[1] * sc, (B[2] - B[0]) * sc, (B[3] - B[1]) * sc); ctx.strokeRect(20 + B[0] * sc, 20 + B[1] * sc, (B[2] - B[0]) * sc, (B[3] - B[1]) * sc);
      ctx.fillStyle = '#1b2433'; ctx.font = '14px sans-serif'; ctx.fillText('A', 26 + A[0] * sc, 36 + A[1] * sc); ctx.fillText('B', B[2] * sc + 6, B[3] * sc + 14);
    };
    $('#io-go').onclick = io; io();
    /* task chooser */
    const ans = [
      'Object detection — box head + box labels (ต้องรู้ตำแหน่งและแยกทีละคัน แล้วนับจำนวน box) · เช่น YOLO',
      'Semantic segmentation — pixel-wise head + mask labels (ต้องการรูปร่างและพื้นที่ ไม่ใช่แค่ตำแหน่ง) · เช่น U-Net',
      'Image classification — 1 label ต่อภาพ (GAP → FC → softmax) · ข้อมูลน้อยใช้ transfer learning',
      'Instance segmentation — mask แยกทุก instance (นับได้และได้รูปร่าง) · เช่น Mask R-CNN',
      'Panoptic segmentation — semantic สำหรับ “stuff” (ถนน ทางเท้า) + instance สำหรับ “things” (คนเดินถนน)',
      'Zero-shot — ใช้ CLIP เทียบภาพกับข้อความ “a photo of a seal” ไม่ต้องมีภาพ label (หรือ open-vocabulary detector ถ้าต้องการ box)'];
    $('#tk-go').onclick = () => { $('#tk-out').textContent = ans[+$('#tk-sel').value]; };
    $('#tk-sel').onchange = () => { $('#tk-out').textContent = ''; };
  }
});
