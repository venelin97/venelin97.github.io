

// ====== Данни за събитията ======
const eventsData = {
  Ant: [
    {title:"Създаване на тракийските цивилизации", text:"Тракийските племена населяват територията на днешна България и създават свои култури и градове.", image:"images/traki.jpg"},
    {title:"Основане на Одесос и Месемврия", text:"Гръцки колонии са основани по Черноморието, важни търговски центрове.", image:"images/Odesos.jpg"},
    {title:"Първо селище на Филип Македонски", text:"Филип Македонски преминава през територията и оказва влияние върху местната култура."},
    {title:"Римска окупация", text:"Територията на България става част от Римската империя, започват строежи на пътища и укрепления."},
    {title:"Културни и религиозни влияния", text:"Разпространение на римска култура, латински език и християнство в някои региони.", image:"images/traki izkustvo.jpg"}
  ],
  Sredn: [
    {title:"Създаване на Първото българско царство", text:"Аспарух основава Първото българско царство около 681 година.",  image:"images/1vo bg charstvo.jpg"},
    {title:"Борби с Византия", text:"Българите воюват и подписват мирни договори с Византийската империя.",  image:"images/bitki s visanyia.jpg"},
   
    {title:"Златен век на България", text:"Цар Симеон развива култура, литература и укрепва империята.", image:"images/bg pismenost.jpg"},
    {title:"Падането на Първото царство", text:"През 1018 България е подчинена на Византия.", image:"images/padane.jpg"}
  ],
  Vazr: [
    {title:"Национално възраждане", text:"Развиват се просвета, култура и национално самосъзнание.",  image:"images/paisiy".jpg"},
    {title:"Българската борба за независимост", text:"Учредяват се революционни комитети и организации.",  image:"images/levski.jpg"},
    {title:"Руско-турска война", text:"След войната България получава автономия през 1878 г. с Санстефанския договор.",  image:"images/rusko turska.jpg"},
    {title:"Учредяване на Княжество България", text:"Създава се княжество с административни органи и столица София."},
    {title:"Възстановяване на училищата", text:"Възраждане на образователната система и културата.",  image:"images/uchiliste.jpg"}
  ],
  NovoVr: [
    {title:"Пълна независимост", text:"България обявява пълна независимост от Османската империя през 1908 г.",  image:"images/nezavisimost.jpg"},
    {title:"Първа световна война", text:"България участва в Първата световна война (1914-1918) на страната на Тройния съюз с надежда за територии.",  image:"images/1svetovna.jpg"},
    {title:"Втора световна война", text:"България е съюзник на Германия, но избегна тежки разрушения.",  image:"images/2svetovna.jpg"},
    {title:"Социалистическа държава", text:"От 1944 до 1989 България става социалистическа държава начело с Тодор Живков.",  image:"images/todor.jpg"},
    {title:"Демократични промени", text:"През 1989 започва преход към демократична и пазарна икономика.", }
  ]
};

// ====== Данни за квиза ======
// ====== ВЪПРОСИ С ВАРИАНТИ ======
const quizQuestions = [
  {
    q: "Кой е основателят на Първото българско царство?",
    correct: "хан Аспарух",
    options: ["хан Аспарух", "Крум", "Симеон Велики"]
  },
  {
    q: "През коя година България обявява независимост?",
    correct: "1908",
    options: ["1878", "1908", "1944"]
  },
  {
    q: "На кой е съюзник България през 2-рата световна война?",
    correct: "Германия",
    options: ["СССР", "Германия", "Англия"]
  },
  {
    q: "При кого България е в Златния си век?",
    correct: "Симеон Велики",
    options: ["Борис I", "Симеон Велики", "Иван Асен II"]
  },
  {
    q: "На чия страна е България по време на Първата световна война?",
    correct: "Тройния съюз",
    options: ["Антантата", "Тройния съюз", "Неутрална"]
  },
  {
    q: "Благодарение на кой договор България е освободена през 1878 г.?",
    correct: "Санстефанския",
    options: ["Берлинския", "Санстефанския", "Ньойския"]
  },
  {
    q: "Кой е начело на България 1944–1989?",
    correct: "Тодор Живков",
    options: ["Тодор Живков", "Вълко Червенков", "Георги Димитров"]
  },
  {
    q: "През коя година започва преходът към демокрация?",
    correct: "1989",
    options: ["1944", "1989", "1997"]
  },
  {
    q: "Коя империя е владяла България преди 1878?",
    correct: "Османската империя",
    options: ["Астро-Унгария", "Османската империя", "Персия"]
  }
];

// ===== СЕКЦИИ =====
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}


function showEpoch(epoch) {
  const box = document.getElementById("events");
  box.innerHTML = "";
  eventsData[epoch].forEach((e, i) => {
    const btn = document.createElement("button");
    btn.textContent = e.title;
    btn.onclick = () => openEvent(e);
    box.appendChild(btn);
  });
}

// ===== OVERLAY =====
function openEvent(e) {
  document.getElementById("overlay-title").innerText = e.title;
  document.getElementById("overlay-text").innerText = e.text;
  document.getElementById("overlay").style.display = "flex";
}

function closeEvent() {
  document.getElementById("overlay").style.display = "none";
}

// ===== КВИЗ =====
const quizQuestions = [
  { q: "Кой основава България?", a: "Аспарух" },
  { q: "Кога е независимостта?", a: "1908" }
];

function showQuiz() {
  const box = document.getElementById("quiz-box");
  box.innerHTML = "";
  quizQuestions.forEach((q, i) => {
    box.innerHTML += `
      <p>${q.q}</p>
      <input type="text" id="q${i}">
    `;
  });
  document.getElementById("check-btn").style.display = "inline-block";
}

function checkQuiz() {
  let score = 0;
  quizQuestions.forEach((q, i) => {
    const val = document.getElementById("q"+i).value.toLowerCase();
    if (val.includes(q.a.toLowerCase())) score++;
  });
  document.getElementById("quiz-result").innerText =
    `Резултат: ${score} / ${quizQuestions.length}`;
}








