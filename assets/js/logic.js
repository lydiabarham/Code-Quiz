// add event listener to start quiz button
const startButton = document.querySelector("#start");
const questionSection = document.querySelector("#questions");
const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#end-screen");

let currentQuestionIndex = 0;

// create funtion to display questions
const showQuestion = function (index) {
    questionSection.innerHTML = "";

    let questionContainer = document.createElement("div");
    let questionAsk = document.createElement("h2");
    let questionAnswerList = document.createElement("ol");

    // display question title
    questionAsk.textContent = questionsArray[index].questionTitle;

    // display options 
    for (let i = 0; i < questionsArray[index].options.length; i++) {
        let listItem = document.createElement("li");
        let optionButton = document.createElement("button");
        optionButton.textContent = questionsArray[index].options[i];
        listItem.appendChild(optionButton);
        questionAnswerList.appendChild(listItem);
        optionButton.style.padding = "2px";
    }

    // append elements
    questionContainer.appendChild(questionAsk);
    questionContainer.appendChild(questionAnswerList);
    questionSection.appendChild(questionContainer);
};

const startQuiz = function (event) {
    event.preventDefault();
    questionSection.setAttribute("class", "show");
    showQuestion(currentQuestionIndex);
    startScreen.setAttribute("class", "hide");
}

const nextQuestion = function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsArray.length) {
        showQuestion(currentQuestionIndex);
    } else {
        endScreen.setAttribute("class", "show");
    }
};

startButton.addEventListener("click", startQuiz);
questionSection.addEventListener("click", nextQuestion);


