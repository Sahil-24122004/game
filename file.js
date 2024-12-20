let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const  msg = document.querySelector("#msg");

const  userScorePara = document.querySelector("#user-score");
const  compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
  const options = ["rock", "paper","scissors"];
  const  randIdx = Math.floor(Math.random() *3);
  return options[randIdx];
}

const drawGame = () => {
  msg.innerText ="Game was Draw. Play Again";
  msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userChoice, compChoice) => {
  if(userwin) {
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    msg.innerText = `you lost. ${compChoice} beats your  ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};


const playGame = (userChoice) => {
 console.log("user choice = ", userChoice);
 //Genrate computer choice
 const compChoice = genCompChoice();
 console.log("comp choice = ", compChoice);

if(userChoice === compChoice) {
  //draw game
  drawGame();
} else {
  let userwin = true;
  if(userChoice === "rock") {
    //scissors, paper
    userwin = compChoice === "paper" ? false : true;
  } else if(userChoice === "paper") {
    //rock , scissors
    userwin = compChoice === "scissors" ? false : true;
  } else {
    //rock, paper
    userwin = compChoice === "rock" ? false : true;
  }
  showwinner(userwin, userChoice, compChoice);
}
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
