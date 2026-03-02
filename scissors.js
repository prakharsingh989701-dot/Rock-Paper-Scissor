let userScore = 0;
let compScore = 0;



const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



const playGame = (userChoice) => {
    console.log("user choice is", userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice is", compChoice);

    if(userChoice === compChoice) {
        console.log("It's a tie!");
        msg.textContent = "It's a tie!";
        msg.style.background = "#081b31";
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "scissor";
        } else if(userChoice === "paper") {
            userWin = compChoice === "rock";
        } else if(userChoice === "scissor") {
            userWin = compChoice === "paper";
        }
        if(userWin) {
            console.log("You win!");
            msg.textContent = "You win! " + userChoice + " beats " + compChoice;
            msg.style.background = "green";
        } else {
            console.log("You lose!");
            msg.textContent = "You lose! " + compChoice + " beats " + userChoice;
            msg.style.background = "red";
        }
        updateScore(userWin);

    }
};



const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];

}



const updateScore = (userWin) => {
    if(userWin) {
        userScore++;
        userScoreSpan.textContent = userScore;
    } else {
        compScore++;
        compScoreSpan.textContent = compScore;
    }
}
