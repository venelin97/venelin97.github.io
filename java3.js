

// 1. Глобални променливи
let quizQuestions = [];

function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => {
        s.style.display = 'none';
        s.classList.remove('active');
    });

    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block'; 
        target.classList.add('active');
    }
}

// 2. Данни за Линията на времето
const eventsData = {
  Ant: [
    {title:"Държавност и културно наследство на тракийските племена", text:"Траките са били един от най-многобройните народи в античността, разделени на над 80 племена. Те не са оставили писменост, но тяхното богатство и духовност личат в уникалните гробници и златни съкровища като Панагюрското.", image:"images/traki.jpg"},
    {title:"Великата гръцка колонизация по Черноморското крайбрежие", text:"Черно море, наричано от гърците Понтос Еуксейнос (Гостоприемно море), става сцена на мащабна колонизация.", image:"images/Odesos.jpg"},
    {title:"Елинистическа експанзия и основаването на Филипопол", text:"През 342 г. пр. Хр. македонският владетел Филип II основава Филипопол (днешен Пловдив).", image:"images/filip.jpg"},
    {title:"Административно и културно устройство под римска власт", text:"Рим не просто завладява Тракия, той я преобразява. Сердика (днешна София) става толкова важна, че император Константин Велики казва: 'Сердика е моят Рим!'.", image:"images/okupacia.jpg"},
    {title:"Духовен синкретизъм", text:"Разпространение на римска култура и християнство.", image:"images/trakiizkustvo.jpg"}
  ],
  Sredn: [
    {title:"Създаване на Първото българско царство", text:"През 681 г. Аспарух избира Плиска за столица. България е официално призната.", image:"images/1vo bg charstvo.jpg"},
    {title:"Златен век на България", text:"При цар Симеон Велики България е културен хегемон. Велики Преслав блести със златни куполи.", image:"images/zlatenvek.jpg"},
    {title:"Залез на Първата българска държава", text:"Епичната съпротива на Самуил срещу Василий II Българоубиец.", image:"images/padane.jpg"}
  ],
  Vazr: [
    {title:"Национално възраждане", text:"Паисий Хилендарски написва 'История славянобългарска' през 1762 г.", image:"images/paisiy.jpg"},
    {title:"Борба за независимост", text:"Васил Левски и тайната революционна мрежа.", image:"images/levski.jpg"},
    {title:"Руско-турската война", text:"Епичните боеве на Шипка и подписването на Санстефанския договор.", image:"images/ruskoturska.jpg"}
  ],
  NovoVr: [
    {title:"Независимост на България", text:"На 22 септември 1908 г. във Велико Търново Фердинанд обявява Независимостта.", image:"images/nezavisimost.jpg"},
    {title:"Демократични промени", text:"Падането на Тодор Живков и пътят към ЕС и НАТО.", image:"images/es.jpg"}
  ]
};

// 3. Данни за въпросите (15 броя)
const extraQuestions = [
    { q: "Кой град е основан от Филип II Македонски под името Филипопол?", correct: "Пловдив", options: ["София", "Пловдив", "Варна"] },
    { q: "През коя година е признато Първото българско царство?", correct: "681 г.", options: ["632 г.", "681 г.", "811 г."] },
    { q: "Кой български владетел превръща Велики Преслав в духовен център?", correct: "цар Симеон I", options: ["хан Крум", "княз Борис I", "цар Симеон I"] },
    { q: "Как се нарича първата българска конституция от 1879 г.?", correct: "Търновска конституция", options: ["Радомирска", "Търновска конституция", "Софийска"] },
    { q: "На коя страна участва България в Първата световна война?", correct: "Централните сили", options: ["Антантата", "Централните сили", "СССР"] },
    { q: "Коя книга поставя началото на Възраждането през 1762 г.?", correct: "История славянобългарска", options: ["Рибен буквар", "История славянобългарска", "Горски пътник"] },
    { q: "Кой е основният идеолог на тайната комитетска мрежа?", correct: "Васил Левски", options: ["Христо Ботев", "Георги Раковски", "Васил Левски"] },
    { q: "Кой мирен договор връща Южна Добруджа през 1940 г.?", correct: "Крайовска спогодба", options: ["Ньойски", "Крайовска спогодба", "Берлински"] },
    { q: "Какво се случва на 22 септември 1908 г. във Велико Търново?", correct: "Обявяване на Независимостта", options: ["Съединението", "Обявяване на Независимостта", "Освобождението"] },
    { q: "Кой римски император е наричал Сердика „моят Рим“?", correct: "Константин Велики", options: ["Юлий Цезар", "Константин Велики", "Марк Аврелий"] },
    { q: "През кой период България е Народна република?", correct: "1944 – 1989 г.", options: ["1918 – 1944 г.", "1878 – 1908 г.", "1944 – 1989 г."] },
    { q: "Кое гръцко име носи античният Несебър?", correct: "Месемврия", options: ["Одесос", "Месемврия", "Аполония"] },
    { q: "Кой е последният владетел на Първото царство?", correct: "цар Самуил", options: ["цар Петър", "цар Самуил", "цар Иван Владислав"] },
    { q: "Кога България става член на Европейския съюз?", correct: "1 януари 2007 г.", options: ["2004 г.", "1 януари 2007 г.", "2010 г."] },
    { q: "Кой град е бил столица преди Преслав?", correct: "Плиска", options: ["Плиска", "Охрид", "Търново"] }
];

// 4. Логика на Квиза
function setupQuiz() {
    let shuffled = shuffleArray([...extraQuestions]);
    let selectedQuestions = shuffled.slice(0, 10);
    quizQuestions = selectedQuestions.map(q => ({
        ...q,
        options: shuffleArray([...q.options])
    }));
}

function generateQuiz() { // Променено името, за да съвпада с HTML
    setupQuiz();
    const box = document.getElementById("questions");
    box.innerHTML = "";

    quizQuestions.forEach((q, i) => {
        const d = document.createElement("div");
        d.className = "quiz-question";
        d.innerHTML = `
            <p><strong>${i+1}. ${q.q}</strong></p>
            ${q.options.map((o, j) => `
                <div class="answer">
                    <input type="radio" id="q${i}_${j}" name="q${i}" value="${o}">
                    <label for="q${i}_${j}">${o}</label>
                </div>
            `).join("")}
        `;
        box.appendChild(d);
    });

    document.getElementById("check-button").style.display = "block";
}

function checkQuiz() {
    let points = 0;
    quizQuestions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const labels = document.querySelectorAll(`input[name="q${i}"] + label`);

        labels.forEach(l => l.style.color = "black"); // Нулиране цветове

        if (selected) {
            if (selected.value === q.correct) {
                points++;
                selected.nextElementSibling.style.color = "green";
            } else {
                selected.nextElementSibling.style.color = "red";
                // Показваме верния
                const correctInput = document.querySelector(`input[name="q${i}"][value="${q.correct}"]`);
                correctInput.nextElementSibling.style.color = "green";
            }
        }
    });
    showReward(points);
}

// 5. Линия и Овърлей
function showEpoch(epoch) {
    const box = document.getElementById("events");
    box.innerHTML = "";
    eventsData[epoch].forEach((ev, i) => {
        const btn = document.createElement("button");
        btn.textContent = ev.title;
        btn.onclick = () => openEvent(epoch, i);
        box.appendChild(btn);
    });
}

function openEvent(epoch, index) {
    const ev = eventsData[epoch][index];
    document.getElementById("event-title").textContent = ev.title;
    document.getElementById("event-text").textContent = ev.text;
    document.getElementById("event-overlay").style.display = "flex";
}

function closeEvent() {
    document.getElementById("event-overlay").style.display = "none";
}

// 6. Награда (Щит)
function showReward(points) {
    const total = 10;
    let shieldClass = (points >= 9) ? 'gold-shield' : (points >= 6) ? 'bronze-shield' : 'silver-shield';

    const rewardDiv = document.createElement('div');
    rewardDiv.className = 'reward-background';
    rewardDiv.innerHTML = `<div class="shield ${shieldClass}">${points} / ${total}</div>`;
    rewardDiv.onclick = () => rewardDiv.remove();
    document.body.appendChild(rewardDiv);
}

// 7. Помощни функции
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

window.addEventListener("load", () => {
    setupQuiz(); // Подготвяме квиза
});













































