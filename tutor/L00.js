/* Lesson 00 · เริ่มจากศูนย์: คณิตและศัพท์พื้นฐานทั้งหมดที่ต้องใช้ใน L08–L13
   ตัวเลขทุกตัวมาจากสไลด์ L08–L13 และตรวจด้วย python แล้ว */
TUTOR.addLesson({
  id: 'L00', num: 0,
  navTitle: 'เริ่มจากศูนย์ (พื้นฐาน)',
  title: 'เริ่มจากศูนย์: คณิตและศัพท์พื้นฐานทั้งหมดที่ต้องใช้',
  short: 'AI/ML/DL · ข้อมูลเป็นตาราง · เวกเตอร์ · ระยะทาง · ผลรวมถ่วงน้ำหนัก · ความชัน/gradient · eˣ ln sigmoid softmax · ความน่าจะเป็น · เมทริกซ์ · สัญลักษณ์ · วงจรการฝึก',
  slides: 'บทปูพื้น · ไม่ต้องมีพื้นฐานมาก่อน',
  intro: 'ถ้ารู้สึก “งงไปหมด” ให้เริ่มที่บทนี้ — ไม่ต้องรู้คณิตมาก่อนเลย ทุกหัวข้อเริ่มจากภาพและตัวอย่างในชีวิตจริง แล้วค่อยบอกชื่อทางการ พร้อมบอกว่าจะได้ใช้ในบทไหนของ L08–L13 · วิธีอ่าน: ดูภาพก่อน (ภาพที่มีปุ่ม ▶ ให้กดทีละขั้น) แล้วค่อยอ่านข้อความสั้น ๆ ใต้ภาพ และลองกดเครื่องมือ 🔧',
  sections: [
    {
      id: 'ai-ml-dl', title: '1) AI · ML · DL และ “การเรียนรู้จากข้อมูล”',
      html: `
<p><b>พูดง่าย ๆ:</b> โปรแกรมทั่วไป = คนเขียนกฎ แล้วเครื่องทำตาม · <b>Machine Learning</b> = คนให้ “ตัวอย่างพร้อมคำตอบ” แล้วเครื่องหากฎเอง โดยกฎนั้นเก็บอยู่ในตัวเลขชุดหนึ่งที่เรียกว่า <b>w (weight)</b></p>
<div class="formula">โปรแกรมปกติ      : กฎ + ข้อมูล            → คำตอบ
Machine Learning : ข้อมูล + คำตอบตัวอย่าง → กฎ (ค่า w)</div>
<div class="callout def"><span class="lb">นิยาม</span><b>AI</b> = ระบบที่ทำงานแบบ “ฉลาด” · <b>ML</b> = AI ที่เรียนกฎจากข้อมูล · <b>DL (Deep Learning)</b> = ML ที่ใช้โครงข่ายประสาทหลายชั้น · <b>LLM</b> = DL ขนาดใหญ่มากที่ฝึกให้เดาคำถัดไป (L12–L13)</div>
<h3>“เรียนรู้” แปลว่าอะไรกันแน่</h3>
<p>โมเดลมี “ปุ่มปรับ” (w) จำนวนมาก การเรียนรู้ = <b>หมุนปุ่มทีละนิดให้คำทายผิดน้อยลง</b> เหมือนจูนวิทยุจนเสียงชัด — ทุกบทตั้งแต่ L08 ถึง L13 คือการหมุนปุ่มแบบนี้ ต่างกันแค่ “ใครบอกว่าผิด”</p>
<div class="tblwrap"><table class="tbl"><tr><th>แบบ</th><th>ข้อมูลที่มี</th><th>ตัวอย่างในวิชา</th><th>บท</th></tr>
<tr><td><b>Supervised</b> (มีผู้สอน)</td><td>x และเฉลย y</td><td>Perceptron ทายเบาหวาน · CNN จำแนกภาพ</td><td>L08, L11</td></tr>
<tr><td><b>Unsupervised</b> (ไม่มีผู้สอน)</td><td>มีแต่ x</td><td>K-Means จัดกลุ่มลูกค้า · PCA ลดมิติ</td><td>L09</td></tr>
<tr><td><b>Reinforcement</b> (เรียนจากรางวัล)</td><td>สถานะ s · การกระทำ a · รางวัล r</td><td>Q-learning ทรงตัว Cart-Pole</td><td>L10 (และ RLHF ใน L13)</td></tr>
<tr><td><b>Self-supervised</b> (สร้างเฉลยเอง)</td><td>ข้อความ/ภาพดิบ</td><td>LLM เดาคำถัดไป</td><td>L12–L13</td></tr></table></div>
<h3>แผนที่รายวิชา: แต่ละบทเพิ่มอะไร และใช้คณิตหัวข้อไหนของบทนี้</h3>
<div class="tblwrap"><table class="tbl"><tr><th>บท</th><th>คำถามหลักของบท</th><th>ใช้พื้นฐานหัวข้อ</th></tr>
<tr><td>L08</td><td>นิวรอนเรียนจากความผิดได้อย่างไร (Perceptron → MLP)</td><td>2 ตาราง · 4 ผลรวมถ่วงน้ำหนัก · 5 ความชัน · 10 วงจรฝึก</td></tr>
<tr><td>L09</td><td>ไม่มีเฉลย จะจัดกลุ่มอย่างไร (K-Means, PCA)</td><td>3 ระยะทาง · 8 เมทริกซ์</td></tr>
<tr><td>L10</td><td>เรียนจากรางวัลที่มาทีหลัง (MDP, Q-learning)</td><td>7 ความน่าจะเป็น · 9 สัญลักษณ์ γ, ε, argmax</td></tr>
<tr><td>L11</td><td>คอมพิวเตอร์ “มองภาพ” อย่างไร (CNN)</td><td>4 คูณแล้วบวก (kernel) · 8 shape</td></tr>
<tr><td>L12</td><td>อ่าน-เขียนภาษาอย่างไร (Embedding, Attention, LLM)</td><td>3 cosine · 6 softmax · 8 one-hot × E</td></tr>
<tr><td>L13</td><td>คิดเป็นขั้น ใช้เครื่องมือ และควอนตัม</td><td>7 pⁿ · การโหวต · ความน่าจะเป็น</td></tr></table></div>
<details class="reveal"><summary>ลองคิดก่อน: K-Means เป็น Deep Learning หรือไม่?</summary>ไม่ใช่ — K-Means เป็น ML (เรียนจากข้อมูล) แต่ไม่ใช่โครงข่ายประสาท จึงไม่ใช่ DL · จำ: DL ⊂ ML ⊂ AI</details>`
    },
    {
      id: 'data-table', title: '2) ข้อมูลคือ “ตาราง”: แถว = ตัวอย่าง · คอลัมน์ = feature · y = เฉลย',
      html: `
<p>ทุกบทเริ่มจากตาราง: <b>1 แถว</b> = สิ่งของ/คน 1 ตัวอย่าง · <b>คอลัมน์ x</b> = ข้อมูลที่รู้ (feature) · <b>คอลัมน์ y</b> = คำตอบที่อยากให้โมเดลทาย (label) · ตารางเต็มของ L08 (สไลด์หน้า 12) มี 8 แถว:</p>
<div class="tblwrap"><table class="tbl"><tr><th>คนที่</th><th>x₁ น้ำตาลในเลือด</th><th>x₂ BMI</th><th>y เบาหวาน</th></tr>
<tr><td>1</td><td>148</td><td>33.6</td><td>+1</td></tr><tr><td>2</td><td>85</td><td>26.6</td><td>−1</td></tr>
<tr><td>3</td><td>160</td><td>35.0</td><td>+1</td></tr><tr><td>4</td><td>90</td><td>22.5</td><td>−1</td></tr>
<tr><td>5</td><td>180</td><td>40.2</td><td>+1</td></tr><tr><td>6</td><td>100</td><td>24.0</td><td>−1</td></tr>
<tr><td>7</td><td>130</td><td>30.1</td><td>+1</td></tr><tr><td>8</td><td>70</td><td>21.0</td><td>−1</td></tr></table></div>
<div class="callout key"><span class="lb">ภาษาที่ใช้เรียก</span><b>n</b> = จำนวนแถว (ที่นี่ 8) · <b>d</b> = จำนวน feature (ที่นี่ 2) · <b>x⁽¹⁾</b> หรือ <b>x₁</b> (แล้วแต่สไลด์) = แถวที่ 1 = (148, 33.6) · <b>yᵢ</b> = เฉลยของแถว i · <b>ŷᵢ</b> = คำทายของโมเดล</div>
<h3>3 ช่วงชีวิตของโมเดล</h3>
<ol class="steps">
<li><b>Train (ฝึก)</b>: ป้อน x ทุกแถว ดูเฉลย y แล้วปรับ w ให้ทายถูกมากขึ้น</li>
<li><b>Test (สอบ)</b>: กันข้อมูลบางส่วนไว้ ไม่ให้โมเดลเห็นตอนฝึก แล้วใช้วัดผลจริง (validation = ชุดสอบย่อยไว้เลือกค่าตั้งต่าง ๆ)</li>
<li><b>Predict (ใช้งาน)</b>: คนใหม่มีแต่ x → ใช้ w ที่ได้ คำนวณคำทาย ŷ</li></ol>
<div class="callout warn"><span class="lb">กับดัก</span>ห้ามเอาข้อมูลชุด test ไปช่วยฝึก (เรียกว่า <b>data leakage</b>) ไม่งั้นคะแนนจะดีเกินจริง — Lab ของ L08 เตือนเรื่องนี้</div>
<details class="reveal"><summary>ลองคิดก่อน: ตาราง L08 มี n, d เท่าไร? ส่วนข้อมูลลูกค้า 7 คนของ L09 มี y ไหม?</summary>L08: n = 8, d = 2 และมี y (supervised) · L09: ลูกค้า 7 คน × 2 feature (F, M) แต่ <b>ไม่มี y</b> (unsupervised) จึงต้องหากลุ่มเอง</details>`
    },
    {
      id: 'vectors', title: '3) เวกเตอร์: รายการตัวเลข = จุด = ลูกศร · ระยะทาง · ทิศทาง',
      html: `
<p><b>เวกเตอร์</b> = ตัวเลขหลายตัวเรียงกัน เช่น ผู้ป่วยคนที่ 1 = (148, 33.6) · ถ้ามี 2 ตัวเลขก็วาดเป็นจุดบนกราฟ 2 แกนได้ · 3 ตัวเลข = จุดในห้อง 3 มิติ · 768 ตัวเลข (เช่น embedding ของคำ) = จุดใน 768 มิติ — วาดไม่ได้แต่คิดแบบเดียวกันทุกอย่าง</p>
<h3>ระยะทาง: “ใกล้กัน” = “คล้ายกัน”</h3>
<div class="formula">Euclid (เส้นตรง)    d = √( (u₁−v₁)² + (u₂−v₂)² + … )
Manhattan (ตามถนน)  d = |u₁−v₁| + |u₂−v₂| + …</div>
<ol class="steps">
<li>ตัวอย่างสไลด์ L09 หน้า 10: A = (1, 2), D = (8, 8) → ผลต่างแต่ละแกน: 8 − 1 = 7 และ 8 − 2 = 6</li>
<li>Manhattan = 7 + 6 = <b>13</b></li>
<li>Euclid = √(7² + 6²) = √(49 + 36) = √85 ≈ <b>9.22</b> (K-Means ใช้ระยะนี้)</li></ol>
<h3>ทิศทาง: cosine similarity</h3>
<p>บางครั้งไม่สนว่าลูกศรยาวเท่าไร สนแค่ว่า “ชี้ไปทางเดียวกันไหม” เช่น ความหมายของคำ (L12) หรือเอกสารที่ตรงกับคำถาม (L13 RAG)</p>
<div class="formula">‖u‖ = √(u₁² + u₂² + …)           ← ความยาวลูกศร (norm)
cos(u, v) = (u·v) / (‖u‖ ‖v‖)     ← 1 = ทิศเดียวกัน · 0 = ตั้งฉาก · −1 = ตรงข้าม</div>
<p>ตัวอย่างสไลด์ L12: cat = (0.9, 0.8, 0.1), dog = (0.9, 0.5, 0.1) → u·v = 0.81 + 0.40 + 0.01 = 1.22 · ‖cat‖ = 1.21 · ‖dog‖ = 1.03 → cos = 1.22 / (1.21 × 1.03) ≈ <b>0.98</b> (คล้ายมาก) · ส่วน cos(cat, car) ≈ 0.29</p>
<div class="demo" id="d0-dist"><h4>🔧 ลองเล่น: ระยะทางและ cosine ของ 2 เวกเตอร์</h4>
<div class="row"><label>u <input type="text" data-k="u" value="1, 2"></label><label>v <input type="text" data-k="v" value="8, 8"></label></div>
<div class="row"><button class="ghost" data-p="1, 2|8, 8">A, D (L09)</button><button class="ghost" data-p="1, 2|2, 1">A, B (L09)</button><button class="ghost" data-p="0.9, 0.8, 0.1|0.9, 0.5, 0.1">cat, dog (L12)</button><button class="ghost" data-p="0.9, 0.8, 0.1|0, 0.3, 0.9">cat, car (L12)</button></div>
<div class="out"></div></div>
<details class="reveal"><summary>ลองคิดก่อน: ระยะ Euclid จาก A(1, 2) ถึง B(2, 1) เท่าไร?</summary>ผลต่าง 1 และ 1 → √(1 + 1) = √2 ≈ 1.41 (ตรงกับตาราง K-Means สไลด์ L09 หน้า 19)</details>`
    },
    {
      id: 'weighted-sum', title: '4) ผลรวมถ่วงน้ำหนัก (dot product): z = w·x + b',
      html: `
<p><b>พูดง่าย ๆ:</b> เหมือนคิดเกรดรวม — แต่ละส่วนสำคัญไม่เท่ากัน จึงคูณคะแนนกับน้ำหนักทีละคู่ แล้วบวกทั้งหมด ได้ “ตัวเลขตัวเดียว” · Perceptron ก็เหมือนกรรมการที่ให้น้ำหนักข้อมูลแต่ละตัวไม่เท่ากันแล้วรวมเป็นคะแนน</p>
<div class="formula">w·x = w₁x₁ + w₂x₂ + … + w_d x_d = Σᵢ wᵢxᵢ      (บางสไลด์เขียน wᵀx — ความหมายเดียวกัน)
z   = w·x + b                                     (b = bias = คะแนนพื้นฐาน/ค่าเลื่อน)</div>
<ol class="steps">
<li>สไลด์ L08 หน้า 13: x = (148, 33.6), w = (0.5, 0.5), b = 0.5 → คูณทีละคู่: 0.5×148 = 74 · 0.5×33.6 = 16.8</li>
<li>บวกกันแล้วบวก b: 74 + 16.8 + 0.5 = <b>z = 91.3</b></li>
<li>Perceptron ใช้ขั้นบันได: z ≥ 0 → ŷ = +1 ตรงกับเฉลย y = +1 จึงไม่ต้องปรับ w</li></ol>
<p>อ่านความหมายของ w: <b>w บวก</b> = ยิ่ง x มากยิ่งดัน z ขึ้น · <b>w ลบ</b> = ดึง z ลง · <b>w ใกล้ 0</b> = แทบไม่สนใจ x ตัวนั้น</p>
<div class="callout key"><span class="lb">ทำไมสำคัญที่สุด</span>การดำเนินการนี้อยู่ในทุกบท: นิวรอน z = w·x + b (L08) · policy z = w·s แล้วเข้า σ (L10) · kernel 3×3 = 9 คู่คูณแล้วบวก (L11) · คะแนน attention q·k (L12) · ความคล้าย cos ใน RAG (L13)</div>
<div class="demo" id="d0-dot"><h4>🔧 ลองเล่น: เครื่องคิด dot product / z = w·x + b</h4>
<div class="row"><label>x <input type="text" data-k="x" value="148, 33.6"></label><label>w <input type="text" data-k="w" value="0.5, 0.5"></label><label>b <input type="number" data-k="b" value="0.5" step="any"></label></div>
<div class="row"><button class="ghost" data-p="148, 33.6|0.5, 0.5|0.5">ผู้ป่วยคนที่ 1 (L08)</button><button class="ghost" data-p="85, 26.6|0.5, 0.5|0.5">ผู้ป่วยคนที่ 2 (L08)</button><button class="ghost" data-p="70, 80, 90|0.3, 0.5, 0.2|0">เกรดรวม</button><button class="ghost" data-p="17, 24, 1, 23, 5, 7, 4, 6, 13|-2, 1, 2, -2, 3, 2, -2, -2, 2|0">kernel 3×3 (L11)</button></div>
<div class="bars"></div>
<div class="out"></div></div>
<details class="reveal"><summary>ลองคิดก่อน: ช่อง output ของ convolution ในสไลด์ L11 หน้า 7 ได้ −19 ได้อย่างไร?</summary>17·(−2) + 24·1 + 1·2 + 23·(−2) + 5·3 + 7·2 + 4·(−2) + 6·(−2) + 13·2 = −19 → คือ dot product ของ “ช่องภาพ 9 ช่อง” กับ “kernel 9 ช่อง” นั่นเอง (กดปุ่ม kernel 3×3 ในเครื่องมือด้านบนเพื่อดูทีละคู่)</details>`
    },
    {
      id: 'functions-slope', title: '5) ฟังก์ชัน · ความชัน · gradient: ทำไมต้อง “เดินลงเขา”',
      html: `
<p><b>ฟังก์ชัน</b> = เครื่องแปลงตัวเลข ใส่ w เข้าไปได้ค่า loss ออกมา เช่น L(w) = (w − 3)² → ใส่ 7 ได้ 16 · ใส่ 3 ได้ 0 · วาดเป็นกราฟได้รูป “หุบเขา” และจุดต่ำสุด (w = 3) คือคำตอบที่อยากได้</p>
<p><b>ความชัน (slope / derivative)</b> = ถ้าขยับ w ไปทางขวานิดหนึ่ง loss เปลี่ยนเท่าไร · บวก = ขึ้นเขาทางขวา · ลบ = ลงเขาทางขวา · 0 = พื้นราบ (ก้นหุบ)</p>
<div class="formula">L(w) = (w − 3)²   →   ความชัน = dL/dw = 2(w − 3)
ที่ w = 7: ความชัน = 8 (ชันขึ้นทางขวา) → ต้องขยับ w ไปทางซ้าย</div>
<div class="callout def"><span class="lb">นิยาม</span><b>Gradient ∇L</b> = ความชันของ loss เทียบกับ w ทุกตัวพร้อมกัน (เป็นเวกเตอร์) ชี้ไปทาง “ขึ้นเขา” เร็วที่สุด · <b>Gradient descent</b> = เดินสวน gradient ทีละก้าวเพื่อลด loss · <b>Learning rate η</b> = ความยาวก้าว</div>
<div class="formula">w ← w − η · ∇L          (สไลด์ L08: w_j ← w_j − η ∇w_j)</div>
<ol class="steps">
<li>L(w) = (w − 3)², η = 0.25, เริ่ม w = 7 → ความชัน 8 → w = 7 − 0.25×8 = <b>5</b></li>
<li>ความชัน 4 → w = 5 − 0.25×4 = <b>4</b></li>
<li>ความชัน 2 → w = 4 − 0.25×2 = <b>3.5</b> … เข้าใกล้ 3 เรื่อย ๆ (ก้าวสั้นลงเองเพราะเนินเริ่มราบ)</li></ol>
<div class="callout warn"><span class="lb">กับดัก</span>ลืมเครื่องหมายลบ = เดินขึ้นเขา loss เพิ่ม · η ใหญ่เกิน = กระโดดข้ามหุบจน loss ระเบิด · η เล็กเกิน = ช้ามาก · <b>Backprop</b> (L08) = วิธีคำนวณ ∇L ของโครงข่ายหลายชั้นด้วยกฎลูกโซ่ ไม่ใช่วิธีเรียนรู้แบบใหม่</div>
<div class="demo" id="d0-slope"><h4>🔧 ลองเล่น: ความชันที่จุดหนึ่ง + ก้าวลงเขา (ลากจุดบนกราฟได้)</h4>
<canvas width="640" height="300"></canvas>
<div class="row"><label>w <input type="range" data-k="w" min="-1" max="7" step="0.01" value="7"></label><label>η <input type="number" data-k="eta" value="0.25" step="0.05" min="0"></label>
<button data-a="step">ก้าวลงเขา 1 ก้าว</button><button data-a="five">เดิน 5 ก้าว</button><button class="ghost" data-a="reset">รีเซ็ต (w = 7)</button></div>
<div class="out"></div></div>`
    },
    {
      id: 'exp-log-sigmoid-softmax', title: '6) eˣ · ln · sigmoid · softmax · temperature',
      html: `
<p>ทำไมต้องรู้ e? เพราะ AI ชอบเปลี่ยน “คะแนน” (ติดลบได้ ใหญ่เท่าไรก็ได้) ให้เป็น “ความน่าจะเป็น” (อยู่ระหว่าง 0–1) และ eˣ เป็นบวกเสมอ จึงเหมาะมาก</p>
<div class="formula">e ≈ 2.718 · e⁰ = 1 · e¹ ≈ 2.718 · e² ≈ 7.39 · e⁻¹ ≈ 0.37
ln คือย้อนกลับของ eˣ: ln 1 = 0 · ln e = 1 · ln(eˣ) = x
เจอ ln ที่: TF-IDF = tf · ln(N/df) (L12) · loss ของ LLM = −Σ log P (L12)</div>
<h3>Sigmoid: สำหรับ 2 ทางเลือก</h3>
<div class="formula">σ(z) = 1 / (1 + e⁻ᶻ)      σ(0) = 0.5 · σ(2) ≈ 0.88 · σ(−2) ≈ 0.12</div>
<p>ใช้: output ของ MLP แบบ 2 คลาส (L08) · logistic policy ใน L10 (σ(z) > 0.5 → ดันไปขวา) · gate ใน LSTM (L12)</p>
<h3>Softmax: สำหรับหลายทางเลือก (แบ่งเค้ก 100%)</h3>
<div class="formula">pᵢ = e^(zᵢ) / Σⱼ e^(zⱼ)
z = [2, 1, 0] → eᶻ = [7.39, 2.72, 1] รวม 11.11 → p = [0.67, 0.24, 0.09]   (สไลด์ L12 หน้า 50)</div>
<h3>Temperature T: ปุ่มปรับความ “แหลม/แบน”</h3>
<div class="formula">pᵢ = e^(zᵢ/T) / Σⱼ e^(zⱼ/T)
T = 0.5 → [0.87, 0.12, 0.02]   แหลม (เลือกตัวเดิมเกือบแน่นอน)
T = 2   → [0.51, 0.31, 0.19]   แบน (สุ่มหลากหลายขึ้น)          (ปัดเศษ 2 ตำแหน่ง)</div>
<div class="callout key"><span class="lb">ใช้ตอนเลือกคำของ LLM</span><b>greedy</b> = เลือกตัวที่ p สูงสุด (argmax) · <b>top-p</b> = เก็บตัวท็อปไล่ลงมาจนผลรวมสะสม ≥ p เช่น p = 0.9 กับ [0.67, 0.24, 0.09] → สะสม 0.67, 0.91 → เหลือ 2 ตัวแรก (L12)</div>
<div class="demo" id="d0-soft"><h4>🔧 ลองเล่น: sigmoid และ softmax + temperature</h4>
<div class="row"><label>z สำหรับ sigmoid <input type="range" data-k="sz" min="-8" max="8" step="0.1" value="0"></label></div>
<div class="out sig"></div>
<div class="row" style="margin-top:12px"><label>logits z <input type="text" data-k="z" value="2, 1, 0"></label><label>T <input type="range" data-k="t" min="0.1" max="5" step="0.1" value="1"></label><b class="tv"></b></div>
<div class="bars"></div>
<div class="out soft"></div></div>
<details class="reveal"><summary>ลองคิดก่อน: ถ้าบวก 10 เข้าไปทุกตัว (z = [12, 11, 10]) softmax เปลี่ยนไหม?</summary>ไม่เปลี่ยน! เพราะ e^(z+10) = eᶻ × e¹⁰ ตัว e¹⁰ ตัดกันทั้งเศษและส่วน — softmax สนแค่ “ผลต่าง” ระหว่างคะแนน (ลองพิมพ์ในเครื่องมือด้านบนดู)</details>`
    },
    {
      id: 'probability', title: '7) ความน่าจะเป็น: รวม = 1 · “และ” = คูณ · “หรือ” = บวก',
      html: `
<div class="formula">กฎ 1 : ความน่าจะเป็นอยู่ระหว่าง 0 ถึง 1 และของทุกกรณีรวมกัน = 1
กฎ 2 (และ): ต้องเกิดทั้งคู่ (อิสระกัน) → คูณ   P(A และ B) = P(A) × P(B)
กฎ 3 (หรือ): เกิดได้หลายทางที่ไม่ซ้อนกัน → บวก  P(ทาง 1 หรือ ทาง 2) = P₁ + P₂</div>
<div class="tblwrap"><table class="tbl"><tr><th>สถานการณ์ในวิชา</th><th>คิดอย่างไร</th><th>ผล</th></tr>
<tr><td>อากาศ: วันนี้แดด ฝนตกในอีก 2 วัน (L10)</td><td>คูณตามเส้น แล้วบวกทุกเส้น: 0.7×0.1 + 0.2×0.3 + 0.1×0.5</td><td><b>0.18</b></td></tr>
<tr><td>Agent ทำ 10 ขั้น แต่ละขั้นสำเร็จ 0.95 (L13)</td><td>ทุกขั้นต้องสำเร็จ → 0.95¹⁰</td><td><b>0.60</b> (20 ขั้น → 0.36)</td></tr>
<tr><td>ε-greedy, ε = 0.1, มี 2 action (L10)</td><td>ไม่สุ่ม 0.9 “หรือ” สุ่มแล้วบังเอิญได้ตัวดีสุด 0.1 × ½</td><td><b>0.95</b></td></tr>
<tr><td>Qubit สถานะ [0.6, 0.8] (L13)</td><td>P(0) = 0.6² · P(1) = 0.8² → รวมกันต้อง = 1</td><td>0.36 + 0.64 = <b>1</b></td></tr>
<tr><td>โหวต 5 รอบ แต่ละรอบถูก 0.6 (L13)</td><td>บวกกรณีถูก 3, 4, 5 รอบ (แต่ละกรณีคูณกัน)</td><td><b>0.68</b></td></tr></table></div>
<div class="callout think"><span class="lb">เทียบกับ γ (L10)</span>“คูณซ้ำ ๆ แล้วเล็กลง” แบบเดียวกับ pⁿ ใช้กับรางวัลในอนาคตด้วย: เงินในอนาคตมีค่าน้อยลง → รางวัล +1 สามก้าว γ = 0.9 → G = 1 + 0.9 + 0.81 = 2.71 · γ = 0.99 → รางวัลในอีก 100 ก้าวเหลือค่า 0.99¹⁰⁰ ≈ 0.37</div>
<div class="demo" id="d0-pn"><h4>🔧 ลองเล่น: pⁿ (ทุกขั้นต้องสำเร็จ) และการโหวตเสียงข้างมาก</h4>
<div class="row"><label>p (โอกาสถูกต่อขั้น/ต่อรอบ) <input type="range" data-k="p" min="0.3" max="1" step="0.01" value="0.95"></label><b class="pv"></b></div>
<div class="row"><label>n (จำนวนขั้น) <input type="range" data-k="n" min="1" max="50" step="1" value="10"></label><b class="nv"></b></div>
<div class="bars" style="display:flex;align-items:flex-end;gap:2px;height:90px;margin:8px 0;border-bottom:1px solid var(--line)"></div>
<div class="row"><label>จำนวนรอบที่โหวต (คี่) <input type="range" data-k="k" min="1" max="15" step="2" value="5"></label><b class="kv"></b></div>
<div class="out"></div></div>
<details class="reveal"><summary>ลองคิดก่อน: ถ้าแต่ละรอบถูกแค่ 0.4 การโหวตหลายรอบช่วยไหม?</summary>ไม่ช่วย กลับแย่ลง! โหวตช่วยเฉพาะเมื่อแต่ละรอบถูกเกินครึ่ง (p &gt; 0.5) — ลองเลื่อน p ในเครื่องมือด้านบนเหลือ 0.4 แล้วเพิ่มจำนวนรอบดู</details>`
    },
    {
      id: 'matrix-shape', title: '8) เมทริกซ์และ shape: ทำหลายแถวพร้อมกัน',
      html: `
<p><b>เมทริกซ์</b> = ตารางตัวเลข n แถว × d คอลัมน์ · <b>shape</b> = ขนาดของกล่องตัวเลข เขียนเรียงว่า แถว × คอลัมน์ × … · กล่องตัวเลขกี่มิติก็ได้เรียกรวมว่า <b>tensor</b></p>
<div class="tblwrap"><table class="tbl"><tr><th>ชื่อ</th><th>shape</th><th>ตัวอย่างในวิชา</th></tr>
<tr><td>สเกลาร์</td><td>ตัวเลขเดียว</td><td>loss, η, γ</td></tr>
<tr><td>เวกเตอร์</td><td>d</td><td>ผู้ป่วย 1 คน (d = 2) · embedding 1 คำ</td></tr>
<tr><td>เมทริกซ์</td><td>n × d</td><td>ตาราง L08 = 8 × 2 · ตาราง embedding E = 5 × 3 (L12)</td></tr>
<tr><td>tensor 3 มิติ</td><td>H × W × 3</td><td>ภาพสี 224×224×3 = 150,528 ค่า (L11)</td></tr>
<tr><td>tensor 4 มิติ</td><td>B × C × H × W</td><td>batch ภาพ 32×3×224×224 (L11)</td></tr></table></div>
<h3>คูณเมทริกซ์ = dot product หลายครั้งพร้อมกัน</h3>
<div class="formula">(n × d) · (d × k) = (n × k)          ← เลขตรงกลางต้องเท่ากัน
ช่องแถว i คอลัมน์ j ของผลลัพธ์ = (แถว i ของตัวซ้าย) · (คอลัมน์ j ของตัวขวา)</div>
<p>ตัวอย่าง: X (3×2: ผู้ป่วย 3 คนแรก × 2 feature) · w (2×1) + b = z (3×1) = [91.3, 56.3, 98.0] — 3 คนคำนวณในครั้งเดียว (นี่คือเหตุผลที่ GPU ทำงานเร็ว)</p>
<h3>one-hot × E = หยิบ 1 แถว</h3>
<p>one-hot(cat) = [1, 0, 0, 0, 0] คูณ E (5×3) → ได้แถว cat = [0.9, 0.8, 0.1] พอดี (สไลด์ L12 หน้า 10) → <b>nn.Embedding</b> จึงเป็นแค่ “ตารางค้นหา”</p>
<div class="callout warn"><span class="lb">กับดัก</span>ลำดับแกนต่างกันตามไลบรารี: NumPy/OpenCV = H × W × C · PyTorch = C × H × W (L11) · คูณเมทริกซ์สลับลำดับไม่ได้ (A·B ≠ B·A) · ต่อ Linear หลายชั้นโดยไม่มี activation: W₂(W₁x) = (W₂W₁)x = Wx ยังเป็นชั้นเดียว (L08)</div>
<details class="reveal"><summary>ลองคิดก่อน: Q (n × d) คูณ Kᵀ (d × n) ได้ shape อะไร?</summary>(n × d)·(d × n) = n × n → คะแนน attention ของ “ทุกคู่คำ” (L12) · ประโยค 3 คำได้ตาราง 3 × 3</details>`
    },
    {
      id: 'symbols', title: '9) อ่านสัญลักษณ์ให้ออก (cheat sheet)',
      html: `
<p>สูตรในสไลด์ดูน่ากลัวเพราะสัญลักษณ์ ไม่ใช่เพราะการคำนวณยาก — เปิดตารางนี้คู่กับสไลด์ได้เลย</p>
<div class="tblwrap"><table class="tbl"><tr><th>สัญลักษณ์</th><th>อ่านว่า</th><th>แปลว่า</th><th>เจอใน</th></tr>
<tr><td>Σ</td><td>ซิกมา</td><td>บวกทั้งหมด (วนบวก)</td><td>L08 z = Σwᵢxᵢ · L11 conv · L12 softmax</td></tr>
<tr><td>∏</td><td>พาย / product</td><td>คูณทั้งหมด (วนคูณ)</td><td>L12 P(x₁…x_T) = ∏ P(xₜ | x&lt;ₜ) · L13 pⁿ</td></tr>
<tr><td>∇L</td><td>นาบลา / gradient</td><td>ทิศที่ L เพิ่มเร็วสุด (ความชันทุกตัว)</td><td>L08 w ← w − η∇L</td></tr>
<tr><td>∂L/∂w</td><td>อนุพันธ์ย่อย</td><td>ความชันของ L เมื่อขยับ w ตัวเดียว</td><td>L08 backprop</td></tr>
<tr><td>η</td><td>อีตา</td><td>learning rate (ความยาวก้าว)</td><td>L08</td></tr>
<tr><td>γ</td><td>แกมมา</td><td>discount factor (ส่วนลดรางวัลอนาคต)</td><td>L10 G = r + γG′</td></tr>
<tr><td>θ</td><td>ทีตา</td><td>threshold (L08) · มุมของคาน (L10) · พารามิเตอร์ของโมเดล / มุมหมุน qubit (L13)</td><td>L08 L10 L13</td></tr>
<tr><td>α</td><td>แอลฟา</td><td>learning rate ของ Q-learning (L10) · น้ำหนัก attention (L12) · แอมพลิจูดของ qubit (L13)</td><td>L10 L12 L13</td></tr>
<tr><td>ε</td><td>เอปไซลอน</td><td>โอกาสสุ่มสำรวจ (ε-greedy L10) · noise ใน diffusion (L12)</td><td>L10 L12</td></tr>
<tr><td>μ</td><td>มิว</td><td>ค่าเฉลี่ย / จุดศูนย์กลางกลุ่ม (centroid)</td><td>L09</td></tr>
<tr><td>σ</td><td>ซิกมาเล็ก</td><td>sigmoid σ(z) · หรือส่วนเบี่ยงเบนมาตรฐาน (SD)</td><td>L08 L09 L10 L12</td></tr>
<tr><td>ŷ</td><td>วายแฮต</td><td>ค่าที่โมเดลทาย (“หมวก” = ค่าประมาณ)</td><td>L08 e = y − ŷ</td></tr>
<tr><td>‖x‖</td><td>นอร์ม</td><td>ความยาวเวกเตอร์</td><td>L09 L12 L13</td></tr>
<tr><td>|x|</td><td>ค่าสัมบูรณ์</td><td>ตัดเครื่องหมายลบทิ้ง</td><td>L09 Manhattan</td></tr>
<tr><td>wᵀx</td><td>ดับเบิลยูทรานสโพสเอ็กซ์</td><td>พลิกแถว↔คอลัมน์ · wᵀx = w·x</td><td>L08</td></tr>
<tr><td>⊙</td><td>คูณทีละช่อง</td><td>คูณตำแหน่งที่ตรงกัน (ไม่ใช่ dot)</td><td>L12 LSTM</td></tr>
<tr><td>argmax</td><td>อาร์กแมกซ์</td><td>“ตัวไหน” ได้ค่าสูงสุด (ไม่ใช่ค่าสูงสุดเอง)</td><td>L10 เลือก action · L12 greedy</td></tr>
<tr><td>≈ · ∝ · ∈</td><td>ประมาณ · แปรผันตาม · อยู่ใน</td><td>ใกล้เคียง · โตตามกันเป็นสัดส่วน · เป็นสมาชิกของ</td><td>√85 ≈ 9.22 · e ∈ {0, ±2}</td></tr></table></div>
<div class="callout key"><span class="lb">max กับ argmax</span>Q = [2.0, 5.0, 1.0] → <b>max</b> = 5.0 (ค่า) · <b>argmax</b> = action ที่ 2 (ตำแหน่ง) · สูตร Q-learning ใช้ max Q(s′, a′) ส่วนการเลือก action ใช้ argmax</div>
<div class="callout think"><span class="lb">ตัวห้อย/ตัวยก</span>xᵢ = ตัวที่ i · x₁ = ตัวแรก · x² = ยกกำลังสอง · x⁽¹⁾ = ตัวอย่างแถวที่ 1 · sₜ₊₁ = สถานะเวลาถัดไป · a′ (a ไพรม์) = action ถัดไป</div>`
    },
    {
      id: 'train-loop', title: '10) วงจรการฝึก: forward → loss → gradient → update',
      html: `
<ol class="steps">
<li><b>Forward</b>: ป้อน x ผ่านโมเดล → ได้คำทาย ŷ</li>
<li><b>Loss</b>: เทียบ ŷ กับ y เป็นตัวเลขตัวเดียว เช่น SSE = ½ Σ (y − ŷ)² (L08)</li>
<li><b>Gradient</b>: หา ∇L ว่าแต่ละ w ควรขยับทางไหน (backprop ทำให้)</li>
<li><b>Update</b>: w ← w − η∇L · แล้ววนกลับไปข้อ 1</li></ol>
<div class="callout def"><span class="lb">นิยาม</span><b>Batch</b> = กลุ่มแถวที่ใช้คำนวณ 1 ครั้ง · <b>Iteration</b> = อัปเดต w 1 ครั้ง (1 batch) · <b>Epoch</b> = ใช้ข้อมูลครบทุกแถว 1 รอบ · <b>Parameter</b> (w, b) = โมเดลเรียนเอง · <b>Hyperparameter</b> (η, จำนวน epoch, ขนาด batch, K, ε) = เราตั้งเอง</div>
<div class="tblwrap"><table class="tbl"><tr><th>บท</th><th>“loss” หน้าตาแบบไหน</th></tr>
<tr><td>L08</td><td>SSE / 2 = ½ Σ (y − f(z))²</td></tr>
<tr><td>L09</td><td>K-Means: J = Σ ‖x − μ‖² (ผลรวมระยะกำลังสองถึงจุดศูนย์กลาง)</td></tr>
<tr><td>L10</td><td>DQN: (y − Q(s, a))² โดย y = r + γ max Q(s′, a′)</td></tr>
<tr><td>L12</td><td>LLM: −Σ log P(คำถัดไปที่ถูก)</td></tr></table></div>
<h3>Overfitting: ท่องจำข้อสอบเก่า</h3>
<p>ถ้าฝึกนานเกินหรือโมเดลซับซ้อนเกิน โมเดลจะ “จำ” ข้อมูลฝึกได้หมด (train loss ต่ำมาก) แต่เจอข้อมูลใหม่กลับผิดเยอะ (validation loss เพิ่มขึ้น) → ต้องดู validation เสมอ และหยุดตอนที่ validation ดีที่สุด (early stopping) · ทางแก้อื่น: ข้อมูลมากขึ้น · โมเดลเล็กลง · data augmentation (L11)</p>
<details class="reveal"><summary>ลองคิดก่อน: ข้อมูล 8 แถว ใช้ batch ละ 2 แถว ฝึก 10 epoch จะอัปเดต w กี่ครั้ง?</summary>1 epoch = 8 ÷ 2 = 4 iteration → 10 epoch = 40 ครั้ง · ถ้าเป็น SGD (batch = 1) = 80 ครั้ง · Batch GD (batch = 8) = 10 ครั้ง</details>`
    },
    {
      id: 'how-to-study', title: '11) ใช้เว็บนี้ + ชีท A4 + ข้อสอบจำลอง อย่างไรให้ผ่าน',
      html: `
<ol class="steps">
<li>ทำ <a href="#/lesson/L00/quiz">แบบฝึกท้ายบท L00</a> ให้ได้ 8/10 ขึ้นไป (ผิดข้อไหนกลับไปดูภาพของหัวข้อนั้น)</li>
<li>เรียน <a href="#/lesson/L08">L08</a> → L13 ตามลำดับ: ดู “บทนี้ใน 1 ภาพ” ก่อน · กดภาพทีละขั้นให้ครบ · แล้วค่อยอ่านข้อความ · ลองเครื่องมือ 🔧 ด้วยตัวเลขจากสไลด์</li>
<li>ทวนเร็วด้วย <a href="#/visuals">🎨 สื่อภาพประกอบ</a> · <a href="#/flash">🃏 แฟลชการ์ด</a> · <a href="#/formulas">🧮 สูตรทั้งหมด</a> และชีท A4 (นำเข้าห้องสอบได้ไม่เกิน 10 แผ่น)</li>
<li>ทำ <a href="#/exam">📝 ข้อสอบจำลอง</a> แบบจับเวลา แล้วกลับไปซ่อมบทที่ได้ต่ำกว่า 70%</li></ol>
<div class="callout key"><span class="lb">รูปแบบข้อสอบ</span>ตอนที่ 1 อัตนัย 3 ข้อ (มีข้อย่อย) = 15 คะแนน · ตอนที่ 2 ปรนัย 50 ข้อ = 15 คะแนน (ข้อละ 0.3) · เวลา 3 ชั่วโมง → แนะนำ: ปรนัย ~60 นาที → อัตนัย ~95 นาที → ทวน 25 นาที</div>
<div class="callout think"><span class="lb">เคล็ดลับคนเริ่มจากศูนย์</span>โจทย์คำนวณเกือบทั้งหมดใช้แค่ 4 ท่าจากบทนี้: <b>คูณแล้วบวก</b> (หัวข้อ 4) · <b>ระยะทาง</b> (3) · <b>e/softmax</b> (6) · <b>คูณ/บวกความน่าจะเป็น</b> (7) — เขียนสูตร → แทนตัวเลข → คำนวณทีละบรรทัด → ตอบพร้อมหน่วย/ความหมาย</div>`
    }
  ],
  quiz: [
    { q: 'ข้อใดเรียงความสัมพันธ์ของ AI, ML, DL ได้ถูกต้อง', c: ['ML ⊃ AI ⊃ DL', 'AI ⊃ ML ⊃ DL', 'DL ⊃ ML ⊃ AI', 'ทั้งสามไม่เกี่ยวข้องกัน'], a: 1, e: 'DL เป็นส่วนหนึ่งของ ML และ ML เป็นส่วนหนึ่งของ AI — เช่น K-Means เป็น ML แต่ไม่ใช่ DL' },
    { q: 'K-Means จัดกลุ่มลูกค้า 7 คนที่มีแต่ feature x ไม่มีเฉลย y เป็นการเรียนรู้แบบใด', c: ['Supervised', 'Reinforcement', 'Unsupervised', 'Self-supervised'], a: 2, e: 'มีแต่ x ไม่มี label → unsupervised (L09) · supervised ต้องมี y · RL ต้องมีรางวัล' },
    { q: 'ระยะ Euclid ระหว่าง A = (1, 2) และ D = (8, 8) เท่ากับเท่าใด', c: ['13', '85', '7', '9.22'], a: 3, e: '√(7² + 6²) = √85 ≈ 9.22 · ส่วน 13 คือระยะ Manhattan (7 + 6)' },
    { q: 'x = (148, 33.6), w = (0.5, 0.5), b = 0.5 → z = w·x + b เท่ากับเท่าใด', c: ['91.3', '90.8', '182.1', '74.5'], a: 0, e: '0.5×148 + 0.5×33.6 + 0.5 = 74 + 16.8 + 0.5 = 91.3 (สไลด์ L08 หน้า 13) · 90.8 คือลืมบวก b' },
    { q: 'L(w) = (w − 3)², ความชัน = 2(w − 3), η = 0.25 เริ่มที่ w = 7 ก้าว gradient descent 1 ครั้งได้ w เท่าใด', c: ['9', '5', '6', '3'], a: 1, e: 'ความชันที่ w = 7 คือ 8 → w ← w − η×ความชัน = 7 − 0.25×8 = 5 (ถ้าได้ 9 คือบวกแทนลบ = เดินขึ้นเขา)' },
    { q: 'σ(0) ของฟังก์ชัน sigmoid มีค่าเท่าใด', c: ['0', '1', '2.718', '0.5'], a: 3, e: 'σ(0) = 1 / (1 + e⁰) = 1 / 2 = 0.5 — sigmoid บีบทุกค่าให้อยู่ระหว่าง 0 ถึง 1' },
    { q: 'softmax ของ z = [2, 1, 0] (T = 1) ใกล้เคียงข้อใด และถ้าลด T เหลือ 0.5 จะเป็นอย่างไร', c: ['[0.67, 0.24, 0.09] แล้วแหลมขึ้น', '[0.67, 0.24, 0.09] แล้วแบนลง', '[0.67, 0.33, 0] แล้วแหลมขึ้น', '[2, 1, 0] เหมือนเดิม'], a: 0, e: 'eᶻ = 7.39, 2.72, 1 รวม 11.11 → 0.67, 0.24, 0.09 · T เล็กลง → ตัวที่คะแนนสูงยิ่งเด่น (T = 0.5 → 0.87) · [0.67, 0.33, 0] คือหารผลรวมตรง ๆ โดยลืมยก e' },
    { q: 'Agent ทำงาน 10 ขั้นต่อกัน แต่ละขั้นสำเร็จ 0.95 (อิสระกัน) โอกาสสำเร็จทั้งงานประมาณเท่าใด', c: ['0.95', '9.5', '0.60', '0.05'], a: 2, e: '“ทุกขั้นต้องสำเร็จ” = และ = คูณ → 0.95¹⁰ ≈ 0.60 (สไลด์ L13 หน้า 23)' },
    { q: 'one-hot(cat) = [1, 0, 0, 0, 0] คูณตาราง E ขนาด 5×3 ได้ผลอะไร', c: ['แถวของ cat ใน E ขนาด 1×3', 'ตัวเลขตัวเดียว', 'ตาราง 5×5', 'คอลัมน์แรกของ E ขนาด 5×1'], a: 0, e: '(1×5)·(5×3) = (1×3) และแถวที่คูณ 0 หายหมด เหลือแถว cat = [0.9, 0.8, 0.1] → embedding = ตารางค้นหา (L12)' },
    { q: 'ข้อมูลฝึก 8 แถว ใช้ mini-batch ละ 2 แถว 1 epoch มีกี่ iteration', c: ['1', '2', '4', '8'], a: 2, e: '1 iteration = อัปเดต 1 ครั้งต่อ 1 batch · 8 ÷ 2 = 4 batch → 4 iteration ต่อ epoch' }
  ],
  init(root) {
    const T = TUTOR, $ = s => root.querySelector(s);
    const css = n => getComputedStyle(document.body).getPropertyValue(n).trim() || '#555';
    const f = (x, d) => T.fmt(x, d === undefined ? 3 : d);
    const inp = (box, k) => box.querySelector('[data-k="' + k + '"]');
    const SUB = '₀₁₂₃₄₅₆₇₈₉';
    const sub = n => String(n).split('').map(c => SUB[+c]).join('');
    const bad = a => !a.length || a.some(v => !isFinite(v));

    /* --- demo 1: distance & cosine --- */
    (function () {
      const box = $('#d0-dist'); if (!box) return;
      const out = box.querySelector('.out');
      const run = () => {
        const u = T.nums(inp(box, 'u').value), v = T.nums(inp(box, 'v').value);
        if (bad(u) || bad(v) || u.length !== v.length) { out.textContent = 'ใส่ตัวเลขคั่นด้วย , และให้ u กับ v มีจำนวนช่องเท่ากัน'; return; }
        const d = u.map((a, i) => v[i] - a);
        const sq = d.reduce((s, x) => s + x * x, 0), eu = Math.sqrt(sq), ma = d.reduce((s, x) => s + Math.abs(x), 0);
        let s = 'ผลต่างแต่ละแกน (v − u) = (' + d.map(x => f(x)).join(', ') + ')\n';
        s += 'Euclid    = √(' + d.map(x => '(' + f(x) + ')²').join(' + ') + ') = √' + f(sq) + ' ≈ ' + f(eu, 2) + '\n';
        s += 'Manhattan = ' + d.map(x => '|' + f(x) + '|').join(' + ') + ' = ' + f(ma) + '\n\n';
        const dot = T.dot(u, v), nu = T.norm(u), nv = T.norm(v);
        if (!nu || !nv) s += 'cosine: มีเวกเตอร์ยาว 0 จึงคำนวณทิศทางไม่ได้';
        else {
          const c = dot / (nu * nv);
          s += 'u·v = ' + u.map((a, i) => f(a) + '×' + f(v[i])).join(' + ') + ' = ' + f(dot) + '\n';
          s += '‖u‖ = ' + f(nu) + '   ‖v‖ = ' + f(nv) + '\n';
          s += 'cos(u, v) = ' + f(dot) + ' / (' + f(nu) + ' × ' + f(nv) + ') = ' + f(c) + '  → ' +
            (c > 0.9 ? 'ทิศเกือบเดียวกัน (คล้ายมาก)' : c > 0.5 ? 'ค่อนข้างคล้าย' : c > -0.1 ? 'แทบไม่เกี่ยวกัน (เกือบตั้งฉาก)' : 'ชี้คนละทาง') + '\n';
          s += 'cosine distance = 1 − cos = ' + f(1 - c);
        }
        out.textContent = s;
      };
      box.querySelectorAll('input').forEach(i => i.oninput = run);
      box.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { const p = b.getAttribute('data-p').split('|'); inp(box, 'u').value = p[0]; inp(box, 'v').value = p[1]; run(); });
      run();
    })();

    /* --- demo 2: dot product / weighted sum --- */
    (function () {
      const box = $('#d0-dot'); if (!box) return;
      const out = box.querySelector('.out'), bars = box.querySelector('.bars');
      const run = () => {
        const x = T.nums(inp(box, 'x').value), w = T.nums(inp(box, 'w').value), b = parseFloat(inp(box, 'b').value) || 0;
        if (bad(x) || bad(w) || x.length !== w.length) { out.textContent = 'x กับ w ต้องมีจำนวนตัวเลขเท่ากัน (คั่นด้วย ,) — ตอนนี้ x มี ' + x.length + ' ตัว, w มี ' + w.length + ' ตัว'; bars.innerHTML = ''; return; }
        const p = x.map((a, i) => a * w[i]), dot = p.reduce((s, v) => s + v, 0), z = dot + b;
        let s = p.map((v, i) => 'w' + sub(i + 1) + 'x' + sub(i + 1) + ' = ' + f(w[i]) + ' × ' + f(x[i]) + ' = ' + f(v, 4)).join('\n');
        s += '\n\nw·x = ' + p.map(v => f(v, 4)).join(' + ') + ' = ' + f(dot, 4);
        s += '\nz = w·x + b = ' + f(dot, 4) + ' + ' + f(b) + ' = ' + f(z, 4);
        s += '\nถ้าเป็น Perceptron: z ' + (z >= 0 ? '≥ 0 → ŷ = +1' : '< 0 → ŷ = −1') + '   ·   ถ้าผ่าน sigmoid: σ(z) = ' + f(T.sigmoid(z), 4);
        out.textContent = s;
        const all = p.concat([b]), m = Math.max(1e-9, ...all.map(Math.abs));
        bars.innerHTML = all.map((v, i) => '<div style="display:flex;align-items:center;gap:8px;margin:3px 0;font-size:14px"><span style="flex:0 0 130px">' +
          (i < p.length ? 'w' + sub(i + 1) + 'x' + sub(i + 1) : 'b') + ' = ' + f(v, 3) + '</span><span style="flex:1;position:relative;height:16px;background:var(--code);border-radius:8px"><i style="position:absolute;top:0;bottom:0;border-radius:8px;' +
          (v >= 0 ? 'left:50%' : 'right:50%') + ';width:' + (50 * Math.abs(v) / m).toFixed(2) + '%;background:' + (v >= 0 ? 'var(--c3)' : 'var(--c5)') + '"></i></span></div>').join('') +
          '<div class="mut" style="font-size:13px">แท่งเขียว = ดัน z ขึ้น · แท่งแดง = ดึง z ลง · ยิ่งยาวยิ่งมีผลมาก</div>';
      };
      box.querySelectorAll('input').forEach(i => i.oninput = run);
      box.querySelectorAll('[data-p]').forEach(bt => bt.onclick = () => { const p = bt.getAttribute('data-p').split('|'); inp(box, 'x').value = p[0]; inp(box, 'w').value = p[1]; inp(box, 'b').value = p[2]; run(); });
      run();
    })();

    /* --- demo 3: slope at a point + gradient step --- */
    (function () {
      const box = $('#d0-slope'); if (!box) return;
      const cv = box.querySelector('canvas'), ctx = cv.getContext('2d'), out = box.querySelector('.out'), sl = inp(box, 'w');
      const W0 = -1.5, W1 = 7.5, LM = 20.5;
      const L = v => (v - 3) * (v - 3), dL = v => 2 * (v - 3);
      const X = v => 40 + (v - W0) / (W1 - W0) * (cv.width - 60), Y = l => cv.height - 34 - l / LM * (cv.height - 54);
      let w = 7, trail = [7], log = [];
      const inView = v => isFinite(v) && v >= W0 && v <= W1;
      function draw() {
        const Wd = cv.width, H = cv.height;
        ctx.clearRect(0, 0, Wd, H);
        ctx.lineWidth = 1; ctx.strokeStyle = css('--line');
        ctx.beginPath(); ctx.moveTo(30, Y(0)); ctx.lineTo(Wd - 10, Y(0)); ctx.stroke();
        ctx.fillStyle = css('--mut'); ctx.font = '13px sans-serif'; ctx.textAlign = 'center';
        for (let k = -1; k <= 7; k++) ctx.fillText(String(k), X(k), Y(0) + 18);
        ctx.textAlign = 'left'; ctx.fillText('L(w) = (w − 3)²', 46, 18); ctx.fillText('w →', Wd - 44, Y(0) - 6);
        ctx.save(); ctx.beginPath(); ctx.rect(30, 0, Wd - 40, Y(0) + 1); ctx.clip();
        ctx.strokeStyle = css('--c1'); ctx.lineWidth = 3; ctx.beginPath();
        for (let i = 0; i <= 200; i++) { const v = W0 + (W1 - W0) * i / 200; i ? ctx.lineTo(X(v), Y(L(v))) : ctx.moveTo(X(v), Y(L(v))); }
        ctx.stroke();
        ctx.strokeStyle = css('--c2'); ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]); ctx.beginPath();
        trail.filter(inView).forEach((v, i) => { i ? ctx.lineTo(X(v), Y(L(v))) : ctx.moveTo(X(v), Y(L(v))); }); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = css('--c2'); trail.filter(inView).forEach(v => { ctx.beginPath(); ctx.arc(X(v), Y(L(v)), 4, 0, 7); ctx.fill(); });
        if (inView(w)) {
          const s = dL(w), x0 = X(w), y0 = Y(L(w));
          ctx.strokeStyle = css('--c5'); ctx.lineWidth = 2.5; ctx.beginPath();
          ctx.moveTo(X(w - 1), Y(L(w) - s)); ctx.lineTo(X(w + 1), Y(L(w) + s)); ctx.stroke();
          ctx.fillStyle = css('--c1'); ctx.beginPath(); ctx.arc(x0, y0, 8, 0, 7); ctx.fill();
          ctx.restore();
          if (Math.abs(s) > 1e-6) {
            const dir = s > 0 ? -1 : 1, ay = Y(0) + 28, ax = x0 + dir * 46;
            ctx.strokeStyle = css('--c3'); ctx.fillStyle = css('--c3'); ctx.lineWidth = 3;
            ctx.beginPath(); ctx.moveTo(x0, ay); ctx.lineTo(ax, ay); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(ax + dir * 8, ay); ctx.lineTo(ax, ay - 6); ctx.lineTo(ax, ay + 6); ctx.fill();
          }
        } else ctx.restore();
      }
      function show() {
        const s = dL(w), eta = parseFloat(inp(box, 'eta').value) || 0;
        let t;
        if (!isFinite(w) || Math.abs(w) > 1e6) t = 'w หลุดไปไกลมาก = loss ระเบิด! (η ใหญ่เกินไป) กดรีเซ็ตแล้วลด η';
        else {
          t = 'w = ' + f(w) + '   L(w) = ' + f(L(w)) + '   ความชัน = 2(w − 3) = ' + f(s);
          t += '\n→ ' + (Math.abs(s) < 1e-6 ? 'พื้นราบ = ก้นหุบแล้ว (loss ต่ำสุด)' : s > 0 ? 'ชันขึ้นทางขวา → ควรขยับ w ไปทางซ้าย (ลูกศรเขียว)' : 'ชันลงทางขวา → ควรขยับ w ไปทางขวา (ลูกศรเขียว)');
          t += '\nก้าวถัดไป: w − η×ความชัน = ' + f(w) + ' − ' + f(eta) + '×' + f(s) + ' = ' + f(w - eta * s);
          if (!inView(w)) t += '\n(w อยู่นอกกราฟแล้ว — η ใหญ่ไปหรือเปล่า?)';
        }
        out.textContent = t + (log.length ? '\n\nประวัติ: ' + log.slice(-8).join('  →  ') : '');
      }
      const upd = () => { draw(); show(); };
      const setW = v => { w = Math.round(v * 100) / 100; trail = [w]; log = []; sl.value = w; upd(); };
      const step = () => {
        if (!isFinite(w) || Math.abs(w) > 1e6) return;
        const eta = parseFloat(inp(box, 'eta').value) || 0, nw = w - eta * dL(w);
        log.push(f(w) + ' → ' + f(nw)); w = nw; trail.push(w);
        if (inView(w)) sl.value = w;
      };
      sl.oninput = () => setW(parseFloat(sl.value));
      inp(box, 'eta').oninput = show;
      box.querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
        const a = b.getAttribute('data-a');
        if (a === 'reset') return setW(7);
        if (a === 'step') step();
        if (a === 'five') for (let k = 0; k < 5; k++) step();
        upd();
      });
      let drag = false;
      const fromEvent = e => { const r = cv.getBoundingClientRect(); const px = (e.clientX - r.left) * cv.width / r.width; setW(Math.min(7, Math.max(-1, W0 + (px - 40) / (cv.width - 60) * (W1 - W0)))); };
      cv.style.cursor = 'pointer'; cv.style.touchAction = 'none';
      cv.addEventListener('pointerdown', e => { drag = true; fromEvent(e); });
      cv.addEventListener('pointermove', e => { if (drag) fromEvent(e); });
      window.addEventListener('pointerup', () => { drag = false; });
      upd();
    })();

    /* --- demo 4: sigmoid & softmax with temperature --- */
    (function () {
      const box = $('#d0-soft'); if (!box) return;
      const sig = box.querySelector('.out.sig'), soft = box.querySelector('.out.soft'), bars = box.querySelector('.bars'), tv = box.querySelector('.tv');
      const cols = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)', 'var(--c6)'];
      const run = () => {
        const z0 = parseFloat(inp(box, 'sz').value), s0 = T.sigmoid(z0);
        sig.textContent = 'σ(' + f(z0, 1) + ') = 1 / (1 + e^(' + f(-z0, 1) + ')) = 1 / (1 + ' + f(Math.exp(-z0), 4) + ') = ' + f(s0, 4) + '   → ' +
          (s0 > 0.5 ? 'มากกว่า 0.5 (ฝั่ง “ใช่”)' : s0 < 0.5 ? 'น้อยกว่า 0.5 (ฝั่ง “ไม่ใช่”)' : 'ก้ำกึ่งพอดี');
        const z = T.nums(inp(box, 'z').value), Tm = parseFloat(inp(box, 't').value);
        tv.textContent = 'T = ' + f(Tm, 1);
        if (bad(z)) { soft.textContent = 'ใส่ logits คั่นด้วย , เช่น 2, 1, 0'; bars.innerHTML = ''; return; }
        const p = T.softmax(z, Tm), e = z.map(v => Math.exp(v / Tm)), S = e.reduce((a, b) => a + b, 0);
        bars.innerHTML = p.map((v, i) => '<div style="display:flex;align-items:center;gap:8px;margin:4px 0;font-size:14px"><span style="flex:0 0 120px">ตัวเลือก ' + (i + 1) + ' (z = ' + f(z[i]) + ')</span><span style="flex:1;height:18px;background:var(--code);border-radius:9px;overflow:hidden"><i style="display:block;height:100%;width:' +
          (100 * v).toFixed(2) + '%;background:' + cols[i % cols.length] + '"></i></span><b style="flex:0 0 70px;text-align:right">' + (100 * v).toFixed(1) + '%</b></div>').join('');
        soft.textContent = 'e^(z/T) = [' + e.map(v => (isFinite(v) ? f(v, 3) : '∞')).join(', ') + ']  รวม = ' + (isFinite(S) ? f(S, 3) : 'ใหญ่มาก') +
          '\np = [' + p.map(v => f(v, 3)).join(', ') + ']  รวม = ' + f(p.reduce((a, b) => a + b, 0), 3) +
          '\n' + (Tm < 1 ? 'T < 1 → แหลมขึ้น (ตัวที่คะแนนสูงสุดเด่นขึ้น)' : Tm > 1 ? 'T > 1 → แบนลง (กระจายโอกาสให้ตัวอื่นมากขึ้น)' : 'T = 1 → softmax ปกติ');
      };
      box.querySelectorAll('input').forEach(i => i.oninput = run);
      run();
    })();

    /* --- demo 5: p^n and majority vote --- */
    (function () {
      const box = $('#d0-pn'); if (!box) return;
      const out = box.querySelector('.out'), bars = box.querySelector('.bars');
      const comb = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; };
      const run = () => {
        const p = parseFloat(inp(box, 'p').value), n = parseInt(inp(box, 'n').value, 10), k = parseInt(inp(box, 'k').value, 10);
        box.querySelector('.pv').textContent = 'p = ' + f(p, 2); box.querySelector('.nv').textContent = 'n = ' + n; box.querySelector('.kv').textContent = k + ' รอบ';
        const pn = Math.pow(p, n);
        bars.innerHTML = Array.from({ length: n }, (_, i) => { const v = Math.pow(p, i + 1); return '<i title="n = ' + (i + 1) + ': ' + f(v, 3) + '" style="flex:1;max-width:22px;height:' + (v * 100).toFixed(1) + '%;background:' + (i === n - 1 ? 'var(--c5)' : 'var(--c3)') + ';border-radius:3px 3px 0 0;display:block"></i>'; }).join('');
        let maj = 0; for (let j = Math.ceil(k / 2); j <= k; j++) maj += comb(k, j) * Math.pow(p, j) * Math.pow(1 - p, k - j);
        out.textContent = 'ทุกขั้นต้องสำเร็จ: pⁿ = ' + f(p, 2) + '^' + n + ' = ' + f(pn, 4) + '  (แท่งแดง = ขั้นสุดท้าย)' +
          '\n→ ' + (pn < 0.5 ? 'โอกาสพังมากกว่าสำเร็จแล้ว! (เหตุผลที่ agent งานยาวต้องมี checkpoint/ตรวจทุกขั้น)' : 'ยังสำเร็จมากกว่าครึ่ง') +
          '\n\nโหวตเสียงข้างมาก ' + k + ' รอบ (แต่ละรอบถูก ' + f(p, 2) + '): P(ข้างมากถูก) = ' + f(maj, 4) +
          '\n→ ' + (k === 1 ? 'รอบเดียว = เท่ากับ p' : maj > p + 1e-9 ? 'ดีกว่าถามครั้งเดียว (' + f(p, 2) + ')' : maj < p - 1e-9 ? 'แย่กว่าถามครั้งเดียว! เพราะ p < 0.5' : 'เท่าเดิม (p = 0.5 หรือ 1)');
      };
      box.querySelectorAll('input').forEach(i => i.oninput = run);
      run();
    })();
  }
});
