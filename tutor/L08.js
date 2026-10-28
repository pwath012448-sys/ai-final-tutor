/* Lecture 08 · Supervised ML: from Perceptron to Deep Learning */
TUTOR.addLesson({
  id: 'L08', num: 8,
  navTitle: 'Perceptron → Deep Learning',
  title: 'Supervised ML: จาก Perceptron สู่ Deep Learning',
  short: 'MCP neuron · Perceptron · Rosenblatt rule · Adaline · Gradient Descent / SGD · Feature scaling · MLP · Backpropagation',
  slides: 'Lecture 08 · 39 สไลด์',
  intro: 'บทนี้เปิดกล่องโมเดลที่ “เรียนรู้ด้วยการปรับน้ำหนักทีละนิด” — เริ่มจากเซลล์ประสาทเทียมตัวเดียว (Perceptron) ไปจนถึงโครงข่ายหลายชั้น ทุกอย่างใน Deep Learning คือการต่อยอดจากสิ่งที่เรียนในบทนี้',
  sections: [
    {
      id: 'big', title: '1) ภาพใหญ่: เครื่อง “เรียนรู้” จากความผิดพลาดอย่างไร',
      html: `
<p>ลองนึกถึงการหัดยิงธนู: ยิงไป 1 ดอก → ดูว่าพลาดเป้าไปทางไหน มากแค่ไหน → ปรับมุมนิดหนึ่ง → ยิงใหม่ ทำซ้ำจนแม่น
โมเดลใน Supervised learning ก็ทำแบบเดียวกันเป๊ะ: <b>ทาย → วัดความผิด → ปรับน้ำหนัก → ทายใหม่</b></p>
<div class="formula">ข้อมูลมี label (x, y) → โมเดลทาย ŷ → error e = y − ŷ → feedback (loss) → learning algorithm ปรับ w → ทายใหม่</div>
<div class="callout def"><span class="lb">นิยามที่ต้องรู้</span>
<b>Supervised learning</b> = เรียนจากข้อมูลที่มีคำตอบ (label / target y) ·
<b>Feature x</b> = ตัวแปรนำเข้า เช่น Plasma glucose, BMI ·
<b>Prediction ŷ</b> = ค่าที่โมเดลทาย ·
<b>Error</b> e = y − ŷ ·
<b>Loss / Cost</b> = ตัวเลขสรุปว่าผิดรวมเท่าไร ·
<b>Weight w</b> = ความสำคัญของแต่ละ input ·
<b>Bias b</b> = ค่าเลื่อนเส้นแบ่ง (= w₀ คูณกับ x₀ = 1) ·
<b>Learning rate η</b> = ขนาดก้าวการปรับ ·
<b>Epoch</b> = วนครบข้อมูลฝึก 1 รอบ</div>
<p>บทนี้มี 4 ส่วน: ① เซลล์ประสาทเทียมและ Perceptron ② Gradient Descent และ Adaline ③ จาก Perceptron สู่ Deep Learning (MLP + backprop) ④ Lab 08 เขียนอัลกอริทึมเอง</p>
<div class="callout key"><span class="lb">ตำแหน่งในรายวิชา</span>L06 = โมเดลที่ “เขียนกฎเป็นเงื่อนไข” · L07 = เลือกและวัดผลโมเดลสำเร็จรูป · L08 = เปิดกล่องโมเดลที่ “เรียนรู้ด้วยการปรับน้ำหนักทีละนิด” ซึ่งเป็นรากฐานของ Deep Learning ทั้งหมด</div>`
    },
    {
      id: 'mcp', title: '2) จากเซลล์ประสาทจริง → MCP Neuron (1943)',
      html: `
<p><b>เซลล์ประสาทจริง</b>: Dendrites รับสัญญาณหลายทาง → Soma (ตัวเซลล์) รวมสัญญาณ → ถ้ารวมแล้วเกิน “เกณฑ์” เซลล์จะ <i>fire</i> → ส่งสัญญาณผ่าน Axon → Synapse ไปเซลล์ถัดไป</p>
<div class="callout def"><span class="lb">นิยาม</span><b>McCulloch–Pitts (MCP) neuron</b> (Warren McCulloch &amp; Walter Pitts, 1943) = โมเดลคณิตศาสตร์ของเซลล์ประสาทอย่างง่าย ทำงาน 4 ขั้น: ① รับ input ② รวมแบบถ่วงน้ำหนัก ③ เทียบกับ threshold θ ④ ให้ output แบบ binary (1 = fire, 0 = ไม่ fire)</div>
<div class="grid2">
<figure class="slide"><img src="img/L08_p06.jpg" alt=""><figcaption>Lecture 08 หน้า 6 · weight → net input z → activation f(·)</figcaption></figure>
<div><div class="formula">z = w₁x₁ + w₂x₂ + … + wₘxₘ = wᵀx
f(z) = 1  ถ้า z ≥ θ
       0  ถ้าไม่ใช่</div>
<p><b>คุณสมบัติ 3 ข้อ</b>: All-or-none (fire เต็มหรือไม่ fire เลย) · Binary output · Threshold-based</p>
<div class="callout warn"><span class="lb">จุดอ่อน</span>MCP <b>ยังเรียนรู้ไม่ได้</b> — ค่า w และ θ ต้องมีคนตั้งให้</div></div></div>
<h3>ตัวอย่างจากสไลด์หน้า 7</h3>
<figure class="slide"><img src="img/L08_p07.jpg" alt=""><figcaption>Lecture 08 หน้า 7 · θ = −0.016, w₁ = −0.006, w₂ = −0.005</figcaption></figure>
<ol class="steps">
<li>x⁽¹⁾ = (3, 2) → z = (−0.006)(3) + (−0.005)(2) = −0.018 − 0.010 = <b>−0.028</b></li>
<li>เทียบ θ: −0.028 ≥ −0.016 ? → <b>ไม่</b> (−0.028 น้อยกว่า)</li>
<li>ดังนั้น f(z) = <b>0</b> (ไม่ fire)</li></ol>
<details class="reveal"><summary>ลองคิดก่อน: x⁽⁴⁾ = (7, 1) ได้ output อะไร?</summary>z = −0.042 − 0.005 = −0.047 &lt; −0.016 → f(z) = 0 (จริง ๆ ทั้ง 4 ตัวอย่างในสไลด์ได้ 0 หมด เพราะ z = −0.028, −0.044, −0.030, −0.047 น้อยกว่า θ = −0.016 ทุกตัว — ไม่ใช่แค่เพราะ z ติดลบ: θ ก็ติดลบ เช่น x = (1,1) ได้ z = −0.011 ≥ −0.016 → f(z) = 1 (fire))</details>
<div class="demo" id="d8-neuron"><h4>🔧 ลองเล่น: คำนวณ MCP neuron</h4>
<div class="row"><label>x₁ <input type="number" data-k="x1" value="3" step="any"></label><label>x₂ <input type="number" data-k="x2" value="2" step="any"></label>
<label>w₁ <input type="number" data-k="w1" value="-0.006" step="any"></label><label>w₂ <input type="number" data-k="w2" value="-0.005" step="any"></label><label>θ <input type="number" data-k="th" value="-0.016" step="any"></label></div>
<div class="out"></div></div>`
    },
    {
      id: 'perceptron', title: '3) Perceptron และเส้นแบ่ง (Decision boundary)',
      html: `
<div class="callout def"><span class="lb">นิยาม</span><b>Perceptron</b> (Frank Rosenblatt, 1957) = MCP neuron + <b>กฎการเรียนรู้</b> ที่ปรับ w เองจากความผิดพลาด · ใช้ step function ให้ output <b>+1 / −1</b> · ย้าย threshold เข้าไปเป็น bias: เพิ่ม x₀ = 1 และ w₀ = b = −θ</div>
<div class="formula">z = w₀x₀ + w₁x₁ + … + wₘxₘ = wᵀx   (x₀ = 1)
ŷ = +1 ถ้า z ≥ 0 ,  −1 ถ้าไม่ใช่</div>
<p>ทำไมย้าย θ เป็น bias ได้? เพราะ z ≥ θ ⇔ z − θ ≥ 0 ⇔ (wᵀx + b) ≥ 0 เมื่อ b = −θ → เกณฑ์จึงเป็น 0 เสมอ สะดวกในการเรียนรู้ (เรียน b ไปพร้อม w)</p>
<h3>เส้นแบ่ง = ที่ที่ z = 0</h3>
<p>ใน 2 มิติ: w₁x₁ + w₂x₂ + b = 0 คือ <b>เส้นตรง</b> → x₂ = −(w₁/w₂)x₁ − b/w₂ · จุดฝั่งหนึ่งได้ z ≥ 0 (ทาย +1) อีกฝั่ง z &lt; 0 (ทาย −1) · เวกเตอร์ w ตั้งฉากกับเส้นและชี้ไปฝั่ง +1</p>
<figure class="slide"><img src="img/L08_p08.jpg" alt=""><figcaption>Lecture 08 หน้า 8 · ซ้าย: linearly separable · กลางและขวา: ไม่มีเส้นตรงเส้นเดียวแยกได้</figcaption></figure>
<div class="callout def"><span class="lb">นิยาม</span><b>Linearly separable</b> = มีเส้นตรง (หรือ hyperplane ในมิติสูง) เส้นเดียวที่แยก 2 คลาสได้ถูกทั้งหมด</div>
<div class="callout key"><span class="lb">จำให้ขึ้นใจ</span>Perceptron 1 ตัว = เส้นตรง 1 เส้น → ลู่เข้า (error = 0) <b>ก็ต่อเมื่อข้อมูล linearly separable</b> · ถ้าแยกไม่ได้ (เช่น XOR, Iris versicolor vs virginica) error ไม่มีวันเป็น 0 → ต้องกำหนดจำนวน epoch สูงสุด</div>
<details class="reveal"><summary>ลองคิดก่อน: w = (1, 1), b = −1 จุด (0, 0) และ (1, 1) ถูกทายเป็นอะไร?</summary>(0,0): z = 0 + 0 − 1 = −1 &lt; 0 → −1 · (1,1): z = 1 + 1 − 1 = 1 ≥ 0 → +1 · เส้นแบ่งคือ x₂ = 1 − x₁</details>`
    },
    {
      id: 'rosenblatt', title: '4) กฎการเรียนรู้ของ Rosenblatt + ตัวอย่าง Diabetes',
      html: `
<ol class="steps"><li><b>Random w</b> (หรือเริ่มที่ค่าเล็ก ๆ)</li><li><b>Compute ŷᵢ</b> ของตัวอย่างที่ i</li><li><b>Update w</b> ตาม error yᵢ − ŷᵢ</li><li><b>Repeat</b> จน converge (error = 0 / ครบ iteration / loss นิ่ง)</li></ol>
<figure class="slide"><img src="img/L08_p11.jpg" alt=""><figcaption>Lecture 08 หน้า 11 · Rosenblatt algorithm</figcaption></figure>
<div class="formula">กฎมาตรฐาน (ตำรา + โค้ด Lab):   Δwᵢ = η (y − ŷ) xᵢ ,   wᵢ ← wᵢ + Δwᵢ ,   b ← b + η (y − ŷ)
ที่เขียนในสไลด์ 11–15:          wᵢ = wᵢ − η (y − ŷ) xᵢ ,   b = b − η (y − ŷ)</div>
<div class="callout warn"><span class="lb">ระวัง: เครื่องหมายในสไลด์</span>สไลด์ใช้ “ลบ” แต่โค้ด Lab (<code>update = eta*(target - predict)</code>; <code>w += update*xi</code>) และตำรามาตรฐานใช้ “บวก” ·
เหตุผลว่าทำไม “บวก” ถูก: ถ้า y = −1 แต่ทาย +1 (z ใหญ่เกิน) → y − ŷ = −2 → Δw = −2ηx → ลด z ✔ · ถ้าใช้ “ลบ” z จะยิ่งใหญ่ขึ้น (ผิดทาง)
<br><b>ในข้อสอบ:</b> ถ้าโจทย์ให้ “ทำตามตัวอย่างในสไลด์” ใช้สูตรสไลด์ (ได้ w₁ = 17.5) · ถ้าถามหลักการ ให้ใช้กฎมาตรฐาน และเขียนกำกับว่าใช้สูตรไหน</div>
<table class="tbl"><tr><th>y</th><th>ŷ</th><th>y − ŷ</th><th>แปลว่า</th></tr>
<tr><td>+1</td><td>+1</td><td>0</td><td>ทายถูก → ไม่ปรับ</td></tr><tr><td>−1</td><td>−1</td><td>0</td><td>ทายถูก → ไม่ปรับ</td></tr>
<tr><td>−1</td><td>+1</td><td>−2</td><td>ทายผิด (z ใหญ่ไป) → ต้องลด z</td></tr><tr><td>+1</td><td>−1</td><td>+2</td><td>ทายผิด (z เล็กไป) → ต้องเพิ่ม z</td></tr></table>
<h3>ตัวอย่าง Diabetes ทีละแถว (สไลด์หน้า 12–15)</h3>
<p>ตั้งค่า: η = 0.1 · w₁ = 0.5 (glucose) · w₂ = 0.5 (BMI) · b = 0.5</p>
<ol class="steps">
<li><b>แถว 1</b> x = (148, 33.6), y = 1 → z = 0.5·148 + 0.5·33.6 + 0.5 = 74 + 16.8 + 0.5 = <b>91.3</b> → ŷ = 1 → y − ŷ = 0 → ไม่ปรับ</li>
<li><b>แถว 2</b> x = (85, 26.6), y = −1 → z = 42.5 + 13.3 + 0.5 = <b>56.3</b> → ŷ = 1 → y − ŷ = <b>−2</b> (ทายผิด!) → ตามสไลด์: w₁ = 0.5 − 0.1(−2)(85) = <b>17.5</b>, w₂ = 0.5 − 0.1(−2)(26.6) = <b>5.82</b>, b = 0.5 − 0.1(−2) = <b>0.7</b></li>
<li><b>แถว 3</b> x = (160, 35), y = 1 → z = 17.5·160 + 5.82·35 + 0.7 = 2800 + 203.7 + 0.7 = <b>3004.4</b> → ŷ = 1 ถูก → ไม่ปรับ</li>
<li>ทำต่อจนครบ 8 แถว = 1 epoch แล้ววนหลาย epoch จนถูกหมด / ถึงเกณฑ์ / ครบจำนวนรอบสูงสุด</li></ol>
<details class="reveal"><summary>ลองคิดก่อน: ถ้าแถว 2 ใช้กฎมาตรฐาน (+) จะได้ w เท่าไร?</summary>w₁ = 0.5 + 0.1(−2)(85) = −16.5 · w₂ = 0.5 + 0.1(−2)(26.6) = −4.82 · b = 0.5 + 0.1(−2) = 0.3 → แถว 3: z = −16.5·160 − 4.82·35 + 0.3 = −2808.4 → ทาย −1 ผิด → ปรับอีก: w₁ = 15.5, w₂ = 2.18, b = 0.5</details>
<div class="demo" id="d8-perc"><h4>🔧 ลองเล่น: ฝึก Perceptron บนข้อมูล Diabetes 8 แถว</h4>
<div class="row"><label>η <input type="number" data-k="eta" value="0.1" step="any"></label><label>w₁ เริ่ม <input type="number" data-k="w1" value="0.5" step="any"></label><label>w₂ เริ่ม <input type="number" data-k="w2" value="0.5" step="any"></label><label>b เริ่ม <input type="number" data-k="b" value="0.5" step="any"></label>
<label>สูตร <select data-k="rule"><option value="slide">ตามสไลด์ (w − η(y−ŷ)x)</option><option value="std">มาตรฐาน (w + η(y−ŷ)x)</option></select></label></div>
<div class="row"><button data-act="step">ถัดไป 1 แถว</button><button data-act="epoch">รัน 1 epoch</button><button data-act="many">รัน 50 epochs</button><button class="ghost" data-act="reset">รีเซ็ต</button></div>
<canvas width="640" height="300"></canvas>
<div class="out"></div>
<p class="mut" style="font-size:14px">จุดสีน้ำเงิน = เบาหวาน (+1), สีส้ม = ไม่เป็น (−1) · เส้นเขียว = decision boundary ปัจจุบัน · ลองเทียบสูตรสไลด์กับสูตรมาตรฐาน: สูตรไหนทำให้ error ต่อ epoch ลดลงจนเป็น 0?</p></div>
<details class="reveal"><summary>เฉลยการทดลอง</summary>เริ่ม w = (0.5, 0.5), b = 0.5, η = 0.1 · <b>สูตรสไลด์</b> (ลบ) ทายผิด 4 ครั้งทุก epoch ไม่มีวันลู่เข้า และ w โตขึ้นเรื่อย ๆ · <b>สูตรมาตรฐาน</b> (บวก) error ต่อ epoch = 6, 6, 6, 5, … แล้วเป็น <b>0 ตั้งแต่ epoch 16</b> (ข้อมูลชุดนี้ linearly separable) → ยืนยันว่ากฎมาตรฐานคือทิศที่ถูก</details>
<h3>โค้ดใน Lab 08 (สไลด์หน้า 36)</h3>
<div class="formula">class Perceptron:
    def net_input(self, X):  return np.dot(X, self.w_[1:]) + self.w_[0]
    def predict(self, X):    return np.where(self.net_input(X) >= 0.0, 1, -1)
    def fit(self, X, y):
        for _ in range(self.n_iter):
            errors = 0
            for xi, target in zip(X, y):
                update = self.eta * (target - self.predict(xi))
                self.w_[1:] += update * xi
                self.w_[0]  += update
                errors += int(update != 0.0)
            self.errors_.append(errors)</div>
<div class="callout ex"><span class="lb">ผลใน Lab</span>Iris setosa vs versicolor: จำนวน error ต่อ epoch ลดเป็น <b>0 ที่ epoch 6</b> · บนข้อมูลที่ซ้อนทับกัน (versicolor vs virginica) จะไม่มีวันถึง 0</div>`
    },
    {
      id: 'adaline', title: '5) Adaline: ใช้ค่าต่อเนื่องคำนวณ error',
      html: `
<div class="callout def"><span class="lb">นิยาม</span><b>Adaline</b> (ADAptive LInear NEuron · Bernard Widrow &amp; Ted Hoff, 1960) = neuron ที่ตอน “เรียน” ใช้ <b>activation แบบ identity</b> f(z) = z (ไม่ผ่าน step) แล้วคำนวณ error จากค่าต่อเนื่องนี้ · ใช้ step เฉพาะตอนตัดสินคำตอบสุดท้าย</div>
<figure class="slide"><img src="img/L08_p17.jpg" alt=""><figcaption>Lecture 08 หน้า 17 · บน: Perceptron (error คิดหลัง threshold) · ล่าง: Adaline (error คิดจาก f(z) = z ก่อน threshold)</figcaption></figure>
<table class="tbl"><tr><th></th><th>Perceptron</th><th>Adaline</th></tr>
<tr><td>activation ตอนเรียน</td><td>step</td><td>identity f(z) = z</td></tr>
<tr><td>error</td><td>y − ŷ ∈ {0, ±2}</td><td>y − f(z) เป็นจำนวนจริง</td></tr>
<tr><td>ปรับเมื่อ</td><td>ทายผิดเท่านั้น</td><td>ทุกตัวอย่าง (ผิดมากปรับมาก)</td></tr>
<tr><td>loss</td><td>ไม่มี loss ที่หาอนุพันธ์ได้</td><td>SSE = ½Σ(y − f(z))²</td></tr>
<tr><td>วิธีเรียน</td><td>Rosenblatt rule</td><td>Gradient descent</td></tr></table>
<div class="callout key"><span class="lb">ทำไมสำคัญ</span>เพราะ error ต่อเนื่อง → loss เรียบ หาอนุพันธ์ได้ → ใช้ <b>gradient descent</b> ได้ → เป็นต้นแบบของ logistic regression และ neural network ทุกตัว</div>
<details class="reveal"><summary>ลองคิดก่อน: ถ้า y = 1 และ z = 0.3 Perceptron กับ Adaline ปรับ w ไหม?</summary>Perceptron: ŷ = +1 (z ≥ 0) ทายถูก → ไม่ปรับ · Adaline: error = 1 − 0.3 = 0.7 ≠ 0 → ยังปรับ (ดัน z เข้าใกล้ 1 มากขึ้น)</details>`
    },
    {
      id: 'gd', title: '6) Gradient Descent: เดินลงเขาตามความชัน',
      html: `
<p>นึกภาพว่ายืนอยู่บนภูเขาในหมอกหนา มองไม่เห็นหุบเขา สิ่งเดียวที่รู้คือ “พื้นตรงเท้าลาดลงไปทางไหน” → ก้าวไปทางที่ลาดลงทีละก้าว ทำซ้ำจนถึงจุดต่ำสุด นี่คือ gradient descent</p>
<div class="callout def"><span class="lb">นิยาม</span><b>Gradient</b> ∇L = เวกเตอร์ของอนุพันธ์ย่อย ∂L/∂wⱼ ทุกตัว ชี้ทางที่ L <b>เพิ่มขึ้นเร็วที่สุด</b> · <b>Gradient descent</b> = ปรับพารามิเตอร์ไป <b>ทิศตรงข้าม</b> gradient ทีละก้าว: w ← w − η∇L · <b>Objective / cost / loss function</b> = ฟังก์ชันที่ต้องการทำให้ต่ำสุด</div>
<div class="formula">SSE:        L(w) = ½ Σᵢ (yᵢ − f(zᵢ))²          f(z) = z = wᵀx
Gradient:   ∂L/∂wⱼ = − Σᵢ (yᵢ − f(zᵢ)) xᵢⱼ      ∂L/∂b = − Σᵢ (yᵢ − f(zᵢ))
Update:     wⱼ ← wⱼ − η ∂L/∂wⱼ = wⱼ + η Σᵢ (yᵢ − f(zᵢ)) xᵢⱼ</div>
<ol class="steps"><li>เขียน loss ของตัวอย่างเดียว: ½(y − wᵀx)²</li><li>ดิฟเทียบ wⱼ ด้วย chain rule: 2·½·(y − wᵀx)·(−xⱼ) = −(y − wᵀx)xⱼ</li><li>รวมทุกตัวอย่าง → ∂L/∂wⱼ = −Σ(yᵢ − f(zᵢ))xᵢⱼ · ½ ถูกใส่ไว้ให้ตัดกับ 2 พอดี</li><li>เดินสวน gradient → เครื่องหมายลบสองตัวกลายเป็นบวก: w + ηΣ(error)·x</li></ol>
<figure class="slide"><img src="img/L08_p28.jpg" alt=""><figcaption>Lecture 08 หน้า 28 · slope &lt; 0 → w เพิ่ม · slope &gt; 0 → w ลด → ทั้งสองแบบ loss ลด</figcaption></figure>
<div class="demo" id="d8-gd"><h4>🔧 ลองเล่น: Gradient descent 1 มิติ  L(w) = (w − 3)²</h4>
<div class="row"><label>learning rate η <input type="range" data-k="eta" min="0.02" max="1.2" step="0.02" value="0.1"> <b data-v="eta">0.1</b></label><label>w เริ่ม <input type="number" data-k="w0" value="-1" step="any"></label><button data-act="go">วาดใหม่ 15 ก้าว</button></div>
<canvas width="640" height="280"></canvas><div class="out"></div>
<p class="mut" style="font-size:14px">ลอง η = 0.1 (ลู่เข้าช้า ๆ), 0.5 (ถึงในก้าวเดียว), 0.9 (แกว่งแต่ลู่เข้า), 1.0 (แกว่งค้าง), 1.1 (ระเบิด)</p></div>
<div class="callout warn"><span class="lb">learning rate</span>สูงไป → ก้าวข้ามจุดต่ำสุด แกว่ง และ <b>cost ระเบิด</b> · ต่ำไป → <b>ลู่เข้าช้ามาก</b> · ต้องลองเป็นช่วง (0.0001, 0.001, 0.01 …) และดู <b>กราฟ cost ต่อ epoch</b> เสมอ</div>`
    },
    {
      id: 'sgd', title: '7) Batch · Mini-batch · SGD + ตัวอย่างคำนวณ',
      html: `
<figure class="slide"><img src="img/L08_p22.jpg" alt="" style="max-width:520px"><figcaption>Lecture 08 หน้า 22</figcaption></figure>
<table class="tbl"><tr><th>แบบ</th><th>ใช้ข้อมูลกี่ตัวต่อการอัปเดต 1 ครั้ง</th><th>เรียกว่า</th><th>ข้อดี / ข้อเสีย</th></tr>
<tr><td>(Batch) Gradient descent</td><td>ทั้งหมด</td><td>batch learning</td><td>ทิศแม่น นิ่ง / ช้า กินหน่วยความจำ</td></tr>
<tr><td>Mini-batch GD</td><td>กลุ่มย่อย เช่น 32</td><td>mini-batch learning</td><td>สมดุล ใช้ GPU ขนานได้ — มาตรฐาน DL</td></tr>
<tr><td>Stochastic GD (SGD)</td><td>1 ตัว</td><td>online learning</td><td>อัปเดตบ่อย เร็ว / แกว่ง</td></tr></table>
<h3>ตัวอย่าง SGD จากสไลด์ 23–26</h3>
<p>η = 0.0001 (เล็กกว่า Perceptron มาก เพราะ feature ไม่ได้ normalize ถ้าใหญ่จะ diverge) · w₀ = 0.5 (bias, x₀ = 1), w₁ = 0.5, w₂ = 0.5 · กฎ wⱼ ← wⱼ + η(y − f(z))xⱼ</p>
<ol class="steps">
<li><b>แถว 1</b> x = (1, 148, 33.6), y = 1 → z = 0.5 + 74 + 16.8 = 91.3 = f(z) → error = 1 − 91.3 = <b>−90.3</b> → w₀ = 0.5 + 0.0001(−90.3)(1) = 0.49097 · w₁ = 0.5 + 0.0001(−90.3)(148) = <b>−0.83644</b> · w₂ = 0.5 + 0.0001(−90.3)(33.6) = 0.196592</li>
<li><b>แถว 2</b> x = (1, 85, 26.6), y = −1 → z = 0.49097 − 71.0974 + 5.2293 = −65.3771 → error = −1 − (−65.3771) = <b>64.3771</b> → w ≈ (0.4974, −0.2892, 0.3678)</li>
<li><b>แถว 3</b> x = (1, 160, 35), y = 1 → z ≈ −32.906 → error ≈ <b>33.906</b> → w ≈ (0.5008, 0.2533, 0.4865)</li></ol>
<div class="callout key"><span class="lb">สังเกต</span>แถว 1 ทายถูก (+1) แต่ Adaline ยังปรับเพราะ error = −90.3 · ค่าที่ปรับ = η × error × x → glucose (~150) ทำให้ w₁ แกว่งแรงที่สุด → นี่คือเหตุผลที่ต้อง scale feature</div>
<div class="demo" id="d8-ada"><h4>🔧 ลองเล่น: Adaline + SGD บนข้อมูล Diabetes</h4>
<div class="row"><label>η <input type="number" data-k="eta" value="0.0001" step="any"></label><label>epochs <input type="number" data-k="ep" value="10"></label><label><input type="checkbox" data-k="std"> standardize x ก่อน</label>
<button data-act="three">แสดง 3 แถวแรก (เทียบสไลด์)</button><button data-act="run">รันหลาย epoch</button></div>
<div class="out"></div>
<p class="mut" style="font-size:14px">ลอง: (ก) ไม่ standardize, η = 0.0001 → ค่าตรงกับสไลด์ (ข) ไม่ standardize, η = 0.001 → SSE ระเบิด (ค) standardize, η = 0.01 หรือ 0.1 → SSE ลดลงเรื่อย ๆ ไม่ระเบิด — ตรงกับบทเรียนใน Lab 08</p></div>`
    },
    {
      id: 'scaling', title: '8) Feature scaling และบทเรียนจาก Lab',
      html: `
<div class="callout def"><span class="lb">นิยาม</span><b>Standardization</b>: x′ = (x − μ)/σ ทำให้ทุก feature มีค่าเฉลี่ย 0 ส่วนเบี่ยงเบนมาตรฐาน 1 → ทุกแกนสเกลใกล้กัน รูปทรงของ loss “กลม” ขึ้น ใช้ η เดียวได้ทุกมิติ</div>
<div class="callout ex"><span class="lb">ผลจริงใน Lab 08 (สไลด์หน้า 37)</span>
AdalineGD ไม่ scale: <b>η = 0.01 → cost ระเบิด 43.5 → 5.7 × 10¹³</b> · <b>η = 0.0001 → cost ลดช้ามาก 42.1 → 32.9</b><br>
หลัง standardize: <b>η = 0.01 ตัวเดิมกลับใช้ได้ทันที</b></div>
<div class="formula">class AdalineGD:                               # batch gradient descent
    output = self.net_input(X)                 # identity activation
    errors = y - output
    self.w_[1:] += self.eta * X.T.dot(errors)  # อัปเดตครั้งเดียวต่อ epoch
    self.w_[0]  += self.eta * errors.sum()
    self.cost_.append((errors**2).sum() / 2.0) # SSE</div>
<div class="callout key"><span class="lb">บทเรียนที่ใช้ได้ตลอดชีวิต</span>① กราฟ cost ต่อ epoch = เครื่องมือ debug อันดับหนึ่งของทุกโมเดลที่ใช้ gradient descent ② ปัญหาการลู่เข้าหลายครั้งแก้ที่ “ข้อมูล” ไม่ใช่ที่ “อัลกอริทึม”</div>
<details class="reveal"><summary>ลองคิดก่อน: cost เพิ่มขึ้นทุก epoch ควรทำอะไร?</summary>ลด η ลง (สิบเท่า) และ/หรือ standardize feature · ถ้า cost ลดช้าเกิน ให้เพิ่ม η</details>`
    },
    {
      id: 'mlp', title: '9) จาก Perceptron เดี่ยวสู่ MLP + activation',
      html: `
<p>Perceptron 1 ตัว = เส้นตรง 1 เส้น → <b>XOR</b> (ออก 1 เมื่อ input ต่างกัน) แก้ไม่ได้ เพราะจุด (0,1),(1,0) อยู่ทแยงกับ (0,0),(1,1) ไม่มีเส้นตรงเส้นเดียวแยกได้ · ทางออก: ต่อหลายตัวเป็น “ชั้น” และใส่ฟังก์ชันไม่เชิงเส้นคั่น</p>
<figure class="slide"><img src="img/L08_p29.jpg" alt="" style="max-width:520px"><figcaption>Lecture 08 หน้า 29 · Input → Hidden 1 → Hidden 2 → Output</figcaption></figure>
<table class="tbl"><tr><th>ชั้น</th><th>หน้าที่</th></tr>
<tr><td>Input layer</td><td>รับ feature ตรง ๆ · จำนวนหน่วย = จำนวน feature</td></tr>
<tr><td>Hidden layer</td><td>แต่ละหน่วยคือ perceptron 1 ตัว · เรียนรู้ “feature ใหม่” จากข้อมูลดิบเอง</td></tr>
<tr><td>Activation</td><td>ReLU / Sigmoid / Tanh — ไม่เชิงเส้น หลังทุกหน่วย</td></tr>
<tr><td>Output layer</td><td>sigmoid (2 คลาส) · softmax (หลายคลาส) · ไม่มี activation (regression)</td></tr></table>
<div class="formula">ถ้าไม่มี activation:  y = W₂(W₁x) = (W₂W₁)x = Wx   ← ยังเป็นเชิงเส้นชั้นเดียว!
ถ้ามี:               y = W₂·ReLU(W₁x)             ← ได้ความสามารถใหม่จริง</div>
<div class="demo" id="d8-act"><h4>🔧 ลองเล่น: กราฟ activation function</h4>
<div class="row"><label>ฟังก์ชัน <select data-k="f"><option value="sigmoid">Sigmoid</option><option value="tanh">Tanh</option><option value="relu">ReLU</option><option value="step">Step</option><option value="identity">Identity</option></select></label>
<label>z = <input type="range" data-k="z" min="-6" max="6" step="0.1" value="0.5"> <b data-v="z">0.5</b></label></div>
<canvas width="640" height="240"></canvas><div class="out"></div></div>
<h3>XOR ด้วยโครงข่าย 2 ชั้น</h3>
<p>h₁ = step(x₁ + x₂ − 0.5) ทำหน้าที่ OR · h₂ = step(−x₁ − x₂ + 1.5) ทำหน้าที่ NAND · y = step(h₁ + h₂ − 1.5) ทำหน้าที่ AND → OR AND NAND = XOR</p>
<div class="demo" id="d8-xor"><h4>🔧 ลองเล่น: กด x₁, x₂ ดูว่าชั้นซ่อนเปลี่ยนโจทย์อย่างไร</h4>
<div class="row"><label><input type="checkbox" data-k="x1"> x₁ = 1</label><label><input type="checkbox" data-k="x2"> x₂ = 1</label></div><div class="out"></div></div>
<div class="callout key"><span class="lb">ประเด็น</span>ชั้นซ่อนสร้าง feature ใหม่ (h₁, h₂) ที่ทำให้โจทย์ซึ่งแยกไม่ได้ในพิกัดเดิม กลายเป็นแยกได้ด้วยเส้นตรงในพิกัดใหม่ — นี่คือหัวใจของ deep learning</div>`
    },
    {
      id: 'backprop', title: '10) Backpropagation = วิธีคำนวณความชันหลายชั้น',
      html: `
<p>ปัญหา: ถ้ามีหลายชั้น เราจะรู้ได้อย่างไรว่าน้ำหนักชั้นแรกควรขยับไปทางไหน ทั้งที่มันอยู่ห่างจากคำตอบหลายทอด? → ใช้ <b>chain rule</b> ไล่ย้อนจาก loss กลับมาทีละชั้น</p>
<ol class="steps"><li><b>Forward pass</b>: ส่งข้อมูลผ่านทุกชั้นจนได้คำทำนายและ loss</li><li><b>Backward pass</b>: ไล่ย้อนทีละชั้น ใช้ chain rule หาว่าแต่ละ w มีส่วนทำให้ loss สูงเท่าไร</li><li><b>Update</b>: ปรับทุก w สวนทางความชัน — สูตรเดียวกับ Adaline ทุกประการ</li><li><b>ทำซ้ำ</b> หลาย epoch จน loss ไม่ลดหรือครบรอบ</li></ol>
<figure class="slide"><img src="img/L08_p31.jpg" alt="" style="max-width:420px"><figcaption>Lecture 08 หน้า 31 · w_ij เชื่อมหน่วย i ไป j</figcaption></figure>
<div class="formula">∂L/∂wᵢⱼ = ∂L/∂aⱼ · ∂aⱼ/∂zⱼ · ∂zⱼ/∂wᵢⱼ = δⱼ · aᵢ</div>
<div class="callout ex"><span class="lb">ตัวอย่างเล็ก ๆ: neuron sigmoid 1 ตัว</span>x = 2, w = 0.5, b = 0, y = 1, loss = ½(y − a)² · forward: z = 1, a = σ(1) = 0.731 · backward: ∂L/∂a = −(1 − 0.731) = −0.269 · ∂a/∂z = a(1 − a) = 0.197 · ∂z/∂w = x = 2 → ∂L/∂w = −0.269 × 0.197 × 2 = <b>−0.106</b> → w ใหม่ (η = 1) = 0.5 + 0.106 = 0.606 → a เพิ่มเข้าหา 1 ✔</div>
<div class="callout key"><span class="lb">สิ่งที่ต้องเข้าใจ ไม่ใช่สิ่งที่ต้องท่อง (หน้า 31)</span>
• Backprop <b>ไม่ใช่อัลกอริทึมการเรียนรู้ใหม่</b> — เป็นวิธีคำนวณความชันอย่างมีประสิทธิภาพ การเรียนรู้ยังเป็น gradient descent เหมือนเดิม<br>
• ทุกอย่างใน Part 2 ยังจริง: η สูงไป loss ระเบิด · ข้อมูลไม่ scale ลู่เข้าช้า<br>
• เฟรมเวิร์กคำนวณอนุพันธ์ให้อัตโนมัติ (<b>autograd</b>) แต่เราต้องรู้ว่ามันทำอะไร</div>
<details class="reveal"><summary>ลองคิดก่อน: ทำไม Perceptron ที่ใช้ step function ต่อเป็นหลายชั้นแล้วใช้ backprop ไม่ได้?</summary>อนุพันธ์ของ step = 0 เกือบทุกจุด → ส่ง gradient ย้อนไม่ได้ → MLP จึงใช้ activation ที่หาอนุพันธ์ได้ เช่น sigmoid, tanh, ReLU</details>`
    },
    {
      id: 'deep', title: '11) ทำไม “ลึก” ได้เปรียบ · เมื่อไรไม่ควรใช้ · เฟรมเวิร์ก',
      html: `
<div class="grid2"><div class="card"><h4>ข้อดีของความลึก</h4><ul><li>ชั้นแรกเรียนลายง่าย (ขอบ มุม) → ชั้นกลางประกอบเป็นรูปทรง → ชั้นลึกจับวัตถุทั้งชิ้น</li><li>เรียน feature เองจากข้อมูลดิบ (ML ดั้งเดิมต้องให้คนออกแบบ feature)</li></ul></div>
<div class="card"><h4>สิ่งที่ต้องแลก</h4><ul><li>ต้องใช้ข้อมูลจำนวนมาก</li><li>คำนวณแพง (GPU)</li><li>อธิบายผลได้ยากขึ้นมาก</li></ul></div></div>
<div class="callout warn"><span class="lb">เมื่อไรยังไม่ควรใช้ Deep Learning</span>• ข้อมูลตาราง ไม่กี่พันแถว → <b>Gradient Boosting</b> มักชนะชัดเจน (Lab 07: MLP ได้ AUC 0.781 ต่ำที่สุด) • งานที่ต้องอธิบายเหตุผลตามกฎระเบียบ → โมเดลเชิงเส้น/กฎ • DL เปล่งพลังกับข้อมูลไม่มีโครงสร้าง: ภาพ เสียง ข้อความ วิดีโอ</div>
<div class="formula"># scikit-learn
MLPClassifier(hidden_layer_sizes=(32, 16), activation='relu', max_iter=2000)
# PyTorch
nn.Sequential(nn.Linear(8, 32), nn.ReLU(), nn.Linear(32, 16), nn.ReLU(), nn.Linear(16, 1), nn.Sigmoid())
# Keras
keras.Sequential([layers.Dense(32, activation='relu'), layers.Dense(16, activation='relu'), layers.Dense(1, activation='sigmoid')])</div>
<p>ทั้งสามบรรยาย <b>โครงข่ายเดียวกัน</b> ต่างกันแค่ไวยากรณ์ · scikit-learn ไม่มี GPU / การคุม training loop / ชั้นพิเศษอย่าง convolution, attention · สิ่งที่ไม่เปลี่ยน: train/validation/test, overfitting, การเลือกตัวชี้วัด</p>
<div class="demo" id="d8-params"><h4>🔧 ลองเล่น: นับพารามิเตอร์ของ MLP (Dense)</h4>
<div class="row"><label>ขนาดแต่ละชั้น (คั่นด้วย ,) <input type="text" data-k="sizes" value="8, 32, 16, 1"></label></div><div class="out"></div>
<p class="mut" style="font-size:14px">สูตร: แต่ละชั้น Dense = (จำนวน input + 1) × จำนวน output (+1 คือ bias)</p></div>`
    },
    {
      id: 'lab', title: '12) Lab 08 + สรุปทั้งบท',
      html: `
<table class="tbl"><tr><th>ส่วน</th><th>ข้อมูล</th><th>ทำอะไร</th></tr>
<tr><td>1 Perceptron</td><td>Iris setosa vs versicolor</td><td>เขียน net_input, predict, fit เอง → error เป็น 0 ที่ epoch 6</td></tr>
<tr><td>2 Adaline + GD</td><td>Iris</td><td>cost SSE · เทียบ η สูง/ต่ำ · แก้ด้วย standardization</td></tr>
<tr><td>3 Pipeline</td><td>PIMA Diabetes 8 features</td><td>แทนค่า 0 ด้วย NaN → impute → scale โดยไม่เกิด data leakage</td></tr>
<tr><td>4 เทียบ/วัดผล</td><td>PIMA</td><td>6 โมเดล · classification report · ROC/AUC บนแกนเดียวกัน</td></tr>
<tr><td>5 Tuning</td><td>PIMA</td><td>GridSearchCV เลือก hyperparameter</td></tr></table>
<div class="callout def"><span class="lb">นิยาม</span><b>Data leakage</b> = ข้อมูลจากชุดทดสอบรั่วเข้าไปตอนฝึก (เช่น fit scaler ทั้งชุดก่อน split) → คะแนนดีเกินจริง · แก้โดยใส่ imputer/scaler ใน Pipeline ที่ fit กับ train เท่านั้น · <b>Hyperparameter</b> = ค่าที่เราตั้ง (η, จำนวน epoch, ขนาดชั้น) ต่างจาก parameter (w, b) ที่โมเดลเรียนเอง</div>
<div class="callout key"><span class="lb">สรุป Lecture 08 — 6 ข้อ</span>
① Perceptron เรียนจากความผิดพลาด ปรับเฉพาะตอนทายผิด ลู่เข้าเมื่อข้อมูลแยกด้วยเส้นตรงได้เท่านั้น<br>
② Gradient Descent ลด cost โดยเดินสวนความชัน — learning rate และสเกลของ feature กำหนดว่าจะลู่เข้าหรือไม่<br>
③ ชั้นซ่อน + activation ไม่เชิงเส้น = ความสามารถใหม่ (ไม่มี activation ต่อกี่ชั้นก็เท่าชั้นเดียว)<br>
④ Backpropagation คือวิธีคำนวณความชัน ไม่ใช่อัลกอริทึมการเรียนรู้ใหม่<br>
⑤ ลึกไม่ได้แปลว่าดีกว่าเสมอ — ข้อมูลตารางไม่กี่พันแถว boosting ยังชนะ<br>
⑥ สิ่งที่ไม่เปลี่ยน: train/validation/test · overfitting · เลือกตัวชี้วัดให้ตรงต้นทุนความผิดพลาด</div>`
    }
  ],
  quiz: [
    { q: 'MCP neuron (1943) ต่างจาก Perceptron (1957) อย่างไรที่สำคัญที่สุด', c: ['MCP ใช้ sigmoid', 'MCP ไม่มีกฎการเรียนรู้ ต้องตั้ง w และ θ เอง', 'MCP มีหลายชั้น', 'MCP ให้ output เป็นจำนวนจริง'], a: 1, e: 'Perceptron = MCP + Rosenblatt learning rule ที่ปรับ w จากความผิดพลาด' },
    { q: 'θ = −0.016, w₁ = −0.006, w₂ = −0.005, x = (3, 2) ผลลัพธ์ MCP คือ', c: ['1 เพราะ z = −0.028 ≥ θ', '0 เพราะ z = −0.028 < θ', '1 เพราะ z เป็นลบ', '0 เพราะ z = 0.028'], a: 1, e: 'z = −0.018 − 0.010 = −0.028 ซึ่งน้อยกว่า −0.016 จึงไม่ fire' },
    { q: 'ในกฎ Rosenblatt ถ้าโมเดลทายถูก (y = ŷ) จะเกิดอะไร', c: ['w เพิ่มขึ้น η', 'w ลดลง η', 'w ไม่เปลี่ยน เพราะ y − ŷ = 0', 'สุ่ม w ใหม่'], a: 2, e: 'Δw = η(y − ŷ)x = 0 เมื่อทายถูก — Perceptron ปรับเฉพาะตอนทายผิด' },
    { q: 'Perceptron ตัวเดียวจะลู่เข้าจน error = 0 ได้เมื่อใด', c: ['ทุกกรณีถ้า epoch มากพอ', 'เมื่อข้อมูล linearly separable', 'เมื่อใช้ η เล็กมาก', 'เมื่อข้อมูลมีมากกว่า 1000 แถว'], a: 1, e: 'Perceptron สร้างเส้นตรงเส้นเดียว จึงแยกได้หมดเฉพาะข้อมูลที่แยกด้วยเส้นตรงได้ (เช่น XOR ทำไม่ได้)' },
    { q: 'ตัวอย่างสไลด์แถว 2: x = (85, 26.6), y = −1, w = (0.5, 0.5), b = 0.5, η = 0.1 ใช้สูตรสไลด์ w = w − η(y − ŷ)x ได้ w₁ เท่าไร', c: ['−16.5', '0.5', '17.5', '8.5'], a: 2, e: 'z = 56.3 → ŷ = 1, y − ŷ = −2 → w₁ = 0.5 − 0.1(−2)(85) = 17.5 (ถ้าใช้กฎมาตรฐาน + จะได้ −16.5)' },
    { q: 'Adaline ต่างจาก Perceptron ที่จุดใด', c: ['Adaline คำนวณ error จาก f(z) = z ก่อนผ่าน threshold', 'Adaline ไม่มี bias', 'Adaline ใช้ softmax', 'Adaline ปรับเฉพาะตอนทายผิด'], a: 0, e: 'error ต่อเนื่อง y − f(z) ทำให้ loss (SSE) หาอนุพันธ์ได้และใช้ gradient descent ได้' },
    { q: 'Gradient descent ปรับ w อย่างไร', c: ['w ← w + η∇L', 'w ← w − η∇L', 'w ← ∇L', 'w ← w × η'], a: 1, e: 'gradient ชี้ทางที่ loss เพิ่ม จึงเดินสวนทางเพื่อลด loss' },
    { q: 'SGD ตัวอย่างแถว 1: x = (1, 148, 33.6), y = 1, w = (0.5, 0.5, 0.5), η = 0.0001 error คือ', c: ['0', '−90.3', '90.3', '−2'], a: 1, e: 'z = 0.5 + 74 + 16.8 = 91.3 → error = 1 − 91.3 = −90.3' },
    { q: 'Lab 08: Adaline ที่ไม่ standardize ใช้ η = 0.01 แล้ว cost เป็นอย่างไร', c: ['ลดลงเร็วมาก', 'ระเบิดจาก 43.5 เป็น 5.7×10¹³', 'คงที่', 'ลดลงช้า 42.1 → 32.9'], a: 1, e: 'η สูงเกินเมื่อ feature สเกลใหญ่ → diverge · หลัง standardize η = 0.01 ใช้ได้ทันที' },
    { q: 'ถ้าต่อ Linear 3 ชั้นโดยไม่มี activation function ผลคือ', c: ['แก้ XOR ได้', 'ยังเทียบเท่าโมเดลเชิงเส้นชั้นเดียว', 'ได้โมเดลไม่เชิงเส้น', 'เรียนรู้เร็วขึ้น 3 เท่า'], a: 1, e: 'W₃W₂W₁x = Wx ยังเป็น linear ต้องมี activation ไม่เชิงเส้นคั่น' },
    { q: 'ข้อใดถูกต้องเกี่ยวกับ backpropagation', c: ['เป็นอัลกอริทึมการเรียนรู้ใหม่แทน gradient descent', 'เป็นวิธีคำนวณ gradient ด้วย chain rule ส่วนการเรียนรู้ยังเป็น gradient descent', 'ใช้ได้เฉพาะโครงข่ายชั้นเดียว', 'ไม่ต้องใช้ learning rate'], a: 1, e: 'ตามสไลด์หน้า 31: backprop คือวิธีคำนวณความชันอย่างมีประสิทธิภาพ' },
    { q: 'MLP 8 → 32 → 16 → 1 (Dense ทุกชั้น) มีพารามิเตอร์ทั้งหมดกี่ตัว', c: ['56', '833', '800', '1,024'], a: 1, e: '(8+1)·32 + (32+1)·16 + (16+1)·1 = 288 + 528 + 17 = 833' }
  ],
  init(root) {
    const T = TUTOR, $ = s => root.querySelector(s);
    const num = (box, k) => parseFloat(box.querySelector('[data-k="' + k + '"]').value);
    const css = n => getComputedStyle(document.body).getPropertyValue(n).trim() || '#333';

    /* --- demo: MCP neuron --- */
    (function () {
      const box = $('#d8-neuron'); if (!box) return;
      const run = () => {
        const x1 = num(box, 'x1'), x2 = num(box, 'x2'), w1 = num(box, 'w1'), w2 = num(box, 'w2'), th = num(box, 'th');
        const z = w1 * x1 + w2 * x2;
        box.querySelector('.out').textContent = 'z = w₁x₁ + w₂x₂ = (' + w1 + ')(' + x1 + ') + (' + w2 + ')(' + x2 + ') = ' + T.fmt(z, 4) +
          '\nเทียบ θ = ' + th + ' → z ' + (z >= th ? '≥' : '<') + ' θ → f(z) = ' + (z >= th ? '1 (fire)' : '0 (ไม่ fire)');
      };
      box.querySelectorAll('input').forEach(i => i.oninput = run); run();
    })();

    /* --- demo: Perceptron trainer --- */
    (function () {
      const box = $('#d8-perc'); if (!box) return;
      const D = [[148, 33.6, 1], [85, 26.6, -1], [160, 35, 1], [90, 22.5, -1], [180, 40.2, 1], [100, 24, -1], [130, 30.1, 1], [70, 21, -1]];
      const cv = box.querySelector('canvas'), ctx = cv.getContext('2d'), out = box.querySelector('.out');
      let S;
      function reset() { S = { w1: num(box, 'w1'), w2: num(box, 'w2'), b: num(box, 'b'), i: 0, ep: 1, errs: 0, hist: [], log: [] }; draw(); show(); }
      function step() {
        const eta = num(box, 'eta'), rule = box.querySelector('[data-k="rule"]').value;
        const [x1, x2, y] = D[S.i];
        const z = S.w1 * x1 + S.w2 * x2 + S.b, yh = z >= 0 ? 1 : -1, e = y - yh, sg = rule === 'slide' ? -1 : 1;
        let msg = 'Epoch ' + S.ep + ' แถว ' + (S.i + 1) + ': x=(' + x1 + ', ' + x2 + ') y=' + y + ' z=' + T.fmt(z, 2) + ' ŷ=' + yh + ' y−ŷ=' + e;
        if (e !== 0) {
          S.w1 += sg * eta * e * x1; S.w2 += sg * eta * e * x2; S.b += sg * eta * e; S.errs++;
          msg += ' → ปรับ: w₁=' + T.fmt(S.w1, 3) + ', w₂=' + T.fmt(S.w2, 3) + ', b=' + T.fmt(S.b, 3);
        } else msg += ' → ทายถูก ไม่ปรับ';
        S.log.push(msg); if (S.log.length > 12) S.log.shift();
        S.i++;
        if (S.i === D.length) { S.hist.push(S.errs); S.errs = 0; S.i = 0; S.ep++; }
      }
      function show() {
        out.textContent = 'w₁ = ' + T.fmt(S.w1, 3) + '   w₂ = ' + T.fmt(S.w2, 3) + '   b = ' + T.fmt(S.b, 3) + '\n' +
          'จำนวนครั้งที่ทายผิด (ปรับ) ต่อ epoch: ' + (S.hist.length ? S.hist.slice(-20).join(', ') : '(ยังไม่ครบ epoch)') + '\n\n' + S.log.join('\n');
      }
      function draw() {
        const W = cv.width, H = cv.height, sx = x => 40 + (x - 60) / (190 - 60) * (W - 60), sy = y => H - 30 - (y - 18) / (44 - 18) * (H - 50);
        ctx.clearRect(0, 0, W, H); ctx.font = '12px sans-serif'; ctx.fillStyle = css('--mut');
        ctx.fillText('x₁ = glucose', W - 90, H - 8); ctx.fillText('x₂ = BMI', 4, 14);
        ctx.strokeStyle = css('--line'); ctx.strokeRect(40, 20, W - 60, H - 50);
        D.forEach(([a, b, y]) => { ctx.beginPath(); ctx.arc(sx(a), sy(b), 6, 0, 7); ctx.fillStyle = y > 0 ? '#1c7ed6' : '#e8590c'; ctx.fill(); });
        if (Math.abs(S.w2) > 1e-12) {
          const yAt = x => -(S.w1 * x + S.b) / S.w2;
          ctx.strokeStyle = '#2b8a3e'; ctx.lineWidth = 2; ctx.save(); ctx.beginPath(); ctx.rect(40, 20, W - 60, H - 50); ctx.clip(); ctx.beginPath(); ctx.moveTo(sx(60), sy(yAt(60))); ctx.lineTo(sx(190), sy(yAt(190))); ctx.stroke(); ctx.restore(); ctx.lineWidth = 1;
        }
      }
      box.querySelectorAll('button').forEach(b => b.onclick = () => {
        const a = b.dataset.act;
        if (a === 'reset') return reset();
        if (a === 'step') step();
        if (a === 'epoch') { const e0 = S.ep; while (S.ep === e0) step(); }
        if (a === 'many') { for (let k = 0; k < 50 * D.length; k++) step(); }
        draw(); show();
      });
      box.querySelectorAll('input,select').forEach(i => i.onchange = reset);
      reset();
    })();

    /* --- demo: 1-D gradient descent --- */
    (function () {
      const box = $('#d8-gd'); if (!box) return;
      const cv = box.querySelector('canvas'), ctx = cv.getContext('2d'), out = box.querySelector('.out');
      const L = w => (w - 3) * (w - 3), dL = w => 2 * (w - 3);
      function run() {
        const eta = num(box, 'eta'), w0 = num(box, 'w0'); box.querySelector('[data-v="eta"]').textContent = eta;
        const path = [w0]; for (let k = 0; k < 15; k++) { const w = path[path.length - 1]; path.push(w - eta * dL(w)); }
        const W = cv.width, H = cv.height, xmin = -4, xmax = 10, ymax = 50;
        const sx = w => 30 + (w - xmin) / (xmax - xmin) * (W - 50), sy = l => H - 25 - Math.min(l, ymax) / ymax * (H - 45);
        ctx.clearRect(0, 0, W, H); ctx.strokeStyle = css('--mut'); ctx.beginPath();
        for (let w = xmin; w <= xmax; w += 0.05) { const X = sx(w), Y = sy(L(w)); w === xmin ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y); } ctx.stroke();
        ctx.fillStyle = css('--mut'); ctx.font = '12px sans-serif'; ctx.fillText('w', W - 14, H - 8); ctx.fillText('L(w)', 4, 14); ctx.fillText('min ที่ w = 3', sx(3) - 30, H - 6);
        ctx.strokeStyle = '#e8590c'; ctx.beginPath();
        path.forEach((w, k) => { const X = sx(Math.max(xmin, Math.min(xmax, w))), Y = sy(L(w)); k ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y); }); ctx.stroke();
        path.forEach((w, k) => { ctx.beginPath(); ctx.arc(sx(Math.max(xmin, Math.min(xmax, w))), sy(L(w)), k ? 3.5 : 5, 0, 7); ctx.fillStyle = k ? '#e8590c' : '#1c7ed6'; ctx.fill(); });
        const last = path[path.length - 1], d0 = Math.abs(w0 - 3), d1 = Math.abs(last - 3);
        let st = d1 < 0.01 ? 'ลู่เข้า (converge) แล้ว' : (d1 < d0 * 0.9 ? 'กำลังลู่เข้า' : (Math.abs(d1 - d0) < 1e-6 ? 'แกว่งค้าง ไม่ลู่เข้า' : 'แกว่งออก/ระเบิด (diverge)'));
        if (Math.abs(eta - 1) < 1e-9) st = 'แกว่งค้าง ไม่ลู่เข้า (η = 1 กระโดดข้ามไปฝั่งตรงข้ามระยะเท่าเดิม)';
        out.textContent = 'w: ' + path.slice(0, 8).map(w => T.fmt(w, 3)).join(' → ') + ' …\nหลัง 15 ก้าว w = ' + T.fmt(last, 4) + ' , L(w) = ' + T.fmt(L(last), 4) + '\nสถานะ: ' + st +
          '\n(ในปัญหานี้ทุกก้าวคูณระยะจากจุดต่ำสุดด้วย |1 − 2η| → ลู่เข้าเมื่อ 0 < η < 1)';
      }
      box.querySelectorAll('input').forEach(i => i.oninput = run); box.querySelector('[data-act="go"]').onclick = run; run();
    })();

    /* --- demo: Adaline SGD --- */
    (function () {
      const box = $('#d8-ada'); if (!box) return;
      const D = [[148, 33.6, 1], [85, 26.6, -1], [160, 35, 1], [90, 22.5, -1], [180, 40.2, 1], [100, 24, -1], [130, 30.1, 1], [70, 21, -1]];
      const out = box.querySelector('.out');
      function data() {
        if (!box.querySelector('[data-k="std"]').checked) return D.map(r => r.slice());
        const m = [0, 1].map(j => D.reduce((s, r) => s + r[j], 0) / D.length);
        const sd = [0, 1].map(j => Math.sqrt(D.reduce((s, r) => s + (r[j] - m[j]) ** 2, 0) / D.length));
        return D.map(r => [(r[0] - m[0]) / sd[0], (r[1] - m[1]) / sd[1], r[2]]);
      }
      const sse = (X, w) => X.reduce((s, r) => { const e = r[2] - (w[0] + w[1] * r[0] + w[2] * r[1]); return s + e * e; }, 0) / 2;
      box.querySelector('[data-act="three"]').onclick = () => {
        const X = data(), eta = num(box, 'eta'); let w = [0.5, 0.5, 0.5], lines = [];
        for (let i = 0; i < 3; i++) {
          const r = X[i], z = w[0] + w[1] * r[0] + w[2] * r[1], e = r[2] - z;
          w = [w[0] + eta * e, w[1] + eta * e * r[0], w[2] + eta * e * r[1]];
          lines.push('แถว ' + (i + 1) + ': x=(1, ' + T.fmt(r[0], 3) + ', ' + T.fmt(r[1], 3) + ') y=' + r[2] + '  z=f(z)=' + T.fmt(z, 4) + '  error=' + T.fmt(e, 4) + '\n        → w₀=' + T.fmt(w[0], 6) + ', w₁=' + T.fmt(w[1], 6) + ', w₂=' + T.fmt(w[2], 6));
        }
        out.textContent = lines.join('\n');
      };
      box.querySelector('[data-act="run"]').onclick = () => {
        const X = data(), eta = num(box, 'eta'), ep = Math.min(500, Math.max(1, num(box, 'ep') | 0)); let w = [0.5, 0.5, 0.5], lines = ['epoch 0: SSE = ' + T.fmt(sse(X, w), 4)];
        for (let k = 1; k <= ep; k++) {
          X.forEach(r => { const e = r[2] - (w[0] + w[1] * r[0] + w[2] * r[1]); w = [w[0] + eta * e, w[1] + eta * e * r[0], w[2] + eta * e * r[1]]; });
          const s = sse(X, w); lines.push('epoch ' + k + ': SSE = ' + (isFinite(s) ? (s > 1e6 ? s.toExponential(2) : T.fmt(s, 4)) : '∞ (ระเบิด)'));
          if (!isFinite(s)) break;
        }
        const acc = X.filter(r => ((w[0] + w[1] * r[0] + w[2] * r[1]) >= 0 ? 1 : -1) === r[2]).length;
        out.textContent = lines.slice(-14).join('\n') + '\n\nw = (' + w.map(v => isFinite(v) ? T.fmt(v, 4) : '∞').join(', ') + ')  ·  ทายถูก ' + acc + '/8 แถว';
      };
    })();

    /* --- demo: activation plotter --- */
    (function () {
      const box = $('#d8-act'); if (!box) return;
      const cv = box.querySelector('canvas'), ctx = cv.getContext('2d'), out = box.querySelector('.out');
      const F = {
        sigmoid: [z => 1 / (1 + Math.exp(-z)), z => { const s = 1 / (1 + Math.exp(-z)); return s * (1 - s); }, '1/(1+e^(−z)) · ช่วง (0,1) · อนุพันธ์ σ(1−σ) สูงสุด 0.25'],
        tanh: [Math.tanh, z => 1 - Math.tanh(z) ** 2, '(e^z − e^−z)/(e^z + e^−z) · ช่วง (−1,1)'],
        relu: [z => Math.max(0, z), z => z > 0 ? 1 : 0, 'max(0, z) · อนุพันธ์ = 1 เมื่อ z > 0 (ช่วยเรื่อง vanishing gradient)'],
        step: [z => z >= 0 ? 1 : -1, () => 0, '+1 ถ้า z ≥ 0 ไม่งั้น −1 · อนุพันธ์ = 0 → ใช้ backprop ไม่ได้'],
        identity: [z => z, () => 1, 'f(z) = z · ใช้ใน Adaline และ output ของ regression']
      };
      function run() {
        const f = F[box.querySelector('[data-k="f"]').value], z0 = num(box, 'z'); box.querySelector('[data-v="z"]').textContent = z0;
        const W = cv.width, H = cv.height, sx = z => 20 + (z + 6) / 12 * (W - 40), sy = y => H / 2 - y * (H / 2 - 20) / 2;
        ctx.clearRect(0, 0, W, H); ctx.strokeStyle = css('--line'); ctx.beginPath(); ctx.moveTo(20, H / 2); ctx.lineTo(W - 20, H / 2); ctx.moveTo(sx(0), 10); ctx.lineTo(sx(0), H - 10); ctx.stroke();
        ctx.strokeStyle = '#1c7ed6'; ctx.lineWidth = 2; ctx.beginPath();
        for (let z = -6; z <= 6; z += 0.02) { const y = Math.max(-2, Math.min(2, f[0](z))); z === -6 ? ctx.moveTo(sx(z), sy(y)) : ctx.lineTo(sx(z), sy(y)); } ctx.stroke(); ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(sx(z0), sy(Math.max(-2, Math.min(2, f[0](z0)))), 6, 0, 7); ctx.fillStyle = '#e8590c'; ctx.fill();
        ctx.fillStyle = css('--mut'); ctx.font = '12px sans-serif'; ctx.fillText('z', W - 16, H / 2 - 4); ctx.fillText('+2', sx(0) + 4, 22); ctx.fillText('−2', sx(0) + 4, H - 14);
        out.textContent = 'f(' + z0 + ') = ' + T.fmt(f[0](z0), 4) + '   ·   f′(' + z0 + ') = ' + T.fmt(f[1](z0), 4) + '\n' + f[2];
      }
      box.querySelectorAll('input,select').forEach(i => i.oninput = run); run();
    })();

    /* --- demo: XOR network --- */
    (function () {
      const box = $('#d8-xor'); if (!box) return;
      const st = z => z >= 0 ? 1 : 0;
      const run = () => {
        const x1 = box.querySelector('[data-k="x1"]').checked ? 1 : 0, x2 = box.querySelector('[data-k="x2"]').checked ? 1 : 0;
        const h1 = st(x1 + x2 - 0.5), h2 = st(-x1 - x2 + 1.5), y = st(h1 + h2 - 1.5);
        box.querySelector('.out').textContent = 'h₁ = step(' + x1 + ' + ' + x2 + ' − 0.5) = ' + h1 + '   (OR)\n' + 'h₂ = step(−' + x1 + ' − ' + x2 + ' + 1.5) = ' + h2 + '   (NAND)\n' + 'y  = step(' + h1 + ' + ' + h2 + ' − 1.5) = ' + y + '   (AND ของ h₁, h₂)\n→ XOR(' + x1 + ', ' + x2 + ') = ' + (x1 ^ x2) + (y === (x1 ^ x2) ? '  ✔ ตรงกัน' : '');
      };
      box.querySelectorAll('input').forEach(i => i.onchange = run); run();
    })();

    /* --- demo: MLP parameter counter --- */
    (function () {
      const box = $('#d8-params'); if (!box) return;
      const run = () => {
        const s = T.nums(box.querySelector('[data-k="sizes"]').value).filter(v => v > 0);
        if (s.length < 2) { box.querySelector('.out').textContent = 'ใส่อย่างน้อย 2 ชั้น เช่น 8, 32, 16, 1'; return; }
        let tot = 0, lines = [];
        for (let i = 1; i < s.length; i++) { const p = (s[i - 1] + 1) * s[i]; tot += p; lines.push('ชั้น ' + i + ': (' + s[i - 1] + ' + 1) × ' + s[i] + ' = ' + p.toLocaleString()); }
        box.querySelector('.out').textContent = lines.join('\n') + '\nรวม = ' + tot.toLocaleString() + ' พารามิเตอร์';
      };
      box.querySelector('input').oninput = run; run();
    })();
  }
});
