// add event listener to start quiz button
const startButton = document.querySelector("#start");
const questionSection = document.querySelector("#questions");
const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#end-screen");
const timer = document.querySelector("#time");

let currentQuestionIndex = 0;
let questionContainer;

// create function to display questions
const showQuestion = function (index) {
    questionSection.innerHTML = "";

    questionContainer = document.createElement("div");
    let questionAsk = document.createElement("h2");
    let questionAnswerList = document.createElement("ol");

    // display question title
    questionAsk.textContent = questionsArray[index].questionTitle;

    // display options 
    for (let i = 0; i < questionsArray[index].options.length; i++) {
        let listItem = document.createElement("li");
        let optionButton = document.createElement("button");
        optionButton.classList.add('optionBtn');
        optionButton.dataset.index = i;
        optionButton.textContent = questionsArray[index].options[i];
        listItem.appendChild(optionButton);
        questionAnswerList.appendChild(listItem);
        optionButton.style.padding = "2px";
    }

    // append elements
    questionContainer.appendChild(questionAsk);
    questionContainer.appendChild(questionAnswerList);
    questionSection.appendChild(questionContainer);

    // create if statement that determines if the answer is true or false
    if (currentQuestionIndex === 0) {
        let optionButtons = questionSection.querySelectorAll('.optionBtn');
        let correctAnswer = optionButtons[1];
        correctAnswer.addEventListener("click", function() {
            nextQuestion();
        });
    } else {
        secondsLeft -= 10;
    }
};

// create function to start quiz
const startQuiz = function (event) {
    event.preventDefault();
    setTime();
    questionSection.setAttribute("class", "show");
    showQuestion(currentQuestionIndex);
    startScreen.setAttribute("class", "hide");
}

// create funtion to move to next question
const nextQuestion = function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsArray.length) {
        showQuestion(currentQuestionIndex);
    } else {
        endScreen.setAttribute("class", "show");
    }
};

// set countdown timer
let secondsLeft = 60;

const setTime = function() {
  // Sets interval in variable
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endScreen.setAttribute("class", "show");
      let endHeader = document.querySelector("#end-header");
      endHeader.innerHTML = "You ran out of time."
    }

  }, 1000);
}

// add event listeners
startButton.addEventListener("click", startQuiz);
//questionSection.addEventListener("click", nextQuestion);

