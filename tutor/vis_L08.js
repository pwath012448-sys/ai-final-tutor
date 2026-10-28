/* Lecture 08 · สื่อภาพประกอบ (ภาพนิ่ง / ทีละขั้น / เคลื่อนไหว)
   ทุกตัวเลขตรวจกับสไลด์ L08 + คำนวณซ้ำด้วย python แล้ว */
TUTOR.addVisuals('L08', [

/* ================= INTRO ================= */
{
  id: 'overview', section: 'intro', kind: 'ภาพนิ่ง', title: 'บทนี้ใน 1 ภาพ: จากเซลล์ประสาท → Deep Learning',
  html: `<svg viewBox="0 0 760 400" font-size="15" role="img" aria-label="ภาพรวม Lecture 08">
<defs><marker id="L08-ov-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<rect x="12" y="12" width="432" height="30" rx="10" class="f1l"/><text x="228" y="32" text-anchor="middle" class="tb">Part 1 · เซลล์ประสาทเทียม &amp; Perceptron</text>
<rect x="468" y="12" width="128" height="30" rx="10" class="f3l"/><text x="532" y="32" text-anchor="middle" class="tb">Part 2 · GD</text>
<rect x="620" y="12" width="128" height="30" rx="10" class="f6l"/><text x="684" y="32" text-anchor="middle" class="tb">Part 3 · Deep</text>
<g stroke-width="2">
<rect x="12" y="54" width="128" height="240" rx="14" class="f4l s4"/>
<rect x="164" y="54" width="128" height="240" rx="14" class="f2l s2"/>
<rect x="316" y="54" width="128" height="240" rx="14" class="f1l s1"/>
<rect x="468" y="54" width="128" height="240" rx="14" class="f3l s3"/>
<rect x="620" y="54" width="128" height="240" rx="14" class="f6l s6"/>
</g>
<path d="M142 174H159" class="ln" stroke-width="2.5" marker-end="url(#L08-ov-ar)"/>
<path d="M294 174H311" class="ln" stroke-width="2.5" marker-end="url(#L08-ov-ar)"/>
<path d="M446 174H463" class="ln" stroke-width="2.5" marker-end="url(#L08-ov-ar)"/>
<path d="M598 174H615" class="ln" stroke-width="2.5" marker-end="url(#L08-ov-ar)"/>
<!-- 1 neuron -->
<g class="s4 nofill" stroke-width="3" stroke-linecap="round"><path d="M62 158L46 140M46 140L38 136M46 140L44 128M60 174L44 190M44 190L34 192M44 190L46 202M72 152V132M72 132L64 124M72 132L80 124"/><path d="M85 166H112M112 166L122 156M112 166H124M112 166L122 176"/></g>
<circle cx="72" cy="166" r="14" class="f4"/>
<g class="f3"><circle cx="122" cy="156" r="3.5"/><circle cx="125" cy="166" r="3.5"/><circle cx="122" cy="176" r="3.5"/></g>
<!-- 2 MCP -->
<g class="ln" stroke-width="2"><path d="M191 140L212 158M191 166H210M191 192L212 174M242 166H254"/></g>
<g class="f1l s1" stroke-width="2"><circle cx="184" cy="140" r="7"/><circle cx="184" cy="166" r="7"/><circle cx="184" cy="192" r="7"/></g>
<circle cx="226" cy="166" r="16" class="f2l s2" stroke-width="2"/><text x="226" y="172" text-anchor="middle" class="tb" font-size="17">Σ</text>
<rect x="254" y="150" width="30" height="32" rx="6" class="bgp s4" stroke-width="2"/><path d="M258 176H269V156H280" class="s4 nofill" stroke-width="2.5"/>
<!-- 3 perceptron -->
<rect x="332" y="122" width="96" height="88" rx="8" class="bgp s1" stroke-width="1.5"/>
<path d="M360 208L412 124" class="s3" stroke-width="3" stroke-dasharray="6 4"/>
<g class="f1"><circle cx="412" cy="160" r="5"/><circle cx="420" cy="186" r="5"/><circle cx="404" cy="196" r="5"/><circle cx="422" cy="140" r="5"/></g>
<g class="f2"><rect x="340" y="136" width="9" height="9"/><rect x="352" y="164" width="9" height="9"/><rect x="336" y="186" width="9" height="9"/><rect x="368" y="136" width="9" height="9"/></g>
<!-- 4 GD bowl -->
<path d="M484 128Q532 236 580 128" class="s3 nofill" stroke-width="3"/>
<circle cx="514.7" cy="175" r="3" class="f2l s2"/><circle cx="524.3" cy="180.7" r="3" class="f2l s2"/>
<circle cx="503" cy="154" r="8" class="f2"/>
<!-- 5 MLP -->
<path d="M644 140L684 128M644 140L684 153M644 140L684 179M644 140L684 204M644 166L684 128M644 166L684 153M644 166L684 179M644 166L684 204M644 192L684 128M644 192L684 153M644 192L684 179M644 192L684 204M684 128L724 166M684 153L724 166M684 179L724 166M684 204L724 166" class="ln" stroke-width="1.2"/>
<g class="f6l s6" stroke-width="2"><circle cx="644" cy="140" r="7"/><circle cx="644" cy="166" r="7"/><circle cx="644" cy="192" r="7"/><circle cx="684" cy="128" r="7"/><circle cx="684" cy="153" r="7"/><circle cx="684" cy="179" r="7"/><circle cx="684" cy="204" r="7"/><circle cx="724" cy="166" r="8"/></g>
<g text-anchor="middle">
<text x="76" y="80" class="tm" font-size="14">ธรรมชาติ</text><text x="76" y="104" class="tb" font-size="16">เซลล์ประสาท</text>
<text x="76" y="240" font-size="14">รับหลายสัญญาณ</text><text x="76" y="262" font-size="14">ถึงเกณฑ์ → ยิง</text>
<text x="228" y="80" class="tm" font-size="14">1943</text><text x="228" y="104" class="tb" font-size="16">MCP neuron</text>
<text x="228" y="240" font-size="14">รวม → เทียบ θ</text><text x="228" y="262" font-size="14">ยังเรียนเองไม่ได้</text>
<text x="380" y="80" class="tm" font-size="14">1957</text><text x="380" y="104" class="tb" font-size="16">Perceptron</text>
<text x="380" y="240" font-size="14">ทายผิด → ปรับ w</text><text x="380" y="262" font-size="14">= เส้นตรง 1 เส้น</text>
<text x="532" y="80" class="tm" font-size="14">1960</text><text x="532" y="104" class="tb" font-size="16">Adaline + GD</text>
<text x="532" y="240" font-size="14">วัดว่าผิดเท่าไร</text><text x="532" y="262" font-size="14">แล้วเดินลงเขา</text>
<text x="684" y="80" class="tm" font-size="14">ต่อยอด</text><text x="684" y="104" class="tb" font-size="16">MLP / Deep</text>
<text x="684" y="240" font-size="14">ต่อหลายชั้น</text><text x="684" y="262" font-size="14">+ backprop</text>
</g>
<rect x="12" y="310" width="736" height="78" rx="14" class="f7l s7" stroke-width="1.5"/>
<text x="380" y="340" text-anchor="middle" class="tb" font-size="16">หัวใจเดียวทั้งบท: ทาย → วัดว่าผิดเท่าไร → ปรับน้ำหนัก w ทีละนิด → ทายใหม่</text>
<text x="380" y="368" text-anchor="middle" class="tm" font-size="14">Part 4 · Lab 08: เขียน Perceptron และ Adaline เองจากศูนย์ แล้วต่อ pipeline บนข้อมูลจริง</text>
</svg>`,
  caption: 'อ่านซ้าย → ขวา: แต่ละขั้นแก้จุดอ่อนของขั้นก่อน — MCP เรียนเองไม่ได้ → Perceptron เรียนได้แต่เป็นเส้นตรง → Adaline วัดความผิดละเอียดขึ้นจึงเดินลงเขาได้ → MLP ต่อหลายชั้นแก้โจทย์ซับซ้อน'
},
{
  id: 'glossary', section: 'intro', kind: 'ภาพนิ่ง', title: 'ศัพท์ที่ต้องรู้ก่อนเริ่ม (10 คำ)',
  html: `<svg viewBox="0 0 760 412" font-size="15" role="img" aria-label="อภิธานศัพท์">
<g stroke-width="1.5">
<rect x="12" y="12" width="362" height="70" rx="12" class="f1l"/><rect x="386" y="12" width="362" height="70" rx="12" class="f2l"/>
<rect x="12" y="92" width="362" height="70" rx="12" class="f2l"/><rect x="386" y="92" width="362" height="70" rx="12" class="f4l"/>
<rect x="12" y="172" width="362" height="70" rx="12" class="f3l"/><rect x="386" y="172" width="362" height="70" rx="12" class="f3l"/>
<rect x="12" y="252" width="362" height="70" rx="12" class="f5l"/><rect x="386" y="252" width="362" height="70" rx="12" class="f5l"/>
<rect x="12" y="332" width="362" height="70" rx="12" class="f6l"/><rect x="386" y="332" width="362" height="70" rx="12" class="f6l"/>
</g>
<g stroke-width="2.5">
<circle cx="50" cy="47" r="24" class="bgp s1"/><circle cx="424" cy="47" r="24" class="bgp s2"/>
<circle cx="50" cy="127" r="24" class="bgp s2"/><circle cx="424" cy="127" r="24" class="bgp s4"/>
<circle cx="50" cy="207" r="24" class="bgp s3"/><circle cx="424" cy="207" r="24" class="bgp s3"/>
<circle cx="50" cy="287" r="24" class="bgp s5"/><circle cx="424" cy="287" r="24" class="bgp s5"/>
<circle cx="50" cy="367" r="24" class="bgp s6"/><circle cx="424" cy="367" r="24" class="bgp s6"/>
</g>
<g text-anchor="middle" class="tb" font-size="22">
<text x="50" y="55">x</text><text x="424" y="55">w</text>
<text x="50" y="135">b</text><text x="424" y="135">z</text>
<text x="50" y="215">ŷ</text><text x="424" y="215">y</text>
<text x="50" y="295">e</text><text x="424" y="295">L</text>
<text x="50" y="375">η</text><text x="424" y="375">↻</text>
</g>
<g class="tb" font-size="16">
<text x="88" y="41">Feature (x) · ข้อมูลขาเข้า</text><text x="462" y="41">Weight (w) · น้ำหนัก</text>
<text x="88" y="121">Bias (b) · ค่าเลื่อนเส้น</text><text x="462" y="121">Net input (z) · คะแนนรวม</text>
<text x="88" y="201">Prediction (ŷ) · คำทาย</text><text x="462" y="201">Label (y) · คำตอบจริง</text>
<text x="88" y="281">Error (e) · ทายพลาดเท่าไร</text><text x="462" y="281">Loss / Cost (L) · ความผิดรวม</text>
<text x="88" y="361">Learning rate (η) · ขนาดก้าว</text><text x="462" y="361">Epoch · เรียนครบข้อมูล 1 รอบ</text>
</g>
<g font-size="14">
<text x="88" y="65">สิ่งที่รู้ เช่น glucose = 148, BMI = 33.6</text><text x="462" y="65">input นั้นสำคัญแค่ไหน = ปุ่มที่โมเดลหมุนปรับ</text>
<text x="88" y="145">เกณฑ์ที่ย้ายมาไว้ในสมการ (b = −θ)</text><text x="462" y="145">z = w₁x₁ + w₂x₂ + b (คูณแล้วบวก)</text>
<text x="88" y="225">ŷ = f(z) เช่น z ≥ 0 → +1 ไม่งั้น −1</text><text x="462" y="225">เฉลยในข้อมูล เช่น เบาหวาน +1 / ไม่เป็น −1</text>
<text x="88" y="305">e = y − ŷ · ถ้า 0 แปลว่าทายถูก</text><text x="462" y="305">รวมความผิดทุกแถว ยิ่งต่ำยิ่งดี เช่น SSE</text>
<text x="88" y="385">ก้าวใหญ่ = เร็ว แต่เสี่ยงก้าวเลยเป้า</text><text x="462" y="385">ฝึกหลายรอบ (หลาย epoch) จนเก่ง</text>
</g>
</svg>`,
  caption: 'สัญลักษณ์เหล่านี้โผล่ในทุกภาพของบทนี้ — เจอตัวไหนแล้วงง กลับมาดูการ์ดนี้ · ŷ อ่านว่า “วาย-แฮต” · η อ่านว่า “อีตา”'
},

/* ================= 1) big ================= */
{
  id: 'loop', section: 'big', kind: 'เคลื่อนไหว', title: 'เรียนรู้ = ทาย → ดูว่าผิด → ปรับ (เหมือนหัดยิงธนู)',
  html: `<svg viewBox="0 0 760 330" font-size="15" role="img" aria-label="วงจรการเรียนรู้">
<defs>
<marker id="L08-lp-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker>
<marker id="L08-lp-ar5" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" class="f5"/></marker>
</defs>
<circle r="7" class="f1"><animateMotion dur="3s" repeatCount="indefinite" path="M85 90H657"/></circle>
<circle r="7" class="f5"><animateMotion dur="3.2s" repeatCount="indefinite" path="M657 150V261H250V150"/></circle>
<path d="M162 90H201" class="ln v-flow" stroke-width="2.5" marker-end="url(#L08-lp-ar)"/>
<path d="M347 90H386" class="ln v-flow" stroke-width="2.5" marker-end="url(#L08-lp-ar)"/>
<path d="M522 90H561" class="ln v-flow" stroke-width="2.5" marker-end="url(#L08-lp-ar)"/>
<path d="M657 152V261H566" class="s5 nofill v-flow" stroke-width="2.5" marker-end="url(#L08-lp-ar5)"/>
<path d="M278 261H250V156" class="s5 nofill v-flow" stroke-width="2.5" marker-end="url(#L08-lp-ar5)"/>
<text x="668" y="210" class="f5 tb" font-size="14">feedback</text>
<rect x="10" y="30" width="150" height="120" rx="12" class="f1l s1" stroke-width="2"/>
<text x="85" y="56" text-anchor="middle" class="tb">① ข้อมูลมีเฉลย</text>
<text x="85" y="84" text-anchor="middle" font-size="14">x₁ = 85 (glucose)</text>
<text x="85" y="106" text-anchor="middle" font-size="14">x₂ = 26.6 (BMI)</text>
<text x="85" y="132" text-anchor="middle" font-size="14" class="tb">y = −1 (เฉลย)</text>
<rect x="205" y="30" width="140" height="120" rx="12" class="f2l s2" stroke-width="2"/>
<text x="275" y="56" text-anchor="middle" class="tb">② โมเดล</text>
<g class="bgp s2" stroke-width="2"><circle cx="240" cy="96" r="13"/><circle cx="275" cy="96" r="13"/><circle cx="310" cy="96" r="13"/></g>
<path d="M240 96V85M275 96L284 88M310 96L301 88" class="s2" stroke-width="2.5" stroke-linecap="round"/>
<g text-anchor="middle" font-size="14"><text x="240" y="132">w₁</text><text x="275" y="132">w₂</text><text x="310" y="132">b</text></g>
<rect x="390" y="30" width="130" height="120" rx="12" class="f4l s4" stroke-width="2"/>
<text x="455" y="56" text-anchor="middle" class="tb">③ ทาย</text>
<text x="455" y="102" text-anchor="middle" class="tb" font-size="24">ŷ = +1</text>
<text x="455" y="130" text-anchor="middle" font-size="14" class="tm">(ทายว่าเป็น)</text>
<rect x="565" y="30" width="185" height="120" rx="12" class="f5l s5" stroke-width="2"/>
<text x="657" y="56" text-anchor="middle" class="tb">④ เทียบเฉลย</text>
<text x="657" y="84" text-anchor="middle" class="tb" font-size="16">e = y − ŷ</text>
<text x="657" y="108" text-anchor="middle" font-size="14">= −1 − (+1) = −2</text>
<text x="657" y="134" text-anchor="middle" class="f5 tb v-pulse">ทายผิด!</text>
<rect x="280" y="222" width="282" height="78" rx="12" class="f3l s3" stroke-width="2"/>
<text x="421" y="252" text-anchor="middle" class="tb">⑤ ปรับ w ทีละนิด</text>
<text x="421" y="280" text-anchor="middle" font-size="14">ผิดมาก → ปรับมาก · ถูก → ไม่ปรับ</text>
<circle cx="52" cy="262" r="36" class="f5l s5" stroke-width="2"/><circle cx="52" cy="262" r="23" class="bgp s5" stroke-width="2"/><circle cx="52" cy="262" r="10" class="f5"/>
<path d="M14 212L42 248" class="s2" stroke-width="3" stroke-linecap="round"/><circle cx="43" cy="249" r="4" class="f2"/>
<text x="100" y="246" class="tb">เหมือนหัดยิงธนู</text>
<text x="100" y="270" font-size="14">ยิง → ดูว่าพลาด</text>
<text x="100" y="292" font-size="14">→ ปรับมุม → ยิงใหม่</text>
</svg>`,
  caption: 'วงจรนี้คือหัวใจของ supervised learning ทุกโมเดลในบท: ทาย ŷ → วัดความผิด e = y − ŷ → ปรับ w → ทายใหม่ วนไปเรื่อย ๆ จนผิดน้อยที่สุด (ตัวเลขคือแถว 2 ของตัวอย่างเบาหวานในสไลด์)'
},

/* ================= 2) mcp ================= */
{
  id: 'bio-mcp', section: 'mcp', kind: 'ภาพนิ่ง', title: 'เซลล์ประสาทจริง ↔ MCP neuron (จับคู่ทีละส่วน)',
  html: `<svg viewBox="0 0 760 400" font-size="15" role="img" aria-label="เทียบเซลล์ประสาทจริงกับ MCP">
<defs><marker id="L08-bio-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<text x="16" y="26" class="tb" font-size="16">เซลล์ประสาทจริง</text>
<text x="400" y="66" text-anchor="middle" class="tm" font-size="14">ถึงเกณฑ์ → fire (ยิงสัญญาณ)</text>
<path d="M172 82L128 56L104 40M128 56L106 64M168 95H118L92 84M118 95L94 106M172 110L128 134L104 150M128 134L108 128" class="s1 nofill" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="232" y1="95" x2="560" y2="95" class="s3" stroke-width="5"/>
<g class="f7l s7" stroke-width="1.5"><rect x="256" y="85" width="56" height="20" rx="9"/><rect x="330" y="85" width="56" height="20" rx="9"/><rect x="404" y="85" width="56" height="20" rx="9"/><rect x="478" y="85" width="56" height="20" rx="9"/></g>
<path d="M560 95L592 72M560 95H598M560 95L592 118" class="s3" stroke-width="4" stroke-linecap="round"/>
<g class="f3"><circle cx="592" cy="72" r="6"/><circle cx="600" cy="95" r="6"/><circle cx="592" cy="118" r="6"/></g>
<circle cx="200" cy="95" r="32" class="f2l s2" stroke-width="3"/><circle cx="200" cy="95" r="9" class="f2"/>
<g text-anchor="middle">
<text x="100" y="178" class="tb f1">Dendrite</text><text x="100" y="198" font-size="14">รับสัญญาณเข้า</text>
<text x="215" y="178" class="tb f2">Soma</text><text x="215" y="198" font-size="14">รวม + เช็คเกณฑ์</text>
<text x="400" y="178" class="tb f3">Axon</text><text x="400" y="198" font-size="14">ส่งสัญญาณออก</text>
<text x="600" y="178" class="tb f3">Synapse</text><text x="600" y="198" font-size="14">ส่งต่อเซลล์ถัดไป</text>
</g>
<g stroke-width="2" stroke-dasharray="5 5" fill="none"><path d="M100 206V250" class="s1"/><path d="M215 206L296 282" class="s2"/><path d="M400 206L588 296" class="s3"/></g>
<text x="744" y="238" text-anchor="end" class="tb" font-size="16">MCP neuron (1943)</text>
<g class="ln" stroke-width="2"><path d="M118 273L273 316M118 318H272M118 377L274 330"/></g>
<g class="f1l s1" stroke-width="2"><circle cx="100" cy="270" r="18"/><circle cx="100" cy="318" r="18"/><circle cx="100" cy="380" r="18"/></g>
<g text-anchor="middle" class="tb"><text x="100" y="275">x₁</text><text x="100" y="323">x₂</text><text x="100" y="385">xₘ</text></g>
<text x="100" y="356" text-anchor="middle" class="tm">⋮</text>
<g class="tb f2" font-size="14"><text x="190" y="285">w₁</text><text x="190" y="311">w₂</text><text x="190" y="372">wₘ</text></g>
<rect x="262" y="282" width="242" height="106" rx="12" class="s2 nofill" stroke-width="2" stroke-dasharray="6 4"/>
<circle cx="300" cy="322" r="26" class="f2l s2" stroke-width="2"/><text x="300" y="330" text-anchor="middle" class="tb" font-size="22">Σ</text>
<path d="M326 322H368" class="ln" stroke-width="2" marker-end="url(#L08-bio-ar)"/>
<rect x="372" y="300" width="120" height="44" rx="10" class="f4l s4" stroke-width="2"/><text x="432" y="328" text-anchor="middle" class="tb" font-size="16">z ≥ θ ?</text>
<text x="300" y="376" text-anchor="middle" font-size="14">z = Σ wᵢxᵢ</text><text x="432" y="372" text-anchor="middle" font-size="14">θ = เกณฑ์</text>
<path d="M492 322H562" class="ln" stroke-width="2" marker-end="url(#L08-bio-ar)"/>
<circle cx="590" cy="322" r="24" class="f3l s3" stroke-width="2"/><text x="590" y="328" text-anchor="middle" class="tb">1/0</text>
<text x="624" y="316" font-size="14">1 = fire</text><text x="624" y="338" font-size="14">0 = ไม่ fire</text>
</svg>`,
  caption: 'สีเดียวกัน = หน้าที่เดียวกัน: dendrite ↔ input x · soma ↔ ผลรวม z + เกณฑ์ θ · axon ↔ output 0/1 · จุดอ่อนของ MCP: ยังเรียนเองไม่ได้ ค่า w และ θ ต้องมีคนตั้งให้'
},
{
  id: 'mcp-ex', section: 'mcp', kind: 'ทีละขั้น', title: 'ตัวอย่างสไลด์ 7 ทีละขั้น: θ = −0.016',
  html: `<div class="stepper"><svg viewBox="0 0 760 360" font-size="15" role="img" aria-label="คำนวณ MCP ทีละขั้น">
<defs><marker id="L08-mx-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<g text-anchor="middle" font-size="14" class="tm"><text x="62" y="24">input (x)</text><text x="215" y="24">น้ำหนัก (w)</text><text x="366" y="24" data-s="2">คูณกัน</text></g>
<rect x="12" y="36" width="100" height="44" rx="10" class="f1l s1" stroke-width="2"/><text x="62" y="64" text-anchor="middle" class="tb">x₁ = 3</text>
<text x="131" y="64" text-anchor="middle" class="tm" font-size="18">×</text>
<rect x="150" y="36" width="130" height="44" rx="10" class="f2l s2" stroke-width="2"/><text x="215" y="64" text-anchor="middle" class="tb">w₁ = −0.006</text>
<rect x="12" y="116" width="100" height="44" rx="10" class="f1l s1" stroke-width="2"/><text x="62" y="144" text-anchor="middle" class="tb">x₂ = 2</text>
<text x="131" y="144" text-anchor="middle" class="tm" font-size="18">×</text>
<rect x="150" y="116" width="130" height="44" rx="10" class="f2l s2" stroke-width="2"/><text x="215" y="144" text-anchor="middle" class="tb">w₂ = −0.005</text>
<g data-s="2">
<text x="298" y="64" text-anchor="middle" class="tm" font-size="18">=</text><rect x="316" y="36" width="100" height="44" rx="10" class="f7l s7" stroke-width="2"/><text x="366" y="64" text-anchor="middle" class="tb">−0.018</text>
<text x="298" y="144" text-anchor="middle" class="tm" font-size="18">=</text><rect x="316" y="116" width="100" height="44" rx="10" class="f7l s7" stroke-width="2"/><text x="366" y="144" text-anchor="middle" class="tb">−0.010</text>
</g>
<g data-s="3">
<path d="M416 58L446 84M416 138L446 112" class="ln" stroke-width="2"/>
<circle cx="470" cy="98" r="26" class="f2l s2" stroke-width="2"/><text x="470" y="106" text-anchor="middle" class="tb" font-size="20">Σ</text>
<path d="M496 98H516" class="ln" stroke-width="2" marker-end="url(#L08-mx-ar)"/>
<rect x="520" y="76" width="120" height="44" rx="10" class="f4l s4" stroke-width="2"/><text x="580" y="104" text-anchor="middle" class="tb">z = −0.028</text>
</g>
<g data-only="1,2,3"><rect x="60" y="214" width="640" height="76" rx="12" class="nofill ln" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="380" y="258" text-anchor="middle" class="tm" font-size="14">ขั้นต่อไป: เอา z ไปเทียบกับเกณฑ์ θ = −0.016 บนเส้นจำนวนตรงนี้</text></g>
<g data-s="5">
<path d="M640 98H656" class="ln" stroke-width="2" marker-end="url(#L08-mx-ar)"/>
<rect x="660" y="70" width="88" height="56" rx="10" class="f5l s5" stroke-width="2"/><text x="704" y="95" text-anchor="middle" class="tb">f(z) = 0</text><text x="704" y="116" text-anchor="middle" font-size="14">ไม่ fire</text>
</g>
<g data-s="4">
<text x="16" y="196" class="tb">เทียบกับเกณฑ์ θ</text>
<rect x="60" y="214" width="435" height="36" class="f5l"/><rect x="495" y="214" width="205" height="36" class="f3l"/>
<text x="278" y="237" text-anchor="middle" font-size="14">ต่ำกว่า θ → ไม่ fire (0)</text><text x="598" y="237" text-anchor="middle" font-size="14">ถึง θ → fire (1)</text>
<line x1="56" y1="250" x2="708" y2="250" class="ln" stroke-width="2"/>
<path d="M60 244V256M188 244V256M316 244V256M444 244V256M572 244V256M700 244V256" class="ln" stroke-width="2"/>
<g text-anchor="middle" font-size="13" class="tm"><text x="60" y="272">−0.05</text><text x="188" y="272">−0.04</text><text x="316" y="272">−0.03</text><text x="444" y="272">−0.02</text><text x="572" y="272">−0.01</text><text x="700" y="272">0</text></g>
<line x1="495.2" y1="206" x2="495.2" y2="258" class="s4" stroke-width="3"/><text x="495" y="202" text-anchor="middle" class="tb f4" font-size="14">θ = −0.016</text>
<circle cx="341.6" cy="250" r="8" class="f2"/><text x="341.6" y="296" text-anchor="middle" class="tb f2">z = −0.028</text>
</g>
<g data-s="5">
<g class="f2l s2" stroke-width="2"><circle cx="136.8" cy="250" r="6"/><circle cx="316" cy="250" r="6"/><circle cx="98.4" cy="250" r="6"/></g>
<g class="bgp s5" stroke-width="1.5"><rect x="14" y="310" width="180" height="40" rx="10"/><rect x="198" y="310" width="180" height="40" rx="10"/><rect x="382" y="310" width="180" height="40" rx="10"/><rect x="566" y="310" width="180" height="40" rx="10"/></g>
<g text-anchor="middle" font-size="14"><text x="104" y="336">(3,2): z = −0.028 → 0</text><text x="288" y="336">(4,4): z = −0.044 → 0</text><text x="472" y="336">(5,0): z = −0.030 → 0</text><text x="656" y="336">(7,1): z = −0.047 → 0</text></g>
</g>
</svg><ol class="caps">
<li>ตั้งค่าจากสไลด์ 7: น้ำหนัก w₁ = −0.006, w₂ = −0.005 และเกณฑ์ θ = −0.016 · ลองตัวอย่างแรก x⁽¹⁾ = (3, 2)</li>
<li>คูณ input กับน้ำหนักทีละคู่: (−0.006)(3) = −0.018 และ (−0.005)(2) = −0.010</li>
<li>รวมกันเป็นคะแนนรวม (net input): z = −0.018 + (−0.010) = −0.028</li>
<li>เทียบกับเกณฑ์บนเส้นจำนวน: −0.028 อยู่ทางซ้ายของ θ = −0.016 แปลว่า “น้อยกว่า” → ไม่ถึงเกณฑ์ (ระวัง: เลขติดลบ ยิ่งไปทางซ้ายยิ่งน้อย)</li>
<li>ผลคือ f(z) = 0 (ไม่ fire) · ลองครบ 4 ตัวอย่างในสไลด์ ได้ 0 หมด เพราะ w ติดลบทั้งคู่แต่ x เป็นบวก z จึงต่ำกว่า θ เสมอ</li>
</ol></div>`,
  caption: 'MCP ทำแค่ 2 อย่าง: คูณ-บวก (ได้ z) แล้วเทียบเกณฑ์ θ — ไม่มีการเรียนรู้ ค่า w และ θ ต้องมีคนตั้งให้'
},

/* ================= 3) perceptron ================= */
{
  id: 'judge', section: 'perceptron', kind: 'เคลื่อนไหว', title: 'Perceptron = กรรมการให้คะแนนแบบถ่วงน้ำหนัก',
  html: `<svg viewBox="0 0 760 330" font-size="15" role="img" aria-label="การไหลของข้อมูลใน Perceptron">
<defs><marker id="L08-jd-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<g text-anchor="middle" font-size="14" class="tb"><text x="100" y="24">① คะแนนแต่ละข้อ (x)</text><text x="245" y="24">② × ความสำคัญ (w)</text><text x="390" y="24">③ รวม (z)</text><text x="530" y="24">④ ตัดสิน</text><text x="668" y="24">⑤ ผล ŷ</text></g>
<circle r="6" class="f2"><animateMotion dur="2.4s" repeatCount="indefinite" path="M424 155H628L650 128"/></circle>
<path d="M146 80L358 141" class="s1 nofill v-flow" stroke-width="3"/>
<path d="M146 155H356" class="s1 nofill v-flow" stroke-width="3"/>
<path d="M146 230L358 169" class="s1 nofill v-flow" stroke-width="3"/>
<g class="f1l s1" stroke-width="2"><circle cx="120" cy="80" r="26"/><circle cx="120" cy="155" r="26"/><circle cx="120" cy="230" r="26"/></g>
<g text-anchor="middle" class="tb"><text x="120" y="86">1</text><text x="120" y="161">148</text><text x="120" y="236">33.6</text></g>
<g text-anchor="end" font-size="14"><text x="86" y="85">x₀ (bias)</text><text x="86" y="160">x₁ glucose</text><text x="86" y="235">x₂ BMI</text></g>
<g class="f2l s2" stroke-width="1.5"><rect x="207" y="95.5" width="76" height="26" rx="13"/><rect x="207" y="142" width="76" height="26" rx="13"/><rect x="207" y="188.5" width="76" height="26" rx="13"/></g>
<g text-anchor="middle" font-size="14"><text x="245" y="113.5">w₀ = 0.5</text><text x="245" y="160">w₁ = 0.5</text><text x="245" y="206.5">w₂ = 0.5</text></g>
<circle cx="390" cy="155" r="34" class="f4l s4" stroke-width="2.5"/><text x="390" y="164" text-anchor="middle" class="tb" font-size="26">Σ</text>
<text x="390" y="214" text-anchor="middle" font-size="14">z = 0.5 + 74 + 16.8</text><text x="390" y="238" text-anchor="middle" class="tb" font-size="16">= 91.3</text>
<path d="M424 155H472" class="s4 v-flow" stroke-width="3" marker-end="url(#L08-jd-ar)"/>
<rect x="476" y="105" width="108" height="100" rx="12" class="f7l s7" stroke-width="2"/>
<path d="M488 170H574M530 114V198" class="ln" stroke-width="1.5"/>
<path d="M490 186H530V126H572" class="s2 nofill" stroke-width="3"/>
<text x="560" y="120" text-anchor="middle" class="tb" font-size="14">+1</text><text x="502" y="180" text-anchor="middle" class="tb" font-size="14">−1</text>
<text x="530" y="226" text-anchor="middle" class="tb" font-size="14">z ≥ 0 ?</text>
<path d="M584 155H622" class="ln v-flow" stroke-width="3" marker-end="url(#L08-jd-ar)"/>
<circle cx="650" cy="122" r="20" class="f3 v-pulse"/><text x="650" y="128" text-anchor="middle" class="tw tb">+1</text><text x="678" y="128" font-size="14">ผ่าน</text>
<circle cx="650" cy="190" r="20" class="bgp ln" stroke-width="2"/><text x="650" y="196" text-anchor="middle" class="tm tb">−1</text><text x="678" y="196" font-size="14" class="tm">ไม่ผ่าน</text>
<rect x="12" y="258" width="736" height="60" rx="12" class="bgp ln" stroke-width="1.5"/>
<text x="380" y="283" text-anchor="middle">z = w₀·1 + w₁x₁ + w₂x₂ = wᵀx   →   ŷ = +1 ถ้า z ≥ 0 · −1 ถ้า z &lt; 0</text>
<text x="380" y="306" text-anchor="middle" class="tm" font-size="14">เกณฑ์ θ ถูกย้ายเข้ามาเป็น bias: x₀ = 1 และ w₀ = b = −θ → จุดตัดสินอยู่ที่ 0 เสมอ</text>
</svg>`,
  caption: 'Perceptron (Rosenblatt, 1957) เหมือนกรรมการ: ให้คะแนนแต่ละข้อ × ความสำคัญ รวมกัน แล้วตัดสินผ่าน/ไม่ผ่าน · ตัวเลขคือแถวแรกของตัวอย่างเบาหวาน (z = 91.3 → ทาย +1)'
},
{
  id: 'boundary', section: 'perceptron', kind: 'ทีละขั้น', title: 'เส้นแบ่ง (decision boundary) = ที่ที่ z = 0',
  html: `<div class="stepper"><svg viewBox="0 0 760 380" font-size="15" role="img" aria-label="เส้นแบ่งของ Perceptron">
<defs>
<marker id="L08-bd-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker>
<marker id="L08-bd-arw" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0 0L10 5L0 10z" class="f4"/></marker>
</defs>
<g data-s="3"><polygon points="70,110 290,330 378,330 378,22 70,22" class="f1l" opacity=".8"/><polygon points="70,330 290,330 70,110" class="f2l" opacity=".8"/>
<text x="300" y="42" text-anchor="middle" class="tb f1" font-size="14">z ≥ 0 → ทาย +1</text>
<text x="76" y="372" class="tb f2" font-size="14">มุมล่างซ้าย: z &lt; 0 → ทาย −1</text></g>
<path d="M70 330H392" class="ln" stroke-width="2" marker-end="url(#L08-bd-ar)"/><path d="M70 330V12" class="ln" stroke-width="2" marker-end="url(#L08-bd-ar)"/>
<text x="386" y="352" class="tm" font-size="14">x₁</text><text x="50" y="24" class="tm" font-size="14">x₂</text>
<g class="tm" font-size="13" text-anchor="middle"><text x="62" y="348">0</text><text x="290" y="348">1</text><text x="58" y="115">1</text></g>
<g data-s="2"><path d="M70 110L290 330" class="s3" stroke-width="3"/><text x="250" y="258" class="tb f3">z = 0</text></g>
<g data-s="3"><path d="M180 220L230 170" class="s4" stroke-width="3" marker-end="url(#L08-bd-arw)"/><text x="240" y="166" class="tb f4">w</text></g>
<g class="f1"><circle cx="290" cy="110" r="7"/><circle cx="268" cy="198" r="7"/><circle cx="202" cy="132" r="7"/><circle cx="334" cy="220" r="7"/><circle cx="312" cy="66" r="7"/><circle cx="180" cy="55" r="7"/><circle cx="356" cy="132" r="7"/></g>
<g class="f2"><rect x="64" y="324" width="12" height="12"/><rect x="108" y="291" width="12" height="12"/><rect x="163" y="280" width="12" height="12"/><rect x="97" y="214" width="12" height="12"/><rect x="130" y="236" width="12" height="12"/><rect x="196" y="302" width="12" height="12"/></g>
<g data-s="4"><circle cx="70" cy="330" r="14" class="s5 nofill v-pulse" stroke-width="3"/><circle cx="290" cy="110" r="14" class="s5 nofill v-pulse" stroke-width="3"/>
<text x="92" y="352" class="tb f5" font-size="14">(0,0): z = −1</text><text x="310" y="100" class="tb f5" font-size="14">(1,1): z = 1</text></g>
<g data-only="1,2,3,4"><rect x="420" y="20" width="328" height="72" rx="12" class="bgp ln" stroke-width="1.5"/>
<text x="436" y="48" class="tb">ตัวอย่าง: w = (1, 1), b = −1</text><text x="436" y="76">z = x₁ + x₂ − 1</text></g>
<g data-only="2,3,4"><rect x="420" y="104" width="328" height="72" rx="12" class="f3l s3" stroke-width="1.5"/>
<text x="436" y="132" class="tb">เส้นแบ่ง = จุดที่ z = 0 พอดี</text><text x="436" y="160">x₁ + x₂ − 1 = 0  →  x₂ = 1 − x₁</text></g>
<g data-only="3,4"><rect x="420" y="188" width="328" height="72" rx="12" class="f1l s1" stroke-width="1.5"/>
<text x="436" y="216">● z ≥ 0 → +1    ■ z &lt; 0 → −1</text><text x="436" y="244" font-size="14">ลูกศร w ตั้งฉากกับเส้น ชี้ไปฝั่ง +1</text></g>
<g data-only="4"><rect x="420" y="272" width="328" height="72" rx="12" class="f7l s7" stroke-width="1.5"/>
<text x="436" y="300">(0, 0): z = 0 + 0 − 1 = −1 → −1</text><text x="436" y="328">(1, 1): z = 1 + 1 − 1 = 1 → +1</text></g>
<g data-only="5">
<rect x="420" y="20" width="328" height="156" rx="12" class="bgp s3" stroke-width="2"/>
<text x="436" y="48" class="tb f3">แยกด้วยเส้นตรงได้ ✔</text><text x="436" y="74" font-size="14">linearly separable</text><text x="436" y="98" font-size="14">→ error ลดถึง 0 ได้</text>
<path d="M610 60L736 166" class="s3" stroke-width="2.5"/>
<g class="f1"><circle cx="700" cy="60" r="6"/><circle cx="720" cy="90" r="6"/><circle cx="690" cy="100" r="6"/><circle cx="728" cy="128" r="6"/></g>
<g class="f2"><rect x="625" y="105" width="10" height="10"/><rect x="640" y="135" width="10" height="10"/><rect x="620" y="145" width="10" height="10"/><rect x="655" y="150" width="10" height="10"/></g>
<rect x="420" y="188" width="328" height="156" rx="12" class="bgp s5" stroke-width="2"/>
<text x="436" y="216" class="tb f5">XOR: แยกไม่ได้ ✘</text><text x="436" y="242" font-size="14">เส้นตรงเส้นไหนก็ผิด</text><text x="436" y="266" font-size="14">→ error ไม่มีวันเป็น 0</text><text x="436" y="290" font-size="14">→ ต้องกำหนด epoch สูงสุด</text>
<path d="M612 300L740 236" class="s5" stroke-width="2" stroke-dasharray="6 4"/>
<g class="f2"><rect x="630" y="308" width="12" height="12"/><rect x="714" y="214" width="12" height="12"/></g>
<g class="f1"><circle cx="636" cy="220" r="7"/><circle cx="720" cy="314" r="7"/></g>
</g>
</svg><ol class="caps">
<li>ข้อมูล 2 มิติ: แกนนอน x₁ แกนตั้ง x₂ · วงกลมน้ำเงิน = คลาส +1 · สี่เหลี่ยมส้ม = คลาส −1 · ลองใช้ w = (1, 1), b = −1</li>
<li>ทุกจุดบนเส้นเขียวได้ z = 0 พอดี → นี่คือเส้นแบ่ง (decision boundary): x₂ = 1 − x₁</li>
<li>ฝั่งที่ z ≥ 0 ทาย +1 อีกฝั่งทาย −1 · ลูกศร w ตั้งฉากกับเส้นและชี้ไปฝั่ง +1 · เปลี่ยน b = เลื่อนเส้นขนานไปมา</li>
<li>ลองแทนค่า: (0, 0) ได้ z = −1 → ทาย −1 · (1, 1) ได้ z = 1 → ทาย +1 ✔ ตรงกับฝั่งที่จุดอยู่</li>
<li>Perceptron 1 ตัว = เส้นตรง 1 เส้น → ลู่เข้า (error = 0) ได้เฉพาะข้อมูลที่แยกด้วยเส้นตรงได้ · XOR หรือข้อมูลซ้อนกัน (เช่น versicolor vs virginica) ทำไม่ได้</li>
</ol></div>`,
  caption: 'เส้นแบ่งคือคำตอบของสมการ z = 0 — การ “เรียนรู้” ของ Perceptron ก็คือการขยับ/หมุนเส้นนี้จนแยกสองคลาสได้'
},

/* ================= 4) rosenblatt ================= */
{
  id: 'rosen-rule', section: 'rosenblatt', kind: 'ภาพนิ่ง', title: 'กฎ Rosenblatt: ทายถูก = อยู่เฉย · ทายผิด = ขยับเส้น',
  html: `<svg viewBox="0 0 760 380" font-size="15" role="img" aria-label="กฎการเรียนรู้ของ Rosenblatt">
<defs>
<marker id="L08-rr-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker>
<marker id="L08-rr-ar3" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" class="f3"/></marker>
</defs>
<g stroke-width="1.5"><rect x="10" y="10" width="170" height="40" rx="20" class="f1l s1"/><rect x="200" y="10" width="170" height="40" rx="20" class="f4l s4"/><rect x="390" y="10" width="170" height="40" rx="20" class="f5l s5"/><rect x="580" y="10" width="170" height="40" rx="20" class="f3l s3"/></g>
<g text-anchor="middle" class="tb" font-size="14"><text x="95" y="35">① เริ่ม w ค่าเล็ก ๆ</text><text x="285" y="35">② ทาย ŷ ทีละแถว</text><text x="475" y="35">③ ผิด → ปรับ w</text><text x="665" y="35">④ วนจนไม่ผิด / ครบรอบ</text></g>
<path d="M182 30H196" class="ln" stroke-width="2" marker-end="url(#L08-rr-ar)"/><path d="M372 30H386" class="ln" stroke-width="2" marker-end="url(#L08-rr-ar)"/><path d="M562 30H576" class="ln" stroke-width="2" marker-end="url(#L08-rr-ar)"/>
<g text-anchor="middle" class="tm tb" font-size="14"><text x="52" y="82">y (เฉลย)</text><text x="122" y="82">ŷ (ทาย)</text><text x="192" y="82">y − ŷ</text></g><text x="236" y="82" class="tm tb" font-size="14">แปลว่า</text>
<rect x="12" y="92" width="416" height="62" rx="12" class="f3l"/><rect x="12" y="160" width="416" height="62" rx="12" class="f3l"/><rect x="12" y="228" width="416" height="62" rx="12" class="f5l"/><rect x="12" y="296" width="416" height="62" rx="12" class="f5l"/>
<g text-anchor="middle" class="tb" font-size="18">
<text x="52" y="130">+1</text><text x="122" y="130">+1</text><text x="192" y="130">0</text>
<text x="52" y="198">−1</text><text x="122" y="198">−1</text><text x="192" y="198">0</text>
<text x="52" y="266">−1</text><text x="122" y="266">+1</text><text x="192" y="266" class="f5">−2</text>
<text x="52" y="334">+1</text><text x="122" y="334">−1</text><text x="192" y="334" class="f5">+2</text>
</g>
<text x="236" y="129">✔ ทายถูก → ไม่ปรับ</text><text x="236" y="197">✔ ทายถูก → ไม่ปรับ</text>
<text x="236" y="256">✘ z ใหญ่ไป</text><text x="236" y="279" font-size="14">→ ปรับให้ z ลดลง</text>
<text x="236" y="324">✘ z เล็กไป</text><text x="236" y="347" font-size="14">→ ปรับให้ z เพิ่มขึ้น</text>
<rect x="444" y="70" width="304" height="288" rx="12" class="bgp ln" stroke-width="1.5"/>
<text x="596" y="96" text-anchor="middle" class="tb">ทายผิด → หมุนเส้นเข้าหาจุดนั้น</text>
<path d="M470 150L730 254" class="ln" stroke-width="2.5" stroke-dasharray="7 5"/>
<path d="M470 178L693 300" class="s3" stroke-width="3"/>
<path d="M727 266Q730 288 704 298" class="s3 nofill" stroke-width="2" marker-end="url(#L08-rr-ar3)"/>
<text x="478" y="142" class="tm" font-size="14">เส้นเดิม</text><text x="500" y="241" class="tb f3" font-size="14">เส้นใหม่</text>
<g class="f1"><circle cx="560" cy="118" r="7"/><circle cx="600" cy="150" r="7"/><circle cx="690" cy="180" r="7"/><circle cx="640" cy="250" r="7"/></g>
<circle cx="640" cy="250" r="14" class="s5 nofill v-pulse" stroke-width="3"/><text x="660" y="256" class="tb f5" font-size="14">ผิด!</text>
<g class="f2"><rect x="514" y="262" width="12" height="12"/><rect x="574" y="284" width="12" height="12"/><rect x="478" y="222" width="12" height="12"/></g>
<text x="596" y="328" text-anchor="middle" class="tb">Δw = η (y − ŷ) x</text>
<text x="596" y="350" text-anchor="middle" font-size="14">ดันเส้นให้จุดที่ผิดไปอยู่ฝั่งที่ถูก</text>
</svg>`,
  caption: 'Perceptron ไม่สนว่าผิด “มากหรือน้อย” — ทายถูกไม่ขยับเลย ทายผิดขยับด้วยขนาดเท่าเดิม (y − ŷ = ±2) · ภาพขวา: จุดน้ำเงินที่ถูกทายผิด ทำให้เส้นหมุนจนมันไปอยู่ฝั่งที่ถูก'
},
{
  id: 'rosen-steps', section: 'rosenblatt', kind: 'ทีละขั้น', title: 'ตัวอย่าง Diabetes ทีละแถว (สไลด์ 12–15) + เรื่องเครื่องหมาย',
  html: `<div class="stepper"><svg viewBox="0 0 760 420" font-size="16" role="img" aria-label="ตัวอย่างการเรียนรู้ Perceptron ทีละแถว">
<defs>
<marker id="L08-rs-ar2" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M0 0L10 5L0 10z" class="f2"/></marker>
<marker id="L08-rs-ar3" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M0 0L10 5L0 10z" class="f3"/></marker>
</defs>
<rect x="12" y="14" width="250" height="32" rx="8" class="f1l"/>
<rect x="12" y="50" width="250" height="32" rx="8" class="f7l s7" stroke-width="2" data-only="2"/>
<rect x="12" y="86" width="250" height="32" rx="8" class="f7l s7" stroke-width="2" data-only="3,4,5"/>
<rect x="12" y="122" width="250" height="32" rx="8" class="f7l s7" stroke-width="2" data-only="6"/>
<g text-anchor="middle" class="tb" font-size="14"><text x="72" y="35">x₁ glucose</text><text x="162" y="35">x₂ BMI</text><text x="232" y="35">y</text></g>
<g text-anchor="middle" font-size="15"><text x="72" y="72">148</text><text x="162" y="72">33.6</text><text x="232" y="72">+1</text>
<text x="72" y="108">85</text><text x="162" y="108">26.6</text><text x="232" y="108">−1</text>
<text x="72" y="144">160</text><text x="162" y="144">35.0</text><text x="232" y="144">+1</text></g>
<path d="M18 84H256M18 120H256M18 156H256" class="grid" stroke-width="1.5"/>
<text x="137" y="180" text-anchor="middle" class="tm" font-size="14">… อีก 5 แถว (รวม 8 แถว)</text>
<rect x="12" y="196" width="250" height="214" rx="12" class="bgp ln" stroke-width="1.5"/>
<text x="137" y="222" text-anchor="middle" class="tb">น้ำหนักตอนนี้</text>
<text x="24" y="254" class="tb f2" font-size="14">ตามสไลด์ (ลบ)</text>
<text x="24" y="280" font-size="15" data-only="1,2,3">w₁ 0.5 · w₂ 0.5 · b 0.5</text>
<text x="24" y="280" font-size="15" class="tb" data-only="4,5,6,7">w₁ 17.5 · w₂ 5.82 · b 0.7</text>
<text x="24" y="318" class="tb f3" font-size="14">มาตรฐาน / โค้ด Lab (บวก)</text>
<text x="24" y="344" font-size="15" data-only="1,2,3">w₁ 0.5 · w₂ 0.5 · b 0.5</text>
<text x="24" y="344" font-size="15" class="tb" data-only="4,5">w₁ −16.5 · w₂ −4.82 · b 0.3</text>
<text x="24" y="344" font-size="15" class="tb" data-only="6,7">w₁ 15.5 · w₂ 2.18 · b 0.5</text>
<text x="24" y="392" class="tm" font-size="14">η = 0.1 (ขนาดก้าว)</text>
<g data-only="1">
<rect x="280" y="14" width="468" height="120" rx="12" class="f4l s4" stroke-width="1.5"/>
<text x="514" y="46" text-anchor="middle" class="tb" font-size="18">z = w₁x₁ + w₂x₂ + b</text>
<text x="514" y="80" text-anchor="middle">ŷ = +1 ถ้า z ≥ 0 · −1 ถ้า z &lt; 0</text>
<text x="514" y="112" text-anchor="middle">y − ŷ = 0 → ไม่ปรับ · ไม่ใช่ 0 → ปรับ</text>
<rect x="280" y="150" width="468" height="60" rx="12" class="f2l s2" stroke-width="1.5"/>
<text x="296" y="174" class="tb f2" font-size="14">สูตรที่เขียนในสไลด์ 11–15</text><text x="296" y="199">w ← w − η(y − ŷ)x ,  b ← b − η(y − ŷ)</text>
<rect x="280" y="222" width="468" height="60" rx="12" class="f3l s3" stroke-width="1.5"/>
<text x="296" y="246" class="tb f3" font-size="14">กฎมาตรฐาน (ตำรา + โค้ด Lab)</text><text x="296" y="271">w ← w + η(y − ŷ)x ,  b ← b + η(y − ŷ)</text>
<text x="514" y="314" text-anchor="middle" class="tm" font-size="14">ต่างกันแค่เครื่องหมาย ลบ / บวก → ตามดูไปพร้อมกันว่าอันไหนถูกทิศ</text>
</g>
<g data-only="2">
<text x="296" y="44" class="tb" font-size="18">แถว 1: x = (148, 33.6), y = +1</text>
<text x="296" y="88">z = 0.5·148 + 0.5·33.6 + 0.5</text>
<text x="296" y="120">   = 74 + 16.8 + 0.5 = <tspan class="tb">91.3</tspan></text>
<text x="296" y="160">91.3 ≥ 0 → ŷ = +1</text>
<rect x="280" y="184" width="468" height="48" rx="24" class="f3l s3" stroke-width="2"/>
<text x="514" y="214" text-anchor="middle" class="tb">y − ŷ = 1 − 1 = 0 → ทายถูก ไม่ปรับ ✔</text>
</g>
<g data-only="3">
<text x="296" y="44" class="tb" font-size="18">แถว 2: x = (85, 26.6), y = −1</text>
<text x="296" y="88">z = 0.5·85 + 0.5·26.6 + 0.5</text>
<text x="296" y="120">   = 42.5 + 13.3 + 0.5 = <tspan class="tb">56.3</tspan></text>
<text x="296" y="160">56.3 ≥ 0 → ŷ = +1</text>
<rect x="280" y="184" width="468" height="48" rx="24" class="f5l s5" stroke-width="2"/>
<text x="514" y="214" text-anchor="middle" class="tb">y − ŷ = −1 − 1 = −2 → ทายผิด! ต้องปรับ ✘</text>
</g>
<g data-only="4">
<rect x="280" y="14" width="468" height="128" rx="12" class="f2l s2" stroke-width="1.5"/>
<text x="296" y="40" class="tb f2">ตามสไลด์: w ← w − η(y − ŷ)x</text>
<text x="296" y="68">w₁ = 0.5 − 0.1(−2)(85) = <tspan class="tb">17.5</tspan></text>
<text x="296" y="94">w₂ = 0.5 − 0.1(−2)(26.6) = <tspan class="tb">5.82</tspan></text>
<text x="296" y="120">b = 0.5 − 0.1(−2) = <tspan class="tb">0.7</tspan></text>
<rect x="280" y="152" width="468" height="128" rx="12" class="f3l s3" stroke-width="1.5"/>
<text x="296" y="178" class="tb f3">มาตรฐาน/Lab: w ← w + η(y − ŷ)x</text>
<text x="296" y="206">w₁ = 0.5 + 0.1(−2)(85) = <tspan class="tb">−16.5</tspan></text>
<text x="296" y="232">w₂ = 0.5 + 0.1(−2)(26.6) = <tspan class="tb">−4.82</tspan></text>
<text x="296" y="258">b = 0.5 + 0.1(−2) = <tspan class="tb">0.3</tspan></text>
<rect x="280" y="292" width="468" height="118" rx="12" class="f7l s7" stroke-width="2"/>
<text x="296" y="320" class="tb">⚠ ในข้อสอบ</text>
<text x="296" y="348" font-size="15">“ทำตามตัวอย่างสไลด์” → ใช้สูตรสไลด์ (w₁ = 17.5)</text>
<text x="296" y="374" font-size="15">ถามหลักการ → ใช้กฎมาตรฐาน (w₁ = −16.5)</text>
<text x="296" y="398" class="tm" font-size="14">และเขียนกำกับเสมอว่าใช้สูตรไหน</text>
</g>
<g data-only="5">
<text x="296" y="40" class="tb" font-size="18">ทำไมกฎ “บวก” ถึงถูกทิศ?</text>
<text x="296" y="68" font-size="14">ลองแถว 2 ซ้ำด้วย w ใหม่ · เฉลย y = −1 จึงอยากได้ z ติดลบ</text>
<rect x="300" y="150" width="215" height="50" class="f3l"/><rect x="515" y="150" width="215" height="50" class="f5l"/>
<text x="407" y="180" text-anchor="middle" class="tb f3" font-size="14">z &lt; 0 → ทาย −1 ✔</text>
<text x="622" y="180" text-anchor="middle" class="tb f5" font-size="14">z ≥ 0 → ทาย +1 ✘</text>
<line x1="296" y1="200" x2="734" y2="200" class="ln" stroke-width="2"/>
<path d="M300 194V206M407.5 194V206M515 194V206M622.5 194V206M730 194V206" class="ln" stroke-width="2"/>
<g text-anchor="middle" font-size="13" class="tm"><text x="300" y="222">−2000</text><text x="407.5" y="222">−1000</text><text x="515" y="222">0</text><text x="622.5" y="222">1000</text><text x="730" y="222">2000</text></g>
<path d="M521 207V300M691.6 207V250M350.5 207V300" class="ln" stroke-width="1.5" stroke-dasharray="3 4"/>
<circle cx="521" cy="200" r="7" class="f7 s7" stroke-width="2"/><text x="521" y="138" text-anchor="middle" class="tb" font-size="14">เดิม z = 56.3</text>
<circle cx="691.6" cy="200" r="7" class="f2"/><circle cx="350.5" cy="200" r="7" class="f3"/>
<path d="M521 250H682" class="s2" stroke-width="3" marker-end="url(#L08-rs-ar2)"/>
<text x="640" y="276" text-anchor="middle" class="tb f2" font-size="14">สูตรสไลด์: z = 1643.0 ยิ่งผิด ✘</text>
<path d="M521 300H360" class="s3" stroke-width="3" marker-end="url(#L08-rs-ar3)"/>
<text x="436" y="326" text-anchor="middle" class="tb f3" font-size="14">กฎมาตรฐาน: z = −1530.4 ถูก ✔</text>
<text x="514" y="378" text-anchor="middle" class="tm" font-size="14">y − ŷ = −2 แปลว่าต้อง “ลด” z → กฎ w + η(y − ŷ)x ทำได้ถูก</text>
</g>
<g data-only="6">
<text x="296" y="40" class="tb" font-size="18">แถว 3: x = (160, 35.0), y = +1</text>
<rect x="280" y="56" width="468" height="104" rx="12" class="f2l s2" stroke-width="1.5"/>
<text x="296" y="82" class="tb f2" font-size="14">ตามสไลด์ (w = 17.5, 5.82, 0.7)</text>
<text x="296" y="110">z = 2800 + 203.7 + 0.7 = <tspan class="tb">3004.4</tspan></text>
<text x="296" y="140">→ ŷ = +1 = y ✔ ไม่ปรับ (ตรงกับสไลด์ 15)</text>
<rect x="280" y="172" width="468" height="132" rx="12" class="f3l s3" stroke-width="1.5"/>
<text x="296" y="198" class="tb f3" font-size="14">มาตรฐาน (w = −16.5, −4.82, 0.3)</text>
<text x="296" y="226">z = −2640 − 168.7 + 0.3 = <tspan class="tb">−2808.4</tspan></text>
<text x="296" y="256">→ ŷ = −1 แต่ y = +1 ✘ → ปรับอีก (y − ŷ = +2)</text>
<text x="296" y="286" class="tb">w₁ = 15.5 · w₂ = 2.18 · b = 0.5</text>
</g>
<g data-only="7">
<text x="296" y="40" class="tb" font-size="17">ครบ 8 แถว = 1 epoch → วนต่อหลาย epoch</text>
<text x="296" y="64" class="tm" font-size="14">จำนวนครั้งที่ทายผิดต่อ epoch (เริ่ม w₁ = w₂ = b = 0.5)</text>
<path d="M316 84H740M316 156H740M316 228H740" class="grid" stroke-width="1"/>
<path d="M316 80V300H742" class="ln" stroke-width="1.5"/>
<g text-anchor="end" font-size="13" class="tm"><text x="310" y="304">0</text><text x="310" y="232">2</text><text x="310" y="160">4</text><text x="310" y="88">6</text></g>
<g class="f2"><rect x="322" y="156" width="8" height="144"/><rect x="343" y="156" width="8" height="144"/><rect x="364" y="156" width="8" height="144"/><rect x="385" y="156" width="8" height="144"/><rect x="406" y="156" width="8" height="144"/><rect x="427" y="156" width="8" height="144"/><rect x="448" y="156" width="8" height="144"/><rect x="469" y="156" width="8" height="144"/><rect x="490" y="156" width="8" height="144"/><rect x="511" y="156" width="8" height="144"/><rect x="532" y="156" width="8" height="144"/><rect x="553" y="156" width="8" height="144"/><rect x="574" y="156" width="8" height="144"/><rect x="595" y="156" width="8" height="144"/><rect x="616" y="156" width="8" height="144"/><rect x="637" y="156" width="8" height="144"/><rect x="658" y="156" width="8" height="144"/><rect x="679" y="156" width="8" height="144"/><rect x="700" y="156" width="8" height="144"/><rect x="721" y="156" width="8" height="144"/></g>
<g class="f3"><rect x="331" y="84" width="8" height="216"/><rect x="352" y="84" width="8" height="216"/><rect x="373" y="84" width="8" height="216"/><rect x="394" y="120" width="8" height="180"/><rect x="415" y="120" width="8" height="180"/><rect x="436" y="84" width="8" height="216"/><rect x="457" y="84" width="8" height="216"/><rect x="478" y="84" width="8" height="216"/><rect x="499" y="120" width="8" height="180"/><rect x="520" y="192" width="8" height="108"/><rect x="541" y="84" width="8" height="216"/><rect x="562" y="120" width="8" height="180"/><rect x="583" y="120" width="8" height="180"/><rect x="604" y="120" width="8" height="180"/><rect x="625" y="84" width="8" height="216"/></g>
<rect x="636" y="294" width="102" height="12" rx="6" class="s3 nofill" stroke-width="2"/>
<g text-anchor="middle" font-size="13" class="tm"><text x="330.5" y="320">1</text><text x="414.5" y="320">5</text><text x="519.5" y="320">10</text><text x="624.5" y="320">15</text><text x="729.5" y="320">20</text></g>
<text x="742" y="338" text-anchor="end" class="tm" font-size="14">epoch</text>
<rect x="296" y="336" width="14" height="14" class="f2"/><text x="318" y="348" font-size="14">สูตรสไลด์: ผิด 4 ครั้งทุก epoch → ไม่มีวันลู่เข้า</text>
<rect x="296" y="362" width="14" height="14" class="f3"/><text x="318" y="374" font-size="14" class="tb">กฎมาตรฐาน: ผิด 0 ครั้งตั้งแต่ epoch 16 → ลู่เข้า ✔</text>
<text x="296" y="402" class="tm" font-size="14">(ข้อมูล 8 แถวนี้แยกด้วยเส้นตรงได้ กฎที่ถูกทิศจึงหาเส้นเจอ)</text>
</g>
</svg><ol class="caps">
<li>ตั้งค่าตามสไลด์ 12: η = 0.1 และ w₁ = w₂ = b = 0.5 · เราจะคิด 2 สูตรคู่กัน เพราะสไลด์เขียนเครื่องหมาย “ลบ” แต่โค้ด Lab/ตำราใช้ “บวก”</li>
<li>แถว 1: z = 91.3 ≥ 0 → ทาย +1 ตรงกับเฉลย → y − ŷ = 0 → ไม่ปรับอะไรเลย</li>
<li>แถว 2: z = 56.3 → ทาย +1 แต่เฉลยคือ −1 → y − ŷ = −2 → ทายผิด ต้องปรับ</li>
<li>ปรับน้ำหนัก: สูตรสไลด์ได้ w₁ = 17.5, w₂ = 5.82, b = 0.7 · กฎมาตรฐานได้ w₁ = −16.5, w₂ = −4.82, b = 0.3 — ต่างกันเพราะเครื่องหมายต่างกัน</li>
<li>เช็คทิศ: แถว 2 ต้องการ z ติดลบ · สูตรสไลด์ดัน z ขึ้นเป็น 1643.0 (ยิ่งผิด) แต่กฎมาตรฐานดันลงเป็น −1530.4 (ถูก) → “บวก” คือทิศที่ถูก</li>
<li>แถว 3: สูตรสไลด์ z = 3004.4 → ทายถูก ไม่ปรับ (ตรงสไลด์ 15) · กฎมาตรฐาน z = −2808.4 → ผิด จึงปรับต่อเป็น w₁ = 15.5, w₂ = 2.18, b = 0.5</li>
<li>ทำครบ 8 แถว = 1 epoch แล้ววนต่อ: สูตรสไลด์ผิด 4 ครั้งทุก epoch ไม่มีวันลู่เข้า · กฎมาตรฐานผิด 0 ครั้งตั้งแต่ epoch 16</li>
</ol></div>`,
  caption: 'ข้อสอบ “ทำตามสไลด์” → ใช้สูตรสไลด์ (w₁ = 17.5) · ถามหลักการ → กฎมาตรฐาน Δw = η(y − ŷ)x (w₁ = −16.5) · เขียนกำกับเสมอว่าใช้สูตรไหน'
},

/* ================= 5) adaline ================= */
{
  id: 'p-vs-a', section: 'adaline', kind: 'ภาพนิ่ง', title: 'Perceptron vs Adaline: วัดความผิด “หลัง” หรือ “ก่อน” ตัดสิน',
  html: `<svg viewBox="0 0 760 410" font-size="15" role="img" aria-label="เทียบ Perceptron กับ Adaline">
<defs>
<marker id="L08-pa-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker>
<marker id="L08-pa-ar5" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" class="f5"/></marker>
</defs>
<text x="16" y="30" class="tb" font-size="16">Perceptron — วัด error “หลัง” step</text>
<path d="M465 84V58H95V86" class="s5 nofill" stroke-width="2.5" marker-end="url(#L08-pa-ar5)"/>
<text x="280" y="52" text-anchor="middle" class="tb f5" font-size="14">ปรับ w</text>
<path d="M56 80L129 101M56 108H128M56 136L129 115" class="ln" stroke-width="2"/>
<g class="f1l s1" stroke-width="1.5"><circle cx="44" cy="78" r="12"/><circle cx="44" cy="108" r="12"/><circle cx="44" cy="138" r="12"/></g>
<g text-anchor="middle" font-size="14"><text x="44" y="83">1</text><text x="44" y="113">x₁</text><text x="44" y="143">x₂</text></g>
<circle cx="150" cy="108" r="22" class="f2l s2" stroke-width="2"/><text x="150" y="115" text-anchor="middle" class="tb" font-size="18">Σ</text>
<path d="M172 108H206" class="ln" stroke-width="2" marker-end="url(#L08-pa-ar)"/>
<rect x="210" y="86" width="60" height="44" rx="8" class="f7l s7" stroke-width="2"/><path d="M218 122H240V94H262" class="s2 nofill" stroke-width="2.5"/>
<path d="M270 108H336" class="ln" stroke-width="2" marker-end="url(#L08-pa-ar)"/><text x="344" y="113" class="tb">ŷ = ±1</text>
<path d="M305 120V150H465V134" class="s5 nofill" stroke-width="2" stroke-dasharray="5 4"/>
<circle cx="305" cy="108" r="5" class="f5"/><circle cx="305" cy="108" r="12" class="s5 nofill v-pulse" stroke-width="2.5"/>
<rect x="410" y="84" width="110" height="48" rx="10" class="f5l s5" stroke-width="2"/><text x="465" y="105" text-anchor="middle" class="tb">y − ŷ</text><text x="465" y="125" text-anchor="middle" font-size="14">0 หรือ ±2</text>
<text x="240" y="152" text-anchor="middle" class="tm" font-size="14">step</text>
<line x1="12" y1="186" x2="524" y2="186" class="grid" stroke-width="2"/>
<text x="16" y="216" class="tb" font-size="16">Adaline — วัด error “ก่อน” step</text>
<path d="M56 262L129 283M56 290H128M56 318L129 297" class="ln" stroke-width="2"/>
<g class="f1l s1" stroke-width="1.5"><circle cx="44" cy="260" r="12"/><circle cx="44" cy="290" r="12"/><circle cx="44" cy="320" r="12"/></g>
<g text-anchor="middle" font-size="14"><text x="44" y="265">1</text><text x="44" y="295">x₁</text><text x="44" y="325">x₂</text></g>
<circle cx="150" cy="290" r="22" class="f2l s2" stroke-width="2"/><text x="150" y="297" text-anchor="middle" class="tb" font-size="18">Σ</text>
<path d="M172 290H206" class="ln" stroke-width="2" marker-end="url(#L08-pa-ar)"/>
<rect x="210" y="268" width="60" height="44" rx="8" class="f6l s6" stroke-width="2"/><path d="M218 306L262 274" class="s6" stroke-width="2.5"/>
<text x="240" y="258" text-anchor="middle" font-size="14" class="tb">f(z) = z</text>
<path d="M270 290H356" class="ln" stroke-width="2" marker-end="url(#L08-pa-ar)"/>
<rect x="360" y="268" width="60" height="44" rx="8" class="f7l s7" stroke-width="2"/><path d="M368 304H390V276H412" class="s2 nofill" stroke-width="2.5"/>
<path d="M420 290H450" class="ln" stroke-width="2" marker-end="url(#L08-pa-ar)"/><text x="458" y="296" class="tb">ŷ</text>
<circle cx="315" cy="290" r="5" class="f5"/><circle cx="315" cy="290" r="12" class="s5 nofill v-pulse" stroke-width="2.5"/>
<path d="M315 302V338" class="s5" stroke-width="2" stroke-dasharray="5 4"/>
<rect x="262" y="338" width="150" height="56" rx="10" class="f5l s5" stroke-width="2"/><text x="337" y="361" text-anchor="middle" class="tb">y − f(z)</text><text x="337" y="383" text-anchor="middle" font-size="14">ค่าจริง เช่น 0.7</text>
<path d="M262 366H95V322" class="s5 nofill" stroke-width="2.5" marker-end="url(#L08-pa-ar5)"/>
<text x="178" y="358" text-anchor="middle" class="tb f5" font-size="14">ปรับ w</text>
<rect x="540" y="20" width="208" height="374" rx="12" class="bgp ln" stroke-width="1.5"/>
<text x="644" y="48" text-anchor="middle" class="tb">ลองจริง: y = 1, z = 0.3</text>
<text x="556" y="86" class="tb f1">Perceptron</text>
<text x="556" y="112">z ≥ 0 → ŷ = +1</text>
<text x="556" y="138">error = 1 − 1 = 0</text>
<text x="556" y="164" class="tb f5">→ ไม่ปรับเลย</text>
<line x1="552" y1="186" x2="736" y2="186" class="grid" stroke-width="2"/>
<text x="556" y="216" class="tb f6">Adaline</text>
<text x="556" y="242">error = 1 − 0.3 = 0.7</text>
<text x="556" y="268" class="tb f3">→ ยังปรับ ดัน z เข้าหา 1</text>
<text x="556" y="304" class="tm" font-size="14">ผิดมาก = ปรับมาก</text>
<text x="556" y="328" class="tm" font-size="14">ผิดน้อย = ปรับน้อย</text>
<text x="556" y="366" class="tm" font-size="14">(Widrow &amp; Hoff, 1960)</text>
</svg>`,
  caption: 'ต่างกันจุดเดียว: Adaline วัด error จาก f(z) = z ซึ่งเป็นค่าต่อเนื่อง → รู้ว่าผิด “มากแค่ไหน” → ได้ loss เรียบ (SSE = ½Σ(y − f(z))²) ที่ใช้ gradient descent ได้ · step ใช้แค่ตอนตัดสินคำตอบสุดท้าย'
},

/* ================= 6) gd ================= */
{
  id: 'gd-fog', section: 'gd', kind: 'เคลื่อนไหว', title: 'Gradient descent = เดินลงเขาในหมอกทีละก้าว',
  html: `<svg viewBox="0 0 760 360" font-size="15" role="img" aria-label="ลูกบอลเดินลงหุบตาม gradient descent">
<defs><marker id="L08-gf-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<path d="M60 312H712" class="ln" stroke-width="2" marker-end="url(#L08-gf-ar)"/><path d="M60 312V36" class="ln" stroke-width="2" marker-end="url(#L08-gf-ar)"/>
<text x="704" y="336" text-anchor="end" class="tm" font-size="14">w (น้ำหนัก) →</text><text x="68" y="34" class="tm" font-size="14">loss L(w)</text>
<path d="M70 60Q380 540 690 60" class="s1 nofill" stroke-width="3"/>
<circle cx="380" cy="300" r="6" class="f3"/><text x="380" y="336" text-anchor="middle" class="tb f3" font-size="14">ก้นหุบ = ผิดน้อยสุด</text>
<path d="M132 146.4Q181.6 160.8 231.2 244.7M231.2 244.7Q260.9 241.6 290.7 280.1M290.7 280.1Q308.5 274 326.4 292.8M326.4 292.8Q337.1 287.6 347.9 297.4M347.9 297.4Q354.3 293.8 360.7 299.1M360.7 299.1Q364.5 296.7 368.4 299.7" class="s2 nofill" stroke-width="2" stroke-dasharray="5 4"/>
<g class="f2l s2" stroke-width="2"><circle cx="132" cy="146.4" r="4"/><circle cx="231.2" cy="244.7" r="4"/><circle cx="290.7" cy="280.1" r="4"/><circle cx="326.4" cy="292.8" r="4"/><circle cx="347.9" cy="297.4" r="4"/><circle cx="360.7" cy="299.1" r="4"/><circle cx="368.4" cy="299.7" r="4"/></g>
<path d="M102 109.2L162 183.6" class="s5" stroke-width="2.5"/>
<text x="170" y="120" class="tb f5" font-size="14">ชันมาก → ก้าวยาว</text>
<text x="120" y="300" class="tm" font-size="14">ชันน้อย → ก้าวสั้นลงเอง</text>
<rect x="230" y="14" width="300" height="40" rx="12" class="f7l s7" stroke-width="1.5"/><text x="380" y="40" text-anchor="middle" class="tb">ก้าวใหม่: w ← w − η × ความชัน</text>
<g class="v-float"><g class="f1l" opacity=".92"><ellipse cx="600" cy="108" rx="78" ry="30"/><ellipse cx="654" cy="144" rx="58" ry="24"/><ellipse cx="554" cy="142" rx="54" ry="22"/></g>
<text x="602" y="112" text-anchor="middle" font-size="14">มองไม่เห็นทั้งภูเขา</text><text x="602" y="136" text-anchor="middle" font-size="14">รู้แค่ความชันใต้เท้า</text></g>
<circle r="10" class="f2" cx="132" cy="136.4"><animate attributeName="cx" dur="8.2s" repeatCount="indefinite" values="132;132;231.2;231.2;290.7;290.7;326.4;326.4;347.9;347.9;360.7;360.7;368.4;368.4;368.4;132;132" keyTimes="0;0.0671;0.1220;0.1890;0.2439;0.3110;0.3659;0.4329;0.4878;0.5549;0.6098;0.6768;0.7317;0.7988;0.9939;0.9940;1"/><animate attributeName="cy" dur="8.2s" repeatCount="indefinite" values="136.4;136.4;234.7;234.7;270.1;270.1;282.8;282.8;287.4;287.4;289.1;289.1;289.7;289.7;289.7;136.4;136.4" keyTimes="0;0.0671;0.1220;0.1890;0.2439;0.3110;0.3659;0.4329;0.4878;0.5549;0.6098;0.6768;0.7317;0.7988;0.9939;0.9940;1"/></circle>
</svg>`,
  caption: 'ยืนบนเขาในหมอก เห็นแค่ “พื้นใต้เท้าลาดไปทางไหน” → ก้าวลงทางที่ลาด ทำซ้ำจนถึงก้นหุบ · ก้าวยาวตอนชัน แล้วสั้นลงเองใกล้ก้นหุบ (ภาพนี้ใช้ L(w) = (w − 3)², η = 0.2 เริ่มที่ w = −1)'
},
{
  id: 'gd-slope', section: 'gd', kind: 'ทีละขั้น', title: 'ความชันบอกทิศ: ชันลบ → เดินขวา · ชันบวก → เดินซ้าย',
  html: `<div class="stepper"><svg viewBox="0 0 760 380" font-size="15" role="img" aria-label="ทิศการปรับ w ตามความชัน">
<defs><marker id="L08-gs-ar2" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0 0L10 5L0 10z" class="f2"/></marker></defs>
<path d="M50 315H730M50 315V40" class="ln" stroke-width="2"/>
<text x="726" y="306" text-anchor="end" class="tm" font-size="14">w</text><text x="58" y="34" class="tm" font-size="14">loss</text>
<path d="M60 212.5Q385 440 710 76" class="s1 nofill" stroke-width="3"/>
<circle cx="310" cy="300" r="6" class="f3"/><text x="310" y="288" text-anchor="middle" class="tb f3" font-size="14">ต่ำสุด</text>
<g data-s="2">
<path d="M160 268.5V340" class="ln" stroke-width="1.5" stroke-dasharray="3 4"/>
<path d="M110 247.5L210 289.5" class="s5" stroke-width="3"/><circle cx="160" cy="268.5" r="7" class="f2"/>
<text x="160" y="226" text-anchor="middle" class="tb">A: ความชัน = −0.3</text>
<path d="M160 340H232" class="s2" stroke-width="3.5" marker-end="url(#L08-gs-ar2)"/><text x="244" y="345" class="tb f2" font-size="14">w เพิ่ม →</text>
</g>
<g data-s="3">
<path d="M660 128.5V340" class="ln" stroke-width="1.5" stroke-dasharray="3 4"/>
<path d="M610 177.5L710 79.5" class="s5" stroke-width="3"/><circle cx="660" cy="128.5" r="7" class="f2"/>
<text x="600" y="120" text-anchor="end" class="tb">B: ความชัน = +0.7</text>
<path d="M660 340H492" class="s2" stroke-width="3.5" marker-end="url(#L08-gs-ar2)"/><text x="482" y="345" text-anchor="end" class="tb f2" font-size="14">← w ลด</text>
<text x="576" y="370" text-anchor="middle" class="tm" font-size="14">ชันกว่า → ก้าวยาวกว่า</text>
</g>
<g data-s="4"><rect x="100" y="16" width="400" height="44" rx="12" class="f7l s7" stroke-width="2"/><text x="300" y="44" text-anchor="middle" class="tb" font-size="16">w ← w − η · ∂L/∂w   (เดินสวนความชัน)</text></g>
</svg><ol class="caps">
<li>เส้นโค้งบอกว่าค่า w แต่ละค่าทำให้ผิด (loss) เท่าไร · เป้าหมาย: เลื่อน w ไปที่จุดต่ำสุด</li>
<li>ที่จุด A ความชัน = −0.3 (ลาดลงไปทางขวา) → w − η(−0.3) = w + 0.3η → w เพิ่ม เดินไปขวา → loss ลด ✔</li>
<li>ที่จุด B ความชัน = +0.7 (ชันขึ้นไปทางขวา) → w − η(0.7) → w ลด เดินไปซ้าย → loss ลด ✔ · ชันกว่าจึงก้าวยาวกว่า</li>
<li>สูตรเดียวใช้ได้ทั้งสองฝั่ง: w ← w − η·∂L/∂w — ลบด้วยความชัน = เดินสวนทางที่ loss เพิ่ม (สไลด์ 27–28)</li>
</ol></div>`,
  caption: 'Gradient (ความชัน) ชี้ทางที่ loss “เพิ่ม” เร็วที่สุด เราจึงเดินทางตรงข้ามเสมอ · η คูณความชัน = ความยาวก้าว'
},
{
  id: 'gd-lr', section: 'gd', kind: 'ภาพนิ่ง', title: 'Learning rate η = ความยาวก้าว: เล็กไป · พอดี · ใหญ่ไป',
  html: `<svg viewBox="0 0 760 340" font-size="15" role="img" aria-label="ผลของ learning rate">
<g stroke-width="2"><rect x="12" y="12" width="236" height="316" rx="14" class="bgp s2"/><rect x="262" y="12" width="236" height="316" rx="14" class="bgp s3"/><rect x="512" y="12" width="236" height="316" rx="14" class="bgp s5"/></g>
<g text-anchor="middle" class="tb" font-size="16"><text x="130" y="38">η เล็กไป</text><text x="380" y="38">η พอดี</text><text x="630" y="38">η ใหญ่ไป</text></g>
<g text-anchor="middle" class="tm" font-size="14"><text x="130" y="58">η = 0.05</text><text x="380" y="58">η = 0.3</text><text x="630" y="58">η = 1.05</text></g>
<g class="s1 nofill" stroke-width="2.5"><path d="M28 70Q130 350 232 70"/><path d="M278 70Q380 350 482 70"/><path d="M528 70Q630 350 732 70"/></g>
<g class="f3"><circle cx="130" cy="210" r="4"/><circle cx="380" cy="210" r="4"/><circle cx="630" cy="210" r="4"/></g>
<polyline points="62,147.8 68.8,159.6 74.9,169.2 80.4,176.9 85.4,183.2 89.8,188.3 93.9,192.4 97.5,195.8" class="s2 nofill" stroke-width="2"/>
<g class="f2"><circle cx="62" cy="147.8" r="5.5"/><circle cx="68.8" cy="159.6" r="3.5"/><circle cx="74.9" cy="169.2" r="3.5"/><circle cx="80.4" cy="176.9" r="3.5"/><circle cx="85.4" cy="183.2" r="3.5"/><circle cx="89.8" cy="188.3" r="3.5"/><circle cx="93.9" cy="192.4" r="3.5"/><circle cx="97.5" cy="195.8" r="3.5"/></g>
<polyline points="312,147.8 352.8,200 369.1,208.4 375.6,209.7 378.3,210" class="s3 nofill" stroke-width="2"/>
<g class="f3"><circle cx="312" cy="147.8" r="5.5"/><circle cx="352.8" cy="200" r="3.5"/><circle cx="369.1" cy="208.4" r="3.5"/><circle cx="375.6" cy="209.7" r="3.5"/></g>
<polyline points="562,147.8 704.8,134.7 547.7,118.9 720.5,99.8 530.4,76.6" class="s5 nofill" stroke-width="2"/>
<g class="f5"><circle cx="562" cy="147.8" r="5.5"/><circle cx="704.8" cy="134.7" r="3.5"/><circle cx="547.7" cy="118.9" r="3.5"/><circle cx="720.5" cy="99.8" r="3.5"/><circle cx="530.4" cy="76.6" r="3.5"/></g>
<g class="tm" font-size="14"><text x="52" y="232">cost ต่อ epoch</text><text x="302" y="232">cost ต่อ epoch</text><text x="552" y="232">cost ต่อ epoch</text></g>
<path d="M48 238V292H228M298 238V292H478M548 238V292H728" class="ln" stroke-width="1.5"/>
<polyline points="52,267.8 74.9,272 97.7,275.4 120.6,278.2 143.4,280.4 166.3,282.3 189.1,283.7 212,284.9" class="s2 nofill" stroke-width="2.5"/>
<polyline points="302,267.8 342,286.4 382,289.4 422,289.9 462,290" class="s3 nofill" stroke-width="2.5"/>
<polyline points="552,267.8 592,263.1 632,257.5 672,250.6 712,242.4" class="s5 nofill" stroke-width="2.5"/>
<g text-anchor="middle" class="tb" font-size="15"><text x="130" y="316" class="f2">ช้ามาก ยังไม่ถึง ✘</text><text x="380" y="316" class="f3">ลู่เข้าเร็ว ✔</text><text x="630" y="316" class="f5">แกว่งออก → ระเบิด ✘</text></g>
</svg>`,
  caption: 'ทุกช่องเริ่มที่จุดใหญ่จุดเดียวกัน (L(w) = (w − 3)², เริ่ม w = −1) ต่างกันแค่ η · เล็กไป = ลู่เข้าช้ามาก · ใหญ่ไป = ก้าวข้ามก้นหุบ แกว่งออกจน cost ระเบิด · ของจริงให้ลอง η เป็นช่วง (0.0001, 0.001, 0.01 …) แล้วดูกราฟ cost ต่อ epoch เสมอ'
},

/* ================= 7) sgd ================= */
{
  id: 'batch-types', section: 'sgd', kind: 'ภาพนิ่ง', title: 'อัปเดต 1 ครั้งใช้ข้อมูลกี่แถว? Batch · Mini-batch · SGD',
  html: `<svg viewBox="0 0 760 360" font-size="15" role="img" aria-label="เทียบ batch, mini-batch, SGD">
<rect x="12" y="16" width="736" height="104" rx="14" class="f1l"/><rect x="12" y="128" width="736" height="104" rx="14" class="f4l"/><rect x="12" y="240" width="736" height="104" rx="14" class="f2l"/>
<text x="28" y="50" class="tb" font-size="17">Batch GD</text><text x="28" y="74" class="tm" font-size="14">(batch learning)</text><text x="28" y="98" font-size="14">ใช้ทุกแถวพร้อมกัน</text>
<text x="28" y="162" class="tb" font-size="17">Mini-batch GD</text><text x="28" y="186" class="tm" font-size="14">(mini-batch learning)</text><text x="28" y="210" font-size="14">ใช้ทีละกลุ่มย่อย</text>
<text x="28" y="274" class="tb" font-size="17">Stochastic GD</text><text x="28" y="298" class="tm" font-size="14">(online learning)</text><text x="28" y="322" font-size="14">ใช้ทีละ 1 แถว</text>
<g class="bgp s1" stroke-width="2"><rect x="210" y="66" width="32" height="32" rx="6"/><rect x="250" y="66" width="32" height="32" rx="6"/><rect x="290" y="66" width="32" height="32" rx="6"/><rect x="330" y="66" width="32" height="32" rx="6"/><rect x="370" y="66" width="32" height="32" rx="6"/><rect x="410" y="66" width="32" height="32" rx="6"/><rect x="450" y="66" width="32" height="32" rx="6"/><rect x="490" y="66" width="32" height="32" rx="6"/></g>
<g class="bgp s4" stroke-width="2"><rect x="210" y="178" width="32" height="32" rx="6"/><rect x="250" y="178" width="32" height="32" rx="6"/><rect x="290" y="178" width="32" height="32" rx="6"/><rect x="330" y="178" width="32" height="32" rx="6"/><rect x="370" y="178" width="32" height="32" rx="6"/><rect x="410" y="178" width="32" height="32" rx="6"/><rect x="450" y="178" width="32" height="32" rx="6"/><rect x="490" y="178" width="32" height="32" rx="6"/></g>
<g class="bgp s2" stroke-width="2"><rect x="210" y="290" width="32" height="32" rx="6"/><rect x="250" y="290" width="32" height="32" rx="6"/><rect x="290" y="290" width="32" height="32" rx="6"/><rect x="330" y="290" width="32" height="32" rx="6"/><rect x="370" y="290" width="32" height="32" rx="6"/><rect x="410" y="290" width="32" height="32" rx="6"/><rect x="450" y="290" width="32" height="32" rx="6"/><rect x="490" y="290" width="32" height="32" rx="6"/></g>
<g text-anchor="middle" font-size="14"><text x="226" y="87">1</text><text x="266" y="87">2</text><text x="306" y="87">3</text><text x="346" y="87">4</text><text x="386" y="87">5</text><text x="426" y="87">6</text><text x="466" y="87">7</text><text x="506" y="87">8</text>
<text x="226" y="199">1</text><text x="266" y="199">2</text><text x="306" y="199">3</text><text x="346" y="199">4</text><text x="386" y="199">5</text><text x="426" y="199">6</text><text x="466" y="199">7</text><text x="506" y="199">8</text>
<text x="226" y="311">1</text><text x="266" y="311">2</text><text x="306" y="311">3</text><text x="346" y="311">4</text><text x="386" y="311">5</text><text x="426" y="311">6</text><text x="466" y="311">7</text><text x="506" y="311">8</text></g>
<path d="M210 60V52H522V60" class="s1 nofill" stroke-width="2.5"/>
<path d="M210 172V164H362V172M370 172V164H522V172" class="s4 nofill" stroke-width="2.5"/>
<path d="M210 284V276H242V284M250 284V276H282V284M290 284V276H322V284M330 284V276H362V284M370 284V276H402V284M410 284V276H442V284M450 284V276H482V284M490 284V276H522V284" class="s2 nofill" stroke-width="2.5"/>
<g text-anchor="middle" class="tb" font-size="14"><text x="366" y="44">อัปเดต 1 ครั้ง / epoch</text><text x="286" y="156">อัปเดตครั้งที่ 1</text><text x="446" y="156">ครั้งที่ 2</text><text x="366" y="268">อัปเดต 8 ครั้ง / epoch (ทุกแถว)</text></g>
<g class="ln" stroke-width="1.2" fill="none">
<ellipse cx="588" cy="68" rx="36" ry="26"/><ellipse cx="588" cy="68" rx="24" ry="17"/><ellipse cx="588" cy="68" rx="12" ry="8"/>
<ellipse cx="588" cy="180" rx="36" ry="26"/><ellipse cx="588" cy="180" rx="24" ry="17"/><ellipse cx="588" cy="180" rx="12" ry="8"/>
<ellipse cx="588" cy="292" rx="36" ry="26"/><ellipse cx="588" cy="292" rx="24" ry="17"/><ellipse cx="588" cy="292" rx="12" ry="8"/></g>
<polyline points="556,46 570,56 581,63 588,68" class="s1 nofill" stroke-width="2.5"/>
<polyline points="556,158 574,162 570,174 584,174 588,180" class="s4 nofill" stroke-width="2.5"/>
<polyline points="556,270 582,266 562,288 596,280 576,302 594,290 588,292" class="s2 nofill" stroke-width="2.5"/>
<g class="f3"><circle cx="588" cy="68" r="3.5"/><circle cx="588" cy="180" r="3.5"/><circle cx="588" cy="292" r="3.5"/></g>
<text x="640" y="62" class="tb" font-size="14">นิ่ง แม่นยำ</text><text x="640" y="86" font-size="14">แต่ช้า กินแรม</text>
<text x="640" y="174" class="tb" font-size="14">สมดุล ใช้ GPU</text><text x="640" y="198" font-size="14">มาตรฐาน DL</text>
<text x="640" y="286" class="tb" font-size="14">เร็ว อัปเดตบ่อย</text><text x="640" y="310" font-size="14">แต่ทางเดินแกว่ง</text>
</svg>`,
  caption: 'ทั้ง 3 แบบคือ gradient descent เหมือนกัน ต่างกันแค่ “ดูข้อมูลกี่แถวก่อนก้าว 1 ก้าว” · ในภาพ mini-batch ใช้กลุ่มละ 4 แถว (ของจริงมักใช้ 32 หรือ 64) · ตัวอย่างคำนวณในสไลด์ 23–26 เป็นแบบ SGD ส่วน AdalineGD ใน Lab เป็นแบบ batch'
},
{
  id: 'sgd-steps', section: 'sgd', kind: 'ทีละขั้น', title: 'SGD ทีละแถว: ตัวเลขจริงจากสไลด์ 24–26',
  html: `<div class="stepper"><svg viewBox="0 0 760 400" font-size="15" role="img" aria-label="ตัวอย่าง SGD ทีละขั้น">
<defs><marker id="L08-sg-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker>
<marker id="L08-sg-ar5" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="f5"/></marker></defs>
<text x="12" y="18" class="tb" font-size="14">แถว 1 (สไลด์ 24): y = +1 · η = 0.0001</text>
<g class="f1l s1" stroke-width="2"><rect x="12" y="28" width="110" height="40" rx="10"/><rect x="12" y="80" width="110" height="40" rx="10"/><rect x="12" y="132" width="110" height="40" rx="10"/></g>
<g text-anchor="middle" class="tb"><text x="67" y="54">x₀ = 1</text><text x="67" y="106">x₁ = 148</text><text x="67" y="158">x₂ = 33.6</text></g>
<g text-anchor="middle" class="tm" font-size="18"><text x="141" y="54">×</text><text x="141" y="106">×</text><text x="141" y="158">×</text></g>
<g class="f2l s2" stroke-width="2"><rect x="160" y="28" width="110" height="40" rx="10"/><rect x="160" y="80" width="110" height="40" rx="10"/><rect x="160" y="132" width="110" height="40" rx="10"/></g>
<g text-anchor="middle" class="tb"><text x="215" y="54">w₀ = 0.5</text><text x="215" y="106">w₁ = 0.5</text><text x="215" y="158">w₂ = 0.5</text></g>
<g data-s="2">
<g text-anchor="middle" class="tm" font-size="18"><text x="285" y="54">=</text><text x="285" y="106">=</text><text x="285" y="158">=</text></g>
<g class="f7l s7" stroke-width="2"><rect x="300" y="28" width="80" height="40" rx="10"/><rect x="300" y="80" width="80" height="40" rx="10"/><rect x="300" y="132" width="80" height="40" rx="10"/></g>
<g text-anchor="middle" class="tb"><text x="340" y="54">0.5</text><text x="340" y="106">74</text><text x="340" y="158">16.8</text></g>
<path d="M380 48L406 86M380 100H404M380 152L406 114" class="ln" stroke-width="2"/>
<circle cx="430" cy="100" r="26" class="f2l s2" stroke-width="2"/><text x="430" y="108" text-anchor="middle" class="tb" font-size="20">Σ</text>
<path d="M456 100H472" class="ln" stroke-width="2" marker-end="url(#L08-sg-ar)"/>
<rect x="476" y="74" width="112" height="52" rx="10" class="f4l s4" stroke-width="2"/><text x="532" y="96" text-anchor="middle" class="tb">z = 91.3</text><text x="532" y="117" text-anchor="middle" font-size="14">f(z) = z</text>
</g>
<g data-s="3">
<path d="M588 100H602" class="ln" stroke-width="2" marker-end="url(#L08-sg-ar)"/>
<rect x="606" y="66" width="142" height="68" rx="10" class="f5l s5" stroke-width="2"/><text x="677" y="92" text-anchor="middle">e = 1 − 91.3</text><text x="677" y="120" text-anchor="middle" class="tb f5" font-size="18">= −90.3</text>
</g>
<g data-only="1">
<rect x="12" y="196" width="736" height="92" rx="12" class="f7l s7" stroke-width="2"/>
<text x="380" y="232" text-anchor="middle" class="tb" font-size="17">กฎปรับ (สไลด์ 20): wⱼ ← wⱼ + η · (y − f(z)) · xⱼ</text>
<text x="380" y="264" text-anchor="middle" font-size="14">Adaline ปรับทุกแถว — แม้ผ่าน step แล้วจะทายถูกก็ตาม</text>
<rect x="12" y="300" width="736" height="84" rx="12" class="bgp ln" stroke-width="1.5"/>
<text x="380" y="334" text-anchor="middle" class="tb">SGD = ดู 1 แถว → ปรับทันที → ไปแถวถัดไป</text>
<text x="380" y="362" text-anchor="middle" class="tm" font-size="14">x₀ = 1 คือช่องของ bias (w₀ = b)</text>
</g>
<g data-only="2">
<rect x="12" y="196" width="736" height="104" rx="12" class="bgp ln" stroke-width="1.5"/>
<text x="380" y="236" text-anchor="middle" font-size="17">z = 0.5·1 + 0.5·148 + 0.5·33.6</text>
<text x="380" y="272" text-anchor="middle" class="tb" font-size="17">= 0.5 + 74 + 16.8 = 91.3</text>
<text x="380" y="338" text-anchor="middle" class="tm" font-size="14">ตอนเรียน Adaline ไม่ผ่าน step → ใช้ f(z) = z = 91.3 ตรง ๆ (ไม่ตัดเป็น ±1)</text>
</g>
<g data-only="3">
<text x="16" y="212" class="tb">error = เป้า − ค่าที่ทาย</text>
<line x1="50" y1="260" x2="712" y2="260" class="ln" stroke-width="2"/>
<path d="M118 254V266M408 254V266M698 254V266" class="ln" stroke-width="2"/>
<g text-anchor="middle" font-size="13" class="tm"><text x="118" y="282">0</text><text x="408" y="282">50</text><text x="698" y="282">100</text></g>
<circle cx="123.8" cy="260" r="8" class="f3"/><text x="123.8" y="242" text-anchor="middle" class="tb f3" font-size="14">เป้า y = 1</text>
<circle cx="647.5" cy="260" r="8" class="f2"/><text x="647.5" y="242" text-anchor="middle" class="tb f2" font-size="14">f(z) = 91.3</text>
<path d="M638 302H134" class="s5" stroke-width="3" marker-start="url(#L08-sg-ar5)" marker-end="url(#L08-sg-ar5)"/>
<text x="386" y="328" text-anchor="middle" class="tb f5">error = 1 − 91.3 = −90.3 (ห่างเป้ามาก)</text>
<text x="386" y="362" text-anchor="middle" class="tm" font-size="14">ถ้าผ่าน step จะได้ +1 = ทายถูก แต่ Adaline ยังปรับ เพราะดูค่าจริง 91.3</text>
</g>
<g data-only="4">
<text x="16" y="212" class="tb">ปรับทุกตัว: Δwⱼ = η × error × xⱼ</text><text x="420" y="212" class="tm" font-size="14">ขนาดการปรับ |Δw|</text>
<text x="16" y="248">w₀ = 0.5 + 0.0001(−90.3)(1)</text><text x="282" y="248" class="tb">= 0.49097</text>
<text x="16" y="290">w₁ = 0.5 + 0.0001(−90.3)(148)</text><text x="282" y="290" class="tb f5">= −0.83644</text>
<text x="16" y="332">w₂ = 0.5 + 0.0001(−90.3)(33.6)</text><text x="282" y="332" class="tb">= 0.196592</text>
<g class="f2"><rect x="420" y="236" width="2" height="16"/><rect x="420" y="278" width="200" height="16"/><rect x="420" y="320" width="45.4" height="16"/></g>
<g font-size="14"><text x="430" y="249">0.00903</text><text x="628" y="291" class="tb">1.33644</text><text x="474" y="333">0.30341</text></g>
<text x="16" y="376" class="tm" font-size="14">glucose = 148 ตัวใหญ่ → w₁ โดนปรับแรงที่สุด (ขนาดการปรับ ∝ error × ค่า feature)</text>
</g>
<g data-only="5">
<text x="16" y="212" class="tb">w₁ หลังแต่ละแถว: แกว่งไปมา</text>
<path d="M60 300H530" class="ln" stroke-width="1.5" stroke-dasharray="4 4"/><text x="52" y="305" text-anchor="end" class="tm" font-size="13">0</text>
<g text-anchor="middle" class="tm" font-size="14"><text x="100" y="236">เริ่ม</text><text x="230" y="236">หลังแถว 1</text><text x="360" y="236">หลังแถว 2</text><text x="490" y="236">หลังแถว 3</text></g>
<polyline points="100,255 230,375.3 360,326 490,277.2" class="s2 nofill" stroke-width="3"/>
<g class="f2"><circle cx="100" cy="255" r="6"/><circle cx="230" cy="375.3" r="6"/><circle cx="360" cy="326" r="6"/><circle cx="490" cy="277.2" r="6"/></g>
<g class="tb" font-size="14"><text x="112" y="260">0.5</text><text x="242" y="380">−0.836</text><text x="372" y="331">−0.289</text><text x="502" y="282">0.253</text></g>
<rect x="560" y="222" width="188" height="170" rx="12" class="bgp ln" stroke-width="1.5"/>
<text x="572" y="248" class="tb" font-size="14">error แต่ละแถว</text>
<text x="572" y="274" font-size="14">แถว 1: −90.3</text><text x="572" y="298" font-size="14">แถว 2: +64.38</text><text x="572" y="322" font-size="14">แถว 3: +33.91</text>
<text x="572" y="352" class="tm" font-size="14">w หลังแถว 3 ≈</text><text x="572" y="376" font-size="14">(0.5008, 0.2533, 0.4865)</text>
</g>
</svg><ol class="caps">
<li>Adaline + SGD (สไลด์ 23–24): ป้อนแถว 1 เข้าไป · x₀ = 1 คือช่องของ bias · เริ่มทุก w = 0.5 และ η = 0.0001 (เล็กมากเพราะยังไม่ได้ scale feature)</li>
<li>คูณแล้วบวก: z = 0.5 + 74 + 16.8 = 91.3 · Adaline ตอนเรียนไม่ผ่าน step เลยใช้ f(z) = z = 91.3 ตรง ๆ</li>
<li>error = y − f(z) = 1 − 91.3 = −90.3 · ถ้าผ่าน step จะได้ +1 (ทายถูก) แต่ Adaline ยังเห็นว่าห่างเป้ามาก จึงยังปรับ</li>
<li>ปรับทุกน้ำหนัก: wⱼ ← wⱼ + η·error·xⱼ → w₀ = 0.49097, w₁ = −0.83644, w₂ = 0.196592 · w₁ โดนหนักสุดเพราะ glucose = 148 ตัวใหญ่</li>
<li>แถว 2 (error 64.38) และแถว 3 (error 33.91) ทำแบบเดียวกัน → w₁ แกว่ง 0.5 → −0.836 → −0.289 → 0.253 · ต้นเหตุคือ feature สเกลใหญ่ → หัวข้อถัดไป: feature scaling</li>
</ol></div>`,
  caption: 'SGD = อัปเดตทันทีหลังดูข้อมูลทีละ 1 แถว (online learning) · ตัวเลขทุกตัวตรงกับสไลด์ 24–26'
},

/* ================= 8) scaling ================= */
{
  id: 'contours', section: 'scaling', kind: 'ภาพนิ่ง', title: 'ทำไมต้อง scale: หุบเขาแคบยาว vs ชามกลม',
  html: `<svg viewBox="0 0 760 400" font-size="15" role="img" aria-label="ผลของ feature scaling ต่อรูปทรง loss">
<rect x="12" y="12" width="362" height="376" rx="14" class="bgp s5" stroke-width="2"/><rect x="386" y="12" width="362" height="376" rx="14" class="bgp s3" stroke-width="2"/>
<text x="193" y="38" text-anchor="middle" class="tb" font-size="16">ก่อน scale (ค่าดิบ)</text><text x="567" y="38" text-anchor="middle" class="tb" font-size="16">หลัง standardize</text>
<path d="M90 70H350M90 104H350" class="ln" stroke-width="1.5"/>
<g text-anchor="end" font-size="14"><text x="82" y="75">glucose</text><text x="82" y="109">BMI</text></g>
<g text-anchor="middle" font-size="12" class="tm"><text x="90" y="126">0</text><text x="220" y="126">100</text><text x="350" y="126">200</text></g>
<g class="f1" opacity=".85"><circle cx="282.4" cy="70" r="5"/><circle cx="200.5" cy="70" r="5"/><circle cx="298" cy="70" r="5"/><circle cx="207" cy="70" r="5"/><circle cx="324" cy="70" r="5"/><circle cx="220" cy="70" r="5"/><circle cx="259" cy="70" r="5"/><circle cx="181" cy="70" r="5"/></g>
<g class="f2" opacity=".85"><circle cx="133.7" cy="104" r="5"/><circle cx="124.6" cy="104" r="5"/><circle cx="135.5" cy="104" r="5"/><circle cx="119.3" cy="104" r="5"/><circle cx="142.3" cy="104" r="5"/><circle cx="121.2" cy="104" r="5"/><circle cx="129.1" cy="104" r="5"/><circle cx="117.3" cy="104" r="5"/></g>
<text x="250" y="92" text-anchor="middle" class="tm" font-size="14">ช่วงค่าต่างกันมาก</text>
<g class="ln" stroke-width="1.5" fill="none"><ellipse cx="193" cy="240" rx="150" ry="66"/><ellipse cx="193" cy="240" rx="108" ry="48"/><ellipse cx="193" cy="240" rx="66" ry="29"/><ellipse cx="193" cy="240" rx="26" ry="11"/></g>
<polyline points="60,196 92,290 120,200 146,278 166,214 180,262 189,232 193,240" class="s5 nofill" stroke-width="2.5"/>
<g class="f5"><circle cx="60" cy="196" r="5.5"/><circle cx="92" cy="290" r="3.5"/><circle cx="120" cy="200" r="3.5"/><circle cx="146" cy="278" r="3.5"/><circle cx="166" cy="214" r="3.5"/><circle cx="180" cy="262" r="3.5"/><circle cx="189" cy="232" r="3.5"/></g>
<circle cx="193" cy="240" r="4" class="f3"/>
<text x="26" y="245" class="tm" font-size="14">w₁</text><text x="193" y="328" text-anchor="middle" class="tm" font-size="14">w₂</text>
<text x="193" y="356" text-anchor="middle" class="tb f5">หุบแคบยาว → ก้าวแกว่งไปมา</text><text x="193" y="378" text-anchor="middle" class="tm" font-size="14">η เดียวไม่เหมาะกับทุกแกน</text>
<path d="M464 70H724M464 104H724" class="ln" stroke-width="1.5"/>
<g text-anchor="end" font-size="14"><text x="456" y="75">glucose′</text><text x="456" y="109">BMI′</text></g>
<g text-anchor="middle" font-size="12" class="tm"><text x="464" y="126">−2</text><text x="594" y="126">0</text><text x="724" y="126">+2</text></g>
<g class="f1" opacity=".85"><circle cx="642.1" cy="70" r="5"/><circle cx="532.3" cy="70" r="5"/><circle cx="662.9" cy="70" r="5"/><circle cx="540.7" cy="70" r="5"/><circle cx="698" cy="70" r="5"/><circle cx="558.3" cy="70" r="5"/><circle cx="610.9" cy="70" r="5"/><circle cx="506.3" cy="70" r="5"/></g>
<g class="f2" opacity=".85"><circle cx="640.2" cy="104" r="5"/><circle cx="568" cy="104" r="5"/><circle cx="654.5" cy="104" r="5"/><circle cx="525.8" cy="104" r="5"/><circle cx="707.8" cy="104" r="5"/><circle cx="541.4" cy="104" r="5"/><circle cx="603.8" cy="104" r="5"/><circle cx="510.8" cy="104" r="5"/></g>
<text x="567" y="154" text-anchor="middle" class="tb f4">x′ = (x − μ) / σ</text>
<g class="ln" stroke-width="1.5" fill="none"><circle cx="567" cy="250" r="76"/><circle cx="567" cy="250" r="54"/><circle cx="567" cy="250" r="32"/><circle cx="567" cy="250" r="12"/></g>
<polyline points="505,205 525,220 545,234 557,243 567,250" class="s3 nofill" stroke-width="2.5"/>
<g class="f3"><circle cx="505" cy="205" r="5.5"/><circle cx="525" cy="220" r="3.5"/><circle cx="545" cy="234" r="3.5"/><circle cx="557" cy="243" r="3.5"/><circle cx="567" cy="250" r="4"/></g>
<text x="400" y="255" class="tm" font-size="14">w₁</text><text x="567" y="342" text-anchor="middle" class="tm" font-size="14">w₂</text>
<text x="567" y="364" text-anchor="middle" class="tb f3">ชามกลม → เดินตรงเข้าก้นชาม</text><text x="567" y="382" text-anchor="middle" class="tm" font-size="14">ทุก feature: mean 0, SD 1</text>
</svg>`,
  caption: 'standardize = ให้ทุก feature ใช้ “ไม้บรรทัด” เดียวกัน (μ glucose = 120.4, σ = 37.3 · μ BMI = 29.1, σ = 6.3 จาก 8 แถวตัวอย่าง) → รูปทรง loss กลมขึ้น η ค่าเดียวใช้ได้ทุกทิศ (ภาพ contour เป็นภาพร่างเพื่อเข้าใจ)'
},
{
  id: 'lab-cost', section: 'scaling', kind: 'ภาพนิ่ง', title: 'ผลจริงใน Lab 08 (สไลด์ 37): อ่านกราฟ cost ต่อ epoch',
  html: `<svg viewBox="0 0 760 330" font-size="15" role="img" aria-label="กราฟ cost ต่อ epoch จาก Lab 08">
<g stroke-width="2"><rect x="12" y="12" width="236" height="306" rx="14" class="bgp s5"/><rect x="262" y="12" width="236" height="306" rx="14" class="bgp s2"/><rect x="512" y="12" width="236" height="306" rx="14" class="bgp s3"/></g>
<g text-anchor="middle" class="tb"><text x="130" y="38">ไม่ scale · η = 0.01</text><text x="380" y="38">ไม่ scale · η = 0.0001</text><text x="630" y="38">standardize · η = 0.01</text></g>
<g text-anchor="middle" class="tm" font-size="14"><text x="130" y="56">แกนตั้งแบบ log</text><text x="380" y="56">แกนตั้ง 0–50</text><text x="630" y="56">η ตัวเดิม</text></g>
<path d="M52 80V240H232M302 80V240H482M552 80V240H732" class="ln" stroke-width="1.5"/>
<g text-anchor="end" font-size="12" class="tm"><text x="48" y="232">10¹</text><text x="48" y="164">10⁷</text><text x="48" y="95">10¹³</text><text x="298" y="244">0</text><text x="298" y="164">25</text><text x="298" y="84">50</text></g>
<g text-anchor="end" font-size="13" class="tm"><text x="232" y="256">epoch →</text><text x="482" y="256">epoch →</text><text x="732" y="256">epoch →</text></g>
<polyline points="62,221.3 102,186.7 142,152.1 182,117.4 222,82.8" class="s5 nofill" stroke-width="2.5"/>
<g class="f5"><circle cx="62" cy="221.3" r="4.5"/><circle cx="102" cy="186.7" r="3.5"/><circle cx="142" cy="152.1" r="3.5"/><circle cx="182" cy="117.4" r="3.5"/><circle cx="222" cy="82.8" r="4.5"/></g>
<text x="72" y="236" class="tb" font-size="14">43.5</text><text x="214" y="78" text-anchor="end" class="tb f5" font-size="14">5.7 × 10¹³</text>
<path d="M312 105.3Q392 124 472 134.7" class="s2 nofill" stroke-width="2.5"/>
<circle cx="312" cy="105.3" r="4.5" class="f2"/><circle cx="472" cy="134.7" r="4.5" class="f2"/>
<text x="318" y="96" class="tb" font-size="14">42.1</text><text x="472" y="124" text-anchor="end" class="tb f2" font-size="14">32.9</text>
<path d="M562 100Q590 232 722 234" class="s3 nofill" stroke-width="2.5"/><circle cx="562" cy="100" r="4.5" class="f3"/>
<text x="668" y="150" text-anchor="middle" font-size="14">ลดเร็ว แล้วนิ่ง</text>
<g text-anchor="middle" class="tb" font-size="16"><text x="130" y="278" class="f5">cost ระเบิด ✘</text><text x="380" y="278" class="f2">ลดช้ามาก ✘</text><text x="630" y="278" class="f3">ใช้ได้ทันที ✔</text></g>
<g text-anchor="middle" class="tm" font-size="14"><text x="130" y="302">ลด η หรือ scale ข้อมูล</text><text x="380" y="302">ต้องรอหลายรอบมาก</text><text x="630" y="302">แก้ที่ข้อมูล ไม่ใช่อัลกอริทึม</text></g>
</svg>`,
  caption: 'อ่านกราฟ cost ต่อ epoch: พุ่งขึ้น = η ใหญ่ไป · ลดช้า = η เล็กไป · ตัวเลข 43.5 → 5.7×10¹³ และ 42.1 → 32.9 มาจากสไลด์ 37 (รูปเส้นเป็นภาพร่าง) — หลัง standardize ใช้ η = 0.01 ตัวเดิมได้ทันที'
},

/* ================= 9) mlp ================= */
{
  id: 'mlp-flow', section: 'mlp', kind: 'เคลื่อนไหว', title: 'MLP: ข้อมูลไหลผ่านหลายชั้น (forward pass)',
  html: `<svg viewBox="0 0 760 380" font-size="15" role="img" aria-label="ข้อมูลไหลผ่าน MLP">
<defs><marker id="L08-mf-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<text x="385" y="28" text-anchor="middle" class="tb" font-size="14">ข้อมูลไหลจากซ้ายไปขวา →</text>
<path d="M70 40H700" class="ln" stroke-width="2" marker-end="url(#L08-mf-ar)"/>
<path d="M100 100L290 70M100 100L290 135M100 100L290 200M100 100L290 265M100 170L290 70M100 170L290 135M100 170L290 200M100 170L290 265M100 240L290 70M100 240L290 135M100 240L290 200M100 240L290 265M290 70L480 100M290 70L480 170M290 70L480 240M290 135L480 100M290 135L480 170M290 135L480 240M290 200L480 100M290 200L480 170M290 200L480 240M290 265L480 100M290 265L480 170M290 265L480 240M480 100L660 170M480 170L660 170M480 240L660 170" class="ln v-flow" stroke-width="1.5"/>
<circle r="6" class="f2"><animateMotion dur="3s" repeatCount="indefinite" path="M100 170L290 70L480 170L660 170"/></circle>
<circle r="6" class="f2"><animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M100 100L290 200L480 240L660 170"/></circle>
<circle r="6" class="f2"><animateMotion dur="3s" begin="2s" repeatCount="indefinite" path="M100 240L290 135L480 100L660 170"/></circle>
<g class="f1l s1" stroke-width="2"><circle cx="100" cy="100" r="22"/><circle cx="100" cy="170" r="22"/><circle cx="100" cy="240" r="22"/></g>
<g text-anchor="middle" class="tb"><text x="100" y="106">x₁</text><text x="100" y="176">x₂</text><text x="100" y="246">x₃</text></g>
<g class="f4l s4" stroke-width="2"><circle cx="290" cy="70" r="20"/><circle cx="290" cy="135" r="20"/><circle cx="290" cy="200" r="20"/><circle cx="290" cy="265" r="20"/><circle cx="480" cy="100" r="20"/><circle cx="480" cy="170" r="20"/><circle cx="480" cy="240" r="20"/></g>
<path d="M280 75H290L299 63M280 140H290L299 128M280 205H290L299 193M280 270H290L299 258M470 105H480L489 93M470 175H480L489 163M470 245H480L489 233" class="s4 nofill" stroke-width="2.5"/>
<circle cx="660" cy="170" r="24" class="f3l s3" stroke-width="2"/><text x="660" y="177" text-anchor="middle" class="tb" font-size="18">ŷ</text>
<g text-anchor="middle">
<text x="100" y="314" class="tb">Input layer</text><text x="100" y="336" font-size="14">รับ feature ตรง ๆ</text><text x="100" y="358" class="tm" font-size="14">1 วง = 1 feature</text>
<text x="385" y="314" class="tb">Hidden layers (ชั้นซ่อน)</text><text x="385" y="336" font-size="14">แต่ละวง = perceptron + ReLU</text><text x="385" y="358" class="tm" font-size="14">สร้าง “feature ใหม่” เอง</text>
<text x="660" y="314" class="tb">Output layer</text><text x="660" y="336" font-size="14">sigmoid = 2 คลาส</text><text x="660" y="358" class="tm" font-size="14">softmax = หลายคลาส</text>
</g>
</svg>`,
  caption: 'MLP = Perceptron หลายตัวเรียงเป็นชั้น ทุกวงเชื่อมกับทุกวงในชั้นถัดไป (dense) · ข้อมูลไหลซ้ายไปขวาจนได้คำทำนาย ŷ · งาน regression ไม่ใส่ activation ที่ output'
},
{
  id: 'nonlinear', section: 'mlp', kind: 'ภาพนิ่ง', title: 'ทำไมต้องมี activation ไม่เชิงเส้น? (เหมือนพับกระดาษ)',
  html: `<svg viewBox="0 0 760 420" font-size="15" role="img" aria-label="เหตุผลที่ต้องมี activation ไม่เชิงเส้น">
<defs><marker id="L08-nl-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<rect x="12" y="12" width="362" height="246" rx="14" class="bgp s5" stroke-width="2"/><rect x="386" y="12" width="362" height="246" rx="14" class="bgp s3" stroke-width="2"/>
<text x="193" y="38" text-anchor="middle" class="tb" font-size="16">ไม่มี activation</text><text x="567" y="38" text-anchor="middle" class="tb" font-size="16">มี ReLU คั่นกลาง</text>
<rect x="326" y="22" width="34" height="24" rx="3" class="f7l s7" stroke-width="1.5"/>
<path d="M700 22H730L740 32V46H700Z" class="f7l s7" stroke-width="1.5"/><path d="M730 22V32H740" class="s7 nofill" stroke-width="1.5"/>
<g class="f1l s1" stroke-width="1.5"><rect x="61" y="56" width="36" height="32" rx="8"/><rect x="289" y="56" width="36" height="32" rx="8"/><rect x="413" y="56" width="32" height="32" rx="8"/><rect x="689" y="56" width="32" height="32" rx="8"/></g>
<g class="f2l s2" stroke-width="1.5"><rect x="121" y="56" width="60" height="32" rx="8"/><rect x="205" y="56" width="60" height="32" rx="8"/><rect x="465" y="56" width="52" height="32" rx="8"/><rect x="617" y="56" width="52" height="32" rx="8"/></g>
<rect x="537" y="56" width="60" height="32" rx="8" class="f3l s3" stroke-width="2"/>
<g text-anchor="middle" font-size="15"><text x="79" y="77">x</text><text x="151" y="77">× W₁</text><text x="235" y="77">× W₂</text><text x="307" y="77">y</text>
<text x="429" y="77">x</text><text x="491" y="77">× W₁</text><text x="567" y="77" class="tb">ReLU</text><text x="643" y="77">× W₂</text><text x="705" y="77">y</text></g>
<g class="ln" stroke-width="2"><path d="M99 72H117" marker-end="url(#L08-nl-ar)"/><path d="M183 72H201" marker-end="url(#L08-nl-ar)"/><path d="M267 72H285" marker-end="url(#L08-nl-ar)"/>
<path d="M447 72H461" marker-end="url(#L08-nl-ar)"/><path d="M519 72H533" marker-end="url(#L08-nl-ar)"/><path d="M599 72H613" marker-end="url(#L08-nl-ar)"/><path d="M671 72H685" marker-end="url(#L08-nl-ar)"/></g>
<text x="193" y="118" text-anchor="middle" class="tb">W₂(W₁x) = (W₂W₁)x = Wx</text><text x="567" y="118" text-anchor="middle" class="tb">y = W₂ · ReLU(W₁x)</text>
<path d="M70 182H320M195 132V230M444 182H694M569 132V230" class="ln" stroke-width="1.2"/>
<path d="M80 222L310 142" class="s5" stroke-width="3"/>
<path d="M454 142L569 222L684 142" class="s3 nofill" stroke-width="3" stroke-linejoin="round"/>
<text x="193" y="248" text-anchor="middle" class="tm" font-size="14">ต่อกี่ชั้นก็ยังเป็นเส้นตรง (= 1 ชั้น)</text>
<text x="567" y="248" text-anchor="middle" class="tm" font-size="14">“พับ” ได้ → โค้งงอได้ → แยก XOR ได้</text>
<g class="bgp ln" stroke-width="1.5"><rect x="16" y="270" width="176" height="142" rx="12"/><rect x="200" y="270" width="176" height="142" rx="12"/><rect x="384" y="270" width="176" height="142" rx="12"/><rect x="568" y="270" width="176" height="142" rx="12"/></g>
<g text-anchor="middle" class="tb"><text x="104" y="292">Step</text><text x="288" y="292">Sigmoid σ</text><text x="472" y="292">Tanh</text><text x="656" y="292">ReLU</text></g>
<path d="M36 352H172M104 304V392M220 352H356M288 304V392M404 352H540M472 304V392M588 352H724M656 304V392" class="grid" stroke-width="1.5"/>
<path d="M36 388H104V316H172" class="s2 nofill" stroke-width="2.5"/>
<path d="M220 351C280 351 296 317 356 317" class="s4 nofill" stroke-width="2.5"/>
<path d="M404 387C464 387 480 317 540 317" class="s6 nofill" stroke-width="2.5"/>
<path d="M588 352H656L718 316" class="s3 nofill" stroke-width="2.5"/>
<g text-anchor="middle" font-size="14"><text x="104" y="406">ความชันเป็น 0 → ✘ backprop</text><text x="288" y="406">σ(0) = 0.5 · ช่วง (0, 1)</text><text x="472" y="406">tanh(0) = 0 · ช่วง (−1, 1)</text><text x="656" y="406">max(0, z) · ยอดนิยม</text></g>
</svg>`,
  caption: 'เหมือนพับกระดาษ: ยืดหรือหมุนกระดาษกี่ครั้ง เส้นตรงก็ยังตรง (ชั้นเชิงเส้นซ้อนกัน = ชั้นเดียว) แต่ถ้า “พับ” ได้ (ReLU, sigmoid, tanh) จะเกิดมุมและรูปทรงใหม่ — จึงต้องมี activation ไม่เชิงเส้นคั่นทุกชั้น'
},
{
  id: 'xor', section: 'mlp', kind: 'ทีละขั้น', title: 'XOR: เส้นเดียวแยกไม่ได้ → ชั้นซ่อนช่วยได้',
  html: `<div class="stepper"><svg viewBox="0 0 760 340" font-size="15" role="img" aria-label="แก้ XOR ด้วยชั้นซ่อน">
<defs><marker id="L08-xo-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<g data-s="3"><polygon points="40,130 190,280 280,280 280,220 100,40 40,40" class="f1l" opacity=".85"/><text x="140" y="168" text-anchor="middle" class="tb f1" font-size="14">แถบกลาง = 1</text></g>
<rect x="40" y="40" width="240" height="240" class="ln" stroke-width="1"/>
<text x="280" y="300" text-anchor="end" class="tm" font-size="14">x₁ →</text><text x="34" y="34" class="tm" font-size="14">x₂</text>
<g text-anchor="middle" font-size="13" class="tm"><text x="77.5" y="298">0</text><text x="227.5" y="298">1</text><text x="30" y="247">0</text><text x="30" y="97">1</text></g>
<g data-only="1"><path d="M40 70L280 250" class="s5" stroke-width="2.5" stroke-dasharray="7 5"/><text x="160" y="322" text-anchor="middle" class="tb f5">เส้นเดียวแยกไม่ได้ ✘</text></g>
<g data-s="2"><path d="M40 130L190 280" class="s3" stroke-width="3"/><text x="46" y="120" class="tb f3" font-size="14">h₁ (OR)</text></g>
<g data-s="3"><path d="M100 40L280 220" class="s4" stroke-width="3"/><text x="106" y="32" class="tb f4" font-size="14">h₂ (NAND)</text></g>
<g class="f1"><circle cx="77.5" cy="92.5" r="9"/><circle cx="227.5" cy="242.5" r="9"/></g>
<g class="f2"><rect x="69.5" y="234.5" width="16" height="16"/><rect x="219.5" y="84.5" width="16" height="16"/></g>
<g data-s="4">
<path d="M286 160H332" class="ln" stroke-width="2.5" marker-end="url(#L08-xo-ar)"/><text x="309" y="150" text-anchor="middle" class="tb" font-size="14">ชั้นซ่อน</text>
<rect x="340" y="40" width="240" height="240" class="ln" stroke-width="1"/>
<text x="580" y="300" text-anchor="end" class="tm" font-size="14">h₁ →</text><text x="346" y="34" class="tm" font-size="14">h₂</text>
<g text-anchor="middle" font-size="13" class="tm"><text x="377.5" y="298">0</text><text x="527.5" y="298">1</text></g>
<path d="M400 40L580 220" class="s6" stroke-width="3"/>
<g class="f1"><circle cx="521.5" cy="98.5" r="9"/><circle cx="533.5" cy="86.5" r="9"/></g>
<g class="f2"><rect x="369.5" y="84.5" width="16" height="16"/><rect x="519.5" y="234.5" width="16" height="16"/></g>
<g text-anchor="middle" class="tm" font-size="14"><text x="377.5" y="74">จาก (0,0)</text><text x="527.5" y="268">จาก (1,1)</text><text x="520" y="66">จาก (0,1),(1,0)</text></g>
<text x="460" y="200" text-anchor="middle" class="tb f3" font-size="14">เส้นเดียวแยกได้ ✔</text>
<g text-anchor="middle" class="tb" font-size="14"><text x="614" y="60">x₁</text><text x="638" y="60">x₂</text><text x="668" y="60">h₁</text><text x="692" y="60">h₂</text><text x="726" y="60">y</text></g>
<path d="M600 68H748M652 44V178M708 44V178" class="ln" stroke-width="1.2"/>
<g text-anchor="middle" font-size="15"><text x="614" y="92">0</text><text x="638" y="92">0</text><text x="668" y="92">0</text><text x="692" y="92">1</text><text x="726" y="92" class="tb">0</text>
<text x="614" y="118">0</text><text x="638" y="118">1</text><text x="668" y="118">1</text><text x="692" y="118">1</text><text x="726" y="118" class="tb f1">1</text>
<text x="614" y="144">1</text><text x="638" y="144">0</text><text x="668" y="144">1</text><text x="692" y="144">1</text><text x="726" y="144" class="tb f1">1</text>
<text x="614" y="170">1</text><text x="638" y="170">1</text><text x="668" y="170">1</text><text x="692" y="170">0</text><text x="726" y="170" class="tb">0</text></g>
<text x="674" y="206" text-anchor="middle" font-size="14">h₁ = OR · h₂ = NAND</text><text x="674" y="230" text-anchor="middle" class="tb" font-size="14">y = AND → XOR ✔</text>
</g>
</svg><ol class="caps">
<li>XOR: ออก 1 เมื่อ x₁ ≠ x₂ (วงกลมน้ำเงิน) · จุดสีเดียวกันอยู่ทแยงกัน — ลากเส้นตรงเส้นเดียวแบบไหนก็แยกไม่ได้ ✘ (Perceptron ตัวเดียวแพ้)</li>
<li>เพิ่ม hidden neuron ตัวที่ 1: h₁ = step(x₁ + x₂ − 0.5) = OR → เส้นเขียวแยก (0,0) ออกจากจุดอื่น</li>
<li>hidden neuron ตัวที่ 2: h₂ = step(−x₁ − x₂ + 1.5) = NAND → สองเส้นรวมกันได้ “แถบกลาง” ที่มีแต่คลาส 1</li>
<li>ย้ายทุกจุดไปพิกัดใหม่ (h₁, h₂): ตอนนี้เส้นตรงเส้นเดียว y = step(h₁ + h₂ − 1.5) = AND แยกได้แล้ว ✔ → ชั้นซ่อนสร้าง feature ใหม่ที่ทำให้โจทย์ง่ายขึ้น</li>
</ol></div>`,
  caption: 'นี่คือหัวใจของ deep learning: ชั้นซ่อนแปลงข้อมูลไปพิกัดใหม่ จนโจทย์ที่เส้นตรงแก้ไม่ได้ กลายเป็นแก้ได้'
},

/* ================= 10) backprop ================= */
{
  id: 'bp-cycle', section: 'backprop', kind: 'ทีละขั้น', title: 'Backpropagation: ส่งข้อมูลไปหน้า → ส่ง “ความผิด” ย้อนกลับ',
  html: `<div class="stepper"><svg viewBox="0 0 760 390" font-size="15" role="img" aria-label="วงจร forward, loss, backward, update">
<defs>
<marker id="L08-bp-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker>
<marker id="L08-bp-ar1" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0 0L10 5L0 10z" class="f1"/></marker>
<marker id="L08-bp-ar2" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0 0L10 5L0 10z" class="f2"/></marker>
</defs>
<text x="16" y="45" class="tb f1" font-size="14">Forward →</text>
<path d="M116 40H262M316 40H452M506 40H566" class="s1" stroke-width="3"/>
<path d="M250 40H262" class="s1" stroke-width="3" marker-end="url(#L08-bp-ar1)"/><path d="M440 40H452" class="s1" stroke-width="3" marker-end="url(#L08-bp-ar1)"/><path d="M554 40H566" class="s1" stroke-width="3" marker-end="url(#L08-bp-ar1)"/>
<path d="M90 100L290 100M90 100L290 220M90 220L290 100M90 220L290 220M290 100L480 160M290 220L480 160" class="ln" stroke-width="2"/>
<path d="M508 160H566" class="ln" stroke-width="2" marker-end="url(#L08-bp-ar)"/>
<path data-only="1" d="M90 100L290 100M90 100L290 220M90 220L290 100M90 220L290 220M290 100L480 160M290 220L480 160M480 160H566" class="s1 nofill v-flow" stroke-width="3"/>
<path data-only="3" d="M290 100L90 100M290 220L90 100M290 100L90 220M290 220L90 220M480 160L290 100M480 160L290 220M570 160H480" class="s2 nofill v-flow" stroke-width="3"/>
<path data-only="4" d="M90 100L290 100M90 100L290 220M90 220L290 100M90 220L290 220M290 100L480 160M290 220L480 160" class="s3 nofill" stroke-width="4"/>
<g class="f1l s1" stroke-width="2"><circle cx="90" cy="100" r="26"/><circle cx="90" cy="220" r="26"/></g>
<g class="f4l s4" stroke-width="2"><circle cx="290" cy="100" r="26"/><circle cx="290" cy="220" r="26"/></g>
<circle cx="480" cy="160" r="28" class="f3l s3" stroke-width="2"/>
<g text-anchor="middle" class="tb"><text x="90" y="106">x₁</text><text x="90" y="226">x₂</text><text x="290" y="106">h₁</text><text x="290" y="226">h₂</text><text x="480" y="167" font-size="18">ŷ</text></g>
<rect x="570" y="128" width="170" height="64" rx="12" class="f5l s5" stroke-width="2"/><text x="655" y="154" text-anchor="middle" class="tb">loss</text>
<g data-s="2"><text x="655" y="180" text-anchor="middle">½(y − ŷ)²</text>
<rect x="600" y="64" width="110" height="34" rx="10" class="bgp s3" stroke-width="2"/><text x="655" y="86" text-anchor="middle" class="tb" font-size="14">y = เฉลย</text>
<path d="M655 98V122" class="ln" stroke-width="2" marker-end="url(#L08-bp-ar)"/></g>
<g data-s="3">
<text x="16" y="283" class="tb f2" font-size="14">← Backward</text>
<path d="M566 278H508M452 278H318M262 278H118" class="s2" stroke-width="3"/>
<path d="M520 278H508" class="s2" stroke-width="3" marker-end="url(#L08-bp-ar2)"/><path d="M330 278H318" class="s2" stroke-width="3" marker-end="url(#L08-bp-ar2)"/><path d="M130 278H118" class="s2" stroke-width="3" marker-end="url(#L08-bp-ar2)"/>
<g text-anchor="middle" class="tb f2" font-size="14"><text x="190" y="304">∂L/∂w ชั้นแรก</text><text x="385" y="304">∂L/∂w ชั้นที่ 2</text><text x="537" y="304">∂L/∂ŷ</text></g>
</g>
<g data-only="4"><g class="bgp s3" stroke-width="2"><rect x="150" y="146" width="80" height="28" rx="14"/><rect x="345" y="146" width="80" height="28" rx="14"/></g>
<g text-anchor="middle" class="tb f3" font-size="14"><text x="190" y="165">ปรับ w</text><text x="385" y="165">ปรับ w</text></g></g>
<g data-s="5"><path d="M600 212V256H736" class="ln" stroke-width="1.5"/><path d="M606 216Q630 252 732 252" class="s3 nofill" stroke-width="2.5"/>
<text x="668" y="210" text-anchor="middle" class="tb f3" font-size="14">loss ลดทุก epoch</text></g>
<g class="bgp ln" stroke-width="1.5"><rect x="12" y="332" width="140" height="40" rx="20"/><rect x="161" y="332" width="140" height="40" rx="20"/><rect x="310" y="332" width="140" height="40" rx="20"/><rect x="459" y="332" width="140" height="40" rx="20"/><rect x="608" y="332" width="140" height="40" rx="20"/></g>
<g class="s5 nofill" stroke-width="3"><rect data-only="1" x="12" y="332" width="140" height="40" rx="20"/><rect data-only="2" x="161" y="332" width="140" height="40" rx="20"/><rect data-only="3" x="310" y="332" width="140" height="40" rx="20"/><rect data-only="4" x="459" y="332" width="140" height="40" rx="20"/><rect data-only="5" x="608" y="332" width="140" height="40" rx="20"/></g>
<g text-anchor="middle" class="tb" font-size="14"><text x="82" y="357">① Forward</text><text x="231" y="357">② คิด Loss</text><text x="380" y="357">③ Backward</text><text x="529" y="357">④ Update</text><text x="678" y="357">⑤ ทำซ้ำ</text></g>
</svg><ol class="caps">
<li>① Forward pass: ส่ง x ผ่านทุกชั้นไปข้างหน้า (เส้นน้ำเงิน) จนได้คำทำนาย ŷ</li>
<li>② เทียบกับเฉลย y แล้วคิด loss เช่น ½(y − ŷ)² — ตัวเลขเดียวที่บอกว่าผิดแค่ไหน</li>
<li>③ Backward pass: ไล่ย้อนจาก loss ทีละชั้น (เส้นส้ม) ใช้ chain rule หาว่า w แต่ละเส้นมีส่วนทำให้ผิดเท่าไร = ∂L/∂w — เหมือนสืบย้อนว่าใครทำพลาดแค่ไหน</li>
<li>④ Update: ปรับทุก w สวนทางความชัน w ← w − η·∂L/∂w — สูตรเดียวกับ Adaline ทุกประการ</li>
<li>⑤ วนซ้ำหลาย epoch จน loss ไม่ลดลงอีก · backprop = วิธี “คำนวณความชัน” ไม่ใช่อัลกอริทึมเรียนรู้ใหม่ (การเรียนรู้ยังเป็น gradient descent)</li>
</ol></div>`,
  caption: 'จำเป็นลำดับ: Forward ได้คำตอบ → Loss วัดความผิด → Backward กระจายความรับผิดชอบ → Update ปรับน้ำหนัก · เฟรมเวิร์กทำขั้น ③ ให้อัตโนมัติ (autograd) แต่เราต้องรู้ว่ามันทำอะไร'
},
{
  id: 'bp-chain', section: 'backprop', kind: 'ทีละขั้น', title: 'Chain rule ทีละห่วง: neuron sigmoid 1 ตัว',
  html: `<div class="stepper"><svg viewBox="0 0 760 350" font-size="15" role="img" aria-label="chain rule ทีละห่วง">
<defs>
<marker id="L08-bc-ar1" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M0 0L10 5L0 10z" class="f1"/></marker>
<marker id="L08-bc-ar2" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M0 0L10 5L0 10z" class="f2"/></marker>
</defs>
<text x="380" y="30" text-anchor="middle" class="tb" font-size="16">ตัวอย่าง: x = 2, w = 0.5, b = 0, y = 1 (η = 1)</text>
<text x="20" y="72" class="tb f1" font-size="14">Forward →</text>
<rect x="20" y="120" width="120" height="60" rx="12" class="f2l s2" stroke-width="2"/><text x="80" y="157" text-anchor="middle" class="tb" font-size="18">w</text>
<rect x="210" y="120" width="140" height="60" rx="12" class="f4l s4" stroke-width="2"/><text x="280" y="147" text-anchor="middle" class="tb">z</text><text x="280" y="169" text-anchor="middle" font-size="14">= w·x + b</text>
<rect x="420" y="120" width="140" height="60" rx="12" class="f6l s6" stroke-width="2"/><text x="490" y="147" text-anchor="middle" class="tb">a</text><text x="490" y="169" text-anchor="middle" font-size="14">= σ(z)</text>
<rect x="630" y="120" width="118" height="60" rx="12" class="f5l s5" stroke-width="2"/><text x="689" y="147" text-anchor="middle" class="tb">L</text><text x="689" y="169" text-anchor="middle" font-size="14">= ½(y − a)²</text>
<path d="M140 134H206M350 134H416M560 134H626" class="s1" stroke-width="2.5"/>
<path d="M196 134H206" class="s1" stroke-width="2.5" marker-end="url(#L08-bc-ar1)"/><path d="M406 134H416" class="s1" stroke-width="2.5" marker-end="url(#L08-bc-ar1)"/><path d="M616 134H626" class="s1" stroke-width="2.5" marker-end="url(#L08-bc-ar1)"/>
<g text-anchor="middle" class="tb f1" font-size="15"><text x="80" y="106">0.5</text><text x="280" y="106">z = 0.5·2 + 0 = 1</text><text x="490" y="106">a = σ(1) = 0.731</text><text x="689" y="106">L = 0.036</text></g>
<g data-only="1"><rect x="20" y="200" width="728" height="70" rx="12" class="nofill ln" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="384" y="241" text-anchor="middle" class="tm" font-size="14">ขั้นต่อไป: ไล่ย้อนจาก L กลับมาหา w ทีละห่วง แล้วคูณกัน ←</text></g>
<g data-s="2"><text x="20" y="214" class="tb f2" font-size="14">← Backward</text>
<path d="M626 166H564" class="s2" stroke-width="2.5" marker-end="url(#L08-bc-ar2)"/>
<text x="595" y="214" text-anchor="middle" class="tb f2">∂L/∂a = −0.269</text><text x="595" y="238" text-anchor="middle" class="tm" font-size="14">= −(1 − 0.731)</text></g>
<g data-s="3"><path d="M416 166H354" class="s2" stroke-width="2.5" marker-end="url(#L08-bc-ar2)"/>
<text x="385" y="214" text-anchor="middle" class="tb f2">∂a/∂z = 0.197</text><text x="385" y="238" text-anchor="middle" class="tm" font-size="14">= a(1 − a)</text></g>
<g data-s="4"><path d="M206 166H144" class="s2" stroke-width="2.5" marker-end="url(#L08-bc-ar2)"/>
<text x="178" y="214" text-anchor="middle" class="tb f2">∂z/∂w = x = 2</text></g>
<g data-s="5"><rect x="20" y="256" width="728" height="84" rx="12" class="f7l s7" stroke-width="2"/>
<text x="384" y="290" text-anchor="middle" class="tb" font-size="17">∂L/∂w = (−0.269) × (0.197) × (2) = −0.106</text>
<text x="384" y="322" text-anchor="middle">w ใหม่ = 0.5 − 1 × (−0.106) = 0.606 → a ใหม่ = 0.771 (ใกล้ 1 ขึ้น ✔)</text></g>
</svg><ol class="caps">
<li>Forward ก่อน: z = 0.5×2 + 0 = 1 → a = σ(1) = 0.731 → loss L = ½(1 − 0.731)² = 0.036 · คำถาม: ควรขยับ w ไปทางไหน?</li>
<li>ห่วงที่ 1 (ใกล้ loss สุด): ∂L/∂a = −(y − a) = −(1 − 0.731) = −0.269 → ติดลบ แปลว่าเพิ่ม a แล้ว loss จะลด</li>
<li>ห่วงที่ 2: sigmoid มีอนุพันธ์ ∂a/∂z = a(1 − a) = 0.731 × 0.269 = 0.197</li>
<li>ห่วงที่ 3: z = w·x + b → ∂z/∂w = x = 2</li>
<li>chain rule = คูณทุกห่วงต่อกัน: ∂L/∂w = −0.269 × 0.197 × 2 = −0.106 → w ← 0.5 − 1×(−0.106) = 0.606 → a ใหม่ = 0.771 ใกล้ 1 ขึ้น ✔</li>
</ol></div>`,
  caption: 'Backprop ในโครงข่ายใหญ่ก็คือการคูณ “ห่วง” แบบนี้ย้อนกลับทีละชั้น: ∂L/∂wᵢⱼ = ∂L/∂aⱼ · ∂aⱼ/∂zⱼ · ∂zⱼ/∂wᵢⱼ = δⱼ · aᵢ (สไลด์ 31) · step function ใช้ไม่ได้เพราะอนุพันธ์เป็น 0 เกือบทุกจุด'
},

/* ================= 11) deep ================= */
{
  id: 'deep-features', section: 'deep', kind: 'ภาพนิ่ง', title: 'ลึกขึ้น = ประกอบลายง่าย ๆ เป็นของซับซ้อน',
  html: `<svg viewBox="0 0 760 360" font-size="15" role="img" aria-label="สิ่งที่แต่ละชั้นเรียนรู้">
<defs><marker id="L08-df-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<text x="380" y="30" text-anchor="middle" class="tb">ยิ่งลึก ยิ่งเห็นภาพใหญ่ →</text>
<g class="f1l grid" stroke-width="1.5">
<rect x="21" y="66" width="18" height="18"/><rect x="39" y="66" width="18" height="18"/><rect x="57" y="66" width="18" height="18"/><rect x="75" y="66" width="18" height="18"/><rect x="93" y="66" width="18" height="18"/><rect x="111" y="66" width="18" height="18"/>
<rect x="21" y="84" width="18" height="18"/><rect x="57" y="84" width="18" height="18"/><rect x="75" y="84" width="18" height="18"/><rect x="111" y="84" width="18" height="18"/>
<rect x="21" y="102" width="18" height="18"/><rect x="39" y="102" width="18" height="18"/><rect x="93" y="102" width="18" height="18"/><rect x="111" y="102" width="18" height="18"/>
<rect x="21" y="120" width="18" height="18"/><rect x="39" y="120" width="18" height="18"/><rect x="57" y="120" width="18" height="18"/><rect x="75" y="120" width="18" height="18"/><rect x="93" y="120" width="18" height="18"/><rect x="111" y="120" width="18" height="18"/>
<rect x="21" y="138" width="18" height="18"/><rect x="57" y="138" width="18" height="18"/><rect x="75" y="138" width="18" height="18"/><rect x="111" y="138" width="18" height="18"/>
<rect x="21" y="156" width="18" height="18"/><rect x="39" y="156" width="18" height="18"/><rect x="93" y="156" width="18" height="18"/><rect x="111" y="156" width="18" height="18"/>
</g>
<g class="f1 grid" stroke-width="1.5">
<rect x="39" y="84" width="18" height="18"/><rect x="93" y="84" width="18" height="18"/>
<rect x="57" y="102" width="18" height="18"/><rect x="75" y="102" width="18" height="18"/>
<rect x="39" y="138" width="18" height="18"/><rect x="93" y="138" width="18" height="18"/>
<rect x="57" y="156" width="18" height="18"/><rect x="75" y="156" width="18" height="18"/>
</g>
<g class="bgp ln" stroke-width="1.5"><rect x="190" y="70" width="46" height="46" rx="6"/><rect x="246" y="70" width="46" height="46" rx="6"/><rect x="302" y="70" width="46" height="46" rx="6"/><rect x="190" y="126" width="46" height="46" rx="6"/><rect x="246" y="126" width="46" height="46" rx="6"/><rect x="302" y="126" width="46" height="46" rx="6"/></g>
<path d="M198 93H228M269 78V108M310 108L340 78M200 136V164H228M254 162Q269 128 284 162" class="s4 nofill" stroke-width="3" stroke-linecap="round"/>
<circle cx="325" cy="149" r="11" class="s4 nofill" stroke-width="3"/>
<g class="bgp ln" stroke-width="1.5"><rect x="390" y="70" width="76" height="46" rx="6"/><rect x="474" y="70" width="76" height="46" rx="6"/><rect x="390" y="126" width="76" height="46" rx="6"/><rect x="474" y="126" width="76" height="46" rx="6"/></g>
<ellipse cx="428" cy="93" rx="22" ry="12" class="s2 nofill" stroke-width="3"/><circle cx="428" cy="93" r="6" class="f2"/>
<path d="M514 78L502 106H522" class="s2 nofill" stroke-width="3" stroke-linejoin="round"/>
<path d="M406 140Q428 166 450 140" class="s2 nofill" stroke-width="3" stroke-linecap="round"/>
<path d="M500 136Q536 149 500 162" class="s2 nofill" stroke-width="3" stroke-linecap="round"/>
<circle cx="665" cy="120" r="56" class="f7l s7" stroke-width="2.5"/>
<g class="f1"><circle cx="645" cy="106" r="7"/><circle cx="685" cy="106" r="7"/></g>
<path d="M665 112L658 132H672" class="s2 nofill" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M640 146Q665 166 690 146" class="s2 nofill" stroke-width="3" stroke-linecap="round"/>
<g class="ln" stroke-width="2.5"><path d="M136 120H180" marker-end="url(#L08-df-ar)"/><path d="M354 120H382" marker-end="url(#L08-df-ar)"/><path d="M556 120H602" marker-end="url(#L08-df-ar)"/></g>
<g text-anchor="middle"><text x="75" y="206" class="tb">ภาพดิบ</text><text x="75" y="228" font-size="14">ตัวเลข pixel</text>
<text x="269" y="206" class="tb">ชั้นแรก</text><text x="269" y="228" font-size="14">ขอบ · เส้น · มุม</text>
<text x="470" y="206" class="tb">ชั้นกลาง</text><text x="470" y="228" font-size="14">ชิ้นส่วน: ตา จมูก ปาก</text>
<text x="665" y="206" class="tb">ชั้นลึก</text><text x="665" y="228" font-size="14">วัตถุทั้งชิ้น: ใบหน้า</text></g>
<rect x="12" y="256" width="736" height="44" rx="12" class="f3l s3" stroke-width="1.5"/><text x="28" y="284" font-size="15"><tspan class="tb f3">✔ ได้:</tspan> เรียน feature เองจากข้อมูลดิบ (ML แบบเดิมต้องให้คนออกแบบ feature)</text>
<rect x="12" y="308" width="736" height="44" rx="12" class="f5l s5" stroke-width="1.5"/><text x="28" y="336" font-size="15"><tspan class="tb f5">✘ ต้องแลก:</tspan> ข้อมูลจำนวนมาก · คำนวณแพง (GPU) · อธิบายผลได้ยากขึ้นมาก</text>
</svg>`,
  caption: 'ชั้นต้นเห็นลายง่าย ๆ (ขอบ มุม) ชั้นถัดไปเอามาประกอบเป็นชิ้นส่วน ชั้นลึกจึงจำวัตถุทั้งชิ้นได้ (สไลด์ 32) · ภาพนี้เป็นภาพจำลองเพื่อเข้าใจ'
},
{
  id: 'when-not', section: 'deep', kind: 'ภาพนิ่ง', title: 'ใช้ Deep Learning ดีไหม? ดูชนิดข้อมูลก่อน',
  html: `<svg viewBox="0 0 760 360" font-size="15" role="img" aria-label="เมื่อไรควรหรือไม่ควรใช้ deep learning">
<defs><marker id="L08-wn-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<rect x="230" y="12" width="300" height="46" rx="23" class="f4l s4" stroke-width="2"/><text x="380" y="41" text-anchor="middle" class="tb" font-size="16">ข้อมูลของคุณเป็นแบบไหน?</text>
<g class="ln" stroke-width="2"><path d="M300 58L140 96" marker-end="url(#L08-wn-ar)"/><path d="M380 58V96" marker-end="url(#L08-wn-ar)"/><path d="M460 58L620 96" marker-end="url(#L08-wn-ar)"/></g>
<rect x="12" y="100" width="236" height="150" rx="14" class="f1l s1" stroke-width="2"/><rect x="262" y="100" width="236" height="150" rx="14" class="f7l s7" stroke-width="2"/><rect x="512" y="100" width="236" height="150" rx="14" class="f3l s3" stroke-width="2"/>
<rect x="100" y="112" width="60" height="40" rx="4" class="bgp s1" stroke-width="2"/><path d="M100 125H160M100 139H160M120 112V152M140 112V152" class="s1" stroke-width="1.5"/>
<path d="M380 116V150M368 151H392M350 122H410M356 122V134M404 122V134" class="s7 nofill" stroke-width="2.5" stroke-linecap="round"/><path d="M344 134Q356 146 368 134M392 134Q404 146 416 134" class="s7 nofill" stroke-width="2.5"/>
<rect x="586" y="114" width="40" height="32" rx="4" class="bgp s3" stroke-width="2"/><path d="M590 142L602 128L612 138L618 132L624 142" class="s3 nofill" stroke-width="2"/><circle cx="617" cy="121" r="3" class="f3"/>
<path d="M634 130Q640 116 646 130T658 130T670 130" class="s3 nofill" stroke-width="2.5"/>
<g text-anchor="middle">
<text x="130" y="178" class="tb">ตาราง ไม่กี่พันแถว</text><text x="130" y="202" font-size="14" class="tb f1">→ Gradient Boosting</text><text x="130" y="226" font-size="14" class="tm">มักชนะ DL ชัดเจน</text>
<text x="380" y="178" class="tb">ต้องอธิบายตามกฎระเบียบ</text><text x="380" y="202" font-size="14" class="tb">→ โมเดลเชิงเส้น / กฎ</text><text x="380" y="226" font-size="14" class="tm">อธิบายได้ว่าทำไม</text>
<text x="630" y="178" class="tb">ภาพ เสียง ข้อความ วิดีโอ</text><text x="630" y="202" font-size="14" class="tb f3">→ Deep Learning ✔</text><text x="630" y="226" font-size="14" class="tm">ข้อมูลไม่มีโครงสร้าง</text>
</g>
<rect x="12" y="264" width="736" height="86" rx="14" class="bgp ln" stroke-width="1.5"/>
<text x="28" y="294" class="tb">หลักฐานจาก Lab 07</text><text x="28" y="318" font-size="14">MLP ได้ AUC ต่ำที่สุด</text><text x="28" y="340" class="tm" font-size="14">(AUC ยิ่งใกล้ 1 ยิ่งดี)</text>
<rect x="300" y="290" width="400" height="22" rx="4" class="grid nofill" stroke-width="1.5"/>
<rect x="300" y="290" width="224.8" height="22" rx="4" class="f5"/>
<text x="532" y="307" class="tb f5" font-size="15">0.781</text>
<g text-anchor="middle" font-size="12" class="tm"><text x="300" y="330">0.5</text><text x="500" y="330">0.75</text><text x="700" y="330">1.0</text></g>
</svg>`,
  caption: 'Deep Learning ไม่ได้ดีกว่าเสมอ (สไลด์ 32) — ข้อมูลตารางไม่กี่พันแถว boosting มักชนะ · ต้องอธิบายเหตุผลได้ → โมเดลเชิงเส้น/กฎ · DL เปล่งพลังกับภาพ เสียง ข้อความ วิดีโอ'
},

/* ================= 12) lab ================= */
{
  id: 'lab-map', section: 'lab', kind: 'ภาพนิ่ง', title: 'Lab 08 ใน 5 ด่าน + กับดัก data leakage',
  html: `<svg viewBox="0 0 760 420" font-size="15" role="img" aria-label="แผน Lab 08 และ data leakage">
<defs><marker id="L08-lm-ar" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--vline)"/></marker></defs>
<g stroke-width="2"><rect x="12" y="14" width="130" height="154" rx="14" class="f1l s1"/><rect x="163" y="14" width="130" height="154" rx="14" class="f1l s1"/><rect x="314" y="14" width="130" height="154" rx="14" class="f3l s3"/><rect x="465" y="14" width="130" height="154" rx="14" class="f3l s3"/><rect x="616" y="14" width="130" height="154" rx="14" class="f3l s3"/></g>
<g class="ln" stroke-width="2"><path d="M144 92H159" marker-end="url(#L08-lm-ar)"/><path d="M295 92H310" marker-end="url(#L08-lm-ar)"/><path d="M446 92H461" marker-end="url(#L08-lm-ar)"/><path d="M597 92H612" marker-end="url(#L08-lm-ar)"/></g>
<g text-anchor="middle">
<text x="77" y="42" class="tb">① Perceptron</text><text x="77" y="64" class="tm" font-size="14">Iris</text>
<text x="77" y="94" font-size="14">เขียน fit เอง</text><text x="77" y="116" font-size="14">error → 0</text><text x="77" y="138" font-size="14" class="tb">ที่ epoch 6</text>
<text x="228" y="42" class="tb">② Adaline+GD</text><text x="228" y="64" class="tm" font-size="14">Iris</text>
<text x="228" y="94" font-size="14">cost = SSE</text><text x="228" y="116" font-size="14">เทียบ η สูง/ต่ำ</text><text x="228" y="138" font-size="14" class="tb">+ standardize</text>
<text x="379" y="42" class="tb">③ Pipeline</text><text x="379" y="64" class="tm" font-size="14">PIMA 8 features</text>
<text x="379" y="94" font-size="14">0 → NaN</text><text x="379" y="116" font-size="14">→ impute</text><text x="379" y="138" font-size="14">→ scale</text>
<text x="530" y="42" class="tb">④ เทียบโมเดล</text><text x="530" y="64" class="tm" font-size="14">PIMA</text>
<text x="530" y="94" font-size="14">6 โมเดล</text><text x="530" y="116" font-size="14">ROC / AUC</text><text x="530" y="138" font-size="14">บนแกนเดียวกัน</text>
<text x="681" y="42" class="tb">⑤ Tuning</text><text x="681" y="64" class="tm" font-size="14">PIMA</text>
<text x="681" y="94" font-size="14">GridSearchCV</text><text x="681" y="116" font-size="14">เลือก</text><text x="681" y="138" font-size="14">hyperparameter</text>
</g>
<text x="16" y="208" class="tb" font-size="16">กับดักในด่าน ③: data leakage = ข้อมูลชุดทดสอบรั่วเข้าไปตอนฝึก</text>
<rect x="12" y="222" width="736" height="84" rx="14" class="f5l"/><rect x="12" y="318" width="736" height="84" rx="14" class="f3l"/>
<text x="28" y="270" class="tb f5" font-size="18">✘ ผิด</text><text x="28" y="366" class="tb f3" font-size="18">✔ ถูก</text>
<g class="bgp s5" stroke-width="2"><rect x="96" y="241" width="130" height="46" rx="10"/><rect x="252" y="241" width="150" height="46" rx="10"/><rect x="426" y="241" width="140" height="46" rx="10"/><rect x="592" y="241" width="152" height="46" rx="10"/></g>
<g class="bgp s3" stroke-width="2"><rect x="96" y="337" width="130" height="46" rx="10"/><rect x="252" y="337" width="150" height="46" rx="10"/><rect x="426" y="337" width="140" height="46" rx="10"/><rect x="592" y="337" width="152" height="46" rx="10"/></g>
<g class="ln" stroke-width="2"><path d="M226 264H248" marker-end="url(#L08-lm-ar)"/><path d="M402 264H422" marker-end="url(#L08-lm-ar)"/><path d="M566 264H588" marker-end="url(#L08-lm-ar)"/>
<path d="M226 360H248" marker-end="url(#L08-lm-ar)"/><path d="M402 360H422" marker-end="url(#L08-lm-ar)"/><path d="M566 360H588" marker-end="url(#L08-lm-ar)"/></g>
<g text-anchor="middle" font-size="14">
<text x="161" y="269">ข้อมูลทั้งหมด</text><text x="327" y="259" class="tb">fit scaler</text><text x="327" y="279" class="f5" font-size="14">(เห็น test ด้วย!)</text><text x="496" y="269">แล้วค่อยแบ่ง train/test</text><text x="668" y="269" class="tb f5">คะแนนสวยเกินจริง</text>
<text x="161" y="365">แบ่ง train/test ก่อน</text><text x="327" y="355" class="tb">Pipeline.fit(train)</text><text x="327" y="375" font-size="14">impute + scale + model</text><text x="496" y="365">นำไปใช้กับ test</text><text x="668" y="365" class="tb f3">คะแนนจริง</text>
</g>
</svg>`,
  caption: 'Lab 08 = เขียน Perceptron/Adaline เองให้เห็นทุกบรรทัด แล้วต่อ pipeline บนข้อมูลจริง · ใส่ imputer/scaler ใน Pipeline ที่ fit กับ train เท่านั้น · Hyperparameter (η, epoch, ขนาดชั้น) = ค่าที่เราตั้ง ต่างจาก parameter (w, b) ที่โมเดลเรียนเอง'
}
]);
