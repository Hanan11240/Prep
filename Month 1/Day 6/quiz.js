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

let currentQuestion;
let started
let userAnswers;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options')
const scoreBox = document.getElementById("scoreBox");


document.getElementById('prevBtn').onclick = previousQuestion;
document.getElementById('nextBtn').onclick = nextQuestion;
document.getElementById('startBtn').onclick = startQuiz;
document.getElementById('resetBtn').onclick = restartQuiz;
document.getElementById('submitBtn').onclick = submitQuiz;




function startQuiz() {
    started = true
    currentQuestion = localStorage.getItem('currentQuestion') || 0;
    localStorage.setItem('currentQuestion', currentQuestion);
    localStorage.setItem('started', true);
    scoreBox.textContent = '';
    userAnswers = JSON.parse(localStorage.getItem('userAnswers'))
    showQuestions();
}

function showQuestions() {
    const question = questions[localStorage.getItem('currentQuestion')];
    questionEl.textContent = `Q.${+localStorage.getItem('currentQuestion') + 1}: ${question?.question}`
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
            localStorage.setItem('userAnswers', JSON.stringify(userAnswers))
            showQuestions()
        }
        optionsEl.appendChild(btn);
    })
}





function previousQuestion() {
    if (localStorage.getItem('currentQuestion') > 0 && started) {
        currentQuestion--;
        localStorage.setItem('currentQuestion', +localStorage.getItem('currentQuestion') - 1)

        showQuestions();
    }
}

function nextQuestion() {
    if (localStorage.getItem('currentQuestion') < questions.length - 1 && started) {
        currentQuestion++;
        localStorage.setItem('currentQuestion', +localStorage.getItem('currentQuestion') + 1)
        showQuestions();
    }
}



function restartQuiz() {
    currentQuestion = 0;
    localStorage.clear();
    started = false;
    userAnswers.fill(null);
    scoreBox.textContent = "";
    questionEl.textContent = 'Press Start to begin'
    optionsEl.textContent = '';

}


function initializeApp() {
    if (localStorage.getItem('started')) {
        startQuiz();
    } else {
        currentQuestion = 0;
        started = false
        userAnswers = new Array(questions.length).fill(null)
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers))
    }
}


initializeApp()




function submitQuiz() {
    if (localStorage.getItem('started')) {
        let score = 0;
        let userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.correct) {
                score++;
            }
        })

        scoreBox.textContent = `Your score is ${score} out of ${questions.length}`;
    }

}

