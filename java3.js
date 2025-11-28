// --- Секции ---
function showSection(sectionId) {
    // Скрива всички секции
    document.querySelectorAll('.section').forEach(s => s.style.display='none');
    // Показва избраната секция
    document.getElementById(sectionId).style.display='flex';
    document.getElementById(sectionId).classList.add('active');
}

// --- Събития по епохи ---
const events = {
    Ant: [
        {title:"Траките", text:"Траките населяват територията на България през древността."},
        {title:"Римско владичество", text:"Римляните завладяват част от днешна България."},
        {title:"Култура и изкуство", text:"Развива се тракийската и римска култура."},
        {title:"Търговия", text:"Процъфтява търговията по Черноморието."},
        {title:"Войни", text:"Римските войни оказват влияние на местните племена."}
    ],
    Sredn: [
        {title:"Първото българско царство", text:"През 681 г. се създава Първото българско царство."},
        {title:"Борба с Византия", text:"Българите се борят с Византия за територии."},
        {title:"Кирилица", text:"Създава се писмеността Кирилица."},
        {title:"Християнство", text:"Приема се християнството като официална религия."},
        {title:"Средновековна култура", text:"Развива се литература и архитектура."}
    ],
    Vazr: [
        {title:"Възраждане", text:"България възвръща националната си идентичност."},
        {title:"Просвещение", text:"Развиват се училища и книжнини."},
        {title:"Войни за независимост", text:"Участие в национално-освободителни движения."},
        {title:"Революционни комитети", text:"Създават се революционни организации."},
        {title:"Култура и литература", text:"Развива се културен живот и литература."}
    ],
    NovoVr: [
        {title:"Автономия", text:"След Руско-турската война, България получава автономия (1878)."},
        {title:"Независимост", text:"България обявява независимост от Османската империя (1908)."},
        {title:"Първа световна война", text:"България участва в Първата световна война (1914-1918)."},
        {title:"Втора световна война", text:"България е съюзник на Германия, но избягва тежки разрушения."},
        {title:"Социалистическа България", text:"От 1944 до 1989 България е социалистическа държава, начело е Тодор Живков."}
    ]
};

// Показване на събитията при избор на епоха
function showEpoch(epoch) {
    const eventsDiv = document.getElementById('events');
    eventsDiv.innerHTML = ''; // чисти старите бутони
    events[epoch].forEach(ev=>{
        const btn = document.createElement('button');
        btn.className = 'event';
        btn.textContent = ev.title;
        btn.onclick = () => showEvent(ev);
        eventsDiv.appendChild(btn);
    });
}

// --- Overlay за събития ---
function showEvent(ev){
    document.getElementById('event-title').textContent = ev.title;
    document.getElementById('event-text').textContent = ev.text;
    document.getElementById('event-overlay').style.display = 'flex';
}

function closeEvent(){
    document.getElementById('event-overlay').style.display = 'none';
}

// --- Въпроси ---
const quizQuestions = [
    {q:"Кога се създава Първото българско царство?", a:"681"},
    {q:"Кога България обявява независимост?", a:"1908"},
    {q:"Коя писменост е създадена през Средновековието?", a:"Кирилица"},
    {q:"Кой е бил лидер на социалистическа България?", a:"Тодор Живков"},
    {q:"Коя война дава автономия на България?", a:"Руско-турската"}
];

function generateQuiz(){
    const qDiv = document.getElementById('questions');
    qDiv.innerHTML = '';
    quizQuestions.forEach((q,i)=>{
        const p = document.createElement('p');
        p.textContent = q.q;
        const input = document.createElement('input');
        input.id = 'answer-'+i;
        input.type = 'text';
        p.appendChild(input);
        qDiv.appendChild(p);
    });
    document.getElementById('check-button').style.display='inline-block';
}

function checkQuiz(){
    let score = 0;
    quizQuestions.forEach((q,i)=>{
        const ans = document.getElementById('answer-'+i).value.trim();
        if(ans === q.a) score++;
    });
    document.getElementById('result').textContent = `Точни отговори: ${score} от ${quizQuestions.length}`;
}
