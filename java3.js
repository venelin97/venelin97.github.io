

// ====== Данни за събитията ======
const eventsData = {
  Ant: [
    {title:"Създаване на тракийските цивилизации", text:"Тракийските племена населяват територията на днешна България и създават свои култури и градове."},
    {title:"Основане на Одесос и Месемврия", text:"Гръцки колонии са основани по Черноморието, важни търговски центрове."},
    {title:"Първо селище на Филип Македонски", text:"Филип Македонски преминава през територията и оказва влияние върху местната култура."},
    {title:"Римска окупация", text:"Територията на България става част от Римската империя, започват строежи на пътища и укрепления."},
    {title:"Културни и религиозни влияния", text:"Разпространение на римска култура, латински език и християнство в някои региони."}
  ],
  Sredn: [
    {title:"Създаване на Първото българско царство", text:"Аспарух основава Първото българско царство около 681 година."},
    {title:"Борби с Византия", text:"Българите воюват и подписват мирни договори с Византийската империя."},
    {title:"Разцвет на културата и писмеността", text:"Създадена е кирилицата , има разцвет на литературата и културата по време на златния век при Симеон Велики."},
    {title:"Златен век на България", text:"Цар Симеон развива култура, литература и укрепва империята."},
    {title:"Падането на Първото царство", text:"През 1018 България е подчинена на Византия."}
  ],
  Vazr: [
    {title:"Национално възраждане", text:"Развиват се просвета, култура и национално самосъзнание."},
    {title:"Българската борба за независимост", text:"Учредяват се революционни комитети и организации."},
    {title:"Руско-турска война", text:"След войната България получава автономия през 1878 г. с Санстефанския договор."},
    {title:"Учредяване на Княжество България", text:"Създава се княжество с административни органи и столица София."},
    {title:"Възстановяване на училищата", text:"Възраждане на образователната система и културата."}
  ],
  NovoVr: [
    {title:"Пълна независимост", text:"България обявява пълна независимост от Османската империя през 1908 г."},
    {title:"Първа световна война", text:"България участва в Първата световна война (1914-1918) на страната на Тройния съюз с надежда за територии."},
    {title:"Втора световна война", text:"България е съюзник на Германия, но избегна тежки разрушения."},
    {title:"Социалистическа държава", text:"От 1944 до 1989 България става социалистическа държава начело с Тодор Живков."},
    {title:"Демократични промени", text:"През 1989 започва преход към демократична и пазарна икономика."}
  ]
};

// ====== Данни за квиза ======
const quizQuestions = [
  {
    q: "Кой е основателят на Първото българско царство?",
    options: ["хан Аспарух", "Крум", "Симеон Велики"],
    correct: 0
  },
  {
    q: "През коя година България обявява независимост?",
    options: ["1878", "1908", "1944"],
    correct: 1
  },
  {
    q: "На чия страна е България през Втората световна война?",
    options: ["Германия", "СССР", "Италия"],
    correct: 0
  },
  {
    q: "При кого България е в Златния век?",
    options: ["Симеон Велики", "Борис I", "Крум"],
    correct: 0
  },
  {
    q: "На чия страна е България през Първата световна война?",
    options: ["Тройния съюз", "Антантата", "Неутрална"],
    correct: 0
  },
  {
    q: "Кой договор освобождава България през 1878 г.?",
    options: ["Сан Стефанския", "Берлинския", "Ньойския"],
    correct: 0
  },
  {
    q: "Кой управлява България 1944–1989?",
    options: ["Тодор Живков", "Фердинанд I", "Борис III"],
    correct: 0
  },
  {
    q: "Кога започва демократичният преход?",
    options: ["1989", "1991", "1978"],
    correct: 0
  },
  {
    q: "Коя империя владяла България преди 1878 г.?",
    options: ["Османската империя", "Римската империя", "Австро-Унгария"],
    correct: 0
  }
];

// ====== Overlay за събития ======


function closeEvent() {
  document.getElementById('event-overlay').style.display = 'none';
 
}
function openEvent(epoch, index) {
  const ev = eventsData[epoch][index];
  document.getElementById('event-title').innerText = ev.title;
  document.getElementById('event-text').innerText = ev.text;
  document.getElementById('event-overlay').style.display = 'flex';
    
   
}


// ====== Показване на бутоните за събития ======
function showEpoch(epoch) {
  const container = document.getElementById('events');
  container.innerHTML = '';
  eventsData[epoch].forEach((ev, idx) => {
    const btn = document.createElement('button');
    btn.textContent = ev.title;
    btn.onclick = () => openEvent(epoch, idx);
    container.appendChild(btn);
  });
  setTimeout(centerTimelineAndEvents, 10);
}

// ====== Менюта и смяна на секции ======
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  const section = document.getElementById(sectionId);
  section.style.display = 'flex';
  section.style.flexDirection = 'column';
  section.style.justifyContent = 'center';
  section.style.alignItems = 'center';
  if(sectionId === 'line') setTimeout(centerTimelineAndEvents, 10);
}

// ====== Центриране на линия и събития ======
function centerTimelineAndEvents() {
  const wrapper = document.getElementById('timeline-wrapper');
  const eventsContainer = document.getElementById('events');
  if(!wrapper || !eventsContainer) return;

  wrapper.style.position = 'relative';
  eventsContainer.style.position = 'relative';

  const windowHeight = window.innerHeight;
  const totalHeight = wrapper.offsetHeight + eventsContainer.offsetHeight + 20;
  const topOffset = (windowHeight - totalHeight)/2;
  wrapper.style.top = `${topOffset}px`;
  eventsContainer.style.marginTop = '20px';
}

// ====== Квиз ======
function generateQuiz() {
  const container = document.getElementById('questions');
  container.innerHTML = '';
  const selected = quizQuestions.sort(() => 0.5 - Math.random()).slice(0,5);
  selected.forEach((q,i) => {
    const div = document.createElement('div');
    div.innerHTML = `<p>${i+1}. ${q.q}</p><input type="text" id="ans${i}" />`;
    container.appendChild(div);
  });
  document.getElementById('check-button').style.display = 'inline-block';
}
function normalizeAnswer(str) {
  return str
    .toLowerCase()
    .replace(/година|г\.|г|год\./g, "")  // махаме думи като “година”, “г”, “г.”
    .replace(/[^0-9a-zа-я]/g, "")       // махаме интервали, точки, запетаи, тирета
    .trim();                            // чистим остатъчни интервали
}



function checkQuiz() {
  const inputs = document.querySelectorAll('#questions input');
  let score = 0;
  inputs.forEach((inp,i) => {
    if(inp.value.trim().toLowerCase() === quizQuestions[i].a.toLowerCase()) score++;
  });
  document.getElementById('result').innerText = `Точни отговори: ${score} от 5`;

if (normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer));
}


// ====== Resize & Load ======
window.addEventListener('resize', centerTimelineAndEvents);
window.addEventListener('load', () => {
  centerTimelineAndEvents();
});






















