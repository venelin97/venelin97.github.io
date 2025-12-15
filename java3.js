

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

// ====== ГЕНЕРИРАНЕ НА ВЪПРОСИТЕ ======
let currentQuiz = [];

function showQuiz() {
  const quizBox = document.getElementById("quiz-box");
  const checkBtn = document.getElementById("check-button");
  quizBox.innerHTML = "";
  currentQuiz = shuffleArray([...quizQuestions]).slice(0,5); // 5 въпроса
  currentQuiz.forEach((q,i) => {
    const shuffledOptions = shuffleArray([...q.options]);
    const block = document.createElement("div");
    block.className = "quiz-question";
    let html = `<p>${q.q}</p>`;
    shuffledOptions.forEach(opt => {
      html += `<label class="answer-option"><input type="radio" name="q${i}" value="${opt}"> ${opt}</label><br>`;
    });
    block.innerHTML = html;
    quizBox.appendChild(block);
  });
  checkBtn.style.display = "block";
}

function checkQuiz() {
  let correct = 0;
  currentQuiz.forEach((q,i)=>{
    const picked = document.querySelector(`input[name="q${i}"]:checked`);
    if(picked && picked.value === q.correct) correct++;
  });
  const result = document.getElementById("quiz-result");
  if(correct <= 2) result.style.color = "red";
  else if(correct <= 4) result.style.color = "orange";
  else result.style.color = "limegreen";
  result.textContent = `Твоят резултат: ${correct} от ${currentQuiz.length}`;
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

// ====== снимки ======
function openEvent(epoch, index) {
  const ev = eventsData[epoch][index];
  document.getElementById('event-title').innerText = ev.title;
  document.getElementById('event-text').innerText = ev.text;
  const imgDiv = document.getElementById('event-image');
  imgDiv.innerHTML = ev.image ? `<img src="${ev.image}" style="width:100%;border-radius:12px;">` : "";
  document.getElementById('event-overlay').style.display = 'flex';
}



// ====== Resize & Load ======
window.addEventListener('resize', centerTimelineAndEvents);
window.addEventListener('load', () => {
  centerTimelineAndEvents();
});
if (sectionId === "quiz") {
    showQuiz();
}
// ====== Разбърква масив ======
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ====== Генериране на тест с 5 произволни въпроса ======
function showQuiz() {
  const quizBox = document.getElementById("quiz-box");
  const checkBtn = document.getElementById("check-button");
  quizBox.innerHTML = "";
  
  // Скриваме резултата при нов тест
  document.getElementById("quiz-result").textContent = "";

  // 1) Копие на въпросите
  let all = [...quizQuestions];

  // 2) Разбъркваме ги
  shuffleArray(all);

  // 3) Вземаме само 5
  let selected = all.slice(0, 5);

  // 4) Показваме ги
  selected.forEach((q, i) => {

    // Разбъркваме опциите
    const shuffledOptions = shuffleArray([...q.options]);

    const block = document.createElement("div");
    block.className = "quiz-question";

    let html = `<p>${i + 1}. ${q.q}</p>`;

    shuffledOptions.forEach(opt => {
      html += `
        <label class="answer-option">
          <input type="radio" name="q${i}" value="${opt}">
          ${opt}
        </label><br>
      `;
    });

    block.innerHTML = html;
    quizBox.appendChild(block);
  });

  // Показваме бутона
  checkBtn.style.display = "block";
}


// ====== Проверка на резултатите ======
function checkQuiz() {
  let correct = 0;

  document.querySelectorAll(".quiz-question").forEach((block, i) => {
    const picked = block.querySelector("input:checked");
    const questionText = block.querySelector("p").innerText.slice(3); 

    const real = quizQuestions.find(q => q.q === questionText);

    if (picked && real && picked.value === real.correct) {
      correct++;
    }
  });

  const result = document.getElementById("quiz-result");

  if (correct <= 2) result.style.color = "red";
  else if (correct <= 4) result.style.color = "orange";
  else result.style.color = "limegreen";

  result.textContent = `Твоят резултат: ${correct} от 5`;
}































