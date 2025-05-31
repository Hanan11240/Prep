const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Hot Mail", "How to Make Lasagna", "None"],
        correct: 0
    }
];

let currentQuestion = 0;
let started = false;
let userAnswers = new Array(questions.length).fill(null);

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options')
const scoreBox = document.getElementById("scoreBox");


document.getElementById('prevBtn').onclick = previousQuestion;
document.getElementById('nextBtn').onclick = nextQuestion;
document.getElementById('startBtn').onclick = startQuiz;
document.getElementById('resetBtn').onclick = restartQuiz;
// document.getElementById('submitBtn').onclick = submitQuiz;




function startQuiz() {
    started = true
    currentQuestion = 0;
    scoreBox.textContent = '';
    userAnswers.fill(null);
    showQuestions();
}

function showQuestions() {
    const question = questions[currentQuestion];
    questionEl.textContent = `Q.${currentQuestion + 1}: ${question?.question}`
    optionsEl.textContent = ''
    question.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.className = 'option'
        btn.textContent = option

        if (userAnswers[currentQuestion] === index) {
            btn.classList.add('selected')
        }

        btn.onclick = () => {
            userAnswers[currentQuestion] = index
            showQuestions()
        }
        optionsEl.appendChild(btn);
    })
}





function previousQuestion() {
    if (currentQuestion > 0 && started) {
        currentQuestion--;
        showQuestions();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1 && started) {
        currentQuestion++;
        showQuestions();
    }
}



function restartQuiz() {
    currentQuestion = 0;
    started = false;
    userAnswers.fill(null);
    scoreBox.textContent = "";
    questionEl.textContent = 'Press Start to begin'
    optionsEl.textContent = '';

}











// function restartQuiz() {
//     currentQuestion = 0;
//     userAnswers.fill(null);
//     questionEl.textContent = 'Press Start to begin'
//     optionsEl.textContent = '';
//     scoreBox.textContent = "";
// }


// function submitQuiz() {
//     let score = 0;
//     questions.forEach((question, index) => {
//         if (userAnswers[index] === question.correct) {
//             score++
//         }
//     })

//     scoreBox.textContent = `Your score is ${score} out of ${questions.length}`;
// }

