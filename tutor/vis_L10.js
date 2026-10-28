/* Lecture 10 · Reinforcement Learning — illustrated teaching media (visual cards)
   Cards for section 1 (id 'intro') are registered with section:'intro' (lesson top) and then moved
   into section "1) RL คืออะไร" by their init(), because the shell reserves section:'intro' for the lesson top. */
TUTOR.addVisuals('L10', [

/* ======================= 1. บทนี้ใน 1 ภาพ ======================= */
{
  id: 'overview', section: 'intro', pos: 'top', kind: 'ภาพนิ่ง',
  title: 'บทนี้ใน 1 ภาพ: ลองทำ → ได้รางวัล → ปรับวิธีเล่น',
  html: `<svg viewBox="0 0 760 450" role="img" aria-label="ภาพรวม Reinforcement Learning">
<defs>
<marker id="L10-ov-a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c1)"/></marker>
<marker id="L10-ov-a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c2)"/></marker>
<marker id="L10-ov-a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c3)"/></marker>
<marker id="L10-ov-a0" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--vline)"/></marker>
</defs>
<text x="380" y="28" text-anchor="middle" font-size="19" class="tb">RL = เรียนจาก “รางวัล” ไม่ใช่จาก “เฉลย”</text>
<circle cx="110" cy="150" r="52" class="f1l s1" stroke-width="2.5"/>
<text x="110" y="164" text-anchor="middle" font-size="40">🤖</text>
<text x="110" y="228" text-anchor="middle" font-size="15" class="tb">Agent (ผู้เรียน)</text>
<path d="M61,191 A64,64 0 0 1 61,109" class="nofill s1" stroke-width="3" marker-end="url(#L10-ov-a1)"/>
<text x="30" y="156" text-anchor="middle" font-size="18" class="tb" style="fill:var(--c1)">③</text>
<rect x="300" y="95" width="170" height="110" rx="14" class="f6l s6" stroke-width="2.5"/>
<line x1="318" y1="183" x2="452" y2="183" class="ln" stroke-width="3"/>
<rect x="362" y="163" width="46" height="20" rx="5" class="f1"/>
<rect x="382" y="113" width="6" height="50" rx="3" class="f2" transform="rotate(8 385 163)"/>
<text x="385" y="228" text-anchor="middle" font-size="15" class="tb">Environment (สิ่งแวดล้อม)</text>
<path d="M150,112 Q225,40 318,92" class="nofill s2" stroke-width="3" marker-end="url(#L10-ov-a2)"/>
<text x="232" y="56" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c2)">① ลองทำ (action)</text>
<path d="M300,180 Q225,262 154,184" class="nofill s3" stroke-width="3" marker-end="url(#L10-ov-a3)"/>
<text x="226" y="256" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c3)">② ได้รางวัล (reward) + state ใหม่</text>
<text x="226" y="284" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c1)">③ ปรับนโยบาย (policy) → รอบหน้าทำดีขึ้น</text>
<rect x="500" y="45" width="250" height="250" rx="14" class="f7l"/>
<text x="625" y="74" text-anchor="middle" font-size="16" class="tb">เปรียบเหมือนฝึกหมาด้วยขนม</text>
<text x="535" y="124" text-anchor="middle" font-size="28">🐕</text><text x="565" y="120" font-size="15">ลองนั่ง (action)</text>
<line x1="535" y1="134" x2="535" y2="150" class="ln" stroke-width="2" marker-end="url(#L10-ov-a0)"/>
<text x="535" y="184" text-anchor="middle" font-size="28">🦴</text><text x="565" y="180" font-size="15">ได้ขนม (reward)</text>
<line x1="535" y1="194" x2="535" y2="210" class="ln" stroke-width="2" marker-end="url(#L10-ov-a0)"/>
<text x="535" y="244" text-anchor="middle" font-size="28">📈</text><text x="565" y="240" font-size="15">ทำบ่อยขึ้น (policy)</text>
<text x="625" y="280" text-anchor="middle" font-size="15" class="tb">Cart-Pole: ไม่ล้ม = +1</text>
<text x="380" y="320" text-anchor="middle" font-size="15" class="tb">เส้นทางของบท — โจทย์เดียวตลอดบท: Cart-Pole</text>
<rect x="14" y="334" width="112" height="106" rx="12" class="f1l s1" stroke-width="1.5"/>
<rect x="138" y="334" width="112" height="106" rx="12" class="f6l s6" stroke-width="1.5"/>
<rect x="262" y="334" width="112" height="106" rx="12" class="f2l s2" stroke-width="1.5"/>
<rect x="386" y="334" width="112" height="106" rx="12" class="f3l s3" stroke-width="1.5"/>
<rect x="510" y="334" width="112" height="106" rx="12" class="f4l s4" stroke-width="1.5"/>
<rect x="634" y="334" width="112" height="106" rx="12" class="f5l s5" stroke-width="1.5"/>
<circle cx="70" cy="334" r="13" class="f1"/><text x="70" y="339" text-anchor="middle" font-size="14" class="tw tb">1</text>
<circle cx="194" cy="334" r="13" class="f6"/><text x="194" y="339" text-anchor="middle" font-size="14" class="tw tb">2</text>
<circle cx="318" cy="334" r="13" class="f2"/><text x="318" y="339" text-anchor="middle" font-size="14" class="tw tb">3</text>
<circle cx="442" cy="334" r="13" class="f3"/><text x="442" y="339" text-anchor="middle" font-size="14" class="tw tb">4</text>
<circle cx="566" cy="334" r="13" class="f4"/><text x="566" y="339" text-anchor="middle" font-size="14" class="tw tb">5</text>
<circle cx="690" cy="334" r="13" class="f5"/><text x="690" y="339" text-anchor="middle" font-size="14" class="tw tb">6</text>
<g font-size="15" class="tb" text-anchor="middle">
<text x="70" y="370">MDP</text><text x="194" y="370">Return</text><text x="318" y="370">Policy</text>
<text x="442" y="370">Q-learning</text><text x="566" y="370">DQN</text><text x="690" y="370">Reward</text></g>
<g font-size="14" class="tm" text-anchor="middle">
<text x="70" y="395">เขียนโจทย์</text><text x="70" y="416">เป็นสมการ</text>
<text x="194" y="395">รวมรางวัล</text><text x="194" y="416">ในอนาคต</text>
<text x="318" y="395">ปรับ w ตรง ๆ</text><text x="318" y="416">ลองผิดลองถูก</text>
<text x="442" y="395">ตารางคะแนน</text><text x="442" y="416">ของ action</text>
<text x="566" y="395">ตารางใหญ่ไป</text><text x="566" y="416">ใช้ NN แทน</text>
<text x="690" y="395">บอกงาน</text><text x="690" y="416">ให้ถูก</text></g>
<g class="ln" stroke-width="2">
<line x1="126" y1="387" x2="137" y2="387" marker-end="url(#L10-ov-a0)"/><line x1="250" y1="387" x2="261" y2="387" marker-end="url(#L10-ov-a0)"/>
<line x1="374" y1="387" x2="385" y2="387" marker-end="url(#L10-ov-a0)"/><line x1="498" y1="387" x2="509" y2="387" marker-end="url(#L10-ov-a0)"/>
<line x1="622" y1="387" x2="633" y2="387" marker-end="url(#L10-ov-a0)"/></g>
</svg>`,
  caption: 'ทั้งบทเล่าเรื่องเดียว: agent “ลองทำ” ในโลก ได้คะแนน (รางวัล) กลับมา แล้วค่อย ๆ ปรับวิธีเล่น — ไม่มีใครเฉลยว่าก้าวไหนถูก เหมือนฝึกหมาด้วยขนม'
},

/* ======================= 2. ศัพท์ที่ต้องรู้ ======================= */
{
  id: 'glossary', section: 'intro', pos: 'top', kind: 'ภาพนิ่ง',
  title: 'ศัพท์ที่ต้องรู้ก่อนเริ่ม (10 คำ)',
  html: `<svg viewBox="0 0 760 414" role="img" aria-label="ศัพท์ RL 10 คำ">
<rect x="10" y="12" width="360" height="70" rx="12" class="f1l"/><circle cx="46" cy="47" r="24" class="bgp s1" stroke-width="2"/><text x="46" y="56" text-anchor="middle" font-size="24">🤖</text>
<text x="82" y="41" font-size="16" class="tb">Agent · ผู้ตัดสินใจ</text><text x="82" y="65" font-size="14">ตัวที่เลือกว่าจะทำอะไร เช่น รถเข็น</text>
<rect x="390" y="12" width="360" height="70" rx="12" class="f6l"/><circle cx="426" cy="47" r="24" class="bgp s6" stroke-width="2"/><text x="426" y="56" text-anchor="middle" font-size="24">🌍</text>
<text x="462" y="41" font-size="16" class="tb">Environment · สิ่งแวดล้อม</text><text x="462" y="65" font-size="14">โลกที่ตอบกลับ: ราง + คาน + ฟิสิกส์</text>
<rect x="10" y="92" width="360" height="70" rx="12" class="f4l"/><circle cx="46" cy="127" r="24" class="bgp s4" stroke-width="2"/><text x="46" y="136" text-anchor="middle" font-size="24">📷</text>
<text x="82" y="121" font-size="16" class="tb">State s · สถานะ</text><text x="82" y="145" font-size="14">สถานการณ์ตอนนี้ (x, ẋ, θ, <tspan font-family="Cambria,serif">θ̇</tspan>)</text>
<rect x="390" y="92" width="360" height="70" rx="12" class="f2l"/><circle cx="426" cy="127" r="24" class="bgp s2" stroke-width="2"/><text x="426" y="136" text-anchor="middle" font-size="24">🕹️</text>
<text x="462" y="121" font-size="16" class="tb">Action a · การกระทำ</text><text x="462" y="145" font-size="14">สิ่งที่เลือกทำ: ดันซ้าย หรือ ดันขวา</text>
<rect x="10" y="172" width="360" height="70" rx="12" class="f7l"/><circle cx="46" cy="207" r="24" class="bgp s7" stroke-width="2"/><text x="46" y="216" text-anchor="middle" font-size="24">⭐</text>
<text x="82" y="201" font-size="16" class="tb">Reward r · รางวัล</text><text x="82" y="225" font-size="14">คะแนนทันที: +1 ทุกก้าวที่ยังไม่ล้ม</text>
<rect x="390" y="172" width="360" height="70" rx="12" class="f3l"/><circle cx="426" cy="207" r="24" class="bgp s3" stroke-width="2"/><text x="426" y="216" text-anchor="middle" font-size="24">📘</text>
<text x="462" y="201" font-size="16" class="tb">Policy π · นโยบาย</text><text x="462" y="225" font-size="14">กฎ “เห็น state นี้ → ทำ action นั้น”</text>
<rect x="10" y="252" width="360" height="70" rx="12" class="f4l"/><circle cx="46" cy="287" r="24" class="bgp s4" stroke-width="2"/><text x="46" y="296" text-anchor="middle" font-size="24">🎬</text>
<text x="82" y="281" font-size="16" class="tb">Episode · ตอน</text><text x="82" y="305" font-size="14">เล่น 1 รอบ: เริ่ม → ล้ม หรือครบ 500 ก้าว</text>
<rect x="390" y="252" width="360" height="70" rx="12" class="f7l"/><circle cx="426" cy="287" r="24" class="bgp s7" stroke-width="2"/><text x="426" y="296" text-anchor="middle" font-size="24">💰</text>
<text x="462" y="281" font-size="16" class="tb">Return G · ผลตอบแทนสะสม</text><text x="462" y="305" font-size="14">รางวัลรวมจากนี้ไป (ยิ่งไกลยิ่งลดค่า)</text>
<rect x="10" y="332" width="360" height="70" rx="12" class="f6l"/><circle cx="46" cy="367" r="24" class="bgp s6" stroke-width="2"/><text x="46" y="376" text-anchor="middle" font-size="24">⏳</text>
<text x="82" y="361" font-size="16" class="tb">γ (gamma) · ตัวลดทอน</text><text x="82" y="385" font-size="14">อนาคตมีค่าน้อยลง เช่น ×0.99 ต่อก้าว</text>
<rect x="390" y="332" width="360" height="70" rx="12" class="f1l"/><circle cx="426" cy="367" r="24" class="bgp s1" stroke-width="2"/><text x="426" y="376" text-anchor="middle" font-size="24">📋</text>
<text x="462" y="361" font-size="16" class="tb">Q(s, a) · ค่า Q</text><text x="462" y="385" font-size="14">ทำ a ที่ s แล้วคาดว่าได้ Return เท่าไร</text>
</svg>`,
  caption: 'อ่านจากซ้ายไปขวาทีละแถว: ใคร (agent) อยู่ที่ไหน (environment) เห็นอะไร (state) ทำอะไร (action) ได้อะไร (reward) — ที่เหลือคือวิธีวัดและปรับให้เก่งขึ้น'
},

/* ======================= Section 1: RL คืออะไร (moved into #sec-intro) ======================= */
{
  id: 'compare3', section: 'intro', pos: 'top', kind: 'ภาพนิ่ง',
  title: 'เรียน 3 แบบ: มีเฉลย · ไม่มีเฉลย · มีแต่รางวัล',
  html: `<svg viewBox="0 0 760 362" role="img" aria-label="เปรียบเทียบ supervised unsupervised reinforcement">
<defs><marker id="L10-c3-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--vline)"/></marker></defs>
<rect x="10" y="10" width="234" height="290" rx="14" class="f1l"/>
<rect x="10" y="10" width="234" height="46" rx="14" class="f1"/><rect x="10" y="40" width="234" height="16" class="f1"/>
<text x="127" y="40" text-anchor="middle" font-size="17" class="tw tb">Supervised</text>
<text x="127" y="82" text-anchor="middle" font-size="16" class="tb" style="fill:var(--c1)">มีเฉลยทุกข้อ</text>
<rect x="34" y="100" width="76" height="76" rx="10" class="bgp s1" stroke-width="2"/>
<text x="72" y="152" text-anchor="middle" font-size="40">🐱</text>
<line x1="116" y1="140" x2="146" y2="140" class="ln" stroke-width="2" marker-end="url(#L10-c3-a)"/>
<text x="190" y="116" text-anchor="middle" font-size="14" class="tm">เฉลย</text>
<rect x="152" y="122" width="78" height="36" rx="8" class="f1"/><text x="191" y="146" text-anchor="middle" font-size="15" class="tw tb">แมว ✓</text>
<text x="127" y="204" text-anchor="middle" font-size="14">ครูบอกคำตอบที่ถูก</text>
<text x="26" y="240" font-size="14">• รู้ทันทีว่าถูก/ผิด</text><text x="26" y="266" font-size="14">• งาน: ทำนาย, จำแนก</text>
<rect x="263" y="10" width="234" height="290" rx="14" class="f4l"/>
<rect x="263" y="10" width="234" height="46" rx="14" class="f4"/><rect x="263" y="40" width="234" height="16" class="f4"/>
<text x="380" y="40" text-anchor="middle" font-size="17" class="tw tb">Unsupervised</text>
<text x="380" y="82" text-anchor="middle" font-size="16" class="tb" style="fill:var(--c4)">ไม่มีเฉลยเลย</text>
<ellipse cx="318" cy="140" rx="34" ry="28" class="nofill s4" stroke-width="2" stroke-dasharray="5 4"/>
<ellipse cx="440" cy="140" rx="34" ry="28" class="nofill s4" stroke-width="2" stroke-dasharray="5 4"/>
<g class="f4"><circle cx="304" cy="130" r="5"/><circle cx="322" cy="124" r="5"/><circle cx="314" cy="150" r="5"/><circle cx="333" cy="142" r="5"/><circle cx="300" cy="149" r="5"/>
<circle cx="426" cy="130" r="5"/><circle cx="446" cy="124" r="5"/><circle cx="452" cy="148" r="5"/><circle cx="432" cy="154" r="5"/><circle cx="458" cy="134" r="5"/></g>
<text x="380" y="204" text-anchor="middle" font-size="14">จับกลุ่มเองจากความคล้าย</text>
<text x="279" y="240" font-size="14">• ไม่มี feedback</text><text x="279" y="266" font-size="14">• งาน: หาโครงสร้างซ่อน</text>
<rect x="516" y="10" width="234" height="290" rx="14" class="f3l"/>
<rect x="516" y="10" width="234" height="46" rx="14" class="f3"/><rect x="516" y="40" width="234" height="16" class="f3"/>
<text x="633" y="40" text-anchor="middle" font-size="17" class="tw tb">Reinforcement (RL)</text>
<text x="633" y="82" text-anchor="middle" font-size="16" class="tb" style="fill:var(--c3)">มีแต่รางวัล</text>
<text x="550" y="156" text-anchor="middle" font-size="36">🐕</text>
<line x1="582" y1="140" x2="726" y2="140" class="ln" stroke-width="2"/>
<circle cx="604" cy="140" r="11" class="bgp s3" stroke-width="2"/><text x="604" y="145" text-anchor="middle" font-size="14" class="tb">?</text>
<circle cx="650" cy="140" r="11" class="bgp s3" stroke-width="2"/><text x="650" y="145" text-anchor="middle" font-size="14" class="tb">?</text>
<circle cx="700" cy="140" r="13" class="f3"/><text x="700" y="145" text-anchor="middle" font-size="13" class="tw tb">+1</text>
<text x="700" y="118" text-anchor="middle" font-size="18">⭐</text>
<g font-size="13" class="tm" text-anchor="middle"><text x="604" y="170">ก้าว 1</text><text x="650" y="170">ก้าว 2</text><text x="700" y="170">ก้าว 3</text></g>
<text x="633" y="204" text-anchor="middle" font-size="14">รางวัลมาทีหลัง</text>
<text x="532" y="240" font-size="14">• ไม่บอกว่าก้าวไหนถูก</text><text x="532" y="266" font-size="14">• งาน: ตัดสินใจเป็นลำดับ</text>
<rect x="10" y="312" width="740" height="42" rx="10" class="f7l"/>
<text x="380" y="339" text-anchor="middle" font-size="15">Cart-Pole: ไม่มีใครเฉลยว่าก้าวนี้ “ซ้าย” หรือ “ขวา” → ใช้ RL: <tspan class="tb">+1 ทุกก้าวที่คานยังไม่ล้ม</tspan></text>
</svg>`,
  caption: 'Supervised มีครูเฉลยทุกข้อ · Unsupervised ไม่มีเฉลยเลยแค่จับกลุ่ม · RL ไม่มีเฉลยแต่มี “คะแนน” ที่มาทีหลัง — และการตัดสินใจวันนี้กำหนดว่าพรุ่งนี้จะเห็นข้อมูลแบบไหน',
  init(el) { const s = document.getElementById('sec-intro'), h = el.parentNode; if (!s || !h || s.contains(h)) return; const a = (s._l10v && s.contains(s._l10v)) ? s._l10v : s.querySelector('h2'); if (!a) return; a.parentNode.insertBefore(h, a.nextSibling); s._l10v = h; }
},
{
  id: 'cartpole', section: 'intro', pos: 'top', kind: 'ภาพนิ่ง',
  title: 'รู้จัก Cart-Pole: เกมทรงไม้บนรถเข็น',
  html: `<svg viewBox="0 0 760 350" role="img" aria-label="Cart-Pole และตัวแปร state">
<defs>
<marker id="L10-cp-a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c1)"/></marker>
<marker id="L10-cp-a4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c4)"/></marker>
</defs>
<text x="20" y="34" font-size="17" class="tb">state = (x, ẋ, θ, <tspan font-family="Cambria,serif">θ̇</tspan>)</text>
<text x="20" y="58" font-size="14" class="tm">4 ตัวเลขที่ agent เห็นทุกก้าว</text>
<text x="20" y="120" font-size="15" class="tb">action มี 2 แบบ</text>
<rect x="20" y="132" width="150" height="38" rx="10" class="f2"/><text x="95" y="157" text-anchor="middle" font-size="15" class="tw tb">◀ ดันซ้าย (0)</text>
<rect x="20" y="180" width="150" height="38" rx="10" class="f2"/><text x="95" y="205" text-anchor="middle" font-size="15" class="tw tb">ดันขวา (1) ▶</text>
<line x1="60" y1="282" x2="700" y2="282" class="ln" stroke-width="4"/>
<rect x="52" y="262" width="8" height="28" rx="2" class="f5"/><rect x="700" y="262" width="8" height="28" rx="2" class="f5"/>
<line x1="380" y1="276" x2="380" y2="290" class="ln" stroke-width="2"/>
<g font-size="14" text-anchor="middle" class="tm"><text x="60" y="306">−2.4</text><text x="380" y="306">0</text><text x="700" y="306">+2.4</text></g>
<text x="700" y="330" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c5)">ตกราง = ล้ม</text>
<line x1="382" y1="322" x2="418" y2="322" class="s1" stroke-width="2.5" marker-start="url(#L10-cp-a1)" marker-end="url(#L10-cp-a1)"/>
<text x="428" y="327" font-size="15" style="fill:var(--c1)">x = ตำแหน่งรถ</text>
<line x1="420" y1="240" x2="420" y2="64" class="ln" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="420" y1="240" x2="382.6" y2="63.9" class="s5" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="420" y1="240" x2="457.4" y2="63.9" class="s5" stroke-width="2" stroke-dasharray="6 5"/>
<text x="380" y="96" text-anchor="end" font-size="14" style="fill:var(--c5)">เส้นแดง = ล้มถ้า |θ| &gt; 12°</text>
<rect x="415" y="70" width="10" height="170" rx="5" class="f2" transform="rotate(9 420 240)"/>
<rect x="370" y="240" width="100" height="36" rx="8" class="f1"/>
<text x="420" y="263" text-anchor="middle" font-size="14" class="tw tb">รถเข็น</text>
<circle cx="392" cy="280" r="7" style="fill:var(--vline)"/><circle cx="448" cy="280" r="7" style="fill:var(--vline)"/>
<circle cx="420" cy="240" r="5" class="bgp s2" stroke-width="2"/>
<path d="M420,120 A120,120 0 0 1 438.8,121.5" class="nofill s2" stroke-width="3"/>
<text x="470" y="132" font-size="15" class="tb" style="fill:var(--c2)">θ = มุมเอียง</text>
<path d="M433.3,50.5 A190,190 0 0 1 459.5,54.2" class="nofill s4" stroke-width="3" marker-end="url(#L10-cp-a4)"/>
<text x="472" y="52" font-size="15" class="tb" style="fill:var(--c4)"><tspan font-family="Cambria,serif">θ̇</tspan> = เอียงเร็วแค่ไหน</text>
<line x1="476" y1="258" x2="530" y2="258" class="s1" stroke-width="3" marker-end="url(#L10-cp-a1)"/>
<text x="538" y="263" font-size="15" class="tb" style="fill:var(--c1)">ẋ = ความเร็วรถ</text>
<rect x="590" y="150" width="160" height="78" rx="12" class="f3l"/>
<text x="670" y="178" text-anchor="middle" font-size="15" class="tb">+1 ทุกก้าว</text>
<text x="670" y="199" text-anchor="middle" font-size="14">ที่คานยังไม่ล้ม</text>
<text x="670" y="219" text-anchor="middle" font-size="14">ครบ 500 = จบตอน</text>
</svg>`,
  caption: 'เป้าหมาย: เลื่อนรถซ้าย/ขวาไม่ให้คานล้มให้นานที่สุด · ล้มเมื่อเอียงเกิน 12° หรือรถออกนอกราง |x| > 2.4 · ไม่มีใครบอกว่าก้าวไหนควรดันทางไหน มีแต่ +1 ต่อก้าว',
  init(el) { const s = document.getElementById('sec-intro'), h = el.parentNode; if (!s || !h || s.contains(h)) return; const a = (s._l10v && s.contains(s._l10v)) ? s._l10v : s.querySelector('h2'); if (!a) return; a.parentNode.insertBefore(h, a.nextSibling); s._l10v = h; }
},

/* ======================= Section 2: loop ======================= */
{
  id: 'loop-anim', section: 'loop', pos: 'top', kind: 'เคลื่อนไหว',
  title: 'วงจร Agent ↔ Environment (ดูข้อมูลวิ่งวน)',
  html: `<svg viewBox="0 0 760 320" role="img" aria-label="วงจร agent environment">
<defs>
<marker id="L10-lp-a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c2)"/></marker>
<marker id="L10-lp-a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c3)"/></marker>
</defs>
<rect x="30" y="95" width="210" height="130" rx="14" class="f1l s1" stroke-width="2"/>
<text x="135" y="130" text-anchor="middle" font-size="17" class="tb">🤖 Agent</text>
<text x="135" y="153" text-anchor="middle" font-size="14" class="tm">ผู้ตัดสินใจ</text>
<text x="135" y="182" text-anchor="middle" font-size="15">รถเข็น + นโยบาย π</text>
<text x="135" y="207" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c1)">คุมได้แค่ action เท่านั้น</text>
<rect x="520" y="95" width="210" height="130" rx="14" class="f6l s6" stroke-width="2"/>
<text x="625" y="130" text-anchor="middle" font-size="17" class="tb">🌍 Environment</text>
<text x="625" y="153" text-anchor="middle" font-size="14" class="tm">สิ่งแวดล้อม</text>
<text x="625" y="182" text-anchor="middle" font-size="15">ราง + คาน + ฟิสิกส์</text>
<text x="625" y="207" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c6)">ตัดสิน state ใหม่ + reward</text>
<path d="M135,95 C135,25 625,25 625,93" class="nofill s2" stroke-width="3" marker-end="url(#L10-lp-a2)"/>
<text x="380" y="72" text-anchor="middle" font-size="16" class="tb" style="fill:var(--c2)">action aₜ ∈ {ซ้าย, ขวา}</text>
<path d="M625,225 C625,295 135,295 135,227" class="nofill s3" stroke-width="3" marker-end="url(#L10-lp-a3)"/>
<text x="380" y="255" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c3)">state ใหม่ sₜ₊₁ และรางวัล rₜ₊₁ = +1</text>
<text x="380" y="152" text-anchor="middle" font-size="15" class="tm">วนซ้ำทุก 0.02 วินาที</text>
<text x="380" y="176" text-anchor="middle" font-size="15" class="tm">จนคานล้ม หรือครบ 500 ก้าว</text>
<g><circle r="13" class="f2"/><text y="5" text-anchor="middle" font-size="14" class="tw tb">a</text>
<animateMotion dur="4s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.45;1" calcMode="linear" path="M135,95 C135,25 625,25 625,93"/>
<animate attributeName="opacity" values="1;0" keyTimes="0;0.45" calcMode="discrete" dur="4s" repeatCount="indefinite"/></g>
<g><circle r="15" class="f3"/><text y="5" text-anchor="middle" font-size="13" class="tw tb">+1</text>
<animateMotion dur="4s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;0.5;0.95;1" calcMode="linear" path="M625,225 C625,295 135,295 135,227"/>
<animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;0.95" calcMode="discrete" dur="4s" repeatCount="indefinite"/></g>
</svg>`,
  caption: 'ลูกส้ม = action ที่ agent ส่งออกไป · ลูกเขียว = state ใหม่ + รางวัลที่ environment ส่งกลับ · ข้อสอบชอบถาม: agent ควบคุมได้แค่ action — reward และการเปลี่ยน state เป็นของ environment'
},
{
  id: 'challenges', section: 'loop', pos: 'top', kind: 'ทีละขั้น',
  title: '3 เรื่องที่ทำให้ RL ยาก',
  html: `<div class="stepper"><svg viewBox="0 0 760 340" role="img" aria-label="3 ความท้าทายของ RL">
<defs>
<marker id="L10-ch-a5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c5)"/></marker>
<marker id="L10-ch-a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c2)"/></marker>
<marker id="L10-ch-a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c3)"/></marker>
</defs>
<g>
<rect x="10" y="10" width="240" height="320" rx="14" class="f1l"/>
<circle cx="38" cy="40" r="15" class="f1"/><text x="38" y="45" text-anchor="middle" font-size="15" class="tw tb">1</text>
<text x="62" y="46" font-size="16" class="tb">Credit assignment</text>
<text x="130" y="76" text-anchor="middle" font-size="15">ก้าวไหนควรโดนโทษ?</text>
<line x1="28" y1="165" x2="232" y2="165" class="ln" stroke-width="3"/>
<circle cx="40" cy="165" r="5" style="fill:var(--vline)"/><circle cx="150" cy="165" r="6" class="f5"/>
<g font-size="14" text-anchor="middle" class="tm"><text x="40" y="190">ก้าว 0</text><text x="150" y="190">150</text><text x="216" y="190">180</text></g>
<text x="95" y="160" text-anchor="middle" font-size="14" class="tm">⋯</text>
<circle cx="216" cy="165" r="13" class="f5"/><text x="216" y="170" text-anchor="middle" font-size="14" class="tw tb">✗</text>
<text x="226" y="128" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c5)">ล้ม!</text>
<path d="M206,154 Q182,104 156,152" class="nofill s5" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#L10-ch-a5)"/>
<text x="176" y="122" text-anchor="middle" font-size="20" class="tb" style="fill:var(--c5)">?</text>
<text x="150" y="214" text-anchor="middle" font-size="14" style="fill:var(--c5)">ต้นเหตุจริงอยู่ตรงนี้?</text>
<rect x="25" y="250" width="210" height="64" rx="10" class="bgp"/>
<text x="130" y="275" text-anchor="middle" font-size="14" class="tm">แก้ด้วย</text>
<text x="130" y="299" text-anchor="middle" font-size="15" class="tb">Return + Bellman</text>
</g>
<g data-s="2">
<rect x="260" y="10" width="240" height="320" rx="14" class="f6l"/>
<circle cx="288" cy="40" r="15" class="f6"/><text x="288" y="45" text-anchor="middle" font-size="15" class="tw tb">2</text>
<text x="312" y="46" font-size="16" class="tb">Explore vs Exploit</text>
<text x="380" y="76" text-anchor="middle" font-size="15">ร้านเดิม หรือ ร้านใหม่?</text>
<text x="325" y="110" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c3)">Exploit</text>
<text x="325" y="160" text-anchor="middle" font-size="36">🍜</text>
<text x="325" y="192" text-anchor="middle" font-size="15">ร้านประจำ</text>
<text x="325" y="213" text-anchor="middle" font-size="14" class="tm">รู้ว่าอร่อย</text>
<text x="380" y="152" text-anchor="middle" font-size="16" class="tb tm">vs</text>
<text x="435" y="110" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c2)">Explore</text>
<text x="435" y="160" text-anchor="middle" font-size="36">🏪</text>
<text x="435" y="192" text-anchor="middle" font-size="15">ร้านใหม่</text>
<text x="435" y="213" text-anchor="middle" font-size="14" class="tm">อาจดีกว่า?</text>
<rect x="275" y="250" width="210" height="64" rx="10" class="bgp"/>
<text x="380" y="275" text-anchor="middle" font-size="14" class="tm">แก้ด้วย</text>
<text x="380" y="299" text-anchor="middle" font-size="14" class="tb">hill climbing, ε-greedy</text>
</g>
<g data-s="3">
<rect x="510" y="10" width="240" height="320" rx="14" class="f7l"/>
<circle cx="538" cy="40" r="15" class="f7l s7" stroke-width="2.5"/><text x="538" y="45" text-anchor="middle" font-size="15" class="tb">3</text>
<text x="562" y="46" font-size="16" class="tb">Reward specification</text>
<text x="630" y="76" text-anchor="middle" font-size="15">เขียนรางวัลผิด = งานผิด</text>
<text x="560" y="172" text-anchor="middle" font-size="34">🤖</text>
<line x1="586" y1="150" x2="672" y2="126" class="s2" stroke-width="2.5" marker-end="url(#L10-ch-a2)"/>
<text x="698" y="136" text-anchor="middle" font-size="28">🎯</text>
<text x="698" y="106" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c2)">ที่เราเขียน</text>
<line x1="586" y1="176" x2="672" y2="200" class="s3" stroke-width="2" stroke-dasharray="5 4" opacity=".6" marker-end="url(#L10-ch-a3)"/>
<text x="698" y="214" text-anchor="middle" font-size="24" opacity=".55">⭐</text>
<text x="698" y="238" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c3)">ที่เราตั้งใจ</text>
<rect x="525" y="250" width="210" height="64" rx="10" class="bgp"/>
<text x="630" y="275" text-anchor="middle" font-size="14" class="tm">แก้ด้วย</text>
<text x="630" y="299" text-anchor="middle" font-size="15" class="tb">ออกแบบรางวัลให้ดี</text>
</g>
<rect data-only="1" x="10" y="10" width="240" height="320" rx="14" class="nofill s1" stroke-width="4"/>
<rect data-only="2" x="260" y="10" width="240" height="320" rx="14" class="nofill s6" stroke-width="4"/>
<rect data-only="3" x="510" y="10" width="240" height="320" rx="14" class="nofill s7" stroke-width="4"/>
</svg>
<ol class="caps">
<li><b>Credit assignment:</b> คานล้มที่ก้าว 180 แต่ต้นเหตุอาจเป็นการเลื่อนผิดทางตั้งแต่ก้าว 150 — รางวัลมาช้า จึงยากจะรู้ว่าก้าวไหนผิด</li>
<li><b>Exploration vs Exploitation:</b> กินร้านประจำ (ใช้สิ่งที่รู้ว่าดี) หรือเสี่ยงลองร้านใหม่ (อาจดีกว่า)? ถ้าไม่เคยลองเลยก็ไม่มีวันเจอของที่ดีกว่า</li>
<li><b>Reward specification:</b> agent ไล่ตาม “รางวัลที่เราเขียน” ไม่ใช่ “สิ่งที่เราตั้งใจ” — เขียนรางวัลผิด มันจะทำสิ่งผิดได้อย่างเก่ง</li>
</ol></div>`,
  caption: 'สามปัญหานี้คือเหตุผลของเครื่องมือทั้งบท: Return/Bellman (ข้อ 1) · hill climbing และ ε-greedy (ข้อ 2) · การออกแบบรางวัล (ข้อ 3)'
},
/* ======================= Section 3: Markov → MDP ======================= */
{
  id: 'markov-prop', section: 'markov', pos: 'top', kind: 'ทีละขั้น',
  title: 'สมบัติ Markov: ดูแค่ “ตอนนี้” ก็พอ — แต่ตอนนี้ต้องครบ',
  html: `<div class="stepper"><svg viewBox="0 0 760 460" role="img" aria-label="สมบัติ Markov">
<defs>
<marker id="L10-mk-a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c3)"/></marker>
<marker id="L10-mk-a5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c5)"/></marker>
</defs>
<rect x="10" y="22" width="340" height="98" rx="12" class="ln" stroke-width="1.5" stroke-dasharray="6 5"/>
<rect x="24" y="36" width="64" height="46" rx="10" style="fill:var(--vgrid)"/><text x="56" y="65" text-anchor="middle" font-size="17" class="tm">s₁</text>
<rect x="100" y="36" width="64" height="46" rx="10" style="fill:var(--vgrid)"/><text x="132" y="65" text-anchor="middle" font-size="17" class="tm">s₂</text>
<text x="188" y="65" text-anchor="middle" font-size="17" class="tm">⋯</text>
<rect x="212" y="36" width="88" height="46" rx="10" style="fill:var(--vgrid)"/><text x="256" y="65" text-anchor="middle" font-size="17" class="tm">sₜ₋₁</text>
<text x="180" y="108" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c5)">✗ อดีต — ไม่ต้องจำ</text>
<rect x="400" y="30" width="110" height="60" rx="12" class="f1"/>
<text x="455" y="58" text-anchor="middle" font-size="20" class="tw tb">sₜ</text><text x="455" y="80" text-anchor="middle" font-size="14" class="tw">วันนี้</text>
<rect x="610" y="30" width="120" height="60" rx="12" class="f3l s3" stroke-width="2"/>
<text x="670" y="58" text-anchor="middle" font-size="20" class="tb">sₜ₊₁</text><text x="670" y="80" text-anchor="middle" font-size="14">พรุ่งนี้ ?</text>
<line x1="514" y1="62" x2="604" y2="62" class="s3" stroke-width="4" marker-end="url(#L10-mk-a3)"/>
<text x="559" y="50" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c3)">ใช้แค่นี้</text>
<text x="380" y="152" text-anchor="middle" font-size="18" class="tb">P(sₜ₊₁ | sₜ) = P(sₜ₊₁ | s₁, s₂, …, sₜ)</text>
<text x="380" y="178" text-anchor="middle" font-size="14" class="tm">รู้ “วันนี้” แล้ว ประวัติทั้งหมดไม่ช่วยทายพรุ่งนี้เพิ่ม</text>
<g data-s="2">
<text x="380" y="208" text-anchor="middle" font-size="16" class="tb" style="fill:var(--c2)">แต่ “ตอนนี้” ต้องครบ — คาน 2 อัน เอียงขวาเท่ากัน</text>
<line x1="110" y1="354" x2="290" y2="354" class="ln" stroke-width="3"/>
<g opacity=".4"><rect x="196" y="234" width="8" height="90" rx="4" class="f2 v-pulse" transform="rotate(24 200 324)"/></g>
<rect x="196" y="234" width="8" height="90" rx="4" class="f2" transform="rotate(10 200 324)"/>
<rect x="160" y="324" width="80" height="28" rx="6" class="f1"/>
<path d="M220.8,226.2 A100,100 0 0 1 237.5,231.3" class="nofill s5" stroke-width="3" marker-end="url(#L10-mk-a5)"/>
<text x="200" y="380" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c5)"><tspan font-family="Cambria,serif">θ̇</tspan> &gt; 0 : กำลังล้มไปขวา</text>
<line x1="470" y1="354" x2="650" y2="354" class="ln" stroke-width="3"/>
<g opacity=".4"><rect x="556" y="234" width="8" height="90" rx="4" class="f2 v-pulse" transform="rotate(-4 560 324)"/></g>
<rect x="556" y="234" width="8" height="90" rx="4" class="f2" transform="rotate(10 560 324)"/>
<rect x="520" y="324" width="80" height="28" rx="6" class="f1"/>
<path d="M573.9,225 A100,100 0 0 0 556.5,224.1" class="nofill s3" stroke-width="3" marker-end="url(#L10-mk-a3)"/>
<text x="560" y="380" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c3)"><tspan font-family="Cambria,serif">θ̇</tspan> &lt; 0 : กำลังเด้งกลับ</text>
<text x="380" y="292" text-anchor="middle" font-size="17" class="tb" style="fill:var(--c2)">θ เท่ากัน!</text>
<text x="380" y="316" text-anchor="middle" font-size="14" class="tm">ดูแค่ θ → แยกไม่ออก</text>
</g>
<g data-s="3">
<rect x="110" y="392" width="180" height="30" rx="8" class="f3l"/><text x="200" y="412" text-anchor="middle" font-size="14" class="tb">→ ดันขวาไปรับ</text>
<rect x="470" y="392" width="180" height="30" rx="8" class="f3l"/><text x="560" y="412" text-anchor="middle" font-size="14" class="tb">→ ดันซ้าย กันเลยจุดสมดุล</text>
<text x="380" y="448" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c1)">state ต้องมี ẋ และ <tspan font-family="Cambria,serif">θ̇</tspan> ด้วย → (x, ẋ, θ, <tspan font-family="Cambria,serif">θ̇</tspan>) จึงเป็น Markov ✓</text>
</g>
</svg>
<ol class="caps">
<li><b>สมบัติ Markov:</b> อนาคตขึ้นกับ “ตอนนี้” เท่านั้น ไม่ต้องจำอดีต — เหมือนหมากรุก ดูกระดานตอนนี้ก็เดินต่อได้ ไม่ต้องรู้ว่าเดินมาอย่างไร</li>
<li>แต่ “ตอนนี้” ต้องมีข้อมูลครบ: คานสองอันเอียงขวาเท่ากัน อันซ้ายกำลังล้ม อันขวากำลังเด้งกลับ — ถ้า state มีแค่ θ จะแยกไม่ออก</li>
<li>การกระทำที่ดีต่างกันสุดขั้ว จึงต้องใส่ความเร็ว ẋ และ θ̇ ไว้ใน state ด้วย → (x, ẋ, θ, θ̇) จึงเป็น Markov (ข้อสอบชอบถาม!)</li>
</ol></div>`,
  caption: 'Markov ไม่ได้แปลว่า “ลืมอดีต” แต่แปลว่า state ปัจจุบันเก็บทุกอย่างที่จำเป็นไว้แล้ว — มุมอย่างเดียวไม่พอ ต้องรู้ด้วยว่ากำลังหมุนไปทางไหน'
},
{
  id: 'weather', section: 'markov', pos: 'top', kind: 'ทีละขั้น',
  title: 'Markov chain อากาศ: วันนี้แดด อีก 2 วันฝนตกโอกาสเท่าไร?',
  html: `<div class="stepper"><svg viewBox="0 0 760 400" role="img" aria-label="แผนภาพอากาศและต้นไม้ความน่าจะเป็น">
<defs>
<marker id="L10-wt-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--vline)"/></marker>
</defs>
<g class="ln" stroke-width="2">
<path d="M68.1,88.2 C52,40 118,40 101.9,88.2" marker-end="url(#L10-wt-a)"/>
<path d="M218.1,88.2 C202,40 268,40 251.9,88.2" marker-end="url(#L10-wt-a)"/>
<path d="M176.9,311.8 C193,360 127,360 143.1,311.8" marker-end="url(#L10-wt-a)"/>
<line x1="120" y1="111" x2="198" y2="111" marker-end="url(#L10-wt-a)"/>
<line x1="200" y1="129" x2="122" y2="129" marker-end="url(#L10-wt-a)"/>
<line x1="92.1" y1="156.4" x2="135.6" y2="249.4" marker-end="url(#L10-wt-a)"/>
<line x1="152.9" y1="243.6" x2="109.4" y2="150.6" marker-end="url(#L10-wt-a)"/>
<line x1="227.9" y1="156.4" x2="184.4" y2="249.4" marker-end="url(#L10-wt-a)"/>
<line x1="167.2" y1="243.6" x2="210.7" y2="150.6" marker-end="url(#L10-wt-a)"/>
</g>
<path data-only="2" d="M68.1,88.2 C52,40 118,40 101.9,88.2 M120,111 L198,111 M92.1,156.4 L135.6,249.4" class="nofill s2" stroke-width="5" opacity=".75"/>
<path data-only="3" d="M92.1,156.4 L135.6,249.4 M227.9,156.4 L184.4,249.4 M176.9,311.8 C193,360 127,360 143.1,311.8" class="nofill s1" stroke-width="5" opacity=".75"/>
<circle cx="85" cy="120" r="36" class="f7l s7" stroke-width="2"/><text x="85" y="117" text-anchor="middle" font-size="20">☀️</text><text x="85" y="141" text-anchor="middle" font-size="15" class="tb">แดด</text>
<circle cx="235" cy="120" r="36" style="fill:var(--vgrid);stroke:var(--vline)" stroke-width="2"/><text x="235" y="117" text-anchor="middle" font-size="20">☁️</text><text x="235" y="141" text-anchor="middle" font-size="15" class="tb">เมฆ</text>
<circle cx="160" cy="280" r="36" class="f1l s1" stroke-width="2"/><text x="160" y="277" text-anchor="middle" font-size="20">🌧️</text><text x="160" y="301" text-anchor="middle" font-size="15" class="tb">ฝน</text>
<g font-size="14" class="tb" text-anchor="middle">
<text x="85" y="44">0.7</text><text x="235" y="44">0.4</text><text x="160" y="372">0.5</text>
<text x="160" y="104">0.2</text><text x="160" y="148">0.3</text>
<text x="94" y="214">0.1</text><text x="132" y="170">0.2</text>
<text x="226" y="214">0.3</text><text x="188" y="170">0.3</text></g>
<text x="160" y="394" text-anchor="middle" font-size="14" class="tm">ลูกศรออกจากแต่ละวง รวมกัน = 1</text>
<g font-size="14" class="tb tm" text-anchor="middle"><text x="375" y="40">วันนี้</text><text x="510" y="40">พรุ่งนี้</text><text x="632" y="40">มะรืน</text><text x="715" y="40">เส้นทางนี้</text></g>
<rect x="330" y="180" width="90" height="44" rx="10" class="f7l s7" stroke-width="2"/><text x="375" y="207" text-anchor="middle" font-size="15" class="tb">☀️ แดด</text>
<g data-s="2">
<g class="ln" stroke-width="2"><line x1="420" y1="202" x2="470" y2="90"/><line x1="420" y1="202" x2="470" y2="202"/><line x1="420" y1="202" x2="470" y2="314"/></g>
<rect x="470" y="70" width="80" height="40" rx="10" class="f7l"/><text x="510" y="96" text-anchor="middle" font-size="15">☀️ แดด</text>
<rect x="470" y="182" width="80" height="40" rx="10" style="fill:var(--vgrid)"/><text x="510" y="208" text-anchor="middle" font-size="15">☁️ เมฆ</text>
<rect x="470" y="294" width="80" height="40" rx="10" class="f1l"/><text x="510" y="320" text-anchor="middle" font-size="15">🌧️ ฝน</text>
<rect x="430" y="132" width="30" height="20" rx="5" class="bgp"/><text x="445" y="147" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c2)">0.7</text>
<rect x="430" y="186" width="30" height="20" rx="5" class="bgp"/><text x="445" y="201" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c2)">0.2</text>
<rect x="430" y="246" width="30" height="20" rx="5" class="bgp"/><text x="445" y="261" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c2)">0.1</text>
</g>
<g data-s="3">
<g class="ln" stroke-width="2"><line x1="550" y1="90" x2="594" y2="90"/><line x1="550" y1="202" x2="594" y2="202"/><line x1="550" y1="314" x2="594" y2="314"/></g>
<g font-size="14" class="tb" text-anchor="middle" style="fill:var(--c1)"><text x="572" y="83" style="fill:var(--c1)">0.1</text><text x="572" y="195" style="fill:var(--c1)">0.3</text><text x="572" y="307" style="fill:var(--c1)">0.5</text></g>
<rect x="594" y="70" width="76" height="40" rx="10" class="f1l"/><text x="632" y="96" text-anchor="middle" font-size="15">🌧️ ฝน</text>
<rect x="594" y="182" width="76" height="40" rx="10" class="f1l"/><text x="632" y="208" text-anchor="middle" font-size="15">🌧️ ฝน</text>
<rect x="594" y="294" width="76" height="40" rx="10" class="f1l"/><text x="632" y="320" text-anchor="middle" font-size="15">🌧️ ฝน</text>
</g>
<g data-s="4" text-anchor="middle">
<text x="715" y="86" font-size="14" class="tm">0.7×0.1</text><text x="715" y="106" font-size="16" class="tb">= 0.07</text>
<text x="715" y="198" font-size="14" class="tm">0.2×0.3</text><text x="715" y="218" font-size="16" class="tb">= 0.06</text>
<text x="715" y="310" font-size="14" class="tm">0.1×0.5</text><text x="715" y="330" font-size="16" class="tb">= 0.05</text>
</g>
<g data-s="5"><rect x="470" y="350" width="280" height="40" rx="10" class="f3"/><text x="610" y="376" text-anchor="middle" font-size="16" class="tw tb">0.07 + 0.06 + 0.05 = 0.18</text></g>
</svg>
<ol class="caps">
<li>แผนภาพซ้าย = Markov chain ของอากาศ (เลขบนลูกศร = โอกาสเปลี่ยนเป็นแบบนั้นในวันถัดไป) · โจทย์: <b>วันนี้แดด</b> อีก 2 วันฝนตกโอกาสเท่าไร?</li>
<li>ขั้น 1: พรุ่งนี้เป็นได้ 3 แบบ ตามลูกศรที่ออกจาก “แดด” (เส้นส้ม) → แดด 0.7 · เมฆ 0.2 · ฝน 0.1</li>
<li>ขั้น 2: จากแต่ละแบบ ต้องไปจบที่ “ฝน” ในวันมะรืน (เส้นฟ้า) → แดด→ฝน 0.1 · เมฆ→ฝน 0.3 · ฝน→ฝน 0.5</li>
<li>ขั้น 3: คูณตามเส้นทาง → 0.7×0.1 = 0.07 · 0.2×0.3 = 0.06 · 0.1×0.5 = 0.05</li>
<li>ขั้น 4: บวกทุกเส้นทาง = <b>0.18</b> — ตรงกับช่อง (แดด, ฝน) ของ P² (แถวแดดของ P² ทั้งแถว = 0.57, 0.25, 0.18)</li>
</ol></div>`,
  caption: 'สูตรจำ: “โอกาสของเส้นทาง = คูณตามเส้น · โอกาสรวม = บวกทุกเส้นทาง” — n วันข้างหน้าคือแถวของ Pⁿ'
},
{
  id: 'mp-mdp', section: 'markov', pos: 'top', kind: 'ทีละขั้น',
  title: 'MP → MRP → MDP: เติมทีละชิ้นจนตัดสินใจได้',
  html: `<div class="stepper"><svg viewBox="0 0 760 406" role="img" aria-label="จาก Markov Process สู่ MDP">
<defs><marker id="L10-md-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--vline)"/></marker></defs>
<rect x="15" y="20" width="210" height="170" rx="14" class="f6l s6" stroke-width="2"/>
<text x="120" y="46" text-anchor="middle" font-size="15" class="tb">Markov Process</text>
<rect x="87" y="60" width="30" height="30" rx="7" class="f1"/><text x="102" y="81" text-anchor="middle" font-size="16" class="tw tb">S</text>
<rect x="123" y="60" width="30" height="30" rx="7" class="f6"/><text x="138" y="81" text-anchor="middle" font-size="16" class="tw tb">P</text>
<text x="120" y="116" text-anchor="middle" font-size="16">⟨S, P⟩</text>
<text x="120" y="142" text-anchor="middle" font-size="14">อากาศเปลี่ยนไปเอง</text>
<text x="120" y="172" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c6)">ถาม: พรุ่งนี้เป็นอะไร?</text>
<g data-s="2">
<line x1="227" y1="105" x2="271" y2="105" class="ln" stroke-width="2.5" marker-end="url(#L10-md-a)"/>
<text x="249" y="96" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c2)">+ R, γ</text>
<rect x="275" y="20" width="210" height="170" rx="14" class="f7l s7" stroke-width="2"/>
<text x="380" y="46" text-anchor="middle" font-size="15" class="tb">Markov Reward Process</text>
<rect x="311" y="60" width="30" height="30" rx="7" class="f1"/><text x="326" y="81" text-anchor="middle" font-size="16" class="tw tb">S</text>
<rect x="347" y="60" width="30" height="30" rx="7" class="f6"/><text x="362" y="81" text-anchor="middle" font-size="16" class="tw tb">P</text>
<rect x="383" y="60" width="30" height="30" rx="7" class="f2"/><text x="398" y="81" text-anchor="middle" font-size="16" class="tw tb">R</text>
<rect x="419" y="60" width="30" height="30" rx="7" class="f7l s7" stroke-width="2.5"/><text x="434" y="81" text-anchor="middle" font-size="16" class="tb">γ</text>
<rect x="379" y="56" width="74" height="38" rx="9" class="nofill s2 v-pulse" stroke-width="2.5"/>
<text x="380" y="116" text-anchor="middle" font-size="16">⟨S, P, R, γ⟩</text>
<text x="380" y="142" text-anchor="middle" font-size="14">+ รางวัล + การลดทอน</text>
<text x="380" y="172" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c2)">ถาม: state นี้มีค่าเท่าไร?</text>
</g>
<g data-s="3">
<line x1="487" y1="105" x2="531" y2="105" class="ln" stroke-width="2.5" marker-end="url(#L10-md-a)"/>
<text x="509" y="96" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c5)">+ A</text>
<rect x="535" y="20" width="210" height="170" rx="14" class="f5l s5" stroke-width="2"/>
<text x="640" y="46" text-anchor="middle" font-size="15" class="tb">Markov Decision Process</text>
<rect x="553" y="60" width="30" height="30" rx="7" class="f1"/><text x="568" y="81" text-anchor="middle" font-size="16" class="tw tb">S</text>
<rect x="589" y="60" width="30" height="30" rx="7" class="f5"/><text x="604" y="81" text-anchor="middle" font-size="16" class="tw tb">A</text>
<rect x="625" y="60" width="30" height="30" rx="7" class="f6"/><text x="640" y="81" text-anchor="middle" font-size="16" class="tw tb">P</text>
<rect x="661" y="60" width="30" height="30" rx="7" class="f2"/><text x="676" y="81" text-anchor="middle" font-size="16" class="tw tb">R</text>
<rect x="697" y="60" width="30" height="30" rx="7" class="f7l s7" stroke-width="2.5"/><text x="712" y="81" text-anchor="middle" font-size="16" class="tb">γ</text>
<rect x="585" y="56" width="38" height="38" rx="9" class="nofill s5 v-pulse" stroke-width="2.5"/>
<text x="640" y="116" text-anchor="middle" font-size="16">⟨S, A, P, R, γ⟩</text>
<text x="640" y="142" text-anchor="middle" font-size="14">+ การกระทำ → ตัดสินใจได้</text>
<text x="640" y="172" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c5)">ถาม: ควรทำอะไรดี?</text>
</g>
<g data-s="4">
<text x="380" y="220" text-anchor="middle" font-size="16" class="tb">Cart-Pole เป็น MDP (Gymnasium CartPole-v1)</text>
<rect x="15" y="232" width="140" height="112" rx="12" class="f1l"/><rect x="165" y="232" width="140" height="112" rx="12" class="f5l"/>
<rect x="315" y="232" width="140" height="112" rx="12" class="f6l"/><rect x="465" y="232" width="140" height="112" rx="12" class="f2l"/>
<rect x="615" y="232" width="140" height="112" rx="12" class="f7l"/>
<circle cx="85" cy="256" r="15" class="f1"/><text x="85" y="262" text-anchor="middle" font-size="16" class="tw tb">S</text>
<circle cx="235" cy="256" r="15" class="f5"/><text x="235" y="262" text-anchor="middle" font-size="16" class="tw tb">A</text>
<circle cx="385" cy="256" r="15" class="f6"/><text x="385" y="262" text-anchor="middle" font-size="16" class="tw tb">P</text>
<circle cx="535" cy="256" r="15" class="f2"/><text x="535" y="262" text-anchor="middle" font-size="16" class="tw tb">R</text>
<circle cx="685" cy="256" r="15" class="f7l s7" stroke-width="2.5"/><text x="685" y="262" text-anchor="middle" font-size="16" class="tb">γ</text>
<g text-anchor="middle" font-size="15" class="tb">
<text x="85" y="292">(x, ẋ, θ, <tspan font-family="Cambria,serif">θ̇</tspan>)</text><text x="235" y="292">ซ้าย 0 · ขวา 1</text><text x="385" y="292">ฟิสิกส์</text>
<text x="535" y="292">+1 ทุกก้าว</text><text x="685" y="292">0.99</text></g>
<g text-anchor="middle" font-size="14">
<text x="85" y="314">4 ค่าต่อเนื่อง</text><text x="235" y="314">แรงคงที่ 10 N</text><text x="385" y="314">ทีละ 0.02 วินาที</text>
<text x="535" y="314">รวมก้าวที่ล้มด้วย</text><text x="685" y="314">100 ก้าวข้างหน้า</text></g>
<g text-anchor="middle" font-size="14" class="tm">
<text x="85" y="334">เริ่มสุ่มใกล้ 0</text><text x="235" y="334">(2 ทางเลือก)</text><text x="385" y="334">agent ไม่รู้สมการ</text>
<text x="685" y="334">เหลือค่า ≈ 37%</text></g>
<rect x="15" y="356" width="360" height="40" rx="10" class="f5l"/>
<text x="195" y="381" text-anchor="middle" font-size="14"><tspan class="tb">จบจริง (terminated):</tspan> |θ| &gt; 12° หรือ |x| &gt; 2.4</text>
<rect x="385" y="356" width="360" height="40" rx="10" class="f6l"/>
<text x="565" y="381" text-anchor="middle" font-size="14"><tspan class="tb">ถูกตัดเวลา (truncated):</tspan> ครบ 500 ก้าว</text>
</g>
</svg>
<ol class="caps">
<li><b>Markov Process ⟨S, P⟩</b>: มีแค่ state กับโอกาสเปลี่ยน — อากาศเปลี่ยนเอง ยังไม่มีใครตัดสินใจ</li>
<li>เติม <b>รางวัล R</b> และ <b>ตัวลดทอน γ</b> → <b>Markov Reward Process</b>: ตอบได้ว่า “state นี้มีค่าเท่าไร”</li>
<li>เติม <b>การกระทำ A</b> → <b>MDP = ⟨S, A, P(s′|s,a), R(s,a), γ⟩</b>: คำถามเปลี่ยนเป็น “ควรทำอะไรใน state นี้”</li>
<li>เติม 5 ช่องให้ Cart-Pole: S = (x, ẋ, θ, θ̇) · A = ซ้าย/ขวา · P = ฟิสิกส์ทุก 0.02 วินาที · R = +1 · γ = 0.99 — และแยก “ล้มจริง” ออกจาก “หมดเวลา 500 ก้าว”</li>
</ol></div>`,
  caption: 'จำง่าย ๆ: MP มีแค่ S, P → เติม R, γ ได้ MRP → เติม A ได้ MDP · ก่อนเลือกอัลกอริทึม ต้องเขียนโจทย์เป็น MDP ให้ได้ก่อน'
},

/* ======================= Section 4: Return ======================= */
{
  id: 'discount', section: 'return', pos: 'top', kind: 'ภาพนิ่ง',
  title: 'γ = ส่วนลดของอนาคต: รางวัลยิ่งไกลยิ่งมีค่าน้อย',
  html: `<svg viewBox="0 0 760 380" role="img" aria-label="น้ำหนัก gamma ยกกำลัง k">
<text x="270" y="30" text-anchor="middle" font-size="17" class="tb">Gₜ = rₜ₊₁ + γ·rₜ₊₂ + γ²·rₜ₊₃ + …</text>
<text x="40" y="60" font-size="14" class="tm">ความสูงแท่ง = น้ำหนักของรางวัลแต่ละก้าว = γᵏ (γ = 0.9)</text>
<line x1="40" y1="290" x2="510" y2="290" class="ln" stroke-width="2"/>
<g class="f7">
<rect x="50" y="90" width="30" height="200" rx="4" class="f3"/><rect x="92" y="110" width="30" height="180" rx="4"/><rect x="134" y="128" width="30" height="162" rx="4"/>
<rect x="176" y="144.2" width="30" height="145.8" rx="4"/><rect x="218" y="158.8" width="30" height="131.2" rx="4"/><rect x="260" y="171.9" width="30" height="118.1" rx="4"/>
<rect x="302" y="183.7" width="30" height="106.3" rx="4"/><rect x="344" y="194.3" width="30" height="95.7" rx="4"/><rect x="386" y="203.9" width="30" height="86.1" rx="4"/>
<rect x="428" y="212.5" width="30" height="77.5" rx="4"/><rect x="470" y="220.3" width="30" height="69.7" rx="4"/></g>
<g font-size="14" class="tb" text-anchor="middle">
<text x="65" y="84">1</text><text x="107" y="104">.9</text><text x="149" y="122">.81</text><text x="191" y="138">.73</text><text x="233" y="153">.66</text>
<text x="275" y="166">.59</text><text x="317" y="178">.53</text><text x="359" y="188">.48</text><text x="401" y="198">.43</text><text x="443" y="207">.39</text><text x="485" y="214">.35</text></g>
<g font-size="13" class="tm" text-anchor="middle">
<text x="65" y="308">1</text><text x="107" y="308">2</text><text x="149" y="308">3</text><text x="191" y="308">4</text><text x="233" y="308">5</text><text x="275" y="308">6</text>
<text x="317" y="308">7</text><text x="359" y="308">8</text><text x="401" y="308">9</text><text x="443" y="308">10</text><text x="485" y="308">11</text></g>
<text x="270" y="332" text-anchor="middle" font-size="14" class="tm">รางวัลก้าวที่ 1, 2, 3, … นับจากตอนนี้</text>
<text x="270" y="364" text-anchor="middle" font-size="15">💰 เหมือนเงิน: 100 บาทวันนี้ มีค่ากว่า 100 บาทปีหน้า</text>
<rect x="525" y="40" width="225" height="96" rx="12" class="f5l"/>
<text x="540" y="68" font-size="16" class="tb">γ = 0 · สายตาสั้น</text>
<text x="540" y="94" font-size="14">สนใจแค่รางวัลก้าวถัดไป</text>
<text x="540" y="116" font-size="14" class="tm">ทุก state Return = 1 เท่ากัน</text>
<rect x="525" y="146" width="225" height="96" rx="12" class="f3l"/>
<text x="540" y="174" font-size="16" class="tb">γ = 0.99 · มองไกล</text>
<text x="540" y="200" font-size="14">100 ก้าวข้างหน้าเหลือ ≈ 37%</text>
<text x="540" y="222" font-size="14" class="tm">Return ≤ 1/(1−γ) = 100</text>
<rect x="525" y="252" width="225" height="96" rx="12" class="f1l"/>
<text x="540" y="280" font-size="16" class="tb">γ = 1 · ไม่ลดเลย</text>
<text x="540" y="306" font-size="14">Return = จำนวนก้าวที่ทรงได้</text>
<text x="540" y="328" font-size="14" class="tm">(= คะแนนรายตอนในตำรา)</text>
</svg>`,
  caption: 'Return คือ “รางวัลรวมจากนี้ไป” แต่รางวัลที่อยู่ไกลถูกคูณด้วย γ ซ้ำ ๆ จึงหดลงเรื่อย ๆ · γ ใกล้ 1 = มองการณ์ไกล · γ = 0 = เห็นแค่ก้าวหน้า'
},
{
  id: 'return-back', section: 'return', pos: 'top', kind: 'ทีละขั้น',
  title: 'คำนวณ Return ย้อนจากท้าย (โจทย์สไลด์หน้า 15)',
  html: `<div class="stepper"><svg viewBox="0 0 760 366" role="img" aria-label="คำนวณ return ย้อนหลัง">
<defs>
<marker id="L10-rb-a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c3)"/></marker>
<marker id="L10-rb-a4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c4)"/></marker>
</defs>
<text x="380" y="28" text-anchor="middle" font-size="17" class="tb">ไล่ย้อนจากท้าย: G = r + γ·G′   (γ = 0.9)</text>
<g class="ln" stroke-width="2"><line x1="55" y1="142" x2="145" y2="142"/><line x1="245" y1="142" x2="335" y2="142"/><line x1="435" y1="142" x2="525" y2="142"/><line x1="625" y1="142" x2="715" y2="142"/></g>
<rect x="97" y="66" width="6" height="56" rx="3" class="f2"/>
<rect x="287" y="66" width="6" height="56" rx="3" class="f2" transform="rotate(5 290 122)"/>
<rect x="477" y="66" width="6" height="56" rx="3" class="f2" transform="rotate(10 480 122)"/>
<rect x="667" y="66" width="6" height="56" rx="3" class="f2" transform="rotate(70 670 122)"/>
<rect x="76" y="122" width="48" height="20" rx="5" class="f1"/><rect x="266" y="122" width="48" height="20" rx="5" class="f1"/>
<rect x="456" y="122" width="48" height="20" rx="5" class="f1"/><rect x="646" y="122" width="48" height="20" rx="5" class="f1"/>
<circle cx="650" cy="84" r="12" class="f5"/><text x="650" y="89" text-anchor="middle" font-size="14" class="tw tb">✗</text>
<g font-size="15" class="tb" text-anchor="middle"><text x="100" y="166">s₀</text><text x="290" y="166">s₁</text><text x="480" y="166">s₂</text><text x="670" y="166">s₃ (ล้ม)</text></g>
<g class="s3" stroke-width="2.5"><line x1="150" y1="100" x2="238" y2="100" marker-end="url(#L10-rb-a3)"/><line x1="340" y1="100" x2="428" y2="100" marker-end="url(#L10-rb-a3)"/><line x1="530" y1="100" x2="618" y2="100" marker-end="url(#L10-rb-a3)"/></g>
<g font-size="15" class="tb" text-anchor="middle" style="fill:var(--c3)"><text x="195" y="90" style="fill:var(--c3)">r₁ = +1</text><text x="385" y="90" style="fill:var(--c3)">r₂ = +1</text><text x="575" y="90" style="fill:var(--c3)">r₃ = +1</text></g>
<g class="ln" stroke-width="1.5" stroke-dasharray="5 4"><rect x="40" y="186" width="120" height="62" rx="12"/><rect x="230" y="186" width="120" height="62" rx="12"/><rect x="420" y="186" width="120" height="62" rx="12"/></g>
<rect x="610" y="186" width="120" height="62" rx="12" class="f5l"/>
<g font-size="14" class="tm" text-anchor="middle"><text x="100" y="206">G₀</text><text x="290" y="206">G₁</text><text x="480" y="206">G₂</text><text x="670" y="206">G₃</text></g>
<text x="670" y="238" text-anchor="middle" font-size="22" class="tb">0</text>
<text x="670" y="272" text-anchor="middle" font-size="14">หลังล้มไม่มีรางวัล</text>
<g font-size="22" class="tb tm" text-anchor="middle"><text data-only="1" x="480" y="238">?</text><text data-only="1,2" x="290" y="238">?</text><text data-only="1,2,3" x="100" y="238">?</text></g>
<g data-s="2">
<rect x="420" y="186" width="120" height="62" rx="12" class="f1l s1" stroke-width="2"/><text x="480" y="206" text-anchor="middle" font-size="14" class="tm">G₂</text>
<text x="480" y="238" text-anchor="middle" font-size="22" class="tb">1.00</text><text x="480" y="272" text-anchor="middle" font-size="14">1 + 0.9 × 0</text>
<line x1="607" y1="217" x2="545" y2="217" class="s4" stroke-width="2.5" marker-end="url(#L10-rb-a4)"/>
<text x="575" y="208" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c4)">×0.9</text><text x="575" y="236" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c3)">+1</text>
</g>
<g data-s="3">
<rect x="230" y="186" width="120" height="62" rx="12" class="f1l s1" stroke-width="2"/><text x="290" y="206" text-anchor="middle" font-size="14" class="tm">G₁</text>
<text x="290" y="238" text-anchor="middle" font-size="22" class="tb">1.90</text><text x="290" y="272" text-anchor="middle" font-size="14">1 + 0.9 × 1.00</text>
<line x1="417" y1="217" x2="355" y2="217" class="s4" stroke-width="2.5" marker-end="url(#L10-rb-a4)"/>
<text x="385" y="208" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c4)">×0.9</text><text x="385" y="236" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c3)">+1</text>
</g>
<g data-s="4">
<rect x="40" y="186" width="120" height="62" rx="12" class="f3l s3" stroke-width="2.5"/><text x="100" y="206" text-anchor="middle" font-size="14" class="tm">G₀</text>
<text x="100" y="238" text-anchor="middle" font-size="22" class="tb">2.71</text><text x="100" y="272" text-anchor="middle" font-size="14">1 + 0.9 × 1.90</text>
<line x1="227" y1="217" x2="165" y2="217" class="s4" stroke-width="2.5" marker-end="url(#L10-rb-a4)"/>
<text x="195" y="208" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c4)">×0.9</text><text x="195" y="236" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c3)">+1</text>
<text x="380" y="318" text-anchor="middle" font-size="16" class="tb" style="fill:var(--c3)">ยิ่งอยู่ห่างจากจุดล้ม Return ยิ่งสูง: 1.00 → 1.90 → 2.71</text>
<text x="380" y="346" text-anchor="middle" font-size="14" class="tm">ถ้า γ = 0 → G₀ = 1 · ถ้า γ = 1 → G₀ = 3 (นับก้าวตรง ๆ)</text>
</g>
</svg>
<ol class="caps">
<li>คานล้มหลังก้าวที่ 3 ได้รางวัล +1, +1, +1 · เริ่มที่ <b>ท้ายสุด</b>: หลังล้มไม่มีรางวัลแล้ว → G₃ = 0</li>
<li>ถอยมา 1 ก้าว: G₂ = r₃ + γ·G₃ = 1 + 0.9 × 0 = <b>1.00</b></li>
<li>ถอยอีก: G₁ = 1 + 0.9 × 1.00 = <b>1.90</b> — ใช้ค่าที่เพิ่งได้ ไม่ต้องบวกยาวทั้งแถว</li>
<li>G₀ = 1 + 0.9 × 1.90 = <b>2.71</b> · ตัวเลขชุดนี้ (1.00, 1.90, 2.71) จะกลับมาเป็นค่า Q* ใน Q-learning</li>
</ol></div>`,
  caption: 'เทคนิคทำข้อสอบ: เขียนรางวัลเรียงไว้ แล้วไล่จากขวาไปซ้ายด้วย “G = r + γ × G ของก้าวถัดไป” เร็วและไม่พลาด'
},
/* ======================= Section 5: Policy + Hill climbing ======================= */
{
  id: 'logistic', section: 'policy', pos: 'top', kind: 'ทีละขั้น',
  title: 'นโยบาย logistic = กรรมการ 4 คนให้คะแนน แล้วรวมเป็นความมั่นใจ',
  html: `<div class="stepper"><svg viewBox="0 0 760 352" role="img" aria-label="คำนวณ logistic policy">
<text x="380" y="26" text-anchor="middle" font-size="15" class="tb">y = σ(w₀ + w₁x + w₂ẋ + w₃θ + w₄<tspan font-family="Cambria,serif">θ̇</tspan>) · w = (0, 0.1, 0.5, 10, 2)</text>
<text x="20" y="60" font-size="14" class="tm">กรรมการ 4 คน: ค่า × น้ำหนัก</text>
<text x="364" y="60" text-anchor="end" font-size="14" class="tm">← ซ้าย</text><text x="376" y="60" font-size="14" class="tm">ขวา →</text>
<line x1="370" y1="66" x2="370" y2="234" class="ln" stroke-width="2"/>
<g font-size="15" class="tb" text-anchor="middle">
<rect x="20" y="68" width="110" height="32" rx="8" class="f1l"/><text x="75" y="89">x = 0.02</text>
<rect x="20" y="112" width="110" height="32" rx="8" class="f1l"/><text x="75" y="133">ẋ = 0.10</text>
<rect x="20" y="156" width="110" height="32" rx="8" class="f1l"/><text data-only="1,2,3,4" x="75" y="177">θ = 0.05</text><text data-only="5" x="75" y="177" style="fill:var(--c2)">θ = 0.01</text>
<rect x="20" y="200" width="110" height="32" rx="8" class="f1l"/><text x="75" y="221"><tspan font-family="Cambria,serif">θ̇</tspan> = −0.20</text></g>
<g font-size="15" class="tm" text-anchor="middle"><text x="168" y="89">× 0.1</text><text x="168" y="133">× 0.5</text><text x="168" y="177">× 10</text><text x="168" y="221">× 2</text></g>
<rect x="370" y="73" width="2" height="22" class="f3"/><text x="378" y="89" font-size="15" class="tb" style="fill:var(--c3)">+0.002</text>
<rect x="370" y="117" width="7.5" height="22" class="f3"/><text x="384" y="133" font-size="15" class="tb" style="fill:var(--c3)">+0.05</text>
<g data-only="1,2,3,4"><rect x="370" y="161" width="75" height="22" class="f3"/><text x="451" y="177" font-size="15" class="tb" style="fill:var(--c3)">+0.5</text></g>
<g data-only="5"><rect x="370" y="161" width="15" height="22" class="f3"/><text x="391" y="177" font-size="15" class="tb" style="fill:var(--c3)">+0.1</text></g>
<rect x="310" y="205" width="60" height="22" class="f5"/><text x="304" y="221" text-anchor="end" font-size="15" class="tb" style="fill:var(--c5)">−0.4</text>
<g data-only="2,3,4"><rect x="40" y="250" width="420" height="40" rx="10" class="f4l"/><text x="250" y="276" text-anchor="middle" font-size="15" class="tb">z = 0 + 0.002 + 0.05 + 0.5 − 0.4 = 0.152</text></g>
<g data-only="5"><rect x="40" y="250" width="420" height="40" rx="10" class="f4l"/><text x="250" y="276" text-anchor="middle" font-size="15" class="tb">z = 0 + 0.002 + 0.05 + 0.1 − 0.4 = −0.248</text></g>
<rect x="500" y="70" width="240" height="90" class="f3l"/><rect x="500" y="160" width="240" height="90" class="f2l"/>
<text x="508" y="92" font-size="14" class="tb" style="fill:var(--c3)">y &gt; 0.5 → ขวา</text>
<text x="734" y="242" text-anchor="end" font-size="14" class="tb" style="fill:var(--c2)">y &lt; 0.5 → ซ้าย</text>
<line x1="500" y1="160" x2="740" y2="160" class="ln" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="500" y1="250" x2="740" y2="250" class="ln" stroke-width="1.5"/><line x1="500" y1="70" x2="500" y2="250" class="ln" stroke-width="1.5"/>
<path d="M500.0,241.5 L510.0,239.2 L520.0,236.3 L530.0,232.8 L540.0,228.5 L550.0,223.4 L560.0,217.2 L570.0,209.9 L580.0,201.6 L590.0,192.3 L600.0,182.0 L610.0,171.2 L620.0,160.0 L630.0,148.8 L640.0,138.0 L650.0,127.7 L660.0,118.4 L670.0,110.1 L680.0,102.8 L690.0,96.6 L700.0,91.5 L710.0,87.2 L720.0,83.7 L730.0,80.8 L740.0,78.5" class="nofill s4" stroke-width="3"/>
<g font-size="13" class="tm" text-anchor="end"><text x="494" y="75">1</text><text x="494" y="165">0.5</text><text x="494" y="254">0</text></g>
<g font-size="13" class="tm" text-anchor="middle"><text x="500" y="268">−3</text><text x="620" y="268">0</text><text x="740" y="268">+3</text></g>
<text x="620" y="288" text-anchor="middle" font-size="14" class="tm">z (คะแนนรวม) → σ(z)</text>
<g data-only="3,4"><line x1="626.1" y1="153.2" x2="626.1" y2="250" class="s3" stroke-width="1.5" stroke-dasharray="3 3"/>
<circle cx="626.1" cy="153.2" r="7" class="f3" style="stroke:var(--vbg)" stroke-width="2"/>
<text x="614" y="140" text-anchor="end" font-size="16" class="tb" style="fill:var(--c3)">y = 0.538</text></g>
<g data-only="5"><line x1="610.1" y1="171.1" x2="610.1" y2="250" class="s2" stroke-width="1.5" stroke-dasharray="3 3"/>
<circle cx="610.1" cy="171.1" r="7" class="f2" style="stroke:var(--vbg)" stroke-width="2"/>
<text x="622" y="200" font-size="16" class="tb" style="fill:var(--c2)">y = 0.438</text></g>
<g data-only="4"><rect x="500" y="300" width="240" height="44" rx="12" class="f3"/><text x="620" y="328" text-anchor="middle" font-size="16" class="tw tb">0.538 &gt; 0.5 → ดันขวา ▶</text></g>
<g data-only="5"><rect x="500" y="300" width="240" height="44" rx="12" class="f2"/><text x="620" y="328" text-anchor="middle" font-size="16" class="tw tb">0.438 &lt; 0.5 → ◀ ดันซ้าย</text></g>
</svg>
<ol class="caps">
<li>แต่ละค่าใน state คูณน้ำหนักของมัน = “คะแนนจากกรรมการ” → 0.002, 0.05, <b>0.5</b>, <b>−0.4</b> (บวก = เชียร์ดันขวา · ลบ = เชียร์ดันซ้าย)</li>
<li>รวมคะแนน (w₀ = 0): z = 0.002 + 0.05 + 0.5 − 0.4 = <b>0.152</b></li>
<li>บีบให้เป็นความมั่นใจ 0–1 ด้วย sigmoid: y = σ(0.152) = <b>0.538</b></li>
<li>0.538 &gt; 0.5 → <b>ดันขวา</b>: คานเอียงขวามาก (w₃θ = 0.5) ชนะแรงหมุนกลับ (w₄θ̇ = −0.4) จึงเลื่อนรถไป “รับ”</li>
<li>แถวที่ 2 ของสไลด์: θ = 0.01 → z = −0.248 → y = 0.438 &lt; 0.5 → <b>ดันซ้าย</b> (เอียงน้อยลงแต่คานกำลังหมุนกลับซ้าย จึงเลื่อนซ้ายไม่ให้เลยจุดสมดุล)</li>
</ol></div>`,
  caption: 'รูปเดียวกับ logistic regression (พารามิเตอร์ 5 ตัว w₀…w₄) แต่ไม่มี label บอกว่าก้าวไหนถูก จึงต้องหา w ด้วยการลองผิดลองถูก · w ชุดนี้ทรงครบ 500 ก้าวทุก seed'
},
{
  id: 'episode', section: 'policy', pos: 'top', kind: 'ทีละขั้น',
  title: 'หนึ่งตอน (Episode) ตามรูป 7.2: ทำนาย → กระทำ → รางวัล → จบ → ปรับ w',
  html: `<div class="stepper"><svg viewBox="0 0 760 336" role="img" aria-label="วงจรหนึ่งตอน">
<defs><marker id="L10-ep-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--vline)"/></marker></defs>
<path d="M367,60 C367,12 78,12 78,58" class="ln" stroke-width="2" marker-end="url(#L10-ep-a)"/>
<text x="222" y="46" text-anchor="middle" font-size="14" class="tm">ยังไม่ล้ม → วนต่อก้าวถัดไป</text>
<rect x="15" y="60" width="125" height="70" rx="12" class="f1l"/><text x="78" y="88" text-anchor="middle" font-size="15" class="tb">① ทำนาย</text><text x="78" y="112" text-anchor="middle" font-size="14">y = σ(w·s)</text>
<rect x="160" y="60" width="125" height="70" rx="12" class="f2l"/><text x="222" y="88" text-anchor="middle" font-size="15" class="tb">② กระทำ</text><text x="222" y="112" text-anchor="middle" font-size="14">y &gt; 0.5 → ขวา</text>
<rect x="305" y="60" width="125" height="70" rx="12" class="f3l"/><text x="367" y="88" text-anchor="middle" font-size="15" class="tb">③ รับรางวัล</text><text x="367" y="112" text-anchor="middle" font-size="14">+1 ถ้ายังไม่ล้ม</text>
<rect x="305" y="190" width="125" height="70" rx="12" class="f5l"/><text x="367" y="218" text-anchor="middle" font-size="15" class="tb">④ จบตอน</text><text x="367" y="242" text-anchor="middle" font-size="14">ล้ม หรือ ครบ 500</text>
<rect x="15" y="190" width="245" height="70" rx="12" class="f4l"/><text x="137" y="218" text-anchor="middle" font-size="15" class="tb">⑤ ปรับน้ำหนัก w</text><text x="137" y="242" text-anchor="middle" font-size="14">ใช้คะแนนรวมของทั้งตอน</text>
<g class="ln" stroke-width="2"><line x1="141" y1="95" x2="157" y2="95" marker-end="url(#L10-ep-a)"/><line x1="286" y1="95" x2="302" y2="95" marker-end="url(#L10-ep-a)"/>
<line x1="367" y1="131" x2="367" y2="187" marker-end="url(#L10-ep-a)"/><line x1="304" y1="225" x2="263" y2="225" marker-end="url(#L10-ep-a)"/>
<line x1="78" y1="189" x2="78" y2="133" marker-end="url(#L10-ep-a)"/></g>
<text x="377" y="164" font-size="14" class="tm">ล้ม/ครบ</text><text x="88" y="166" font-size="14" class="tm">เริ่มตอนใหม่</text>
<rect data-only="1" x="15" y="60" width="125" height="70" rx="12" class="nofill s1" stroke-width="4"/>
<rect data-only="2" x="160" y="60" width="125" height="70" rx="12" class="nofill s2" stroke-width="4"/>
<rect data-only="3" x="305" y="60" width="125" height="70" rx="12" class="nofill s3" stroke-width="4"/>
<rect data-only="4" x="305" y="190" width="125" height="70" rx="12" class="nofill s5" stroke-width="4"/>
<rect data-only="5" x="15" y="190" width="245" height="70" rx="12" class="nofill s4" stroke-width="4"/>
<text x="605" y="40" text-anchor="middle" font-size="15" class="tb">ข้อมูลจริง 5 ก้าวแรก (seed 42)</text>
<g font-size="14" class="tb tm" text-anchor="middle"><text x="490" y="70">ก้าว</text><text x="565" y="70">y</text><text x="645" y="70">action</text><text x="720" y="70">r</text></g>
<line x1="465" y1="78" x2="750" y2="78" class="ln" stroke-width="1.5"/>
<g font-size="15" text-anchor="middle">
<text x="490" y="102">0</text><text x="565" y="102">0.598</text>
<text data-s="2" x="645" y="102" style="fill:var(--c1)">ขวา ▶</text><text data-s="3" x="720" y="102" class="tb" style="fill:var(--c3)">+1</text>
<g data-s="3">
<text x="490" y="128">1</text><text x="565" y="128">0.484</text><text x="645" y="128" style="fill:var(--c2)">◀ ซ้าย</text><text x="720" y="128" class="tb" style="fill:var(--c3)">+1</text>
<text x="490" y="154">2</text><text x="565" y="154">0.597</text><text x="645" y="154" style="fill:var(--c1)">ขวา ▶</text><text x="720" y="154" class="tb" style="fill:var(--c3)">+1</text>
<text x="490" y="180">3</text><text x="565" y="180">0.484</text><text x="645" y="180" style="fill:var(--c2)">◀ ซ้าย</text><text x="720" y="180" class="tb" style="fill:var(--c3)">+1</text>
<text x="490" y="206">4</text><text x="565" y="206">0.597</text><text x="645" y="206" style="fill:var(--c1)">ขวา ▶</text><text x="720" y="206" class="tb" style="fill:var(--c3)">+1</text>
<text x="605" y="230" class="tm">⋯</text></g></g>
<g data-s="4"><rect x="465" y="244" width="285" height="36" rx="10" class="f5l"/><text x="607" y="267" text-anchor="middle" font-size="14" class="tb">คะแนนรวม = จำนวนก้าวที่ทรงได้</text></g>
<g data-s="5"><rect x="465" y="290" width="285" height="36" rx="10" class="f4l"/><text x="607" y="313" text-anchor="middle" font-size="14" class="tb">ไม่มี label: ใช้แค่คะแนนรวมปรับ w</text></g>
</svg>
<ol class="caps">
<li>① <b>ทำนาย</b>: ใช้ w ชุดปัจจุบันคำนวณ y จาก state ตอนนี้ → ก้าว 0 ได้ y = 0.598</li>
<li>② <b>กระทำ</b>: y &gt; 0.5 → ดันขวา (ถ้าไม่ถึง → ดันซ้าย) แล้วได้ state ใหม่</li>
<li>③ <b>รับรางวัล +1</b> แล้ววนกลับไป ① — ข้อมูลจริง: รถสลับ ขวา/ซ้าย ไปมาเพื่อประคองคาน</li>
<li>④ <b>จบตอน</b> เมื่อคานล้มหรือครบ 500 ก้าว · คะแนนรวมของตอน = จำนวนก้าวที่ทรงได้ (แต่ละตอนยาวไม่เท่ากัน)</li>
<li>⑤ <b>ปรับ w</b> ด้วยคะแนนรวม (เช่น hill climbing) แล้วเริ่มตอนใหม่ — ไม่มีใครบอกว่าก้าวไหนถูก มีแค่คะแนนทั้งตอน</li>
</ol></div>`,
  caption: 'นี่คือเหตุผลที่ RL ถูกเรียกว่า “ลองผิดลองถูก”: ต้องเล่นให้จบตอนก่อน แล้วค่อยเอาคะแนนทั้งตอนไปปรับนโยบาย'
},
{
  id: 'hill', section: 'policy', pos: 'top', kind: 'เคลื่อนไหว',
  title: 'Hill climbing: สุ่มก้าวในหมอก ถ้าไม่แย่ลงก็ย้ายไป',
  html: `<svg viewBox="0 0 760 368" role="img" aria-label="hill climbing บนภูเขาคะแนน">
<circle cx="50" cy="25" r="9" class="f1" style="stroke:var(--vbg)" stroke-width="2"/><text x="64" y="30" font-size="14">w ที่ดีที่สุดตอนนี้</text>
<circle cx="236" cy="25" r="9" class="nofill s3" stroke-width="3"/><text x="252" y="30" font-size="14" style="fill:var(--c3)">ลองแล้วไม่แย่ลง → ย้าย</text>
<circle cx="456" cy="25" r="9" class="nofill s5" stroke-width="3"/><text x="472" y="30" font-size="14" style="fill:var(--c5)">ลองแล้วแย่ลง → ไม่ย้าย</text>
<text x="40" y="64" font-size="14" class="tm">↑ คะแนนของตอน (จำนวนก้าว)</text>
<path d="M40,289.7 L60,288.9 L80,286.8 L100,282.2 L120,273.7 L140,261.2 L160,246.7 L180,234.7 L200,230.0 L220,234.7 L240,246.7 L260,261.2 L280,273.7 L300,282.0 L320,286.3 L340,287.5 L360,286.2 L380,281.9 L400,273.1 L420,257.9 L440,234.7 L460,203.8 L480,168.2 L500,134.1 L520,109.2 L540,100.0 L560,109.2 L580,134.1 L600,168.2 L620,203.8 L640,234.7 L660,257.9 L680,273.1 L700,281.9 L720,286.5 L720,300 L40,300 Z" class="f3l"/>
<path d="M40,289.7 L60,288.9 L80,286.8 L100,282.2 L120,273.7 L140,261.2 L160,246.7 L180,234.7 L200,230.0 L220,234.7 L240,246.7 L260,261.2 L280,273.7 L300,282.0 L320,286.3 L340,287.5 L360,286.2 L380,281.9 L400,273.1 L420,257.9 L440,234.7 L460,203.8 L480,168.2 L500,134.1 L520,109.2 L540,100.0 L560,109.2 L580,134.1 L600,168.2 L620,203.8 L640,234.7 L660,257.9 L680,273.1 L700,281.9 L720,286.5" class="nofill s3" stroke-width="3"/>
<line x1="40" y1="300" x2="720" y2="300" class="ln" stroke-width="2"/>
<text x="200" y="196" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c2)">ยอดเขาเตี้ย (local optimum)</text>
<text x="540" y="84" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c3)">ยอดสูงสุด: ทรงได้ 500 ก้าว</text>
<text x="90" y="322" text-anchor="middle" font-size="14" class="tm">เริ่ม w = 0</text>
<text x="420" y="322" text-anchor="middle" font-size="14" class="tm">ค่าน้ำหนัก w (ย่อเหลือ 1 มิติให้ดูง่าย)</text>
<g><circle r="12" class="nofill s3" stroke-width="3"/>
<animateTransform attributeName="transform" type="translate" calcMode="discrete" dur="12s" repeatCount="indefinite" values="150 243;150 243;205 219.3;460 192.8;520 98.2;560 98.2" keyTimes="0;0.1;0.3;0.5;0.6;0.7"/>
<animate attributeName="opacity" calcMode="discrete" dur="12s" repeatCount="indefinite" values="0;1;0;1;0;1;0;1;0;1;0" keyTimes="0;0.1;0.175;0.3;0.375;0.5;0.575;0.6;0.675;0.7;0.775"/></g>
<g><circle r="12" class="nofill s5" stroke-width="3"/><text y="5" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c5)">✗</text>
<animateTransform attributeName="transform" type="translate" calcMode="discrete" dur="12s" repeatCount="indefinite" values="100 271.2;100 271.2;300 271;600 157.2" keyTimes="0;0.2;0.4;0.8"/>
<animate attributeName="opacity" calcMode="discrete" dur="12s" repeatCount="indefinite" values="0;1;0;1;0;1;0" keyTimes="0;0.2;0.275;0.4;0.475;0.8;0.875"/></g>
<circle cx="90" cy="273.9" r="10" class="f1" style="stroke:var(--vbg)" stroke-width="2">
<animate attributeName="cx" calcMode="discrete" dur="12s" repeatCount="indefinite" values="90;150;205;460;520;560" keyTimes="0;0.15;0.35;0.55;0.65;0.75"/>
<animate attributeName="cy" calcMode="discrete" dur="12s" repeatCount="indefinite" values="273.9;243;219.3;192.8;98.2;98.2" keyTimes="0;0.15;0.35;0.55;0.65;0.75"/></circle>
<text x="380" y="354" text-anchor="middle" font-size="14">ผลจริง (seed 42): ถึง 500 ก้าวที่รอบ 84 · seed อื่น 10 จาก 20 ถึง 500 ใน 150 รอบ — ที่เหลือติดยอดเขาเตี้ย</text>
</svg>`,
  caption: 'เหมือนเดินขึ้นเขาในหมอก: สุ่มขยับ w (สุ่มจาก N(0, 0.5)) แล้วเล่นดูคะแนน ถ้าไม่แย่ลงก็ย้ายไป — ไม่ต้องมี label ไม่ต้องมี gradient · ลูกนี้โชคดีที่กระโดดไกลข้ามหุบได้ ถ้าไม่ก็ติดยอดเขาเตี้ย'
},
{
  id: 'three-paths', section: 'policy', pos: 'top', kind: 'ภาพนิ่ง',
  title: '3 เส้นทางของ RL: เรียนคะแนน · ปรับนโยบาย · ทำทั้งคู่',
  html: `<svg viewBox="0 0 760 360" role="img" aria-label="value-based policy-based actor-critic">
<rect x="10" y="10" width="234" height="290" rx="14" class="f1l"/>
<rect x="10" y="10" width="234" height="46" rx="14" class="f1"/><rect x="10" y="40" width="234" height="16" class="f1"/>
<text x="127" y="40" text-anchor="middle" font-size="17" class="tw tb">Value-based</text>
<text x="127" y="82" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c1)">เรียน “คะแนน” ของ action</text>
<g font-size="14" class="tm tb" text-anchor="middle"><text x="107" y="108">ซ้าย</text><text x="167" y="108">ขวา</text></g>
<rect x="77" y="116" width="60" height="30" class="bgp s1" stroke-width="1.5"/><rect x="137" y="116" width="60" height="30" class="f3l s1" stroke-width="1.5"/>
<rect x="77" y="146" width="60" height="30" class="f3l s1" stroke-width="1.5"/><rect x="137" y="146" width="60" height="30" class="bgp s1" stroke-width="1.5"/>
<g font-size="15" text-anchor="middle"><text x="107" y="137">1.2</text><text x="167" y="137" class="tb">2.0 ★</text><text x="107" y="167" class="tb">0.9 ★</text><text x="167" y="167">0.4</text></g>
<g font-size="15" class="tb" text-anchor="middle"><text x="57" y="137">s₁</text><text x="57" y="167">s₂</text></g>
<text x="127" y="198" text-anchor="middle" font-size="14">เลือกช่องที่มากสุด (argmax)</text>
<text x="26" y="230" font-size="14">เช่น Q-learning, DQN</text>
<text x="26" y="254" font-size="14" style="fill:var(--c3)">✓ เรียนได้ทุกก้าว</text>
<text x="26" y="278" font-size="14" style="fill:var(--c5)">✗ action ต้องนับได้</text>
<rect x="263" y="10" width="234" height="290" rx="14" class="f2l"/>
<rect x="263" y="10" width="234" height="46" rx="14" class="f2"/><rect x="263" y="40" width="234" height="16" class="f2"/>
<text x="380" y="40" text-anchor="middle" font-size="17" class="tw tb">Policy-based</text>
<text x="380" y="82" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c2)">ปรับ “นโยบาย” ตรง ๆ</text>
<g class="ln" stroke-width="3"><line x1="320" y1="114" x2="450" y2="114"/><line x1="320" y1="140" x2="450" y2="140"/><line x1="320" y1="166" x2="450" y2="166"/></g>
<circle cx="350" cy="114" r="9" class="f2"/><circle cx="420" cy="140" r="9" class="f2"/><circle cx="385" cy="166" r="9" class="f2"/>
<g font-size="15" class="tb" text-anchor="middle"><text x="300" y="119">w₁</text><text x="300" y="145">w₂</text><text x="300" y="171">w₃</text></g>
<text x="380" y="198" text-anchor="middle" font-size="14">หมุนปุ่ม w แล้วดูคะแนนทั้งตอน</text>
<text x="279" y="230" font-size="14">เช่น hill climbing, REINFORCE</text>
<text x="279" y="254" font-size="14" style="fill:var(--c3)">✓ action ต่อเนื่องได้</text>
<text x="279" y="278" font-size="14" style="fill:var(--c5)">✗ ต้องเล่นจบตอนก่อนปรับ</text>
<rect x="516" y="10" width="234" height="290" rx="14" class="f4l"/>
<rect x="516" y="10" width="234" height="46" rx="14" class="f4"/><rect x="516" y="40" width="234" height="16" class="f4"/>
<text x="633" y="40" text-anchor="middle" font-size="17" class="tw tb">Actor-Critic</text>
<text x="633" y="82" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c4)">นักแสดง + นักวิจารณ์</text>
<text x="583" y="156" text-anchor="middle" font-size="36">🎭</text><text x="685" y="156" text-anchor="middle" font-size="34">📝</text>
<text x="634" y="140" text-anchor="middle" font-size="20" class="tm">⇄</text>
<g font-size="14" text-anchor="middle"><text x="583" y="188">actor = π</text><text x="685" y="188">critic = V/Q</text></g>
<text x="532" y="230" font-size="14">เช่น PPO, SAC (หุ่นยนต์จริง)</text>
<text x="532" y="254" font-size="14" style="fill:var(--c3)">✓ ต่อเนื่อง + เสถียร</text>
<text x="532" y="278" font-size="14" style="fill:var(--c5)">✗ ต้องใช้หลักล้านก้าว</text>
<rect x="10" y="312" width="740" height="40" rx="10" class="f7l"/>
<text x="380" y="338" text-anchor="middle" font-size="15">Cart-Pole: logistic <tspan class="tb">5 น้ำหนัก</tspan> vs DQN <tspan class="tb">≈ 17,000 น้ำหนัก</tspan> → ทรงได้ครบ 500 ก้าวทั้งคู่</text>
</svg>`,
  caption: 'Value-based ถามว่า “ทางเลือกนี้ได้คะแนนเท่าไร” แล้วเลือกตัวมากสุด · Policy-based ปรับกฎเลือกโดยตรง · Actor-Critic ให้ตัวหนึ่งเล่น อีกตัวคอยให้คะแนน (เลขในตารางเป็นตัวอย่างสมมติ)'
},
/* ======================= Section 6: Q-learning ======================= */
{
  id: 'q-update', section: 'qlearn', pos: 'top', kind: 'ทีละขั้น',
  title: 'ตาราง Q + อัปเดต 1 ก้าว: ขยับความเชื่อเข้าหาเป้า',
  html: `<div class="stepper"><svg viewBox="0 0 760 356" role="img" aria-label="Q-learning update ทีละขั้น">
<defs>
<marker id="L10-qu-a5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c5)"/></marker>
<marker id="L10-qu-a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c3)"/></marker>
</defs>
<text x="380" y="30" text-anchor="middle" font-size="17" class="tb">Q(s,a) ← Q(s,a) + α <tspan style="fill:var(--c5)">[</tspan> <tspan style="fill:var(--c2)">r + γ·max Q(s′,a′)</tspan> − Q(s,a) <tspan style="fill:var(--c5)">]</tspan></text>
<text x="380" y="54" text-anchor="middle" font-size="14"><tspan class="tb" style="fill:var(--c2)">ส้ม = TD target (เป้าใหม่)</tspan> · <tspan class="tb" style="fill:var(--c5)">[ ] = TD error (พลาดไปเท่าไร)</tspan></text>
<text x="145" y="90" text-anchor="middle" font-size="15" class="tb">ตาราง Q (สมุดคะแนน)</text>
<g font-size="14" class="tb tm" text-anchor="middle"><text x="165" y="116">ซ้าย</text><text x="235" y="116">ขวา</text></g>
<g font-size="14" class="tb"><text x="22" y="149">s (ตอนนี้)</text><text x="22" y="189">s′ (ถัดไป)</text></g>
<rect x="130" y="124" width="70" height="40" class="bgp s1" stroke-width="1.5"/><rect x="200" y="124" width="70" height="40" class="f1l s1" stroke-width="3"/>
<rect x="130" y="164" width="70" height="40" class="bgp s1" stroke-width="1.5"/><rect x="200" y="164" width="70" height="40" class="f2l s2" stroke-width="3"/>
<g font-size="16" text-anchor="middle"><text x="165" y="150">0.3</text><text x="165" y="190">1.4</text><text x="235" y="190" class="tb" style="fill:var(--c2)">2.0 ★</text>
<text data-only="1,2,3" x="235" y="150" class="tb" style="fill:var(--c1)">0.5</text><text data-only="4" x="235" y="150" class="tb" style="fill:var(--c3)">1.65</text><text data-only="5" x="235" y="150" class="tb" style="fill:var(--c3)">0.75</text></g>
<g data-only="5"><rect x="130" y="164" width="140" height="40" class="bgp" opacity=".85"/><text x="200" y="189" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c5)">ล้มแล้ว: ไม่ใช้ max</text></g>
<text x="145" y="230" text-anchor="middle" font-size="14">ทำ “ขวา” ได้ r = 1 แล้วไปเจอ s′</text>
<text x="145" y="252" text-anchor="middle" font-size="14" class="tm">γ = 0.9 · α = 0.5 (ตัวเลขสมมติ)</text>
<line x1="330" y1="250" x2="735" y2="250" class="ln" stroke-width="2"/>
<g class="ln" stroke-width="2"><line x1="330" y1="244" x2="330" y2="256"/><line x1="397.5" y1="244" x2="397.5" y2="256"/><line x1="465" y1="244" x2="465" y2="256"/><line x1="532.5" y1="244" x2="532.5" y2="256"/><line x1="600" y1="244" x2="600" y2="256"/><line x1="667.5" y1="244" x2="667.5" y2="256"/><line x1="735" y1="244" x2="735" y2="256"/></g>
<g font-size="13" class="tm" text-anchor="middle"><text x="330" y="270">0</text><text x="397.5" y="270">0.5</text><text x="465" y="270">1</text><text x="532.5" y="270">1.5</text><text x="600" y="270">2</text><text x="667.5" y="270">2.5</text><text x="735" y="270">3</text></g>
<line x1="397.5" y1="250" x2="397.5" y2="208" class="s1" stroke-width="3"/><circle cx="397.5" cy="200" r="8" class="f1"/>
<text data-only="1,2,3,4" x="397.5" y="186" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c1)">Q เดิม 0.5</text>
<text data-only="5" x="391" y="186" text-anchor="end" font-size="14" class="tb" style="fill:var(--c1)">Q เดิม 0.5</text>
<text data-only="1" x="330" y="300" font-size="15">รู้แล้ว: r = 1 · γ = 0.9 · max Q(s′,·) = 2.0 · α = 0.5</text>
<g data-only="2,3,4"><line x1="708" y1="250" x2="708" y2="128" class="s2" stroke-width="3"/><path d="M708,128 L740,138 L708,148 Z" class="f2"/>
<text x="700" y="122" text-anchor="end" font-size="14" class="tb" style="fill:var(--c2)">target = 2.8</text>
<text x="330" y="300" font-size="15">target = 1 + 0.9 × 2.0 = <tspan class="tb" style="fill:var(--c2)">2.8</tspan></text></g>
<g data-only="3,4"><line x1="402" y1="160" x2="703" y2="160" class="s5" stroke-width="2.5" marker-start="url(#L10-qu-a5)" marker-end="url(#L10-qu-a5)"/>
<text x="552" y="152" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c5)">TD error = 2.3</text>
<text x="330" y="324" font-size="15">error = 2.8 − 0.5 = <tspan class="tb" style="fill:var(--c5)">2.3</tspan></text></g>
<g data-only="4"><path d="M402,226 Q476,200 547,226" class="nofill s3" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#L10-qu-a3)"/>
<line x1="552.75" y1="250" x2="552.75" y2="208" class="s3" stroke-width="3"/><circle cx="552.75" cy="200" r="8" class="f3"/>
<text x="552.75" y="186" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c3)">Q ใหม่ 1.65</text>
<text x="330" y="348" font-size="15">Q ใหม่ = 0.5 + 0.5 × 2.3 = <tspan class="tb" style="fill:var(--c3)">1.65</tspan> (ไปครึ่งทาง)</text></g>
<g data-only="5"><line x1="465" y1="250" x2="465" y2="128" class="s5" stroke-width="3"/><path d="M465,128 L497,138 L465,148 Z" class="f5"/>
<text x="503" y="134" font-size="14" class="tb" style="fill:var(--c5)">target = r = 1</text>
<line x1="402" y1="160" x2="460" y2="160" class="s5" stroke-width="2.5" marker-start="url(#L10-qu-a5)" marker-end="url(#L10-qu-a5)"/>
<text x="431" y="152" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c5)">0.5</text>
<line x1="431.25" y1="250" x2="431.25" y2="208" class="s3" stroke-width="3"/><circle cx="431.25" cy="200" r="8" class="f3"/>
<text x="431.25" y="186" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c3)">0.75</text>
<text x="330" y="300" font-size="15">ล้มจริง (terminated): target = r = <tspan class="tb" style="fill:var(--c5)">1</tspan></text>
<text x="330" y="324" font-size="15">error = 1 − 0.5 = 0.5</text>
<text x="330" y="348" font-size="15">Q ใหม่ = 0.5 + 0.5 × 0.5 = <tspan class="tb" style="fill:var(--c3)">0.75</tspan></text></g>
</svg>
<ol class="caps">
<li>ตาราง Q = สมุดจดคะแนนของแต่ละทางเลือก · กำลังจะอัปเดตช่อง Q(s, ขวา) = 0.5 หลังทำ “ขวา” แล้วได้ r = 1 และไปเจอ s′ ที่ค่ามากสุดคือ 2.0</li>
<li><b>TD target</b> = r + γ·max Q(s′,·) = 1 + 0.9 × 2.0 = <b>2.8</b> — รางวัลจริง 1 ก้าว + ค่าที่ประมาณไว้ของ s′ (bootstrap)</li>
<li><b>TD error</b> = target − Q เดิม = 2.8 − 0.5 = <b>2.3</b> → “เราประเมินต่ำไป 2.3” (ถ้า error = 0 แปลว่าเรียนเสร็จที่จุดนี้)</li>
<li>ขยับเข้าหาเป้าแค่ α = 0.5 ของระยะ: Q ใหม่ = 0.5 + 0.5 × 2.3 = <b>1.65</b> · α = 0 ไม่เรียนเลย · α = 1 กระโดดไปที่ target ทันที</li>
<li>ถ้า s′ คือ <b>คานล้ม (terminated)</b> ไม่มีอนาคต → target = r = 1 → error 0.5 → Q ใหม่ <b>0.75</b> · แต่ถ้าแค่ครบ 500 ก้าว (truncated) ยังใช้ max Q(s′,·) ต่อ</li>
</ol></div>`,
  caption: 'เหมือนแอปนำทางที่ปรับเวลาประมาณทุกครั้งที่ผ่านแยก: ใช้เวลาจริง 1 ช่วง + ค่าประมาณที่เหลือ แล้วขยับค่าเดิมเข้าหา — ไม่ต้องรอถึงปลายทาง (Temporal-Difference)'
},
{
  id: 'discretize', section: 'qlearn', pos: 'top', kind: 'เคลื่อนไหว',
  title: 'ทำค่าต่อเนื่องให้เป็นช่องตาราง: 6 × 12 = 72 แถว',
  html: `<svg viewBox="0 0 760 336" role="img" aria-label="แบ่งช่อง state ของ Cart-Pole">
<rect x="70" y="40" width="360" height="240" class="f1l"/>
<path d="M70,40V280 M100,40V280 M130,40V280 M160,40V280 M190,40V280 M220,40V280 M250,40V280 M280,40V280 M310,40V280 M340,40V280 M370,40V280 M400,40V280 M430,40V280 M70,40H430 M70,80H430 M70,120H430 M70,160H430 M70,200H430 M70,240H430 M70,280H430" class="s1" stroke-width="1" opacity=".45"/>
<ellipse cx="250" cy="160" rx="126" ry="68.6" class="ln" stroke-width="1.5" stroke-dasharray="4 4"/>
<rect class="l10dz-hi f2l s2" x="250" y="80" width="30" height="40" stroke-width="3"/>
<circle class="l10dz-dot f2" cx="250" cy="91" r="7" style="stroke:var(--vbg)" stroke-width="2"/>
<g font-size="13" class="tm" text-anchor="end"><text x="64" y="46">+0.21</text><text x="64" y="165">0</text><text x="64" y="284">−0.21</text></g>
<text x="24" y="160" text-anchor="middle" font-size="14" class="tb" transform="rotate(-90 24 160)">θ มุมเอียง · 6 ช่อง</text>
<g font-size="13" class="tm" text-anchor="middle"><text x="70" y="298">−2</text><text x="250" y="298">0</text><text x="430" y="298">+2</text></g>
<text x="250" y="322" text-anchor="middle" font-size="14" class="tb"><tspan font-family="Cambria,serif">θ̇</tspan> ความเร็วเชิงมุม (rad/s) · 12 ช่อง</text>
<text x="610" y="56" text-anchor="middle" font-size="15" class="tb">จุดสีส้มตกช่องไหน?</text>
<text x="610" y="86" text-anchor="middle" font-size="16">θ ช่อง <tspan class="l10dz-i tb" style="fill:var(--c2)">3</tspan> · <tspan font-family="Cambria,serif">θ̇</tspan> ช่อง <tspan class="l10dz-j tb" style="fill:var(--c2)">6</tspan></text>
<text x="610" y="112" text-anchor="middle" font-size="14" class="tm">แถว = ช่อง θ × 12 + ช่อง <tspan font-family="Cambria,serif">θ̇</tspan></text>
<text x="610" y="146" text-anchor="middle" font-size="22" class="tb" style="fill:var(--c2)">แถว # <tspan class="l10dz-n">42</tspan></text>
<rect x="500" y="164" width="220" height="28" class="bgp s1" stroke-width="1.5"/>
<g font-size="14" class="tb tm" text-anchor="middle"><text x="540" y="183">แถว</text><text x="610" y="183">ซ้าย</text><text x="685" y="183">ขวา</text></g>
<rect x="500" y="192" width="220" height="28" class="ln" stroke-width="1.5"/><text x="610" y="211" text-anchor="middle" font-size="14" class="tm">⋯</text>
<rect x="500" y="220" width="220" height="30" class="f2l s2" stroke-width="2.5"/>
<text x="540" y="240" text-anchor="middle" font-size="15" class="tb">#<tspan class="l10dz-n2">42</tspan></text>
<g font-size="15" text-anchor="middle"><text x="610" y="240">Q(s, ←)</text><text x="685" y="240">Q(s, →)</text></g>
<text x="610" y="286" text-anchor="middle" font-size="17" class="tb">6 × 12 = 72 แถว</text>
<text x="610" y="312" text-anchor="middle" font-size="15">× 2 action = <tspan class="tb">144 ช่อง</tspan></text>
</svg>`,
  caption: 'Q-learning แบบตารางต้องการ state ที่นับได้ จึงตัด x, ẋ ทิ้ง แล้วแบ่ง θ (±0.21 rad) เป็น 6 ช่อง และ θ̇ (±2 rad/s) เป็น 12 ช่อง · หยาบไป = state ต่างกันถูกรวม · ละเอียดไป = ค้นหาไม่ทั่ว',
  init(el) {
    const q = c => el.querySelector('.' + c);
    const dot = q('l10dz-dot'), hi = q('l10dz-hi'), ti = q('l10dz-i'), tj = q('l10dz-j'), tn = q('l10dz-n'), tn2 = q('l10dz-n2');
    if (!dot || !hi) return;
    let t = 0.9;
    const draw = () => {
      const th = 0.12 * Math.sin(t), thd = 1.4 * Math.cos(t);
      const i = Math.min(5, Math.max(0, Math.floor((th + 0.21) / 0.07))), j = Math.min(11, Math.max(0, Math.floor((thd + 2) / (4 / 12))));
      dot.setAttribute('cx', (250 + thd * 90).toFixed(1)); dot.setAttribute('cy', (160 - th * 240 / 0.42).toFixed(1));
      hi.setAttribute('x', 70 + j * 30); hi.setAttribute('y', 40 + (5 - i) * 40);
      ti.textContent = i; tj.textContent = j; tn.textContent = i * 12 + j; tn2.textContent = i * 12 + j;
    };
    draw();
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => { if (!document.body.contains(el)) { clearInterval(id); return; } t += 0.06; draw(); }, 110);
  }
},
{
  id: 'eps-greedy', section: 'qlearn', pos: 'top', kind: 'ภาพนิ่ง',
  title: 'ε-greedy: ส่วนใหญ่ใช้ของดีที่รู้ บางครั้งสุ่มลองของใหม่',
  html: `<svg viewBox="0 0 760 352" role="img" aria-label="epsilon greedy">
<defs><marker id="L10-eg-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--vline)"/></marker></defs>
<rect x="30" y="16" width="190" height="44" rx="10" class="f4l"/><text x="125" y="44" text-anchor="middle" font-size="15" class="tb">🎲 สุ่มเลข 0–1</text>
<line x1="125" y1="60" x2="125" y2="80" class="ln" stroke-width="2" marker-end="url(#L10-eg-a)"/>
<polygon points="125,84 205,124 125,164 45,124" class="f7l s7" stroke-width="2"/>
<text x="125" y="129" text-anchor="middle" font-size="15" class="tb">เลข &lt; ε ?</text>
<g class="ln" stroke-width="2"><line x1="118" y1="166" x2="72" y2="190" marker-end="url(#L10-eg-a)"/><line x1="132" y1="166" x2="178" y2="190" marker-end="url(#L10-eg-a)"/></g>
<text x="84" y="172" text-anchor="end" font-size="14" class="tb" style="fill:var(--c2)">ใช่</text><text x="166" y="172" font-size="14" class="tb" style="fill:var(--c3)">ไม่</text>
<rect x="10" y="194" width="112" height="86" rx="10" class="f2l"/>
<text x="66" y="218" text-anchor="middle" font-size="15" class="tb">Explore</text><text x="66" y="242" text-anchor="middle" font-size="14">สุ่ม action</text><text x="66" y="264" text-anchor="middle" font-size="14" class="tm">(หลับตาจิ้ม)</text>
<rect x="128" y="194" width="112" height="86" rx="10" class="f3l"/>
<text x="184" y="218" text-anchor="middle" font-size="15" class="tb">Exploit</text><text x="184" y="242" text-anchor="middle" font-size="14">เลือก Q สูงสุด</text><text x="184" y="264" text-anchor="middle" font-size="14" class="tm">(argmax)</text>
<text x="125" y="310" text-anchor="middle" font-size="14">🍜 ส่วนใหญ่กินร้านโปรด</text><text x="125" y="332" text-anchor="middle" font-size="14">บางทีลองร้านใหม่</text>
<text x="375" y="34" text-anchor="middle" font-size="15" class="tb">ε = 0.1 · มี 2 action</text>
<path d="M375,150 L375,65 A85,85 0 1 1 325.0,81.2 Z" class="f3"/>
<path d="M375,150 L325.0,81.2 A85,85 0 0 1 348.7,69.2 Z" class="f3l s3" stroke-width="1.5"/>
<path d="M375,150 L348.7,69.2 A85,85 0 0 1 375,65 Z" class="f2"/>
<text x="398" y="172" text-anchor="middle" font-size="16" class="tw tb">Exploit 90%</text>
<rect x="276" y="250" width="14" height="14" class="f3"/><text x="296" y="262" font-size="14">Exploit → ตัวดีที่สุด 90%</text>
<rect x="276" y="272" width="14" height="14" class="f3l s3"/><text x="296" y="284" font-size="14">Explore → สุ่มได้ตัวดี 5%</text>
<rect x="276" y="294" width="14" height="14" class="f2"/><text x="296" y="306" font-size="14">Explore → สุ่มได้อีกตัว 5%</text>
<text x="375" y="336" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c3)">ได้ตัวดีที่สุด = 0.9 + 0.1/2 = 95%</text>
<text x="640" y="34" text-anchor="middle" font-size="15" class="tb">ลด ε ตามเวลา</text>
<polygon points="540,250 540,70 680,241 740,241 740,250" class="f2l"/>
<polygon points="540,70 740,70 740,241 680,241" class="f1l"/>
<polyline points="540,70 680,241 740,241" class="nofill s1" stroke-width="3"/>
<line x1="540" y1="250" x2="740" y2="250" class="ln" stroke-width="1.5"/><line x1="540" y1="70" x2="540" y2="250" class="ln" stroke-width="1.5"/>
<text x="585" y="222" font-size="14" class="tb" style="fill:var(--c2)">explore</text>
<text x="736" y="110" text-anchor="end" font-size="14" class="tb" style="fill:var(--c1)">exploit (argmax Q)</text>
<g font-size="13" class="tm" text-anchor="end"><text x="534" y="75">1.0</text><text x="534" y="245">0.05</text></g>
<g font-size="13" class="tm" text-anchor="middle"><text x="540" y="268">0</text><text x="680" y="268">700</text><text x="740" y="268">1000</text></g>
<text x="640" y="288" text-anchor="middle" font-size="14" class="tm">ตอน (episode)</text>
<text x="520" y="318" font-size="14">ต้น ε = 1: สุ่มสำรวจให้ทั่ว</text>
<text x="520" y="342" font-size="14">ท้าย ε = 0.05: ใช้ความรู้เป็นหลัก</text>
</svg>`,
  caption: 'สูตร P(เลือกตัวดีที่สุด) = (1 − ε) + ε/|A| — เพราะตอนสุ่มก็อาจบังเอิญได้ตัวดี · ในแล็บลด ε จาก 1.0 ถึง 0.05 แบบเส้นตรงใน 700 ตอนแรก (70% ของ 1,000) · ที่ ε = 0.05 ได้ 0.975'
},

/* ======================= Section 7: DQN ======================= */
{
  id: 'table-explode', section: 'dqn', pos: 'top', kind: 'ภาพนิ่ง',
  title: 'ทำไมตาราง Q ใช้ไม่ไหว: จำนวนช่องระเบิด',
  html: `<svg viewBox="0 0 760 360" role="img" aria-label="ขนาดตาราง Q เพิ่มขึ้นแบบ log">
<text x="380" y="24" text-anchor="middle" font-size="15" class="tb">ขนาดตาราง Q (สเกล log: แท่งยาวขึ้น 40 หน่วย = ใหญ่ขึ้น ×10)</text>
<text x="750" y="44" text-anchor="end" font-size="14" class="tb tm">ใช้ตาราง?</text>
<g font-size="15"><text x="20" y="69">Cart-Pole 6×12 (แล็บ)</text><text x="20" y="113">Cart-Pole 10 ช่อง/มิติ</text><text x="20" y="157">Cart-Pole 100 ช่อง/มิติ</text>
<text x="20" y="201">Atari 84×84 ระดับเทา</text><text x="20" y="245">หุ่นยนต์ Ant</text></g>
<rect x="250" y="50" width="86.3" height="28" rx="5" class="f3"/><text x="342" y="69" font-size="15" class="tb">144 ช่อง</text>
<rect x="250" y="94" width="172" height="28" rx="5" class="f7"/><text x="428" y="113" font-size="15" class="tb">20,000</text>
<rect x="250" y="138" width="332.1" height="28" rx="5" class="f2"/><text x="588" y="157" font-size="15" class="tb">2 × 10⁸</text>
<rect x="250" y="182" width="370" height="28" rx="5" class="f5"/><text x="435" y="201" text-anchor="middle" font-size="15" class="tw tb">256⁷⁰⁵⁶ ≈ 10¹⁶⁹⁹² ภาพ</text>
<text x="628" y="201" font-size="15" class="tb" style="fill:var(--c5)">⋯ ล้นจอ</text>
<rect x="250" y="226" width="370" height="28" rx="5" class="nofill s5" stroke-width="2" stroke-dasharray="6 4"/>
<text x="435" y="245" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c5)">27 ค่าต่อเนื่อง → นับช่องไม่ได้ (∞)</text>
<g font-size="15" class="tb" text-anchor="end"><text x="750" y="69" style="fill:var(--c3)">✓ ได้</text><text x="750" y="113" style="fill:var(--c2)">~ ช้า</text>
<text x="750" y="157" style="fill:var(--c5)">✗ ไม่ได้</text><text x="750" y="201" style="fill:var(--c5)">✗ ไม่ได้</text><text x="750" y="245" style="fill:var(--c5)">✗ ไม่ได้</text></g>
<rect x="10" y="280" width="176" height="64" rx="10" class="f4l"/><text x="98" y="305" text-anchor="middle" font-size="14" class="tb">① หน่วยความจำ</text><text x="98" y="328" text-anchor="middle" font-size="14">เก็บตารางไม่ไหว</text>
<rect x="196" y="280" width="176" height="64" rx="10" class="f4l"/><text x="284" y="305" text-anchor="middle" font-size="14" class="tb">② ข้อมูล</text><text x="284" y="328" text-anchor="middle" font-size="14">หลาย state ไม่เคยเจอ</text>
<rect x="382" y="280" width="176" height="64" rx="10" class="f4l"/><text x="470" y="305" text-anchor="middle" font-size="14" class="tb">③ Generalization</text><text x="470" y="328" text-anchor="middle" font-size="14">ไม่ช่วย state ที่คล้ายกัน</text>
<text x="574" y="318" text-anchor="middle" font-size="20" class="tb tm">→</text>
<rect x="590" y="280" width="160" height="64" rx="10" class="f4"/><text x="670" y="306" text-anchor="middle" font-size="15" class="tw tb">ใช้ฟังก์ชันประมาณ</text><text x="670" y="328" text-anchor="middle" font-size="14" class="tw">(function approx.)</text>
</svg>`,
  caption: 'แค่แบ่งช่องละเอียดขึ้น จำนวนช่องก็คูณกันทุกมิติ (10⁴ → 10⁸) · ภาพเกม Atari มีแบบได้มากกว่าจำนวนอะตอมในเอกภพ — จึงต้องใช้ฟังก์ชันที่ให้ค่าใกล้กันแก่ state ที่คล้ายกัน (6×12 ในแล็บใช้ได้ แต่ไม่เสถียร)'
},
{
  id: 'dqn-net', section: 'dqn', pos: 'top', kind: 'ภาพนิ่ง',
  title: 'DQN: เปลี่ยน “ตาราง” เป็น “สมอง” ที่คำนวณ Q ได้ทุก state',
  html: `<svg viewBox="0 0 760 368" role="img" aria-label="โครงข่าย DQN 4-128-128-2">
<g font-size="14" class="tb" text-anchor="middle"><text x="110" y="40">state 4 ค่า</text><text x="290" y="40">hidden 128 (ReLU)</text><text x="460" y="40">hidden 128 (ReLU)</text><text x="640" y="40">Q ของแต่ละ action</text></g>
<g class="ln" stroke-width="1.2" opacity=".45">
<path d="M130,90L277,80M130,90L277,120M130,90L277,160M130,90L277,200M130,90L277,240M130,140L277,80M130,140L277,120M130,140L277,160M130,140L277,200M130,140L277,240M130,190L277,80M130,190L277,120M130,190L277,160M130,190L277,200M130,190L277,240M130,240L277,80M130,240L277,120M130,240L277,160M130,240L277,200M130,240L277,240"/>
<path d="M303,80L447,80M303,80L447,120M303,80L447,160M303,80L447,200M303,80L447,240M303,120L447,80M303,120L447,120M303,120L447,160M303,120L447,200M303,120L447,240M303,160L447,80M303,160L447,120M303,160L447,160M303,160L447,200M303,160L447,240M303,200L447,80M303,200L447,120M303,200L447,160M303,200L447,200M303,200L447,240M303,240L447,80M303,240L447,120M303,240L447,160M303,240L447,200M303,240L447,240"/>
<path d="M473,80L618,125M473,80L618,205M473,120L618,125M473,120L618,205M473,160L618,125M473,160L618,205M473,200L618,125M473,200L618,205M473,240L618,125M473,240L618,205"/></g>
<g class="f1"><circle cx="110" cy="90" r="20"/><circle cx="110" cy="140" r="20"/><circle cx="110" cy="190" r="20"/><circle cx="110" cy="240" r="20"/></g>
<g font-size="16" class="tw tb" text-anchor="middle"><text x="110" y="96">x</text><text x="110" y="146">ẋ</text><text x="110" y="196">θ</text><text x="110" y="246"><tspan font-family="Cambria,serif">θ̇</tspan></text></g>
<g class="f4l s4" stroke-width="2"><circle cx="290" cy="80" r="13"/><circle cx="290" cy="120" r="13"/><circle cx="290" cy="160" r="13"/><circle cx="290" cy="200" r="13"/><circle cx="290" cy="240" r="13"/>
<circle cx="460" cy="80" r="13"/><circle cx="460" cy="120" r="13"/><circle cx="460" cy="160" r="13"/><circle cx="460" cy="200" r="13"/><circle cx="460" cy="240" r="13"/></g>
<g font-size="18" class="tm" text-anchor="middle"><text x="290" y="276">⋮</text><text x="460" y="276">⋮</text></g>
<g font-size="14" class="tm" text-anchor="middle"><text x="290" y="298">128 ตัว</text><text x="460" y="298">128 ตัว</text></g>
<circle cx="640" cy="125" r="22" class="f2"/><circle cx="640" cy="205" r="22" class="f2"/>
<g font-size="15" class="tw tb" text-anchor="middle"><text x="640" y="130">←</text><text x="640" y="210">→</text></g>
<g font-size="15" class="tb"><text x="670" y="130">Q(s, ←)</text><text x="670" y="210">Q(s, →)</text></g>
<text x="640" y="262" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c2)">argmax</text>
<text x="640" y="284" text-anchor="middle" font-size="14">เลือกตัวที่มากกว่า</text>
<g font-size="14" class="tm" text-anchor="middle"><text x="200" y="326">4×128+128 = 640</text><text x="375" y="326">128×128+128 = 16,512</text><text x="552" y="326">128×2+2 = 258</text></g>
<text x="380" y="356" text-anchor="middle" font-size="15" class="tb">รวม 17,410 น้ำหนัก (≈ 17,000) ใช้ร่วมทุก state — แทนตาราง 20,000 ช่อง</text>
</svg>`,
  caption: 'ใส่ state 4 ค่า → ได้ Q ของทุก action ในการคำนวณครั้งเดียว แล้วเลือกตัวมากสุด · state ที่คล้ายกันผ่านน้ำหนักชุดเดียวกันจึงได้ค่าใกล้กัน (generalize) · ข้อจำกัด: action ต้องนับได้และมีไม่มาก'
},
{
  id: 'replay-target', section: 'dqn', pos: 'top', kind: 'ทีละขั้น',
  title: 'DQN แบบตรง ๆ พัง 2 เรื่อง → แก้ด้วย Replay + Target',
  html: `<div class="stepper"><svg viewBox="0 0 760 420" role="img" aria-label="experience replay และ target network">
<defs><marker id="L10-rt-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--c3)"/></marker>
<marker id="L10-rt-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:var(--vline)"/></marker></defs>
<rect x="10" y="10" width="360" height="120" rx="12" class="f5l"/>
<text x="190" y="36" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c5)">ปัญหา ① เป้าวิ่งหนี</text>
<text x="58" y="104" text-anchor="middle" font-size="40">🐕</text><text x="58" y="66" text-anchor="middle" font-size="20" class="tm">↻</text>
<g font-size="14"><text x="104" y="68">target ใช้ θ ตัวเดียวกับ</text><text x="104" y="90">ที่กำลังปรับ → ขยับ θ ทีไร</text><text x="104" y="112">เป้าก็ขยับตาม (หมาไล่งับหาง)</text></g>
<rect x="390" y="10" width="360" height="120" rx="12" class="f5l"/>
<text x="570" y="36" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c5)">ปัญหา ② ข้อมูลติดกัน</text>
<g class="bgp s1" stroke-width="1.5"><rect x="410" y="50" width="60" height="44" rx="6"/><rect x="420" y="58" width="60" height="44" rx="6"/><rect x="430" y="66" width="60" height="44" rx="6"/><rect x="440" y="74" width="60" height="44" rx="6"/></g>
<rect x="460" y="104" width="20" height="8" class="f1"/><line x1="470" y1="104" x2="474.6" y2="82.5" class="s2" stroke-width="3"/>
<g font-size="14"><text x="520" y="68">ก้าวติดกันแทบเหมือนกัน</text><text x="520" y="90">(ไม่ i.i.d.)</text><text x="520" y="112">→ gradient ไม่นิ่ง</text></g>
<g data-s="2">
<line x1="570" y1="132" x2="570" y2="154" class="s3" stroke-width="2.5" marker-end="url(#L10-rt-a)"/>
<text x="570" y="176" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c3)">แก้ ② : Experience Replay</text>
<rect x="400" y="190" width="150" height="50" rx="10" class="f1l"/><text x="475" y="210" text-anchor="middle" font-size="14" class="tb">เก็บทุกก้าว</text><text x="475" y="230" text-anchor="middle" font-size="14">(s, a, r, s′, done)</text>
<line x1="552" y1="215" x2="586" y2="215" class="ln" stroke-width="2" marker-end="url(#L10-rt-b)"/>
<rect x="590" y="186" width="150" height="92" rx="10" class="f6l s6" stroke-width="1.5"/><text x="665" y="205" text-anchor="middle" font-size="14" class="tb">buffer 50,000</text>
<g class="f6" opacity=".55"><rect x="600" y="214" width="15" height="13" rx="2"/><rect x="638" y="214" width="15" height="13" rx="2"/><rect x="657" y="214" width="15" height="13" rx="2"/><rect x="695" y="214" width="15" height="13" rx="2"/>
<rect x="600" y="232" width="15" height="13" rx="2"/><rect x="619" y="232" width="15" height="13" rx="2"/><rect x="638" y="232" width="15" height="13" rx="2"/><rect x="657" y="232" width="15" height="13" rx="2"/><rect x="695" y="232" width="15" height="13" rx="2"/><rect x="714" y="232" width="15" height="13" rx="2"/>
<rect x="600" y="250" width="15" height="13" rx="2"/><rect x="619" y="250" width="15" height="13" rx="2"/><rect x="657" y="250" width="15" height="13" rx="2"/><rect x="676" y="250" width="15" height="13" rx="2"/><rect x="714" y="250" width="15" height="13" rx="2"/></g>
<g class="f2"><rect x="619" y="214" width="15" height="13" rx="2"/><rect x="676" y="232" width="15" height="13" rx="2"/><rect x="638" y="250" width="15" height="13" rx="2"/><rect x="714" y="214" width="15" height="13" rx="2"/><rect x="695" y="250" width="15" height="13" rx="2"/><rect x="676" y="214" width="15" height="13" rx="2"/></g>
<line x1="665" y1="280" x2="665" y2="296" class="ln" stroke-width="2" marker-end="url(#L10-rt-b)"/>
<rect x="590" y="300" width="150" height="40" rx="10" class="f2l"/><text x="665" y="325" text-anchor="middle" font-size="14" class="tb">สุ่มหยิบ 64 อัน</text>
<line x1="588" y1="320" x2="554" y2="320" class="ln" stroke-width="2" marker-end="url(#L10-rt-b)"/>
<rect x="400" y="300" width="150" height="40" rx="10" class="f3l"/><text x="475" y="325" text-anchor="middle" font-size="14" class="tb">gradient step</text>
<text x="570" y="364" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c3)">ข้อมูลไม่ติดกัน + ทบทวนซ้ำได้หลายครั้ง</text>
</g>
<g data-s="3">
<line x1="190" y1="132" x2="190" y2="154" class="s3" stroke-width="2.5" marker-end="url(#L10-rt-a)"/>
<text x="190" y="176" text-anchor="middle" font-size="15" class="tb" style="fill:var(--c3)">แก้ ① : Target Network</text>
<rect x="20" y="190" width="150" height="64" rx="10" class="f1l"/><text x="95" y="214" text-anchor="middle" font-size="14" class="tb">Q-network θ</text><text x="95" y="238" text-anchor="middle" font-size="14">กำลังเรียนทุกก้าว</text>
<line x1="172" y1="222" x2="206" y2="222" class="ln" stroke-width="2" marker-end="url(#L10-rt-b)"/>
<rect x="210" y="190" width="150" height="64" rx="10" class="f6l"/><text x="285" y="214" text-anchor="middle" font-size="14" class="tb">Target θ⁻</text><text x="285" y="238" text-anchor="middle" font-size="14">สำเนาแช่แข็ง ❄️</text>
<text x="190" y="276" text-anchor="middle" font-size="14">คัดลอก θ → θ⁻ ทุก C ก้าว</text>
<text x="190" y="298" text-anchor="middle" font-size="14" class="tm">หรือ soft: θ⁻ ← 0.005θ + 0.995θ⁻</text>
<text x="190" y="328" text-anchor="middle" font-size="14" class="tb">y = r + γ(1 − done)·max Q(s′,a′; θ⁻)</text>
<text x="190" y="364" text-anchor="middle" font-size="14" class="tb" style="fill:var(--c3)">เป้านิ่งพอให้ไล่ตามได้</text>
</g>
<g data-s="4"><rect x="10" y="378" width="740" height="36" rx="10" class="f4"/>
<text x="380" y="402" text-anchor="middle" font-size="15" class="tw tb">DQN = Q-network + Replay + Target → ไม่ได้ทำให้เร็วขึ้น แต่ทำให้ไม่พัง</text></g>
</svg>
<ol class="caps">
<li>DQN แบบตรง ๆ พัง 2 เรื่อง: ① target คำนวณด้วย θ ตัวเดียวกับที่กำลังปรับ (เหมือนหมาไล่งับหางตัวเอง) ② ข้อมูลก้าวติดกันแทบเหมือนกัน ไม่สุ่มกระจาย</li>
<li>แก้ ② ด้วย <b>Experience Replay</b>: จดทุกก้าวลงสมุด (buffer 50,000) แล้วสุ่มหยิบ 64 อันมาฝึก — ข้อมูลไม่ติดกัน และทบทวนประสบการณ์ซ้ำได้</li>
<li>แก้ ① ด้วย <b>Target Network</b>: ใช้สำเนา θ⁻ ที่แช่แข็งไว้คำนวณ target แล้วค่อยคัดลอกทุก C ก้าว (หรือ soft update 0.005 ทุกก้าว) — เป้าจึงนิ่ง</li>
<li>สรุป: <b>DQN = Q-network + Replay + Target</b> · (1 − done) คือเงื่อนไข “ล้มจริงไม่ต่ออนาคต” แบบเดียวกับ Q-learning ตาราง</li>
</ol></div>`,
  caption: 'จำคู่ให้ถูก (ข้อสอบชอบสลับ): Replay แก้ “ข้อมูลติดกัน” · Target network แก้ “เป้าวิ่งหนี”'
},

/* ======================= Section 8: Reward design ======================= */
{
  id: 'reward-bars', section: 'reward', pos: 'top', kind: 'ทีละขั้น',
  title: 'รางวัล 4 แบบ → agent ที่เก่งเลือกต่างกัน (Return, γ = 0.99)',
  html: `<div class="stepper"><svg viewBox="0 0 760 400" role="img" aria-label="เปรียบเทียบรางวัล 4 แบบ">
<rect x="250" y="10" width="14" height="14" class="f3"/><text x="270" y="22" font-size="14">ทรงครบ 500 ก้าว</text>
<rect x="410" y="10" width="14" height="14" class="f2"/><text x="430" y="22" font-size="14">ล้มที่ก้าว 10</text>
<text x="750" y="22" text-anchor="end" font-size="14" class="tm">★ = agent เลือก</text>
<line x1="490" y1="36" x2="490" y2="392" class="ln" stroke-width="2"/>
<g>
<text x="20" y="68" font-size="15" class="tb">+1 ทุกก้าว (ค่าเริ่มต้น)</text>
<text x="20" y="94" font-size="14" class="tb" style="fill:var(--c3)">→ agent เลือก: ทรงตัว ✓</text>
<rect x="490" y="48" width="198.6" height="26" rx="3" class="f3"/><text x="694" y="67" font-size="15" class="tb">+99.3 ★</text>
<rect x="490" y="80" width="19.2" height="26" rx="3" class="f2"/><text x="515" y="99" font-size="15" class="tb">+9.6</text>
</g>
<g data-s="2">
<line x1="20" y1="124" x2="740" y2="124" class="grid" stroke-width="1"/>
<text x="20" y="156" font-size="15" class="tb">+1 ทุกก้าว, −100 เมื่อล้ม</text>
<text x="20" y="182" font-size="14" class="tb" style="fill:var(--c3)">→ agent เลือก: ทรงตัว ✓</text>
<rect x="490" y="136" width="198.6" height="26" rx="3" class="f3"/><text x="694" y="155" font-size="15" class="tb">+99.3 ★</text>
<rect x="326.4" y="168" width="163.6" height="26" rx="3" class="f2"/><text x="320" y="187" text-anchor="end" font-size="15" class="tb">−81.8</text>
</g>
<g data-s="3">
<line x1="20" y1="212" x2="740" y2="212" class="grid" stroke-width="1"/>
<text x="20" y="244" font-size="15" class="tb">0 ทุกก้าว, −1 เมื่อล้ม</text>
<text x="20" y="270" font-size="14" class="tb" style="fill:var(--c3)">→ ทรงตัว (แต่ไม่มีเบาะแส)</text>
<rect x="489" y="224" width="2" height="26" class="f3"/><text x="498" y="243" font-size="15" class="tb">0.0 ★</text>
<rect x="488.2" y="256" width="1.8" height="26" class="f2"/><text x="482" y="275" text-anchor="end" font-size="15" class="tb">−0.91</text>
</g>
<g data-s="4">
<line x1="20" y1="300" x2="740" y2="300" class="grid" stroke-width="1"/>
<text x="20" y="332" font-size="15" class="tb">−1 ทุกก้าว</text>
<text x="20" y="358" font-size="15" class="tb" style="fill:var(--c5)">→ รีบล้ม! ✗</text>
<rect x="291.4" y="312" width="198.6" height="26" rx="3" class="f3"/><text x="285" y="331" text-anchor="end" font-size="15" class="tb">−99.3</text>
<rect x="470.8" y="344" width="19.2" height="26" rx="3" class="f2"/><text x="465" y="363" text-anchor="end" font-size="15" class="tb">★ −9.6</text>
<rect x="12" y="304" width="736" height="90" rx="10" class="nofill s5" stroke-width="2.5"/>
<text x="520" y="362" font-size="14" class="tb" style="fill:var(--c5)">ล้มเร็วได้คะแนนดีกว่า!</text>
</g>
</svg>
<ol class="caps">
<li><b>+1 ทุกก้าว</b>: ทรงครบ 500 ได้ +99.3 · ล้มที่ก้าว 10 ได้แค่ +9.6 → agent ที่เก่งจะเลือก “ทรงตัว” ✓</li>
<li>เพิ่ม <b>โทษ −100 ตอนล้ม</b>: ล้มเร็วยิ่งแย่ (−81.8) → ยังเลือกทรงตัว ✓ (โทษช่วยผลักออกจากสิ่งที่ไม่ต้องการ)</li>
<li><b>0 ทุกก้าว, −1 ตอนล้ม</b>: ทรงครบได้ 0.0 ดีกว่า −0.91 → ทรงตัว แต่ระหว่างทางไม่มีเบาะแสเลยว่าทำดีหรือยัง</li>
<li><b>−1 ทุกก้าว</b>: ทรงครบ = −99.3 แต่ล้มเร็ว = −9.6 → “รีบล้ม” ได้คะแนนดีกว่า! <b>agent ไม่ได้ผิด รางวัลต่างหากที่ผิด</b></li>
</ol></div>`,
  caption: 'ที่มาของตัวเลข: +1 ทุกก้าว 500 ก้าว = (1 − 0.99⁵⁰⁰)/0.01 ≈ 99.3 · ล้มก้าว 10 = (1 − 0.99¹⁰)/0.01 ≈ 9.6 · ใส่ −100 ตอนล้ม ≈ 9.56 − 100×0.99⁹ ≈ −81.8'
},
{
  id: 'reward-drift', section: 'reward', pos: 'top', kind: 'เคลื่อนไหว',
  title: '+1 ทรงได้ แต่รถไหล: รางวัลไม่ได้พูดถึงตำแหน่ง',
  html: `<svg viewBox="0 0 760 300" role="img" aria-label="รถไหลออกขอบราง">
<text x="20" y="34" font-size="16" class="tb">+1 ต่อก้าว = “อย่าให้คานล้ม” เท่านั้น</text>
<text x="20" y="60" font-size="15" class="tm">ไม่ได้บอกว่า “อยู่กลางราง” → รถค่อย ๆ ไหลออกข้าง</text>
<line x1="40" y1="230" x2="720" y2="230" class="ln" stroke-width="4"/>
<rect x="32" y="210" width="8" height="28" rx="2" class="f5"/><rect x="720" y="210" width="8" height="28" rx="2" class="f5"/>
<line x1="380" y1="224" x2="380" y2="236" class="ln" stroke-width="2"/>
<g font-size="14" class="tm" text-anchor="middle"><text x="40" y="254">−2.4</text><text x="380" y="254">กลางราง 0</text><text x="720" y="254">+2.4</text></g>
<g>
<g><rect x="376" y="80" width="8" height="116" rx="4" class="f2"/>
<animateTransform attributeName="transform" type="rotate" values="-3 380 196;3 380 196;-3 380 196" dur="1.6s" repeatCount="indefinite"/></g>
<rect x="340" y="196" width="80" height="30" rx="7" class="f1"/>
<circle cx="356" cy="228" r="6" style="fill:var(--vline)"/><circle cx="404" cy="228" r="6" style="fill:var(--vline)"/>
<text x="398" y="110" font-size="16" class="tb v-float" style="fill:var(--c3)">+1 😊</text>
<animateTransform attributeName="transform" type="translate" values="0 0;300 0;300 0" keyTimes="0;0.85;1" dur="8s" repeatCount="indefinite"/>
</g>
<text x="712" y="160" text-anchor="end" font-size="16" class="tb" style="fill:var(--c5)" opacity="0">ตกราง! จบตอน
<animate attributeName="opacity" values="0;1" keyTimes="0;0.85" calcMode="discrete" dur="8s" repeatCount="indefinite"/></text>
<text x="380" y="286" text-anchor="middle" font-size="14">แก้: เพิ่มองค์ประกอบเรื่องตำแหน่งรถ (shaped reward) · ทดสอบรางวัลกับนโยบายที่รู้คำตอบก่อนฝึก</text>
</svg>`,
  caption: 'agent ทำตามที่เราเขียน ไม่ใช่ที่เราคิด (reward hacking / specification gaming) · หลักออกแบบ: นโยบายที่ดีต้องได้ Return สูงกว่านโยบายแย่ และวัดผลด้วยตัวชี้วัดงานจริง (จำนวนก้าว, การไหลของรถ)'
},

/* ======================= Section 9: Summary ======================= */
{
  id: 'summary-map', section: 'summary', pos: 'top', kind: 'ภาพนิ่ง',
  title: 'สรุปทั้งบทใน 5 ช่อง + RL ในโมเดลภาษา',
  html: `<svg viewBox="0 0 760 414" role="img" aria-label="สรุป 5 ข้อ">
<rect x="10" y="10" width="140" height="190" rx="14" class="f1l"/><rect x="160" y="10" width="140" height="190" rx="14" class="f2l"/>
<rect x="310" y="10" width="140" height="190" rx="14" class="f3l"/><rect x="460" y="10" width="140" height="190" rx="14" class="f4l"/>
<rect x="610" y="10" width="140" height="190" rx="14" class="f5l"/>
<circle cx="34" cy="34" r="14" class="f1"/><circle cx="184" cy="34" r="14" class="f2"/><circle cx="334" cy="34" r="14" class="f3"/><circle cx="484" cy="34" r="14" class="f4"/><circle cx="634" cy="34" r="14" class="f5"/>
<g font-size="15" class="tw tb" text-anchor="middle"><text x="34" y="39">1</text><text x="184" y="39">2</text><text x="334" y="39">3</text><text x="484" y="39">4</text><text x="634" y="39">5</text></g>
<g font-size="30" text-anchor="middle"><text x="80" y="80">📐</text><text x="230" y="80">🎛️</text><text x="380" y="80">📋</text><text x="530" y="80">🧠</text><text x="680" y="80">🎯</text></g>
<g font-size="15" class="tb" text-anchor="middle"><text x="80" y="114">MDP</text><text x="230" y="114">นโยบาย = สมการ</text><text x="380" y="114">Q-learning</text><text x="530" y="114">DQN</text><text x="680" y="114">รางวัล = งาน</text></g>
<g font-size="14" text-anchor="middle">
<text x="80" y="140">⟨S, A, P, R, γ⟩</text><text x="80" y="162">state ต้องมี</text><text x="80" y="184">ẋ และ <tspan font-family="Cambria,serif">θ̇</tspan></text>
<text x="230" y="140">y = σ(w·s)</text><text x="230" y="162">ปรับด้วย</text><text x="230" y="184">hill climbing</text>
<text x="380" y="140">วันนี้ = รางวัล</text><text x="380" y="162">+ γ × พรุ่งนี้</text><text x="380" y="184">ε-greedy</text>
<text x="530" y="140">Q-net + Replay</text><text x="530" y="162">+ Target</text><text x="530" y="184">= กันพัง</text>
<text x="680" y="140">−1 ต่อก้าว</text><text x="680" y="162">→ รีบล้ม!</text><text x="680" y="184">+1 → รถไหล</text></g>
<text x="380" y="232" text-anchor="middle" font-size="15" class="tb">RL ชุดเดียวกันนี้อยู่ในโมเดลภาษา (RLHF · L12–L13)</text>
<rect x="20" y="246" width="720" height="26" rx="6" class="f7l"/>
<g font-size="14" class="tb" text-anchor="middle"><text x="95" y="264">แนวคิด</text><text x="310" y="264">Cart-Pole</text><text x="595" y="264">LLM / reasoning model</text></g>
<g class="grid" stroke-width="1"><line x1="20" y1="298" x2="740" y2="298"/><line x1="20" y1="324" x2="740" y2="324"/><line x1="20" y1="350" x2="740" y2="350"/><line x1="20" y1="376" x2="740" y2="376"/></g>
<g font-size="14" class="tb" text-anchor="middle"><text x="95" y="290">policy</text><text x="95" y="316">action</text><text x="95" y="342">episode</text><text x="95" y="368">reward</text></g>
<g font-size="14" text-anchor="middle"><text x="310" y="290">σ(w·s) หรือ Q-network</text><text x="310" y="316">ซ้าย / ขวา</text><text x="310" y="342">จนล้ม หรือครบ 500</text><text x="310" y="368">+1 ต่อก้าว</text>
<text x="595" y="290">ตัว LLM เอง</text><text x="595" y="316">token ถัดไป</text><text x="595" y="342">คำตอบหนึ่งชุด</text><text x="595" y="368">reward model หรือ 1 ถ้าคำตอบตรวจผ่าน</text></g>
<text x="380" y="402" text-anchor="middle" font-size="14" class="tm">ต่อจากนี้: PPO / SAC (action ต่อเนื่อง) · RLHF · domain randomization (sim-to-real)</text>
</svg>`,
  caption: 'ถ้าจำได้แค่ 5 ช่องนี้ก็ตอบข้อสอบบทนี้ได้เกือบหมด — และเมื่อเรียน L12–L13 ให้นึกว่า LLM ก็คือ policy ที่เลือก token ทีละตัวแล้วได้รางวัลตอนจบคำตอบ'
}
]);
