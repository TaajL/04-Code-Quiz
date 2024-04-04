// Page Element Variables
const timer = document.querySelector("p.clock");
let seconds = 28;
const points = document.querySelector("#points");

// Sections
const beginQuiz = document.querySelector("#beginQuiz");
const qandA = document.querySelector("#qandA");
const questions = document.querySelector("#questions");
let questionCount = 0;
const rightWrong = document.querySelector("#rightWrong");
const finished = document.querySelector("#finished");
const initials = document.querySelector("#initials");
const rank = document.querySelector("#rank");
const rankings = document.querySelector("#rankings");
const rankList = [];

// Buttons
const viewScoreBtn = document.querySelector("#viewScore");
const startBtn = document.querySelector("#start");
const scoreSubBtn = document.querySelector("#scoreSubmission");
const tryAgainBtn = document.querySelector("#tryAgain");
const clearScoresBtn = document.querySelector("#clearScores");

// Answer Buttons
const answerBtn = document.querySelectorAll("button.answerBtn");
const answer1Btn = document.querySelector("#answer1");
const answer2Btn = document.querySelector("#answer2");
const answer3Btn = document.querySelector("#answer3");
const answer4Btn = document.querySelector("#answer4");

// Q&A True or False
const quiz = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.:",
        answers: ["1. numbers and strings", "2. booleans", "3. other arrays", "4. all of the above"],
        correctAnswer: "2"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.:",
        answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "3"
    }
];

// Functions

// Timer
const setClock = () => {
    const timerInterval = setInterval(() => {
        seconds--;
        timer.textContent = `Time: ${seconds}s`;

        if (seconds === 0 || questionCount === quiz.length) {
            clearInterval(timerInterval);
            handleQuizCompletion();
        }
    }, 1000);
};

// Quiz completion
function handleQuizCompletion() {
    questions.style.display = "none";
    finished.style.display = "block";
    points.textContent = seconds;
}

// Start quiz
const startQuiz = () => {
    beginQuiz.style.display = "none";
    questions.style.display = "block";
    questionCount = 0;
    setClock();
    setQuestion(questionCount);
};

// Set question
function setQuestion(id) {
    if (id < quiz.length) {
        const { question, answers } = quiz[id];
        questions.textContent = question;
        [answer1Btn, answer2Btn, answer3Btn, answer4Btn].forEach((btn, i) => {
            btn.textContent = answers[i];
        });
    }
}

// Check answer and proceed to display right or wrong
function checkAnswer(event) {
    event.preventDefault();

    rightWrong.style.display = "block";
    let p = document.createElement("p");
    setTimeout(function() {
        p.style.display = "none";
    }, 1000);

    const selectedAnswer = event.target.textContent;
    const correctAnswer = quiz[questionCount].answers[parseInt(quiz[questionCount].correctAnswer) - 1].split(".")[1].trim();

    if (selectedAnswer === correctAnswer) {
        p.textContent = "Correct!";
    } else{
        p.textContent = "Wrong!";
    }
    rightWrong.appendChild(p);
    
    // time out after 1 second
    set setTimeout( () => {
    }, 1000);
}
// Function to handle user selection of an answer
function handleAnswerSelection(selectedAnswer) {
    const currentQuestion = quiz[questionCount];
    
    if (selectedAnswer !== currentQuestion.correctAnswer) {
        seconds -= 8; // Subtract 10 seconds for wrong answers
    }

    // Update timer display
    timer.textContent = `Time: ${seconds}`;

    // Increment the questionCount to move to the next question
    questionCount++;

    // Display the next question or end the quiz based on your logic
    if (questionCount < quiz.length) {
        displayNextQuestion();
    } else {
        endQuiz();
    }

// Add event listeners to answer buttons
answerBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        handleAnswerSelection(btn.dataset.answer);
    });
});
