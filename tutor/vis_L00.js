/* L00 · เริ่มจากศูนย์ — สื่อภาพประกอบ (ภาพนิ่ง / ทีละขั้น / เคลื่อนไหว)
   ตัวเลขทุกตัวตรวจด้วย python แล้ว: ระยะ A(1,2)–D(8,8) = 9.22 / 13 · z = 0.5·148 + 0.5·33.6 + 0.5 = 91.3 ·
   softmax([2,1,0]) = 0.67/0.24/0.09 · 0.95^10 = 0.60 · อากาศ 2 วัน = 0.18 · โหวต 5 เสียง p=0.6 → 0.68 */
TUTOR.addVisuals('L00', [

/* ============ INTRO ============ */
{
  id: 'overview', section: 'intro', kind: 'ภาพนิ่ง', title: 'บทนี้ใน 1 ภาพ: AI ทาย → วัดความผิด → ปรับ แล้ววนซ้ำ',
  html: `<svg viewBox="0 0 760 392" role="img" aria-label="ภาพรวมบท L00">
<defs><marker id="L00-ov-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker></defs>
<text x="12" y="26" font-size="15" class="tb">ขาไป: โมเดล “ทาย” (forward)</text>
<rect x="12" y="46" width="128" height="80" rx="12" class="f1l s1" stroke-width="2"/>
<text x="76" y="84" font-size="16" class="tb" text-anchor="middle">ข้อมูล</text><text x="76" y="108" font-size="14" class="tm" text-anchor="middle">ตาราง x, y</text>
<rect x="164" y="46" width="128" height="80" rx="12" class="f6l s6" stroke-width="2"/>
<text x="228" y="84" font-size="16" class="tb" text-anchor="middle">เวกเตอร์ x</text><text x="228" y="108" font-size="14" class="tm" text-anchor="middle">รายการตัวเลข</text>
<rect x="316" y="46" width="128" height="80" rx="12" class="f2l s2" stroke-width="2"/>
<text x="380" y="84" font-size="16" class="tb" text-anchor="middle">z = w·x + b</text><text x="380" y="108" font-size="14" class="tm" text-anchor="middle">คูณแล้วบวก</text>
<rect x="468" y="46" width="128" height="80" rx="12" class="f4l s4" stroke-width="2"/>
<text x="532" y="84" font-size="16" class="tb" text-anchor="middle">σ / softmax</text><text x="532" y="108" font-size="14" class="tm" text-anchor="middle">บีบเป็น 0–1</text>
<rect x="620" y="46" width="128" height="80" rx="12" class="f3l s3" stroke-width="2"/>
<text x="684" y="84" font-size="16" class="tb" text-anchor="middle">คำทาย ŷ</text><text x="684" y="108" font-size="14" class="tm" text-anchor="middle">เช่น ป่วย 0.9</text>
<g font-size="14" class="tb" text-anchor="middle">
<circle cx="128" cy="46" r="12" class="f1"/><text x="128" y="51" class="tw">2</text>
<circle cx="280" cy="46" r="12" class="f6"/><text x="280" y="51" class="tw">3</text>
<circle cx="432" cy="46" r="12" class="f2"/><text x="432" y="51" class="tw">4</text>
<circle cx="584" cy="46" r="12" class="f4"/><text x="584" y="51" class="tw">6</text>
<circle cx="736" cy="46" r="12" class="f3"/><text x="736" y="51" class="tw">7</text></g>
<g class="ln v-flow" stroke-width="2.5" marker-end="url(#L00-ov-ar)">
<line x1="142" y1="86" x2="161" y2="86"/><line x1="294" y1="86" x2="313" y2="86"/><line x1="446" y1="86" x2="465" y2="86"/><line x1="598" y1="86" x2="617" y2="86"/>
<line x1="684" y1="128" x2="684" y2="210"/><line x1="618" y1="254" x2="599" y2="254"/><line x1="466" y1="254" x2="447" y2="254"/><line x1="380" y1="212" x2="380" y2="130"/></g>
<text x="676" y="176" font-size="14" class="tm" text-anchor="end">ตอนฝึก</text>
<text x="390" y="176" font-size="14" class="tb">วนซ้ำ = เรียนรู้</text>
<text x="470" y="194" font-size="15" class="tb">ขากลับ: “เรียน” จากความผิด</text>
<rect x="620" y="214" width="128" height="80" rx="12" class="f5l s5" stroke-width="2"/>
<text x="684" y="252" font-size="16" class="tb" text-anchor="middle">Loss</text><text x="684" y="276" font-size="14" class="tm" text-anchor="middle">เทียบกับเฉลย y</text>
<rect x="468" y="214" width="128" height="80" rx="12" class="f7l s7" stroke-width="2"/>
<text x="532" y="252" font-size="16" class="tb" text-anchor="middle">Gradient ∇L</text><text x="532" y="276" font-size="14" class="tm" text-anchor="middle">ชี้ทางลดความผิด</text>
<rect x="316" y="214" width="128" height="80" rx="12" class="f1l s1" stroke-width="2"/>
<text x="380" y="252" font-size="16" class="tb" text-anchor="middle">อัปเดต w</text><text x="380" y="276" font-size="14" class="tm" text-anchor="middle">w ← w − η∇L</text>
<g font-size="14" class="tb" text-anchor="middle">
<circle cx="736" cy="214" r="12" class="f5"/><text x="736" y="219" class="tw">5</text>
<circle cx="584" cy="214" r="12" class="f2"/><text x="584" y="219" class="tw">5</text>
<circle cx="430" cy="214" r="13" class="f1"/><text x="430" y="219" class="tw">10</text></g>
<rect x="12" y="214" width="280" height="80" rx="12" class="nofill ln" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="28" y="238" font-size="15" class="tb">ตัวช่วยอ่านสูตร</text>
<text x="28" y="261" font-size="14">หลายแถวพร้อมกัน → เมทริกซ์ (หัวข้อ 8)</text>
<text x="28" y="284" font-size="14">Σ η γ ∇ ŷ … → สัญลักษณ์ (หัวข้อ 9)</text>
<text x="12" y="326" font-size="15" class="tb">คณิตชุดนี้ถูกใช้ในทุกบท:</text>
<g font-size="15" text-anchor="middle">
<rect x="12" y="338" width="116" height="38" rx="19" class="f1l"/><text x="70" y="363">L08 นิวรอน</text>
<rect x="136" y="338" width="116" height="38" rx="19" class="f3l"/><text x="194" y="363">L09 จัดกลุ่ม</text>
<rect x="260" y="338" width="116" height="38" rx="19" class="f2l"/><text x="318" y="363">L10 รางวัล</text>
<rect x="384" y="338" width="116" height="38" rx="19" class="f6l"/><text x="442" y="363">L11 ภาพ</text>
<rect x="508" y="338" width="116" height="38" rx="19" class="f4l"/><text x="566" y="363">L12 ภาษา</text>
<rect x="632" y="338" width="116" height="38" rx="19" class="f5l"/><text x="690" y="363">L13 Agent</text></g>
</svg>`,
  caption: 'ตัวเลขในวงกลม = หัวข้อในบทนี้ที่สอนเรื่องนั้น · อ่านแถวบนซ้าย→ขวา (ทาย) แล้วแถวล่างขวา→ซ้าย (เรียน) — ทุกบทตั้งแต่ L08 ถึง L13 คือรูปแบบต่าง ๆ ของภาพนี้'
},
{
  id: 'glossary', section: 'intro', kind: 'ภาพนิ่ง', title: 'ศัพท์ที่ต้องรู้ก่อนเริ่ม (10 คำ)',
  html: `<svg viewBox="0 0 760 432" role="img" aria-label="อภิธานศัพท์">
<g>
<rect x="8" y="6" width="368" height="76" rx="12" class="f1l"/><circle cx="46" cy="44" r="24" class="f1"/><text x="46" y="52" font-size="22" class="tw tb" text-anchor="middle">▦</text>
<text x="82" y="38" font-size="16" class="tb">ตัวอย่าง (sample)</text><text x="82" y="64" font-size="14.5">1 แถวในตาราง เช่น ผู้ป่วย 1 คน</text>
<rect x="384" y="6" width="368" height="76" rx="12" class="f6l"/><circle cx="422" cy="44" r="24" class="f6"/><text x="422" y="52" font-size="22" class="tw tb" text-anchor="middle">x</text>
<text x="458" y="38" font-size="16" class="tb">Feature (x) ฟีเจอร์</text><text x="458" y="64" font-size="14.5">สิ่งที่รู้/ป้อนเข้า เช่น น้ำตาล, BMI</text>
<rect x="8" y="92" width="368" height="76" rx="12" class="f3l"/><circle cx="46" cy="130" r="24" class="f3"/><text x="46" y="138" font-size="22" class="tw tb" text-anchor="middle">y</text>
<text x="82" y="124" font-size="16" class="tb">Label (y) เฉลย</text><text x="82" y="150" font-size="14.5">คำตอบจริง เช่น ป่วย +1 · ไม่ป่วย −1</text>
<rect x="384" y="92" width="368" height="76" rx="12" class="f4l"/><circle cx="422" cy="130" r="24" class="f4"/><text x="422" y="138" font-size="20" class="tw tb" text-anchor="middle">f</text>
<text x="458" y="124" font-size="16" class="tb">Model โมเดล</text><text x="458" y="150" font-size="14.5">สูตรที่แปลง x ให้เป็นคำทาย</text>
<rect x="8" y="178" width="368" height="76" rx="12" class="f2l"/><circle cx="46" cy="216" r="24" class="f2"/><text x="46" y="224" font-size="22" class="tw tb" text-anchor="middle">w</text>
<text x="82" y="210" font-size="16" class="tb">Weight (w) · bias (b)</text><text x="82" y="236" font-size="14.5">ปุ่มปรับ: x ตัวไหนสำคัญแค่ไหน</text>
<rect x="384" y="178" width="368" height="76" rx="12" class="f1l"/><circle cx="422" cy="216" r="24" class="f1"/><text x="422" y="224" font-size="22" class="tw tb" text-anchor="middle">ŷ</text>
<text x="458" y="210" font-size="16" class="tb">Prediction (ŷ) คำทาย</text><text x="458" y="236" font-size="14.5">สิ่งที่โมเดลตอบ (y ใส่หมวก)</text>
<rect x="8" y="264" width="368" height="76" rx="12" class="f5l"/><circle cx="46" cy="302" r="24" class="f5"/><text x="46" y="310" font-size="22" class="tw tb" text-anchor="middle">L</text>
<text x="82" y="296" font-size="16" class="tb">Loss ค่าความผิด</text><text x="82" y="322" font-size="14.5">ตัวเลขบอกว่าทายผิดมากแค่ไหน</text>
<rect x="384" y="264" width="368" height="76" rx="12" class="f2l"/><circle cx="422" cy="302" r="24" class="f2"/><text x="422" y="310" font-size="22" class="tw tb" text-anchor="middle">∇</text>
<text x="458" y="296" font-size="16" class="tb">Gradient (∇) ความชัน</text><text x="458" y="322" font-size="14.5">ชี้ทางที่ loss เพิ่ม → เราเดินสวน</text>
<rect x="8" y="350" width="368" height="76" rx="12" class="f4l"/><circle cx="46" cy="388" r="24" class="f4"/><text x="46" y="396" font-size="22" class="tw tb" text-anchor="middle">η</text>
<text x="82" y="382" font-size="16" class="tb">Learning rate (η)</text><text x="82" y="408" font-size="14.5">ความยาวก้าวตอนปรับ w</text>
<rect x="384" y="350" width="368" height="76" rx="12" class="f3l"/><circle cx="422" cy="388" r="24" class="f3"/><text x="422" y="396" font-size="22" class="tw tb" text-anchor="middle">↻</text>
<text x="458" y="382" font-size="16" class="tb">Epoch</text><text x="458" y="408" font-size="14.5">เรียนครบทุกแถวของข้อมูล 1 รอบ</text>
</g></svg>`,
  caption: 'จำ 10 คำนี้ได้ = อ่านสไลด์ L08–L13 เข้าใจไปครึ่งหนึ่งแล้ว · ทุกคำมีภาพอธิบายละเอียดในหัวข้อถัด ๆ ไป'
},

/* ============ 1) AI · ML · DL ============ */
{
  id: 'nested', section: 'ai-ml-dl', pos: 'top', kind: 'ทีละขั้น', title: 'AI ⊃ ML ⊃ DL ⊃ LLM: วงซ้อนกันเหมือนตุ๊กตาแม่ลูกดก',
  html: `<div class="stepper"><svg viewBox="0 0 760 390" role="img" aria-label="วงซ้อน AI ML DL">
<circle cx="220" cy="200" r="180" class="f1l s1" stroke-width="2.5"/>
<text x="220" y="52" font-size="16" class="tb" text-anchor="middle">AI · ปัญญาประดิษฐ์</text>
<g data-s="2"><circle cx="220" cy="200" r="136" class="f3l s3" stroke-width="2.5"/>
<text x="220" y="96" font-size="15" class="tb" text-anchor="middle">ML · เรียนจากข้อมูล</text></g>
<g data-s="3"><circle cx="220" cy="200" r="92" class="f4l s4" stroke-width="2.5"/>
<text x="220" y="140" font-size="15" class="tb" text-anchor="middle">DL · หลายชั้น</text></g>
<g data-s="4"><circle cx="220" cy="200" r="48" class="f2l s2" stroke-width="2.5"/>
<text x="220" y="198" font-size="16" class="tb" text-anchor="middle">LLM</text><text x="220" y="218" font-size="14" text-anchor="middle">GenAI</text></g>
<rect x="430" y="22" width="320" height="78" rx="12" class="f1l"/>
<text x="446" y="54" font-size="15" class="tb">AI = ทำให้เครื่องทำงานอย่างฉลาด</text>
<text x="446" y="80" font-size="14">รวมถึงกฎ if-else ที่คนเขียนเองด้วย</text>
<g data-s="2"><rect x="430" y="112" width="320" height="78" rx="12" class="f3l"/>
<text x="446" y="144" font-size="15" class="tb">ML = เรียน “กฎ” เองจากข้อมูล</text>
<text x="446" y="170" font-size="14">Perceptron · K-Means · Q-learning</text></g>
<g data-s="3"><rect x="430" y="202" width="320" height="78" rx="12" class="f4l"/>
<text x="446" y="234" font-size="15" class="tb">DL = ML ที่ใช้โครงข่ายหลายชั้น</text>
<text x="446" y="260" font-size="14">MLP · CNN · RNN · Transformer</text></g>
<g data-s="4"><rect x="430" y="292" width="320" height="78" rx="12" class="f2l"/>
<text x="446" y="324" font-size="15" class="tb">LLM / GenAI = DL ที่สร้างของใหม่</text>
<text x="446" y="350" font-size="14">เขียนข้อความ · วาดภาพ (L12–L13)</text></g>
</svg><ol class="caps">
<li>วงนอกสุด = <b>AI</b>: อะไรก็ได้ที่ทำให้เครื่องดูฉลาด แม้แต่กฎ if-else ที่คนเขียนเอง</li>
<li><b>ML</b> อยู่ข้างใน AI: แทนที่คนเขียนกฎ เราให้ “ข้อมูล” แล้วเครื่องหากฎ (ค่า w) เอง — L08 · L09 · L10</li>
<li><b>DL</b> อยู่ข้างใน ML: ใช้โครงข่ายประสาทหลายชั้นซ้อนกัน เรียน feature เองได้ — L08 (MLP) · L11 (CNN) · L12</li>
<li>ในสุด = <b>Generative AI / LLM</b>: DL ขนาดใหญ่ที่สร้างข้อความ/ภาพใหม่ — L12–L13 · ทุกวงในเป็นส่วนหนึ่งของวงนอกเสมอ</li>
</ol></div>`,
  caption: 'ข้อสอบชอบถาม “ข้อใดถูก”: DL เป็น ML เสมอ แต่ ML ไม่จำเป็นต้องเป็น DL (เช่น K-Means ไม่ใช่โครงข่ายประสาท)'
},
{
  id: 'learn-types', section: 'ai-ml-dl', pos: 'top', kind: 'ภาพนิ่ง', title: 'เรียนรู้ได้ 4 แบบ — ต่างกันที่ “ใครเป็นคนบอกคำตอบ”',
  html: `<svg viewBox="0 0 760 330" role="img" aria-label="ประเภทการเรียนรู้ 4 แบบ">
<defs><marker id="L00-lt-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker></defs>
<rect x="6" y="8" width="178" height="314" rx="14" class="f1l"/><rect x="196" y="8" width="178" height="314" rx="14" class="f3l"/>
<rect x="386" y="8" width="178" height="314" rx="14" class="f2l"/><rect x="576" y="8" width="178" height="314" rx="14" class="f4l"/>
<rect x="6" y="8" width="178" height="56" rx="14" class="f1"/><rect x="196" y="8" width="178" height="56" rx="14" class="f3"/>
<rect x="386" y="8" width="178" height="56" rx="14" class="f2"/><rect x="576" y="8" width="178" height="56" rx="14" class="f4"/>
<g class="tw" text-anchor="middle"><text x="95" y="32" font-size="16" class="tw tb">Supervised</text><text x="95" y="54" font-size="14" class="tw">มีผู้สอน</text>
<text x="285" y="32" font-size="16" class="tw tb">Unsupervised</text><text x="285" y="54" font-size="14" class="tw">ไม่มีผู้สอน</text>
<text x="475" y="32" font-size="16" class="tw tb">Reinforcement</text><text x="475" y="54" font-size="14" class="tw">เรียนจากรางวัล</text>
<text x="665" y="32" font-size="16" class="tw tb">Self-supervised</text><text x="665" y="54" font-size="14" class="tw">สร้างเฉลยเอง</text></g>
<rect x="30" y="86" width="70" height="120" class="bgp"/><rect x="100" y="86" width="60" height="120" class="f3l"/>
<rect x="30" y="86" width="130" height="120" rx="4" class="nofill ln" stroke-width="1.5"/>
<line x1="30" y1="116" x2="160" y2="116" class="ln"/><line x1="30" y1="146" x2="160" y2="146" class="ln"/><line x1="30" y1="176" x2="160" y2="176" class="ln"/><line x1="100" y1="86" x2="100" y2="206" class="ln"/>
<g font-size="15" text-anchor="middle"><text x="65" y="107" class="tb">x</text><text x="130" y="107" class="tb">y เฉลย</text>
<text x="65" y="137">148</text><text x="130" y="137">+1</text><text x="65" y="167">85</text><text x="130" y="167">−1</text><text x="65" y="197">160</text><text x="130" y="197">+1</text></g>
<ellipse cx="250" cy="118" rx="42" ry="34" class="nofill s3" stroke-width="2" stroke-dasharray="5 4"/>
<ellipse cx="322" cy="168" rx="40" ry="30" class="nofill s1" stroke-width="2" stroke-dasharray="5 4"/>
<g class="f3"><circle cx="236" cy="108" r="6"/><circle cx="258" cy="100" r="6"/><circle cx="246" cy="130" r="6"/><circle cx="268" cy="122" r="6"/><circle cx="230" cy="132" r="6"/></g>
<g class="f1"><circle cx="310" cy="160" r="6"/><circle cx="332" cy="156" r="6"/><circle cx="318" cy="180" r="6"/><circle cx="340" cy="174" r="6"/><circle cx="304" cy="178" r="6"/></g>
<text x="285" y="222" font-size="14" class="tm" text-anchor="middle">ไม่มีป้ายชื่อเลย</text>
<circle cx="428" cy="150" r="24" class="f2"/><text x="428" y="156" font-size="15" class="tw tb" text-anchor="middle">ผู้เล่น</text>
<rect x="490" y="122" width="64" height="56" rx="10" class="bgp s2" stroke-width="2"/><text x="522" y="156" font-size="15" class="tb" text-anchor="middle">โลก</text>
<path d="M440,124 C460,96 492,96 510,118" class="nofill ln" stroke-width="2" marker-end="url(#L00-lt-ar)"/>
<path d="M508,182 C490,206 460,206 442,176" class="nofill ln" stroke-width="2" marker-end="url(#L00-lt-ar)"/>
<text x="475" y="96" font-size="14" text-anchor="middle">ทำ (action)</text>
<text x="475" y="220" font-size="14" class="tb" text-anchor="middle">รางวัล +1</text>
<g font-size="15" text-anchor="middle">
<rect x="588" y="104" width="36" height="34" rx="6" class="bgp s4" stroke-width="1.5"/><text x="606" y="127">แมว</text>
<rect x="628" y="104" width="36" height="34" rx="6" class="bgp s4" stroke-width="1.5"/><text x="646" y="127">นั่ง</text>
<rect x="668" y="104" width="36" height="34" rx="6" class="bgp s4" stroke-width="1.5"/><text x="686" y="127">บน</text>
<rect x="708" y="104" width="36" height="34" rx="6" class="f4" /><text x="726" y="127" class="tw tb">?</text></g>
<text x="665" y="168" font-size="14" text-anchor="middle">ปิดคำไว้ 1 คำ</text>
<text x="665" y="190" font-size="14" text-anchor="middle">แล้วให้ทาย</text>
<text x="665" y="212" font-size="14" class="tm" text-anchor="middle">เฉลยอยู่ในข้อมูลเอง</text>
<g font-size="15" class="tb" text-anchor="middle"><text x="95" y="250">ครูมีเฉลยให้ตรวจ</text><text x="285" y="250">จัดกลุ่มเอง</text><text x="475" y="250">ฝึกหมาด้วยขนม</text><text x="665" y="250">ปิดคำแล้วทายเอง</text></g>
<g font-size="14" text-anchor="middle"><text x="95" y="274">ทำนาย / จำแนก</text><text x="285" y="274">หากลุ่ม · ลดมิติ</text><text x="475" y="274">ตัดสินใจทีละก้าว</text><text x="665" y="274">ฝึก LLM</text></g>
<g font-size="14" class="tb" text-anchor="middle">
<rect x="45" y="288" width="100" height="26" rx="13" class="f1"/><text x="95" y="306" class="tw">L08 · L11</text>
<rect x="245" y="288" width="80" height="26" rx="13" class="f3"/><text x="285" y="306" class="tw">L09</text>
<rect x="425" y="288" width="100" height="26" rx="13" class="f2"/><text x="475" y="306" class="tw">L10 · L13</text>
<rect x="615" y="288" width="100" height="26" rx="13" class="f4"/><text x="665" y="306" class="tw">L12 · L13</text></g>
</svg>`,
  caption: 'Supervised = มี y · Unsupervised = มีแต่ x · Reinforcement = มีแค่รางวัลที่มาทีหลัง · Self-supervised = สร้าง y จากข้อมูลเอง (เช่น คำถัดไป)'
},
{
  id: 'course-map', section: 'ai-ml-dl', pos: 'bottom', kind: 'ภาพนิ่ง', title: 'แผนที่รายวิชา: จาก L00 เดินไปถึงวันสอบ (กดที่สถานีเพื่อไปบทนั้น)',
  html: `<svg viewBox="0 0 760 290" role="img" aria-label="แผนที่รายวิชา L08 ถึง L13">
<path d="M30,155 C65,155 65,195 100,195 C150,195 165,115 215,115 C265,115 280,195 330,195 C380,195 395,115 445,115 C495,115 510,195 560,195 C610,195 625,115 675,115 C710,115 705,155 740,155" class="nofill grid" stroke-width="22" stroke-linecap="round"/>
<path d="M30,155 C65,155 65,195 100,195 C150,195 165,115 215,115 C265,115 280,195 330,195 C380,195 395,115 445,115 C495,115 510,195 560,195 C610,195 625,115 675,115 C710,115 705,155 740,155" class="nofill ln v-flow" stroke-width="2"/>
<circle cx="30" cy="155" r="20" class="f4"/><text x="30" y="160" font-size="14" class="tw tb" text-anchor="middle">L00</text>
<text x="30" y="124" font-size="14" class="tb" text-anchor="middle">เริ่ม</text>
<circle cx="740" cy="155" r="18" class="f5"/><text x="740" y="160" font-size="14" class="tw tb" text-anchor="middle">สอบ</text>
<g data-go="L08" style="cursor:pointer"><circle cx="100" cy="195" r="24" class="f1"/><text x="100" y="200" font-size="15" class="tw tb" text-anchor="middle">L08</text>
<text x="100" y="245" font-size="15" class="tb" text-anchor="middle">นิวรอน → MLP</text><text x="100" y="266" font-size="14" text-anchor="middle">เรียนจากเฉลย</text></g>
<g data-go="L09" style="cursor:pointer"><circle cx="215" cy="115" r="24" class="f3"/><text x="215" y="120" font-size="15" class="tw tb" text-anchor="middle">L09</text>
<text x="215" y="60" font-size="15" class="tb" text-anchor="middle">จัดกลุ่ม · PCA</text><text x="215" y="81" font-size="14" text-anchor="middle">ไม่มีเฉลย</text></g>
<g data-go="L10" style="cursor:pointer"><circle cx="330" cy="195" r="24" class="f2"/><text x="330" y="200" font-size="15" class="tw tb" text-anchor="middle">L10</text>
<text x="330" y="245" font-size="15" class="tb" text-anchor="middle">Reinforcement</text><text x="330" y="266" font-size="14" text-anchor="middle">เรียนจากรางวัล</text></g>
<g data-go="L11" style="cursor:pointer"><circle cx="445" cy="115" r="24" class="f6"/><text x="445" y="120" font-size="15" class="tw tb" text-anchor="middle">L11</text>
<text x="445" y="60" font-size="15" class="tb" text-anchor="middle">CNN มองภาพ</text><text x="445" y="81" font-size="14" text-anchor="middle">kernel เลื่อนส่อง</text></g>
<g data-go="L12" style="cursor:pointer"><circle cx="560" cy="195" r="24" class="f4"/><text x="560" y="200" font-size="15" class="tw tb" text-anchor="middle">L12</text>
<text x="560" y="245" font-size="15" class="tb" text-anchor="middle">Transformer · LLM</text><text x="560" y="266" font-size="14" text-anchor="middle">อ่าน-เขียนภาษา</text></g>
<g data-go="L13" style="cursor:pointer"><circle cx="675" cy="115" r="24" class="f5"/><text x="675" y="120" font-size="15" class="tw tb" text-anchor="middle">L13</text>
<text x="675" y="60" font-size="15" class="tb" text-anchor="middle">Agent · Quantum</text><text x="675" y="81" font-size="14" text-anchor="middle">คิด + ใช้เครื่องมือ</text></g>
</svg>`,
  caption: 'แต่ละบทเพิ่ม “สัญญาณสอน” (เฉลย / ไม่มีเฉลย / รางวัล) หรือ “โครงสร้าง” ใหม่ (CNN / Transformer / Agent) แต่ใช้คณิตชุดเดียวกับบทนี้',
  init(el) {
    el.querySelectorAll('[data-go]').forEach(g => g.addEventListener('click', () => { location.hash = '#/lesson/' + g.getAttribute('data-go'); }));
  }
},

/* ============ 2) ข้อมูลเป็นตาราง ============ */
{
  id: 'table-anatomy', section: 'data-table', pos: 'top', kind: 'ทีละขั้น', title: 'กายวิภาคของตารางข้อมูล (ข้อมูลเบาหวานจากสไลด์ L08)',
  html: `<div class="stepper"><svg viewBox="0 0 760 360" role="img" aria-label="ตารางข้อมูลเบาหวาน">
<rect data-s="3" x="80" y="30" width="240" height="252" class="f1l"/>
<rect data-s="4" x="320" y="30" width="130" height="252" class="f3l"/>
<rect x="20" y="30" width="430" height="252" rx="10" class="nofill ln" stroke-width="1.5"/>
<line x1="20" y1="92" x2="450" y2="92" class="ln" stroke-width="2"/>
<g class="ln" stroke-width="1"><line x1="20" y1="132" x2="450" y2="132"/><line x1="20" y1="172" x2="450" y2="172"/><line x1="20" y1="212" x2="450" y2="212"/><line x1="20" y1="252" x2="450" y2="252"/>
<line x1="80" y1="30" x2="80" y2="282"/><line x1="210" y1="30" x2="210" y2="282"/><line x1="320" y1="30" x2="320" y2="282"/></g>
<g text-anchor="middle"><text x="50" y="66" font-size="15" class="tb">คนที่</text>
<text x="145" y="56" font-size="17" class="tb">x₁</text><text x="145" y="80" font-size="14" class="tm">น้ำตาลในเลือด</text>
<text x="265" y="56" font-size="17" class="tb">x₂</text><text x="265" y="80" font-size="14" class="tm">BMI</text>
<text x="385" y="56" font-size="17" class="tb">y</text><text x="385" y="80" font-size="14" class="tm">เป็นเบาหวาน?</text></g>
<g font-size="16" text-anchor="middle">
<text x="50" y="118">1</text><text x="145" y="118">148</text><text x="265" y="118">33.6</text><text x="385" y="118" class="tb">+1</text>
<text x="50" y="158">2</text><text x="145" y="158">85</text><text x="265" y="158">26.6</text><text x="385" y="158" class="tb">−1</text>
<text x="50" y="198">3</text><text x="145" y="198">160</text><text x="265" y="198">35.0</text><text x="385" y="198" class="tb">+1</text>
<text x="50" y="238">4</text><text x="145" y="238">90</text><text x="265" y="238">22.5</text><text x="385" y="238" class="tb">−1</text>
<text x="50" y="274">⋮</text><text x="145" y="274">⋮</text><text x="265" y="274">⋮</text><text x="385" y="274">⋮</text></g>
<rect x="480" y="30" width="270" height="54" rx="12" class="f4l"/>
<text x="496" y="52" font-size="15" class="tb">ข้อมูลเบาหวาน (สไลด์ L08)</text><text x="496" y="74" font-size="14">8 แถว · 2 feature · 1 label</text>
<g data-s="2"><rect x="16" y="90" width="438" height="44" rx="8" class="nofill s2" stroke-width="3"/>
<line x1="456" y1="112" x2="478" y2="116" class="s2" stroke-width="2.5"/>
<rect x="480" y="92" width="270" height="50" rx="12" class="f2l"/>
<text x="496" y="113" font-size="15" class="tb">1 แถว = 1 ตัวอย่าง (sample)</text><text x="496" y="134" font-size="14">ผู้ป่วย 1 คน</text></g>
<g data-s="3"><rect x="480" y="152" width="270" height="54" rx="12" class="f1l s1" stroke-width="1.5"/>
<text x="496" y="174" font-size="15" class="tb">คอลัมน์ x = feature</text><text x="496" y="196" font-size="14">สิ่งที่รู้ก่อน ใช้เป็น input</text></g>
<g data-s="4"><rect x="480" y="218" width="270" height="54" rx="12" class="f3l s3" stroke-width="1.5"/>
<text x="496" y="240" font-size="15" class="tb">คอลัมน์ y = label (เฉลย)</text><text x="496" y="262" font-size="14">+1 เป็น · −1 ไม่เป็น</text></g>
<g data-s="5"><rect x="20" y="296" width="430" height="40" rx="8" class="f5l s5" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="50" y="322" font-size="14" class="tb" text-anchor="middle">ใหม่</text><text x="145" y="322" font-size="16" text-anchor="middle">125</text><text x="265" y="322" font-size="16" text-anchor="middle">30.0</text>
<text x="385" y="324" font-size="22" class="tb" text-anchor="middle" style="fill:var(--c5)">?</text>
<line x1="452" y1="316" x2="478" y2="316" class="s5" stroke-width="2.5"/>
<rect x="480" y="290" width="270" height="54" rx="12" class="f5l"/>
<text x="496" y="312" font-size="15" class="tb">ใช้งาน (predict)</text><text x="496" y="334" font-size="14">โมเดลเติม ? ด้วยคำทาย ŷ</text></g>
</svg><ol class="caps">
<li>ข้อมูลใน ML คือ “ตาราง” — ตัวอย่างนี้มาจากสไลด์ L08 (ผู้ป่วยเบาหวาน 8 คน แสดง 4 คนแรก)</li>
<li>อ่านแนวนอน: <b>1 แถว = 1 ตัวอย่าง (sample)</b> เช่น คนที่ 1 มีน้ำตาล 148 และ BMI 33.6</li>
<li>คอลัมน์ x₁, x₂ = <b>feature</b> คือสิ่งที่เรารู้ ใช้ป้อนเข้าโมเดล → คนที่ 1 เขียนเป็นเวกเตอร์ x = (148, 33.6)</li>
<li>คอลัมน์ y = <b>label</b> คือเฉลย (+1 เป็น, −1 ไม่เป็น) · ตอนฝึก (train) โมเดลได้ดูทั้ง x และ y</li>
<li>ตอนใช้งาน (predict) คนใหม่มีแต่ x — โมเดลต้องเติม “?” ด้วยคำทาย <b>ŷ</b></li>
</ol></div>`,
  caption: 'ภาษาที่ใช้แทนกัน: แถว = sample = example = instance · คอลัมน์ x = feature = input = attribute · y = label = target'
},
{
  id: 'train-predict', section: 'data-table', pos: 'top', kind: 'ภาพนิ่ง', title: 'ฝึก (train) กับ ใช้งาน (predict) ต่างกันอย่างไร',
  html: `<svg viewBox="0 0 760 290" role="img" aria-label="train กับ predict">
<defs><marker id="L00-tp-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker>
<marker id="L00-tp-ar3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f3"/></marker></defs>
<text x="20" y="26" font-size="15" class="tb">① ช่วงฝึก (train): มีเฉลย</text>
<text x="20" y="172" font-size="15" class="tb">② ช่วงใช้งาน (predict): ไม่มีเฉลย</text>
<g class="ln v-flow" stroke-width="2.5" marker-end="url(#L00-tp-ar)">
<line x1="202" y1="75" x2="286" y2="75"/><line x1="472" y1="75" x2="556" y2="75"/><line x1="202" y1="217" x2="286" y2="217"/><line x1="472" y1="217" x2="556" y2="217"/></g>
<rect x="20" y="40" width="180" height="70" rx="12" class="f1l s1" stroke-width="2"/>
<text x="110" y="70" font-size="15" class="tb" text-anchor="middle">ตาราง x + y</text><text x="110" y="94" font-size="14" text-anchor="middle">8 แถว มีเฉลยครบ</text>
<rect x="290" y="40" width="180" height="70" rx="12" class="f2l s2" stroke-width="2"/>
<text x="380" y="70" font-size="15" class="tb" text-anchor="middle">โมเดลเรียนรู้</text><text x="380" y="94" font-size="14" text-anchor="middle">ปรับ w ทีละนิด</text>
<rect x="560" y="40" width="180" height="70" rx="12" class="f3l s3" stroke-width="2"/>
<text x="650" y="70" font-size="15" class="tb" text-anchor="middle">ได้ w ที่ดี</text><text x="650" y="94" font-size="14" text-anchor="middle">เก็บไว้ใช้ต่อ</text>
<path d="M650,112 V146 H380 V178" class="nofill s3" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#L00-tp-ar3)"/>
<text x="515" y="140" font-size="14" class="tb" text-anchor="middle">นำ w ที่เรียนได้ไปใช้</text>
<rect x="20" y="182" width="180" height="70" rx="12" class="f6l s6" stroke-width="2"/>
<text x="110" y="212" font-size="15" class="tb" text-anchor="middle">คนใหม่: มีแต่ x</text><text x="110" y="236" font-size="14" text-anchor="middle">ยังไม่รู้ y</text>
<rect x="290" y="182" width="180" height="70" rx="12" class="f2l s2" stroke-width="2"/>
<text x="380" y="212" font-size="15" class="tb" text-anchor="middle">โมเดล (w ชุดเดิม)</text><text x="380" y="236" font-size="14" text-anchor="middle">คำนวณ z → ŷ</text>
<rect x="560" y="182" width="180" height="70" rx="12" class="f4l s4" stroke-width="2"/>
<text x="650" y="212" font-size="15" class="tb" text-anchor="middle">คำทาย ŷ</text><text x="650" y="236" font-size="14" text-anchor="middle">เช่น +1 = เสี่ยง</text>
</svg>`,
  caption: 'ฝึก = ใช้ x กับ y หาค่า w · ใช้งาน = เอา w ที่ได้ไปคำนวณกับ x ของคนใหม่ (ไม่มีการปรับ w แล้ว)'
},

/* ============ 3) เวกเตอร์ ============ */
{
  id: 'vec-dist', section: 'vectors', pos: 'top', kind: 'ทีละขั้น', title: 'เวกเตอร์ = รายการตัวเลข = จุด/ลูกศร → วัดระยะได้ 2 แบบ',
  html: `<div class="stepper"><svg viewBox="0 0 760 390" role="img" aria-label="เวกเตอร์และระยะทาง">
<defs><marker id="L00-vd-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f6"/></marker>
<marker id="L00-vd-ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker></defs>
<g class="grid" stroke-width="1">
<line x1="92" y1="40" x2="92" y2="360"/><line x1="124" y1="40" x2="124" y2="360"/><line x1="156" y1="40" x2="156" y2="360"/><line x1="188" y1="40" x2="188" y2="360"/><line x1="220" y1="40" x2="220" y2="360"/>
<line x1="252" y1="40" x2="252" y2="360"/><line x1="284" y1="40" x2="284" y2="360"/><line x1="316" y1="40" x2="316" y2="360"/><line x1="348" y1="40" x2="348" y2="360"/><line x1="380" y1="40" x2="380" y2="360"/>
<line x1="60" y1="328" x2="380" y2="328"/><line x1="60" y1="296" x2="380" y2="296"/><line x1="60" y1="264" x2="380" y2="264"/><line x1="60" y1="232" x2="380" y2="232"/><line x1="60" y1="200" x2="380" y2="200"/>
<line x1="60" y1="168" x2="380" y2="168"/><line x1="60" y1="136" x2="380" y2="136"/><line x1="60" y1="104" x2="380" y2="104"/><line x1="60" y1="72" x2="380" y2="72"/><line x1="60" y1="40" x2="380" y2="40"/></g>
<line x1="60" y1="360" x2="394" y2="360" class="ln" stroke-width="1.5" marker-end="url(#L00-vd-ax)"/>
<line x1="60" y1="360" x2="60" y2="28" class="ln" stroke-width="1.5" marker-end="url(#L00-vd-ax)"/>
<g font-size="13" class="tm" text-anchor="middle"><text class="tm" x="60" y="380">0</text><text class="tm" x="124" y="380">2</text><text class="tm" x="188" y="380">4</text><text class="tm" x="252" y="380">6</text><text class="tm" x="316" y="380">8</text><text class="tm" x="380" y="380">10</text></g>
<g font-size="13" class="tm" text-anchor="end"><text class="tm" x="52" y="301">2</text><text class="tm" x="52" y="237">4</text><text class="tm" x="52" y="173">6</text><text class="tm" x="52" y="109">8</text><text class="tm" x="52" y="45">10</text></g>
<text x="402" y="366" font-size="15" class="tm">x₁</text><text x="68" y="30" font-size="15" class="tm">x₂</text>
<g data-only="1"><rect x="120" y="140" width="200" height="110" rx="14" class="f7l"/>
<text x="220" y="178" font-size="22" class="tb" text-anchor="middle">[1, 2] และ [8, 8]</text>
<text x="220" y="210" font-size="15" text-anchor="middle">ตัวเลขแค่นี้</text><text x="220" y="232" font-size="15" text-anchor="middle">วาดเป็นภาพได้ไหม?</text></g>
<g data-only="2" class="s1" stroke-width="2" stroke-dasharray="5 4"><line x1="92" y1="360" x2="92" y2="296"/><line x1="60" y1="296" x2="92" y2="296"/><line x1="316" y1="360" x2="316" y2="104"/><line x1="60" y1="104" x2="316" y2="104"/></g>
<g data-s="3" class="s6" stroke-width="2.5" marker-end="url(#L00-vd-ar)"><line x1="60" y1="360" x2="89" y2="302"/><line x1="60" y1="360" x2="311" y2="109"/></g>
<path data-s="4" d="M92,296 H316 V104" class="nofill s2" stroke-width="4" stroke-dasharray="10 6"/>
<g data-s="4" font-size="17" class="tb f2"><text x="204" y="320" text-anchor="middle" style="fill:var(--c2)">7</text><text x="326" y="208" style="fill:var(--c2)">6</text></g>
<line data-s="5" x1="92" y1="296" x2="316" y2="104" class="s4" stroke-width="4"/>
<text data-s="5" x="196" y="190" font-size="17" class="tb" text-anchor="end" style="fill:var(--c4);paint-order:stroke;stroke:var(--vbg);stroke-width:5px;stroke-linejoin:round">≈ 9.22</text>
<g data-s="2"><circle cx="92" cy="296" r="7" class="f1"/><circle cx="316" cy="104" r="7" class="f1"/>
<text x="100" y="326" font-size="15" class="tb" style="paint-order:stroke;stroke:var(--vbg);stroke-width:5px;stroke-linejoin:round">A (1, 2)</text>
<text x="306" y="90" font-size="15" class="tb" text-anchor="end" style="paint-order:stroke;stroke:var(--vbg);stroke-width:5px;stroke-linejoin:round">D (8, 8)</text></g>
<rect x="420" y="24" width="330" height="58" rx="12" class="f1l"/>
<text x="436" y="48" font-size="16" class="tb">A = [1, 2] · D = [8, 8]</text><text x="436" y="72" font-size="14">เวกเตอร์ = รายการตัวเลขเรียงกัน</text>
<g data-s="2"><rect x="420" y="94" width="330" height="58" rx="12" class="f6l"/>
<text x="436" y="118" font-size="15" class="tb">ตัวเลข 1 ตัว = พิกัด 1 แกน</text><text x="436" y="142" font-size="14">A: ไปขวา 1 ขึ้น 2 → ได้ “จุด”</text></g>
<g data-s="3"><rect x="420" y="164" width="330" height="58" rx="12" class="f6l"/>
<text x="436" y="188" font-size="15" class="tb">หรือมองเป็นลูกศรจากจุด 0</text><text x="436" y="212" font-size="14">ลูกศรบอก ทิศทาง + ความยาว</text></g>
<g data-s="4"><rect x="420" y="234" width="330" height="58" rx="12" class="f2l"/>
<text x="436" y="258" font-size="15" class="tb">Manhattan = 7 + 6 = 13</text><text x="436" y="282" font-size="14">เดินตามถนนตาราง (แบบแท็กซี่)</text></g>
<g data-s="5"><rect x="420" y="304" width="330" height="58" rx="12" class="f4l"/>
<text x="436" y="328" font-size="15" class="tb">Euclid = √(7² + 6²) = √85 ≈ 9.22</text><text x="436" y="352" font-size="14">นกบินตรง · K-Means (L09) ใช้ระยะนี้</text></g>
</svg><ol class="caps">
<li>เวกเตอร์ = รายการตัวเลขเรียงกัน เช่น A = [1, 2] และ D = [8, 8] (ตัวอย่างจากสไลด์ L09 หน้า 10)</li>
<li>ตัวเลขแต่ละตัว = พิกัด 1 แกน → A คือจุดที่ไปขวา 1 ขึ้น 2 · D อยู่ที่ (8, 8)</li>
<li>มองเป็น “ลูกศร” จากจุด 0 ก็ได้ — ลูกศรบอกทั้งทิศทางและความยาว</li>
<li>ระยะ <b>Manhattan</b> = เดินตามถนนแบบตาราง: |8 − 1| + |8 − 2| = 7 + 6 = <b>13</b></li>
<li>ระยะ <b>Euclid</b> = ระยะเส้นตรง (พีทาโกรัส): √(7² + 6²) = √85 ≈ <b>9.22</b></li>
</ol></div>`,
  caption: 'ข้อมูล 1 แถวที่มี d feature = เวกเตอร์ d ตัวเลข = จุด 1 จุดในพื้นที่ d มิติ · “ใกล้กัน” = คล้ายกัน (หัวใจของ K-Means L09)'
},
{
  id: 'cosine', section: 'vectors', pos: 'top', kind: 'ภาพนิ่ง', title: 'Cosine similarity: วัด “ทิศทาง” ว่าชี้ไปทางเดียวกันแค่ไหน',
  html: `<svg viewBox="0 0 760 360" role="img" aria-label="cosine similarity">
<defs><marker id="L00-cs-a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f1"/></marker>
<marker id="L00-cs-a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f3"/></marker>
<marker id="L00-cs-a5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f5"/></marker></defs>
<path d="M106.4,199.5 A60,60 0 0,0 100.5,187.7" class="nofill s7" stroke-width="4"/>
<line x1="50" y1="220" x2="217" y2="159" class="s1" stroke-width="3.5" marker-end="url(#L00-cs-a1)"/>
<line x1="50" y1="220" x2="199" y2="125" class="s3" stroke-width="3.5" marker-end="url(#L00-cs-a3)"/>
<circle cx="50" cy="220" r="4" class="tm"/>
<text x="226" y="166" font-size="15" class="tb">แมว</text><text x="208" y="120" font-size="15" class="tb">หมา</text>
<text x="140" y="260" font-size="15" class="tb" text-anchor="middle">cos(แมว, หมา) = 0.98</text>
<text x="140" y="284" font-size="14" text-anchor="middle">ทิศเกือบเดียวกัน → คล้ายกัน</text>
<path d="M347,202.9 A50,50 0 0,0 297.1,170.1" class="nofill s7" stroke-width="4"/>
<line x1="300" y1="220" x2="467" y2="159" class="s1" stroke-width="3.5" marker-end="url(#L00-cs-a1)"/>
<line x1="300" y1="220" x2="290" y2="43" class="s5" stroke-width="3.5" marker-end="url(#L00-cs-a5)"/>
<circle cx="300" cy="220" r="4" class="tm"/>
<text x="476" y="166" font-size="15" class="tb">แมว</text><text x="282" y="42" font-size="15" class="tb" text-anchor="end">รถ</text>
<text x="400" y="260" font-size="15" class="tb" text-anchor="middle">cos(แมว, รถ) = 0.29</text>
<text x="400" y="284" font-size="14" text-anchor="middle">มุมกว้าง เกือบตั้งฉาก → ไม่ค่อยเกี่ยว</text>
<rect x="540" y="20" width="210" height="240" rx="14" class="f7l"/>
<text x="556" y="48" font-size="15" class="tb">สูตร</text>
<text x="556" y="76" font-size="15">cos = u·v / (‖u‖ ‖v‖)</text>
<text x="556" y="108" font-size="14">ดูแค่ “ทิศทาง”</text><text x="556" y="130" font-size="14">ไม่สนความยาวลูกศร</text>
<text x="556" y="168" font-size="15" class="tb">ใช้ใน</text>
<text x="556" y="194" font-size="14">L12: หาคำที่ความหมายใกล้กัน</text><text x="556" y="218" font-size="14">L13: RAG ค้นเอกสาร</text>
<text x="556" y="242" font-size="14">L09: cosine distance = 1 − cos</text>
<line x1="60" y1="322" x2="700" y2="322" class="ln" stroke-width="2"/>
<g class="ln" stroke-width="2"><line x1="60" y1="314" x2="60" y2="330"/><line x1="380" y1="314" x2="380" y2="330"/><line x1="700" y1="314" x2="700" y2="330"/></g>
<g font-size="14"><text x="60" y="350">−1 ชี้ตรงข้าม</text><text x="380" y="350" text-anchor="middle">0 ตั้งฉาก</text><text x="700" y="350" text-anchor="end">1 ทิศเดียวกัน</text></g>
<circle cx="472.8" cy="322" r="7" class="f5"/><circle cx="693.6" cy="322" r="7" class="f3"/>
<text x="472.8" y="306" font-size="14" class="tb" text-anchor="middle">รถ 0.29</text><text x="680" y="306" font-size="14" class="tb" text-anchor="middle">หมา 0.98</text>
</svg>`,
  caption: 'ตัวเลขจากตาราง embedding สไลด์ L12 หน้า 10: cos(cat, dog) = 1.22 / (1.21 × 1.03) = 0.98 · cos(cat, car) = 0.33 / (1.21 × 0.95) = 0.29 (ของจริงเป็น 3 มิติ ภาพนี้วาดย่อเหลือ 2 มิติ)'
},

/* ============ 4) ผลรวมถ่วงน้ำหนัก ============ */
{
  id: 'exam-score', section: 'weighted-sum', pos: 'top', kind: 'ทีละขั้น', title: 'ผลรวมถ่วงน้ำหนัก = วิธีคิดเกรดรวมจากหลายส่วน',
  html: `<div class="stepper"><svg viewBox="0 0 760 340" role="img" aria-label="ผลรวมถ่วงน้ำหนักคะแนนสอบ">
<g font-size="15" class="tb" text-anchor="middle"><text x="80" y="34">ส่วน</text><text data-s="1" x="210" y="34" style="fill:var(--c1)">คะแนน x</text><text data-s="2" x="330" y="34" style="fill:var(--c2)">น้ำหนัก w</text><text data-s="3" x="450" y="34" style="fill:var(--c3)">x × w</text></g>
<g font-size="15" text-anchor="middle">
<rect x="20" y="60" width="120" height="48" rx="10" class="f6l"/><text x="80" y="90">กลางภาค</text>
<rect x="20" y="126" width="120" height="48" rx="10" class="f6l"/><text x="80" y="156">ปลายภาค</text>
<rect x="20" y="192" width="120" height="48" rx="10" class="f6l"/><text x="80" y="222">การบ้าน</text></g>
<g font-size="19" class="tb" text-anchor="middle">
<rect x="170" y="60" width="80" height="48" rx="10" class="f1l s1" stroke-width="2"/><text x="210" y="91">70</text>
<rect x="170" y="126" width="80" height="48" rx="10" class="f1l s1" stroke-width="2"/><text x="210" y="157">80</text>
<rect x="170" y="192" width="80" height="48" rx="10" class="f1l s1" stroke-width="2"/><text x="210" y="223">90</text>
<g data-s="2"><text x="272" y="91" class="tm">×</text><text x="272" y="157" class="tm">×</text><text x="272" y="223" class="tm">×</text>
<rect x="290" y="60" width="80" height="48" rx="10" class="f2l s2" stroke-width="2"/><text x="330" y="91">0.3</text>
<rect x="290" y="126" width="80" height="48" rx="10" class="f2l s2" stroke-width="2"/><text x="330" y="157">0.5</text>
<rect x="290" y="192" width="80" height="48" rx="10" class="f2l s2" stroke-width="2"/><text x="330" y="223">0.2</text></g>
<g data-s="3"><text x="390" y="91" class="tm">=</text><text x="390" y="157" class="tm">=</text><text x="390" y="223" class="tm">=</text>
<rect x="410" y="60" width="80" height="48" rx="10" class="f3l s3" stroke-width="2"/><text x="450" y="91">21</text>
<rect x="410" y="126" width="80" height="48" rx="10" class="f3l s3" stroke-width="2"/><text x="450" y="157">40</text>
<rect x="410" y="192" width="80" height="48" rx="10" class="f3l s3" stroke-width="2"/><text x="450" y="223">18</text></g></g>
<g data-s="4">
<rect x="560" y="245.4" width="80" height="54.6" class="f1"/><rect x="560" y="141.4" width="80" height="104" class="f2"/><rect x="560" y="94.6" width="80" height="46.8" class="f6"/>
<g font-size="16" class="tw tb" text-anchor="middle"><text class="tw" x="600" y="278">21</text><text class="tw" x="600" y="199">40</text><text class="tw" x="600" y="124">18</text></g>
<line x1="540" y1="300" x2="660" y2="300" class="ln" stroke-width="2"/>
<text x="600" y="80" font-size="19" class="tb" text-anchor="middle">รวม = 79</text>
<text x="20" y="290" font-size="17" class="tb">0.3×70 + 0.5×80 + 0.2×90 = 79</text>
<text x="20" y="320" font-size="15">“คูณทีละคู่แล้วบวก” = dot product (w·x)</text></g>
</svg><ol class="caps">
<li>คะแนนดิบ 3 ส่วนเรียงเป็นเวกเตอร์ <b>x = (70, 80, 90)</b></li>
<li>แต่ละส่วนสำคัญไม่เท่ากัน → ให้ <b>น้ำหนัก w = (0.3, 0.5, 0.2)</b> (ส่วนที่สำคัญได้น้ำหนักมาก)</li>
<li>คูณเป็นคู่ ๆ: 70×0.3 = 21 · 80×0.5 = 40 · 90×0.2 = 18</li>
<li>บวกรวม = <b>79</b> → การ “คูณทีละคู่แล้วบวก” นี้คือ <b>dot product</b> หรือ <b>ผลรวมถ่วงน้ำหนัก</b> เขียนว่า w·x</li>
</ol></div>`,
  caption: 'Perceptron ก็คิดแบบนี้เป๊ะ: เหมือนกรรมการที่ให้น้ำหนักแต่ละข้อมูลไม่เท่ากัน แล้วรวมเป็นคะแนนเดียว'
},
{
  id: 'neuron-sum', section: 'weighted-sum', pos: 'top', kind: 'ทีละขั้น', title: 'z = w·x + b กับข้อมูลจริง: ผู้ป่วยแถวที่ 1 (สไลด์ L08)',
  html: `<div class="stepper"><svg viewBox="0 0 760 330" role="img" aria-label="นิวรอนคำนวณ z">
<defs><marker id="L00-ns-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker></defs>
<text x="750" y="26" font-size="14" class="tm" text-anchor="end">ผู้ป่วยแถวที่ 1 · สไลด์ L08 หน้า 13</text>
<g class="ln v-flow" stroke-width="3"><line x1="114" y1="90" x2="370" y2="172"/><line x1="114" y1="200" x2="368" y2="192"/><line x1="108" y1="305" x2="372" y2="212"/></g>
<circle cx="80" cy="90" r="34" class="f1l s1" stroke-width="2"/><text x="80" y="96" font-size="17" class="tb" text-anchor="middle">148</text>
<text x="80" y="46" font-size="14" class="tm" text-anchor="middle">x₁ น้ำตาล</text>
<circle cx="80" cy="200" r="34" class="f1l s1" stroke-width="2"/><text x="80" y="206" font-size="17" class="tb" text-anchor="middle">33.6</text>
<text x="80" y="156" font-size="14" class="tm" text-anchor="middle">x₂ BMI</text>
<circle cx="80" cy="305" r="24" class="f7l s7" stroke-width="2"/><text x="80" y="311" font-size="17" class="tb" text-anchor="middle">1</text>
<text x="80" y="270" font-size="14" class="tm" text-anchor="middle">bias</text>
<g font-size="15" class="tb" style="paint-order:stroke;stroke:var(--vbg);stroke-width:5px;stroke-linejoin:round">
<text x="170" y="104">w₁ = 0.5</text><text x="170" y="184">w₂ = 0.5</text><text x="170" y="300">b = 0.5</text></g>
<g data-s="2" font-size="15" class="tb" text-anchor="middle">
<rect x="272" y="137" width="56" height="26" rx="13" class="f1"/><text x="300" y="155" class="tw">74</text>
<rect x="272" y="181" width="56" height="26" rx="13" class="f1"/><text x="300" y="199" class="tw">16.8</text>
<rect x="272" y="224" width="56" height="26" rx="13" class="f2"/><text x="300" y="242" class="tw">0.5</text></g>
<circle cx="420" cy="190" r="52" class="f2l s2" stroke-width="2.5"/>
<text data-only="1,2" x="420" y="202" font-size="34" class="tb" text-anchor="middle">Σ</text>
<g data-s="3"><text x="420" y="182" font-size="16" text-anchor="middle">z =</text><text x="420" y="210" font-size="22" class="tb" text-anchor="middle">91.3</text>
<text x="420" y="270" font-size="15" class="tb" text-anchor="middle">74 + 16.8 + 0.5 = 91.3</text></g>
<g data-s="4">
<line x1="474" y1="190" x2="514" y2="190" class="ln" stroke-width="2.5" marker-end="url(#L00-ns-ar)"/>
<rect x="520" y="150" width="100" height="80" rx="12" class="f6l s6" stroke-width="2"/>
<line x1="532" y1="214" x2="608" y2="214" class="ln"/><path d="M534,214 H570 V170 H606" class="nofill s6" stroke-width="3"/>
<text x="570" y="252" font-size="14" class="tb" text-anchor="middle">z ≥ 0 → +1</text>
<line x1="622" y1="190" x2="650" y2="190" class="ln" stroke-width="2.5" marker-end="url(#L00-ns-ar)"/>
<circle cx="690" cy="190" r="36" class="f3"/><text x="690" y="196" font-size="16" class="tw tb" text-anchor="middle">ŷ = +1</text>
<text x="690" y="252" font-size="14" class="tb" text-anchor="middle">เฉลย y = +1 ✓</text><text x="690" y="274" font-size="14" class="tm" text-anchor="middle">ทายถูก ไม่ต้องปรับ</text></g>
</svg><ol class="caps">
<li>นิวรอน 1 ตัว รับ x₁ = 148, x₂ = 33.6 และ bias (ป้อนเลข 1 เสมอ) · ทุกเส้นมีน้ำหนัก 0.5 (ค่าเริ่มต้นในสไลด์)</li>
<li>คูณตามเส้น: 148×0.5 = <b>74</b> · 33.6×0.5 = <b>16.8</b> · 1×0.5 = <b>0.5</b></li>
<li>บวกรวมในตัวนิวรอน: <b>z = 74 + 16.8 + 0.5 = 91.3</b> (ตรงกับสไลด์ L08 หน้า 13)</li>
<li>ส่งผ่านฟังก์ชันขั้นบันได: z ≥ 0 → <b>ŷ = +1</b> ตรงกับเฉลย y = +1 จึงไม่ต้องปรับ w</li>
</ol></div>`,
  caption: 'สูตรเต็ม: z = w₁x₁ + w₂x₂ + b = w·x + b · ตัว b (bias) ช่วยเลื่อนเกณฑ์ เหมือน “คะแนนพื้นฐาน” ที่บวกให้ทุกคน'
},
{
  id: 'same-op', section: 'weighted-sum', pos: 'bottom', kind: 'ภาพนิ่ง', title: 'การคำนวณเดียวที่ซ่อนอยู่ในทุกบท: คูณทีละคู่แล้วบวก',
  html: `<svg viewBox="0 0 760 330" role="img" aria-label="dot product ในทุกบท">
<g class="ln v-flow" stroke-width="2"><line x1="250" y1="56" x2="292" y2="132"/><line x1="250" y1="170" x2="284" y2="170"/><line x1="250" y1="284" x2="292" y2="208"/>
<line x1="510" y1="56" x2="468" y2="132"/><line x1="510" y1="170" x2="476" y2="170"/><line x1="510" y1="284" x2="468" y2="208"/></g>
<rect x="278" y="120" width="204" height="100" rx="18" class="nofill s1 v-pulse" stroke-width="3"/>
<rect x="286" y="128" width="188" height="84" rx="14" class="f1"/>
<text x="380" y="166" font-size="24" class="tw tb" text-anchor="middle">Σ wᵢ xᵢ</text>
<text x="380" y="196" font-size="14" class="tw" text-anchor="middle">คูณทีละคู่ แล้วบวก</text>
<rect x="20" y="20" width="230" height="72" rx="12" class="f1l"/><text x="36" y="48" font-size="15" class="tb">L08 · นิวรอน</text><text x="36" y="76" font-size="15">z = w·x + b</text>
<rect x="20" y="134" width="230" height="72" rx="12" class="f3l"/><text x="36" y="162" font-size="15" class="tb">L09 · ระยะทาง</text><text x="36" y="190" font-size="15">‖x−μ‖² = (x−μ)·(x−μ)</text>
<rect x="20" y="248" width="230" height="72" rx="12" class="f2l"/><text x="36" y="276" font-size="15" class="tb">L10 · Policy</text><text x="36" y="304" font-size="15">z = w·s แล้วเข้า σ(z)</text>
<rect x="510" y="20" width="230" height="72" rx="12" class="f6l"/><text x="526" y="48" font-size="15" class="tb">L11 · Convolution</text><text x="526" y="76" font-size="15">9 คู่ คูณแล้วบวก = −19</text>
<rect x="510" y="134" width="230" height="72" rx="12" class="f4l"/><text x="526" y="162" font-size="15" class="tb">L12 · Attention</text><text x="526" y="190" font-size="15">คะแนน = q·k</text>
<rect x="510" y="248" width="230" height="72" rx="12" class="f5l"/><text x="526" y="276" font-size="15" class="tb">L13 · RAG</text><text x="526" y="304" font-size="15">cos(q, c) = q·c / ‖q‖‖c‖</text>
</svg>`,
  caption: 'ถ้าคล่อง “คูณทีละคู่แล้วบวก” แค่อย่างเดียว ก็คำนวณได้ทั้งนิวรอน (L08), kernel 3×3 ของ CNN (L11 หน้า 7 ได้ −19), คะแนน attention (L12) และความคล้ายใน RAG (L13)'
},

/* ============ 5) ฟังก์ชันและความชัน ============ */
{
  id: 'slope-hill', section: 'functions-slope', pos: 'top', kind: 'ภาพนิ่ง', title: 'ความชัน (slope / derivative) = เนินตรงนี้เอียงไปทางไหน แค่ไหน',
  html: `<svg viewBox="0 0 760 362" role="img" aria-label="ความชันบนกราฟ loss">
<defs><marker id="L00-sh-ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker>
<marker id="L00-sh-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f3"/></marker></defs>
<line x1="60" y1="320" x2="672" y2="320" class="ln" stroke-width="1.5" marker-end="url(#L00-sh-ax)"/>
<line x1="70" y1="330" x2="70" y2="30" class="ln" stroke-width="1.5" marker-end="url(#L00-sh-ax)"/>
<text x="80" y="36" font-size="15" class="tm">Loss L(w)</text><text x="676" y="325" font-size="15" class="tm">w</text>
<path d="M80.0,64.0 L94.0,89.0 L108.0,112.6 L122.0,135.0 L136.0,156.2 L150.0,176.0 L164.0,194.6 L178.0,211.8 L192.0,227.8 L206.0,242.6 L220.0,256.0 L234.0,268.2 L248.0,279.0 L262.0,288.6 L276.0,297.0 L290.0,304.0 L304.0,309.8 L318.0,314.2 L332.0,317.4 L346.0,319.4 L360.0,320.0 L374.0,319.4 L388.0,317.4 L402.0,314.2 L416.0,309.8 L430.0,304.0 L444.0,297.0 L458.0,288.6 L472.0,279.0 L486.0,268.2 L500.0,256.0 L514.0,242.6 L528.0,227.8 L542.0,211.8 L556.0,194.6 L570.0,176.0 L584.0,156.2 L598.0,135.0 L612.0,112.6 L626.0,89.0 L640.0,64.0" class="nofill s1" stroke-width="3.5"/>
<line x1="129" y1="156" x2="241" y2="284" class="s5" stroke-width="3"/><circle cx="185" cy="220" r="7" class="f5"/>
<line x1="479" y1="284" x2="591" y2="156" class="s5" stroke-width="3"/><circle cx="535" cy="220" r="7" class="f5"/>
<line x1="304" y1="320" x2="416" y2="320" class="s3" stroke-width="4"/><circle cx="360" cy="320" r="7" class="f3"/>
<text x="118" y="76" font-size="15" class="tb" style="fill:var(--c5)">ความชัน &lt; 0 (ลงทางขวา)</text><text x="118" y="98" font-size="14">→ ควรขยับ w ไปทางขวา</text>
<text x="602" y="76" font-size="15" class="tb" text-anchor="end" style="fill:var(--c5)">ความชัน &gt; 0 (ขึ้นทางขวา)</text><text x="602" y="98" font-size="14" text-anchor="end">← ควรขยับ w ไปทางซ้าย</text>
<rect x="282" y="140" width="156" height="58" rx="12" class="f7l"/>
<text x="360" y="164" font-size="15" class="tb" text-anchor="middle">gradient = ความชัน</text><text x="360" y="188" font-size="14" text-anchor="middle">เดิน “สวน” เสมอ</text>
<text x="360" y="262" font-size="15" class="tb" text-anchor="middle" style="fill:var(--c3)">ความชัน = 0</text><text x="360" y="284" font-size="14" text-anchor="middle">ก้นหุบ = loss ต่ำสุด</text>
<line x1="150" y1="344" x2="222" y2="344" class="s3" stroke-width="3" marker-end="url(#L00-sh-g)"/>
<line x1="570" y1="344" x2="498" y2="344" class="s3" stroke-width="3" marker-end="url(#L00-sh-g)"/>
<text x="360" y="350" font-size="14" class="tm" text-anchor="middle">w = ค่าที่โมเดลปรับได้</text>
</svg>`,
  caption: 'นึกถึงการยืนบนเนินในหมอก: เท้าบอกได้แค่ว่า “ตรงนี้เอียงขึ้นทางไหน” (ความชัน) → อยากลงก็ก้าวไปทางตรงข้าม · ที่ก้นหุบพื้นราบ ความชัน = 0'
},
{
  id: 'gd-ball', section: 'functions-slope', pos: 'top', kind: 'ทีละขั้น', title: 'Gradient descent: เดินลงเขาในหมอกทีละก้าว (η = 0.25)',
  html: `<div class="stepper"><svg viewBox="0 0 760 350" role="img" aria-label="gradient descent ทีละก้าว">
<defs><marker id="L00-gd-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f2"/></marker>
<marker id="L00-gd-ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker></defs>
<line x1="40" y1="320" x2="462" y2="320" class="ln" stroke-width="1.5" marker-end="url(#L00-gd-ax)"/>
<line x1="50" y1="330" x2="50" y2="44" class="ln" stroke-width="1.5" marker-end="url(#L00-gd-ax)"/>
<text x="58" y="50" font-size="15" class="tm">Loss</text><text x="466" y="325" font-size="15" class="tm">w</text>
<text x="66" y="100" font-size="15" class="tb">L(w) = (w − 3)²</text>
<g font-size="13" class="tm" text-anchor="middle"><text class="tm" x="60" y="338">0</text><text class="tm" x="160" y="338">2</text><text class="tm" x="210" y="338">3</text><text class="tm" x="260" y="338">4</text><text class="tm" x="310" y="338">5</text><text class="tm" x="410" y="338">7</text></g>
<path d="M50.0,207.4 L60.3,221.3 L70.5,234.4 L80.8,246.5 L91.1,257.7 L101.3,268.0 L111.6,277.4 L121.8,285.8 L132.1,293.3 L142.4,299.9 L152.6,305.5 L162.9,310.2 L173.2,314.0 L183.4,316.9 L193.7,318.8 L203.9,319.8 L214.2,319.9 L224.5,319.1 L234.7,317.3 L245.0,314.6 L255.3,311.0 L265.5,306.4 L275.8,301.0 L286.1,294.6 L296.3,287.2 L306.6,279.0 L316.8,269.8 L327.1,259.7 L337.4,248.6 L347.6,236.7 L357.9,223.8 L368.2,209.9 L378.4,195.2 L388.7,179.5 L398.9,162.9 L409.2,145.4 L419.5,126.9 L429.7,107.5 L440.0,87.2" class="nofill s1" stroke-width="3.5"/>
<g data-only="1" class="s5" stroke-width="2.5"><line x1="385" y1="188" x2="435" y2="100"/></g>
<g data-only="2" class="s5" stroke-width="2.5"><line x1="285" y1="298" x2="335" y2="254"/></g>
<g data-only="3" class="s5" stroke-width="2.5"><line x1="235" y1="320" x2="285" y2="298"/></g>
<g data-only="4" class="s5" stroke-width="2.5"><line x1="210" y1="322.5" x2="260" y2="311.5"/></g>
<g data-only="5" class="s5" stroke-width="2.5"><line x1="197.5" y1="322" x2="247.5" y2="316.5"/></g>
<g class="nofill s2" stroke-width="2.5" marker-end="url(#L00-gd-ar)">
<path data-s="2" d="M404,124 Q356,70 316,256"/><path data-s="3" d="M306,256 Q284,232 264,290"/><path data-s="4" d="M256,290 Q246,276 239,299"/><path data-s="5" d="M231,299 Q228,288 225,301"/></g>
<g class="f1l s1" stroke-width="2"><circle data-s="2" cx="410" cy="133" r="10"/><circle data-s="3" cx="310" cy="265" r="10"/><circle data-s="4" cx="260" cy="298" r="10"/><circle data-s="5" cx="235" cy="306" r="10"/></g>
<g class="f1 s1" stroke-width="2"><circle data-only="1" cx="410" cy="133" r="11"/><circle data-only="2" cx="310" cy="265" r="11"/><circle data-only="3" cx="260" cy="298" r="11"/><circle data-only="4" cx="235" cy="306" r="11"/><circle data-only="5" cx="222.5" cy="308" r="11"/></g>
<g font-size="15" text-anchor="middle">
<rect x="480" y="30" width="270" height="34" rx="8" class="f1l"/>
<text x="505" y="53" class="tb">ก้าว</text><text x="565" y="53" class="tb">w</text><text x="635" y="53" class="tb">ความชัน</text><text x="710" y="53" class="tb">Loss</text>
<rect data-only="1" x="480" y="66" width="270" height="34" rx="8" class="f7l"/><rect data-only="2" x="480" y="102" width="270" height="34" rx="8" class="f7l"/><rect data-only="3" x="480" y="138" width="270" height="34" rx="8" class="f7l"/><rect data-only="4" x="480" y="174" width="270" height="34" rx="8" class="f7l"/><rect data-only="5" x="480" y="210" width="270" height="34" rx="8" class="f7l"/>
<g><text x="505" y="89">0</text><text x="565" y="89">7</text><text x="635" y="89">8</text><text x="710" y="89">16</text></g>
<g data-s="2"><text x="505" y="125">1</text><text x="565" y="125">5</text><text x="635" y="125">4</text><text x="710" y="125">4</text></g>
<g data-s="3"><text x="505" y="161">2</text><text x="565" y="161">4</text><text x="635" y="161">2</text><text x="710" y="161">1</text></g>
<g data-s="4"><text x="505" y="197">3</text><text x="565" y="197">3.5</text><text x="635" y="197">1</text><text x="710" y="197">0.25</text></g>
<g data-s="5"><text x="505" y="233">4</text><text x="565" y="233">3.25</text><text x="635" y="233">0.5</text><text x="710" y="233">0.06</text></g></g>
<rect x="480" y="262" width="270" height="62" rx="12" class="f2l"/>
<text x="496" y="288" font-size="15" class="tb">w ใหม่ = w − η × ความชัน</text>
<text x="496" y="312" font-size="14">η = 0.25 · ความชัน = 2(w − 3)</text>
</svg><ol class="caps">
<li>เริ่มที่ w = 7 (loss = 16) · ในหมอกมองไม่เห็นก้นหุบ เห็นแค่ “ความชันใต้เท้า” = 2(7 − 3) = <b>8</b> (ชันขึ้นทางขวา)</li>
<li>ก้าวสวนความชัน: w = 7 − 0.25×8 = <b>5</b> → loss เหลือ 4</li>
<li>w = 5 − 0.25×4 = <b>4</b> → loss = 1 · ความชันน้อยลง ก้าวก็สั้นลงเอง</li>
<li>w = 4 − 0.25×2 = <b>3.5</b> → loss = 0.25</li>
<li>w = 3.5 − 0.25×1 = <b>3.25</b> → เกือบถึงก้นหุบ w = 3 แล้ว · นี่คือ gradient descent ที่ L08 ใช้ปรับ w</li>
</ol></div>`,
  caption: 'ลูกบอลสีน้ำเงิน = ตำแหน่งปัจจุบัน · เส้นแดง = ความชันใต้เท้า · ลูกจาง = รอยเท้าที่ผ่านมา · ในโมเดลจริงทำแบบนี้กับ w หลายพัน/ล้านตัวพร้อมกัน'
},
{
  id: 'lr-compare', section: 'functions-slope', pos: 'bottom', kind: 'เคลื่อนไหว', title: 'Learning rate (η) = ความยาวก้าว: เล็กไป · พอดี · ใหญ่ไป',
  html: `<svg viewBox="0 0 760 300" role="img" aria-label="เปรียบเทียบ learning rate">
<g>
<rect x="6" y="6" width="238" height="286" rx="14" class="f7l"/>
<text x="125" y="32" font-size="15" class="tb" text-anchor="middle">η เล็กไป (0.05)</text><text x="125" y="54" font-size="14" text-anchor="middle">ก้าวสั้น · ช้ามาก</text>
<line x1="26" y1="252" x2="234" y2="252" class="ln"/>
<path d="M30.0,79.9 L35.5,98.3 L41.1,115.6 L46.6,131.9 L52.2,147.1 L57.8,161.3 L63.3,174.4 L68.8,186.5 L74.4,197.5 L79.9,207.5 L85.5,216.4 L91.0,224.3 L96.6,231.1 L102.1,236.9 L107.7,241.6 L113.2,245.3 L118.8,247.9 L124.3,249.5 L129.9,250.0 L135.4,249.5 L141.0,247.9 L146.6,245.3 L152.1,241.6 L157.6,236.9 L163.2,231.1 L168.8,224.3 L174.3,216.4 L179.8,207.5 L185.4,197.5 L190.9,186.5 L196.5,174.4 L202.0,161.3 L207.6,147.1 L213.2,131.9 L218.7,115.6 L224.2,98.3 L229.8,79.9" class="nofill ln" stroke-width="2.5"/>
<g class="f2"><circle cx="218.7" cy="115.6" r="3.5"/><circle cx="209.8" cy="141.1" r="3.5"/><circle cx="201.8" cy="161.8" r="3.5"/><circle cx="194.6" cy="178.6" r="3.5"/><circle cx="188.2" cy="192.1" r="3.5"/><circle cx="182.3" cy="203.1" r="3.5"/><circle cx="177.1" cy="212.0" r="3.5"/><circle cx="172.4" cy="219.3" r="3.5"/><circle cx="168.1" cy="225.1" r="3.5"/><circle cx="164.3" cy="229.8" r="3.5"/><circle cx="160.9" cy="233.7" r="3.5"/></g>
<circle r="8" class="f2"><animateMotion dur="6s" repeatCount="indefinite" calcMode="linear" values="218.7,107.6;209.8,133.1;201.8,153.8;194.6,170.6;188.2,184.1;182.3,195.1;177.1,204.0;172.4,211.3;168.1,217.1;164.3,221.8;160.9,225.7"/></circle>
<text x="125" y="278" font-size="14" text-anchor="middle">10 ก้าว ยังอยู่ที่ w ≈ 4.4</text></g>
<g transform="translate(250,0)">
<rect x="6" y="6" width="238" height="286" rx="14" class="f3l"/>
<text x="125" y="32" font-size="15" class="tb" text-anchor="middle">η พอดี (0.25)</text><text x="125" y="54" font-size="14" text-anchor="middle">ถึงก้นหุบเร็ว</text>
<line x1="26" y1="252" x2="234" y2="252" class="ln"/>
<path d="M30.0,79.9 L35.5,98.3 L41.1,115.6 L46.6,131.9 L52.2,147.1 L57.8,161.3 L63.3,174.4 L68.8,186.5 L74.4,197.5 L79.9,207.5 L85.5,216.4 L91.0,224.3 L96.6,231.1 L102.1,236.9 L107.7,241.6 L113.2,245.3 L118.8,247.9 L124.3,249.5 L129.9,250.0 L135.4,249.5 L141.0,247.9 L146.6,245.3 L152.1,241.6 L157.6,236.9 L163.2,231.1 L168.8,224.3 L174.3,216.4 L179.8,207.5 L185.4,197.5 L190.9,186.5 L196.5,174.4 L202.0,161.3 L207.6,147.1 L213.2,131.9 L218.7,115.6 L224.2,98.3 L229.8,79.9" class="nofill ln" stroke-width="2.5"/>
<polyline points="218.7,115.6 174.3,216.4 152.1,241.6 141.0,247.9 135.4,249.5 132.7,249.9" class="nofill s3" stroke-width="1.5" stroke-dasharray="4 3"/>
<g class="f3"><circle cx="218.7" cy="115.6" r="3.5"/><circle cx="174.3" cy="216.4" r="3.5"/><circle cx="152.1" cy="241.6" r="3.5"/><circle cx="141.0" cy="247.9" r="3.5"/><circle cx="135.4" cy="249.5" r="3.5"/><circle cx="132.7" cy="249.9" r="3.5"/></g>
<circle r="8" class="f3"><animateMotion dur="6s" repeatCount="indefinite" calcMode="linear" values="218.7,107.6;174.3,208.4;152.1,233.6;141.0,239.9;135.4,241.5;132.7,241.9;132.7,241.9;132.7,241.9"/></circle>
<text x="125" y="278" font-size="14" text-anchor="middle">7 → 5 → 4 → 3.5 → 3.25</text></g>
<g transform="translate(500,0)">
<rect x="6" y="6" width="238" height="286" rx="14" class="f5l"/>
<text x="125" y="32" font-size="15" class="tb" text-anchor="middle">η ใหญ่ไป (1.05)</text><text x="125" y="54" font-size="14" text-anchor="middle">เหวี่ยงออก · loss ระเบิด</text>
<line x1="26" y1="252" x2="234" y2="252" class="ln"/>
<path d="M30.0,79.9 L35.5,98.3 L41.1,115.6 L46.6,131.9 L52.2,147.1 L57.8,161.3 L63.3,174.4 L68.8,186.5 L74.4,197.5 L79.9,207.5 L85.5,216.4 L91.0,224.3 L96.6,231.1 L102.1,236.9 L107.7,241.6 L113.2,245.3 L118.8,247.9 L124.3,249.5 L129.9,250.0 L135.4,249.5 L141.0,247.9 L146.6,245.3 L152.1,241.6 L157.6,236.9 L163.2,231.1 L168.8,224.3 L174.3,216.4 L179.8,207.5 L185.4,197.5 L190.9,186.5 L196.5,174.4 L202.0,161.3 L207.6,147.1 L213.2,131.9 L218.7,115.6 L224.2,98.3 L229.8,79.9" class="nofill ln" stroke-width="2.5"/>
<polyline points="174.3,216.4 81.1,209.3 183.6,200.8 70.8,190.5 194.9,178.0 58.4,162.9 208.6,144.5 43.4,122.4 225.1,95.6" class="nofill s5" stroke-width="1.5" stroke-dasharray="4 3"/>
<g class="f5"><circle cx="174.3" cy="216.4" r="3.5"/><circle cx="81.1" cy="209.3" r="3.5"/><circle cx="183.6" cy="200.8" r="3.5"/><circle cx="70.8" cy="190.5" r="3.5"/><circle cx="194.9" cy="178.0" r="3.5"/><circle cx="58.4" cy="162.9" r="3.5"/><circle cx="208.6" cy="144.5" r="3.5"/><circle cx="43.4" cy="122.4" r="3.5"/><circle cx="225.1" cy="95.6" r="3.5"/></g>
<circle r="8" class="f5"><animateMotion dur="6s" repeatCount="indefinite" calcMode="linear" values="174.3,208.4;81.1,201.3;183.6,192.8;70.8,182.5;194.9,170.0;58.4,154.9;208.6,136.5;43.4,114.4;225.1,87.6"/></circle>
<text x="125" y="278" font-size="14" text-anchor="middle">ยิ่งก้าว ยิ่งเหวี่ยงไกลขึ้น</text></g>
</svg>`,
  caption: 'ใช้ L(w) = (w − 3)² เหมือนภาพก่อนหน้า · สไลด์ L08: η สูงเกินไปทำให้ loss ระเบิด (Lab: cost จาก 43.5 พุ่งไป 5.7×10¹³) · η ต่ำเกินไปลดช้ามาก'
},

/* ============ 6) eˣ ln sigmoid softmax ============ */
{
  id: 'exp-ln', section: 'exp-log-sigmoid-softmax', pos: 'top', kind: 'ภาพนิ่ง', title: 'eˣ กับ ln x: คู่กลับกัน (สะท้อนกันผ่านเส้น y = x)',
  html: `<svg viewBox="0 0 760 350" role="img" aria-label="กราฟ e ยกกำลัง x และ ln x">
<defs><marker id="L00-el-ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker></defs>
<g class="grid" stroke-width="1"><line x1="50" y1="30" x2="50" y2="330"/><line x1="90" y1="30" x2="90" y2="330"/><line x1="130" y1="30" x2="130" y2="330"/><line x1="210" y1="30" x2="210" y2="330"/><line x1="250" y1="30" x2="250" y2="330"/><line x1="290" y1="30" x2="290" y2="330"/><line x1="330" y1="30" x2="330" y2="330"/>
<line x1="50" y1="50" x2="350" y2="50"/><line x1="50" y1="90" x2="350" y2="90"/><line x1="50" y1="130" x2="350" y2="130"/><line x1="50" y1="170" x2="350" y2="170"/><line x1="50" y1="250" x2="350" y2="250"/><line x1="50" y1="290" x2="350" y2="290"/><line x1="50" y1="330" x2="350" y2="330"/></g>
<line x1="40" y1="210" x2="364" y2="210" class="ln" stroke-width="1.5" marker-end="url(#L00-el-ax)"/>
<line x1="170" y1="340" x2="170" y2="22" class="ln" stroke-width="1.5" marker-end="url(#L00-el-ax)"/>
<line x1="50" y1="330" x2="350" y2="30" class="ln" stroke-width="1.5" stroke-dasharray="6 5"/>
<g font-size="13" class="tm" text-anchor="middle"><text class="tm" x="210" y="228">1</text><text class="tm" x="250" y="228">2</text><text class="tm" x="290" y="228">3</text><text class="tm" x="130" y="228">−1</text></g>
<path d="M50.0,208.0 L56.0,207.7 L62.0,207.3 L68.0,206.9 L74.0,206.4 L80.0,205.8 L86.0,205.1 L92.0,204.3 L98.0,203.4 L104.0,202.3 L110.0,201.1 L116.0,199.6 L122.0,198.0 L128.0,196.0 L134.0,193.7 L140.0,191.1 L146.0,188.0 L152.0,184.5 L158.0,180.4 L164.0,175.6 L170.0,170.0 L176.0,163.5 L182.0,156.0 L188.0,147.3 L194.0,137.1 L200.0,125.3 L206.0,111.6 L212.0,95.7 L218.0,77.2 L224.0,55.7 L230.0,30.7" class="nofill s2" stroke-width="3.5"/>
<path d="M172.0,329.8 L176.4,283.0 L180.9,262.0 L185.3,248.3 L189.8,238.1 L194.2,230.0 L198.7,223.3 L203.2,217.5 L207.6,212.5 L212.1,208.0 L216.5,204.0 L220.9,200.3 L225.4,197.0 L229.8,193.9 L234.3,191.0 L238.8,188.3 L243.2,185.8 L247.7,183.5 L252.1,181.2 L256.6,179.1 L261.0,177.1 L265.5,175.2 L269.9,173.4 L274.4,171.6 L278.8,170.0 L283.2,168.4 L287.7,166.8 L292.1,165.3 L296.6,163.9 L301.1,162.5 L305.5,161.2 L309.9,159.9 L314.4,158.7 L318.8,157.4 L323.3,156.3 L327.8,155.1 L332.2,154.0 L336.6,152.9 L341.1,151.9 L345.6,150.8 L350.0,149.8" class="nofill s4" stroke-width="3.5"/>
<g style="paint-order:stroke;stroke:var(--vbg);stroke-width:5px;stroke-linejoin:round">
<text x="238" y="52" font-size="16" class="tb" style="fill:var(--c2)">y = eˣ</text>
<text x="352" y="138" font-size="16" class="tb" text-anchor="end" style="fill:var(--c4)">y = ln x</text>
<text x="96" y="300" font-size="14" class="tm">y = x</text>
<text x="160" y="164" font-size="14" class="tb" text-anchor="end">e⁰ = 1</text>
<text x="204" y="92" font-size="14" class="tb" text-anchor="end">e¹ ≈ 2.718</text>
<text x="218" y="244" font-size="14" class="tb">ln 1 = 0</text>
<text x="290" y="190" font-size="14" class="tb">ln e = 1</text></g>
<circle cx="170" cy="170" r="5" class="f2"/><circle cx="210" cy="101.3" r="5" class="f2"/><circle cx="210" cy="210" r="5" class="f4"/><circle cx="278.7" cy="170" r="5" class="f4"/>
<rect x="400" y="20" width="350" height="90" rx="12" class="f2l"/>
<text x="416" y="46" font-size="15" class="tb">eˣ : โตเร็วขึ้นเรื่อย ๆ และเป็นบวกเสมอ</text>
<text x="416" y="72" font-size="14">e ≈ 2.718 (ค่าคงที่ธรรมชาติ)</text><text x="416" y="96" font-size="14">เหมือนเงินที่ได้ดอกเบี้ยทบต้น</text>
<rect x="400" y="122" width="350" height="90" rx="12" class="f4l"/>
<text x="416" y="148" font-size="15" class="tb">ln x : ย้อนกลับของ eˣ</text>
<text x="416" y="174" font-size="14">ถามว่า “e ยกกำลังเท่าไร จึงได้ x”</text><text x="416" y="198" font-size="14">ln 1 = 0 · ln e = 1 · ln ของเลข &lt; 1 ติดลบ</text>
<rect x="400" y="224" width="350" height="106" rx="12" class="f6l"/>
<text x="416" y="250" font-size="15" class="tb">เจอที่ไหนบ้าง</text>
<text x="416" y="274" font-size="14">eˣ → sigmoid, softmax (L08, L12)</text>
<text x="416" y="298" font-size="14">ln → TF-IDF: ln(N/df) (L12)</text>
<text x="416" y="320" font-size="14">−log P → loss ของ LLM (L12)</text>
</svg>`,
  caption: 'ไม่ต้องคำนวณ eˣ ด้วยมือเก่ง ๆ — แค่จำว่า e⁰ = 1, e¹ ≈ 2.718, e² ≈ 7.39 และ eˣ เป็นบวกเสมอ (จึงใช้ทำ “ความน่าจะเป็น” ได้)'
},
{
  id: 'sigmoid', section: 'exp-log-sigmoid-softmax', pos: 'top', kind: 'เคลื่อนไหว', title: 'Sigmoid σ(z): เครื่องบีบตัวเลขอะไรก็ได้ให้อยู่ระหว่าง 0 ถึง 1',
  html: `<svg viewBox="0 0 760 340" role="img" aria-label="sigmoid">
<text x="60" y="44" font-size="15" class="tb">σ(z) อยู่ระหว่าง 0 – 1 เสมอ</text>
<g class="ln" stroke-width="1.2" stroke-dasharray="5 5"><line x1="60" y1="70" x2="516" y2="70"/><line x1="60" y1="180" x2="516" y2="180"/><line x1="288" y1="60" x2="288" y2="290"/></g>
<line x1="60" y1="290" x2="516" y2="290" class="ln" stroke-width="1.5"/>
<g font-size="13" class="tm" text-anchor="end"><text class="tm" x="54" y="75">1</text><text class="tm" x="54" y="185">0.5</text><text class="tm" x="54" y="295">0</text></g>
<g font-size="13" class="tm" text-anchor="middle"><text class="tm" x="60" y="310">−6</text><text class="tm" x="136" y="310">−4</text><text class="tm" x="212" y="310">−2</text><text class="tm" x="288" y="310">0</text><text class="tm" x="364" y="310">2</text><text class="tm" x="440" y="310">4</text><text class="tm" x="516" y="310">6</text></g>
<text x="516" y="332" font-size="14" class="tm" text-anchor="end">z (ตัวเลขอะไรก็ได้)</text>
<path d="M60.0,289.5 L69.5,289.3 L79.0,289.1 L88.5,288.9 L98.0,288.5 L107.5,288.1 L117.0,287.6 L126.5,286.9 L136.0,286.0 L145.5,284.9 L155.0,283.6 L164.5,281.8 L174.0,279.6 L183.5,276.8 L193.0,273.3 L202.5,269.0 L212.0,263.8 L221.5,257.4 L231.0,249.9 L240.5,241.0 L250.0,230.8 L259.5,219.4 L269.0,206.9 L278.5,193.7 L288.0,180.0 L297.5,166.3 L307.0,153.1 L316.5,140.6 L326.0,129.2 L335.5,119.0 L345.0,110.1 L354.5,102.6 L364.0,96.2 L373.5,91.0 L383.0,86.7 L392.5,83.2 L402.0,80.4 L411.5,78.2 L421.0,76.4 L430.5,75.1 L440.0,74.0 L449.5,73.1 L459.0,72.4 L468.5,71.9 L478.0,71.5 L487.5,71.1 L497.0,70.9 L506.5,70.7 L516.0,70.5" class="nofill s4" stroke-width="3.5"/>
<circle cx="212" cy="263.8" r="5" class="f4"/><circle cx="288" cy="180" r="5" class="f4"/><circle cx="364" cy="96.2" r="5" class="f4"/>
<g font-size="14" class="tb" style="paint-order:stroke;stroke:var(--vbg);stroke-width:5px;stroke-linejoin:round">
<text x="205" y="248" text-anchor="end">σ(−2) ≈ 0.12</text><text x="296" y="198">σ(0) = 0.5</text><text x="372" y="120">σ(2) ≈ 0.88</text></g>
<circle r="8" class="f5"><animateMotion dur="6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;0" keyTimes="0;0.5;1" path="M60.0,289.5 L69.5,289.3 L79.0,289.1 L88.5,288.9 L98.0,288.5 L107.5,288.1 L117.0,287.6 L126.5,286.9 L136.0,286.0 L145.5,284.9 L155.0,283.6 L164.5,281.8 L174.0,279.6 L183.5,276.8 L193.0,273.3 L202.5,269.0 L212.0,263.8 L221.5,257.4 L231.0,249.9 L240.5,241.0 L250.0,230.8 L259.5,219.4 L269.0,206.9 L278.5,193.7 L288.0,180.0 L297.5,166.3 L307.0,153.1 L316.5,140.6 L326.0,129.2 L335.5,119.0 L345.0,110.1 L354.5,102.6 L364.0,96.2 L373.5,91.0 L383.0,86.7 L392.5,83.2 L402.0,80.4 L411.5,78.2 L421.0,76.4 L430.5,75.1 L440.0,74.0 L449.5,73.1 L459.0,72.4 L468.5,71.9 L478.0,71.5 L487.5,71.1 L497.0,70.9 L506.5,70.7 L516.0,70.5"/></circle>
<text x="650" y="62" font-size="14" class="tb" text-anchor="middle">z: −100 … 0 … +100</text>
<path d="M560,74 L740,74 L672,190 L628,190 Z" class="f4l s4" stroke-width="2"/>
<text x="650" y="112" font-size="14" text-anchor="middle">บีบ!</text>
<rect x="600" y="204" width="100" height="18" rx="9" class="f4"/>
<text x="594" y="218" font-size="14" class="tb" text-anchor="end">0</text><text x="706" y="218" font-size="14" class="tb">1</text>
<text x="650" y="258" font-size="15" class="tb" text-anchor="middle">σ(z) = 1 / (1 + e⁻ᶻ)</text>
<text x="650" y="284" font-size="14" text-anchor="middle">= ความน่าจะเป็น 2 ทาง</text>
<text x="650" y="308" font-size="14" class="tm" text-anchor="middle">L08 · L10 policy · L12 LSTM</text>
</svg>`,
  caption: 'z ติดลบมาก → σ ใกล้ 0 · z = 0 → σ = 0.5 พอดี · z บวกมาก → σ ใกล้ 1 · เช่น policy ใน L10: σ(z) > 0.5 → ดันรถไปทางขวา'
},
{
  id: 'softmax', section: 'exp-log-sigmoid-softmax', pos: 'top', kind: 'ทีละขั้น', title: 'Softmax = แบ่งเค้ก 100% ให้ทุกตัวเลือก (+ ปุ่ม Temperature)',
  html: `<div class="stepper"><svg viewBox="0 0 760 380" role="img" aria-label="softmax ทีละขั้น">
<line x1="40" y1="300" x2="440" y2="300" class="ln" stroke-width="2"/>
<g font-size="16" class="tb" text-anchor="middle"><text x="110" y="326">แมว</text><text x="240" y="326">หมา</text><text x="370" y="326">นก</text></g>
<g data-only="1"><rect x="70" y="180" width="80" height="120" rx="6" class="f1"/><rect x="200" y="240" width="80" height="60" rx="6" class="f1"/><rect x="330" y="297" width="80" height="3" class="f1"/>
<g font-size="17" class="tb" text-anchor="middle"><text x="110" y="172">2</text><text x="240" y="232">1</text><text x="370" y="289">0</text></g></g>
<g data-only="2"><rect x="70" y="122.7" width="80" height="177.3" rx="6" class="f2"/><rect x="200" y="234.8" width="80" height="65.2" rx="6" class="f2"/><rect x="330" y="276" width="80" height="24" rx="6" class="f2"/>
<g font-size="17" class="tb" text-anchor="middle"><text x="110" y="114">7.39</text><text x="240" y="226">2.72</text><text x="370" y="268">1.00</text></g></g>
<g data-only="3,4"><rect x="70" y="100.4" width="80" height="199.6" rx="6" class="f3"/><rect x="200" y="226.6" width="80" height="73.4" rx="6" class="f3"/><rect x="330" y="273" width="80" height="27" rx="6" class="f3"/>
<g font-size="17" class="tb" text-anchor="middle"><text x="110" y="92">0.67</text><text x="240" y="218">0.24</text><text x="370" y="265">0.09</text></g>
<rect x="40" y="344" width="266.1" height="26" class="f3"/><rect x="306.1" y="344" width="97.9" height="26" class="f6"/><rect x="404" y="344" width="36" height="26" class="f4"/>
<g font-size="14" class="tw tb" text-anchor="middle"><text class="tw" x="173" y="362">67%</text><text class="tw" x="355" y="362">24%</text><text class="tw" x="422" y="362">9%</text></g></g>
<g data-only="1"><rect x="470" y="20" width="280" height="130" rx="12" class="f1l"/>
<text x="486" y="52" font-size="16" class="tb">① คะแนนดิบ (logit) z</text><text x="486" y="84" font-size="15">z = [2, 1, 0]</text><text x="486" y="112" font-size="14">ติดลบได้ · รวมกันไม่เป็น 1</text></g>
<g data-only="2"><rect x="470" y="20" width="280" height="130" rx="12" class="f2l"/>
<text x="486" y="52" font-size="16" class="tb">② ยก e กำลัง: eᶻ</text><text x="486" y="84" font-size="15">7.39 + 2.72 + 1.00 = 11.11</text><text x="486" y="112" font-size="14">ทุกค่ากลายเป็นบวก</text></g>
<g data-only="3"><rect x="470" y="20" width="280" height="130" rx="12" class="f3l"/>
<text x="486" y="52" font-size="16" class="tb">③ หารด้วยผลรวม</text><text x="486" y="84" font-size="15">7.39 / 11.11 = 0.67 ฯลฯ</text><text x="486" y="112" font-size="14">รวมกัน = 1 พอดี (100%)</text></g>
<g data-only="4"><rect x="470" y="20" width="280" height="130" rx="12" class="f4l"/>
<text x="486" y="52" font-size="16" class="tb">④ Temperature T</text><text x="486" y="84" font-size="15">pᵢ = e^(zᵢ/T) / Σ e^(zⱼ/T)</text><text x="486" y="112" font-size="14">T เล็ก → แหลม · T ใหญ่ → แบน</text></g>
<g data-only="1,2,3"><rect x="470" y="180" width="280" height="110" rx="12" class="f7l"/>
<text x="486" y="210" font-size="15" class="tb">สูตร softmax</text><text x="486" y="240" font-size="15">pᵢ = e^(zᵢ) / Σⱼ e^(zⱼ)</text>
<text x="486" y="270" font-size="14">= ยก e แล้วหารด้วยผลรวม</text></g>
<g data-s="4">
<text x="470" y="182" font-size="14" class="tm">z เดิม [2, 1, 0] เปลี่ยนแค่ T:</text>
<text x="470" y="215" font-size="15" class="tb">T = 0.5</text>
<rect x="545" y="198" width="173.4" height="24" class="f3"/><rect x="718.4" y="198" width="23.5" height="24" class="f6"/><rect x="741.9" y="198" width="3.2" height="24" class="f4"/>
<text x="545" y="242" font-size="14">0.87 · 0.12 · 0.02 (แหลม)</text>
<text x="470" y="277" font-size="15" class="tb">T = 1</text>
<rect x="545" y="260" width="133" height="24" class="f3"/><rect x="678" y="260" width="48.9" height="24" class="f6"/><rect x="726.9" y="260" width="18.1" height="24" class="f4"/>
<text x="545" y="304" font-size="14">0.67 · 0.24 · 0.09</text>
<text x="470" y="339" font-size="15" class="tb">T = 2</text>
<rect x="545" y="322" width="101.3" height="24" class="f3"/><rect x="646.3" y="322" width="61.4" height="24" class="f6"/><rect x="707.7" y="322" width="37.3" height="24" class="f4"/>
<text x="545" y="366" font-size="14">0.51 · 0.31 · 0.19 (แบน)</text></g>
</svg><ol class="caps">
<li>โมเดลให้ “คะแนนดิบ” (logit) แต่ละตัวเลือก: แมว 2 · หมา 1 · นก 0 — ยังไม่ใช่ความน่าจะเป็น</li>
<li>ยก e กำลังคะแนน: e² = 7.39 · e¹ = 2.72 · e⁰ = 1 → ทุกตัวเป็นบวก รวมได้ 11.11</li>
<li>หารด้วยผลรวม → <b>0.67 · 0.24 · 0.09</b> รวมกัน = 1 พอดี เหมือนแบ่งเค้ก 100% (ตัวอย่างเดียวกับสไลด์ L12 หน้า 50)</li>
<li><b>Temperature T</b>: หาร z ด้วย T ก่อน · T = 0.5 → 0.87 (มั่นใจ/แหลม) · T = 2 → 0.51 (กระจาย/แบน) — ใช้ตอน LLM สุ่มเลือกคำ (L12–L13) · ตัวเลขปัดเศษ 2 ตำแหน่ง</li>
</ol></div>`,
  caption: 'sigmoid = สำหรับ 2 ทางเลือก · softmax = สำหรับหลายทางเลือก (ลำดับมากไปน้อยไม่เปลี่ยน แค่แปลงให้รวมเป็น 1)'
},

/* ============ 7) ความน่าจะเป็น ============ */
{
  id: 'prob-tree', section: 'probability', pos: 'top', kind: 'ทีละขั้น', title: 'ต้นไม้ความน่าจะเป็น: “และ” = คูณ · “หรือ” = บวก (ตัวอย่างอากาศ L10)',
  html: `<div class="stepper"><svg viewBox="0 0 760 410" role="img" aria-label="ต้นไม้ความน่าจะเป็นสภาพอากาศ">
<defs><marker id="L00-pt-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker></defs>
<g font-size="15" class="tb tm" text-anchor="middle"><text class="tm" x="70" y="28">วันนี้</text><text class="tm" x="280" y="28">พรุ่งนี้</text><text class="tm" x="480" y="28">มะรืน</text><text class="tm" x="640" y="28">คูณตามเส้น</text></g>
<g data-s="2" class="ln" stroke-width="2"><line x1="120" y1="205" x2="230" y2="83"/><line x1="120" y1="205" x2="230" y2="200"/><line x1="120" y1="205" x2="230" y2="317"/></g>
<g data-s="3" class="ln" stroke-width="2"><line x1="330" y1="83" x2="430" y2="83"/><line x1="330" y1="200" x2="430" y2="200"/><line x1="330" y1="317" x2="430" y2="317"/></g>
<rect x="20" y="182" width="100" height="46" rx="12" class="f7l s7" stroke-width="2"/><text x="70" y="211" font-size="16" class="tb" text-anchor="middle">แดด</text>
<g data-only="1"><rect x="220" y="140" width="480" height="130" rx="14" class="f7l"/>
<text x="460" y="182" font-size="17" class="tb" text-anchor="middle">วันนี้แดด → อีก 2 วัน (มะรืน) ฝนตกไหม?</text>
<text x="460" y="214" font-size="15" text-anchor="middle">ต้องผ่าน “พรุ่งนี้” ก่อน ซึ่งเป็นได้ 3 แบบ</text>
<text x="460" y="244" font-size="14" class="tm" text-anchor="middle">กด ถัดไป ▶ เพื่อแตกกิ่งทีละชั้น</text></g>
<g data-s="2">
<rect x="230" y="60" width="100" height="46" rx="12" class="f7l s7" stroke-width="2"/><text x="280" y="89" font-size="16" class="tb" text-anchor="middle">แดด</text>
<rect x="230" y="177" width="100" height="46" rx="12" class="f6l s6" stroke-width="2"/><text x="280" y="206" font-size="16" class="tb" text-anchor="middle">เมฆ</text>
<rect x="230" y="294" width="100" height="46" rx="12" class="f1l s1" stroke-width="2"/><text x="280" y="323" font-size="16" class="tb" text-anchor="middle">ฝน</text>
<g font-size="16" class="tb" style="paint-order:stroke;stroke:var(--vbg);stroke-width:6px;stroke-linejoin:round"><text x="166" y="134">0.7</text><text x="168" y="194">0.2</text><text x="166" y="276">0.1</text></g>
<text x="280" y="372" font-size="14" class="tm" text-anchor="middle">0.7 + 0.2 + 0.1 = 1</text></g>
<g data-s="3">
<rect x="430" y="60" width="100" height="46" rx="12" class="f1l s1" stroke-width="2"/><text x="480" y="89" font-size="16" class="tb" text-anchor="middle">ฝน</text>
<rect x="430" y="177" width="100" height="46" rx="12" class="f1l s1" stroke-width="2"/><text x="480" y="206" font-size="16" class="tb" text-anchor="middle">ฝน</text>
<rect x="430" y="294" width="100" height="46" rx="12" class="f1l s1" stroke-width="2"/><text x="480" y="323" font-size="16" class="tb" text-anchor="middle">ฝน</text>
<g font-size="16" class="tb" text-anchor="middle"><text x="380" y="74">0.1</text><text x="380" y="191">0.3</text><text x="380" y="308">0.5</text></g></g>
<g data-s="4" font-size="16"><text x="556" y="89">0.7 × 0.1 = 0.07</text><text x="556" y="206">0.2 × 0.3 = 0.06</text><text x="556" y="323">0.1 × 0.5 = 0.05</text></g>
<g data-s="5"><path d="M700,83 H716 V317 H700 M716,200 H724" class="nofill ln" stroke-width="2"/>
<line x1="716" y1="317" x2="716" y2="346" class="ln" stroke-width="2" marker-end="url(#L00-pt-ar)"/>
<rect x="560" y="350" width="190" height="50" rx="12" class="f3l s3" stroke-width="2"/>
<text x="655" y="383" font-size="20" class="tb" text-anchor="middle">รวม = 0.18</text></g>
</svg><ol class="caps">
<li>วันนี้แดด อยากรู้ว่า “อีก 2 วัน ฝนตก” มีโอกาสเท่าไร? (ตัวอย่างจริงในสไลด์ L10 หน้า 12)</li>
<li>พรุ่งนี้เป็นได้ 3 แบบ: แดด 0.7 · เมฆ 0.2 · ฝน 0.1 — ความน่าจะเป็นของทุกทางรวมกัน = 1 เสมอ</li>
<li>จากแต่ละแบบ มีโอกาสที่มะรืนฝนตก: 0.1 (จากแดด) · 0.3 (จากเมฆ) · 0.5 (จากฝน)</li>
<li>เส้นทางเดียวต้องเกิด “ทั้งสองวัน” → <b>คูณ</b>: 0.07 · 0.06 · 0.05</li>
<li>ฝนมะรืนเกิดได้ “หลายเส้นทาง” → <b>บวก</b> = <b>0.18</b> · จำ: <b>และ = คูณ · หรือ = บวก</b></li>
</ol></div>`,
  caption: 'การคูณตามเส้นแล้วบวกทุกเส้น = การคูณเมทริกซ์ P × P (P²) ที่สไลด์ L10 พูดถึง'
},
{
  id: 'pn-decay', section: 'probability', pos: 'top', kind: 'ภาพนิ่ง', title: 'pⁿ: แต่ละขั้นเก่ง 95% แต่ทำ 10 ขั้นติดกันสำเร็จแค่ 60%',
  html: `<svg viewBox="0 0 760 336" role="img" aria-label="p ยกกำลัง n">
<text x="20" y="34" font-size="15" class="tb">โซ่ 10 ห่วง · แต่ละห่วงทนได้ 95%</text>
<g class="nofill s3" stroke-width="3.5"><rect x="24" y="52" width="50" height="28" rx="14"/><rect x="80" y="52" width="50" height="28" rx="14"/><rect x="136" y="52" width="50" height="28" rx="14"/><rect x="192" y="52" width="50" height="28" rx="14"/><rect x="248" y="52" width="50" height="28" rx="14"/>
<rect x="24" y="92" width="50" height="28" rx="14"/><rect x="80" y="92" width="50" height="28" rx="14"/><rect x="136" y="92" width="50" height="28" rx="14"/><rect x="192" y="92" width="50" height="28" rx="14"/><rect x="248" y="92" width="50" height="28" rx="14"/></g>
<g font-size="14" text-anchor="middle"><text x="49" y="71">95%</text><text x="105" y="71">95%</text><text x="161" y="71">95%</text><text x="217" y="71">95%</text><text x="273" y="71">95%</text>
<text x="49" y="111">95%</text><text x="105" y="111">95%</text><text x="161" y="111">95%</text><text x="217" y="111">95%</text><text x="273" y="111">95%</text></g>
<text x="20" y="152" font-size="14">ทั้งเส้นไม่ขาด = 0.95 คูณกัน 10 ครั้ง</text>
<text x="20" y="186" font-size="22" class="tb" style="fill:var(--c5)">0.95¹⁰ ≈ 0.60</text>
<text x="20" y="218" font-size="16" class="tb">20 ห่วง → 0.95²⁰ ≈ 0.36</text>
<text x="20" y="250" font-size="14">ยิ่งหลายขั้น ยิ่งพังง่าย</text>
<text x="20" y="272" font-size="14" class="tm">(Agent ที่ทำงาน n ขั้น · L13)</text>
<text x="20" y="306" font-size="14">γ ก็เช่นกัน: 0.99¹⁰⁰ ≈ 0.37 (L10)</text>
<text x="360" y="40" font-size="15" class="tb">P(สำเร็จทุกขั้น) = pⁿ  (p = 0.95)</text>
<line x1="350" y1="180" x2="742" y2="180" class="ln" stroke-dasharray="5 5"/>
<line x1="350" y1="290" x2="742" y2="290" class="ln" stroke-width="1.5"/><line x1="350" y1="290" x2="350" y2="64" class="ln" stroke-width="1.5"/>
<g font-size="13" class="tm" text-anchor="end"><text class="tm" x="344" y="74">1.0</text><text class="tm" x="344" y="184">0.5</text><text class="tm" x="344" y="294">0</text></g>
<rect x="356.0" y="81.0" width="15" height="209.0" rx="2" class="f3l"/><rect x="375.2" y="91.5" width="15" height="198.5" rx="2" class="f3l"/><rect x="394.4" y="101.4" width="15" height="188.6" rx="2" class="f3l"/><rect x="413.6" y="110.8" width="15" height="179.2" rx="2" class="f3l"/><rect x="432.8" y="119.8" width="15" height="170.2" rx="2" class="f3l"/>
<rect x="452.0" y="128.3" width="15" height="161.7" rx="2" class="f3l"/><rect x="471.2" y="136.4" width="15" height="153.6" rx="2" class="f3l"/><rect x="490.4" y="144.0" width="15" height="146.0" rx="2" class="f3l"/><rect x="509.6" y="151.3" width="15" height="138.7" rx="2" class="f3l"/><rect x="528.8" y="158.3" width="15" height="131.7" rx="2" class="f5"/>
<rect x="548.0" y="164.9" width="15" height="125.1" rx="2" class="f3l"/><rect x="567.2" y="171.1" width="15" height="118.9" rx="2" class="f3l"/><rect x="586.4" y="177.1" width="15" height="112.9" rx="2" class="f3l"/><rect x="605.6" y="182.7" width="15" height="107.3" rx="2" class="f3l"/><rect x="624.8" y="188.1" width="15" height="101.9" rx="2" class="f3l"/>
<rect x="644.0" y="193.2" width="15" height="96.8" rx="2" class="f3l"/><rect x="663.2" y="198.0" width="15" height="92.0" rx="2" class="f3l"/><rect x="682.4" y="202.6" width="15" height="87.4" rx="2" class="f3l"/><rect x="701.6" y="207.0" width="15" height="83.0" rx="2" class="f3l"/><rect x="720.8" y="211.1" width="15" height="78.9" rx="2" class="f5"/>
<text x="536.3" y="150" font-size="15" class="tb" text-anchor="middle" style="fill:var(--c5)">0.60</text><text x="728.3" y="203" font-size="15" class="tb" text-anchor="middle" style="fill:var(--c5)">0.36</text>
<g font-size="13" class="tm" text-anchor="middle"><text class="tm" x="363.5" y="308">1</text><text class="tm" x="440.3" y="308">5</text><text class="tm" x="536.3" y="308">10</text><text class="tm" x="632.3" y="308">15</text><text class="tm" x="728.3" y="308">20</text></g>
<text x="545" y="328" font-size="14" class="tm" text-anchor="middle">จำนวนขั้น n</text>
</svg>`,
  caption: 'เหตุการณ์อิสระที่ต้องเกิด “ทุกขั้น” → คูณกัน: P = p × p × … = pⁿ (สไลด์ L13 หน้า 23: 0.95¹⁰ = 0.60, 0.95²⁰ = 0.36)'
},
{
  id: 'vote', section: 'probability', pos: 'bottom', kind: 'ภาพนิ่ง', title: 'โหวตเสียงข้างมาก: ถามซ้ำหลายรอบแล้วเลือกคำตอบที่ซ้ำที่สุด',
  html: `<svg viewBox="0 0 760 300" role="img" aria-label="majority vote">
<text x="20" y="26" font-size="15" class="tb">ถามคำถามเดิม 5 รอบ · แต่ละรอบตอบถูก 60%</text>
<g class="f6l s6" stroke-width="2"><rect x="24" y="46" width="64" height="64" rx="14"/><rect x="112" y="46" width="64" height="64" rx="14"/><rect x="200" y="46" width="64" height="64" rx="14"/><rect x="288" y="46" width="64" height="64" rx="14"/><rect x="376" y="46" width="64" height="64" rx="14"/></g>
<g class="f6"><circle cx="46" cy="72" r="5"/><circle cx="66" cy="72" r="5"/><circle cx="134" cy="72" r="5"/><circle cx="154" cy="72" r="5"/><circle cx="222" cy="72" r="5"/><circle cx="242" cy="72" r="5"/><circle cx="310" cy="72" r="5"/><circle cx="330" cy="72" r="5"/><circle cx="398" cy="72" r="5"/><circle cx="418" cy="72" r="5"/></g>
<g class="s6" stroke-width="3" stroke-linecap="round"><line x1="46" y1="92" x2="66" y2="92"/><line x1="134" y1="92" x2="154" y2="92"/><line x1="222" y1="92" x2="242" y2="92"/><line x1="310" y1="92" x2="330" y2="92"/><line x1="398" y1="92" x2="418" y2="92"/></g>
<g font-size="15" class="tw tb" text-anchor="middle">
<rect x="24" y="122" width="64" height="30" rx="15" class="f3"/><text x="56" y="142" class="tw">42 ✓</text>
<rect x="112" y="122" width="64" height="30" rx="15" class="f3"/><text x="144" y="142" class="tw">42 ✓</text>
<rect x="200" y="122" width="64" height="30" rx="15" class="f5"/><text x="232" y="142" class="tw">41 ✗</text>
<rect x="288" y="122" width="64" height="30" rx="15" class="f3"/><text x="320" y="142" class="tw">42 ✓</text>
<rect x="376" y="122" width="64" height="30" rx="15" class="f5"/><text x="408" y="142" class="tw">39 ✗</text></g>
<text x="20" y="192" font-size="16" class="tb">นับเสียง: “42” ได้ 3 จาก 5 → ตอบ 42</text>
<text x="20" y="220" font-size="15">= majority vote (เสียงข้างมาก)</text>
<text x="20" y="256" font-size="15" class="tb">โอกาสที่เสียงข้างมากถูก = 0.68</text>
<text x="20" y="282" font-size="14" class="tm">มากกว่าถามครั้งเดียว (0.60)</text>
<text x="490" y="46" font-size="15" class="tb">เทียบความแม่น</text>
<text x="490" y="80" font-size="14">ถามครั้งเดียว</text><rect x="490" y="88" width="144" height="24" rx="4" class="f1"/><text x="642" y="106" font-size="15" class="tb">0.60</text>
<text x="490" y="146" font-size="14">โหวต 5 ครั้ง</text><rect x="490" y="154" width="163.8" height="24" rx="4" class="f3"/><text x="662" y="172" font-size="15" class="tb">0.68</text>
<text x="490" y="216" font-size="14">เงื่อนไข: แต่ละครั้งต้องถูก &gt; 50%</text>
<text x="490" y="242" font-size="14" class="tm">ใช้ใน L13: Self-consistency</text>
</svg>`,
  caption: 'P(ข้างมากถูก) = รวมกรณีถูก 3, 4, 5 ครั้ง = 0.3456 + 0.2592 + 0.0778 ≈ 0.68 (สไลด์ L13) — ใช้ทั้ง “คูณ” (แต่ละรอบ) และ “บวก” (หลายกรณี)'
},

/* ============ 8) เมทริกซ์และ shape ============ */
{
  id: 'tensor-shapes', section: 'matrix-shape', pos: 'top', kind: 'ทีละขั้น', title: 'Shape ของข้อมูล: จากตัวเลขเดียว → ตาราง → กล่อง 3 มิติ → กอง 4 มิติ',
  html: `<div class="stepper"><svg viewBox="0 62 760 282" role="img" aria-label="scalar vector matrix tensor">
<g data-only="1" class="nofill ln" stroke-width="1.5" stroke-dasharray="6 5"><rect x="120" y="200" width="112" height="50" rx="6"/><rect x="262" y="90" width="80" height="160" rx="6"/><rect x="390" y="114" width="136" height="136" rx="6"/><rect x="586" y="116" width="132" height="132" rx="6"/></g>
<g data-only="1" font-size="22" text-anchor="middle"><text x="176" y="233" class="tm">?</text><text x="302" y="178" class="tm">?</text><text x="458" y="190" class="tm">?</text><text x="652" y="190" class="tm">?</text></g>
<rect x="30" y="200" width="50" height="50" rx="8" class="f1l s1" stroke-width="2"/><text x="55" y="231" font-size="15" class="tb" text-anchor="middle">0.25</text>
<g text-anchor="middle"><text x="55" y="286" font-size="15" class="tb">สเกลาร์</text><text x="55" y="308" font-size="14">ตัวเลข 1 ตัว</text><text x="55" y="330" font-size="14" class="tm">เช่น loss</text></g>
<g data-s="2"><text x="100" y="231" font-size="18" class="tm" text-anchor="middle">→</text>
<rect x="120" y="200" width="56" height="50" class="f6l s6" stroke-width="2"/><rect x="176" y="200" width="56" height="50" class="f6l s6" stroke-width="2"/>
<g font-size="15" text-anchor="middle"><text x="148" y="231">148</text><text x="204" y="231">33.6</text></g>
<g text-anchor="middle"><text x="176" y="286" font-size="15" class="tb">เวกเตอร์</text><text x="176" y="308" font-size="14">d = 2</text><text x="176" y="330" font-size="14" class="tm">ผู้ป่วย 1 คน</text></g></g>
<g data-s="3"><text x="247" y="231" font-size="18" class="tm" text-anchor="middle">→</text>
<rect x="262" y="90" width="80" height="160" class="f3l s3" stroke-width="2"/>
<g class="s3" stroke-width="1"><line x1="302" y1="90" x2="302" y2="250"/><line x1="262" y1="110" x2="342" y2="110"/><line x1="262" y1="130" x2="342" y2="130"/><line x1="262" y1="150" x2="342" y2="150"/><line x1="262" y1="170" x2="342" y2="170"/><line x1="262" y1="190" x2="342" y2="190"/><line x1="262" y1="210" x2="342" y2="210"/><line x1="262" y1="230" x2="342" y2="230"/></g>
<text x="302" y="80" font-size="14" class="tm" text-anchor="middle">2 คอลัมน์</text><text x="254" y="175" font-size="14" class="tm" text-anchor="end">8 แถว</text>
<g text-anchor="middle"><text x="302" y="286" font-size="15" class="tb">เมทริกซ์</text><text x="302" y="308" font-size="14">n × d = 8 × 2</text><text x="302" y="330" font-size="14" class="tm">ผู้ป่วย 8 คน</text></g></g>
<g data-s="4"><text x="366" y="231" font-size="18" class="tm" text-anchor="middle">→</text>
<rect x="426" y="114" width="100" height="100" class="f5l s5" stroke-width="2"/><rect x="408" y="132" width="100" height="100" class="f3l s3" stroke-width="2"/><rect x="390" y="150" width="100" height="100" class="f1l s1" stroke-width="2"/>
<g class="s1" stroke-width="0.8" opacity="0.6"><line x1="410" y1="150" x2="410" y2="250"/><line x1="430" y1="150" x2="430" y2="250"/><line x1="450" y1="150" x2="450" y2="250"/><line x1="470" y1="150" x2="470" y2="250"/><line x1="390" y1="170" x2="490" y2="170"/><line x1="390" y1="190" x2="490" y2="190"/><line x1="390" y1="210" x2="490" y2="210"/><line x1="390" y1="230" x2="490" y2="230"/></g>
<g font-size="14" class="tb" text-anchor="middle"><text x="476" y="128">R</text><text x="458" y="146">G</text></g>
<text x="440" y="205" font-size="16" class="tb" text-anchor="middle" style="paint-order:stroke;stroke:var(--vbg);stroke-width:5px;stroke-linejoin:round">B</text>
<g text-anchor="middle"><text x="458" y="286" font-size="15" class="tb">ภาพสี 3 มิติ</text><text x="458" y="308" font-size="14">H × W × 3</text><text x="458" y="330" font-size="14" class="tm">224×224×3 = 150,528</text></g></g>
<g data-s="5"><text x="556" y="231" font-size="18" class="tm" text-anchor="middle">→</text>
<g stroke-width="1.5"><rect x="662" y="116" width="56" height="56" class="f5l s5"/><rect x="657" y="121" width="56" height="56" class="f3l s3"/><rect x="652" y="126" width="56" height="56" class="f1l s1"/>
<rect x="640" y="138" width="56" height="56" class="f5l s5"/><rect x="635" y="143" width="56" height="56" class="f3l s3"/><rect x="630" y="148" width="56" height="56" class="f1l s1"/>
<rect x="618" y="160" width="56" height="56" class="f5l s5"/><rect x="613" y="165" width="56" height="56" class="f3l s3"/><rect x="608" y="170" width="56" height="56" class="f1l s1"/>
<rect x="596" y="182" width="56" height="56" class="f5l s5"/><rect x="591" y="187" width="56" height="56" class="f3l s3"/><rect x="586" y="192" width="56" height="56" class="f1l s1"/></g>
<g text-anchor="middle"><text x="660" y="286" font-size="15" class="tb">Batch 4 มิติ</text><text x="660" y="308" font-size="14">B × C × H × W</text><text x="660" y="330" font-size="14" class="tm">32×3×224×224</text></g></g>
</svg><ol class="caps">
<li><b>สเกลาร์</b> = ตัวเลขเดี่ยว เช่น ค่า loss หรือ learning rate η</li>
<li><b>เวกเตอร์</b> = ตัวเลขเรียงแถวเดียว เช่น ผู้ป่วย 1 คน = [148, 33.6] → มี d = 2 ช่อง</li>
<li><b>เมทริกซ์</b> = ตาราง n × d (แถว × คอลัมน์) · ผู้ป่วย 8 คน × 2 feature = 8 × 2</li>
<li>ภาพสี = 3 ชั้นสี R, G, B ซ้อนกัน → <b>H × W × 3</b> · 224×224×3 = 150,528 ตัวเลข (L11 หน้า 5)</li>
<li>ส่งภาพทีละหลายรูป (batch) → 4 มิติ <b>B × C × H × W</b> เช่น 32×3×224×224 · สไลด์ L11: “เช็ก shape ก่อนเสมอ”</li>
</ol></div>`,
  caption: 'Tensor = ชื่อรวมของกล่องตัวเลขกี่มิติก็ได้ · อ่าน shape จากซ้ายไปขวา เช่น 8 × 2 = 8 แถว 2 คอลัมน์'
},
{
  id: 'matmul', section: 'matrix-shape', pos: 'top', kind: 'เคลื่อนไหว', title: 'คูณเมทริกซ์ = ทำ dot product ทีละแถว (แต่ทำพร้อมกันทั้งหมด)',
  html: `<svg viewBox="0 0 760 320" role="img" aria-label="การคูณเมทริกซ์">
<g font-size="15" class="tm" text-anchor="middle"><text class="tm" x="135" y="50">x₁</text><text class="tm" x="225" y="50">x₂</text></g>
<g font-size="14" class="tm" text-anchor="end"><text class="tm" x="82" y="90">คน 1</text><text class="tm" x="82" y="140">คน 2</text><text class="tm" x="82" y="190">คน 3</text></g>
<rect x="90" y="60" width="180" height="150" rx="6" class="f1l s1" stroke-width="2"/>
<g class="s1" stroke-width="1"><line x1="180" y1="60" x2="180" y2="210"/><line x1="90" y1="110" x2="270" y2="110"/><line x1="90" y1="160" x2="270" y2="160"/></g>
<g font-size="17" text-anchor="middle"><text x="135" y="92">148</text><text x="225" y="92">33.6</text><text x="135" y="142">85</text><text x="225" y="142">26.6</text><text x="135" y="192">160</text><text x="225" y="192">35.0</text></g>
<text x="295" y="143" font-size="24" class="tm" text-anchor="middle">×</text>
<rect x="320" y="85" width="80" height="100" rx="6" class="f2l s2" stroke-width="2"/><line x1="320" y1="135" x2="400" y2="135" class="s2"/>
<g font-size="17" text-anchor="middle"><text x="360" y="117">0.5</text><text x="360" y="167">0.5</text></g>
<rect x="316" y="81" width="88" height="108" rx="9" class="nofill s2 v-pulse" stroke-width="3"/>
<text x="442" y="143" font-size="20" text-anchor="middle">+ b</text><text x="442" y="168" font-size="14" class="tm" text-anchor="middle">b = 0.5</text>
<text x="490" y="143" font-size="24" class="tm" text-anchor="middle">=</text>
<rect x="520" y="60" width="100" height="150" rx="6" class="f3l s3" stroke-width="2"/>
<g class="s3" stroke-width="1"><line x1="520" y1="110" x2="620" y2="110"/><line x1="520" y1="160" x2="620" y2="160"/></g>
<g font-size="17" class="tb" text-anchor="middle"><text x="570" y="92">91.3</text><text x="570" y="142">56.3</text><text x="570" y="192">98.0</text></g>
<rect x="86" y="60" width="188" height="50" rx="8" class="nofill s2" stroke-width="3"><animate attributeName="y" values="60;110;160" dur="4.5s" calcMode="discrete" repeatCount="indefinite"/></rect>
<rect x="516" y="60" width="108" height="50" rx="8" class="nofill s2" stroke-width="3"><animate attributeName="y" values="60;110;160" dur="4.5s" calcMode="discrete" repeatCount="indefinite"/></rect>
<g text-anchor="middle"><text x="180" y="236" font-size="15" class="tb">X (3×2)</text><text x="360" y="236" font-size="15" class="tb">w (2×1)</text><text x="570" y="236" font-size="15" class="tb">z (3×1)</text>
<text x="180" y="258" font-size="14" class="tm">3 คน × 2 feature</text><text x="360" y="258" font-size="14" class="tm">น้ำหนัก</text><text x="570" y="258" font-size="14" class="tm">คะแนน z ของ 3 คน</text></g>
<g font-size="16"><text x="90" y="298" opacity="1">คน 1: 148×0.5 + 33.6×0.5 + 0.5 = 91.3<animate attributeName="opacity" values="1;0;0" dur="4.5s" calcMode="discrete" repeatCount="indefinite"/></text>
<text x="90" y="298" opacity="0">คน 2: 85×0.5 + 26.6×0.5 + 0.5 = 56.3<animate attributeName="opacity" values="0;1;0" dur="4.5s" calcMode="discrete" repeatCount="indefinite"/></text>
<text x="90" y="298" opacity="0">คน 3: 160×0.5 + 35.0×0.5 + 0.5 = 98.0<animate attributeName="opacity" values="0;0;1" dur="4.5s" calcMode="discrete" repeatCount="indefinite"/></text></g>
<rect x="638" y="60" width="114" height="150" rx="12" class="f7l"/>
<g text-anchor="middle"><text x="695" y="88" font-size="15" class="tb">กฎ shape</text><text x="695" y="116" font-size="14">(3×2)·(2×1)</text><text x="695" y="142" font-size="15" class="tb">→ 3×1</text>
<text x="695" y="172" font-size="14">เลขตรงกลาง</text><text x="695" y="194" font-size="14">ต้องเท่ากัน</text></g>
</svg>`,
  caption: 'แถวของ X “แตะ” คอลัมน์ของ w → ได้ 1 ช่องของผลลัพธ์ · ค่าในภาพคือ 3 แถวแรกของตาราง L08 กับ w = (0.5, 0.5), b = 0.5 (แถว 2 ได้ 56.3 ตรงกับสไลด์)'
},
{
  id: 'onehot', section: 'matrix-shape', pos: 'bottom', kind: 'ทีละขั้น', title: 'one-hot × E = หยิบ 1 แถวออกจากตาราง (นี่คือ Embedding ใน L12)',
  html: `<div class="stepper"><svg viewBox="0 0 760 310" role="img" aria-label="one-hot คูณ embedding">
<defs><marker id="L00-oh-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f3"/></marker></defs>
<g font-size="15"><text x="24" y="97">cat แมว</text><text x="24" y="141">kitten ลูกแมว</text><text x="24" y="185">dog หมา</text><text x="24" y="229">car รถ</text><text x="24" y="273">truck รถบรรทุก</text></g>
<text x="175" y="34" font-size="14" class="tm" text-anchor="middle">(1×5)</text><text x="175" y="58" font-size="14" class="tb" text-anchor="middle">one-hot</text>
<g class="f6l s6" stroke-width="1.5"><rect x="150" y="70" width="50" height="44"/><rect x="150" y="114" width="50" height="44"/><rect x="150" y="158" width="50" height="44"/><rect x="150" y="202" width="50" height="44"/><rect x="150" y="246" width="50" height="44"/></g>
<g font-size="18" text-anchor="middle"><text x="175" y="99" class="tb">1</text><text x="175" y="143" class="tm">0</text><text x="175" y="187" class="tm">0</text><text x="175" y="231" class="tm">0</text><text x="175" y="275" class="tm">0</text></g>
<g data-only="1"><rect x="260" y="140" width="480" height="120" rx="14" class="f7l"/>
<text x="500" y="180" font-size="17" class="tb" text-anchor="middle">1 คำ = เลข 1 แค่ช่องเดียว</text>
<text x="500" y="212" font-size="15" text-anchor="middle">ที่เหลือเป็น 0 ทั้งหมด (คลังคำ V = 5 ช่อง)</text>
<text x="500" y="240" font-size="14" class="tm" text-anchor="middle">ของจริงใน L12: V = 10,000 ช่อง</text></g>
<g data-s="2">
<text x="345" y="34" font-size="15" class="tb" text-anchor="middle">ตาราง E (5×3)</text>
<g font-size="14" class="tm" text-anchor="middle"><text class="tm" x="275" y="58">มิติ1</text><text class="tm" x="345" y="58">มิติ2</text><text class="tm" x="415" y="58">มิติ3</text></g>
<rect x="240" y="70" width="210" height="220" class="f2l s2" stroke-width="1.5"/>
<g class="s2" stroke-width="1"><line x1="310" y1="70" x2="310" y2="290"/><line x1="380" y1="70" x2="380" y2="290"/><line x1="240" y1="114" x2="450" y2="114"/><line x1="240" y1="158" x2="450" y2="158"/><line x1="240" y1="202" x2="450" y2="202"/><line x1="240" y1="246" x2="450" y2="246"/></g>
<g font-size="16" text-anchor="middle">
<text x="275" y="98">0.9</text><text x="345" y="98">0.8</text><text x="415" y="98">0.1</text>
<text x="275" y="142">0.9</text><text x="345" y="142">1.0</text><text x="415" y="142">0.0</text>
<text x="275" y="186">0.9</text><text x="345" y="186">0.5</text><text x="415" y="186">0.1</text>
<text x="275" y="230">0.0</text><text x="345" y="230">0.3</text><text x="415" y="230">0.9</text>
<text x="275" y="274">0.1</text><text x="345" y="274">0.0</text><text x="415" y="274">1.0</text></g></g>
<g data-s="3">
<rect x="146" y="114" width="308" height="176" class="bgp" opacity="0.75"/>
<g font-size="14" class="tm"><text class="tm" x="462" y="141">× 0 → 0</text><text class="tm" x="462" y="185">× 0 → 0</text><text class="tm" x="462" y="229">× 0 → 0</text><text class="tm" x="462" y="273">× 0 → 0</text></g>
<rect x="146" y="70" width="308" height="44" rx="6" class="nofill s3" stroke-width="3"/>
<line x1="456" y1="92" x2="552" y2="92" class="s3" stroke-width="2.5" marker-end="url(#L00-oh-ar)"/>
<text x="504" y="84" font-size="14" class="tb" text-anchor="middle">× 1</text>
<text x="650" y="58" font-size="14" class="tb" text-anchor="middle">ผลลัพธ์ (1×3)</text>
<g class="f3l s3" stroke-width="2"><rect x="560" y="70" width="60" height="44"/><rect x="620" y="70" width="60" height="44"/><rect x="680" y="70" width="60" height="44"/></g>
<g font-size="17" class="tb" text-anchor="middle"><text x="590" y="98">0.9</text><text x="650" y="98">0.8</text><text x="710" y="98">0.1</text></g></g>
<g data-s="4">
<text x="530" y="160" font-size="15" class="tb">(1×5) · (5×3) = (1×3)</text>
<text x="530" y="190" font-size="15">= หยิบแถว cat ออกมา</text>
<text x="530" y="220" font-size="14" class="tm">= nn.Embedding (L12)</text>
<text x="530" y="250" font-size="14">เหมือนเปิดล็อกเกอร์ช่องที่ 1</text></g>
</svg><ol class="caps">
<li>คำศัพท์ 5 คำ · <b>one-hot</b> = เวกเตอร์ที่มีเลข 1 แค่ช่องเดียว (ช่องของคำนั้น) ที่เหลือเป็น 0 — ที่นี่คือ one-hot ของ cat</li>
<li><b>ตาราง E</b>: แต่ละคำมีเวกเตอร์สั้น 3 ตัวเลข (ค่าจริงจากสไลด์ L12 หน้า 10)</li>
<li>คูณ one-hot × E: แถวที่คูณ 0 หายหมด เหลือแค่แถว cat → <b>[0.9, 0.8, 0.1]</b></li>
<li>สรุป: (1×5)·(5×3) = (1×3) — การคูณนี้ = “หยิบแถว” ซึ่งคือสิ่งที่ nn.Embedding ทำทั้งหมด</li>
</ol></div>`,
  caption: 'ในสูตร one-hot เขียนเป็นแถวนอน (1×5) — ภาพนี้วาดตั้งให้เห็นว่าช่องไหนตรงกับแถวไหนของ E'
},

/* ============ 9) สัญลักษณ์ ============ */
{
  id: 'sigma-loop', section: 'symbols', pos: 'top', kind: 'ทีละขั้น', title: 'อ่าน Σ ให้ออก: คือ “วนบวกสะสม” แบบ for-loop',
  html: `<div class="stepper"><svg viewBox="0 0 760 300" role="img" aria-label="อ่านสัญลักษณ์ซิกมา">
<text x="90" y="52" font-size="18" class="tb" text-anchor="middle">3</text>
<text x="90" y="150" font-size="84" class="tb" text-anchor="middle" style="fill:var(--c4)">Σ</text>
<text x="90" y="194" font-size="17" text-anchor="middle">i = 1</text>
<text x="140" y="136" font-size="30" class="tb">wᵢ xᵢ</text>
<text x="30" y="232" font-size="15">อ่านว่า: บวก wᵢxᵢ</text><text x="30" y="256" font-size="15">ตั้งแต่ i = 1 ถึง 3</text>
<text x="300" y="26" font-size="14" class="tm">w = (0.3, 0.5, 0.2) · x = (70, 80, 90)</text>
<g data-only="1"><rect x="300" y="60" width="270" height="110" rx="14" class="nofill ln" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="435" y="106" font-size="16" class="tb" text-anchor="middle">วนทีละรอบ: i = 1 → 2 → 3</text>
<text x="435" y="134" font-size="14" class="tm" text-anchor="middle">กด ถัดไป ▶ เพื่อบวกสะสม</text></g>
<g data-s="2"><rect x="300" y="40" width="270" height="46" rx="10" class="f1l"/><text x="316" y="70" font-size="16">i = 1 :  0.3 × 70 = 21</text></g>
<g data-s="3"><rect x="300" y="98" width="270" height="46" rx="10" class="f1l"/><text x="316" y="128" font-size="16">i = 2 :  0.5 × 80 = 40</text></g>
<g data-s="4"><rect x="300" y="156" width="270" height="46" rx="10" class="f1l"/><text x="316" y="186" font-size="16">i = 3 :  0.2 × 90 = 18</text></g>
<text x="670" y="52" font-size="14" class="tb" text-anchor="middle">ผลรวมสะสม</text>
<rect x="600" y="62" width="140" height="100" rx="14" class="f4l s4" stroke-width="2"/>
<g font-size="40" class="tb" text-anchor="middle"><text data-only="1" x="670" y="128">0</text><text data-only="2" x="670" y="128">21</text><text data-only="3" x="670" y="128">61</text><text data-only="4" x="670" y="128">79</text></g>
<g data-s="4"><text x="300" y="246" font-size="15" class="tb">Σ = วนบวกสะสม (เหมือน for-loop)</text>
<text x="300" y="276" font-size="15">∏ = วนคูณสะสม เช่น 0.95 คูณกัน 10 ครั้ง ≈ 0.60</text></g>
</svg><ol class="caps">
<li><b>Σ</b> (ซิกมา) = “บวกทั้งหมด” · <b>i</b> คือตัวนับ วิ่งจาก 1 (ใต้ Σ) ถึง 3 (บน Σ) · ใช้ตัวเลขคะแนนสอบเดิม</li>
<li>รอบ i = 1: w₁x₁ = 0.3 × 70 = 21 → ผลรวมสะสม 21</li>
<li>รอบ i = 2: w₂x₂ = 0.5 × 80 = 40 → ผลรวมสะสม 61</li>
<li>รอบ i = 3: w₃x₃ = 0.2 × 90 = 18 → ผลรวม <b>79</b> = w·x เดิมนั่นเอง · <b>∏</b> ทำแบบเดียวกันแต่ “คูณ”</li>
</ol></div>`,
  caption: 'โค้ดเทียบ: total = 0 → for i in 1..3: total += w[i]*x[i] · เห็น Σ ในสูตรไหน ให้แปลในใจว่า “วนบวก”'
},
{
  id: 'symbols', section: 'symbols', pos: 'top', kind: 'ภาพนิ่ง', title: 'การ์ดสัญลักษณ์ 16 ตัว: อ่านว่าอะไร · แปลว่าอะไร · เจอที่ไหน',
  html: `<svg viewBox="0 0 760 452" role="img" aria-label="ตารางสัญลักษณ์">
<g>
<rect x="4" y="4" width="182" height="104" rx="12" class="f1l"/><text x="34" y="46" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c1)">Σ</text><text x="62" y="36" font-size="15" class="tb">ซิกมา</text><text x="14" y="74" font-size="14">บวกทุกตัว</text><text x="14" y="96" font-size="13" class="tm">L08 · L11 · L12</text>
<rect x="192" y="4" width="182" height="104" rx="12" class="f2l"/><text x="222" y="46" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c2)">∏</text><text x="250" y="36" font-size="15" class="tb">พาย (ตัวใหญ่)</text><text x="202" y="74" font-size="14">คูณทุกตัว</text><text x="202" y="96" font-size="13" class="tm">L12 ∏P · L13 pⁿ</text>
<rect x="380" y="4" width="182" height="104" rx="12" class="f3l"/><text x="410" y="46" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c3)">∇</text><text x="438" y="36" font-size="15" class="tb">นาบลา / gradient</text><text x="390" y="74" font-size="14">ทิศที่ L เพิ่มเร็วสุด</text><text x="390" y="96" font-size="13" class="tm">L08 · w ← w − η∇L</text>
<rect x="568" y="4" width="182" height="104" rx="12" class="f4l"/><text x="598" y="46" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c4)">η</text><text x="626" y="36" font-size="15" class="tb">อีตา</text><text x="578" y="74" font-size="14">learning rate (ก้าว)</text><text x="578" y="96" font-size="13" class="tm">L08</text>
<rect x="4" y="116" width="182" height="104" rx="12" class="f6l"/><text x="34" y="158" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c6)">γ</text><text x="62" y="148" font-size="15" class="tb">แกมมา</text><text x="14" y="186" font-size="14">ส่วนลดรางวัลอนาคต</text><text x="14" y="208" font-size="13" class="tm">L10 · เช่น γ = 0.9</text>
<rect x="192" y="116" width="182" height="104" rx="12" class="f5l"/><text x="222" y="158" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c5)">θ</text><text x="250" y="148" font-size="15" class="tb">ทีตา</text><text x="202" y="186" font-size="14">พารามิเตอร์ / เกณฑ์</text><text x="202" y="208" font-size="13" class="tm">L08 · L10 · L13</text>
<rect x="380" y="116" width="182" height="104" rx="12" class="f1l"/><text x="410" y="158" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c1)">α</text><text x="438" y="148" font-size="15" class="tb">แอลฟา</text><text x="390" y="186" font-size="14">อัตราเรียนของ Q</text><text x="390" y="208" font-size="13" class="tm">L10 · L12 น้ำหนัก attn</text>
<rect x="568" y="116" width="182" height="104" rx="12" class="f2l"/><text x="598" y="158" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c2)">ε</text><text x="626" y="148" font-size="15" class="tb">เอปไซลอน</text><text x="578" y="186" font-size="14">โอกาสสุ่มลองทางใหม่</text><text x="578" y="208" font-size="13" class="tm">L10 ε-greedy</text>
<rect x="4" y="228" width="182" height="104" rx="12" class="f3l"/><text x="34" y="270" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c3)">ŷ</text><text x="62" y="260" font-size="15" class="tb">วายแฮต</text><text x="14" y="298" font-size="14">ค่าที่โมเดลทาย</text><text x="14" y="320" font-size="13" class="tm">L08 · e = y − ŷ</text>
<rect x="192" y="228" width="182" height="104" rx="12" class="f4l"/><text x="226" y="270" font-size="26" class="tb" text-anchor="middle" style="fill:var(--c4)">‖x‖</text><text x="262" y="260" font-size="15" class="tb">นอร์ม</text><text x="202" y="298" font-size="14">ความยาวเวกเตอร์</text><text x="202" y="320" font-size="13" class="tm">L09 · L12–L13 cos</text>
<rect x="380" y="228" width="182" height="104" rx="12" class="f6l"/><text x="410" y="270" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c6)">⊙</text><text x="438" y="260" font-size="15" class="tb">คูณทีละช่อง</text><text x="390" y="298" font-size="14">คูณตำแหน่งตรงกัน</text><text x="390" y="320" font-size="13" class="tm">L12 LSTM</text>
<rect x="568" y="228" width="182" height="104" rx="12" class="f5l"/><text x="578" y="264" font-size="22" class="tb" style="fill:var(--c5)">argmax</text><text x="578" y="298" font-size="14">“ตัวไหน” ได้ค่ามากสุด</text><text x="578" y="320" font-size="13" class="tm">L10 เลือก action</text>
<rect x="4" y="340" width="182" height="104" rx="12" class="f1l"/><text x="34" y="382" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c1)">≈</text><text x="62" y="372" font-size="15" class="tb">ประมาณ</text><text x="14" y="410" font-size="14">ใกล้เคียง (ปัดเศษ)</text><text x="14" y="432" font-size="13" class="tm">√85 ≈ 9.22</text>
<rect x="192" y="340" width="182" height="104" rx="12" class="f2l"/><text x="222" y="382" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c2)">∝</text><text x="250" y="372" font-size="15" class="tb">แปรผันตาม</text><text x="202" y="410" font-size="14">โตตามกัน (เป็นสัดส่วน)</text><text x="202" y="432" font-size="13" class="tm">เช่น pᵢ ∝ e^zᵢ</text>
<rect x="380" y="340" width="182" height="104" rx="12" class="f3l"/><text x="410" y="382" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c3)">μ</text><text x="438" y="372" font-size="15" class="tb">มิว</text><text x="390" y="410" font-size="14">ค่าเฉลี่ย / centroid</text><text x="390" y="432" font-size="13" class="tm">L09 K-Means</text>
<rect x="568" y="340" width="182" height="104" rx="12" class="f4l"/><text x="598" y="382" font-size="30" class="tb" text-anchor="middle" style="fill:var(--c4)">σ</text><text x="626" y="372" font-size="15" class="tb">ซิกมาเล็ก</text><text x="578" y="410" font-size="14">sigmoid หรือ SD</text><text x="578" y="432" font-size="13" class="tm">L08 · L10 · L12</text>
</g></svg>`,
  caption: 'ตัวยกตัวห้อย: xᵢ = ตัวที่ i · x₁ = ตัวแรก · x² = ยกกำลัง 2 · wᵀ (T ตัวยก) = พลิกแถว↔คอลัมน์ (wᵀx = w·x) · ตัว “หมวก” ^ = ค่าที่ประมาณ/ทาย'
},

/* ============ 10) วงจรการฝึก ============ */
{
  id: 'train-cycle', section: 'train-loop', pos: 'top', kind: 'เคลื่อนไหว', title: 'วงจรการฝึกที่ใช้กับทุกโมเดล: Forward → Loss → Gradient → Update',
  html: `<svg viewBox="0 0 760 380" role="img" aria-label="วงจรการฝึก">
<defs><marker id="L00-tc-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f2"/></marker></defs>
<path d="M380,62 A128,128 0 1,1 380,318 A128,128 0 1,1 380,62" class="nofill s2 v-flow" stroke-width="3"/>
<g class="s2" stroke-width="3" marker-end="url(#L00-tc-ar)"><line x1="466" y1="95" x2="474" y2="103"/><line x1="474" y1="277" x2="466" y2="285"/><line x1="294" y1="285" x2="286" y2="277"/><line x1="286" y1="103" x2="294" y2="95"/></g>
<circle r="9" class="f5"><animateMotion dur="8s" repeatCount="indefinite" path="M380,62 A128,128 0 1,1 380,318 A128,128 0 1,1 380,62"/></circle>
<rect x="296" y="31" width="168" height="62" rx="14" class="f1l s1" stroke-width="2"/>
<text x="380" y="57" font-size="16" class="tb" text-anchor="middle">① Forward</text><text x="380" y="80" font-size="14" text-anchor="middle">ทาย ŷ จาก x</text>
<rect x="424" y="159" width="168" height="62" rx="14" class="f5l s5" stroke-width="2"/>
<text x="508" y="185" font-size="16" class="tb" text-anchor="middle">② Loss</text><text x="508" y="208" font-size="14" text-anchor="middle">ผิดจาก y เท่าไร</text>
<rect x="296" y="287" width="168" height="62" rx="14" class="f7l s7" stroke-width="2"/>
<text x="380" y="313" font-size="16" class="tb" text-anchor="middle">③ Gradient</text><text x="380" y="336" font-size="14" text-anchor="middle">หาทิศ (backprop)</text>
<rect x="168" y="159" width="168" height="62" rx="14" class="f3l s3" stroke-width="2"/>
<text x="252" y="185" font-size="16" class="tb" text-anchor="middle">④ Update</text><text x="252" y="208" font-size="14" text-anchor="middle">w ← w − η∇L</text>
<text x="380" y="132" font-size="14" class="tb" text-anchor="middle">1 รอบ</text><text x="380" y="152" font-size="14" class="tm" text-anchor="middle">= 1 iteration</text>
<text x="380" y="240" font-size="14" class="tm" text-anchor="middle">ครบทุกแถว</text><text x="380" y="260" font-size="14" class="tb" text-anchor="middle">= 1 epoch</text>
<rect x="10" y="100" width="140" height="170" rx="12" class="f1l"/>
<text x="80" y="124" font-size="14" class="tb" text-anchor="middle">loss ลดลงทุกรอบ</text>
<line x1="22" y1="252" x2="142" y2="252" class="ln"/><line x1="22" y1="252" x2="22" y2="136" class="ln"/>
<path d="M22,140.0 L25,151.6 L28,161.9 L31,171.2 L34,179.5 L37,186.9 L40,193.5 L43,199.5 L46,204.8 L49,209.5 L52,213.8 L55,217.6 L58,221.0 L61,224.1 L64,226.8 L67,229.2 L70,231.4 L73,233.4 L76,235.1 L79,236.7 L82,238.1 L85,239.3 L88,240.5 L91,241.5 L94,242.4 L97,243.2 L100,243.9 L103,244.5 L106,245.1 L109,245.6 L112,246.1 L115,246.5 L118,246.9 L121,247.2 L124,247.5 L127,247.7 L130,248.0 L133,248.2 L136,248.4 L139,248.6" class="nofill s5" stroke-width="2.5"/>
<text x="680" y="70" font-size="14" class="tb" text-anchor="middle">ใช้วงจรนี้ใน</text>
<g font-size="14" text-anchor="middle">
<rect x="610" y="84" width="140" height="34" rx="17" class="f1l"/><text x="680" y="106">L08 MLP</text>
<rect x="610" y="126" width="140" height="34" rx="17" class="f6l"/><text x="680" y="148">L11 CNN</text>
<rect x="610" y="168" width="140" height="34" rx="17" class="f4l"/><text x="680" y="190">L12 Transformer</text>
<rect x="610" y="210" width="140" height="34" rx="17" class="f5l"/><text x="680" y="232">L13 SFT · RLHF</text></g>
</svg>`,
  caption: 'ทุกโมเดลตั้งแต่ L08–L13 ฝึกด้วยวงจรนี้ ต่างกันแค่ “โครงสร้าง” (MLP / CNN / Transformer) กับ “สัญญาณสอน” (label / reward / คำถัดไป) — backprop คือวิธีคำนวณขั้น ③ ไม่ใช่อัลกอริทึมใหม่'
},
{
  id: 'epoch-batch', section: 'train-loop', pos: 'top', kind: 'ทีละขั้น', title: 'Batch · Iteration · Epoch ต่างกันอย่างไร (ข้อมูล 8 แถว)',
  html: `<div class="stepper"><svg viewBox="0 0 760 356" role="img" aria-label="batch iteration epoch">
<defs><marker id="L00-eb-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker>
<marker id="L00-eb-ar4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f4"/></marker></defs>
<text x="30" y="40" font-size="15" class="tb">ข้อมูลฝึก 8 แถว (ผู้ป่วย 8 คน · ตาราง L08)</text>
<g class="f1l s1" stroke-width="1.5"><rect x="30" y="56" width="54" height="44" rx="8"/><rect x="92" y="56" width="54" height="44" rx="8"/><rect x="154" y="56" width="54" height="44" rx="8"/><rect x="216" y="56" width="54" height="44" rx="8"/>
<rect x="278" y="56" width="54" height="44" rx="8"/><rect x="340" y="56" width="54" height="44" rx="8"/><rect x="402" y="56" width="54" height="44" rx="8"/><rect x="464" y="56" width="54" height="44" rx="8"/></g>
<g font-size="14" text-anchor="middle"><text x="57" y="83">แถว 1</text><text x="119" y="83">แถว 2</text><text x="181" y="83">แถว 3</text><text x="243" y="83">แถว 4</text><text x="305" y="83">แถว 5</text><text x="367" y="83">แถว 6</text><text x="429" y="83">แถว 7</text><text x="491" y="83">แถว 8</text></g>
<g data-only="1"><rect x="120" y="150" width="320" height="100" rx="14" class="f7l"/>
<text x="280" y="190" font-size="17" class="tb" text-anchor="middle">ป้อนเข้าโมเดลทีละกี่แถวดี?</text>
<text x="280" y="222" font-size="15" text-anchor="middle">ทีละ 1 · ทีละ 2 · หรือทั้ง 8 แถว</text></g>
<g data-s="2"><g class="nofill s2" stroke-width="2.5"><path d="M30,108 V116 H146 V108"/><path d="M154,108 V116 H270 V108"/><path d="M278,108 V116 H394 V108"/><path d="M402,108 V116 H518 V108"/></g>
<g font-size="14" class="tb f2" text-anchor="middle"><text x="88" y="138" style="fill:var(--c2)">batch 1</text><text x="212" y="138" style="fill:var(--c2)">batch 2</text><text x="336" y="138" style="fill:var(--c2)">batch 3</text><text x="460" y="138" style="fill:var(--c2)">batch 4</text></g></g>
<g data-s="3"><g class="ln" stroke-width="2" marker-end="url(#L00-eb-ar)"><line x1="88" y1="144" x2="88" y2="168"/><line x1="212" y1="144" x2="212" y2="168"/><line x1="336" y1="144" x2="336" y2="168"/><line x1="460" y1="144" x2="460" y2="168"/></g>
<g class="f3l s3" stroke-width="1.5"><rect x="30" y="172" width="116" height="40" rx="10"/><rect x="154" y="172" width="116" height="40" rx="10"/><rect x="278" y="172" width="116" height="40" rx="10"/><rect x="402" y="172" width="116" height="40" rx="10"/></g>
<g font-size="14" class="tb" text-anchor="middle"><text x="88" y="197">อัปเดต w #1</text><text x="212" y="197">อัปเดต w #2</text><text x="336" y="197">อัปเดต w #3</text><text x="460" y="197">อัปเดต w #4</text></g>
<text x="30" y="236" font-size="14">แต่ละ batch → อัปเดต 1 ครั้ง = 1 iteration</text></g>
<g data-s="4"><path d="M30,248 V256 H518 V248" class="nofill s4" stroke-width="2.5"/>
<text x="274" y="278" font-size="15" class="tb" text-anchor="middle" style="fill:var(--c4)">4 iteration = 1 epoch (เห็นครบทุกแถว 1 รอบ)</text>
<path d="M522,192 C596,192 596,78 524,78" class="nofill s4" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#L00-eb-ar4)"/>
<text x="596" y="132" font-size="14" class="tb">วนใหม่ = epoch 2, 3, …</text></g>
<g data-s="5"><text x="30" y="316" font-size="14">SGD: ทีละ 1 แถว → 8 อัปเดต / epoch</text>
<text x="30" y="344" font-size="14">Batch GD: ทั้ง 8 แถวทีเดียว → 1 อัปเดต / epoch</text>
<g class="f1l s1" stroke-width="1.5"><rect x="400" y="300" width="18" height="18" rx="3"/><rect x="426" y="300" width="18" height="18" rx="3"/><rect x="452" y="300" width="18" height="18" rx="3"/><rect x="478" y="300" width="18" height="18" rx="3"/><rect x="504" y="300" width="18" height="18" rx="3"/><rect x="530" y="300" width="18" height="18" rx="3"/><rect x="556" y="300" width="18" height="18" rx="3"/><rect x="582" y="300" width="18" height="18" rx="3"/></g>
<rect x="398" y="326" width="164" height="22" rx="6" class="nofill s2" stroke-width="2.5"/>
<g class="f1l s1" stroke-width="1"><rect x="400" y="328" width="20" height="18"/><rect x="420" y="328" width="20" height="18"/><rect x="440" y="328" width="20" height="18"/><rect x="460" y="328" width="20" height="18"/><rect x="480" y="328" width="20" height="18"/><rect x="500" y="328" width="20" height="18"/><rect x="520" y="328" width="20" height="18"/><rect x="540" y="328" width="20" height="18"/></g></g>
</svg><ol class="caps">
<li>ข้อมูลฝึก 8 แถว (ผู้ป่วย 8 คนจากตาราง L08)</li>
<li>แบ่งเป็นกลุ่มย่อย (<b>mini-batch</b>) กลุ่มละ 2 แถว → ได้ 4 batch</li>
<li>แต่ละ batch → คำนวณ loss + gradient แล้ว “อัปเดต w 1 ครั้ง” = <b>1 iteration</b></li>
<li>ทำครบ 4 batch = เห็นข้อมูลครบ 1 รอบ = <b>1 epoch</b> → แล้ววนรอบใหม่ (epoch 2, 3, …)</li>
<li>สุดขั้ว 2 แบบ (L08): <b>SGD</b> อัปเดตทุกแถว (8 ครั้ง/epoch) · <b>Batch GD</b> อัปเดตครั้งเดียวต่อรอบ · mini-batch อยู่ตรงกลาง</li>
</ol></div>`,
  caption: 'สูตรลัด: จำนวน iteration ต่อ epoch = จำนวนแถว ÷ ขนาด batch (ปัดขึ้น) · ข้อสอบชอบถามความต่างของ epoch กับ iteration'
},
{
  id: 'overfit', section: 'train-loop', pos: 'bottom', kind: 'ภาพนิ่ง', title: 'Overfitting ในภาพเดียว: ข้อสอบเก่าได้เต็ม แต่ข้อสอบใหม่แย่ลง',
  html: `<svg viewBox="0 0 760 330" role="img" aria-label="overfitting">
<defs><marker id="L00-of-ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker></defs>
<line x1="50" y1="280" x2="366" y2="280" class="ln" stroke-width="1.5" marker-end="url(#L00-of-ax)"/>
<line x1="50" y1="280" x2="50" y2="34" class="ln" stroke-width="1.5" marker-end="url(#L00-of-ax)"/>
<text x="58" y="40" font-size="14" class="tm">loss</text><text x="362" y="300" font-size="14" class="tm" text-anchor="end">epoch (จำนวนรอบที่ฝึก) →</text>
<line x1="169.4" y1="52" x2="169.4" y2="280" class="ln" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="176" y="56" font-size="14" class="tb" style="fill:var(--c3)">หยุดตรงนี้ ✓</text>
<path d="M50.0,60.0 L57.5,75.7 L65.0,90.0 L72.5,103.2 L80.0,115.2 L87.5,126.3 L95.0,136.4 L102.5,145.6 L110.0,154.1 L117.5,161.9 L125.0,169.0 L132.5,175.6 L140.0,181.6 L147.5,187.0 L155.0,192.1 L162.5,196.7 L170.0,200.9 L177.5,204.7 L185.0,208.3 L192.5,211.5 L200.0,214.5 L207.5,217.2 L215.0,219.7 L222.5,222.0 L230.0,224.1 L237.5,226.0 L245.0,227.8 L252.5,229.4 L260.0,230.9 L267.5,232.2 L275.0,233.5 L282.5,234.6 L290.0,235.6 L297.5,236.6 L305.0,237.5 L312.5,238.3 L320.0,239.0 L327.5,239.7 L335.0,240.3 L342.5,240.8 L350.0,241.4" class="nofill s1" stroke-width="3"/>
<path d="M50.0,71.0 L57.5,89.0 L65.0,104.7 L72.5,118.4 L80.0,130.3 L87.5,140.5 L95.0,149.3 L102.5,156.8 L110.0,163.1 L117.5,168.3 L125.0,172.6 L132.5,176.1 L140.0,178.8 L147.5,180.7 L155.0,182.1 L162.5,182.8 L170.0,183.0 L177.5,182.8 L185.0,182.0 L192.5,180.9 L200.0,179.4 L207.5,177.5 L215.0,175.2 L222.5,172.7 L230.0,169.8 L237.5,166.7 L245.0,163.3 L252.5,159.6 L260.0,155.7 L267.5,151.5 L275.0,147.1 L282.5,142.5 L290.0,137.7 L297.5,132.7 L305.0,127.4 L312.5,122.0 L320.0,116.4 L327.5,110.5 L335.0,104.5 L342.5,98.3 L350.0,92.0" class="nofill s2" stroke-width="3"/>
<g font-size="14" class="tb" style="paint-order:stroke;stroke:var(--vbg);stroke-width:5px;stroke-linejoin:round">
<text x="356" y="80" text-anchor="end" style="fill:var(--c2)">validation (ข้อสอบใหม่)</text>
<text x="300" y="218" text-anchor="middle" style="fill:var(--c1)">train (ข้อสอบเก่า)</text></g>
<g font-size="14" class="tm" text-anchor="middle"><text class="tm" x="108" y="272">← เรียนน้อยไป</text><text class="tm" x="268" y="272">จำเกินไป →</text></g>
<text x="396" y="26" font-size="14" class="tm">เส้นที่โมเดลวาดผ่านจุดข้อมูล:</text>
<g class="nofill ln" stroke-width="1.5"><rect x="396" y="40" width="112" height="190" rx="12"/><rect x="520" y="40" width="112" height="190" rx="12"/><rect x="644" y="40" width="112" height="190" rx="12"/></g>
<line x1="402" y1="140" x2="502" y2="140" class="s4" stroke-width="3"/>
<line x1="526" y1="190.3" x2="626" y2="96.2" class="s4" stroke-width="3"/>
<path transform="translate(644,0)" d="M12,196 C16.3,183.7 19.5,156.9 28,150 C36.5,143.1 35.5,177.5 44,170 C52.5,162.5 51.5,129.5 60,122 C68.5,114.5 67.5,150.0 76,142 C84.5,134.0 84.5,101.1 92,92 C99.5,82.9 100.8,103.7 104,108" class="nofill s4" stroke-width="3"/>
<g class="f1"><g transform="translate(396,0)"><circle cx="12" cy="196" r="4.5"/><circle cx="28" cy="150" r="4.5"/><circle cx="44" cy="170" r="4.5"/><circle cx="60" cy="122" r="4.5"/><circle cx="76" cy="142" r="4.5"/><circle cx="92" cy="92" r="4.5"/><circle cx="104" cy="108" r="4.5"/></g>
<g transform="translate(520,0)"><circle cx="12" cy="196" r="4.5"/><circle cx="28" cy="150" r="4.5"/><circle cx="44" cy="170" r="4.5"/><circle cx="60" cy="122" r="4.5"/><circle cx="76" cy="142" r="4.5"/><circle cx="92" cy="92" r="4.5"/><circle cx="104" cy="108" r="4.5"/></g>
<g transform="translate(644,0)"><circle cx="12" cy="196" r="4.5"/><circle cx="28" cy="150" r="4.5"/><circle cx="44" cy="170" r="4.5"/><circle cx="60" cy="122" r="4.5"/><circle cx="76" cy="142" r="4.5"/><circle cx="92" cy="92" r="4.5"/><circle cx="104" cy="108" r="4.5"/></g></g>
<g text-anchor="middle"><text x="452" y="254" font-size="15" class="tb">น้อยไป</text><text x="576" y="254" font-size="15" class="tb" style="fill:var(--c3)">พอดี ✓</text><text x="700" y="254" font-size="15" class="tb" style="fill:var(--c5)">จำเกินไป</text>
<text x="452" y="276" font-size="14" class="tm">underfit</text><text x="576" y="276" font-size="14" class="tm">good fit</text><text x="700" y="276" font-size="14" class="tm">overfit</text></g>
<text x="396" y="312" font-size="14">overfit = ท่องจำข้อเก่า แต่เจอข้อใหม่ทำไม่ได้</text>
</svg>`,
  caption: 'ดูเส้น validation (ข้อมูลที่โมเดลไม่เคยเห็น) เสมอ — ถ้าเริ่มสูงขึ้นขณะที่ train ยังลด แปลว่าเริ่ม “ท่องจำ” แล้ว · train/validation/test เป็นเรื่องที่ไม่เปลี่ยนตั้งแต่ L08 (ตัวเลขในภาพเป็นภาพจำลอง)'
},

/* ============ 11) วิธีเรียนให้ผ่าน ============ */
{
  id: 'study-path', section: 'how-to-study', pos: 'top', kind: 'ภาพนิ่ง', title: 'เส้นทางเตรียมสอบด้วยเว็บนี้ + แผนเวลาในห้องสอบ',
  html: `<svg viewBox="0 0 760 316" role="img" aria-label="เส้นทางเตรียมสอบ">
<defs><marker id="L00-sp-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="tm"/></marker></defs>
<g class="ln v-flow" stroke-width="2.5" marker-end="url(#L00-sp-ar)"><line x1="142" y1="96" x2="157" y2="96"/><line x1="294" y1="96" x2="309" y2="96"/><line x1="446" y1="96" x2="461" y2="96"/><line x1="598" y1="96" x2="613" y2="96"/></g>
<rect x="8" y="40" width="132" height="112" rx="14" class="f4l s4" stroke-width="2"/>
<rect x="160" y="40" width="132" height="112" rx="14" class="f1l s1" stroke-width="2"/>
<rect x="312" y="40" width="132" height="112" rx="14" class="f3l s3" stroke-width="2"/>
<rect x="464" y="40" width="132" height="112" rx="14" class="f2l s2" stroke-width="2"/>
<rect x="616" y="40" width="136" height="112" rx="14" class="f5l s5" stroke-width="2"/>
<g font-size="14" class="tb" text-anchor="middle"><circle cx="28" cy="40" r="13" class="f4"/><text x="28" y="45" class="tw">1</text><circle cx="180" cy="40" r="13" class="f1"/><text x="180" y="45" class="tw">2</text>
<circle cx="332" cy="40" r="13" class="f3"/><text x="332" y="45" class="tw">3</text><circle cx="484" cy="40" r="13" class="f2"/><text x="484" y="45" class="tw">4</text><circle cx="636" cy="40" r="13" class="f5"/><text x="636" y="45" class="tw">5</text></g>
<g text-anchor="middle">
<text x="74" y="80" font-size="15" class="tb">เริ่ม L00</text><text x="74" y="104" font-size="14">ปูพื้นคณิต</text><text x="74" y="128" font-size="14">ดูภาพ + demo</text>
<text x="226" y="80" font-size="15" class="tb">อ่านทีละบท</text><text x="226" y="104" font-size="14">ดูภาพรวมก่อน</text><text x="226" y="128" font-size="14">แล้วกดทีละขั้น ▶</text>
<text x="378" y="80" font-size="15" class="tb">ฝึกมือ</text><text x="378" y="104" font-size="14">เครื่องมือในบท</text><text x="378" y="128" font-size="14">+ แบบฝึกท้ายบท</text>
<text x="530" y="80" font-size="15" class="tb">ทวน</text><text x="530" y="104" font-size="14">แฟลชการ์ด</text><text x="530" y="128" font-size="14">+ ชีท A4</text>
<text x="684" y="80" font-size="15" class="tb">ข้อสอบจำลอง</text><text x="684" y="104" font-size="14">ปรนัย 50 ข้อ</text><text x="684" y="128" font-size="14">+ อัตนัย 3 ข้อ</text></g>
<text x="8" y="196" font-size="15" class="tb">วันสอบ 180 นาที (แผนแนะนำ)</text>
<rect x="8" y="210" width="246.7" height="40" rx="8" class="f1"/><rect x="254.7" y="210" width="390.6" height="40" class="f2"/><rect x="645.3" y="210" width="106.7" height="40" rx="8" class="f3"/>
<g font-size="15" class="tw tb" text-anchor="middle"><text x="131" y="236" class="tw">ปรนัย ~60 นาที</text><text x="450" y="236" class="tw">อัตนัย ~95 นาที (ข้อละ ~30)</text><text x="698" y="236" class="tw">ทวน 25</text></g>
<text x="8" y="276" font-size="14">ปรนัย 50 ข้อ = 15 คะแนน (ข้อละ 0.3) · อัตนัย 3 ข้อ = 15 คะแนน · นำชีท A4 เข้าได้ไม่เกิน 10 แผ่น</text>
<text x="8" y="302" font-size="14" class="tm">ปรนัยข้อไหนคิดเกิน 2 นาที → ข้ามไปก่อน แล้วค่อยกลับมา</text>
</svg>`,
  caption: 'ทำแบบฝึกท้ายบท L00 ให้ได้ 8/10 ขึ้นไปก่อน แล้วค่อยเริ่ม L08 · ทุกบทมี “บทนี้ใน 1 ภาพ” ไว้ดูก่อนอ่าน'
}
]);
