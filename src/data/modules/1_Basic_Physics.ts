import type { Module } from '../../types'

const m1: Module = {
  title: "1. Basic Physics",
  titleBn: "১. পদার্থবিদ্যার মূল ধারণা",
  level: "Beginner",
  lessons: [
    {
      id: "bp1",
      title: "Electromagnetism Basics",
      titleBn: "তড়িৎচুম্বকত্বের মূল ধারণা",
      content: "Charge, Coulomb's law, electric field, Gauss's law, electric potential, magnetic field, Faraday's law, Maxwell's equations.\n\n⚡ Charge: Fundamental property of matter causing electromagnetic interaction. Types: Positive (+) and Negative (-). Unit: Coulomb (C). Conservation: Charge cannot be created/destroyed, only transferred.\n\n⚡ Coulomb's Law: Force between two electric charges: F = k(q1×q2)/r². Force is attractive for opposite charges, repulsive for like charges.\n\n⚡ Electric Field (E): Region around charged particle where it exerts force on other charges. E = F/q. Unit: N/C or V/m.\n\n🧲 Magnetic Field: Region around moving charge or magnet where magnetic forces act. Unit: Tesla (T). Right-Hand Rule: Thumb = Current direction, Fingers = Magnetic field direction.\n\n🧲 Faraday's Law: Changing magnetic field induces EMF. EMF = -dΦB/dt.\n\n🌐 Maxwell's Equations (4 fundamental laws):\n1. ∇·E = ρ/ε₀\n2. ∇·B = 0\n3. ∇×E = -∂B/∂t\n4. ∇×B = μ₀J + μ₀ε₀(∂E/∂t)",
      contentBn: "আধান, কুলম্বের সূত্র, তড়িৎক্ষেত্র, গাউসের সূত্র, তড়িৎবিভব, চুম্বকক্ষেত্র, ফ্যারাডের সূত্র, ম্যাক্সওয়েলের সমীকরণ।\n\n⚡ আধান: পদার্থের একটি মৌলিক ধর্ম। প্রকার: ধনবাহী (+) এবং ঋণবাহী (-)।\n\n⚡ কুলম্বের সূত্র: দুটি তড়িৎআধানের মধ্যে বল: F = k(q1×q2)/r²।\n\n🧲 চুম্বকক্ষেত্র: চলমান আধান বা চুম্বকের চারপাশে অঞ্চল।\n\n🧲 ফ্যারাডের সূত্র: পরিবর্তনশীল চুম্বকক্ষেত্র EMF প্রবর্তন করে।\n\n🌐 ম্যাক্সওয়েলের সমীকরণ (৪টি মৌলিক সূত্র)",
      code: "F = k × (q1 × q2) / r²\nE = F/q\nV = W/q\nEMF = -dΦB/dt",
      takeaways: [
        "Charge is fundamental property with + and - types",
        "Coulomb's law defines force between charges",
        "Electric field = force per unit charge",
        "Maxwell's equations unify all electromagnetism"
      ],
      takeawaysBn: [
        "আধান + এবং - প্রকার সহ মৌলিক ধর্ম",
        "কুলম্বের সূত্র আধানের মধ্যে বল সংজ্ঞায়িত করে",
        "তড়িৎক্ষেত্র = একক আধান প্রতি বল",
        "ম্যাক্সওয়েলের সমীকরণ সমস্ত তড়িৎচুম্বকত্ব একত্রিত করে"
      ],
      level: "Beginner"
    },
    {
      id: "bp2",
      title: "Waves and Oscillations",
      titleBn: "তরঙ্গ ও কম্পন",
      content: "Oscillation: Back-and-forth repetitive motion around mean position. Examples: pendulum, mass on spring, AC current.\n\nKey Terms:\n• Amplitude (A): Maximum displacement from mean position\n• Time Period (T): Time for one complete oscillation\n• Frequency (f): Number of oscillations per second. f = 1/T in Hz\n• Angular Frequency (ω): ω = 2πf\n\nSimple Harmonic Motion (SHM): F = -kx. Equation: x(t) = A×sin(ωt + φ).\n\nWave: Disturbance transferring energy without transferring matter.\nTypes:\n• Mechanical (require medium): sound, water waves\n• Electromagnetic (no medium): light, radio\n• Transverse: particle motion ⟂ wave direction\n• Longitudinal: particle motion ∥ wave direction\n\nWave Properties:\n• Wavelength (λ): Distance between two crests\n• Wave speed (v): v = fλ",
      contentBn: "কম্পন: গড় অবস্থানের চারপাশে পুনরাবৃত্তিমূলক সামনে-পেছনে গতি। উদাহরণ: দোলক, স্প্রিং-এ ভর, AC প্রবাহ।\n\nমূল পদ:\n• অ্যামপ্লিটিউড (A): গড় অবস্থান থেকে সর্বোচ্চ সরণ\n• সময়কাল (T): একটি সম্পূর্ণ কম্পনের সময়\n• ফ্রিকোয়েন্সি (f): প্রতি সেকেন্ডে কম্পনের সংখ্যা। f = 1/T Hz\n• কোণীয় ফ্রিকোয়েন্সি (ω): ω = 2πf\n\nসরল হারমনিক মোশন (SHM): F = -kx। সমীকরণ: x(t) = A×sin(ωt + φ)।\n\nতরঙ্গ: পদার্থ স্থানান্তর না করে শক্তি স্থানান্তরকারী।\nপ্রকার:\n• যান্ত্রিক (মাধ্যম প্রয়োজন): শব্দ, জলের তরঙ্গ\n• তড়িৎচুম্বক (মাধ্যম নেই): আলো, রেডিও\n• অনুপ্রস্থ: কণা গতি ⟂ তরঙ্গ দিক\n• অনুদৈর্ঘ্য: কণা গতি ∥ তরঙ্গ দিক\n\nতরঙ্গ বৈশিষ্ট্য:\n• তরঙ্গ দৈর্ঘ্য (λ): দুটি শীর্ষের মধ্যে দূরত্ব\n• তরঙ্গ গতি (v): v = fλ",
      code: "f = 1/T\nv = fλ\nx(t) = A × sin(ωt + φ)\nω = 2πf",
      takeaways: [
        "Oscillation is repetitive back-and-forth motion",
        "Wave transfers energy without matter transfer",
        "v = fλ relates speed, frequency, wavelength",
        "Resonance occurs when frequencies match"
      ],
      takeawaysBn: [
        "কম্পন হলো পুনরাবৃত্তিমূলক সামনে-পেছনে গতি",
        "তরঙ্গ পদার্থ স্থানান্তর না করে শক্তি স্থানান্তর করে",
        "v = fλ গতি, ফ্রিকোয়েন্সি ও তরঙ্গ দৈর্ঘ্য সম্পর্কিত করে",
        "ফ্রিকোয়েন্সি মিললে রিজোন্যান্স হয়"
      ],
      level: "Beginner"
    },
    {
      id: "bp3",
      title: "Special Relativity",
      titleBn: "বিশেষ আপেক্ষিকতা",
      content: "Theory of Special Relativity (Einstein, 1905) explains how space, time, and motion relate at speeds near light.\n\nTwo Postulates:\n1. Principle of Relativity: Laws of physics identical in all inertial frames.\n2. Constancy of Speed of Light: c = 3×10⁸ m/s same for all observers.\n\nConsequences:\na) Time Dilation: Moving clocks run slower.\nt = t₀ / √(1 - v²/c²)\n\nb) Length Contraction: Moving objects appear shorter.\nL = L₀ × √(1 - v²/c²)\n\nc) Mass-Energy Equivalence: E = mc²",
      contentBn: "বিশেষ আপেক্ষিকতার তত্ত্ব (আইনস্টাইন, ১৯০৫) আলোর কাছাকাছি গতিতে স্থান, সময় ও গতির সম্পর্ক ব্যাখ্যা করে।\n\nদুটি স্বীকৃতি:\n১. আপেক্ষিকতার নীতি: সব জড় ফ্রেমে পদার্থবিদ্যার নিয়ম এক।\n২. আলোর গতির স্থায়িত্ব: c = ৩×১০⁸ m/s সব পর্যবক্ষকের জন্য এক।\n\nফলাফল:\nক) সময় প্রসারণ: চলমান ঘড়ি ধীরে চলে।\nt = t₀ / √(1 - v²/c²)\n\nখ) দৈর্ঘ্য সংকোচন: চলমান বস্তু ছোট দেখায়।\nL = L₀ × √(1 - v²/c²)\n\nগ) ভর-শক্তি সমতা: E = mc²",
      code: "t = t₀ / √(1 - v²/c²)\nL = L₀ × √(1 - v²/c²)\nE = mc²",
      takeaways: [
        "Speed of light is constant for all observers",
        "Time dilation: moving clocks run slower",
        "Length contraction: moving objects shorten",
        "E = mc² shows mass-energy equivalence"
      ],
      takeawaysBn: [
        "আলোর গতি সব পর্যবক্ষকের জন্য স্থায়ী",
        "সময় প্রসারণ: চলমান ঘড়ি ধীরে চলে",
        "দৈর্ঘ্য সংকোচন: চলমান বস্তু ছোট হয়",
        "E = mc² ভর-শক্তি সমতা দেখায়"
      ],
      level: "Beginner"
    },
    {
      id: "bp4",
      title: "Quantum Physics & EM Waves",
      titleBn: "কোয়ান্টাম পদার্থবিদ্যা ও EM তরঙ্গ",
      content: "Electromagnetic Waves: Oscillations of electric and magnetic fields traveling through space. Don't require medium. Formula: c = λν.\n\nEM Spectrum:\n• Radio waves: λ > 1m\n• Microwaves: 1m - 1mm\n• Infrared: 1mm - 700nm\n• Visible light: 700-400nm\n• Ultraviolet: 400-10nm\n• X-rays: 10-0.01nm\n• Gamma rays: < 0.01nm\n\nPhotoelectric Effect: Light shining on metal surface emits electrons.\nEinstein's Explanation: Light behaves as particles (photons). Energy: E = hν\n\nDe Broglie Waves: Particles have wave-like properties. Formula: λ = h/p",
      contentBn: "তড়িৎচুম্বক তরঙ্গ: মহাশূন্য দিয়ে যাওয়া তড়িৎক্ষেত্র ও চুম্বকক্ষেত্রের কম্পন। মাধ্যম প্রয়োজন নেই। সূত্র: c = λν।\n\nEM বর্ণালী:\n• রেডিও তরঙ্গ: λ > 1m\n• মাইক্রোওয়েভ: 1m - 1mm\n• অবলোহত্তর: 1mm - 700nm\n• দৃশ্যমান আলো: 700-400nm\n• অতিবেগুনি: 400-10nm\n• X-রশ্মি: 10-0.01nm\n• গামা রশ্মি: < 0.01nm\n\nফটোইলেকট্রিক ইফেক্ট: ধাতুর পৃষ্ঠে আলো পড়লে ইলেকট্রন নির্গত হয়।\nআইনস্টাইনের ব্যাখ্যা: আলো কণা (ফোটন) হিসেবে আচরণ করে। শক্তি: E = hν\n\nদ্য ব্রয়লি তরঙ্গ: কণার তরঙ্গ-সদৃশ বৈশিষ্ট্য আছে। সূত্র: λ = h/p",
      code: "c = fλ\nE = hν\nλ = h/p",
      takeaways: [
        "Light has both wave and particle properties",
        "Photoelectric effect proves particle nature",
        "X-ray diffraction reveals crystal structure",
        "Compton effect confirms photon momentum"
      ],
      takeawaysBn: [
        "আলোর তরঙ্গ ও কণা উভয় বৈশিষ্ট্য আছে",
        "ফটোইলেকট্রিক ইফেক্ট কণার প্রকৃতি প্রমাণ করে",
        "X-ray বিচ্যতন কেলাস কাঠামো প্রকাশ করে",
        "কম্পটন ইফেক্ট ফোটনের ভরবেগ নিশ্চিত করে"
      ],
      level: "Beginner"
    },
    {
      id: "bp5",
      title: "Quantum Mechanics: De Broglie Waves & Wave Equation",
      titleBn: "কোয়ান্টাম মেকানিক্স: দ্য ব্রয়লি তরঙ্গ ও তরঙ্গ সমীকরণ",
      content: "🔬 1. De Broglie Waves (Matter Waves)\nLouis de Broglie proposed (1924) that particles like electrons have wave-like properties - called matter waves or de Broglie waves.\n\nWavelength Formula: λ = h/p = h/(mv)\nwhere h = 6.626×10⁻³⁴ J·s (Planck's constant), m = mass, v = velocity.\n\nKey Insight: Larger mass = smaller wavelength. Macroscopic objects have negligible wavelengths.\n\n⚡ 2. Phase Velocity & Group Velocity\n\nPhase Velocity (v_p): Speed of individual wave peaks within a wave packet.\nv_p = ω/k = E/p = c²/v (for matter waves)\n⚠️ Can exceed speed of light, but carries NO information.\n\nGroup Velocity (v_g): Speed of the wave packet envelope (and the particle itself).\nv_g = dω/dk = dp/dm = v (particle velocity)\n✅ Carries information and energy.\n\nWave Packet: Combination of multiple waves of different frequencies - localizes the particle.\n\n🌊 3. Wave Function (Ψ)\nComplete quantum description of a particle's state.\n\n|Ψ(x,t)|² = Probability density of finding particle at position x and time t.\n\nKey Properties:\n• Wave function can be complex (Ψ = |Ψ|eiφ)\n• Born rule: Probability = |Ψ|²\n• Wave function collapses on measurement\n• Must be normalized: ∫|Ψ|²dV = 1\n\n📐 4. Schrödinger Equation (Wave Equation)\nThe fundamental equation of quantum mechanics.\n\nTime-Dependent Form:\niℏ(∂Ψ/∂t) = -(ℏ²/2m)(∂²Ψ/∂x²) + VΨ\n\nTime-Independent Form (for steady states):\n-(ℏ²/2m)(d²Ψ/dx²) + VΨ = EΨ\n\nWhere:\n• ℏ = h/2π (reduced Planck's constant)\n• m = particle mass\n• V = potential energy\n• E = total energy\n\n🔹 5. Quick Summary Table\n\n<table><tr><th>Concept</th><th>Formula</th><th>Meaning</th></tr><tr><td>De Broglie Wavelength</td><td>λ = h/p</td><td>Particle's wave nature</td></tr><tr><td>Phase Velocity</td><td>v_p = ω/k</td><td>Wave peak speed (can > c)</td></tr><tr><td>Group Velocity</td><td>v_g = dω/dk</td><td>Particle speed (= info speed)</td></tr><tr><td>Wave Function</td><td>Ψ</td><td>Quantum state description</td></tr><tr><td>Probability Density</td><td>|Ψ|²</td><td>Finding particle at x</td></tr><tr><td>Schrödinger Eq.</td><td>iℏ∂Ψ/∂t = -(ℏ²/2m)∇²Ψ + VΨ</td><td>Governs quantum evolution</td></tr></table>\n\n✅ In Short:\nParticles exhibit wave properties (de Broglie wavelength). The wave function describes their quantum state, and the Schrödinger equation governs how this state evolves in time and space. Phase velocity may exceed c, but only group velocity (particle velocity) carries information.",
      contentBn: "🔬 ১. দ্য ব্রয়লি তরঙ্গ (পদার্থ তরঙ্গ)\nলুই দ্য ব্রয়লি প্রস্তাব করেন (১৯২৪) যে ইলেকট্রনের মতো কণাদের তরঙ্গ-সদৃশ বৈশিষ্ট্য আছে - যাকে বলা হয় পদার্থ তরঙ্গ বা দ্য ব্রয়লি তরঙ্গ।\n\nতরঙ্গ দৈর্ঘ্য সূত্র: λ = h/p = h/(mv)\nযেখানে h = ৬.৬২৬×১০⁻³⁴ J·s (প্ল্যাঙ্ক ধ্রুবক), m = ভর, v = গতি।\n\nমূল অন্তর্দৃষ্টি: বড় ভর = ছোট তরঙ্গ দৈর্ঘ্য। ম্যাক্রোস্কোপিক বস্তুর তরঙ্গ দৈর্ঘ্য নগণ্য।\n\n⚡ ২. ফেজ ভেলোসিটি ও গ্রুপ ভেলোসিটি\n\nফেজ ভেলোসিটি (v_p): একটি তরঙ্গ প্যাকেটের মধ্যে পৃথক তরঙ্গ শীর্ষের গতি।\nv_p = ω/k = E/p = c²/v (পদার্থ তরঙ্গের জন্য)\n⚠️ আলোর গতির চেয়ে বেশি হতে পারে, কিন্তু কোনো তথ্য বহন করে না।\n\nগ্রুপ ভেলোসিটি (v_g): তরঙ্গ প্যাকেট এনভেলপের গতি (এবং কণাটির নিজের গতি)।\nv_g = dω/dk = dp/dm = v (কণা গতি)\n✅ তথ্য এবং শক্তি বহন করে।\n\nতরঙ্গ প্যাকেট: বিভিন্ন ফ্রিকোয়েন্সির একাধিক তরঙ্গের সমন্বয় - কণাটিকে স্থানীয় করে।\n\n🌊 ৩. তরঙ্গ ফাংশন (Ψ)\nএকটি কণার অবস্থার সম্পূর্ণ কোয়ান্টাম বর্ণনা।\n\n|Ψ(x,t)|² = x অবস্থানে এবং সময় t-তে কণাটি পাওয়ার সম্ভাবনা ঘনত্ব।\n\nমূল বৈশিষ্ট্য:\n• তরঙ্গ ফাংশন জটিল হতে পারে (Ψ = |Ψ|eiφ)\n• বর্ন নিয়ম: সম্ভাবনা = |Ψ|²\n• পরিমাপে তরঙ্গ ফাংশন ভেঙে পড়ে\n• স্বাভাবিক করতে হবে: ∫|Ψ|²dV = 1\n\n📐 ৪. শ্রোডিংগার সমীকরণ (তরঙ্গ সমীকরণ)\nকোয়ান্টাম মেকানিক্সের মৌলিক সমীকরণ।\n\nসময়-নির্ভর রূপ:\niℏ(∂Ψ/∂t) = -(ℏ²/2m)(∂²Ψ/∂x²) + VΨ\n\nসময়-স্বাধীন রূপ (স্থির অবস্থার জন্য):\n-(ℏ²/2m)(d²Ψ/dx²) + VΨ = EΨ\n\nযেখানে:\n• ℏ = h/২π (হ্রাসকৃত প্ল্যাঙ্ক ধ্রুবক)\n• m = কণার ভর\n• V = বিভব শক্তি\n• E = মোট শক্তি\n\n🔹 ৫. দ্রুত সারসংক্ষেপ টেবিল\n\n<table><tr><th>ধারণা</th><th>সূত্র</th><th>অর্থ</th></tr><tr><td>দ্য ব্রয়লি তরঙ্গ দৈর্ঘ্য</td><td>λ = h/p</td><td>কণার তরঙ্গ প্রকৃতি</td></tr><tr><td>ফেজ ভেলোসিটি</td><td>v_p = ω/k</td><td>তরঙ্গ শীর্ষের গতি (> c হতে পারে)</td></tr><tr><td>গ্রুপ ভেলোসিটি</td><td>v_g = dω/dk</td><td>কণার গতি (= তথ্য গতি)</td></tr><tr><td>তরঙ্গ ফাংশন</td><td>Ψ</td><td>কোয়ান্টাম অবস্থার বর্ণনা</td></tr><tr><td>সম্ভাবনা ঘনত্ব</td><td>|Ψ|²</td><td>x অবস্থানে কণা পাওয়ার সম্ভাবনা</td></tr><tr><td>শ্রোডিংগার সমীকরণ</td><td>iℏ∂Ψ/∂t = -(ℏ²/2m)∇²Ψ + VΨ</td><td>কোয়ান্টাম বিবর্তন নিয়ন্ত্রণ করে</td></tr></table>\n\n✅ সংক্ষেপে:\nকণাদের তরঙ্গ বৈশিষ্ট্য আছে (দ্য ব্রয়লি তরঙ্গ দৈর্ঘ্য)। তরঙ্গ ফাংশন তাদের কোয়ান্টাম অবস্থা বর্ণনা করে, এবং শ্রোডিংগার সমীকরণ এই অবস্থা কীভাবে সময় ও স্থানে বিকশিত হয় তা নিয়ন্ত্রণ করে। ফেজ ভেলোসিটি c অতিক্রম করতে পারে, কিন্তু শুধু গ্রুপ ভেলোসিটি (কণার গতি) তথ্য বহন করে।",
      code: "λ = h/p\nv_p = ω/k = c²/v\nv_g = dω/dk = v\niℏ(∂Ψ/∂t) = -(ℏ²/2m)(∂²Ψ/∂x²) + VΨ\n-(ℏ²/2m)(d²Ψ/dx²) + VΨ = EΨ\n|Ψ|² = probability density",
      takeaways: [
        "Particles have wave properties (de Broglie wavelength)",
        "Phase velocity can exceed c, but carries no info",
        "Group velocity = particle velocity, carries energy",
        "Wave function gives probability, not certainty",
        "Schrödinger equation governs quantum behavior"
      ],
      takeawaysBn: [
        "কণাদের তরঙ্গ বৈশিষ্ট্য আছে (দ্য ব্রয়লি তরঙ্গ দৈর্ঘ্য)",
        "ফেজ ভেলোসিটি c অতিক্রম করতে পারে, কিন্তু তথ্য বহন করে না",
        "গ্রুপ ভেলোসিটি = কণার গতি, শক্তি বহন করে",
        "তরঙ্গ ফাংশন নিশ্চয়তা নয়, সম্ভাবনা দেয়",
        "শ্রোডিংগার সমীকরণ কোয়ান্টাম আচরণ নিয়ন্ত্রণ করে"
      ],
      level: "Intermediate"
    }
  ]
}

export const module1 = m1
