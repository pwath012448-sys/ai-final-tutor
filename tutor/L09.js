/* Lecture 09 · Unsupervised ML: clustering, representation and what a group actually means */
TUTOR.addLesson({
  id: 'L09', num: 9,
  navTitle: 'Unsupervised: Clustering & PCA',
  title: 'Unsupervised ML: Clustering, Representation และความหมายของ “กลุ่ม”',
  short: 'Feature space · Scaling · Distance · K-Means · Elbow · Silhouette · Hierarchical · GMM/EM · DBSCAN · PCA · Anomaly · Deployment',
  slides: 'Lecture 09 · 59 สไลด์',
  intro: 'ไม่มี label เข้าไปในการ fit เลย — แล้วเครื่องเรียนอะไร? บทนี้สอนให้เลือก representation, ระยะทาง, อัลกอริทึม และวิธีตรวจผลแบบไม่มีเฉลย พร้อมคำนวณ K-Means, silhouette, linkage, DBSCAN และ PCA ด้วยมือ',
  sections: [
    {
      id: 'intro', title: '1) Unsupervised learning เรียนอะไร',
      html: `
<p>สมมติได้กล่องรูปถ่าย 10,000 รูปที่ไม่มีใครเขียนชื่อไว้ เราก็ยังจัดกองได้ — รูปทะเล, รูปงานเลี้ยง, รูปเอกสาร — โดยดูว่ารูปไหน “คล้าย” กัน นี่คือ unsupervised learning: <b>มีแต่ X ไม่มี y</b></p>
<div class="callout def"><span class="lb">นิยาม</span><b>Unsupervised learning</b> = การเรียนรู้จากข้อมูล X อย่างเดียว ไม่มี target y เข้าไปใน fitting objective เป้าหมายคือหา “โครงสร้างที่ซ่อนอยู่” · <b>Cluster</b> = กลุ่มของข้อมูลที่คล้ายกันตามนิยามความคล้ายที่ <i>เรา</i> เลือก</div>
<table class="tbl"><tr><th>งาน</th><th>เรียนอะไรได้</th><th>ตัวอย่าง (สไลด์หน้า 4)</th></tr>
<tr><td><b>Clustering</b></td><td>กลุ่ม / membership</td><td>จัดกลุ่ม support tickets ที่อ่านคล้ายกัน</td></tr>
<tr><td><b>Dimensionality reduction</b></td><td>representation ที่กระชับ</td><td>บีบ feature เซนเซอร์ที่สัมพันธ์กัน</td></tr>
<tr><td><b>Density estimation</b></td><td>โมเดลความน่าจะเป็น</td><td>จำลองพฤติกรรมปกติของระบบ</td></tr>
<tr><td><b>Anomaly detection</b></td><td>คะแนนความผิดปกติ</td><td>ตรวจ network session ที่ผิดปกติ</td></tr></table>
<p>ใช้จริง: กลุ่มยีนที่ทำงานร่วมกันใน heatmap, แบ่งกลุ่มลูกค้าตามพฤติกรรม → <b>อัลกอริทึมเดียวกัน ความหมายต่างกัน: domain เป็นตัวตัดสินว่ากลุ่มมีประโยชน์ไหม</b></p>`
    },
    {
      id: 'found', title: '2) ก่อน cluster: 4 คำถาม · feature space · scaling · distance',
      html: `
<ol class="steps"><li><b>อะไรทำให้ 2 จุดคล้ายกัน?</b> → ต้องระบุ features, transformations, distance, algorithm</li>
<li><b>มีกี่กลุ่ม?</b> → parameter search, validation, ความละเอียดที่มีประโยชน์</li>
<li><b>แต่ละกลุ่มหมายถึงอะไร?</b> → ขนาด, การกระจาย, ตัวอย่างตัวแทน</li>
<li><b>ข้อมูลใหม่จะจัดยังไง?</b> → กฎทำนายที่ fit แล้ว หรือ policy จัดกลุ่มใหม่ (จัดเข้า centroid ใกล้สุดเป็นคุณสมบัติของ K-Means; DBSCAN และ agglomerative ต้องมี policy ของตัวเอง)</li></ol>
<div class="callout key"><span class="lb">Feature space คือโมเดลตัวจริง (หน้า 8)</span>
① <b>Unit of analysis</b>: 1 แถว = ลูกค้า 1 คน 1 เดือน (หน้าต่างที่เทียบกันได้) ② <b>Identifier</b> เช่น Customer ID → ห้ามใช้คำนวณระยะ ③ <b>Redundancy</b>: spend กับ spend with tax = แนวคิดเดียวนับสองครั้ง ④ <b>Categorical</b>: one-hot หรือ distance สำหรับข้อมูลผสม ⑤ <b>Missingness</b>: “ไม่ได้วัด” ไม่เท่ากับ “ศูนย์” → ตรวจก่อนแล้ว impute อย่างชัดเจน</div>
<p class="mut">หน้า 7: petal length ของ Iris (n = 150) มีสองยอดให้เห็น — ช่องว่างคือ <i>หลักฐาน</i> ของโครงสร้าง ไม่ใช่ <i>ข้อพิสูจน์</i> จำนวนกลุ่ม</p>
<h3>Scaling ตัดสินว่าความต่างไหน “สำคัญ”</h3>
<table class="tbl"><tr><th>Feature</th><th>ลูกค้า A</th><th>ลูกค้า B</th><th>(ผลต่าง)²</th></tr><tr><td>Orders</td><td>2</td><td>6</td><td>16</td></tr><tr><td>Spend (บาท)</td><td>1,000</td><td>5,000</td><td>16,000,000</td></tr></table>
<p>ถ้าไม่ scale ระยะทางเกือบทั้งหมดมาจาก Spend — Orders แทบไม่มีผล</p>
<table class="tbl"><tr><th>วิธี</th><th>ใช้เมื่อ</th></tr><tr><td>Standardize z = (x − mean)/SD</td><td>feature ตัวเลขต่างหน่วย ต้องการให้นับเท่า ๆ กัน</td></tr><tr><td>Log transform</td><td>feature เบ้มาก (เปลี่ยนรูปทรงการกระจาย)</td></tr><tr><td>L2 normalize</td><td>สนใจแค่ทิศทางของเวกเตอร์</td></tr></table>
<div class="callout warn"><span class="lb">กฎเหล็ก</span>fit transform บนประชากรอ้างอิงครั้งเดียวแล้วใช้ซ้ำ — <b>ห้าม refit</b> บนข้อมูลใหม่</div>
<h3>เลือก distance ให้ตรงความหมายของ “คล้าย”</h3>
<figure class="slide"><img src="img/L09_p10.jpg" alt=""><figcaption>Lecture 09 หน้า 10 · A = (1, 2), D = (8, 8)</figcaption></figure>
<div class="formula">Euclidean  √Σ(xⱼ − yⱼ)²          ระยะเส้นตรง · K-Means ใช้ตัวนี้
Manhattan  Σ|xⱼ − yⱼ|            ผลรวมระยะตามแกน · ไหวตามช่องว่างใหญ่ตัวเดียวน้อยกว่า Euclidean (โตแบบเส้นตรง ไม่ยกกำลังสอง)
Cosine distance  1 − x·y/(‖x‖‖y‖)   ดูแค่ทิศทาง ไม่สนขนาด</div>
<div class="demo" id="d9-dist"><h4>🔧 ลองเล่น: คำนวณระยะ 3 แบบ</h4>
<div class="row"><label>x = <input type="text" data-k="a" value="1, 2"></label><label>y = <input type="text" data-k="b" value="8, 8"></label></div>
<div class="row"><button class="ghost" data-p="1, 2|8, 8">A, D (สไลด์)</button><button class="ghost" data-p="2, 1000|6, 5000">Orders, Spend ไม่ scale</button><button class="ghost" data-p="1, 1|10, 10">ทิศเดียวกัน ขนาดต่าง</button></div><div class="out"></div></div>`
    },
    {
      id: 'families', title: '3) Clustering 4 ตระกูล',
      html: `
<figure class="slide"><img src="img/L09_p11.jpg" alt=""><figcaption>Lecture 09 หน้า 11 · ข้อมูลชุดเดียวกัน — แต่ละตระกูลเห็นโครงสร้างต่างกัน</figcaption></figure>
<table class="tbl"><tr><th>ตระกูล</th><th>อัลกอริทึม</th><th>นิยาม “กลุ่ม”</th><th>ปุ่มควบคุมหลัก</th></tr>
<tr><td>Centroid</td><td>K-Means</td><td>จุดที่อยู่ใกล้ prototype</td><td>K</td></tr>
<tr><td>Connectivity</td><td>Agglomerative</td><td>กลุ่มซ้อนกันที่ได้จากการรวม</td><td>linkage + จุดตัดต้นไม้</td></tr>
<tr><td>Distribution</td><td>Gaussian mixture</td><td>ส่วนผสมของการแจกแจง</td><td>จำนวน component + รูปแบบ covariance</td></tr>
<tr><td>Density</td><td>DBSCAN</td><td>บริเวณหนาแน่นที่เชื่อมกัน</td><td>รัศมี eps + เกณฑ์ความหนาแน่น</td></tr></table>
<div class="callout key"><span class="lb">หลักคิด</span>ไม่จำเป็นต้องมี partition “ที่ถูกต้องจริง” แบบเดียว · <b>เลือกตระกูลจากรูปทรงที่คาดไว้</b> ไม่ใช่จากความเคยชิน</div>`
    },
    {
      id: 'kmeans', title: '4) K-Means: objective, 5 ขั้น และคำนวณด้วยมือ',
      html: `
<div class="formula">J(z, μ) = Σᵢ ‖xᵢ − μ_z(i)‖²      (inertia = WCSS = within-cluster SSE)</div>
<div class="callout def"><span class="lb">นิยาม</span><b>K-Means</b> แบ่งข้อมูลเป็น K กลุ่มโดยทำให้ J ต่ำสุด — J คือผลรวมระยะ Euclidean <b>ยกกำลังสอง</b> ของทุกจุดถึง centroid ของกลุ่มตัวเอง · <b>Centroid</b> = ค่าเฉลี่ยของสมาชิกในกลุ่ม</div>
<div class="grid2"><div class="card"><b>ตรึง centroid ไว้</b> → การ update ที่ดีที่สุดคือ <b>Assign</b>: ให้แต่ละจุดไปอยู่กับ centroid ที่ใกล้ที่สุด</div><div class="card"><b>ตรึง assignment ไว้</b> → การ update ที่ดีที่สุดคือ <b>Update</b>: centroid = ค่าเฉลี่ยของสมาชิก</div></div>
<ol class="steps"><li>เลือก K และวาง centroid เริ่มต้น K ตัว (ค่า default คือ <b>K-Means++</b>)</li><li>คำนวณระยะทุกจุดถึงทุก centroid</li><li>Assign เข้ากลุ่มที่ใกล้ที่สุด</li><li>คำนวณ centroid ใหม่ = ค่าเฉลี่ยสมาชิก</li><li>ทำซ้ำจน centroid ไม่ขยับ</li></ol>
<div class="callout key"><span class="lb">ทำไมไม่มีวันแย่ลง</span>แต่ละขั้นเป็นการ update ที่ดีที่สุดเมื่อตรึงอีกอย่าง → J ไม่เคยเพิ่ม · แต่จุดเริ่มต่างกันอาจจบที่ <b>local solution</b> ต่างกัน → ใช้ K-Means++ และหลาย initialization (n_init = 20, random_state = 42)</div>
<figure class="slide"><img src="img/L09_p16.jpg" alt=""><figcaption>Lecture 09 หน้า 16 · centroid เริ่มแย่ 3 ตัว ลู่เข้าภายใน 5 iterations</figcaption></figure>
<h3>ตัวอย่างลูกค้า 7 คน K = 2 (หน้า 18–20)</h3>
<figure class="slide"><img src="img/L09_p18.jpg" alt="" style="max-width:560px"><figcaption>Lecture 09 หน้า 18 · A(1,2) B(2,1) C(2,3) G(5,5) D(8,8) E(9,10) F(10,9)</figcaption></figure>
<ol class="steps"><li>centroid เริ่ม: A = (1, 2) และ F = (10, 9) (เลือกเพื่อให้คำนวณซ้ำได้) · F และ M อยู่บนสเกลเดียวกันแล้ว ไม่ต้อง standardize ซ้ำ</li>
<li>Assign: G ไป C1 เพราะ d(G, A) = 5.00 &lt; d(G, F) = 6.40 → C1 = {A, B, C, G}, C2 = {D, E, F}</li>
<li>Update: μ₁ = ((1+2+2+5)/4, (2+1+3+5)/4) = (2.50, 2.75) · μ₂ = (9, 9)</li>
<li>SSE: C1 = 2.8125 + 3.3125 + 0.3125 + 11.3125 = <b>17.75</b> · C2 = 2 + 1 + 1 = <b>4</b> → J = <b>21.75</b></li>
<li>Assign รอบถัดไปไม่มีใครย้ายกลุ่ม → converged</li></ol>
<div class="demo" id="d9-km"><h4>🔧 ลองเล่น: K-Means ทีละขั้นบนลูกค้า 7 คน</h4>
<div class="row"><label>centroid เริ่ม (x,y ; x,y ; …) <input type="text" data-k="c" value="1,2 ; 10,9" style="width:240px"></label></div>
<div class="row"><button data-act="assign">① Assign</button><button data-act="update">② Update</button><button data-act="auto">รันจนลู่เข้า</button><button class="ghost" data-act="reset">รีเซ็ต</button>
<button class="ghost" data-p="1,2 ; 2,1">ลองเริ่มแย่: A, B</button><button class="ghost" data-p="1,2 ; 5,5 ; 10,9">K = 3</button></div>
<canvas width="420" height="380"></canvas><div class="out"></div></div>
<details class="reveal"><summary>ลองคิดก่อน: ทำไม SSE ของ G (11.3125) ใหญ่ที่สุดใน C1?</summary>G อยู่ห่าง centroid (2.5, 2.75) มากที่สุด: (5 − 2.5)² + (5 − 2.75)² = 6.25 + 5.0625 · SSE ใช้ระยะ <i>ยกกำลังสอง</i> จุดไกลจึงมีผลมาก</details>
<div class="callout def"><span class="lb">ต้นทุนและการตั้งค่า</span>1 Lloyd iteration = <b>O(nKd)</b> (n จุด, K centroid, d feature) · T รอบ × R restart ≈ O(RTnKd) · ตั้ง tol และ max_iter, อ่าน warning · ข้อมูลใหญ่ใช้ <b>MiniBatchKMeans</b> (แลกความแม่นกับความเร็ว) · <b>K-Means++</b> เลือก centroid เริ่มให้กระจายห่างกัน (โอกาสเลือก ∝ ระยะ²)</div>`
    },
    {
      id: 'choosek', title: '5) เลือก K: Elbow และ Silhouette',
      html: `
<div class="callout warn"><span class="lb">ความจริงข้อแรก</span>เพิ่ม K แล้ว WCSS <b>ลดลงเสมอ</b> (K = n → WCSS = 0) → “WCSS ต่ำสุด” ไม่มีวันบอก K ที่ดีที่สุด · ไม่มีคะแนนตัวไหนเลือก K ให้เราได้ ต้องอ่านหลักฐานหลายแบบพร้อมกัน</div>
<figure class="slide"><img src="img/L09_p23.jpg" alt=""><figcaption>Lecture 09 หน้า 23 · K = 1 → 4: WCSS 535, 283, 82, 70</figcaption></figure>
<h3>Elbow method</h3>
<p>plot WCSS เทียบ K แล้วหา “ข้อศอก” — จุดที่ต่อจากนั้นการเพิ่ม cluster ซื้อการลดลงได้น้อย (heuristic ไม่ใช่การพิสูจน์ทางสถิติ)</p>
<figure class="slide"><img src="img/L09_p24.jpg" alt=""><figcaption>Lecture 09 หน้า 24 · drop: −252, −201, −12, −6 → elbow ที่ K = 3</figcaption></figure>
<div class="callout warn"><span class="lb">จุดที่สไลด์ขัดกันเอง</span>หัวข้อหน้า 24 บอก “seven points” แต่ตัวเลข 535/283/82/70/64 มาจากข้อมูลหน้า 23 (ลูกค้า 7 คนมี WCSS ที่ K = 2 เพียง 21.75) · กราฟเขียน elbow k = 3 แต่ข้อความบอก “K = 2 captures a large drop. K = 3 only isolates G” · ถ้าข้อสอบให้ตารางนี้: drop หักจาก −201 เป็น −12 หลัง K = 3 → <b>ตอบ K = 3</b> และเสริมว่าต้องดู silhouette / ความหมายประกอบ</div>
<h3>Silhouette</h3>
<div class="formula">s(i) = [ b(i) − a(i) ] / max{ a(i), b(i) }
a(i) = ระยะเฉลี่ยถึงสมาชิกอื่นใน "กลุ่มตัวเอง"           (ยิ่งเล็กยิ่งกระชับ)
b(i) = ระยะเฉลี่ยถึงทุกจุดของ "กลุ่มอื่นที่ใกล้ที่สุด"      (ทั้งกลุ่ม ไม่ใช่ centroid)</div>
<table class="tbl"><tr><th>s(i)</th><th>แปลว่า</th></tr><tr><td>ใกล้ +1</td><td>อยู่ลึกในกลุ่ม ไกลจากกลุ่มถัดไป</td></tr><tr><td>ใกล้ 0</td><td>อยู่บนขอบ หรือกลุ่มซ้อนทับ</td></tr><tr><td>ติดลบ</td><td>กลุ่มอื่นมีระยะเฉลี่ยน้อยกว่า (น่าจะจัดผิด)</td></tr></table>
<figure class="slide"><img src="img/L09_p25.jpg" alt=""><figcaption>Lecture 09 หน้า 25 · a(G) = 4.54, b(G) = 5.68 → s(G) ≈ 0.20 · mean 0.68</figcaption></figure>
<ol class="steps"><li>a(G) = mean(d(G,A) = 5, d(G,B) = 5, d(G,C) = 3.61) = 4.54</li><li>b(G) = mean(d(G,D) = 4.24, d(G,E) = 6.40, d(G,F) = 6.40) = 5.68</li><li>s(G) = (5.68 − 4.54) / 5.68 = <b>0.20</b> → G อยู่บนขอบ</li></ol>
<table class="tbl"><tr><th>K</th><th>WCSS</th><th>mean silhouette</th><th>ความหมายจริง (หน้า 26)</th></tr><tr><td>2</td><td>21.75</td><td>0.68</td><td>สองกลุ่มกว้าง</td></tr><tr><td>3</td><td>6.67</td><td>0.54</td><td>G กลายเป็นกลุ่มเดี่ยว</td></tr><tr><td>4</td><td>3.67</td><td>0.38</td><td>แบ่งย่อยต่อ</td></tr></table>
<div class="demo" id="d9-sil"><h4>🔧 ลองเล่น: Silhouette + WCSS ของลูกค้า 7 คน</h4>
<div class="row"><label>กลุ่มของ A, B, C, G, D, E, F <input type="text" data-k="lab" value="1,1,1,1,2,2,2" style="width:200px"></label>
<button class="ghost" data-p="1,1,1,1,2,2,2">K = 2</button><button class="ghost" data-p="1,1,1,3,2,2,2">K = 3 (G เดี่ยว)</button><button class="ghost" data-p="1,1,2,2,2,2,2">จัดแปลก ๆ</button></div><div class="out"></div></div>
<div class="callout key"><span class="lb">คะแนนเดียวไม่พอ (หน้า 26)</span>① ดูข้างในแต่ละกลุ่ม: ขนาดและการกระจายของ silhouette ไม่ใช่แค่ค่าเฉลี่ย ② ทำซ้ำหลาย seed / resample ว่ากลุ่มเดิมกลับมาไหม ③ เลือกผลที่เสถียร ตีความได้ และใช้ตัดสินใจได้ · กลุ่มที่มีจุดผิดปกติจุดเดียวอาจเป็น alert ที่ดี แต่ไม่ใช่ segment โดยอัตโนมัติ</div>`
    },
    {
      id: 'valid', title: '6) ตรวจผลโดยไม่มี label + workflow',
      html: `
<table class="tbl"><tr><th>หลักฐาน</th><th>ถามว่า</th><th>ข้อจำกัด</th></tr>
<tr><td>Internal</td><td>กลุ่มกระชับและแยกจากกันไหม (เช่น silhouette)</td><td>ขึ้นกับ distance และรูปทรงกลุ่ม</td></tr>
<tr><td>Stability</td><td>ข้อมูล/การตั้งค่าคล้ายกัน ได้กลุ่มคล้ายกันไหม</td><td>กลุ่มที่เสถียรอาจไร้ประโยชน์</td></tr>
<tr><td>External</td><td>ตรงกับ label ที่กันไว้ไหม</td><td>class ที่รู้จักอาจไม่ใช่ cluster ที่มีประโยชน์</td></tr>
<tr><td>Usefulness</td><td>profile นำไปสู่ action ที่มีเหตุผลไหม</td><td>action นั้นต้องประเมินผลแยก</td></tr></table>
<div class="callout def"><span class="lb">นิยาม</span><b>Adjusted Rand Index (ARI)</b> ใช้เทียบ clustering สองชุดบนข้อมูลเดียวกัน โดยไม่สนว่าตั้งชื่อกลุ่มสลับกัน (กลุ่ม “1” ของชุดหนึ่งอาจตรงกับกลุ่ม “2” ของอีกชุด)</div>
<ol class="steps"><li><b>Define</b>: หน่วยสังเกต หน้าต่างเวลา และ feature ที่มีตอนใช้งานจริง</li><li><b>Audit</b>: missing, duplicates, หน่วย, ความผิดพลาดข้อมูล</li><li><b>Transform</b>: impute / encode / log / scale — แต่ละอย่างต้องมีเหตุผล</li><li><b>Fit</b>: กำหนด seed, บันทึกทั้ง preprocessing และ model</li><li><b>Evaluate</b>: หลายค่า parameter, ความเสถียร, profile ที่มีความหมาย</li></ol>
<p class="mut">สำหรับข้อมูลในอนาคต: แบ่งตามเวลาหรือหน่วยอิสระ <b>ก่อน</b> fit transform ใด ๆ</p>`
    },
    {
      id: 'hier', title: '7) Hierarchical clustering: linkage ตัดสินว่าอะไรรวมกัน',
      html: `
<div class="callout def"><span class="lb">นิยาม</span><b>Agglomerative clustering</b>: เริ่มจากทุกจุดเป็นกลุ่มเดี่ยว แล้วรวมคู่กลุ่มที่ linkage บอกว่าใกล้สุดทีละขั้น (รวมแล้วย้อนไม่ได้) · <b>Dendrogram</b> บันทึกลำดับและความสูงของการรวม · <b>ตัดแนวนอน</b> ที่ความสูงหนึ่ง = ได้ partition ที่สเกลระยะนั้น</div>
<table class="tbl"><tr><th>Linkage</th><th>ระยะระหว่างสองกลุ่ม</th><th>นิสัย</th></tr>
<tr><td>Single</td><td>min ของระยะทุกคู่</td><td>ต่อกันเป็นสายผ่านจุดสะพาน → กลุ่มยาวเรียว (chaining)</td></tr>
<tr><td>Complete</td><td>max ของระยะทุกคู่</td><td>กลุ่มกระชับ ขนาดใกล้กัน</td></tr>
<tr><td>Average</td><td>mean ของระยะทุกคู่</td><td>ประนีประนอม</td></tr>
<tr><td>Ward</td><td>SSE ภายในที่เพิ่มขึ้นถ้ารวม</td><td>กลุ่มกระชับแบบ variance · ต้องเป็น Euclidean</td></tr></table>
<figure class="slide"><img src="img/L09_p31.jpg" alt=""><figcaption>Lecture 09 หน้า 31 · A = 0, B = 1, C = 4, D = 6 · ตัดที่ 2.5 ได้ {A,B} และ {C,D}</figcaption></figure>
<ol class="steps"><li>Single: รวม A–B ที่ 1 → รวม C–D ที่ 2 → รวม {A,B}–{C,D} ที่ 3</li><li>ระยะทุกคู่ระหว่าง {0,1} กับ {4,6}: 4, 6, 3, 5</li><li>single = min = <b>3</b> · complete = max = <b>6</b> · average = 18/4 = <b>4.5</b></li></ol>
<div class="demo" id="d9-link"><h4>🔧 ลองเล่น: Agglomerative บนจุด 1 มิติ</h4>
<div class="row"><label>จุด <input type="text" data-k="pts" value="0, 1, 4, 6"></label><label>linkage <select data-k="lk"><option value="single">single</option><option value="complete">complete</option><option value="average">average</option><option value="ward">Ward (ΔSSE)</option></select></label></div>
<div class="row"><label>เทียบกลุ่ม G₁ <input type="text" data-k="g1" value="0, 1" style="width:110px"></label><label>G₂ <input type="text" data-k="g2" value="4, 6" style="width:110px"></label></div><div class="out"></div></div>`
    },
    {
      id: 'gmm', title: '8) Gaussian Mixture Model และ EM',
      html: `
<div class="formula">p(x) = Σⱼ πⱼ · N(x | μⱼ, Σⱼ)</div>
<table class="tbl"><tr><th>สัญลักษณ์</th><th>ชื่อ</th><th>ความหมาย</th></tr>
<tr><td>πⱼ</td><td>mixture weight</td><td>สัดส่วนล่วงหน้าของ component j (รวม = 1)</td></tr>
<tr><td>μⱼ</td><td>mean vector</td><td>จุดศูนย์กลางของ component j</td></tr>
<tr><td>Σⱼ</td><td>covariance matrix</td><td>การกระจาย + ความสัมพันธ์ของ feature (full → วงรีเอียงได้)</td></tr>
<tr><td>rᵢⱼ</td><td>responsibility</td><td>P(component j | xᵢ) = soft membership รวมต่อจุด = 1</td></tr></table>
<figure class="slide"><img src="img/L09_p32.jpg" alt=""><figcaption>Lecture 09 หน้า 32 · สีของจุด = responsibility ไม่ใช่ label ตายตัว</figcaption></figure>
<ol class="steps"><li><b>Initialize</b> μ, Σ, π</li><li><b>E-step</b>: คำนวณ rᵢⱼ ของทุกจุดกับทุก component</li><li><b>M-step</b>: อัปเดตด้วยค่าเฉลี่ยถ่วงน้ำหนัก r เช่น μⱼ = Σᵢ rᵢⱼ xᵢ / Σᵢ rᵢⱼ</li><li><b>Repeat</b> จน likelihood ดีขึ้นน้อยมาก</li></ol>
<div class="demo" id="d9-gmm"><h4>🔧 ลองเล่น: responsibility ของ GMM 1 มิติ (E-step 1 จุด)</h4>
<div class="row"><label>x <input type="number" data-k="x" value="3" step="any"></label><label>π₁ <input type="number" data-k="p1" value="0.5" step="any"></label><label>μ₁ <input type="number" data-k="m1" value="0" step="any"></label><label>σ₁ <input type="number" data-k="s1" value="1" step="any"></label><label>μ₂ <input type="number" data-k="m2" value="5" step="any"></label><label>σ₂ <input type="number" data-k="s2" value="2" step="any"></label></div><div class="out"></div></div>
<div class="callout key"><span class="lb">จำ</span>เปรียบเทียบจำนวน component / รูปแบบ covariance ด้วย <b>BIC/AIC (ยิ่งต่ำยิ่งดี บนข้อมูลเดียวกัน)</b> · K-Means = hard assignment, GMM = soft · ความน่าจะเป็นขึ้นกับโมเดลที่ fit — ไม่ใช่ข้อพิสูจน์ว่ามีหมวดหมู่นั้นจริงในโลก</div>`
    },
    {
      id: 'dbscan', title: '9) DBSCAN: กลุ่มหนาแน่น + noise',
      html: `
<div class="callout def"><span class="lb">นิยาม</span><b>Core point</b> = มีจุดในรัศมี eps อย่างน้อย min_samples จุด (<b>นับตัวเอง</b>) · <b>Border point</b> = อยู่ในรัศมี eps ของ core แต่ตัวเองไม่ใช่ core · <b>Noise</b> = ไม่ใช่ทั้งสอง ได้ label −1 · กลุ่ม = core ที่เชื่อมต่อกัน + border รอบ ๆ</div>
<figure class="slide"><img src="img/L09_p34.jpg" alt=""><figcaption>Lecture 09 หน้า 34 · core · border · noise</figcaption></figure>
<ol class="steps"><li>x = {0, 0.1, 0.2, 0.4, 2.0}, eps = 0.21, min_samples = 3</li><li>นับเพื่อนในรัศมี (รวมตัวเอง): 0 → 3, 0.1 → 3, 0.2 → 4, 0.4 → 2, 2.0 → 1</li><li>core = 0, 0.1, 0.2 · 0.4 ไม่ถึง 3 แต่ใกล้ core 0.2 → border · 2.0 → noise (−1)</li></ol>
<div class="demo" id="d9-db"><h4>🔧 ลองเล่น: DBSCAN 1 มิติ</h4>
<div class="row"><label>จุด <input type="text" data-k="pts" value="0, 0.1, 0.2, 0.4, 2.0"></label><label>eps <input type="number" data-k="eps" value="0.21" step="any"></label><label>min_samples <input type="number" data-k="ms" value="3"></label></div><div class="out"></div></div>
<table class="tbl"><tr><th>ปรับ</th><th>ผล</th></tr><tr><td>eps เล็กไป</td><td>noise เยอะ กลุ่มแตก</td></tr><tr><td>eps ใหญ่ไป</td><td>บริเวณหนาแน่นต่างกันถูกรวม</td></tr><tr><td>min_samples มากขึ้น</td><td>เข้มขึ้น noise มากขึ้น</td></tr><tr><td>ความหนาแน่นต่างกันมาก</td><td>eps ค่าเดียวใช้ไม่ได้ทั่วทั้ง space</td></tr></table>
<div class="callout warn"><span class="lb">ต่างจาก K-Means</span>DBSCAN <b>ไม่จำเป็นต้องจัดทุกจุด</b> และ <b>เลือกจำนวนกลุ่มเอง</b> · รายงานสัดส่วน noise ด้วย · DBSCAN ใน sklearn <b>ไม่มี predict</b> · HDBSCAN ดูหลายสเกลแต่มี parameter ของตัวเอง · k-distance plot แค่ <i>แนะนำ</i> eps</div>
<table class="tbl"><tr><th>วิธี</th><th>โครงสร้างที่เหมาะ</th><th>ปุ่มหลัก</th><th>จัดจุดใหม่</th></tr>
<tr><td>K-Means</td><td>กลุ่มกระชับรอบ centroid</td><td>K, initialization</td><td>centroid ใกล้สุด</td></tr>
<tr><td>GMM</td><td>วงรีที่ซ้อนกัน</td><td>K, covariance</td><td>posterior probability</td></tr>
<tr><td>Agglomerative</td><td>ลำดับชั้นที่มีประโยชน์</td><td>linkage, tree cut</td><td>ต้องมี policy แยก</td></tr>
<tr><td>DBSCAN</td><td>บริเวณหนาแน่นเชื่อมกัน</td><td>eps, min_samples</td><td>ต้องมี policy แยก</td></tr></table>`
    },
    {
      id: 'pca', title: '10) PCA: เปลี่ยนพิกัดให้เหลือน้อยมิติ',
      html: `
<p>นึกถึงการถ่ายรูปเงาของวัตถุ 3 มิติลงบนผนัง — เลือกมุมไฟที่เงา “กางออก” มากที่สุดจะเห็นรายละเอียดมากที่สุด PCA คือการเลือกทิศที่ข้อมูลกระจาย (variance) มากที่สุด</p>
<div class="callout def"><span class="lb">นิยาม</span><b>PCA</b> หาทิศตั้งฉากกันที่เก็บ variance ได้มากที่สุด (เท่ากับทำให้ reconstruction error ต่ำสุดที่ rank ที่เลือก) · <b>PC</b> = eigenvector ของ covariance matrix · <b>Explained variance ratio</b> = λₖ / Σλ · PCA <b>ไม่ใช่ clustering และไม่ใช้ label</b></div>
<div class="formula">Xc = X − mean(X)      Xc = U S Vᵀ      Z = Xc V_q      X̂ = Z V_qᵀ + mean(X)</div>
<figure class="slide"><img src="img/L09_p39.jpg" alt=""><figcaption>Lecture 09 หน้า 39 · PC1 = (1, 1)/√2 เก็บ variance 90%</figcaption></figure>
<ol class="steps"><li>ข้อมูล (−2,−1), (−1,−2), (1,2), (2,1) centre แล้ว</li><li>covariance (หาร n − 1 = 3) = [10/3 8/3; 8/3 10/3]</li><li>eigenvalues = 10/3 ± 8/3 = 6 และ 2/3 → PC1 = (1, 1)/√2 เก็บ 6/(6 + 2/3) = 90%</li><li>ฉาย (2, 1): z = (2 + 1)/√2 = 3/√2 · สร้างกลับ = z·PC1 = (1.5, 1.5)</li></ol>
<div class="demo" id="d9-pca"><h4>🔧 ลองเล่น: PCA 2 มิติ</h4>
<div class="row"><label>จุด (x,y ; x,y ; …) <input type="text" data-k="pts" value="-2,-1 ; -1,-2 ; 1,2 ; 2,1" style="width:300px"></label></div>
<canvas width="380" height="380"></canvas><div class="out"></div></div>
<div class="callout warn"><span class="lb">ระวัง</span>sklearn centre ให้แต่ <b>ไม่ scale</b> — จะ scale หรือไม่ต้องตัดสินเอง · เครื่องหมาย ± ของ PC เป็นอะไรก็ได้ อย่าอ่านความหมายจากทิศ</div>`
    },
    {
      id: 'repr', title: '11) Representation: t-SNE, embeddings, autoencoder, spectral',
      html: `
<table class="tbl"><tr><th>Representation</th><th>ต้องตรวจอะไร (หน้า 40)</th></tr>
<tr><td>Original features</td><td>ระยะมีความหมายไหม มีตัวแปรซ้ำหรือไม่เกี่ยวไหม</td></tr>
<tr><td>PCA coordinates</td><td>variance ที่เก็บได้ โครงสร้างที่หายไปในทิศที่ทิ้ง profile เสถียรไหม</td></tr>
<tr><td>t-SNE visualization</td><td>ไวต่อ parameter และ seed บิดระยะเฉพาะที่</td></tr>
<tr><td>Text/image embeddings</td><td>domain ของโมเดล normalization คุณภาพเพื่อนบ้านใกล้สุด</td></tr></table>
<div class="callout warn"><span class="lb">ห้าม</span>สรุปจำนวนกลุ่มจากแผนที่ 2 มิติอย่างเดียว — ต้องประเมินใน space ที่ใช้ fit จริง</div>
<div class="grid2"><div class="card"><h4>Autoencoder</h4><p>z = encoder(x), x′ = decoder(z) · เรียน representation ไม่เชิงเส้นโดยลด reconstruction loss · ต้องมี bottleneck หรือ regularizer ไม่งั้นแค่ copy input · error ต่ำไม่ได้แปลว่า representation มีความหมาย</p></div>
<div class="card"><h4>Spectral clustering</h4><p>affinity graph → embedding → K-Means · กลุ่มอาจแยกง่ายกว่าในพิกัดเดิม · ผลขึ้นกับการสร้าง graph และกินหน่วยความจำมาก</p></div></div>
<p>ทั้งสองแบบ “เปลี่ยน representation แล้วค่อย cluster” — คำถามเรื่อง clustering ยังอยู่ครบ</p>`
    },
    {
      id: 'cases', title: '12) กรณีศึกษา · RFM · Anomaly · Deploy · สรุป',
      html: `
<table class="tbl"><tr><th>Case</th><th>หน่วยสังเกต</th><th>คำถาม</th><th>ข้อคิดหลัก</th></tr>
<tr><td>1 ประชากรตามอายุ</td><td>จังหวัด</td><td>โปรไฟล์อายุเป็นกลุ่มที่มีประโยชน์ไหม</td><td>G0 (11) G1 (30) G2 (29) G3 (7) · G3 เด็กมากสุด ผู้สูงอายุน้อยสุด · counts vs proportions vs standardized ให้กลุ่มต่างกัน</td></tr>
<tr><td>2 Telecom</td><td>ผู้ใช้บริการ</td><td>รูปแบบการใช้ต่างกันอย่างไร</td><td>6 feature สเกลต่างกัน ต้อง scale · กลุ่ม 137/269/77 · radar: 0 = ค่าเฉลี่ย</td></tr>
<tr><td>3 รายได้ครัวเรือน</td><td>จังหวัด</td><td>โปรไฟล์แหล่งรายได้ต่างกันไหม</td><td>C1 (19) อาชีพหลักต่ำแต่แหล่งอื่นสูง · C3 (11) กลับกัน · ระวังต่อคน/ต่อครัวเรือน, บาท/สัดส่วน</td></tr>
<tr><td>4 จราจรทางหลวง</td><td>จุดนับรถ</td><td>สัดส่วนรถแบบไหนผิดปกติ</td><td>C6 รถยนต์+บรรทุกแทบไม่มีมอเตอร์ไซค์ · “ผิดปกติ” เทียบกับ representation ที่เลือกเสมอ</td></tr></table>
<figure class="slide"><img src="img/L09_p47.jpg" alt=""><figcaption>Lecture 09 หน้า 47 · Telecom: elbow ที่ K = 3 + radar profile (อ่านจากซี่ที่ออกห่างศูนย์)</figcaption></figure>
<div class="callout key"><span class="lb">บทเรียนจากกรณีศึกษา</span>การเลือก <b>preprocessing / representation</b> ไม่ใช่อัลกอริทึม เป็นตัวตัดสินว่ากลุ่มตอบคำถามอะไร · แผนที่บอกความสัมพันธ์ ไม่ใช่เหตุ · ระดับจังหวัดสรุปถึงบุคคลไม่ได้ · ทุกคำอธิบายกลุ่มเป็น <i>สมมติฐาน</i> ที่ต้องหาหลักฐานเพิ่ม</div>
<h3>RFM</h3>
<p><b>R</b>ecency = จำนวนวันนับจากซื้อล่าสุด (มาก = หายไปนาน) · <b>F</b>requency = จำนวน order ที่ไม่ซ้ำ (ไม่ใช่บรรทัด invoice) · <b>M</b>onetary = ยอดซื้อรวม (กำหนด net/gross, ยกเลิก, คืนเงิน) → สร้างตาราง → ดูความเบ้ → log ถ้าจำเป็น → scale → เทียบหลาย clustering → profile</p>
<h3>Anomaly detection</h3>
<figure class="slide"><img src="img/L09_p54.jpg" alt=""><figcaption>Lecture 09 หน้า 54 · กฎ univariate พลาดจุดที่ปกติทุกแกนแต่ผิดปกติเมื่อรวมกัน</figcaption></figure>
<div class="formula">score(x) = min_j ‖ transform(x) − μ_j ‖     (ระยะถึง centroid ที่ใกล้สุด)</div>
<ul><li>ใช้ข้อมูลอ้างอิงที่เป็น “ปกติ” จริง ไม่ใช่อะไรก็ได้ที่มี</li><li>ตั้ง threshold ตามกำลังคนตรวจ และผลลัพธ์ที่มี label</li><li>threshold ค่าเดียวทั้งระบบจะ flag กลุ่มที่กระจายกว้างมากเกินไป</li><li>คะแนนสูงอาจเป็น error, ของใหม่ หรือพฤติกรรมหายากที่ถูกต้อง</li></ul>
<div class="callout warn"><span class="lb">กับดัก</span>ตัดที่ percentile 99 จะ flag ~1% ของข้อมูลอ้างอิง <b>ตามนิยาม</b> — ไม่ได้แปลว่า error rate = 1%</div>
<h3>Deploy ด้วย pipeline เดิม</h3>
<div class="formula">Z_new    = scaler.transform(X_new)              # ใช้ scaler ตัวเดิม
labels   = model.predict(Z_new)                  # centroid ใกล้สุด
distance = model.transform(Z_new).min(axis=1)    # ระยะถึงทุก centroid → ใกล้สุด</div>
<p>เฝ้าดู: ระยะเพิ่มขึ้น (พฤติกรรมใหม่หรือปัญหาข้อมูล) · สัดส่วนกลุ่มเปลี่ยน (ประชากร/ฤดูกาล) · profile เปลี่ยนหลัง refit (ID กลุ่มอาจไม่ได้หมายถึงสิ่งเดิม → เทียบด้วย profile ไม่ใช่ ID) · scaler ที่ fit ใหม่ = ระบบพิกัดใหม่ centroid เดิมไร้ความหมาย</p>
<div class="callout key"><span class="lb">5 คำถามติดตัว (หน้า 57)</span>Representation: “ใกล้” แปลว่าอะไร · Model: วิธีนี้เรียนรูปทรงกลุ่มแบบไหน · Validation: ข้อสรุปรอดในการตั้งค่า/ตัวอย่างอื่นไหม · Interpretation: อะไรมีหลักฐาน อะไรยังเป็นสมมติฐาน · Deployment: transform + model เดิมใช้กับข้อมูลอนาคตได้ไหม → <b>segment คือสมมติฐานเกี่ยวกับโครงสร้างและการใช้งาน</b></div>`
    }
  ],
  quiz: [
    { q: 'ข้อใดถูกต้องเกี่ยวกับ unsupervised learning', c: ['ใช้ y เป็นเป้าหมายในการ fit', 'ใช้ X อย่างเดียว ไม่มี y เข้าไปใน objective', 'ต้องมี label อย่างน้อย 10%', 'ใช้ได้เฉพาะข้อมูลภาพ'], a: 1, e: 'Training input is X only — no target y enters the fitting objective (หน้า 4)' },
    { q: 'ลูกค้า A: Orders 2, Spend 1,000 · B: Orders 6, Spend 5,000 ถ้าไม่ scale ระยะ Euclidean ถูกครอบงำโดยอะไร', c: ['Orders', 'Spend', 'เท่ากัน', 'ไม่มีผล'], a: 1, e: 'ผลต่างยกกำลังสอง Spend = 16,000,000 เทียบ Orders = 16' },
    { q: 'K-Means minimise ค่าใด', c: ['ผลรวมระยะ Manhattan', 'ผลรวมระยะ Euclidean ยกกำลังสองถึง centroid ของกลุ่มตัวเอง (WCSS)', 'จำนวน noise', 'ค่า silhouette'], a: 1, e: 'J = Σ‖xᵢ − μ_z(i)‖² หรือ inertia / WCSS / within-cluster SSE' },
    { q: 'ตัวอย่าง 7 ลูกค้า centroid เริ่ม A(1,2), F(10,9) จุด G(5,5) ไปกลุ่มใดและเพราะอะไร', c: ['C2 เพราะ 6.40 < 5.00', 'C1 เพราะ 5.00 < 6.40', 'เป็น noise', 'C1 เพราะอยู่ใกล้ B'], a: 1, e: 'd(G,A) = 5.00, d(G,F) = 6.40 จึงเข้า C1' },
    { q: 'หลัง update ในตัวอย่าง 7 ลูกค้า centroid ของ C1 = mean(A, B, C, G) คือ', c: ['(2.50, 2.75)', '(2.00, 2.00)', '(9, 9)', '(3.33, 3.00)'], a: 0, e: '((1+2+2+5)/4, (2+1+3+5)/4) = (2.5, 2.75) และ SSE รวม = 17.75 + 4 = 21.75' },
    { q: 'ทำไม “WCSS ต่ำสุด” จึงใช้เลือก K ไม่ได้', c: ['เพราะ WCSS คำนวณไม่ได้', 'เพราะเพิ่ม K แล้ว WCSS ลดลงเสมอ จน K = n ได้ 0', 'เพราะ WCSS เพิ่มตาม K', 'เพราะต้องใช้ label'], a: 1, e: 'จึงใช้ elbow (heuristic) + silhouette + stability + usefulness ประกอบ' },
    { q: 'a(G) = 4.54, b(G) = 5.68 silhouette ของ G ประมาณเท่าใด และแปลว่าอะไร', c: ['0.80 อยู่ลึกในกลุ่ม', '0.20 อยู่ใกล้ขอบ', '−0.20 จัดผิดกลุ่ม', '1.25 เกินช่วง'], a: 1, e: 's = (5.68 − 4.54)/5.68 ≈ 0.20 ใกล้ 0 = อยู่บนขอบระหว่างกลุ่ม' },
    { q: 'กลุ่ม {0, 1} กับ {4, 6} ระยะแบบ single / complete / average คือ', c: ['3 / 6 / 4.5', '1 / 6 / 3.5', '3 / 5 / 4', '4 / 6 / 5'], a: 0, e: 'ระยะคู่ = 4, 6, 3, 5 → min 3, max 6, mean 4.5' },
    { q: 'Linkage แบบใดเสี่ยง “chaining” ได้กลุ่มยาวเรียว', c: ['Complete', 'Ward', 'Single', 'Average'], a: 2, e: 'single ใช้ระยะคู่ที่ใกล้ที่สุด จึงต่อกันผ่านจุดสะพานได้' },
    { q: 'DBSCAN x = {0, 0.1, 0.2, 0.4, 2.0}, eps = 0.21, min_samples = 3 จุด 0.4 เป็นอะไร', c: ['core', 'border', 'noise', 'centroid'], a: 1, e: '0.4 มีเพื่อนในรัศมีแค่ 2 (0.2 กับตัวเอง) ไม่ใช่ core แต่อยู่ใกล้ core 0.2 → border' },
    { q: 'ข้อใดเกี่ยวกับ PCA ถูกต้อง', c: ['เป็น clustering ที่ใช้ label', 'หาทิศตั้งฉากที่เก็บ variance มากที่สุด ไม่ใช้ label', 'sklearn scale ข้อมูลให้อัตโนมัติ', 'เครื่องหมายของ PC มีความหมายเสมอ'], a: 1, e: 'PCA keeps variance, not classes; sklearn centres แต่ไม่ scale; เครื่องหมาย PC เป็นอะไรก็ได้' },
    { q: 'ตัวอย่าง PCA eigenvalues 6 และ 2/3 PC1 เก็บ variance กี่ %', c: ['60%', '75%', '90%', '100%'], a: 2, e: '6 / (6 + 2/3) = 0.9' },
    { q: 'เมื่อมีข้อมูลลูกค้าใหม่เข้ามา ควรทำอย่างไรกับ scaler', c: ['fit scaler ใหม่กับข้อมูลใหม่', 'ใช้ scaler.transform ตัวเดิมที่บันทึกไว้', 'ไม่ต้อง scale', 'standardize ด้วยค่าเฉลี่ยของข้อมูลใหม่'], a: 1, e: 'scaler ใหม่ = ระบบพิกัดใหม่ centroid ที่บันทึกไว้จะไร้ความหมาย' }
  ],
  init(root) {
    const T = TUTOR, $ = s => root.querySelector(s);
    const css = n => getComputedStyle(document.body).getPropertyValue(n).trim() || '#333';
    const parsePts = s => String(s).split(';').map(t => T.nums(t)).filter(p => p.length >= 2 && p.every(isFinite));
    const d2 = (a, b) => a.reduce((s, v, i) => s + (v - b[i]) ** 2, 0);
    const COL = ['#1c7ed6', '#e8590c', '#2b8a3e', '#ae3ec9', '#f59f00'];

    /* --- distance calculator --- */
    (function () {
      const box = $('#d9-dist'); if (!box) return;
      const run = () => {
        const a = T.nums(box.querySelector('[data-k="a"]').value), b = T.nums(box.querySelector('[data-k="b"]').value), out = box.querySelector('.out');
        if (a.length !== b.length || !a.length) { out.textContent = 'ใส่เวกเตอร์ความยาวเท่ากัน เช่น 1, 2 และ 8, 8'; return; }
        const eu = Math.sqrt(d2(a, b)), man = a.reduce((s, v, i) => s + Math.abs(v - b[i]), 0), cs = T.cosine(a, b);
        out.textContent = 'Euclidean = √(' + a.map((v, i) => '(' + v + '−' + b[i] + ')²').join(' + ') + ') = ' + T.fmt(eu, 4) +
          '\nManhattan = ' + a.map((v, i) => '|' + v + '−' + b[i] + '|').join(' + ') + ' = ' + T.fmt(man, 4) +
          '\nCosine similarity = ' + T.fmt(T.dot(a, b), 4) + ' / (' + T.fmt(T.norm(a), 4) + ' × ' + T.fmt(T.norm(b), 4) + ') = ' + T.fmt(cs, 4) + '  → cosine distance = ' + T.fmt(1 - cs, 4) +
          '\n(ผลต่างยกกำลังสองแต่ละแกน: ' + a.map((v, i) => T.fmt((v - b[i]) ** 2, 2)).join(', ') + ')';
      };
      box.querySelectorAll('input').forEach(i => i.oninput = run);
      box.querySelectorAll('[data-p]').forEach(bt => bt.onclick = () => { const [p, q] = bt.dataset.p.split('|'); box.querySelector('[data-k="a"]').value = p; box.querySelector('[data-k="b"]').value = q; run(); });
      run();
    })();

    const CUST = [['A', 1, 2], ['B', 2, 1], ['C', 2, 3], ['G', 5, 5], ['D', 8, 8], ['E', 9, 10], ['F', 10, 9]];

    /* --- K-Means stepper --- */
    (function () {
      const box = $('#d9-km'); if (!box) return;
      const cv = box.querySelector('canvas'), ctx = cv.getContext('2d'), out = box.querySelector('.out');
      let C, A, it, msg;
      let upd = false;
      const P = CUST.map(r => [r[1], r[2]]);
      function reset() { C = parsePts(box.querySelector('[data-k="c"]').value); if (!C.length) C = [[1, 2], [10, 9]]; A = null; it = 0; upd = false; msg = 'กด ① Assign เพื่อจัดแต่ละจุดเข้า centroid ที่ใกล้ที่สุด'; draw(); }
      const sse = () => A ? P.reduce((s, p, i) => s + d2(p, C[A[i]]), 0) : NaN;
      function assign() {
        const lines = [];
        const nA = P.map((p, i) => { const ds = C.map(c => Math.sqrt(d2(p, c))); let k = 0; ds.forEach((d, j) => { if (d < ds[k]) k = j; }); lines.push(CUST[i][0] + ' (' + p + '): ระยะ = [' + ds.map(d => T.fmt(d, 2)).join(', ') + '] → C' + (k + 1)); return k; });
        const changed = !A || nA.some((k, i) => k !== A[i]); A = nA; it++;
        msg = 'Assign รอบ ' + it + (!changed && upd ? ' — ไม่มีจุดย้ายกลุ่ม → ลู่เข้าแล้ว ✔' : (!changed ? ' — กลุ่มเหมือนเดิม (ยังไม่ได้ Update centroid)' : '')) + '\n' + lines.join('\n');
        upd = false;
        return changed;
      }
      function update() {
        if (!A) { msg = 'ต้อง Assign ก่อน'; return; }
        C = C.map((c, k) => { const m = P.filter((p, i) => A[i] === k); return m.length ? [m.reduce((s, p) => s + p[0], 0) / m.length, m.reduce((s, p) => s + p[1], 0) / m.length] : c; });
        msg = 'Update: centroid ใหม่ = ' + C.map((c, k) => 'C' + (k + 1) + '(' + T.fmt(c[0], 3) + ', ' + T.fmt(c[1], 3) + ')').join('  ') + '\nสมาชิก: ' + C.map((c, k) => 'C' + (k + 1) + '={' + CUST.filter((r, i) => A[i] === k).map(r => r[0]).join(',') + '}').join('  ');
        upd = true;
      }
      function draw() {
        const W = cv.width, H = cv.height, s = v => 30 + v / 11 * (W - 50), t = v => H - 30 - v / 11 * (H - 50);
        ctx.clearRect(0, 0, W, H); ctx.strokeStyle = css('--line'); ctx.strokeRect(30, 20, W - 50, H - 50);
        ctx.fillStyle = css('--mut'); ctx.font = '12px sans-serif'; ctx.fillText('F', W - 18, H - 10); ctx.fillText('M', 8, 16);
        for (let v = 0; v <= 10; v += 2) { ctx.fillText(v, s(v) - 4, H - 14); ctx.fillText(v, 10, t(v) + 4); }
        P.forEach((p, i) => { ctx.beginPath(); ctx.arc(s(p[0]), t(p[1]), 7, 0, 7); ctx.fillStyle = A ? COL[A[i] % 5] : '#868e96'; ctx.fill(); ctx.fillStyle = css('--ink'); ctx.fillText(CUST[i][0], s(p[0]) + 9, t(p[1]) - 6); });
        C.forEach((c, k) => { ctx.strokeStyle = COL[k % 5]; ctx.lineWidth = 3; const x = s(c[0]), y = t(c[1]); ctx.beginPath(); ctx.moveTo(x - 7, y - 7); ctx.lineTo(x + 7, y + 7); ctx.moveTo(x + 7, y - 7); ctx.lineTo(x - 7, y + 7); ctx.stroke(); ctx.lineWidth = 1; });
        const per = A ? C.map((c, k) => 'C' + (k + 1) + ' SSE = ' + T.fmt(P.reduce((s2, p, i) => s2 + (A[i] === k ? d2(p, c) : 0), 0), 4)).join(' · ') : '';
        out.textContent = msg + (A ? '\n\n' + per + '\nWCSS (J) รวม = ' + T.fmt(sse(), 4) : '');
      }
      box.querySelectorAll('button').forEach(b => b.onclick = () => {
        if (b.dataset.p) { box.querySelector('[data-k="c"]').value = b.dataset.p; reset(); return; }
        const a = b.dataset.act;
        if (a === 'reset') return reset();
        if (a === 'assign') assign();
        if (a === 'update') update();
        if (a === 'auto') { if (A) update(); let n = 0; while (n++ < 30) { const ch = assign(); if (!ch) break; update(); } }
        draw();
      });
      box.querySelector('input').onchange = reset;
      reset();
    })();

    /* --- silhouette --- */
    (function () {
      const box = $('#d9-sil'); if (!box) return;
      const run = () => {
        const L = T.nums(box.querySelector('[data-k="lab"]').value), out = box.querySelector('.out');
        if (L.length !== 7) { out.textContent = 'ใส่ label 7 ตัวตามลำดับ A, B, C, G, D, E, F'; return; }
        const P = CUST.map(r => [r[1], r[2]]), ks = [...new Set(L)];
        if (ks.length < 2) { out.textContent = 'ต้องมีอย่างน้อย 2 กลุ่ม'; return; }
        const d = (i, j) => Math.sqrt(d2(P[i], P[j]));
        let tot = 0; const lines = [];
        P.forEach((p, i) => {
          const own = P.map((q, j) => j).filter(j => j !== i && L[j] === L[i]);
          if (!own.length) { lines.push(CUST[i][0] + ': กลุ่มเดี่ยว → s = 0 (นิยามตาม sklearn)'); return; }
          const a = own.reduce((s, j) => s + d(i, j), 0) / own.length;
          let b = Infinity, bk = null;
          ks.filter(k => k !== L[i]).forEach(k => { const m = P.map((q, j) => j).filter(j => L[j] === k); const v = m.reduce((s, j) => s + d(i, j), 0) / m.length; if (v < b) { b = v; bk = k; } });
          const s = (b - a) / Math.max(a, b); tot += s;
          lines.push(CUST[i][0] + ': a = ' + T.fmt(a, 2) + ', b = ' + T.fmt(b, 2) + ' (กลุ่ม ' + bk + ') → s = ' + T.fmt(s, 2));
        });
        const cents = {}; ks.forEach(k => { const m = P.filter((p, j) => L[j] === k); cents[k] = [m.reduce((s, p) => s + p[0], 0) / m.length, m.reduce((s, p) => s + p[1], 0) / m.length]; });
        const w = P.reduce((s, p, i) => s + d2(p, cents[L[i]]), 0);
        out.textContent = lines.join('\n') + '\n\nmean silhouette = ' + T.fmt(tot / 7, 3) + '   ·   WCSS = ' + T.fmt(w, 3) + '   (K = ' + ks.length + ')';
      };
      box.querySelector('input').oninput = run;
      box.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { box.querySelector('input').value = b.dataset.p; run(); });
      run();
    })();

    /* --- agglomerative linkage --- */
    (function () {
      const box = $('#d9-link'); if (!box) return;
      const link = (A, B, lk) => {
        const ds = []; A.forEach(a => B.forEach(b => ds.push(Math.abs(a - b))));
        if (lk === 'single') return Math.min(...ds);
        if (lk === 'complete') return Math.max(...ds);
        if (lk === 'average') return ds.reduce((s, v) => s + v, 0) / ds.length;
        const ma = A.reduce((s, v) => s + v, 0) / A.length, mb = B.reduce((s, v) => s + v, 0) / B.length;
        return A.length * B.length / (A.length + B.length) * (ma - mb) ** 2;
      };
      const run = () => {
        const pts = T.nums(box.querySelector('[data-k="pts"]').value), lk = box.querySelector('[data-k="lk"]').value, out = box.querySelector('.out');
        const names = pts.map((v, i) => String.fromCharCode(65 + i) + '=' + v);
        let cl = pts.map((v, i) => ({ v: [v], n: [names[i]] })), lines = [];
        while (cl.length > 1) {
          let best = [0, 1, Infinity];
          for (let i = 0; i < cl.length; i++) for (let j = i + 1; j < cl.length; j++) { const d = link(cl[i].v, cl[j].v, lk); if (d < best[2] - 1e-12) best = [i, j, d]; }
          const [i, j, d] = best;
          lines.push('รวม {' + cl[i].n.join(',') + '} กับ {' + cl[j].n.join(',') + '} ที่ความสูง ' + T.fmt(d, 3));
          cl[i] = { v: cl[i].v.concat(cl[j].v), n: cl[i].n.concat(cl[j].n) }; cl.splice(j, 1);
        }
        const g1 = T.nums(box.querySelector('[data-k="g1"]').value), g2 = T.nums(box.querySelector('[data-k="g2"]').value);
        let cmp = '';
        if (g1.length && g2.length) {
          const pairs = []; g1.forEach(a => g2.forEach(b => pairs.push(Math.abs(a - b))));
          cmp = '\n\nระยะทุกคู่ระหว่าง G₁ กับ G₂: ' + pairs.map(v => T.fmt(v, 3)).join(', ') + '\nsingle = ' + T.fmt(link(g1, g2, 'single'), 3) + ' · complete = ' + T.fmt(link(g1, g2, 'complete'), 3) + ' · average = ' + T.fmt(link(g1, g2, 'average'), 3) + ' · Ward ΔSSE = ' + T.fmt(link(g1, g2, 'ward'), 3);
        }
        out.textContent = 'ลำดับการรวม (' + lk + '):\n' + lines.join('\n') + cmp;
      };
      box.querySelectorAll('input,select').forEach(i => i.oninput = run); run();
    })();

    /* --- GMM responsibility --- */
    (function () {
      const box = $('#d9-gmm'); if (!box) return;
      const g = (x, m, s) => Math.exp(-((x - m) ** 2) / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI));
      const run = () => {
        const v = k => parseFloat(box.querySelector('[data-k="' + k + '"]').value);
        const x = v('x'), p1 = v('p1'), p2 = 1 - p1, n1 = g(x, v('m1'), v('s1')), n2 = g(x, v('m2'), v('s2'));
        const a = p1 * n1, b = p2 * n2, r1 = a / (a + b);
        box.querySelector('.out').textContent = 'π₂ = 1 − π₁ = ' + T.fmt(p2, 3) + '\nN(x | μ₁, σ₁) = ' + T.fmt(n1, 5) + '   N(x | μ₂, σ₂) = ' + T.fmt(n2, 5) +
          '\nr₁ = π₁N₁ / (π₁N₁ + π₂N₂) = ' + T.fmt(a, 5) + ' / ' + T.fmt(a + b, 5) + ' = ' + T.fmt(r1, 4) + '\nr₂ = ' + T.fmt(1 - r1, 4) + '   (soft membership รวม = 1)';
      };
      box.querySelectorAll('input').forEach(i => i.oninput = run); run();
    })();

    /* --- DBSCAN 1-D --- */
    (function () {
      const box = $('#d9-db'); if (!box) return;
      const run = () => {
        const x = T.nums(box.querySelector('[data-k="pts"]').value), eps = parseFloat(box.querySelector('[data-k="eps"]').value), ms = parseInt(box.querySelector('[data-k="ms"]').value, 10);
        const nb = x.map((a, i) => x.map((b, j) => j).filter(j => Math.abs(x[i] - x[j]) <= eps + 1e-12));
        const core = nb.map(n => n.length >= ms), lab = x.map(() => null); let cid = 0;
        x.forEach((a, i) => {
          if (!core[i] || lab[i] !== null) return;
          const q = [i]; lab[i] = cid;
          while (q.length) { const k = q.shift(); if (!core[k]) continue; nb[k].forEach(j => { if (lab[j] === null) { lab[j] = cid; q.push(j); } }); }
          cid++;
        });
        const lines = x.map((a, i) => 'x = ' + a + ': เพื่อนใน eps (รวมตัวเอง) = ' + nb[i].length + ' → ' + (core[i] ? 'CORE' : (lab[i] !== null ? 'BORDER' : 'NOISE')) + ' · label = ' + (lab[i] === null ? -1 : lab[i]));
        const noise = lab.filter(v => v === null).length;
        box.querySelector('.out').textContent = lines.join('\n') + '\n\nจำนวนกลุ่ม = ' + cid + ' · noise = ' + noise + '/' + x.length + ' (' + Math.round(100 * noise / Math.max(1, x.length)) + '%)';
      };
      box.querySelectorAll('input').forEach(i => i.oninput = run); run();
    })();

    /* --- PCA 2-D --- */
    (function () {
      const box = $('#d9-pca'); if (!box) return;
      const cv = box.querySelector('canvas'), ctx = cv.getContext('2d'), out = box.querySelector('.out');
      const run = () => {
        const P = parsePts(box.querySelector('[data-k="pts"]').value);
        if (P.length < 2) { out.textContent = 'ใส่อย่างน้อย 2 จุด'; return; }
        const n = P.length, mx = P.reduce((s, p) => s + p[0], 0) / n, my = P.reduce((s, p) => s + p[1], 0) / n;
        const C = P.map(p => [p[0] - mx, p[1] - my]);
        const a = C.reduce((s, p) => s + p[0] * p[0], 0) / (n - 1), d = C.reduce((s, p) => s + p[1] * p[1], 0) / (n - 1), b = C.reduce((s, p) => s + p[0] * p[1], 0) / (n - 1);
        const tr = (a + d) / 2, disc = Math.sqrt(((a - d) / 2) ** 2 + b * b), l1 = tr + disc, l2 = tr - disc;
        let v = Math.abs(b) > 1e-12 ? [l1 - d, b] : (a >= d ? [1, 0] : [0, 1]); const nv = Math.hypot(v[0], v[1]); v = [v[0] / nv, v[1] / nv]; if (v[0] < 0 || (v[0] === 0 && v[1] < 0)) v = [-v[0], -v[1]];
        const z = C.map(p => p[0] * v[0] + p[1] * v[1]), R = z.map(t => [mx + t * v[0], my + t * v[1]]);
        const W = cv.width, H = cv.height, all = P.concat(R).flat(), lim = Math.max(3, ...all.map(Math.abs)) * 1.15, s = x => W / 2 + x / lim * (W / 2 - 15), t = y => H / 2 - y / lim * (H / 2 - 15);
        ctx.clearRect(0, 0, W, H); ctx.strokeStyle = css('--line'); ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke();
        ctx.strokeStyle = '#1c7ed6'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(s(mx - v[0] * lim * 2), t(my - v[1] * lim * 2)); ctx.lineTo(s(mx + v[0] * lim * 2), t(my + v[1] * lim * 2)); ctx.stroke(); ctx.lineWidth = 1;
        P.forEach((p, i) => { ctx.strokeStyle = '#adb5bd'; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(s(p[0]), t(p[1])); ctx.lineTo(s(R[i][0]), t(R[i][1])); ctx.stroke(); ctx.setLineDash([]);
          ctx.beginPath(); ctx.arc(s(p[0]), t(p[1]), 5, 0, 7); ctx.fillStyle = css('--ink'); ctx.fill(); ctx.beginPath(); ctx.arc(s(R[i][0]), t(R[i][1]), 4, 0, 7); ctx.fillStyle = '#e8590c'; ctx.fill(); });
        out.textContent = 'mean = (' + T.fmt(mx, 3) + ', ' + T.fmt(my, 3) + ')\ncovariance (หาร n−1) = [' + T.fmt(a, 4) + '  ' + T.fmt(b, 4) + ' ; ' + T.fmt(b, 4) + '  ' + T.fmt(d, 4) + ']' +
          '\neigenvalues λ₁ = ' + T.fmt(l1, 4) + ', λ₂ = ' + T.fmt(l2, 4) + '\nPC1 = (' + T.fmt(v[0], 4) + ', ' + T.fmt(v[1], 4) + ')  explained = ' + T.fmt(100 * l1 / (l1 + l2), 2) + '%' +
          '\n' + P.map((p, i) => '(' + p.join(', ') + ') → z = ' + T.fmt(z[i], 4) + ' → reconstruction (' + T.fmt(R[i][0], 3) + ', ' + T.fmt(R[i][1], 3) + ')').join('\n') +
          '\n(เส้นน้ำเงิน = PC1, จุดส้ม = rank-1 reconstruction)';
      };
      box.querySelector('input').oninput = run; run();
    })();
  }
});
