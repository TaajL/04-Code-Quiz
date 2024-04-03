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

