/* Formula sheet page for Tutor.html */
(function () {
  const row = (f, m, ex) => `<tr><td><code>${f}</code></td><td>${m}</td><td>${ex || ''}</td></tr>`;
  const table = (title, id, rows) => `<h2 id="f-${id}"><a href="#/lesson/${id.toUpperCase()}">${title}</a></h2><div class="tblwrap"><table class="tbl"><tr><th style="width:36%">สูตร</th><th>ความหมาย / ใช้เมื่อไร</th><th style="width:26%">ตัวอย่างตัวเลข</th></tr>${rows.join('')}</table></div>`;
  const html = `
  <h1>🧮 สูตรทั้งหมด (Lecture 08–13)</h1>
  <p class="lead">รวมทุกสูตรที่ต้องคำนวณได้ในข้อสอบ พร้อมความหมายของสัญลักษณ์และตัวอย่างตัวเลขจากสไลด์ — กดชื่อบทในแต่ละตารางเพื่อกลับไปเรียนเนื้อหาเต็ม</p>
  <div class="chips noprint"><a href="#/formulas" onclick="document.getElementById('f-l08').scrollIntoView();return false">L08</a><a href="#/formulas" onclick="document.getElementById('f-l09').scrollIntoView();return false">L09</a><a href="#/formulas" onclick="document.getElementById('f-l10').scrollIntoView();return false">L10</a><a href="#/formulas" onclick="document.getElementById('f-l11').scrollIntoView();return false">L11</a><a href="#/formulas" onclick="document.getElementById('f-l12').scrollIntoView();return false">L12</a><a href="#/formulas" onclick="document.getElementById('f-l13').scrollIntoView();return false">L13</a><a href="#/formulas" onclick="document.getElementById('f-traps').scrollIntoView();return false">กับดัก</a></div>

  ${table('L08 · Perceptron → Deep Learning', 'l08', [
    row('z = wᵀx + b = Σ wᵢxᵢ + b', 'net input: ผลรวมถ่วงน้ำหนัก + bias (b = w₀ ที่คูณ x₀ = 1)', 'w=(0.5,0.5), b=0.5, x=(148,33.6) → z = 91.3'),
    row('ŷ = 1 ถ้า z ≥ 0, ไม่งั้น −1', 'step function ของ Perceptron (MCP ใช้ threshold θ และ output 0/1)', 'z=91.3 → ŷ=1'),
    row('w ← w + η(y − ŷ)x ; b ← b + η(y − ŷ)', 'กฎ Rosenblatt มาตรฐาน (ตรงกับโค้ด Lab) — ปรับเฉพาะตอนทายผิด เพราะ y−ŷ = 0 เมื่อทายถูก', 'y=−1, ŷ=1, η=0.1, x₁=85 → w₁ = 0.5 + 0.1(−2)(85) = −16.5'),
    row('w ← w − η(y − ŷ)x (สไลด์ 11–15)', '⚠️ สไลด์เขียนเครื่องหมายลบ — ถ้าโจทย์ให้ทำตามตัวอย่างในสไลด์ให้ใช้แบบนี้', 'ตัวอย่างสไลด์: w₁ = 0.5 − 0.1(−2)(85) = 17.5'),
    row('L(w) = ½ Σᵢ (yᵢ − f(zᵢ))²', 'SSE cost ของ Adaline (f(z)=z identity) — หาอนุพันธ์ได้', ''),
    row('∇w_j = −Σᵢ (yᵢ − f(zᵢ)) x_ij', 'gradient ของ SSE เทียบ w_j', ''),
    row('w_j ← w_j − η∇w_j = w_j + η Σᵢ (yᵢ − f(zᵢ)) x_ij', 'gradient descent: เดินสวนทางความชัน (SGD ใช้ทีละ 1 แถว)', 'η=0.0001, e=−90.3, x₁=148 → w₁ = 0.5 − 1.33644 = −0.83644'),
    row('x′ = (x − mean)/std', 'standardization ทำให้ทุก feature สเกลเท่ากัน → GD ลู่เข้าเร็ว, η เดิมใช้ได้', 'Lab: η=0.01 ระเบิดก่อน scale แต่ใช้ได้หลัง scale'),
    row('σ(z)=1/(1+e⁻ᶻ) · tanh(z) · ReLU=max(0,z) · softmax', 'activation: sigmoid/softmax ที่ output (2 คลาส/หลายคลาส), ReLU ในชั้นซ่อน, regression ไม่มี activation', ''),
    row('W₂(W₁x) = (W₂W₁)x = Wx', 'ไม่มี activation ไม่เชิงเส้น → ซ้อนกี่ชั้นก็ยังเป็นโมเดลเชิงเส้นชั้นเดียว', 'จึงแก้ XOR ไม่ได้'),
  ])}
  ${table('L09 · Unsupervised ML', 'l09', [
    row('d = √Σ(xⱼ − yⱼ)²', 'Euclidean (K-Means ใช้)', 'A(1,2), D(8,8) → √85 = 9.22'),
    row('d = Σ|xⱼ − yⱼ|', 'Manhattan — ไม่ถูกช่องว่างใหญ่ช่องเดียวครอบงำ', 'A, D → 7 + 6 = 13'),
    row('1 − x·y/(‖x‖‖y‖)', 'cosine distance — ดูทิศทาง ไม่สนขนาด', ''),
    row('J = Σᵢ ‖xᵢ − μ_z(i)‖²', 'objective ของ K-Means = WCSS = inertia = within-cluster SSE', '7 ลูกค้า K=2: 17.75 + 4.00 = 21.75'),
    row('μₖ = mean(สมาชิกของ k)', 'update step', 'mean(A,B,C,G) = (2.50, 2.75)'),
    row('O(n·K·d) ต่อรอบ ; ≈ O(R·T·n·K·d)', 'ต้นทุน Lloyd (R restarts, T iterations)', ''),
    row('s(i) = (b(i) − a(i)) / max(a(i), b(i))', 'silhouette: a = ระยะเฉลี่ยในกลุ่มตัวเอง, b = ระยะเฉลี่ยไปกลุ่มที่ใกล้ที่สุด (ทั้งกลุ่ม)', '≈+1 ดี · ≈0 อยู่ขอบ · <0 น่าจะผิดกลุ่ม'),
    row('single = min · complete = max · average = mean · Ward = ΔSSE', 'linkage ของ hierarchical clustering', '{0,1} กับ {4,6}: 3 / 6 / 4.5'),
    row('p(x) = Σⱼ πⱼ N(x | μⱼ, Σⱼ)', 'Gaussian mixture; rᵢⱼ = P(j|xᵢ) = soft membership', ''),
    row('μⱼ = Σᵢ rᵢⱼ xᵢ / Σᵢ rᵢⱼ', 'M-step ของ EM (ค่าเฉลี่ยถ่วงด้วย responsibility)', 'เลือกจำนวน component ด้วย BIC/AIC ต่ำกว่าดีกว่า'),
    row('core: |N_eps(x)| ≥ min_samples (นับตัวเอง)', 'DBSCAN: core / border (อยู่ใน eps ของ core) / noise = −1', 'x={0,.1,.2,.4,2}, eps=.21, ms=3 → core 0,.1,.2 · border .4 · noise 2'),
    row('Xc = X − mean ; Xc = USVᵀ ; Z = Xc·V_q', 'PCA: ฉายลงทิศที่เก็บ variance มากที่สุด (ไม่ใช่ clustering, ไม่ใช้ label)', 'λ = 6, 2/3 → PC1 = 90% ; (2,1) → 3/√2 ; recon (1.5,1.5)'),
    row('score(x) = minⱼ ‖transform(x) − μⱼ‖', 'anomaly score = ระยะถึง centroid ที่ใกล้สุด', 'threshold 99th percentile ⇒ flag ~1% โดยนิยาม'),
  ])}
  ${table('L10 · Reinforcement Learning', 'l10', [
    row('P(sₜ₊₁ | sₜ) = P(sₜ₊₁ | s₁,…,sₜ)', 'Markov property: อนาคตขึ้นกับปัจจุบันเท่านั้น', ''),
    row('P(2 วัน) = Σ เส้นทาง = แถวของ P²', 'Markov process ⟨S, P⟩', 'แดด→ฝนใน 2 วัน = 0.07+0.06+0.05 = 0.18'),
    row('MDP = ⟨S, A, P(s′|s,a), R(s,a), γ⟩', 'เพิ่ม action + reward + discount', 'Cart-Pole: S=(x,ẋ,θ,θ̇), A={ซ้าย,ขวา}, R=+1, γ=0.99'),
    row('Gₜ = rₜ₊₁ + γGₜ₊₁', 'Return แบบลดทอน (ไล่จากท้ายมาหน้า); ≤ 1/(1−γ)', 'r=1,1,1, γ=0.9: G=1, 1.9, 2.71 ; γ=0.99 → ≤100'),
    row('y = σ(w₀ + w₁x + w₂ẋ + w₃θ + w₄θ̇)', 'logistic policy: y > 0.5 → ขวา', 'w=(0,.1,.5,10,2), s=(.02,.1,.05,−.2) → z=.152, y=.538 → ขวา'),
    row('Q(s,a) ← Q(s,a) + α[r + γ maxₐ′Q(s′,a′) − Q(s,a)]', 'Q-learning (TD, model-free, off-policy); terminal → target = r', 'Q=0.5, r=1, γ=0.9, maxQ′=1, α=0.5 → 0.5+0.5(1.9−0.5) = 1.2'),
    row('P(best) = 1 − ε + ε/|A|', 'ε-greedy (สุ่มอาจได้ตัวที่ดีที่สุดด้วย)', 'ε=0.1, |A|=2 → 0.95'),
    row('y = r + γ(1 − done) maxₐ′ Q(s′,a′; θ⁻)', 'DQN target ใช้ target network θ⁻ (แช่ไว้)', 'soft update θ⁻ ← 0.005θ + 0.995θ⁻'),
    row('L(θ) = (y − Q(s,a;θ))²', 'loss ของ DQN (โค้ดใช้ smooth L1)', ''),
  ])}
  ${table('L11 · Computer Vision & CNN', 'l11', [
    row('y[i,j] = Σₘ Σₙ x[i+m, j+n]·w[m,n] + b', 'convolution 1 ตำแหน่ง = คูณทีละช่องแล้วรวม', 'ตัวอย่างสไลด์ = −19'),
    row('O = (I − K + 2P)/S + 1', 'ขนาด output', '5,3,0,1 → 3 · 5,3,1,1 → 5 · 32,3,1,2 → 16'),
    row('params = (K²·C_in + 1)·C_out', 'พารามิเตอร์ของ conv (+1 คือ bias ต่อ filter)', '3→64, K=3: 1,792 ; 3→32 K=3: 896'),
    row('params FC = (n_in + 1)·n_out', 'fully connected', '(2,048+1)×10 = 20,490'),
    row('224×224×3 = 150,528', 'จำนวน input ถ้า flatten ภาพเข้า MLP', '1,000 neuron → ≈150M weights'),
    row('3×3 ซ้อน L ชั้น → (2L+1)×(2L+1)', 'receptive field โตตามความลึก', '3 ชั้น → 7×7'),
    row('y = F(x) + x ; ∂y/∂x = ∂F/∂x + 1', 'ResNet skip connection: gradient highway', '152 ชั้น top-5 3.6%'),
    row('B × C × H × W', 'รูปทรง tensor ของ PyTorch (NumPy/OpenCV ใช้ H×W×C, OpenCV เป็น BGR)', '32×3×224×224'),
  ])}
  ${table('L12 · NLP & Generative AI', 'l12', [
    row('idf(w) = ln(N/df(w)) ; tf-idf = tf·idf', 'ค่าน้ำหนักคำ: คำทั่วไปถูกลด คำหายากเด่นขึ้น', 'N=3: ln(3/2)=0.41, ln3=1.10 ; good ใน d1 = 2×0.41 = 0.81'),
    row('cos(u,v) = u·v/(‖u‖‖v‖)', 'ความคล้ายของ embedding', 'cat–dog 0.98, cat–car 0.29 ; one-hot ทุกคู่ = 0'),
    row('hₜ = tanh(W_hh hₜ₋₁ + W_xh xₜ + b)', 'RNN: น้ำหนักชุดเดียวทุกเวลา', 'h₄ = [0.72, −0.32] → P(pos) = σ(1.91) = 0.87'),
    row('cₜ = f⊙cₜ₋₁ + i⊙c̃ₜ ; hₜ = o⊙tanh(cₜ)', 'LSTM: เกต forget/input/output; การบวกคือทางด่วนของ gradient', ''),
    row('0.9⁵⁰ ≈ 0.005 ; 1.1⁵⁰ ≈ 117', 'vanishing / exploding gradient ผ่านเวลา (แก้: LSTM/GRU, gradient clipping)', ''),
    row('Attention(Q,K,V) = softmax(QKᵀ/√dₖ)V', 'scaled dot-product attention', 'q=[0,2] → (0.07, 0.55, 0.37)'),
    row('PE(pos,2i) = sin(pos/10000^(2i/d))', 'positional encoding (คู่ cos สำหรับมิติคี่)', ''),
    row('pᵢ = exp(zᵢ/T)/Σⱼ exp(zⱼ/T)', 'temperature: T ต่ำแหลม T สูงแบน', 'z=[2,1,0], T=1 → .67 .24 .09'),
    row('top-p: เซตเล็กสุดที่ Σp ≥ p', 'nucleus sampling', 'p=0.9: .67+.24 = .91 → เหลือ 2 token'),
    row('loss = −Σ log P(xₜ | x<ₜ)', 'pretraining LLM = cross-entropy ของ token ถัดไป', ''),
    row('xₜ = √ᾱₜ x₀ + √(1−ᾱₜ) ε', 'diffusion forward; loss = ‖ε − ε_θ(xₜ,t,prompt)‖²', ''),
    row('h = Wx + BAx', 'LoRA: ฝึกเฉพาะ B (d×r), A (r×d)', 'd=4096, r=8: 65,536 / 16,777,216 = 0.39%'),
  ])}
  ${table('L13 · Reasoning · Agents · Quantum ML', 'l13', [
    row('compute ≈ #token × ต้นทุน forward', 'คิดนานขึ้น = เขียน token มากขึ้น (CoT, reasoning model)', ''),
    row('P(maj) = Σ_{k≥3} C(5,k) pᵏ(1−p)⁵⁻ᵏ', 'self-consistency (สมมติเส้นเหตุผลอิสระกัน)', 'p=0.6 → 0.68'),
    row('P(สำเร็จ) = pⁿ', 'error สะสมของ agent n ขั้น', '0.95¹⁰ = 0.60, 0.95²⁰ = 0.36'),
    row('max r(x,y) − β·KL', 'RLHF ด้วย PPO (KL กันไม่ให้หนีจากโมเดลเดิม)', 'DPO เรียนจากคู่ความชอบตรง ๆ'),
    row('N×M → N+M', 'MCP: เขียน server 1 ตัวต่อแหล่งข้อมูล', '5×20 = 100 → 25'),
    row('|ψ⟩ = α|0⟩ + β|1⟩ ; |α|²+|β|² = 1', 'qubit; P(0)=|α|², P(1)=|β|² (Born rule)', 'α=0.6, β=0.8 → 0.36 / 0.64'),
    row('n qubit → 2ⁿ amplitude', 'สถานะโตแบบทวีคูณ แต่วัดได้แค่ n บิต (Holevo)', '50 qubit ≈ 1.1×10¹⁵ ≈ 18 PB'),
    row('⟨Z⟩ = P(0) − P(1)', 'ค่าที่ QML ใช้เป็น output', 'P(0)=0.85 → 0.70'),
    row('H: [1,0] → [0.707, 0.707] → [1,0]', 'interference: 0.707·0.707 + 0.707·(−0.707) = 0', ''),
    row('Grover ≈ (π/4)√N', 'ค้นหาไม่มีโครงสร้าง เร็วขึ้นแค่รากที่สอง', 'N=10⁶ → ~785 (คลาสสิก ~500,000)'),
  ])}
  <h2 id="f-traps">⚠️ กับดักที่ต้องระวังเวลาใช้สูตร</h2>
  <div class="callout warn"><ul style="margin:0">
    <li>Perceptron: สไลด์ใช้ w − η(y−ŷ)x แต่มาตรฐาน/โค้ด Lab ใช้ + — อ่านโจทย์ให้ดีว่าให้ทำตามแบบไหน</li>
    <li>Adaline: error = y − z (ก่อน threshold) ไม่ใช่ y − ŷ</li>
    <li>Q-learning: ถ้า s′ เป็น terminal ห้ามบวก γ·maxQ′ (target = r) แต่ truncated ยัง bootstrap</li>
    <li>ε-greedy: ตอนสุ่มก็อาจได้ action ที่ดีที่สุด → 1 − ε + ε/|A|</li>
    <li>params conv อย่าลืม C_in และ +1 bias ต่อ filter · pooling ไม่มีพารามิเตอร์</li>
    <li>attention ต้องหาร √dₖ ก่อน softmax และ softmax ทำ “รายแถว”</li>
    <li>qubit: ความน่าจะเป็น = amplitude ยกกำลังสอง (amplitude ติดลบได้ แต่ความน่าจะเป็นไม่ติดลบ)</li>
  </ul></div>`;
  TUTOR.addPage('formulas', { html });
})();
