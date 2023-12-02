// add event listener to start quiz button 
  
const startButton = document.querySelector("#start");
const questionSection = document.querySelector("#questions");
const startScreen = document.querySelector("#start-screen");

const startQuiz = function(event) {
    event.preventDefault();
    questionSection.setAttribute("class", "show");
    startScreen.setAttribute("class", "hide");
}

startButton.addEventListener("click", startQuiz);

// set first question 
// for loop to roll through all objects in the questions array
// set #question-title as questionTitle 
// options as buttons

const questionAsk = document.querySelector("#question-title");
const questionAnswer = document.querySelector("#choices"); 

const questionAnswerList = document.createElement("ol"),

/* for (var i = 0; i < questions.length; i++) { 
    questionAsk = textContent.questionTitle;
    questionAnswer = textContent.questionAnswerList;
}

// set timer (code from day one)
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}