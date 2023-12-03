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

// add questions array to questions div
let questionAsk = document.querySelector("#question-title");
let questionAnswer = document.querySelector("#choices"); 

let questionAnswerList = document.createElement("ol");
let listItems = document.createElement("li");
questionAnswerList.appendChild(listItems);


const renderQuestions = function() {
    for (let i = 0; i < questionsArray.length; i++) { 
        questionAsk.textContent = questionsArray[i].questionTitle;
        listItems = questionsArray[i].optionOne;
        
        questionAnswer.textContent = listItems;
    };
    
}   

    renderQuestions();