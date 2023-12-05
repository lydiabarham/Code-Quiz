const highScoreScreen = document.querySelector(".highscores-wrapper");
let scoresLeaderboard = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");

// populate highscores page 
const addToLeaderboard = function () {
    scoresLeaderboard.innerHTML = "";

    // Loop through all items in local storage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const userData = JSON.parse(localStorage.getItem(key));

       if (userData && userData.initials && userData.score) {
            let scoreEntry = document.createElement("li");
            scoreEntry.textContent = "Name: " + userData.initials + "                                  Score: " + userData.score;
            scoresLeaderboard.appendChild(scoreEntry);
       }
    }
};

// Call the function to display high scores
addToLeaderboard();


const clearScores = function() {
    scoresLeaderboard.textContent = "";
    localStorage.clear();
}

clearButton.addEventListener("click", clearScores);
