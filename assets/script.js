// Page Element Variables
const timer = document.querySelector("p.clock");     
const seconds = 90  
const points = document.querySelector("#points");
//sections
//Section beginQuiz      
const beginQuiz = document.querySelector("#beginQuiz");
// sections Q&A
const qandA = document.querySelector("Q&A");  
const questions = document.querySelector("questions");  
let questionCount = 0;
const rightWrong = document.querySelector("#rightWrong");
//Finished 
const finished = document.querySelector("#finished");
//intitals
const initials = document.querySelector("#initials");
//Rank
const rank = document.querySelector("#rank");
const rankings = document.querySelector("#rankings");
const rankList = [];
//Buttons
const viewscoreBtn = document.querySelector("#viewScore");
const startBtn = document.querySelector("#Start");
const scoresubBtn = document.querySelector("#scoreSubmission");
const tryAgainBtn = document.querySelector("#tryAgain");
const clearScoresbtn = document.querySelector("#clearScores");
// Answer Buttons 
const answerBtn = document.querySelector("button.answerBtn")
const answer1Btn = document.querySelector("#answer1")
const answer2Btn = document.querySelector("#answer2")
const answer3Btn = document.querySelector("#answer3")
const answer4Btn = document.querySelector("#answer4")

//Functions//

//Timer// 
const setClock = () => {
    const timerInterval = setInterval(() => {
      seconds--;
      Clock.textContent = `Time: ${secondsLeft}s`;

      if (secondsLeft === 0 || questionCount === questions.length) {
        clearInterval(timerInterval);
        handleQuizCompletion();
      }
    }, 1000);
  };
  
//Quiz completioon 
function handleQuizCompletion () {
    questions.style.display = "none";
    finished.style.display = "block";
    points.textContent = secondsLeft;
}

// start quiz
const statQuiz () => {
    beginQuiz.style.display = "none"
    questions.style.display = "block"
    questionCount = 0

    setClock();
    SetQeustion(questionCount)
};
// set question 
function SetQeustion(id) {
    if(id < questions.length){
        const { questions, asnwers } = questions[id];

        questions.textContent  = questions;

        [answer1Btn, answer2Btn, answer3Btn, answer4Btn].forEach((btn,i) => {
            btn.textContent = asnwers[i]; 
        });
    }
}
//Q&A True or False 
Const quiz = [ 
  {  //0
    questions: "Commonly used data types do NOT include:",
    asnwers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "2"
  },
  {  //1
    questions: "The condition in and if/else statement is enclosed within ____.",
    asnwers: ["1. qoates", "2. curly brackets", "3. parentheses", "4. square bracket"],
    correctAnswer: "1"
  },
  {  //2
    questions: "Arrays in Javascript can be used to store ____.:",
    asnwers: ["1. nubers and strings", "2. booleans", "3. other arrays", "4. all of the above"],
    correctAnswer: "2"
  },
  {  //3
    questions: "String values must be enclosed within ____ whem being assigned to varriables.:",
    asnwers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctAnswer: "2"
  },
]
  
