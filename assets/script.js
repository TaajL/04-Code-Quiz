// Page Element Variables
const timer = document.querySelector("p.clock");
let seconds = 28;
const points = document.querySelector("#points");

// Sections
const beginQuiz = document.querySelector("#beginQuiz");
const qandA = document.querySelector("#qandA");
const questions = document.querySelector("#questions");
console.log(questions)
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

        if (seconds <= 0 || questionCount > quiz.length) {
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
    console.log(questions)
    questions.style.display = "block";
    questionCount = 0;
    setClock();
    setQuestion(questionCount);

    answer1Btn.classList.remove("hidden");
    answer2Btn.classList.remove("hidden");
    answer3Btn.classList.remove("hidden");
    answer4Btn.classList.remove("hidden");
};

// Set question
function setQuestion(id) {
    if (id < quiz.length) {
        const { question, answers } = quiz[id];
        console.log(question)
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
     setTimeout( () => {
    }, 1000);
}
// Function to handle user selection of an answer
function handleAnswerSelection(selectedAnswer) {
    const currentQuestion = quiz[questionCount];
    
    // Check if the selected answer is correct
    if (selectedAnswer === currentQuestion.correctAnswer) {
        // Display "Correct!" message
        displayAnswerResult("Correct!");
    } else {
        // Display "Wrong!" message and deduct 6 seconds for wrong answers
        displayAnswerResult("Wrong!");
        seconds -= 6;
        timer.textContent = `Time: ${seconds}s`; // Update timer display
    }

    // Move to the next question or end the quiz
    questionCount++;
    if (questionCount < quiz.length) {
        setQuestion(questionCount); // Display the next question
    } else {
        endQuiz(); // End the quiz if all questions have been answered
    }
}
function endQuiz(){ 
    const buttonBoxEl= document.getElementById("buttonBox")
    buttonBoxEl.style.display = "none"
    console.log("gameover")
}
// Function to display the result of the user's answer
function displayAnswerResult(result) {
    rightWrong.style.display = "block";
    const p = document.createElement("p");
    p.textContent = result;
    rightWrong.appendChild(p);

    // Hide the result message after 1 second
    setTimeout(() => {
        p.style.display = "none";
    }, 1000);
}

//Add score function
function addScore(score) {
    const newScore = {
        initials: initials.value, 
        score: score
    };

    rankList.push(newScore);

    // Sort rankList based on scores in descending order
    rankList.sort((a, b) => b.score - a.score);

    // Save rankList to local storage as a JSON string
    localStorage.setItem('rankings', JSON.stringify(rankList));

    // Update rankings display
    updateRankings();
}

function updateRankings() {
    // Retrieve rankList from local storage if it exists
    const storedRankings = localStorage.getItem('rankings');

    if (storedRankings) {
        rankList = JSON.parse(storedRankings);
    }
    // Clear existing rankings
    rankings.innerHTML = "";


    // Display the updated rankings
    rankList.forEach((entry, index) => {
        const rankEntry = document.createElement("li");
        rankEntry.textContent = `${index + 1}. ${entry.initials}: ${entry.score}`;
        rankings.appendChild(rankEntry);
    });
}

function restartQuiz() {
  // Reset variables or states to their initial values
  score = 0;
  currentQuestionIndex = 0;

  // Clear user input or selections
  clearUserSelections();

  // Update the quiz interface to show the first question
  showQuestion(currentQuestionIndex);

  // Show the questions section and hide the finished section
  questions.style.display = "block";
  finished.style.display = "none";

  // Reset the timer
  seconds = 28;
  timer.textContent = `Time: ${seconds}s`;


// Call the function when the "Try Again" button is clicked




function clearUserSelections() {
  // Clear the selected answer for each answer button
  answer1Btn.checked = false;
  answer2Btn.checked = false;
  answer3Btn.checked = false;
  answer4Btn.checked = false;

  // Clear any existing message in the rightWrong section
  rightWrong.textContent = "";
}

function showQuestion(index) {
  // Get the current question object
  const currentQuestion = quiz[index];

  // Update the quiz interface to display the current question
  questions.textContent = currentQuestion.question;
  answer1Btn.textContent = currentQuestion.answers[0];
  answer2Btn.textContent = currentQuestion.answers[1];
  answer3Btn.textContent = currentQuestion.answers[2];
  answer4Btn.textContent = currentQuestion.answers[3];
}}


// Add event listeners to all buttons for the click event
document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', (event) => {
        // Check the id of the button clicked
        switch (button.id) {
            case "start":
                startQuiz();
                break;
            case "scoreSubmission":
                addScore(seconds);
                break;
            case "tryAgain":
                // 
                restartQuiz();
                break;
            case "clearScores":
                
                break;
            case "viewScores":
                
                break;
            case "answer1":
            case "answer2":
            case "answer3":
            case "answer4":
                handleAnswerSelection(button.textContent);
                break;
            default:
                
                break;
        }
    });
});





