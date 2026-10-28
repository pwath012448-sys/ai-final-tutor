/* Lecture 12 · NLP & Generative AI — web lesson */
TUTOR.addLesson({
  id: 'L12', num: 12,
  navTitle: 'NLP & Generative AI',
  title: 'NLP และพื้นฐาน Generative AI: จาก token สู่ Transformer และ LLM',
  short: 'Token · BPE · TF-IDF · Embedding · RNN/LSTM · Attention · Transformer · LLM · Decoding · RAG · LoRA',
  slides: 'Lecture 12 · 51 สไลด์',
  intro: 'บทนี้เล่าเรื่องเดียวตั้งแต่ต้นจนจบ: คอมพิวเตอร์เห็นข้อความเป็นตัวเลขได้อย่างไร แล้วค่อย ๆ “ใช้บริบท” ได้ดีขึ้นทีละยุค — นับคำ → เวกเตอร์ความหมาย → ความจำ (RNN) → การย้อนดู (attention) → Transformer → LLM ที่สร้างข้อความได้ ประโยคเดียวที่ต้องจำคือ “ความหมายของคำมาจากบริบท”',
  sections: [
    {
      id: 'intro', title: '1) ภาพรวม: ทำไมภาษายาก และเส้นทาง 6 ขั้น',
      html: `
<p>ลองนึกว่าเราต้องสอนคอมพิวเตอร์ที่เข้าใจแต่ตัวเลขให้อ่านรีวิวร้านอาหาร ปัญหาแรกคือ “ข้อความ” ไม่ใช่ตัวเลข ปัญหาที่สองคือแม้แปลงเป็นตัวเลขได้แล้ว ความหมายก็ยังซ่อนอยู่ใน <b>ลำดับ</b> และ <b>บริบท</b> ทั้งบทจึงเป็นการแก้ปัญหาทีละชั้น:</p>
<ol class="steps">
<li><b>ข้อความเป็นข้อมูล</b> — ตัดเป็น token (BPE) แล้วแปลงเป็น ID / one-hot / TF-IDF</li>
<li><b>Embedding</b> — ให้คำมีเวกเตอร์ความหมาย คำคล้ายอยู่ใกล้กัน (word2vec)</li>
<li><b>RNN &amp; LSTM</b> — อ่านทีละคำและ “จำ” สิ่งที่อ่านมา</li>
<li><b>Seq2seq + Attention</b> — แปลภาษาได้ และให้ decoder ย้อนดูทุกคำ</li>
<li><b>Transformer</b> — ใช้ attention ล้วน ๆ ทุกคำอ่านทุกคำพร้อมกัน (BERT, GPT, T5)</li>
<li><b>Generative AI</b> — LLM ทำนาย token ถัดไป + decoding + alignment + prompting</li>
</ol>
<div class="callout def"><span class="lb">นิยาม</span><b>NLP (Natural Language Processing)</b> = การทำให้คอมพิวเตอร์อ่าน เข้าใจ และสร้างภาษามนุษย์ · <b>Generative AI</b> = โมเดลที่เรียนการแจกแจงของข้อมูลได้ดีพอจะ <b>สุ่มสร้างตัวอย่างใหม่</b> ที่สมเหตุสมผล</div>
<h3>4 เหตุผลที่ภาษายากสำหรับเครื่อง (สไลด์ 4)</h3>
<table class="tbl"><tr><th>ความท้าทาย</th><th>ตัวอย่าง</th><th>ต้องแก้ด้วย</th></tr>
<tr><td>ความกำกวม (ambiguity)</td><td>“bank” = ตลิ่ง/ธนาคาร · “I saw her duck”</td><td>contextual embedding</td></tr>
<tr><td>ลำดับมีความหมาย</td><td>“dog bites man” ≠ “man bites dog”</td><td>โมเดลลำดับ / positional encoding</td></tr>
<tr><td>ความสัมพันธ์ระยะไกล</td><td>“The <b>keys</b> that the man left on the table <b>are</b> …”</td><td>LSTM / attention</td></tr>
<tr><td>ไม่มีช่องว่าง (ไทย)</td><td>ตากลม → ตา|กลม หรือ ตาก|ลม</td><td>ตัดคำ / subword</td></tr></table>
<h3>งาน NLP แบ่งตามรูปแบบผลลัพธ์</h3>
<table class="tbl"><tr><th>กลุ่มงาน</th><th>เข้า → ออก</th><th>ตัวอย่าง</th></tr>
<tr><td>Text classification</td><td>ลำดับ → 1 label</td><td>sentiment, spam, intent</td></tr>
<tr><td>Sequence labeling</td><td>ลำดับ → 1 label ต่อ token</td><td>NER, POS</td></tr>
<tr><td>Seq-to-seq</td><td>ลำดับ → ลำดับใหม่</td><td>แปลภาษา, สรุปความ, QA</td></tr>
<tr><td>Open generation</td><td>prompt → ข้อความต่อ</td><td>แชตบอต, เติมโค้ด</td></tr></table>
<details class="reveal"><summary>ลองคิดก่อน: “ตรวจว่าอีเมลเป็นสแปมไหม” กับ “หาชื่อคนในข่าว” เป็นงานกลุ่มไหน?</summary>สแปม = <b>text classification</b> (ทั้งอีเมล → 1 label) · หาชื่อคน = <b>sequence labeling / NER</b> (ทุก token ได้ label ของตัวเอง เช่น PERSON / O)</details>
<div class="callout key"><span class="lb">จำ</span>ภาษา “ไม่ต่อเนื่อง กำกวม และมีลำดับ” — โมเดลทุกยุคในบทนี้คือวิธีที่ดีขึ้นในการใช้ <b>บริบท</b></div>`
    },
    {
      id: 'token', title: '2) Token, Tokenizer และ BPE',
      html: `
<p>ขั้นแรกของทุกโมเดล NLP คือคำถามว่า <b>“token คืออะไร”</b> เพราะโมเดลไม่เห็นตัวอักษร มันเห็นแค่เลข ID</p>
<div class="formula">“Khon Kaen is great!” → ปรับรูปแบบ → khon · kaen · is · great · ! → [812, 5531, 14, 377, 0] → tensor B × T</div>
<div class="callout def"><span class="lb">นิยาม</span><b>Token</b> = หน่วยที่โมเดลอ่าน · <b>Tokenizer</b> = ตัวตัดข้อความเป็น token · <b>Vocabulary</b> = ชุด token ทั้งหมด (ขนาด V) · <b>Token ID</b> = เลขประจำ token · <b>[UNK]</b> = token แทนคำนอกคลัง · <b>[PAD]</b> = token เติมให้ทุกประโยคในแบตช์ยาว T เท่ากัน</div>
<table class="tbl"><tr><th>ระดับ</th><th>“unbelievable”</th><th>คลังคำ</th><th>ข้อดี / ข้อเสีย</th></tr>
<tr><td>คำ</td><td>unbelievable</td><td>100k+</td><td>คำใหม่ → [UNK]; “believe” กับ “unbelievable” ไม่แชร์อะไรกันเลย</td></tr>
<tr><td>ตัวอักษร</td><td>u·n·b·e·l·i·e·v…</td><td>~100</td><td>ไม่มีคำนอกคลัง แต่ลำดับยาวมาก แต่ละหน่วยแทบไม่มีความหมาย</td></tr>
<tr><td><b>Subword (BPE)</b></td><td>un·believ·able</td><td>30k–200k</td><td>สมดุลที่สุด → มาตรฐานปัจจุบัน</td></tr></table>
<h3>BPE ทำงานอย่างไร</h3>
<ol class="steps"><li>เริ่มจากตัวอักษรเดี่ยว ใส่ <code>&lt;/w&gt;</code> ท้ายคำ</li><li>นับ “คู่ที่อยู่ติดกัน” ทั้งคลัง โดยคูณด้วยความถี่ของคำ</li><li>รวมคู่ที่พบบ่อยที่สุดเป็นสัญลักษณ์ใหม่ (จดเป็น “กฎการรวม”)</li><li>ทำซ้ำจนคลังคำใหญ่ตามที่กำหนด</li></ol>
<div class="callout ex"><span class="lb">ตัวอย่างสไลด์ 6</span>คลังฝึก: low ×5, lower ×2, newest ×6, widest ×3 → ลำดับการรวม: e+s→es (9), es+t→est (9), est+&lt;/w&gt;→est&lt;/w&gt; (9), l+o→lo (7), lo+w→low (7), n+e→ne (6), ne+w→new (6), new+est&lt;/w&gt;→newest&lt;/w&gt; (6)<br>ทำไม e+s = 9? เพราะ “es” อยู่ใน newest (6 ครั้ง) และ widest (3 ครั้ง)</div>
<div class="demo" id="d-bpe"><h4>🔧 ลองเล่น: BPE ทีละขั้น</h4>
<div class="row"><label>คลังฝึก (คำ:ความถี่) <input type="text" class="corpus" value="low:5, lower:2, newest:6, widest:3" style="width:320px"></label></div>
<div class="row"><button class="step">รวม 1 ขั้น</button><button class="all ghost">รวม 8 ขั้น</button><button class="reset ghost">เริ่มใหม่</button></div>
<div class="row"><label>ตัดคำใหม่ด้วยกฎที่เรียนแล้ว <input type="text" class="word" value="lowest"></label><button class="seg ghost">ตัดคำ</button></div>
<div class="out"></div></div>
<details class="reveal"><summary>ลองคิดก่อน: “lowest” ไม่เคยอยู่ในคลังฝึก จะถูกตัดเป็นอะไร?</summary>ใช้กฎตามลำดับ: e+s, es+t, est+&lt;/w&gt;, l+o, lo+w → <b>low · est&lt;/w&gt;</b> = 2 token · ส่วน “lower” → low · e · r · &lt;/w&gt; (4 token) และ “newest” → newest&lt;/w&gt; (1 token)</details>
<div class="callout key"><span class="lb">จำ</span>คำที่พบบ่อยกลายเป็น token เดียว คำหายากแยกเป็นชิ้นที่ใช้ซ้ำได้ → <b>ไม่มีคำใดอยู่นอกคลังคำ</b></div>`
    },
    {
      id: 'tfidf', title: '3) One-hot, Bag-of-Words และ TF-IDF',
      html: `
<p>เมื่อได้ token แล้ว วิธีที่ง่ายที่สุดในการทำให้เป็นตัวเลขคือ “ให้แต่ละคำมีช่องของตัวเอง”</p>
<div class="callout def"><span class="lb">นิยาม</span><b>One-hot</b> = เวกเตอร์ยาว V ที่มีเลข 1 ช่องเดียว · <b>Bag-of-Words</b> = นับจำนวนแต่ละคำในเอกสาร (ทิ้งลำดับ) · <b>TF</b> = จำนวนครั้งที่คำ w อยู่ในเอกสาร d · <b>DF</b> = จำนวนเอกสารที่มีคำ w · <b>IDF</b> = ln(N/df) ความหายาก · <b>TF-IDF</b> = TF × IDF</div>
<div class="formula">idf(w) = ln( N / df(w) )        tf-idf(w, d) = tf(w, d) × idf(w)</div>
<div class="callout ex"><span class="lb">ตัวอย่างสไลด์ 7</span>d1 “good food good service”, d2 “bad food”, d3 “good room” (N = 3)<br>
df: good 2, food 2, service 1, bad 1, room 1 → idf: ln(3/2) = <b>0.41</b>, ln(3/1) = <b>1.10</b><br>
TF-IDF ของ d1: good = 2 × 0.41 = <b>0.81</b>, food = 0.41, service = <b>1.10</b> → “service” บอกลักษณะของ d1 ได้มากที่สุดเพราะหายาก</div>
<div class="demo" id="d-tfidf"><h4>🔧 ลองเล่น: เครื่องคำนวณ TF-IDF (หนึ่งบรรทัด = หนึ่งเอกสาร)</h4>
<textarea class="docs" style="width:100%;min-height:80px;font:inherit">good food good service
bad food
good room</textarea>
<div class="row"><button class="go">คำนวณ</button></div><div class="out"></div></div>
<div class="callout warn"><span class="lb">ข้อจำกัด (สไลด์ 8)</span><b>One-hot</b>: cos(cat, dog) = cos(cat, car) = 0 — ทุกคู่ต่างกันเท่ากันหมด และใช้ 10,000 ตัวเลขต่อคำ · <b>Bag-of-Words</b>: “dog bites man” กับ “man bites dog” ได้ [1, 1, 1] เหมือนกัน — ลำดับหายไป · TF-IDF ยังนิยมในการค้นหาด้วยคำสำคัญ แต่มองไม่เห็นลำดับและคำพ้องความหมาย</div>
<details class="reveal"><summary>ลองคิดก่อน: คำว่า “the” ที่อยู่ในทุกเอกสาร ได้ idf เท่าไร?</summary>ln(N/N) = ln 1 = <b>0</b> → TF-IDF = 0 เสมอ (คำทั่วไปถูกลดน้ำหนักจนหายไป)</details>`
    },
    {
      id: 'embed', title: '4) Word Embedding และ word2vec',
      html: `
<p>One-hot บอกไม่ได้ว่า cat ใกล้ dog มากกว่า car ทางแก้คือให้แต่ละคำมีเวกเตอร์ <b>สั้น หนาแน่น และเรียนรู้ได้</b> แล้วให้การฝึกจัดให้คำที่ใช้คล้ายกันอยู่ใกล้กัน</p>
<div class="callout def"><span class="lb">นิยาม</span><b>Embedding</b> = ตารางค้นหา E ขนาด V × d (d = 50–1,000) แถวละหนึ่ง token · การค้นหา = <b>one-hot × E</b> = เลือกแถวของคำนั้น (นี่คือสิ่งที่ <code>nn.Embedding(V, d)</code> ทำทั้งหมด)</div>
<table class="tbl"><tr><th>คำ</th><th>มิติ1</th><th>มิติ2</th><th>มิติ3</th></tr><tr><td>cat</td><td>0.9</td><td>0.8</td><td>0.1</td></tr><tr><td>kitten</td><td>0.9</td><td>1.0</td><td>0.0</td></tr><tr><td>dog</td><td>0.9</td><td>0.5</td><td>0.1</td></tr><tr><td>car</td><td>0.0</td><td>0.3</td><td>0.9</td></tr><tr><td>truck</td><td>0.1</td><td>0.0</td><td>1.0</td></tr></table>
<div class="formula">cos(u, v) = u·v / (‖u‖ ‖v‖)
cos(cat, dog) = 1.22 / (1.21 × 1.03) = 0.98
cos(cat, car) = 0.33 / (1.21 × 0.95) = 0.29</div>
<div class="demo" id="d-cos"><h4>🔧 ลองเล่น: cosine similarity</h4>
<div class="row"><label>u <input type="text" class="u" value="0.9, 0.8, 0.1"></label><label>v <input type="text" class="v" value="0.9, 0.5, 0.1"></label></div>
<div class="row"><button class="go">คำนวณ</button><button class="p1 ghost">cat vs dog</button><button class="p2 ghost">cat vs car</button><button class="p3 ghost">one-hot cat vs dog</button></div><div class="out"></div></div>
<h3>word2vec: เรียนความหมายจากเพื่อนบ้าน</h3>
<div class="callout def"><span class="lb">Distributional hypothesis</span>“เราจะรู้จักคำหนึ่งได้จากคำที่อยู่รอบข้างมัน” — drink a cup of <b>coffee</b> every morning: แทน coffee ด้วย tea แล้วบริบทยังเหมาะ → สองคำควรได้เวกเตอร์คล้ายกัน</div>
<table class="tbl"><tr><th></th><th>Skip-gram</th><th>CBOW</th></tr><tr><td>ทำนาย</td><td>คำกลาง → คำข้างเคียง</td><td>คำข้างเคียง → คำกลาง</td></tr><tr><td>เด่น</td><td>ดีกับคำที่พบน้อย</td><td>ฝึกเร็วกว่า</td></tr></table>
<p>โครงข่าย skip-gram: one-hot “coffee” (V = 10,000) → E (V × d) → เวกเตอร์ d = 300 → softmax ทั้งคลังคำ ทำนาย “cup”, “of”, “every” · หลังฝึก <b>เก็บ E ไว้ ทิ้งชั้น softmax</b> — งานทำนายเป็นแค่ข้ออ้าง ผลผลิตจริงคือตาราง embedding</p>
<figure class="slide"><img src="img/L12_p12.jpg" alt=""><figcaption>สไลด์ 12 · ความหมายกลายเป็นเรขาคณิต: king − man + woman ≈ queen · Bangkok − Thailand + Japan ≈ Tokyo</figcaption></figure>
<p><b>GloVe</b> ใช้สถิติการปรากฏร่วมทั้งคลังข้อความ · <b>fastText</b> เพิ่มชิ้นส่วน subword จึงรองรับคำที่ไม่เคยพบ</p>
<div class="callout warn"><span class="lb">สิ่งที่ embedding แบบคงที่ทำไม่ได้ (สไลด์ 13)</span>① หนึ่งเวกเตอร์ต่อหนึ่งคำ: “river <b>bank</b>” กับ “the <b>bank</b> approved my loan” ได้จุดเดียวกัน ② เฉลี่ยเวกเตอร์คำ → ลำดับหาย: mean(dog, bites, man) เท่ากันทั้งสองประโยค → แก้ลำดับด้วย RNN (ส่วนถัดไป) แก้บริบทด้วย attention</div>
<details class="reveal"><summary>ลองคิดก่อน: E ขนาด V = 10,000, d = 300 มีพารามิเตอร์กี่ตัว?</summary>10,000 × 300 = <b>3,000,000</b> ตัว (ทุกช่องของตารางเรียนรู้ได้)</details>`
    },
    {
      id: 'rnn', title: '5) RNN: อ่านทีละคำและจำ',
      html: `
<p>วิธีแก้ “ลำดับหาย” ที่ตรงที่สุดคืออ่านทีละคำเหมือนคน แล้วเก็บ “ความจำ” ไว้ในเวกเตอร์ที่อัปเดตทุกคำ</p>
<div class="callout def"><span class="lb">นิยาม</span><b>RNN</b> = โครงข่ายที่วนซ้ำ อ่าน token ทีละตัว · <b>hidden state h<sub>t</sub></b> = ความจำที่สรุป token 1…t ในเวกเตอร์ขนาดคงที่ · ใช้ <b>น้ำหนักชุดเดียวกันทุกขั้นเวลา</b> (เหมือน kernel ของ CNN ใช้ทั้งภาพ) · รับได้ทุกความยาว</div>
<div class="formula">h_t = tanh( W_hh · h_(t−1) + W_xh · x_t + b ),   h_0 = 0</div>
<figure class="slide"><img src="img/L12_p15.jpg" alt=""><figcaption>สไลด์ 15 · “the movie was great” → h₄ → positive 0.93</figcaption></figure>
<div class="callout ex"><span class="lb">คำนวณด้วยมือ (สไลด์ 16)</span>W<sub>xh</sub> = [0.8, −0.4], W<sub>hh</sub> = [[0.5, −0.2], [0.3, 0.6]], b = 0, x = (0.1, 0.4, 0.0, 1.0)<br>
t=1: a₁ = [0.08, −0.04] → h₁ = [0.08, −0.04]<br>
t=2: W<sub>xh</sub>·0.4 = [0.32, −0.16]; W<sub>hh</sub>·h₁ = [0.5·0.08 + (−0.2)(−0.04), 0.3·0.08 + 0.6·(−0.04)] = [0.05, 0.00] → a₂ = [0.37, −0.16] → h₂ = [0.35, −0.16]<br>
t=3: x₃ = 0 → a₃ = W<sub>hh</sub>·h₂ = [0.21, 0.01] → h₃ = tanh(a₃) = [0.20, 0.01] (สไลด์พิมพ์ h₃ = [0.21, 0.01] ซึ่งปัดผิดเล็กน้อย: tanh(0.2078) = 0.2049 ≈ 0.20; ไม่กระทบ a₄, h₄)<br>
t=4: a₄ = [0.90, −0.33] → <b>h₄ = [0.72, −0.32]</b><br>
อ่านผล: z = 2.0·0.72 − 1.5·(−0.32) = 1.91 → P(positive) = σ(1.91) = <b>0.87</b> · ลำดับกลับ → 0.63</div>
<div class="demo" id="d-rnn"><h4>🔧 ลองเล่น: RNN 2 มิติทีละขั้น</h4>
<div class="row"><label>W_xh <input type="text" class="wx" value="0.8, -0.4"></label><label>W_hh (แถว1; แถว2) <input type="text" class="wh" value="0.5, -0.2, 0.3, 0.6"></label><label>b <input type="text" class="b" value="0, 0"></label></div>
<div class="row"><label>x (ตามลำดับคำ) <input type="text" class="xs" value="0.1, 0.4, 0.0, 1.0"></label><label>readout w <input type="text" class="ro" value="2.0, -1.5"></label></div>
<div class="row"><button class="go">คำนวณ</button><button class="rev ghost">กลับลำดับคำ</button></div><div class="out"></div></div>
<table class="tbl"><tr><th>รูปแบบงาน (สไลด์ 17)</th><th>ตัวอย่าง</th></tr><tr><td>หลายต่อหนึ่ง</td><td>sentiment, สแปม</td></tr><tr><td>หนึ่งต่อหลาย</td><td>บรรยายภาพ, สร้างข้อความ</td></tr><tr><td>หลายต่อหลาย (ตรงกัน)</td><td>NER, POS</td></tr><tr><td>หลายต่อหลาย (seq2seq)</td><td>แปลภาษา, สรุปความ</td></tr></table>
<div class="callout key"><span class="lb">จำ</span>เซลล์เดิม — <b>งานเป็นตัวกำหนดว่าป้อนเข้าที่ใดและอ่านผลที่ใด</b> · RNN ทำให้ “dog bites man” กับ “man bites dog” ได้ hidden state ต่างกัน</div>`
    },
    {
      id: 'lstm', title: '6) Vanishing gradient และ LSTM',
      html: `
<p>การฝึก RNN ใช้ <b>BPTT (Backpropagation Through Time)</b>: คลี่ RNN ตามเวลาแล้ว backprop ปัญหาคือ gradient ที่จะไปถึงคำแรกต้อง <b>คูณผ่านทุกขั้น</b></p>
<div class="formula">∂L/∂h_1 = ∂L/∂h_T · ∏ (t = 2…T) ∂h_t/∂h_(t−1)</div>
<div class="demo" id="d-vanish"><h4>🔧 ลองเล่น: ตัวคูณต่อขั้นยกกำลังจำนวน token</h4>
<div class="row"><label>ตัวคูณต่อขั้น <input type="range" class="f" min="0.5" max="1.5" step="0.01" value="0.9"></label><label>จำนวน token <input type="range" class="n" min="1" max="100" step="1" value="50"></label></div><div class="out"></div></div>
<div class="callout warn"><span class="lb">สองอาการ</span><b>Vanishing</b> (0.9⁵⁰ ≈ 0.005): error ที่ “are” สอนเรื่อง “keys” ไม่ได้ → RNN พื้นฐานจำได้ ~10–20 token · <b>Exploding</b> (1.1⁵⁰ ≈ 117): ฝึกไม่ลู่เข้า → แก้ด้วย <b>gradient clipping</b> (<code>clip_grad_norm_</code>) · ส่วน vanishing แก้ด้วยการเปลี่ยนเซลล์เป็น LSTM/GRU</div>
<div class="callout def"><span class="lb">นิยาม LSTM</span>เซลล์ที่มี <b>cell state c<sub>t</sub></b> เป็นทางด่วนของความจำ และ <b>เกต</b> 3 ตัว (ค่า 0–1 จาก sigmoid): <b>forget f</b> = ลบอะไรออก (f ≈ 1 = เก็บ) · <b>input i</b> = เขียนเนื้อหาใหม่ c̃ เท่าไร · <b>output o</b> = ส่งส่วนใดออกเป็น h<sub>t</sub></div>
<div class="formula">f, i, o = σ( W·[h_(t−1), x_t] + b )
c_t = f ⊙ c_(t−1) + i ⊙ c̃_t        ← บวก ไม่ใช่คูณซ้ำ
h_t = o ⊙ tanh(c_t)</div>
<figure class="slide"><img src="img/L12_p19.jpg" alt=""><figcaption>สไลด์ 19 · เกตเรียนรู้ว่าเมื่อใดควรจำ เมื่อใดควรลืม</figcaption></figure>
<div class="callout key"><span class="lb">หัวใจ</span>c<sub>t</sub> = f·c + i·c̃ เป็นการ <b>บวก</b> → gradient ไหลย้อนผ่านได้โดยไม่หดเป็นทวีคูณ — แนวคิดเดียวกับ <b>skip connection ของ ResNet</b> (L11) → จำได้หลายร้อย token</div>
<div class="callout ex"><span class="lb">นับพารามิเตอร์ตัวจำแนก LSTM (สไลด์ 20)</span>Embedding 10,000 × 128 = 1,280,000 · LSTM 128→256 = 4 × (128·256 + 256·256 + 2·256) = 395,264 · Linear 256→2 = 514 · <b>รวม 1,675,778</b> (embedding ≈ 76%)</div>
<details class="reveal"><summary>ลองคิดก่อน: ทำไม LSTM มีเลข 4 ในสูตรพารามิเตอร์?</summary>เพราะมี 4 ชุดน้ำหนักที่ขนาดเท่ากัน: forget, input, output gate และ candidate c̃ — แต่ละชุดมี W สำหรับ x (d×h), W สำหรับ h (h×h) และ bias (PyTorch มี bias 2 ชุด จึงเป็น 2h)</details>`
    },
    {
      id: 'attention', title: '7) Seq2seq และ Attention (Query · Key · Value)',
      html: `
<div class="callout def"><span class="lb">Seq2seq</span><b>Encoder</b> (RNN/LSTM) อ่านประโยคต้นทางจนได้ state สุดท้าย <b>c</b> → <b>Decoder</b> สร้างประโยคปลายทางทีละ token จาก &lt;sos&gt; ถึง &lt;eos&gt; โดยป้อนผลแต่ละตัวกลับเป็นอินพุตขั้นถัดไป</div>
<figure class="slide"><img src="img/L12_p22.jpg" alt=""><figcaption>สไลด์ 22 · the cat sat on the mat → c → แมว นั่ง บน เสื่อ</figcaption></figure>
<div class="callout warn"><span class="lb">คอขวด</span>ประโยค 6 คำหรือ 60 คำต้องอัดลงเวกเตอร์ c ขนาดเท่ากัน → ประโยคยาวข้อมูลหาย</div>
<h3>Attention: ให้ decoder ย้อนดูทุกคำ</h3>
<ol class="steps"><li><b>ให้คะแนน</b> score(s<sub>t</sub>, h<sub>j</sub>) ระหว่าง decoder state กับ encoder state ทุกตัว</li><li><b>softmax</b> ตาม j → น้ำหนัก α<sub>tj</sub> รวมกัน = 1</li><li><b>ผสม</b> c<sub>t</sub> = Σ α<sub>tj</sub> h<sub>j</sub> — context vector ใหม่สำหรับทุกคำที่สร้าง</li></ol>
<figure class="slide"><img src="img/L12_p23.jpg" alt=""><figcaption>สไลด์ 23 · น้ำหนัก attention ตอนแปล EN→TH (แต่ละแถวรวม 1) — ตีความได้ด้วย</figcaption></figure>
<p><b>Query–Key–Value</b> คือการมอง attention เป็นการค้นหาในพจนานุกรม: <b>Query</b> = สิ่งที่ตำแหน่งนี้มองหา (คำค้น) · <b>Key</b> = สิ่งที่แต่ละตำแหน่งเสนอให้จับคู่ (ชื่อหนังสือ) · <b>Value</b> = เนื้อหาที่ส่งมอบ (เนื้อหาหนังสือ)</p>
<div class="callout key"><span class="lb">ทำไมต้อง “อ่อน”</span>Python dict: <code>capital["Japan"]</code> ต้องตรง key ตัวเดียวพอดี → หาอนุพันธ์ไม่ได้ เรียนรู้ไม่ได้ · Attention: ทุก key ตรงบางส่วน ผลลัพธ์ = ผสมถ่วงน้ำหนักของ value ทั้งหมด → gradient ไหลได้</div>
<div class="demo" id="d-lookup"><h4>🔧 ลองเล่น: ค้นแบบอ่อน (สไลด์ 25)</h4>
<div class="row"><label>query q <input type="text" class="q" value="0, 2"></label><button class="go">คำนวณ</button><button class="q8 ghost">q = [0, 8]</button></div>
<div class="row"><label>keys → value (บรรทัดละตัว)</label></div>
<textarea class="kv" style="width:100%;min-height:70px;font:inherit">Thailand: 1, 0 = Bangkok
Japan: 0, 1 = Tokyo
Korea: 0.4, 0.8 = Seoul</textarea><div class="out"></div></div>
<details class="reveal"><summary>ลองคิดก่อน: q = [0, 2] ได้น้ำหนักเท่าไร และถ้า q = [0, 8] จะเป็นอย่างไร?</summary>คะแนน q·k = 0, 2, 1.6 → softmax = <b>0.07, 0.55, 0.37</b> (ส่วนใหญ่ Tokyo มี Seoul ปน) · q = [0, 8] → คะแนน 0, 8, 6.4 → <b>0.00, 0.83, 0.17</b> คะแนนสูงขึ้น = น้ำหนักคมขึ้น เข้าใกล้การค้นแบบตายตัว</details>`
    },
    {
      id: 'transformer', title: '8) Self-attention และ Transformer',
      html: `
<p>Transformer ตัด RNN ทิ้งทั้งหมด ให้ <b>ทุก token สนใจทุก token</b> พร้อมกันด้วย self-attention</p>
<div class="formula">① ฉาย:   Q = X·W_Q,  K = X·W_K,  V = X·W_V
② คะแนน: S = Q·Kᵀ                     (n × n)
③ ปรับ:   A = softmax( S / √d_k )      (ทีละแถว)
④ ผสม:   Z = A·V
Attention(Q, K, V) = softmax(QKᵀ / √d_k) · V</div>
<p>ตัวอย่าง “The animal didn't cross the street because <b>it</b> was tired”: “it” ส่ง query หาคำนามที่อ้างถึง → key ของ “animal” ตรงที่สุด (น้ำหนัก 0.55, street 0.18) → value ของ animal ถูกผสมเข้าเวกเตอร์ใหม่ของ “it”</p>
<div class="callout ex"><span class="lb">I love AI (สไลด์ 28)</span>Q = K = X: I [1,0], love [1,1], AI [0,1] · V: [2,0], [1,1], [0,2] · แถว love: (1, 2, 1)/√2 = (0.71, 1.41, 0.71) → softmax (0.25, 0.50, 0.25) → 0.25·[2,0] + 0.5·[1,1] + 0.25·[0,2] = <b>[1, 1]</b></div>
<div class="demo" id="d-self"><h4>🔧 ลองเล่น: self-attention 3 token</h4>
<div class="row"><label>Q = K (3 แถว แต่ละแถว 2 ค่า) <input type="text" class="x" value="1,0; 1,1; 0,1" style="width:200px"></label><label>V <input type="text" class="v" value="2,0; 1,1; 0,2" style="width:200px"></label><label>token <input type="text" class="tok" value="I, love, AI" style="width:150px"></label></div>
<div class="row"><button class="go">คำนวณ</button></div><div class="out"></div></div>
<div class="callout key"><span class="lb">ทำไมหาร √d<sub>k</sub></span>ผลคูณจุดของเวกเตอร์ยาวมีค่าใหญ่ → softmax แหลม/อิ่มตัว gradient หาย · หาร √d<sub>k</sub> ให้คะแนนอยู่ในช่วงเหมาะสม</div>
<h3>บล็อกของ Transformer</h3>
<figure class="slide"><img src="img/L12_p29.jpg" alt="" style="max-width:420px"><figcaption>สไลด์ 29 · [masked multi-head self-attention → add &amp; norm → feed-forward → add &amp; norm] × N</figcaption></figure>
<table class="tbl"><tr><th>ส่วน</th><th>หน้าที่</th></tr><tr><td>Multi-head attention</td><td>h head ขนานกัน แต่ละ head ติดตามความสัมพันธ์ต่างแบบ</td></tr><tr><td>Feed-forward</td><td>MLP 2 ชั้นต่อ token = ที่เก็บความรู้ส่วนใหญ่</td></tr><tr><td>Residual + LayerNorm</td><td>x + Sublayer(x) แล้ว normalize (เทคนิค ResNet → 96 ชั้นได้)</td></tr><tr><td>× N</td><td>BERT-base 12 ชั้น d=768 · GPT-3 96 ชั้น d=12,288 · 175B</td></tr></table>
<div class="callout def"><span class="lb">Positional encoding</span>self-attention ไม่รู้ลำดับ (มองประโยคเป็นถุงของ token) → บวกเวกเตอร์ตำแหน่งเข้ากับ embedding: PE(pos, 2i) = sin(pos/10000^(2i/d)), PE(pos, 2i+1) = cos(…) · BERT/GPT-2 เรียนรู้ตาราง · LLM ใหม่ใช้ RoPE (หมุน Q, K ตามตำแหน่ง)</div>
<figure class="slide"><img src="img/L12_p30.jpg" alt=""><figcaption>สไลด์ 30 · positional encoding แบบ sinusoid 60 ตำแหน่ง d = 64</figcaption></figure>
<table class="tbl"><tr><th></th><th>RNN/LSTM</th><th>Transformer</th></tr><tr><td>ประมวลผล</td><td>ทีละ token</td><td>ทุก token พร้อมกัน</td></tr><tr><td>คำห่างกัน</td><td>O(n) ขั้น สัญญาณจาง</td><td>1 ขั้น</td></tr><tr><td>GPU</td><td>ขนานตามเวลาไม่ได้</td><td>คูณเมทริกซ์ใหญ่ เร็ว</td></tr><tr><td>ต้นทุน/ชั้น</td><td>O(n·d²)</td><td>O(n²·d) (4,096 token → 16.8M คะแนน, 128k → 16.4B)</td></tr></table>
<h3>สามตระกูล</h3>
<table class="tbl"><tr><th>ตระกูล</th><th>วิธีฝึก</th><th>ใช้กับ</th></tr><tr><td>Encoder-only (BERT)</td><td>attention 2 ทิศ · เติม [MASK]</td><td>จำแนก, NER, embedding</td></tr><tr><td>Decoder-only (GPT, Llama)</td><td>causal mask · ทำนาย token ถัดไป</td><td>สร้างข้อความ, แชต = LLM</td></tr><tr><td>Encoder–decoder (T5, BART)</td><td>cross-attention</td><td>แปล, สรุป</td></tr></table>
<div class="grid2"><figure class="slide"><img src="img/L12_p32.jpg" alt=""><figcaption>สไลด์ 32 · causal mask: ช่องอนาคต = −∞ ก่อน softmax</figcaption></figure>
<figure class="slide"><img src="img/L12_p33.jpg" alt=""><figcaption>สไลด์ 33 · contextual embedding: “bank” มีหลายจุดตามการใช้</figcaption></figure></div>
<details class="reveal"><summary>ลองคิดก่อน: ตัวกรองสแปม · แชตบอต · แปล EN→TH ควรใช้ตระกูลไหน?</summary>สแปม → encoder-only (BERT) · แชตบอต → decoder-only (GPT) · แปล → encoder–decoder (T5) หรือ LLM decoder-only ขนาดใหญ่</details>`
    },
    {
      id: 'genai', title: '9) Generative AI, Diffusion และ LLM',
      html: `
<table class="tbl"><tr><th></th><th>Discriminative</th><th>Generative</th></tr><tr><td>เรียน</td><td>p(y | x)</td><td>p(x) หรือ p(x | prompt)</td></tr><tr><td>ทำ</td><td>ให้ label: cat, positive</td><td>สุ่มสร้างข้อมูลใหม่</td></tr></table>
<table class="tbl"><tr><th>4 ตระกูล generative</th><th>แนวคิด</th></tr><tr><td>Autoregressive</td><td>p(x) = ∏ p(x<sub>t</sub> | x<sub>&lt;t</sub>) สร้างทีละ token (GPT)</td></tr><tr><td>VAE</td><td>เข้ารหัสเป็นการแจกแจงในปริภูมิแฝงแล้วถอดรหัส</td></tr><tr><td>GAN</td><td>generator แข่ง discriminator (minimax, L03) คมแต่ไม่เสถียร</td></tr><tr><td>Diffusion</td><td>เรียนการกำจัดสัญญาณรบกวนทีละขั้น (Stable Diffusion, DALL·E)</td></tr></table>
<figure class="slide"><img src="img/L12_p36.jpg" alt=""><figcaption>สไลด์ 36 · เติม noise ทีละขั้นจนเป็น noise ล้วน (คงที่) แล้วโครงข่ายเรียนย้อนกลับ</figcaption></figure>
<div class="formula">x_t = √ᾱ_t · x_0 + √(1 − ᾱ_t) · ε
loss = ‖ ε − ε_θ(x_t, t, prompt) ‖²      (โครงข่ายทำนาย noise ที่เติม)</div>
<div class="callout key"><span class="lb">Diffusion ในประโยคเดียว</span>การทำลายข้อมูลง่าย — โครงข่ายที่เรียนย้อนกลับทีละน้อย (โดยมี text encoder ชี้นำ) จึงสร้างภาพใหม่จาก noise ได้</div>
<h3>LLM = ตัวทำนาย token ถัดไป</h3>
<figure class="slide"><img src="img/L12_p37.jpg" alt=""><figcaption>สไลด์ 37 · The cat sat on the → mat 0.44, floor 0.24, sofa 0.16 … ต่อ token ที่สุ่มได้แล้วทำซ้ำ</figcaption></figure>
<div class="formula">P(x_1 … x_T) = ∏ P(x_t | x_1 … x_(t−1))        loss = − Σ log P(x_t | x_&lt;t)</div>
<p>ตอนฝึก: ทุกตำแหน่งของทุกเอกสารคือโจทย์จำแนก “token ถัดไปคืออะไร” · ตอนใช้: 1 forward pass ต่อ 1 token · แชต แปล เขียนโค้ด ล้วนเกิดจากเป้าหมายเดียวนี้เมื่อขยายขนาด → <b>LLM คือตัวจำแนกบนคลังคำ ที่ถูกใช้ซ้ำหนึ่งครั้งต่อหนึ่ง token</b></p>`
    },
    {
      id: 'decoding', title: '10) Decoding, ขั้นการฝึก, ขนาด และ Prompt',
      html: `
<div class="formula">p_i = exp(z_i / T) / Σ_j exp(z_j / T)        (z = logit, T = temperature)</div>
<table class="tbl"><tr><th>วิธี</th><th>ทำอะไร</th></tr><tr><td>Greedy</td><td>เลือกอันดับ 1 เสมอ แน่นอนแต่วนซ้ำ</td></tr><tr><td>Temperature</td><td>T ต่ำ = คม/มุ่งเป้า · T สูง = แบน/สร้างสรรค์</td></tr><tr><td>Top-k</td><td>สุ่มเฉพาะ k ตัวที่ดีที่สุด</td></tr><tr><td>Top-p (nucleus)</td><td>เซตเล็กที่สุดที่ความน่าจะเป็นรวม ≥ p</td></tr></table>
<figure class="slide"><img src="img/L12_p38.jpg" alt=""><figcaption>สไลด์ 38 · T = 0.5 / 1.0 / 2.0 — โมเดลเดียวกันเป็นได้ทั้งแม่นยำและสร้างสรรค์</figcaption></figure>
<div class="demo" id="d-decode"><h4>🔧 ลองเล่น: temperature · top-k · top-p</h4>
<div class="row"><label>token <input type="text" class="tok" value="mat, floor, sofa, chair, roof, moon" style="width:260px"></label><label>logits <input type="text" class="z" value="3.0, 2.39, 1.99, 1.41, 0.82, -0.79" style="width:230px"></label></div>
<div class="row"><label>T <input type="range" class="t" min="0.1" max="3" step="0.1" value="1"></label><label>top-k <input type="number" class="k" min="1" max="10" value="3"></label><label>top-p <input type="number" class="p" min="0.05" max="1" step="0.05" value="0.9"></label><button class="samp ghost">สุ่ม 1 token</button></div>
<canvas class="cv" width="640" height="220"></canvas><div class="out"></div></div>
<details class="reveal"><summary>ลองคิดก่อน (สไลด์ 50 Q4): logit [2, 1, 0], T = 1 — greedy เลือกอะไร และ top-p 0.9 เหลือ token ใด?</summary>p = (0.67, 0.24, 0.09) → greedy เลือก token 1 · สะสม 0.67, 0.91 → ถึง 0.9 ที่ token 2 → เหลือ <b>token 1 และ 2</b> (สไลด์ปัด 0.245 เป็น 0.25)</details>
<h3>จากตัวทำนาย token สู่ผู้ช่วย (สไลด์ 39)</h3>
<ol class="steps"><li><b>Pretraining</b>: ทำนาย token ถัดไปบนข้อความหลายล้านล้าน token → ความรู้ ภาษา การให้เหตุผล (ใช้ compute ส่วนใหญ่)</li><li><b>SFT</b>: คู่ (คำสั่ง, คำตอบดี) หลายพันคู่ → ทำตามคำสั่งในรูปแบบที่ต้องการ</li><li><b>Preference alignment</b>: มนุษย์จัดอันดับ → reward model → RL (PPO) หรือ DPO → มีประโยชน์ ซื่อตรง ไม่เป็นอันตราย</li></ol>
<div class="callout key"><span class="lb">จำ</span>Pretraining ให้ <b>ความรู้</b> · fine-tuning + preference ให้ <b>มารยาท</b> · Scaling laws: loss ลดอย่างคาดการณ์ได้เมื่อเพิ่มพารามิเตอร์/ข้อมูล/compute · <b>Chinchilla</b>: ~20 token ต่อพารามิเตอร์ (70B บน 1.4T token ชนะ Gopher 280B) · GPT-3 ทำ in-context learning ได้</div>
<h3>Prompt engineering = โปรแกรมโมเดลด้วยภาษา</h3>
<table class="tbl"><tr><th>เทคนิค</th><th>ตัวอย่าง</th></tr><tr><td>Zero-shot</td><td>“จำแนกความรู้สึกเป็น positive หรือ negative”</td></tr><tr><td>Few-shot</td><td>ให้คู่ตัวอย่าง 2–5 คู่ (in-context learning ไม่ต้องฝึก)</td></tr><tr><td>Chain-of-thought</td><td>“คิดทีละขั้น” สำหรับคณิต/ตรรกะ</td></tr><tr><td>Role / system prompt</td><td>“คุณคือผู้ช่วยสอนรายวิชา AI ชั้นปีที่ 1 …”</td></tr><tr><td>Structured output</td><td>กำหนด key ของ JSON</td></tr><tr><td>Self-consistency</td><td>สุ่มหลายเส้นที่ T &gt; 0 แล้วโหวต</td></tr></table>
<div class="callout ex"><span class="lb">แม่แบบ prompt ที่ดี (สไลด์ 42)</span>[ROLE] sentiment analyst · [TASK] positive/negative/mixed · [CONTEXT] รีวิวไทย-อังกฤษ, บ่นเรื่องส่งอย่างเดียว = mixed · [EXAMPLES] “สินค้าดีมากส่งไว” → {"label":"positive"} · [FORMAT] เหตุผล 1 ประโยค แล้ว JSON · [INPUT] review · แบบอ่อน: “Is this review good?” (ไม่มี label รูปแบบ บริบท)</div>
<table class="tbl"><tr><th>LLM ผิดตรงไหน (สไลด์ 43)</th><th>แก้อย่างไร</th></tr><tr><td>Hallucination</td><td>RAG + ให้อ้างอิง</td></tr><tr><td>ความรู้มี cutoff</td><td>ค้นคืน / ค้นเว็บ</td></tr><tr><td>บริบทจำกัด</td><td>แบ่ง สรุป ค้นคืน</td></tr><tr><td>คำนวณต้องแม่น</td><td>เรียก tool (เครื่องคิดเลข ตัวรันโค้ด)</td></tr><tr><td>อคติ / ความปลอดภัย</td><td>alignment ประเมิน มนุษย์กำกับ</td></tr><tr><td>ต้นทุน / ความหน่วง</td><td>โมเดลเล็ก distillation quantisation</td></tr></table>`
    },
    {
      id: 'ext', title: '11) RAG, LoRA, NLP ไทย และทบทวน',
      html: `
<figure class="slide"><img src="img/L12_p46.jpg" alt=""><figcaption>สไลด์ 46 · RAG: ออฟไลน์สร้างดัชนีเวกเตอร์ · ออนไลน์ค้น top-k ด้วย cosine แล้วใส่ใน prompt</figcaption></figure>
<div class="callout def"><span class="lb">RAG</span>“ค้นหาก่อน แล้วจึงตอบ” — โมเดลให้เหตุผล เอกสารให้ข้อเท็จจริง · ข้อดี: ความรู้ใหม่/เฉพาะองค์กรโดยไม่ต้องฝึกใหม่ · คำตอบอ้างอิงได้ · จุดล้ม: ค้นได้ชิ้นผิด → ตอบผิดอย่างมั่นใจ (ต้องประเมินการค้นคืนแยก)</div>
<div class="grid2"><div><figure class="slide"><img src="img/L12_p47.jpg" alt=""><figcaption>สไลด์ 47 · LoRA: ตรึง W ฝึกแค่ B·A</figcaption></figure></div>
<div><div class="callout def"><span class="lb">LoRA</span>h = W·x + B·A·x โดย W (d×d) ตรึงไว้ ฝึกแค่ B (d×r) และ A (r×d) · d = 4,096, r = 8 → 65,536 vs 16,777,216 (0.39%) · QLoRA เก็บ W แบบ 4 บิต · adapter เล็ก สลับงานได้ = transfer learning แบบ L11</div>
<div class="demo" id="d-lora"><h4>🔧 LoRA คิดเลข</h4><div class="row"><label>d <input type="number" class="d" value="4096"></label><label>r <input type="number" class="r" value="8"></label></div><div class="out"></div></div></div></div>
<p><b>NLP ภาษาไทย</b>: ไม่มีช่องว่างระหว่างคำ ต้องตัดคำ (pythainlp: “ฉันชอบเรียนปัญญาประดิษฐ์” → ['ฉัน', 'ชอบ', 'เรียน', 'ปัญญาประดิษฐ์']) หรือใช้ BPE/SentencePiece เรียนจากข้อความดิบ · tokenizer ที่เน้นอังกฤษใช้ token ต่อคำไทยมากกว่า (แพงขึ้น) · โมเดล: WangchanBERTa (encoder), Typhoon / OpenThaiGPT (decoder LLM)</p>
<h3>ศัพท์สำคัญ (สไลด์ 49)</h3>
<table class="tbl"><tr><th>คำ</th><th>ความหมาย</th></tr>
<tr><td>Token · BPE</td><td>หน่วยที่โมเดลอ่าน · รวมคู่ที่พบบ่อย</td></tr><tr><td>One-hot · TF-IDF</td><td>1 ช่องต่อคำ · การนับถ่วงด้วยความหายาก</td></tr><tr><td>Embedding</td><td>เวกเตอร์สั้น หนาแน่น เรียนรู้ได้ (แถวของ E)</td></tr><tr><td>Hidden state h<sub>t</sub></td><td>ความจำของ RNN หลังอ่าน token 1…t</td></tr><tr><td>LSTM · gates</td><td>เซลล์ที่เลือกเก็บ/เขียน/ส่งออก</td></tr><tr><td>Attention · Q/K/V</td><td>ค่าเฉลี่ยถ่วงน้ำหนักของ value จากการจับคู่ query–key</td></tr><tr><td>Positional encoding</td><td>ตำแหน่งที่บวกเข้ากับ embedding</td></tr><tr><td>LLM</td><td>Transformer decoder-only ขนาดใหญ่ทำนาย token ถัดไป</td></tr><tr><td>Logits · softmax</td><td>คะแนนดิบ · แปลงเป็นความน่าจะเป็นรวม 1</td></tr><tr><td>Pretraining · SFT · RLHF</td><td>ข้อความดิบ · ตัวอย่างคำสั่ง · ความชอบมนุษย์</td></tr><tr><td>Hallucination · RAG</td><td>ลื่นไหลแต่ไม่จริง · คำตอบอ้างอิงเอกสาร</td></tr></table>
<details class="reveal"><summary>Pause &amp; predict Q1 (สไลด์ 50): q = [1, 0], k₁ = [1, 0], k₂ = [0, 1], d<sub>k</sub> = 2 → น้ำหนัก?</summary>คะแนน (1, 0)/√2 = (0.71, 0) → softmax = <b>(0.67, 0.33)</b></details>
<details class="reveal"><summary>Pause &amp; predict Q2: ทำไม RNN พื้นฐานมีปัญหากับ “The keys that the man left on the table are …”?</summary>gradient หายไปตลอด 8 token — เกตของ LSTM หรือ attention ให้เส้นทางสั้นย้อนกลับไปถึง “keys”</details>
<div class="callout key"><span class="lb">สรุปทั้งบท</span>ตัดคำ (ID) → ฝังเวกเตอร์ (ความหมาย) → ใส่บริบท (RNN → attention → Transformer) → สร้าง (ทำนาย token ถัดไป, decoding, alignment, prompting)</div>`
    }
  ],
  quiz: [
    { q: 'ข้อใดคือเหตุผลหลักที่ BPE ไม่มีปัญหาคำนอกคลังคำ (OOV)?', c: ['เพราะเก็บทุกคำในพจนานุกรมไว้ล่วงหน้า', 'เพราะคำใหม่แยกเป็น subword/ตัวอักษรที่อยู่ในคลังได้เสมอ', 'เพราะแทนคำใหม่ด้วย [UNK]', 'เพราะใช้ TF-IDF ช่วยถ่วงน้ำหนัก'], a: 1, e: 'BPE เริ่มจากตัวอักษรเดี่ยวและรวมคู่ที่พบบ่อย คำที่ไม่เคยเห็น เช่น lowest จึงตัดเป็น low · est&lt;/w&gt; ได้เสมอ' },
    { q: 'N = 3 เอกสาร คำ w ปรากฏ 2 ครั้งในเอกสาร d และอยู่ใน 2 เอกสาร TF-IDF(w, d) = ?', c: ['0.41', '0.81', '1.10', '2.20'], a: 1, e: 'idf = ln(3/2) = 0.405 → tf-idf = 2 × 0.405 = 0.81 (ตรงกับ “good” ใน d1)' },
    { q: 'cos(cat, dog) เมื่อใช้ one-hot vector มีค่าเท่าใด?', c: ['1', '0.98', '0', '−1'], a: 2, e: 'one-hot ของคำต่างกันตั้งฉากกันเสมอ ผลคูณจุด = 0 → ไม่มีแนวคิดความคล้าย' },
    { q: 'nn.Embedding(V, d) ทำงานเทียบเท่ากับข้อใด?', c: ['คูณ one-hot ของ token กับเมทริกซ์ E (เลือกหนึ่งแถว)', 'คำนวณ TF-IDF', 'นับคู่ที่พบบ่อยแล้วรวม', 'ทำ softmax ทั้งคลังคำ'], a: 0, e: 'one-hot × E = แถวของคำนั้น — embedding คือตารางค้นหาที่เรียนรู้ได้' },
    { q: 'ใน RNN ตัวอย่างสไลด์ 16 ถ้ากลับลำดับคำ P(positive) เปลี่ยนจาก 0.87 เป็น 0.63 แสดงว่าอะไร?', c: ['RNN ไม่ใช้ weight sharing', 'ลำดับของคำมีผลต่อ hidden state', 'RNN เป็น bag-of-words', 'tanh ทำให้ผลสุ่ม'], a: 1, e: 'RNN ผสมคำใหม่กับความจำทีละขั้น ลำดับต่างกันจึงได้ h₄ ต่างกัน — ต่างจาก BoW หรือการเฉลี่ย embedding' },
    { q: 'เกตใดของ LSTM ตัดสินว่าจะลบข้อมูลเก่าออกจาก cell state?', c: ['Input gate', 'Output gate', 'Forget gate', 'Reset gate'], a: 2, e: 'c_t = f ⊙ c_(t−1) + i ⊙ c̃_t — f ≈ 0 คือลืม f ≈ 1 คือเก็บ' },
    { q: 'ทำไม c_t = f·c + i·c̃ ช่วยลด vanishing gradient?', c: ['เพราะใช้ ReLU', 'เพราะเป็นเส้นทางแบบบวกที่ gradient ผ่านได้โดยไม่ถูกคูณหดซ้ำ ๆ', 'เพราะลดจำนวนพารามิเตอร์', 'เพราะใช้ dropout'], a: 1, e: 'การปรับแบบบวกเป็น “ทางด่วน” ของ gradient แนวคิดเดียวกับ skip connection ของ ResNet' },
    { q: 'คอขวดของ seq2seq แบบไม่มี attention คืออะไร?', c: ['decoder สร้างคำพร้อมกันทุกคำ', 'ประโยคทั้งประโยคต้องบีบลงเวกเตอร์ c ขนาดคงที่ตัวเดียว', 'encoder ใช้ CNN', 'ไม่มี &lt;eos&gt;'], a: 1, e: 'ประโยค 6 หรือ 60 คำต้องอัดลง c ขนาดเท่ากัน attention แก้โดยสร้าง c_t ใหม่จากทุก h_j ทุกขั้น' },
    { q: 'query q = [0, 2], keys k = [1,0], [0,1], [0.4,0.8] น้ำหนัก attention (softmax ของ q·k) ใกล้เคียงข้อใด?', c: ['0.33, 0.33, 0.33', '0.07, 0.55, 0.37', '0.00, 1.00, 0.00', '0.12, 0.44, 0.44'], a: 1, e: 'คะแนน 0, 2, 1.6 → e⁰ : e² : e¹·⁶ = 1 : 7.39 : 4.95 → ÷13.34 = 0.07, 0.55, 0.37' },
    { q: 'เหตุใด Transformer ต้องมี positional encoding?', c: ['เพื่อลดขนาดโมเดล', 'เพราะ self-attention มองไม่เห็นลำดับของ token', 'เพื่อแทน softmax', 'เพื่อทำ causal mask'], a: 1, e: 'ถ้าไม่มี PE self-attention จะมองประโยคเป็นถุงของ token จึงต้องบวกตำแหน่งเข้ากับ embedding' },
    { q: 'โมเดลแบบใดฝึกด้วยการเติมคำในช่องว่าง [MASK] และเหมาะกับการจำแนก/NER?', c: ['GPT (decoder-only)', 'BERT (encoder-only)', 'T5 (encoder–decoder)', 'Diffusion'], a: 1, e: 'BERT ใช้ attention สองทิศทางและ masked language modeling' },
    { q: 'logits [2, 1, 0] ที่ T = 1 ใช้ top-p = 0.9 จะเหลือ token ใดให้สุ่ม?', c: ['token 1 เท่านั้น', 'token 1 และ 2', 'ทั้ง 3 token', 'token 2 และ 3'], a: 1, e: 'p = 0.67, 0.24, 0.09 → สะสม 0.67, 0.91 ≥ 0.9 → เซตเล็กสุดคือ token 1 และ 2' }
  ],
  init(root) {
    const T = TUTOR, $ = s => root.querySelector(s);
    const f3 = x => T.fmt(x, 3);
    /* ---- BPE ---- */
    (function () {
      const d = $('#d-bpe'); if (!d) return;
      let words, merges;
      function parse() {
        words = d.querySelector('.corpus').value.split(',').map(s => s.trim()).filter(Boolean).map(s => { const [w, c] = s.split(':'); return { sym: w.trim().split('').concat(['</w>']), c: +c || 1, w: w.trim() }; });
        merges = [];
      }
      function counts() { const m = new Map(); words.forEach(w => { for (let i = 0; i < w.sym.length - 1; i++) { const k = w.sym[i] + ' ' + w.sym[i + 1]; m.set(k, (m.get(k) || 0) + w.c); } }); return m; }
      function step() { const m = counts(); let best = null, bc = 0; m.forEach((v, k) => { if (v > bc) { bc = v; best = k; } }); if (!best) return false; const [a, b] = best.split(' '); merges.push([a, b, bc]); words.forEach(w => { const s = []; for (let i = 0; i < w.sym.length; i++) { if (i < w.sym.length - 1 && w.sym[i] === a && w.sym[i + 1] === b) { s.push(a + b); i++; } else s.push(w.sym[i]); } w.sym = s; }); return true; }
      function show(extra) {
        const m = counts(); const top = [...m.entries()].sort((x, y) => y[1] - x[1]).slice(0, 6).map(([k, v]) => k.replace(' ', '+') + ':' + v).join('  ');
        d.querySelector('.out').textContent = 'กฎการรวมที่เรียนแล้ว:\n' + (merges.length ? merges.map((m, i) => `${i + 1}. ${m[0]} + ${m[1]} → ${m[0] + m[1]}   (นับคู่ ${m[2]})`).join('\n') : '(ยังไม่มี)') + '\n\nคำในคลังตอนนี้:\n' + words.map(w => `${w.w} ×${w.c}:  ${w.sym.join(' · ')}`).join('\n') + '\n\nคู่ที่พบบ่อยที่สุดตอนนี้: ' + top + (extra ? '\n\n' + extra : '');
      }
      function seg(word) { let s = word.split('').concat(['</w>']); merges.forEach(([a, b]) => { const t = []; for (let i = 0; i < s.length; i++) { if (i < s.length - 1 && s[i] === a && s[i + 1] === b) { t.push(a + b); i++; } else t.push(s[i]); } s = t; }); return s; }
      parse(); show();
      d.querySelector('.step').onclick = () => { step(); show(); };
      d.querySelector('.all').onclick = () => { parse(); for (let i = 0; i < 8; i++) step(); show(); };
      d.querySelector('.reset').onclick = () => { parse(); show(); };
      d.querySelector('.corpus').onchange = () => { parse(); show(); };
      d.querySelector('.seg').onclick = () => { const w = d.querySelector('.word').value.trim(); const s = seg(w); show(`ตัด “${w}” ด้วยกฎ ${merges.length} ข้อ → ${s.join(' · ')}  (${s.length} token)`); };
    })();
    /* ---- TF-IDF ---- */
    (function () {
      const d = $('#d-tfidf'); if (!d) return;
      function go() {
        const docs = d.querySelector('.docs').value.split('\n').map(s => s.trim().toLowerCase()).filter(Boolean).map(s => s.split(/\s+/));
        const N = docs.length, vocab = [];
        docs.forEach(ws => ws.forEach(w => { if (!vocab.includes(w)) vocab.push(w); }));
        const tf = docs.map(ws => vocab.map(v => ws.filter(w => w === v).length));
        const df = vocab.map((v, j) => tf.filter(r => r[j] > 0).length);
        const idf = df.map(x => Math.log(N / x));
        const th = '<tr><th></th>' + vocab.map(v => `<th>${T.esc(v)}</th>`).join('') + '</tr>';
        const row = (lab, arr, dd) => `<tr><td><b>${lab}</b></td>${arr.map(x => `<td>${dd ? T.fmt(x, dd) : x}</td>`).join('')}</tr>`;
        let h = `<div class="tblwrap"><table class="tbl">${th}${tf.map((r, i) => row('TF d' + (i + 1), r)).join('')}${row('df', df)}${row('idf = ln(' + N + '/df)', idf, 2)}${tf.map((r, i) => row('TF-IDF d' + (i + 1), r.map((x, j) => x * idf[j]), 2)).join('')}</table></div>`;
        const outs = tf.map((r, i) => { let bj = 0; r.forEach((x, j) => { if (x * idf[j] > r[bj] * idf[bj]) bj = j; }); return `d${i + 1}: คำเด่นที่สุด = “${T.esc(vocab[bj])}” (${T.fmt(r[bj] * idf[bj], 2)})`; });
        d.querySelector('.out').innerHTML = h + outs.join('<br>');
      }
      d.querySelector('.go').onclick = go; go();
    })();
    /* ---- cosine ---- */
    (function () {
      const d = $('#d-cos'); if (!d) return;
      const go = () => { const u = T.nums(d.querySelector('.u').value), v = T.nums(d.querySelector('.v').value); if (u.length !== v.length) { d.querySelector('.out').textContent = 'ความยาวเวกเตอร์ต้องเท่ากัน'; return; } const dt = T.dot(u, v), nu = T.norm(u), nv = T.norm(v); d.querySelector('.out').textContent = `u·v = ${f3(dt)}\n‖u‖ = ${f3(nu)}   ‖v‖ = ${f3(nv)}\ncos = ${f3(dt)} / (${f3(nu)} × ${f3(nv)}) = ${nu && nv ? f3(dt / (nu * nv)) : 'หาไม่ได้ (เวกเตอร์ศูนย์)'}`; };
      const set = (a, b) => { d.querySelector('.u').value = a; d.querySelector('.v').value = b; go(); };
      d.querySelector('.go').onclick = go;
      d.querySelector('.p1').onclick = () => set('0.9, 0.8, 0.1', '0.9, 0.5, 0.1');
      d.querySelector('.p2').onclick = () => set('0.9, 0.8, 0.1', '0.0, 0.3, 0.9');
      d.querySelector('.p3').onclick = () => set('0, 0, 1, 0, 0', '0, 0, 0, 0, 1');
      go();
    })();
    /* ---- RNN ---- */
    (function () {
      const d = $('#d-rnn'); if (!d) return;
      const go = () => {
        const wx = T.nums(d.querySelector('.wx').value), wh = T.nums(d.querySelector('.wh').value), b = T.nums(d.querySelector('.b').value), xs = T.nums(d.querySelector('.xs').value), ro = T.nums(d.querySelector('.ro').value);
        let h = [0, 0]; const lines = ['t |   x  | W_xh·x          | W_hh·h(t-1)     | a_t             | h_t = tanh(a_t)'];
        xs.forEach((x, t) => {
          const A = [wx[0] * x, wx[1] * x], B = [wh[0] * h[0] + wh[1] * h[1], wh[2] * h[0] + wh[3] * h[1]];
          const a = [A[0] + B[0] + (b[0] || 0), A[1] + B[1] + (b[1] || 0)]; const nh = a.map(Math.tanh);
          const v = p => `[${T.fmt(p[0], 3)}, ${T.fmt(p[1], 3)}]`.padEnd(16);
          lines.push(`${t + 1} | ${String(x).padStart(4)} | ${v(A)}| ${v(B)}| ${v(a)}| ${v(nh)}`); h = nh;
        });
        const z = ro[0] * h[0] + ro[1] * h[1];
        lines.push(`\nz = ${ro[0]}·${T.fmt(h[0], 3)} + (${ro[1]})·${T.fmt(h[1], 3)} = ${T.fmt(z, 3)}   →   P(positive) = σ(z) = ${T.fmt(T.sigmoid(z), 3)}`);
        d.querySelector('.out').textContent = lines.join('\n');
      };
      d.querySelector('.go').onclick = go;
      d.querySelector('.rev').onclick = () => { const el = d.querySelector('.xs'); el.value = T.nums(el.value).reverse().join(', '); go(); };
      go();
    })();
    /* ---- vanishing ---- */
    (function () {
      const d = $('#d-vanish'); if (!d) return;
      const go = () => { const f = +d.querySelector('.f').value, n = +d.querySelector('.n').value; const v = Math.pow(f, n); d.querySelector('.out').textContent = `${f}^${n} = ${v < 1e-4 || v > 1e5 ? v.toExponential(2) : T.fmt(v, 4)}   →   ${v < 0.01 ? 'gradient หายไป (vanishing) — จำต้นประโยคไม่ได้' : v > 100 ? 'gradient ระเบิด (exploding) — ใช้ gradient clipping' : 'ยังพอส่งสัญญาณย้อนได้'}`; };
      d.querySelectorAll('input').forEach(i => i.oninput = go); go();
    })();
    /* ---- soft lookup ---- */
    (function () {
      const d = $('#d-lookup'); if (!d) return;
      const go = () => {
        const q = T.nums(d.querySelector('.q').value);
        const rows = d.querySelector('.kv').value.split('\n').map(s => s.trim()).filter(Boolean).map(s => { const m = s.match(/^(.*?):(.*?)=(.*)$/); return m ? { name: m[1].trim(), k: T.nums(m[2]), v: m[3].trim() } : null; }).filter(Boolean);
        const sc = rows.map(r => T.dot(q, r.k)), w = T.softmax(sc);
        d.querySelector('.out').textContent = rows.map((r, i) => `${r.name.padEnd(10)} q·k = ${T.fmt(sc[i], 2).padEnd(6)} α = ${T.fmt(w[i], 3).padEnd(6)} ${'█'.repeat(Math.round(w[i] * 30))}`).join('\n') + '\n\nผลลัพธ์ = ' + rows.map((r, i) => `${T.fmt(w[i], 2)}·${r.v}`).join(' + ');
      };
      d.querySelector('.go').onclick = go;
      d.querySelector('.q8').onclick = () => { d.querySelector('.q').value = '0, 8'; go(); };
      go();
    })();
    /* ---- self-attention ---- */
    (function () {
      const d = $('#d-self'); if (!d) return;
      const mat = s => s.split(';').map(r => T.nums(r));
      const go = () => {
        const X = mat(d.querySelector('.x').value), V = mat(d.querySelector('.v').value), tok = d.querySelector('.tok').value.split(',').map(s => s.trim());
        const dk = X[0].length, S = X.map(a => X.map(b => T.dot(a, b) / Math.sqrt(dk))), A = S.map(r => T.softmax(r));
        const Z = A.map(r => V[0].map((_, j) => r.reduce((s, w, i) => s + w * V[i][j], 0)));
        const fm = M => M.map((r, i) => (tok[i] || 't' + (i + 1)).padEnd(6) + r.map(x => T.fmt(x, 2).padStart(7)).join('')).join('\n');
        d.querySelector('.out').textContent = `S = QKᵀ/√${dk}:\n${fm(S)}\n\nA = softmax ทีละแถว:\n${fm(A)}\n\nZ = A·V:\n${fm(Z)}`;
      };
      d.querySelector('.go').onclick = go; go();
    })();
    /* ---- decoding ---- */
    (function () {
      const d = $('#d-decode'); if (!d) return;
      const cv = d.querySelector('.cv'), ctx = cv.getContext('2d');
      let last = '';
      const go = () => {
        const tok = d.querySelector('.tok').value.split(',').map(s => s.trim()), z = T.nums(d.querySelector('.z').value), Tm = +d.querySelector('.t').value, k = +d.querySelector('.k').value, pp = +d.querySelector('.p').value;
        const p = T.softmax(z, Tm); const order = p.map((x, i) => i).sort((a, b) => p[b] - p[a]);
        const inK = new Set(order.slice(0, k)); const inP = new Set(); let cum = 0; for (const i of order) { inP.add(i); cum += p[i]; if (cum >= pp - 1e-9) break; }
        const W = cv.width, H = cv.height, n = p.length, bw = (W - 40) / n; ctx.clearRect(0, 0, W, H); ctx.font = '13px sans-serif';
        p.forEach((x, i) => { const h = x * (H - 50); ctx.fillStyle = inP.has(i) && inK.has(i) ? '#1f5fa8' : inP.has(i) || inK.has(i) ? '#74a9e6' : '#c8d2df'; ctx.fillRect(20 + i * bw + 6, H - 30 - h, bw - 12, h); ctx.fillStyle = '#333'; ctx.fillText(T.fmt(x, 2), 20 + i * bw + 8, H - 34 - h); ctx.fillText((tok[i] || '?').slice(0, 8), 20 + i * bw + 8, H - 12); });
        d.querySelector('.out').textContent = `T = ${Tm}: p = [${p.map(x => T.fmt(x, 3)).join(', ')}]\ngreedy → ${tok[order[0]]}\ntop-${k} → {${order.slice(0, k).map(i => tok[i]).join(', ')}}\ntop-p ${pp} → {${[...inP].map(i => tok[i]).join(', ')}} (รวม ${T.fmt([...inP].reduce((s, i) => s + p[i], 0), 3)})\nแท่งน้ำเงินเข้ม = อยู่ทั้ง top-k และ top-p` + (last ? '\n' + last : '');
        return { p, tok, inK, inP };
      };
      d.querySelectorAll('input').forEach(i => i.oninput = () => { last = ''; go(); });
      d.querySelector('.samp').onclick = () => { const { p, tok, inK, inP } = go(); const ids = p.map((_, i) => i).filter(i => inK.has(i) && inP.has(i)); const s = ids.reduce((a, i) => a + p[i], 0); let r = Math.random() * s, pick = ids[0]; for (const i of ids) { r -= p[i]; if (r <= 0) { pick = i; break; } } last = `สุ่มได้: “${tok[pick]}” (สุ่มจากเซตที่ผ่านทั้ง top-k และ top-p แล้ว normalize ใหม่)`; go(); };
      go();
    })();
    /* ---- LoRA ---- */
    (function () {
      const d = $('#d-lora'); if (!d) return;
      const go = () => { const dd = +d.querySelector('.d').value, r = +d.querySelector('.r').value; const a = 2 * dd * r, f = dd * dd; d.querySelector('.out').textContent = `LoRA: 2·d·r = ${a.toLocaleString()}\nเต็ม: d² = ${f.toLocaleString()}\nสัดส่วน = ${T.fmt(100 * a / f, 3)}%`; };
      d.querySelectorAll('input').forEach(i => i.oninput = go); go();
    })();
  }
});
