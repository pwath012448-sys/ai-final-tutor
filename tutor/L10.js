/* Lecture 10 · Reinforcement Learning — web lesson */
TUTOR.addLesson({
  id: 'L10', num: 10,
  navTitle: 'Reinforcement Learning',
  title: 'Reinforcement Learning: จากการลองผิดลองถูกสู่การทรงตัวของ Cart-Pole',
  short: 'MDP · Return · Policy search · Q-learning · ε-greedy · DQN · Reward design',
  slides: 'Lecture 10 · 36 สไลด์',
  intro: 'บทนี้ตอบคำถามเดียว: ถ้าไม่มีใครเฉลยว่าก้าวไหนถูก มีแต่ “รางวัล” ที่มาทีหลัง เครื่องจะเรียนรู้การตัดสินใจต่อเนื่องได้อย่างไร? เราจะใช้โจทย์ Cart-Pole ตัวเดียวตลอดบท ตั้งแต่เขียนเป็นสมการ (MDP) ไปจนถึง Q-learning และ DQN',
  sections: [
    {
      id: 'intro', title: '1) RL คืออะไร — เรียนจากรางวัล ไม่ใช่จากเฉลย',
      html: `
<p>ลองนึกถึงการหัดขี่จักรยาน: ไม่มีใครบอกได้ว่า “วินาทีที่ 3.2 ต้องเอียงซ้าย 4 องศา” เรารู้แค่ว่า <b>ล้ม = แย่</b> และ <b>ขี่ไปได้ไกล = ดี</b> แล้วค่อย ๆ ปรับวิธีขี่จากประสบการณ์หลายรอบ นี่คือหัวใจของ Reinforcement Learning</p>
<div class="callout def"><span class="lb">นิยาม</span><b>Reinforcement Learning (การเรียนรู้แบบเสริมกำลัง)</b> คือการเรียนรู้เพื่อ <b>เลือกการกระทำ (action)</b> ที่ทำให้ได้ผลลัพธ์ที่ต้องการ <b>ในอนาคต</b> โดย agent ลองทำในสิ่งแวดล้อม ได้ <b>reward</b> เป็น feedback แล้วนำไปปรับ <b>policy</b> — จึงเรียกอีกชื่อว่า “การเรียนรู้แบบลองผิดลองถูก (trial &amp; error)”</div>
<h3>ลักษณะ 4 ข้อของปัญหา RL (สไลด์หน้า 6)</h3>
<ol class="steps">
<li><b>ตัดสินใจหลายขั้นตอน</b> — ผลแพ้ชนะรู้ตอนจบเกม หุ่นยนต์ต้องหมุนมอเตอร์หลายครั้งจึงทรงตัวได้</li>
<li><b>Policy (นโยบาย) คือสิ่งที่ต้องเรียน</b> — กฎที่บอกว่าใน state นี้ควรทำ action อะไร</li>
<li><b>Reward (รางวัล) คือ feedback ระหว่างทาง</b> — ตัวเลขที่บอกว่าดีแค่ไหน แต่ไม่บอกว่าควรทำอะไร</li>
<li><b>Episode (ตอน)</b> — ลำดับการตัดสินใจ + รางวัลตั้งแต่เริ่มจนจบ นำผลทั้งตอนไปปรับนโยบายสำหรับตอนถัดไป</li>
</ol>
<div class="tblwrap"><table class="tbl">
<tr><th></th><th>Supervised</th><th>Unsupervised</th><th>Reinforcement</th></tr>
<tr><td>ข้อมูลฝึก</td><td>มี label</td><td>ไม่มี label</td><td>คู่ state–action และรางวัล</td></tr>
<tr><td>Feedback</td><td>ตรง (ผิดเท่าไร)</td><td>ไม่มี</td><td>รางวัล มาทีหลัง ไม่บอกว่าก้าวไหนถูก</td></tr>
<tr><td>เป้าหมาย</td><td>ทำนาย/จำแนก</td><td>หาโครงสร้างซ่อน</td><td>ตัดสินใจเป็นลำดับให้ดีที่สุด</td></tr>
<tr><td>Cart-Pole</td><td>ต้องมีคนเฉลยซ้าย/ขวาทุกก้าว — ไม่มี</td><td>—</td><td>+1 ทุกก้าวที่คานยังไม่ตก</td></tr>
</table></div>
<div class="callout key"><span class="lb">ประโยคที่ต้องจำ</span>ใน RL <b>การตัดสินใจวันนี้กำหนดว่าพรุ่งนี้จะได้เห็นข้อมูลแบบไหน</b> — ข้อมูลไม่ได้มาจาก dataset ตายตัว แต่เกิดจากพฤติกรรมของ agent เอง</div>
<h3>โจทย์หลักของบท: Cart-Pole</h3>
<figure class="slide"><img src="img/L10_p07.jpg" alt="Cart-Pole"><figcaption>สไลด์หน้า 7 · เลื่อนรถเข็นซ้าย/ขวาเพื่อไม่ให้คานล้ม · รางยาว |x| ≤ 2.4</figcaption></figure>
<p>เป้าหมายคือเลื่อนรถให้คานตั้งได้นานที่สุด ทำไมไม่เขียนโปรแกรมควบคุมเอง? เพราะสมการฟิสิกส์ซับซ้อน และเราอยากให้เครื่องเรียนเอง แล้วทำไมไม่ใช้ supervised learning?</p>
<details class="reveal"><summary>ลองคิดก่อน: ทำไม Cart-Pole ใช้ supervised learning ไม่ได้ ทั้งที่ดูเหมือนแค่ “จำแนกซ้าย/ขวา”?</summary>
เพราะ <b>ไม่มี label ที่ถูกต้อง</b> ให้แต่ละก้าว — ไม่มีใครรู้ว่าก้าวนี้ซ้ายหรือขวาถึงจะดีที่สุด และผลของการตัดสินใจ <b>ปรากฏหลังจากนั้นหลายก้าว</b> (คานอาจล้มตอนก้าว 180 เพราะการตัดสินใจผิดตั้งแต่ก้าว 150) เราจึงมีแค่สัญญาณรางวัล +1 ต่อก้าวที่ยังไม่ล้ม</details>`
    },
    {
      id: 'loop', title: '2) องค์ประกอบ 6 อย่าง · วงจร Agent–Environment · 3 ความท้าทาย',
      html: `
<figure class="slide"><img src="img/L10_p08.jpg" alt="Agent-environment loop"><figcaption>สไลด์หน้า 8 · agent ส่ง action ไป environment ตอบกลับด้วย state ใหม่และรางวัล</figcaption></figure>
<p>ทุกปัญหา RL มีวงจรเดียวกัน: agent <b>มอง state</b> → <b>เลือก action</b> ตาม policy → environment เปลี่ยนไปเป็น <b>state ใหม่</b> และให้ <b>reward</b> → วนซ้ำจนจบตอน</p>
<div class="tblwrap"><table class="tbl">
<tr><th>องค์ประกอบ</th><th>ความหมาย</th><th>ใน Cart-Pole</th></tr>
<tr><td><b>Agent</b></td><td>ผู้ตัดสินใจ</td><td>รถเข็น + นโยบาย π(a|s)</td></tr>
<tr><td><b>Environment</b></td><td>ทุกอย่างนอก agent ที่ตอบสนองต่อ action</td><td>ราง + คาน + ฟิสิกส์ (มี P, R)</td></tr>
<tr><td><b>State sₜ</b></td><td>ข้อมูลที่ใช้ตัดสินใจ ณ เวลา t</td><td>(x, ẋ, θ, θ̇)</td></tr>
<tr><td><b>Action aₜ</b></td><td>สิ่งที่ agent เลือกทำ</td><td>ซ้าย (0) / ขวา (1)</td></tr>
<tr><td><b>Reward rₜ₊₁</b></td><td>ตัวเลขบอกความดีของผลลัพธ์</td><td>+1 ทุกก้าวที่คานยังไม่ตก</td></tr>
<tr><td><b>Policy π</b></td><td>กฎเลือก action จาก state (สิ่งที่ต้องเรียน)</td><td>สมการ logistic หรือ ตาราง Q</td></tr>
</table></div>
<div class="callout warn"><span class="lb">กับดัก</span>agent <b>ควบคุมได้เพียง action</b> — reward และการเปลี่ยน state เป็นของ environment ข้อสอบชอบถามว่า “agent ควบคุมอะไรได้”</div>
<h3>RL ในโลกจริง (หน้า 9)</h3>
<div class="grid2"><div class="card"><b>เกมและภาษา</b><br>หมากรุก โกะ โป๊กเกอร์ Dota 2 StarCraft · <b>RLHF</b> ในการสร้างโมเดลภาษา</div><div class="card"><b>หุ่นยนต์/ยานยนต์</b><br>แขนกล โดรน วางเส้นทาง หลีกเลี่ยงการชน</div><div class="card"><b>การแพทย์ การเงิน พลังงาน</b><br>แนะนำการรักษา ค้นหายา ซื้อขายอัตโนมัติ ควบคุมพลังงาน</div><div class="card"><b>ขนส่งและธุรกิจออนไลน์</b><br>สัญญาณไฟจราจร ระบบแนะนำ ตั้งราคาแบบไดนามิก ประมูลโฆษณา</div></div>
<h3>3 เรื่องที่ทำให้ RL ยาก (หน้า 10)</h3>
<div class="tblwrap"><table class="tbl">
<tr><th>ความท้าทาย</th><th>อธิบาย</th><th>แก้ด้วย (ในบทนี้)</th></tr>
<tr><td><b>Credit assignment</b></td><td>คานตกที่ก้าว 180 แต่ต้นเหตุอาจเป็นก้าว 150 — ก้าวไหนควรถูกตำหนิ?</td><td>Return และ Bellman</td></tr>
<tr><td><b>Exploration vs Exploitation</b></td><td>ใช้สิ่งที่รู้ว่าดี (exploit) หรือเสี่ยงลองสิ่งใหม่ที่อาจดีกว่า (explore)?</td><td>hill climbing, ε-greedy</td></tr>
<tr><td><b>Reward specification</b></td><td>agent หาค่าสูงสุดของ “รางวัลที่เราเขียน” ไม่ใช่ “สิ่งที่เราตั้งใจ”</td><td>การออกแบบรางวัล</td></tr>
</table></div>
<details class="reveal"><summary>ลองคิดก่อน: ร้านอาหารที่ชอบ vs ร้านใหม่ที่ยังไม่เคยลอง เป็นความท้าทายข้อไหน?</summary><b>Exploration vs Exploitation</b> — ไปร้านเดิม = exploit (ได้ของดีแน่นอน) ลองร้านใหม่ = explore (อาจเจอร้านที่ดีกว่า หรืออาจผิดหวัง) ถ้าไม่เคย explore เลยก็จะไม่มีวันรู้ว่ามีของที่ดีกว่า</details>`
    },
    {
      id: 'markov', title: '3) Markov Process → MDP',
      html: `
<p>ก่อนจะตัดสินใจได้ เราต้องเขียนปัญหาเป็นคณิตศาสตร์ก่อน เริ่มจากสิ่งที่ง่ายที่สุด: ระบบที่เปลี่ยน state เองแบบสุ่ม (ยังไม่มีใครตัดสินใจ)</p>
<div class="callout def"><span class="lb">นิยาม · สมบัติ Markov</span><span class="formula" style="display:block;margin:6px 0">P(sₜ₊₁ | sₜ) = P(sₜ₊₁ | s₁, s₂, …, sₜ)</span>อนาคตขึ้นกับ <b>ปัจจุบันเท่านั้น</b> — state ปัจจุบันเก็บข้อมูลจำเป็นครบแล้ว ไม่ต้องจำประวัติ · <b>Markov Process = ⟨S, P⟩</b></div>
<figure class="slide"><img src="img/L10_p12.jpg" alt="weather markov"><figcaption>สไลด์หน้า 12 · แผนภาพการเปลี่ยนสถานะของสภาพอากาศ</figcaption></figure>
<div class="tblwrap"><table class="tbl" style="max-width:420px">
<tr><th>วันนี้ \\ พรุ่งนี้</th><th>แดด</th><th>เมฆ</th><th>ฝน</th></tr>
<tr><td><b>แดด</b></td><td>0.7</td><td>0.2</td><td>0.1</td></tr>
<tr><td><b>เมฆ</b></td><td>0.3</td><td>0.4</td><td>0.3</td></tr>
<tr><td><b>ฝน</b></td><td>0.2</td><td>0.3</td><td>0.5</td></tr>
</table></div>
<h3>ตัวอย่างคำนวณ: วันนี้แดด โอกาสฝนตกใน <u>อีก 2 วัน</u>?</h3>
<ol class="steps">
<li>ฝนวันมะรืนต้องผ่าน “พรุ่งนี้” สักแบบ → แจกทุกเส้นทาง</li>
<li>แดด→แดด→ฝน = 0.7 × 0.1 = 0.07</li>
<li>แดด→เมฆ→ฝน = 0.2 × 0.3 = 0.06</li>
<li>แดด→ฝน→ฝน = 0.1 × 0.5 = 0.05</li>
<li>รวม = <b>0.18</b> = ช่อง (แดด, ฝน) ของ <b>P²</b></li>
</ol>
<div class="demo" id="l10-markov"><h4>🔧 เครื่องคิดเลข Markov n ขั้น</h4>
<p class="mut">แก้ไขเมทริกซ์ได้ (แต่ละแถวต้องรวม = 1) แล้วเลือก state เริ่มต้นและจำนวนวัน</p>
<div class="row"><label>แถวแดด <input type="text" id="mk-r0" value="0.7, 0.2, 0.1"></label></div>
<div class="row"><label>แถวเมฆ <input type="text" id="mk-r1" value="0.3, 0.4, 0.3"></label></div>
<div class="row"><label>แถวฝน <input type="text" id="mk-r2" value="0.2, 0.3, 0.5"></label></div>
<div class="row"><label>เริ่มที่ <select id="mk-s"><option value="0">แดด</option><option value="1">เมฆ</option><option value="2">ฝน</option></select></label>
<label>อีกกี่วัน n <input type="number" id="mk-n" value="2" min="1" max="30"></label>
<label>สนใจ state <select id="mk-t"><option value="0">แดด</option><option value="1">เมฆ</option><option value="2" selected>ฝน</option></select></label>
<button id="mk-go">คำนวณ</button></div><div class="out" id="mk-out"></div></div>
<h3>จาก MP สู่ MDP: เพิ่มทีละองค์ประกอบ (หน้า 13)</h3>
<figure class="slide"><img src="img/L10_p13.jpg" alt="MP to MDP"><figcaption>สไลด์หน้า 13 · Markov Process → Markov Reward Process → Markov Decision Process</figcaption></figure>
<div class="formula">MP  = ⟨S, P⟩                      เปลี่ยน state อย่างเดียว
MRP = ⟨S, P, R, γ⟩                 + รางวัล และ ปัจจัยลดทอน
MDP = ⟨S, A, P(s′|s,a), R(s,a), γ⟩   + การกระทำ → มีการตัดสินใจ</div>
<div class="callout ex"><span class="lb">ตัวอย่าง MDP (หน้า 13)</span>สถานะ s = แดดออก (ขายของอยู่ที่ตลาด) เลือกได้ 2 action · <b>a₁ ขายที่เดิม</b>: R(s,a₁) = +1,000 ฿, P(แดด/เมฆ/ฝน | s,a₁) = 0.7 / 0.2 / 0.1 · <b>a₂ ย้ายไปขายที่ชายหาด</b>: R(s,a₂) = +3,000 ฿ (ต้นไม้ในสไลด์เขียน +3,000 − 200 ฿ = สุทธิ 2,800 ฿ น่าจะหักค่าย้าย), P(แดด/เมฆ/ฝน | s,a₂) = 0.4 / 0.1 / 0.5 (แต่ละแถวรวม = 1) → state เดียวกันแต่ action ต่างกัน ให้ทั้งรางวัลและโอกาสเปลี่ยน state ต่างกัน จึงต้องเขียน <b>R(s,a)</b> และ <b>P(s′|s,a)</b> ไม่ใช่ R(s), P(s′|s) · a₂ ได้รางวัลทันทีสูงกว่าแต่เสี่ยงฝนมากกว่า (0.5) → ต้องชั่งรางวัลในอนาคตด้วย</div>
<p>เมื่อมี action คำถามเปลี่ยนจาก “state นี้ดีแค่ไหน” เป็น “<b>ควรทำอะไรใน state นี้</b>”</p>
<figure class="slide"><img src="img/L10_p14.jpg" alt="Cart-Pole MDP"><figcaption>สไลด์หน้า 14 · Cart-Pole ในรูป MDP</figcaption></figure>
<div class="tblwrap"><table class="tbl">
<tr><th>MDP</th><th>Cart-Pole (Gymnasium CartPole-v1)</th></tr>
<tr><td>S</td><td>(x, ẋ, θ, θ̇) ค่าต่อเนื่อง 4 ค่า เริ่มสุ่มใกล้ 0</td></tr>
<tr><td>A</td><td>0 = ดันซ้าย, 1 = ดันขวา (แรงคงที่ 10 N)</td></tr>
<tr><td>P</td><td>กฎฟิสิกส์ทีละ 0.02 วินาที — แน่นอน แต่ agent ไม่รู้สมการ</td></tr>
<tr><td>R</td><td>+1 ทุกก้าว (รวมก้าวที่คานล้ม)</td></tr>
<tr><td>γ</td><td>0.99 → รางวัลในอีก 100 ก้าวเหลือค่า 0.99¹⁰⁰ ≈ 37%</td></tr>
</table></div>
<details class="reveal"><summary>ลองคิดก่อน: ถ้า state มีแค่มุม θ จะยังเป็น Markov ไหม?</summary><b>ไม่</b> — รู้ว่าคานเอียงขวา 3° แต่ไม่รู้ว่า “กำลังล้มไปทางขวา” หรือ “กำลังเด้งกลับ” การตัดสินใจที่ดีต่างกันโดยสิ้นเชิง จึงต้องมีความเร็ว ẋ และ θ̇ ใน state ด้วย</details>
<div class="callout def"><span class="lb">terminated vs truncated</span><b>terminated</b> = จบจริง (|θ| &gt; 12° หรือ |x| &gt; 2.4) — ไม่มีอนาคตแล้ว · <b>truncated</b> = ถูกตัดเพราะครบ 500 ก้าว ทั้งที่คานยังตั้งอยู่ — อนาคตยังมี (เรื่องนี้สำคัญมากตอน Q-learning)</div>`
    },
    {
      id: 'return', title: '4) Return — รวมรางวัลในอนาคตแบบลดทอน',
      html: `
<p>agent ไม่ได้ต้องการรางวัลก้าวเดียว แต่ต้องการ <b>รางวัลรวมทั้งอนาคต</b> แต่รางวัลที่อยู่ไกลก็ควรมีค่าน้อยกว่า (เหมือนเงิน 100 บาทวันนี้มีค่ากว่า 100 บาทปีหน้า) จึงคูณด้วย γ ทุกก้าวที่ห่างออกไป</p>
<div class="formula">Gₜ = rₜ₊₁ + γ·rₜ₊₂ + γ²·rₜ₊₃ + γ³·rₜ₊₄ + …
   = rₜ₊₁ + γ·Gₜ₊₁</div>
<figure class="slide"><img src="img/L10_p15.jpg" alt="Return"><figcaption>สไลด์หน้า 15 · Discounted Return และตัวอย่างคำนวณมือ</figcaption></figure>
<div class="tblwrap"><table class="tbl">
<tr><th>γ</th><th>ผล</th></tr>
<tr><td>γ = 0</td><td>สนใจแค่รางวัลก้าวถัดไป → ทุก state ของ Cart-Pole มี Return = 1 เท่ากัน แยกไม่ออกว่าใกล้ล้มหรือไม่</td></tr>
<tr><td>γ = 1</td><td>ไม่ลดทอน → Return = จำนวนก้าวที่ทรงได้ = “คะแนนรายตอน” ในตำรา</td></tr>
<tr><td>0 &lt; γ &lt; 1</td><td>ทรงได้ตลอดก็ยังมีค่าจำกัด: Return ≤ 1/(1−γ) → γ = 0.99 ได้สูงสุด 100</td></tr>
</table></div>
<h3>คำนวณมือ (หน้า 15): คานล้มหลังก้าวที่ 3, r = +1, +1, +1, γ = 0.9</h3>
<ol class="steps">
<li>เริ่มจาก <b>ท้ายสุด</b>: หลังล้มไม่มีรางวัล G₃ = 0</li>
<li>G₂ = r₃ + γG₃ = 1 + 0.9×0 = <b>1.00</b></li>
<li>G₁ = 1 + 0.9×1.00 = <b>1.90</b></li>
<li>G₀ = 1 + 0.9×1.90 = <b>2.71</b></li>
</ol>
<div class="callout key"><span class="lb">เทคนิค</span>ไล่ <b>ย้อนจากท้ายมาหน้า</b> ด้วย G = r + γG′ เร็วและไม่พลาด · ยิ่งทรงได้นาน Return ยิ่งสูง (1.0 → 1.9 → 2.71) — ตัวเลขชุดนี้จะกลับมาเป็นค่า Q* ใน Q-learning</div>
<div class="demo" id="l10-ret"><h4>🔧 เครื่องคิดเลข Return (ไล่ย้อนหลัง)</h4>
<div class="row"><label>รางวัล r₁, r₂, … <input type="text" id="rt-r" value="1, 1, 1" style="width:260px"></label><label>γ <input type="number" id="rt-g" value="0.9" step="0.05" min="0" max="1"></label><button id="rt-go">คำนวณ</button></div>
<div class="out" id="rt-out"></div></div>
<details class="reveal"><summary>ลองคิดก่อน: r = 1, 1, 1, 1 (ล้มหลังก้าว 4), γ = 0.5 → G₀ = ?</summary>G₃ = 1, G₂ = 1 + 0.5·1 = 1.5, G₁ = 1 + 0.5·1.5 = 1.75, G₀ = 1 + 0.5·1.75 = <b>1.875</b> (ลองใส่ในเครื่องคิดเลขด้านบนเพื่อตรวจ)</details>`
    },
    {
      id: 'policy', title: '5) Policy เป็นสมการ + Hill climbing (Policy search)',
      html: `
<p>วิธีแรกในการแก้ Cart-Pole (ตามตำรา): เขียนนโยบายเป็นสมการที่มีพารามิเตอร์ แล้ว “ลองผิดลองถูกกับพารามิเตอร์” ทีละตอน</p>
<div class="formula">yᵢ = σ( w₀ + w₁xᵢ + w₂ẋᵢ + w₃θᵢ + w₄θ̇ᵢ ),   σ(z) = 1 / (1 + e⁻ᶻ)
ถ้า yᵢ &gt; 0.5 → เลื่อนขวา   มิฉะนั้น → เลื่อนซ้าย</div>
<div class="callout def"><span class="lb">นิยาม</span><b>Policy model (logistic)</b> — นโยบายที่มีพารามิเตอร์ <b>5 ตัว</b> (w₀…w₄) · รูปเดียวกับ logistic regression แต่ <b>ไม่มี label</b> บอกว่าก้าวไหนถูก จึงฝึกด้วย cross-entropy ไม่ได้</div>
<h3>คำนวณมือ (หน้า 18): w = (0, 0.1, 0.5, 10, 2)</h3>
<div class="tblwrap"><table class="tbl">
<tr><th>state (x, ẋ, θ, θ̇)</th><th>z = w₀+w₁x+w₂ẋ+w₃θ+w₄θ̇</th><th>y = σ(z)</th><th>action</th></tr>
<tr><td>(0.02, 0.10, 0.05, −0.20)</td><td>0.002 + 0.05 + 0.5 − 0.4 = 0.152</td><td>0.538</td><td><b>ขวา</b></td></tr>
<tr><td>(0.02, 0.10, 0.01, −0.20)</td><td>0.002 + 0.05 + 0.1 − 0.4 = −0.248</td><td>0.438</td><td><b>ซ้าย</b></td></tr>
</table></div>
<p>แถวแรก: คานเอียงขวามาก (w₃θ = 0.5) ชนะแรงหมุนกลับ (w₄θ̇ = −0.4) → เลื่อนรถไป “รับ” ทางขวา · แถวสอง: เอียงน้อยลง แต่คานกำลังหมุนกลับซ้าย → เลื่อนซ้ายไม่ให้เลยจุดสมดุล · w ชุดนี้ทรงได้ครบ 500 ก้าวทุก seed ขณะที่ดูแค่ θ (w = (0,0,0,10,0)) ทรงได้เฉลี่ยแค่ 41 ก้าว</p>
<div class="demo" id="l10-pol"><h4>🔧 เครื่องคิดเลข Logistic Policy</h4>
<div class="row"><label>w₀ <input type="number" id="pl-w0" value="0" step="0.1"></label><label>w₁ <input type="number" id="pl-w1" value="0.1" step="0.1"></label><label>w₂ <input type="number" id="pl-w2" value="0.5" step="0.1"></label><label>w₃ <input type="number" id="pl-w3" value="10" step="0.5"></label><label>w₄ <input type="number" id="pl-w4" value="2" step="0.5"></label></div>
<div class="row"><label>x <input type="number" id="pl-x" value="0.02" step="0.01"></label><label>ẋ <input type="number" id="pl-xd" value="0.10" step="0.01"></label><label>θ <input type="number" id="pl-t" value="0.05" step="0.01"></label><label>θ̇ <input type="number" id="pl-td" value="-0.20" step="0.01"></label><button id="pl-go">คำนวณ</button></div>
<div class="out" id="pl-out"></div></div>
<h3>หนึ่งตอน (Episode) ตามรูป 7.2 ในตำรา (หน้า 19)</h3>
<figure class="slide"><img src="img/L10_p19.jpg" alt="episode loop"><figcaption>สไลด์หน้า 19 · ทำนาย → กระทำ → รับรางวัล → จบตอน → ปรับน้ำหนัก</figcaption></figure>
<h3>Hill climbing: ลองผิดลองถูกกับ w (หน้า 20)</h3>
<div class="formula">w_best = np.zeros(5)            # เริ่ม: y = 0.5 ทุก state
best = score(w_best)              # คะแนนเฉลี่ย 5 episodes
for it in range(150):
    w_new = w_best + rng.normal(0, 0.5, 5)   # สุ่มขยับ
    s = score(w_new)
    if s &gt;= best:                 # ไม่แย่ลง → เก็บไว้
        w_best, best = w_new, s</div>
<figure class="slide"><img src="img/L10_p20.jpg" alt="hill climbing"><figcaption>สไลด์หน้า 20 · seed 42 ถึง 500 ก้าวที่รอบ 84 · seed อื่น 10 จาก 20 ถึง 500 ภายใน 150 รอบ ที่เหลือติด local optimum</figcaption></figure>
<div class="callout def"><span class="lb">นิยาม</span><b>Policy search</b> = ปรับพารามิเตอร์ของนโยบาย <b>โดยตรง</b> จากคะแนนรายตอน · <b>Hill climbing</b> = สุ่มขยับ w ถ้าคะแนนไม่แย่ลงก็เก็บ → <b>ไม่มี label ไม่มี gradient</b> ใช้แค่คะแนนรวมของตอน</div>
<div class="callout warn"><span class="lb">ข้อจำกัด</span>อาจ <b>ติด local optimum</b> (ยอดเขาเตี้ยที่ขยับรอบ ๆ แล้วไม่ดีขึ้น) และต้องเล่นทั้งตอนก่อนปรับหนึ่งครั้ง</div>
<h3>สองเส้นทางของ RL (หน้า 21)</h3>
<div class="tblwrap"><table class="tbl">
<tr><th>แนวทาง</th><th>หลักการ</th><th>ตัวอย่าง</th><th>ข้อดี</th><th>ข้อเสีย</th></tr>
<tr><td><b>Value-based</b></td><td>เรียน Q แล้วเลือก argmax</td><td>Q-learning, DQN</td><td>เรียนได้ทุกก้าว ไม่ต้องรอจบตอน</td><td>action ต้องนับได้</td></tr>
<tr><td><b>Policy-based</b></td><td>ปรับพารามิเตอร์ของ π จาก Return</td><td>hill climbing, REINFORCE</td><td>action ต่อเนื่องได้ นโยบายเล็ก</td><td>ใช้ทั้งตอนต่อการปรับ 1 ครั้ง</td></tr>
<tr><td><b>Actor-Critic</b></td><td>π (actor) + V หรือ Q (critic)</td><td>PPO, SAC</td><td>ต่อเนื่อง + เสถียร (หุ่นยนต์จริง)</td><td>ต้องใช้หลักล้านก้าว</td></tr>
</table></div>
<p>Cart-Pole: logistic 5 น้ำหนัก vs DQN ≈ 17,000 น้ำหนัก → <b>ทั้งคู่ทรงได้ 500 ก้าว</b></p>`
    },
    {
      id: 'qlearn', title: '6) Q-learning: เรียนค่าของการกระทำทีละก้าว',
      html: `
<p>เปลี่ยนมุมมอง: แทนที่จะหา w ของนโยบาย ให้หา “<b>ค่าของการกระทำแต่ละแบบในแต่ละ state</b>” Q(s, a) = Return ที่คาดว่าจะได้ ถ้าอยู่ที่ s ทำ a แล้วเล่นดีที่สุดต่อจากนั้น — เมื่อรู้ Q แล้ว นโยบายก็ง่าย: เลือก action ที่ Q สูงสุด</p>
<p>เปรียบเหมือนแอปนำทางที่ประมาณเวลาถึงที่หมาย: ทุกครั้งที่ขับผ่านแยกหนึ่ง มันรู้เวลาจริงของช่วงนั้น + ใช้ค่าประมาณที่เหลือจากแยกถัดไป แล้ว <b>ปรับค่าประมาณเดิมเข้าหา</b> — ไม่ต้องรอถึงปลายทางก่อน นี่คือ Temporal-Difference (TD)</p>
<figure class="slide"><img src="img/L10_p23.jpg" alt="TD update"><figcaption>สไลด์หน้า 23 · Q-learning update</figcaption></figure>
<div class="formula">Q(s,a) ← Q(s,a) + α [ r + γ·maxₐ′ Q(s′,a′) − Q(s,a) ]
                     └──── TD target ────┘
                    └──────────── TD error ────────────┘</div>
<div class="tblwrap"><table class="tbl">
<tr><th>ส่วน</th><th>ความหมาย</th></tr>
<tr><td>TD target = r + γ·maxₐ′Q(s′,a′)</td><td>ค่าประมาณใหม่ = รางวัลจริง 1 ก้าว + ค่าที่ประมาณไว้ของ state ถัดไป (<b>bootstrap</b>)</td></tr>
<tr><td>TD error = target − Q(s,a)</td><td>เป้าต่างจากที่เคยเชื่อแค่ไหน — เป็น 0 แปลว่าเรียนเสร็จที่จุดนี้</td></tr>
<tr><td>α (learning rate)</td><td>ขนาดก้าว: α = 0 ไม่เรียนเลย · α = 1 ทิ้งค่าเดิม เอา target ทั้งหมด</td></tr>
<tr><td>s′ เป็น terminal</td><td>คานล้มแล้วไม่มีอนาคต → target = r เท่านั้น (ถ้าลืม state ใกล้ล้มจะดูดีเกินจริง)</td></tr>
</table></div>
<div class="callout def"><span class="lb">นิยาม</span>Q-learning เป็น <b>model-free</b> (ไม่ต้องรู้ P, R) · <b>off-policy</b> (เก็บข้อมูลด้วย ε-greedy แต่ target ใช้ max ซึ่งเป็น greedy → เรียนนโยบายที่ดีที่สุดขณะยังสำรวจ) · <b>TD control</b> (อัปเดตทุกก้าว ไม่ต้องรอจบตอน)</div>
<h3>ตัวอย่างคำนวณทีละขั้น</h3>
<ol class="steps">
<li>สมมติ Q(s,a) = 0.5, ได้ r = 1, γ = 0.9, maxₐ′Q(s′,a′) = 2.0, α = 0.5</li>
<li>TD target = 1 + 0.9 × 2.0 = 2.8</li>
<li>TD error = 2.8 − 0.5 = 2.3</li>
<li>Q ใหม่ = 0.5 + 0.5 × 2.3 = <b>1.65</b></li>
<li>ถ้า s′ เป็น terminal: target = 1 → error = 0.5 → Q ใหม่ = <b>0.75</b></li>
</ol>
<div class="demo" id="l10-q"><h4>🔧 เครื่องคิดเลข Q-learning 1 ก้าว</h4>
<div class="row"><label>Q(s,a) <input type="number" id="q-q" value="0.5" step="0.1"></label><label>r <input type="number" id="q-r" value="1" step="0.5"></label><label>γ <input type="number" id="q-g" value="0.9" step="0.05"></label><label>maxQ(s′,·) <input type="number" id="q-m" value="2.0" step="0.1"></label><label>α <input type="number" id="q-a" value="0.5" step="0.05"></label><label><input type="checkbox" id="q-term"> s′ เป็น terminal</label><button id="q-go">คำนวณ</button></div>
<div class="out" id="q-out"></div></div>
<h3>ทำ Cart-Pole ให้เป็นตาราง (หน้า 24)</h3>
<figure class="slide"><img src="img/L10_p24.jpg" alt="discretize"><figcaption>สไลด์หน้า 24 · แบ่ง θ เป็น 6 ช่อง θ̇ เป็น 12 ช่อง = 72 แถวของตาราง Q</figcaption></figure>
<p>Q-learning แบบตารางต้องการ state ที่นับได้ จึง <b>discretize</b>: BINS = (1, 1, 6, 12) → ตัด x, ẋ ทิ้ง · θ ∈ ±0.21 rad แบ่ง 6 ช่อง · θ̇ ∈ ±2 rad/s แบ่ง 12 ช่อง → <b>72 states × 2 actions = 144 ช่อง</b> · หยาบไป = state ต่างกันถูกรวม · ละเอียดไป = ค้นหาไม่ทั่ว</p>
<h3>ε-greedy: สมดุลระหว่างสำรวจและใช้ความรู้ (หน้า 25)</h3>
<div class="formula">ถ้า random() &lt; ε  → Explore: สุ่ม action ใดก็ได้
มิฉะนั้น           → Exploit: argmax Q(s, ·)  (เสมอกันให้สุ่มตัดสิน)
P(เลือก action ที่ดีที่สุด) = (1 − ε) + ε / |A|</div>
<figure class="slide"><img src="img/L10_p25.jpg" alt="epsilon schedule"><figcaption>สไลด์หน้า 25 · ลด ε จาก 1.0 ถึง 0.05 แบบเส้นตรงใน 70% แรกของ 1,000 ตอน</figcaption></figure>
<div class="demo" id="l10-eps"><h4>🔧 ε-greedy: ความน่าจะเป็น + จำลอง 1,000 ครั้ง</h4>
<div class="row"><label>ε <input type="range" id="ep-e" min="0" max="1" step="0.01" value="0.1"> <b id="ep-ev">0.10</b></label><label>จำนวน action |A| <input type="number" id="ep-n" value="2" min="2" max="10"></label><button id="ep-go">สุ่ม 1,000 ครั้ง</button></div>
<div class="out" id="ep-out"></div></div>
<h3>อัลกอริทึมเต็ม (หน้า 26)</h3>
<div class="formula">Q = np.zeros((72, 2))
for ep in range(episodes):
    eps = schedule(ep)
    obs, _ = env.reset(seed=seed + ep)
    s, done = discretize(obs), False
    while not done:
        a = epsilon_greedy(Q[s], eps, rng)
        obs, r, terminated, truncated, _ = env.step(a)
        s2 = discretize(obs)
        future = 0.0 if terminated else Q[s2].max()
        Q[s, a] += alpha * (r + gamma * future - Q[s, a])
        s = s2
        done = terminated or truncated</div>
<div class="callout key"><span class="lb">จุดสำคัญในโค้ด</span>① <code>future = 0.0 if terminated</code> → ล้มจริงไม่ bootstrap · ② <code>done = terminated or truncated</code> แต่ truncated (ครบ 500) ยังใช้ maxQ เพราะอนาคตยังมี · ③ ลู่เข้าสู่ Q* ถ้าทุกคู่ (s, a) ถูกเยี่ยมบ่อยไม่สิ้นสุด และ α ลดลงเหมาะสม (Watkins &amp; Dayan, 1992)</div>
<h3>เห็นภาพ Q-learning: Grid World</h3>
<p>Cart-Pole มองยาก ลองดู Q-learning บนตาราง 4×4: เริ่มมุมซ้ายล่าง (S) เป้าหมาย 🏁 ได้ +1 หลุม ☠ ได้ −1 ช่องทึบคือกำแพง ทุกก้าวได้รางวัลเล็ก ๆ (ปรับได้) กด “ฝึก” แล้วดูค่า maxQ (สี) และลูกศรนโยบาย greedy ค่อย ๆ ก่อตัว — สังเกตว่าค่าจะ “ไหลย้อน” จากเป้าหมายกลับมาหาจุดเริ่มต้น (credit assignment ผ่าน bootstrap)</p>
<div class="demo" id="l10-grid"><h4>🔧 Q-learning บน Grid World 4×4</h4>
<div class="row"><label>α <input type="number" id="gw-a" value="0.5" step="0.1" min="0" max="1"></label><label>γ <input type="number" id="gw-g" value="0.9" step="0.05" min="0" max="1"></label><label>ε <input type="number" id="gw-e" value="0.2" step="0.05" min="0" max="1"></label><label>รางวัลต่อก้าว <input type="number" id="gw-r" value="-0.04" step="0.01"></label></div>
<div class="row"><button id="gw-1">ฝึก 1 ตอน</button><button id="gw-50">ฝึก 50 ตอน</button><button id="gw-500">ฝึก 500 ตอน</button><button class="ghost" id="gw-reset">รีเซ็ต</button></div>
<canvas id="gw-cv" width="440" height="440"></canvas><div class="out" id="gw-out"></div></div>
<details class="reveal"><summary>ลองคิดก่อน: ถ้าตั้งรางวัลต่อก้าวเป็น −1 (ลงโทษหนัก) นโยบายจะเปลี่ยนอย่างไร?</summary>agent จะอยากจบตอนให้เร็วที่สุด บาง state จะยอม <b>เดินลงหลุม (−1)</b> แทนที่จะเดินอ้อมไปเป้าหมาย เพราะการเดินหลายก้าวโดนลงโทษสะสมมากกว่า — ลองใส่ −1 (γ = 0.9) แล้วฝึก 500 ตอนดู: ช่องใต้หลุม (แถว 3 คอลัมน์ขวาสุด) จะชี้ ↑ ลงหลุม เพราะ −1 ทันทีดีกว่าเดินอ้อม 3 ก้าว (−1×2.71 + 0.9³ ≈ −1.98) และช่องล่างสุดขวาก็มักจะชี้ ↑ ตามไปด้วย (ถ้าใส่แค่ −0.5 agent จะเลือกทางที่สั้นที่สุดแต่ยังหลบหลุม: เดินอ้อมได้ −0.5×2.71 + 0.729 ≈ −0.63 ซึ่งดีกว่า −1; หลุมจะคุ้มกว่าก็ต่อเมื่อรางวัลต่อก้าว &lt; ≈ −0.64) นี่คือปัญหาเดียวกับ “−1 ทุกก้าว ทำให้ Cart-Pole รีบล้ม” ในส่วน reward design</details>`
    },
    {
      id: 'dqn', title: '7) DQN: เมื่อตารางใหญ่เกินไป',
      html: `
<div class="tblwrap"><table class="tbl">
<tr><th>ปัญหา</th><th>จำนวน state</th><th>ขนาดตาราง Q</th><th>ใช้ตารางได้?</th></tr>
<tr><td>Cart-Pole 6×12 (แล็บ)</td><td>72</td><td>144</td><td>ได้ (แต่ไม่เสถียร)</td></tr>
<tr><td>Cart-Pole 10 ช่องต่อมิติ</td><td>10⁴</td><td>20,000</td><td>พอได้ (ช้า)</td></tr>
<tr><td>Cart-Pole 100 ช่องต่อมิติ</td><td>10⁸</td><td>2 × 10⁸</td><td>ไม่ได้</td></tr>
<tr><td>Atari 84×84 ระดับเทา</td><td>256⁷⁰⁵⁶ ภาพ</td><td>เกินจำนวนอะตอมในเอกภพ</td><td>ไม่ได้</td></tr>
<tr><td>หุ่นยนต์ Ant</td><td>27 ค่าต่อเนื่อง + action 8 มิติต่อเนื่อง</td><td>ไม่มีขอบเขต</td><td>ไม่ได้</td></tr>
</table></div>
<p>ปัญหาของตาราง: ① <b>หน่วยความจำ</b> เก็บไม่ไหว ② <b>ข้อมูล</b> state ส่วนใหญ่ไม่เคยถูกเยี่ยม ③ <b>Generalization</b> เรียนจาก state หนึ่งไม่ช่วย state ที่คล้ายกัน → ต้องการฟังก์ชันที่ให้ค่าใกล้กันแก่ state ที่คล้ายกัน = <b>function approximation</b></p>
<figure class="slide"><img src="img/L10_p29.jpg" alt="DQN"><figcaption>สไลด์หน้า 29 · Q(s, a; θ): state 4 ค่า → hidden 128×128 (ReLU) → Q ของแต่ละ action</figcaption></figure>
<div class="callout def"><span class="lb">นิยาม</span><b>Deep Q-Network (DQN)</b> = แทนตาราง Q ด้วยโครงข่ายประสาท Q(s, a; θ) · output 1 ช่องต่อ 1 action → forward ครั้งเดียวได้ Q ทุก action แล้ว argmax · state ที่คล้ายกันได้ค่าใกล้กัน (generalize) · ข้อจำกัด: action ต้องนับได้และมีไม่มาก · Cart-Pole: น้ำหนัก ≈ 17,000 ตัว (4·128+128 + 128·128+128 + 128·2+2 = 17,410) แทนตาราง 20,000 ช่อง</div>
<h3>ทำไม DQN แบบตรงไปตรงมาจึงพัง (หน้า 30)</h3>
<div class="formula">L(θ) = ( r + γ·maxₐ′ Q(s′,a′; θ)  −  Q(s,a; θ) )²
         └──── TD target ใช้ θ ────┘    └ prediction ┘</div>
<ol class="steps">
<li><b>เป้าวิ่งหนี (moving target)</b>: target คำนวณด้วย θ ตัวเดียวกับที่กำลังปรับ ปรับ θ ทีไรเป้าก็ขยับตาม</li>
<li><b>ข้อมูลสัมพันธ์กัน</b>: ก้าวติดกันแทบเหมือนกัน (ไม่ i.i.d.) gradient descent ชอบข้อมูลที่สุ่มกระจาย</li>
</ol>
<figure class="slide"><img src="img/L10_p31.jpg" alt="Replay and target"><figcaption>สไลด์หน้า 31 · Experience Replay และ Target Network</figcaption></figure>
<div class="grid2"><div class="callout def"><span class="lb">① Experience Replay</span>เก็บ (s, a, r, s′, done) ทุกก้าวลง buffer 50,000 ตัว → สุ่ม minibatch 64 ตัว → gradient step · ลดความสัมพันธ์ของข้อมูล และใช้ประสบการณ์ซ้ำได้หลายครั้ง</div>
<div class="callout def"><span class="lb">② Target Network</span>y = r + γ(1 − done)·maxₐ′ Q(s′,a′; θ⁻) · θ⁻ = สำเนา θ ที่แช่ไว้ · คัดลอกทุก C ก้าว (ต้นฉบับ) หรือ soft update θ⁻ ← 0.005θ + 0.995θ⁻ ทุกก้าว → เป้านิ่งพอให้ไล่ตามได้</div></div>
<div class="formula">with torch.no_grad():
    y = r + gamma * (1 - done) * target_net(s2).max(1).values   # θ⁻ : frozen
loss = F.smooth_l1_loss(q_net(s).gather(1, a[:, None]).squeeze(1), y)</div>
<div class="callout key"><span class="lb">จำ</span><b>DQN = Q-network + Replay + Target</b> · (1 − done) คือเงื่อนไข terminated เดียวกับ Q-learning ตาราง · สองเทคนิค <b>ไม่ได้ทำให้เร็วขึ้น แต่ทำให้ไม่พัง</b></div>
<details class="reveal"><summary>ลองคิดก่อน: ทำไม DQN ไม่เหมาะกับการควบคุมแขนหุ่นยนต์ที่ action เป็นแรงบิดต่อเนื่อง 8 มิติ?</summary>DQN ต้องมี output หนึ่งช่องต่อ action แล้วหา argmax — action ต่อเนื่องมีค่าได้ไม่จำกัด จึงทำ argmax ตรง ๆ ไม่ได้ ต้องใช้วิธี actor-critic เช่น PPO หรือ SAC ที่ให้ actor ทำนาย action ต่อเนื่องโดยตรง</details>`
    },
    {
      id: 'reward', title: '8) Reward design: บอกงานให้ถูก',
      html: `
<p>agent ที่เก่งที่สุดจะหาค่าสูงสุดของรางวัล <b>ที่เราเขียน</b> — ถ้าเขียนผิด มันจะทำสิ่งที่ผิดได้อย่างยอดเยี่ยม เรียกว่า <b>reward hacking / specification gaming</b></p>
<figure class="slide"><img src="img/L10_p33.jpg" alt="reward table"><figcaption>สไลด์หน้า 33 · Return (γ = 0.99) ของรางวัล 4 แบบ</figcaption></figure>
<div class="tblwrap"><table class="tbl">
<tr><th>รางวัล</th><th>ทรงครบ 500</th><th>ล้มที่ก้าว 10</th><th>agent เลือก</th></tr>
<tr><td>+1 ทุกก้าว (ค่าเริ่มต้น)</td><td>+99.3</td><td>+9.6</td><td>ทรงตัว</td></tr>
<tr><td>+1 ทุกก้าว, −100 เมื่อล้ม</td><td>+99.3</td><td>−81.8</td><td>ทรงตัว</td></tr>
<tr><td>0 ทุกก้าว, −1 เมื่อล้ม</td><td>0.0</td><td>−0.91</td><td>ทรงตัว (แต่ไม่มีเบาะแสระหว่างทาง)</td></tr>
<tr><td>−1 ทุกก้าว</td><td>−99.3</td><td>−9.6</td><td><b>รีบล้ม!</b></td></tr>
</table></div>
<div class="callout warn"><span class="lb">กับดัก</span>−1 ต่อก้าวทำให้ “ล้มเร็ว” (−9.6) ดีกว่า “ทรงตัวสำเร็จ” (−99.3) — <b>agent ไม่ได้ผิด รางวัลต่างหากที่ผิด</b></div>
<div class="demo" id="l10-rew"><h4>🔧 ทดลองออกแบบรางวัล Cart-Pole</h4>
<div class="row"><label>รางวัลต่อก้าว <input type="number" id="rw-r" value="1" step="0.5"></label><label>โทษตอนล้ม <input type="number" id="rw-p" value="0" step="10"></label><label>γ <input type="number" id="rw-g" value="0.99" step="0.01" min="0" max="1"></label><label>ล้มที่ก้าว k <input type="number" id="rw-k" value="10" min="1" max="499"></label><button id="rw-go">เปรียบเทียบ</button></div>
<div class="out" id="rw-out"></div></div>
<ol class="steps">
<li><b>รางวัลบวก (alive bonus)</b> ดึง agent ไปหาพฤติกรรมที่ต้องการ — Cart-Pole คือ “อยู่ให้นาน”</li>
<li><b>บทลงโทษ</b> ผลักออกจากสิ่งที่ไม่ต้องการ — แต่ถ้าลงโทษทุกก้าว การจบตอนเร็วที่สุดคือคำตอบที่ดีที่สุด</li>
<li><b>+1 ทรงได้ แต่รถไหล</b> — รางวัลไม่ได้พูดถึงตำแหน่งรถ จึงต้องมีองค์ประกอบเพิ่ม (shaped reward)</li>
<li><b>ทดสอบรางวัลกับนโยบายที่รู้คำตอบก่อนฝึก</b> และวัดผลด้วยตัวชี้วัดของงานจริง</li>
</ol>`
    },
    {
      id: 'summary', title: '9) สรุป 5 ข้อ · Lab · เชื่อมไปบทถัดไป',
      html: `
<div class="tblwrap"><table class="tbl">
<tr><th>Lab ส่วน</th><th>TODO</th><th>ผลลัพธ์ที่ CHECK</th></tr>
<tr><td>1 สำรวจ + Return</td><td>1–2</td><td>สุ่มได้ ~25 ก้าว · G = 2.71</td></tr>
<tr><td>2 นโยบาย logistic</td><td>3–4</td><td>0.538 → ขวา · w ตัวอย่าง = 500 ก้าว</td></tr>
<tr><td>3 Hill climbing</td><td>5</td><td>ถึง 500 ก้าวในรอบที่ 84</td></tr>
<tr><td>4 Q-learning</td><td>6–8</td><td>72 ช่อง · 0.975 (= P(best) ที่ ε = 0.05) · held-out ≥ 100</td></tr>
<tr><td>5 ออกแบบรางวัล</td><td>9</td><td>DEFAULT vs −1 vs SHAPED</td></tr>
</table></div>
<div class="callout key"><span class="lb">ห้าข้อที่ต้องจำ (หน้า 35)</span><ol style="margin:4px 0 0">
<li><b>MDP = ⟨S, A, P, R, γ⟩</b> — เขียนปัญหาเป็น MDP ก่อนเลือกอัลกอริทึม · state ต้องมี ẋ และ θ̇ จึงเป็น Markov</li>
<li><b>นโยบายคือสมการ</b> ปรับได้จากคะแนนรายตอน: y = σ(w·s) + hill climbing ไม่ต้องมี label</li>
<li><b>Bellman + Q-learning</b>: วันนี้ = รางวัล + γ × พรุ่งนี้ · ε-greedy · ไม่ bootstrap หลัง terminal</li>
<li><b>DQN = Q-network + Replay + Target</b> — ไม่ได้ทำให้เร็วขึ้น แต่ทำให้ไม่พัง</li>
<li><b>รางวัลคือนิยามของงาน</b> — +1 ทรงได้แต่รถไหล · −1 ต่อก้าวรีบล้ม</li></ol></div>
<div class="tblwrap"><table class="tbl">
<tr><th>แนวคิด RL</th><th>Cart-Pole</th><th>RLHF / Reasoning model (L12–L13)</th></tr>
<tr><td>policy</td><td>σ(w·s) หรือ Q-network</td><td>LLM</td></tr>
<tr><td>action</td><td>ซ้าย/ขวา</td><td>token ถัดไป</td></tr>
<tr><td>episode</td><td>จนคานล้มหรือครบ 500</td><td>คำตอบหนึ่งชุด</td></tr>
<tr><td>reward</td><td>+1 ต่อก้าว</td><td>reward model r(x, y) หรือ 1 ถ้าคำตอบตรวจผ่าน</td></tr>
</table></div>
<p>ต่อจากนี้: <b>PPO / SAC</b> สำหรับ action ต่อเนื่อง · <b>RLHF</b> ในโมเดลภาษา · <b>Domain randomization</b> สำหรับ sim-to-real</p>`
    }
  ],
  quiz: [
    { q: 'ข้อใดอธิบาย feedback ของ Reinforcement Learning ได้ถูกต้องที่สุด', c: ['บอกคำตอบที่ถูกทุกก้าว', 'ไม่มี feedback ใด ๆ', 'เป็นรางวัลที่มาทีหลัง และไม่บอกว่าก้าวไหนถูก', 'เป็นระยะห่างระหว่างจุดข้อมูล'], a: 2, e: 'RL ได้ reward เป็นตัวเลข ไม่ใช่ label ที่บอกว่าก้าวไหนถูก (สไลด์หน้า 5)' },
    { q: 'MDP ประกอบด้วยองค์ประกอบใด', c: ['⟨S, P⟩', '⟨S, P, R, γ⟩', '⟨S, A, P, R, γ⟩', '⟨X, y, w, b⟩'], a: 2, e: 'MDP = ⟨S, A, P(s′|s,a), R(s,a), γ⟩ · ⟨S,P⟩ คือ Markov Process และ ⟨S,P,R,γ⟩ คือ MRP' },
    { q: 'จากเมทริกซ์อากาศในสไลด์ (แดด→แดด 0.7, แดด→เมฆ 0.2, แดด→ฝน 0.1, เมฆ→ฝน 0.3, ฝน→ฝน 0.5) วันนี้แดด โอกาสฝนในอีก 2 วันเท่ากับเท่าใด', c: ['0.10', '0.15', '0.18', '0.50'], a: 2, e: '0.7×0.1 + 0.2×0.3 + 0.1×0.5 = 0.07 + 0.06 + 0.05 = 0.18' },
    { q: 'ทำไม state ของ Cart-Pole ต้องมีความเร็ว ẋ และ θ̇', c: ['เพื่อให้ตารางเล็กลง', 'เพื่อให้เป็น Markov — รู้ว่ากำลังล้มหรือกำลังกลับ', 'เพราะ reward ขึ้นกับความเร็ว', 'เพื่อให้คำนวณ γ ได้'], a: 1, e: 'θ อย่างเดียวไม่บอกทิศการเคลื่อนที่ จึงไม่เป็น Markov (หน้า 14)' },
    { q: 'คานล้มหลังก้าวที่ 3 รางวัล +1, +1, +1 และ γ = 0.9 ค่า G₀ เท่ากับเท่าใด', c: ['3.00', '2.71', '2.43', '1.90'], a: 1, e: 'G₂ = 1, G₁ = 1 + 0.9·1 = 1.9, G₀ = 1 + 0.9·1.9 = 2.71' },
    { q: 'ถ้า γ = 0.99 และได้ +1 ทุกก้าวไปเรื่อย ๆ Return สูงสุดเข้าใกล้ค่าใด', c: ['1', '99', '100', 'อนันต์'], a: 2, e: 'Return ≤ 1/(1−γ) = 1/0.01 = 100' },
    { q: 'logistic policy w = (0, 0.1, 0.5, 10, 2) state (0.02, 0.10, 0.05, −0.20) ได้ y = σ(0.152) ≈ 0.538 จะเลือก action ใด', c: ['ซ้าย', 'ขวา', 'อยู่นิ่ง', 'สุ่ม'], a: 1, e: 'y > 0.5 → เลื่อนขวา (หน้า 18)' },
    { q: 'Hill climbing ในบทนี้ใช้ข้อมูลอะไรในการปรับ w', c: ['gradient ของ cross-entropy', 'label ซ้าย/ขวาที่ถูก', 'คะแนนรวมรายตอน', 'ค่า TD error ทุกก้าว'], a: 2, e: 'policy search แบบ hill climbing ไม่มี label ไม่มี gradient ใช้แค่คะแนนรวมของตอน (หน้า 20)' },
    { q: 'Q(s,a) = 0.5, r = 1, γ = 0.9, maxQ(s′,·) = 2.0, α = 0.5 ค่า Q ใหม่คือ', c: ['1.15', '1.65', '2.80', '0.75'], a: 1, e: 'target = 1 + 0.9·2 = 2.8, error = 2.3, Q = 0.5 + 0.5·2.3 = 1.65' },
    { q: 'เมื่อ s′ เป็นสถานะ terminated (คานล้ม) TD target ของ Q-learning คือ', c: ['r + γ·maxQ(s′,·)', 'r เท่านั้น', '0 เสมอ', 'maxQ(s′,·)'], a: 1, e: 'หลังล้มไม่มีอนาคต จึงไม่ bootstrap: target = r (ส่วน truncated ยัง bootstrap)' },
    { q: 'ε-greedy ที่ ε = 0.1 กับ 2 actions จะเลือก action ที่ดีที่สุดกี่เปอร์เซ็นต์ของเวลา', c: ['90%', '95%', '10%', '100%'], a: 1, e: '(1 − 0.1) + 0.1/2 = 0.95' },
    { q: 'ทำไม Q-learning จัดเป็น off-policy', c: ['เพราะไม่ใช้ reward', 'เพราะเก็บข้อมูลด้วย ε-greedy แต่ target ใช้ max (greedy)', 'เพราะใช้ neural network', 'เพราะต้องรอจบตอน'], a: 1, e: 'นโยบายที่เก็บข้อมูล (ε-greedy) ต่างจากนโยบายที่ใช้ใน target (greedy)' },
    { q: 'Experience replay ใน DQN ช่วยแก้ปัญหาใด', c: ['เป้าหมายขยับตาม θ', 'ข้อมูลต่อเนื่องที่สัมพันธ์กันมาก และใช้ข้อมูลซ้ำไม่ได้', 'action ต่อเนื่อง', 'reward hacking'], a: 1, e: 'สุ่ม minibatch จาก buffer ลดความสัมพันธ์ของข้อมูลและใช้ประสบการณ์ซ้ำ · ปัญหาเป้าขยับแก้ด้วย target network' },
    { q: 'ถ้าตั้งรางวัล −1 ทุกก้าวใน Cart-Pole agent ที่เก่งจะทำอะไร', c: ['ทรงตัวให้นานที่สุด', 'รีบทำให้คานล้ม', 'อยู่นิ่ง', 'เลื่อนไปทางขวาตลอด'], a: 1, e: 'ล้มเร็ว Return = −9.6 ดีกว่าทรงครบ −99.3 — รางวัลผิด ไม่ใช่ agent ผิด (หน้า 33)' }
  ],
  init(root) {
    const $ = s => root.querySelector(s), f = TUTOR.fmt;
    /* Markov n-step */
    const names = ['แดด', 'เมฆ', 'ฝน'];
    const mk = () => {
      const P = [0, 1, 2].map(i => TUTOR.nums($('#mk-r' + i).value));
      const s = +$('#mk-s').value, n = Math.max(1, Math.min(30, +$('#mk-n').value || 1)), t = +$('#mk-t').value;
      let msg = '';
      P.forEach((r, i) => { const sm = r.reduce((a, b) => a + b, 0); if (Math.abs(sm - 1) > 1e-6) msg += `⚠ แถว${names[i]} รวม = ${f(sm, 4)} (ควรเป็น 1)\n`; });
      let row = P[s].slice();
      for (let k = 1; k < n; k++) row = [0, 1, 2].map(j => row.reduce((acc, v, i) => acc + v * P[i][j], 0));
      msg += `แถว ${names[s]} ของ P^${n} = [${row.map(v => f(v, 4)).join(', ')}]\n`;
      msg += `→ P(${names[t]} ในอีก ${n} วัน | วันนี้${names[s]}) = ${f(row[t], 4)}\n`;
      if (n === 2) { msg += '\nแจกทุกเส้นทาง (n = 2):\n'; let tot = 0; [0, 1, 2].forEach(m => { const v = P[s][m] * P[m][t]; tot += v; msg += `  ${names[s]}→${names[m]}→${names[t]} = ${f(P[s][m], 3)} × ${f(P[m][t], 3)} = ${f(v, 4)}\n`; }); msg += `  รวม = ${f(tot, 4)}`; }
      $('#mk-out').textContent = msg;
    };
    $('#mk-go').onclick = mk; mk();
    /* Return */
    const rt = () => {
      const r = TUTOR.nums($('#rt-r').value), g = +$('#rt-g').value; const n = r.length;
      const G = new Array(n + 1).fill(0); let lines = [`G${n} = 0 (หลังจบตอนไม่มีรางวัล)`];
      for (let t = n - 1; t >= 0; t--) { G[t] = r[t] + g * G[t + 1]; lines.push(`G${t} = r${t + 1} + γ·G${t + 1} = ${f(r[t])} + ${f(g)}×${f(G[t + 1], 4)} = ${f(G[t], 4)}`); }
      lines.push(`\nG₀ = ${f(G[0], 4)}   (ขอบเขตบนถ้าได้ +1 ตลอด: 1/(1−γ) = ${g < 1 ? f(1 / (1 - g), 3) : '∞'})`);
      $('#rt-out').textContent = lines.join('\n');
    };
    $('#rt-go').onclick = rt; rt();
    /* Logistic policy */
    const pl = () => {
      const w = ['w0', 'w1', 'w2', 'w3', 'w4'].map(k => +$('#pl-' + k).value);
      const s = [1, +$('#pl-x').value, +$('#pl-xd').value, +$('#pl-t').value, +$('#pl-td').value];
      const lab = ['w₀·1', 'w₁·x', 'w₂·ẋ', 'w₃·θ', 'w₄·θ̇'];
      let z = 0, lines = [];
      s.forEach((v, i) => { const c = w[i] * v; z += c; lines.push(`${lab[i]} = ${f(w[i])} × ${f(v)} = ${f(c, 4)}`); });
      const y = TUTOR.sigmoid(z);
      lines.push(`z = ${f(z, 4)}`, `y = σ(z) = 1/(1+e^(−z)) = ${f(y, 4)}`, `→ action: ${y > 0.5 ? 'ขวา (y > 0.5)' : 'ซ้าย (y ≤ 0.5)'}`);
      $('#pl-out').textContent = lines.join('\n');
    };
    $('#pl-go').onclick = pl; pl();
    /* Q update */
    const qu = () => {
      const q = +$('#q-q').value, r = +$('#q-r').value, g = +$('#q-g').value, m = +$('#q-m').value, a = +$('#q-a').value, term = $('#q-term').checked;
      const target = term ? r : r + g * m, err = target - q, nq = q + a * err;
      $('#q-out').textContent = (term ? `s′ terminal → ไม่ bootstrap: TD target = r = ${f(r)}` : `TD target = r + γ·maxQ(s′,·) = ${f(r)} + ${f(g)}×${f(m)} = ${f(target, 4)}`) +
        `\nTD error = target − Q(s,a) = ${f(target, 4)} − ${f(q)} = ${f(err, 4)}\nQ(s,a) ใหม่ = ${f(q)} + ${f(a)}×${f(err, 4)} = ${f(nq, 4)}`;
    };
    $('#q-go').onclick = qu; $('#q-term').onchange = qu; qu();
    /* epsilon greedy */
    const ep = (sim) => {
      const e = +$('#ep-e').value, n = Math.max(2, +$('#ep-n').value || 2);
      $('#ep-ev').textContent = e.toFixed(2);
      const pb = 1 - e + e / n, po = e / n;
      let msg = `P(best) = (1 − ε) + ε/|A| = ${f(1 - e, 3)} + ${f(e, 3)}/${n} = ${f(pb, 4)}\nP(action อื่นแต่ละตัว) = ε/|A| = ${f(po, 4)}`;
      if (sim) { const cnt = new Array(n).fill(0); for (let i = 0; i < 1000; i++) { const a = Math.random() < e ? Math.floor(Math.random() * n) : 0; cnt[a]++; } msg += `\n\nจำลอง 1,000 ครั้ง (action 0 = best):\n` + cnt.map((c, i) => `  action ${i}: ${c} ครั้ง ${'█'.repeat(Math.round(c / 25))}`).join('\n'); }
      $('#ep-out').textContent = msg;
    };
    $('#ep-e').oninput = () => ep(false); $('#ep-n').oninput = () => ep(false); $('#ep-go').onclick = () => ep(true); ep(false);
    /* Reward design */
    const rw = () => {
      const r = +$('#rw-r').value, p = +$('#rw-p').value, g = +$('#rw-g').value, k = Math.max(1, Math.min(499, +$('#rw-k').value || 10));
      const sum = (n) => g < 1 ? r * (1 - Math.pow(g, n)) / (1 - g) : r * n;
      const full = sum(500), fall = sum(k) + p * Math.pow(g, k - 1);
      const pick = Math.abs(full - fall) < 1e-9 ? 'เท่ากัน — agent ไม่แยกความต่าง' : (full > fall ? 'ทรงตัวครบ 500 ก้าว ✔' : 'รีบล้มที่ก้าว ' + k + ' ✘ (รางวัลออกแบบผิด!)');
      $('#rw-out').textContent = `Return ถ้าทรงครบ 500 ก้าว = ${f(full, 3)}\nReturn ถ้าล้มที่ก้าว ${k} = ${f(sum(k), 3)} + (${f(p)})×γ^${k - 1} = ${f(fall, 3)}\n→ agent ที่ฉลาดจะเลือก: ${pick}`;
    };
    $('#rw-go').onclick = rw; rw();
    /* Grid world Q-learning */
    const cv = $('#gw-cv'), ctx = cv.getContext('2d');
    const R = 4, C = 4, goal = [0, 3], pit = [1, 3], wall = [1, 1], start = [3, 0];
    const mv = [[-1, 0], [0, 1], [1, 0], [0, -1]], arr = ['↑', '→', '↓', '←'];
    let Q, eps = 0, lastLen = 0, lastRet = 0;
    const key = (r, c) => r * C + c;
    const isGoal = (r, c) => r === goal[0] && c === goal[1], isPit = (r, c) => r === pit[0] && c === pit[1], isWall = (r, c) => r === wall[0] && c === wall[1];
    const reset = () => { Q = Array.from({ length: R * C }, () => [0, 0, 0, 0]); eps = 0; lastLen = 0; lastRet = 0; draw(); };
    const step = (r, c, a, sr) => { let nr = r + mv[a][0], nc = c + mv[a][1]; if (nr < 0 || nr >= R || nc < 0 || nc >= C || isWall(nr, nc)) { nr = r; nc = c; } if (isGoal(nr, nc)) return [nr, nc, 1, true]; if (isPit(nr, nc)) return [nr, nc, -1, true]; return [nr, nc, sr, false]; };
    const episode = () => {
      const al = +$('#gw-a').value, ga = +$('#gw-g').value, e = +$('#gw-e').value, sr = +$('#gw-r').value;
      let [r, c] = start, t = 0, ret = 0;
      while (t < 80) {
        const s = key(r, c); let a;
        if (Math.random() < e) a = Math.floor(Math.random() * 4); else { const m = Math.max(...Q[s]); const b = [0, 1, 2, 3].filter(i => Q[s][i] === m); a = b[Math.floor(Math.random() * b.length)]; }
        const [nr, nc, rew, done] = step(r, c, a, sr); const s2 = key(nr, nc);
        const future = done ? 0 : Math.max(...Q[s2]);
        Q[s][a] += al * (rew + ga * future - Q[s][a]);
        ret += rew; r = nr; c = nc; t++; if (done) break;
      }
      eps++; lastLen = t; lastRet = ret;
    };
    const draw = () => {
      const W = cv.width / C, H = cv.height / R; ctx.clearRect(0, 0, cv.width, cv.height); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
        const x = c * W, y = r * H, s = key(r, c);
        if (isWall(r, c)) { ctx.fillStyle = '#495057'; ctx.fillRect(x, y, W, H); continue; }
        if (isGoal(r, c) || isPit(r, c)) { ctx.fillStyle = isGoal(r, c) ? '#2b8a3e' : '#c92a2a'; ctx.fillRect(x, y, W, H); ctx.fillStyle = '#fff'; ctx.font = 'bold 22px sans-serif'; ctx.fillText(isGoal(r, c) ? '🏁 +1' : '☠ −1', x + W / 2, y + H / 2); continue; }
        const m = Math.max(...Q[s]); const v = Math.max(-1, Math.min(1, m));
        ctx.fillStyle = v >= 0 ? `rgba(43,138,62,${0.08 + 0.75 * v})` : `rgba(201,42,42,${0.08 + 0.75 * -v})`; ctx.fillRect(x, y, W, H);
        ctx.fillStyle = '#1b2433'; ctx.font = 'bold 30px sans-serif';
        const allZero = Q[s].every(q => q === 0);
        if (!allZero) ctx.fillText(arr[Q[s].indexOf(m)], x + W / 2, y + H / 2 - 6);
        ctx.font = '13px monospace'; ctx.fillText('maxQ ' + m.toFixed(2), x + W / 2, y + H - 14);
        if (r === start[0] && c === start[1]) { ctx.font = 'bold 14px sans-serif'; ctx.fillText('S', x + 12, y + 14); }
      }
      ctx.strokeStyle = '#adb5bd'; for (let i = 0; i <= C; i++) { ctx.beginPath(); ctx.moveTo(i * W, 0); ctx.lineTo(i * W, cv.height); ctx.stroke(); } for (let i = 0; i <= R; i++) { ctx.beginPath(); ctx.moveTo(0, i * H); ctx.lineTo(cv.width, i * H); ctx.stroke(); }
      $('#gw-out').textContent = `ฝึกไปแล้ว ${eps} ตอน · ตอนล่าสุดยาว ${lastLen} ก้าว ได้ผลรวมรางวัล ${lastRet.toFixed(2)}\nลูกศร = action ที่ Q สูงสุด (นโยบาย greedy) · สี = maxQ (เขียว = ดี, แดง = แย่)`;
    };
    const train = n => { for (let i = 0; i < n; i++) episode(); draw(); };
    $('#gw-1').onclick = () => train(1); $('#gw-50').onclick = () => train(50); $('#gw-500').onclick = () => train(500); $('#gw-reset').onclick = reset;
    reset();
  }
});
