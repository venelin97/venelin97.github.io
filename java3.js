

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

// ====== Overlay за събития ======


function openEvent(epoch, idx) {
  const ev = eventsData[epoch][idx];
  const overlay = document.getElementById('event-overlay');
  const title = document.getElementById('event-title');
  const text = document.getElementById('event-text');

  if(!overlay || !title || !text) return; // ако елементите липсват

  title.innerText = ev.title;
  text.innerText = ev.text;
  overlay.style.display = 'flex';
  document.getElementById('timeline').style.display = 'none';
}

function closeEvent() {
  document.getElementById('event-overlay').style.display = 'none';
  document.getElementById('timeline').style.display = 'flex';
}

// ====== Показване на събития ======
function showEpoch(epoch) {
  const container = document.getElementById('events');
  if(!container) return;

  container.innerHTML = '';
  eventsData[epoch].forEach((ev, idx) => {
    const btn = document.createElement('button');
    btn.textContent = ev.title;
    btn.onclick = () => openEvent(epoch, idx);
    container.appendChild(btn);
  });

  // Центриране след добавяне на бутоните
  setTimeout(centerTimelineAndEvents, 10);
}

// ====== Секцията и меню ======
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  const section = document.getElementById(sectionId);
  if(!section) return;

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

// ====== Resize и load ======
window.addEventListener('resize', centerTimelineAndEvents);
window.addEventListener('load', centerTimelineAndEvents);
























