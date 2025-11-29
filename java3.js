// Секции
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.style.display='none');
  document.getElementById(sectionId).style.display='block';
}

// Събития по епохи
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
    {title:"Демократични промени", text:"През 1989 започва преход към демокрация и пазарна икономика."}
  ]
};

// Показване на събития
function showEpoch(epoch) {
  const container = document.getElementById('events');
  container.innerHTML = '';
  eventsData[epoch].forEach((ev, idx) => {
    const btn = document.createElement('button');
    btn.textContent = ev.title;
    btn.onclick = () => openEvent(epoch, idx);
    container.appendChild(btn);
  });
}

// Overlay
function openEvent(epoch, index) {
  const ev = eventsData[epoch][index];
  document.getElementById('event-title').innerText = ev.title;
  document.getElementById('event-text').innerText = ev.text;
  document.getElementById('event-overlay').style.display = 'flex';
}

function closeEvent() {
  document.getElementById('event-overlay').style.display = 'none';
}

// Въпроси
const quizQuestions = [
  {q:"Кой е основателят на Първото българско царство?", a:"хан Аспарух"},
  {q:"През коя година България обявява независимост?", a:"1908"},
  {q:"На кой е съюзник България през 2-рата световна война",a:"Германия"},
  {q:"При кого България е в Златния си век ", a:"Симеон Велики"},
  {q:"На чия страна е България по време на Първата световна война", a:"Тройния съюз"},
  {q:"Благодарение на кой договор България е освободена от турското робство през 1878 г.", a:"Санстефанския"},
  {q:"Кой е начело на България 1944-1989?", a:"Тодор Живков"},
  
  {q:"През коя година България преминава от комунистическо управлевие към демократично", a:"1989 г."},
  {q:"Коя империя е владяла България преди 1878?", a:"Османската империя"}
];

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

function checkQuiz() {
  let score = 0;
  const inputs = document.querySelectorAll('#questions input');
  inputs.forEach((inp, idx) => {
    if(inp.value.trim().toLowerCase() === quizQuestions[idx].a.toLowerCase()) score++;
  });
  document.getElementById('result').innerText = `Точни отговори: ${score} от 5`;
}
function showEvent(title, text) {
    document.getElementById('event-title').innerText = title;
    document.getElementById('event-text').innerText = text;
    document.getElementById('event-overlay').style.display = 'flex';
    
    // скриваме бутоните на епохите
    document.getElementById('timeline').style.display = 'none';
}

function closeEvent() {
    document.getElementById('event-overlay').style.display = 'none';
    
    // показваме отново бутоните на епохите
    document.getElementById('timeline').style.display = 'flex';
}
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    const section = document.getElementById(sectionId);
    section.style.display = 'block';
    
    // скролваме секцията до средата на екрана
    section.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

function showEvent(title, text) {
    // Скриваме бутоните за епохите
    document.getElementById('timeline').style.display = 'none';

    // Попълваме съдържанието на overlay-а
    document.getElementById('event-title').innerText = title;
    document.getElementById('event-text').innerText = text;

    // Показваме overlay-а
    document.getElementById('event-overlay').style.display = 'flex';
}
function closeEvent() {
    document.getElementById('event-overlay').style.display = 'none';
    document.getElementById('timeline').style.display = 'flex'; // бутоните за епохите се показват отново
}
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.style.display='none');

  const section = document.getElementById(sectionId);
  section.style.display = 'flex'; // задължително flex за центриране
  section.style.flexDirection = 'column';
  section.style.justifyContent = 'center';
  section.style.alignItems = 'center';

  // Ако е „Линия“, скролваме контейнера до средата на екрана
  if(sectionId === 'line') {
      section.scrollIntoView({ behavior: 'auto', block: 'center' });
  }
}
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.style.display='none');
    const section = document.getElementById(sectionId);
    section.style.display = 'block';

    // Скролваме до корицата + секцията
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showSection(sectionId) {
    // Скриваме всички секции
    document.querySelectorAll('.section').forEach(s => {
        s.style.display = 'none';
    });

    // Показваме избраната
    const section = document.getElementById(sectionId);
    section.style.display = 'block';

    // Ако е секцията с линията, центрираме контейнера
    if(sectionId === 'line') {
        const timelineContainer = document.getElementById('timeline-container');
        // Центриране спрямо прозореца
        const vh = window.innerHeight;
        const containerHeight = timelineContainer.offsetHeight;
        timelineContainer.style.top = `${(vh - containerHeight)/2}px`;
    }
}
window.addEventListener('load', () => {
    // Ако секцията "line" е видима при старта
    const lineSection = document.getElementById('line');
    if(lineSection.style.display !== 'none') {
        centerTimeline();
    }
});

function centerTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    const vh = window.innerHeight;
    const containerHeight = timelineContainer.offsetHeight;
    timelineContainer.style.top = `${(vh - containerHeight)/2}px`;
}
if(sectionId === 'line') {
    centerTimeline();
}
function centerTimelineAndEvents() {
    const timelineContainer = document.getElementById('timeline-container');
    const eventsContainer = document.getElementById('events');
    
    const vh = window.innerHeight;
    const timelineHeight = timelineContainer.offsetHeight;
    
    // Центриране на линията
    timelineContainer.style.position = 'absolute';
    timelineContainer.style.top = `${(vh - timelineHeight)/2}px`;

    // Преместване на събитията малко по-нагоре
    if(eventsContainer) {
        eventsContainer.style.position = 'absolute';
        // 30px над линията например
        eventsContainer.style.top = `${(vh - timelineHeight)/2 - 30}px`;
    }
}
window.addEventListener('load', centerTimelineAndEvents);

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.style.display='none');
    document.getElementById(sectionId).style.display='block';
    
    if(sectionId === 'line') {
        centerTimelineAndEvents();
    }
}
function positionTimelineAndEvents() {
    const timelineContainer = document.getElementById('timeline-container');
    const events = document.getElementById('events');

    if (!timelineContainer || !events) return;

    const screenH = window.innerHeight;
    const timelineH = timelineContainer.offsetHeight;

    // Центриране на линията вертикално
    const topPos = (screenH - timelineH) / 2;
    timelineContainer.style.position = "absolute";
    timelineContainer.style.top = `${topPos}px`;

    // Събитията – малко по-нагоре
    events.style.position = "absolute";
    events.style.top = `${topPos + 140}px`;  // ако са прекалено надолу — казваш и коригирам
}
window.addEventListener("load", positionTimelineAndEvents);

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';

    if (id === "line") {
        setTimeout(positionTimelineAndEvents, 50);
    }
}
function centerTimeline() {
    const lineSection = document.getElementById("line");
    const timelineContainer = document.getElementById("timeline-container");
    const eventsContainer = document.getElementById("events");

    // Ако секцията не е видима – не центрираме
    if (lineSection.style.display === "none") return;

    const vh = window.innerHeight;
    const containerHeight = timelineContainer.offsetHeight;

    // Центриране вертикално
    timelineContainer.style.position = "relative";
    timelineContainer.style.top = `${(vh - containerHeight) / 2 - 80}px`;

    // Центриране хоризонтално (вече е с margin auto)
    timelineContainer.style.margin = "0 auto";

    // Събитията – малко под линията и хоризонтално центрирани
    eventsContainer.style.width = "100%";
    eventsContainer.style.display = "flex";
    eventsContainer.style.justifyContent = "center";
    eventsContainer.style.marginTop = "20px";
}

// Първо центриране при зареждане
window.addEventListener("load", () => {
    setTimeout(centerTimeline, 50); 
});

// Центриране при връщане към меню "Линия"
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(s => s.style.display = "none");
    document.getElementById(sectionId).style.display = "block";

    if (sectionId === "line") {
        setTimeout(centerTimeline, 50);
    }
}





















