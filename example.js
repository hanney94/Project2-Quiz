//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;


//Quiz questions and options

const quizArray = [
  {
    id: "0",
    question: "ABBA formed in 1972 in which city?",
    options: ["Stockholm, Sweden", "Barcelona, Spain", "Lisbon, Portugal", "Copenhagen, Denmark"],
    correct: "Stockholm, Sweden",
  },
  {
    id: "1",
    question: "What year did ABBA win Eurovision?",
    options: ["1978", "1974", "1970", "1977"],
    correct: "1974",
  },
  {
    id: "2",
    question: "What was the band’s last single? It was released in 1983.",
    options: ["Mamma Mia", "SOS", "Thank You For The Music", "Andante Andante"],
    correct: "Thank You For The Music",
  },
  {
    id: "3",
    question: "In the lyrics, how old was the Dancing Queen?",
    options: ["22", "17", "40", "19"],
    correct: "17",
  },
  {
    id: "4",
    question: "How many UK number one singles have ABBA had?",
    options: ["3", "9", "7", "5"],
    correct: "9",
  },
  {
    id: "5",
    question: "Which member of ABBA sang lead the most?",
    options: ["Agnetha", "Benny", "Frida", "Björn"],
    correct: "Agnetha",
  },
  {
    id: "6",
    question: "What was the name of ABBA's manager?",
    options: ["Lou Pearlman", "Peter Grant", "Malcolm McLaren", "Stig Anderson"],
    correct: "Stig Anderson",
  },
  {
    id: "7",
    question: "Which ABBA member wasn't Swedish?",
    options: ["Björn", "Benny", "Frida", "Agnetha"],
    correct: "Frida",
  },
  {
    id: "8",
    question: "Who is the oldest member of ABBA?",
    options: ["Björn", "Benny", "Frida", "Agnetha"],
    correct: "Björn",
  },
  {
    id: "9",
    question: "Complete the line from \"Mamma Mia\" : \"I've been cheated by you ___.\"",
    options: ["Since we started", "And I think you know since when", "Since I don't know when", "Since you walked out my room"],
    correct: "Since I don't know when",
  },
];


//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener("click", 
	(displayNext = () =>
{
	//increment questionCount
	questionCount += 1;
	//if last question
	if (questionCount == quizArray.length) {
		//hide question container and display score
		displayContainer.classList.add("hide");
		scoreContainer.classList.remove("hide");
		//user score
		userScore.innerHTML =
		"Your score is " + scoreCount + " out of " + questionCount + "!";
	}
	else {
		//display questionCount
		countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length 
		+ " Questions";
		//display Quiz
		quizDisplay(questionCount);
		count = 11;
		clearInterval(countdown);
		timerDisplay();
	}

}))




//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};


//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};


	

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML =  1 + " of " + quizArray.length + " Questions";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");
  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }
  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}


//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});
//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};



