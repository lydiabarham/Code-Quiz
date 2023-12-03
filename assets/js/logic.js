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

const renderQuestions = function (event) {
    for (let i = 0; i < questionsArray.length; i++) {
        
        let questionContainer = document.createElement("div");
        let questionAsk = document.createElement("h2");
        let questionAnswerList = document.createElement("ol");

        // display question title
        questionAsk.textContent = questionsArray[i].questionTitle;

        // display options 
        for (let j = 0; j < questionsArray[i].options.length; j++) {
            let listButton = document.createElement("button");
            listButton.textContent = questionsArray[i].options[j];
            questionAnswerList.appendChild(listButton);
            listButton.style.display = "block";
            listButton.style.padding = "2px";
        }

        // append elements
        questionContainer.appendChild(questionAsk);
        questionContainer.appendChild(questionAnswerList);
        questionSection.appendChild(questionContainer);
    };
}

renderQuestions();
