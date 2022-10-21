const quizData = [
{
    question: 'Quando foi lançado o Javascript? ',
    a: '1993',
    b: '1994',
    c: '1995',
    d: '1999',
    e: 'nenhuma das opções acima',
    correct: "c",
},
{
    question: 'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?',
    a: 'Tem entre 2 a 4 litros. São retirados 450 mililitros',
    b: 'Tem entre 4 a 6 litros. São retirados 450 mililitros',
    c: 'Tem 10 litros. São retirados 2 litros',
    d: 'Tem 7 litros. São retirados 1,5 litros',
    e: 'Tem 0,5 litros. São retirados 0,5 litros das opções acima',
    correct: "b",
},
{
    question: 'Quais o menor e o maior país do mundo?',
    a: 'Vaticano e Rússia',
    b: 'Nauru e China',
    c: 'Mônaco e Canadá',
    d: 'Malta e Estados Unidos',
    e: 'São Marino e Índia',
    correct: "a",
},
{
    question: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
    a: 'O Senhor dos Anéis',
    b: 'Dom Quixote',
    c: 'Ela, a Feiticeira',
    d: 'O Pequeno Príncipe',
    e: 'Um Conto de Duas Cidades',
    correct: "b",
},
{
    question: 'Quantos fusos horários existem na Rússia?',
    a: '7',
    b: '9',
    c: '12',
    d: '5',
    e: '11',
    correct: "e",
},
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2> Você respondeu corretamente ${score}/${quizData.length} de questões.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});