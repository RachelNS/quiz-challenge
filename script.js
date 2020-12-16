// This is the p tag in the upper left corner that displays the time countdown
var timeLeft = document.querySelector("#timer");

// This is the "yip yip" button
var startButton = document.querySelector("#start");

// This is the p tag giving instructions to the user at the start of the quiz
var introText = document.querySelector("#intro");

// This is the h1 tag that says the name of the quiz
var titleText = document.querySelector("#big-text");

// This is the h2 tag that will contain the question text
var questionText = document.querySelector("#question-text")

// This is the div containing the questions
var chocieList = document.querySelector("#choices");

// This is the form users will use to submit their initials and score
var userStats = document.querySelector("#user-stats")

// This is where the user's score will be displayed at the end of the game
var userScore = document.querySelector("#score-display")

// This is the input field for user initials
var userInitials = document.querySelector("#initials-input");

// This is the button for users to submit their stats
var submitButton = document.querySelector("#submit");

// This is the h3 tag displaying the results of the quiz
var userResults = document.querySelector("#results");

// This is the button to display previous user scores
var highScores = document.querySelector("#highscores");

// Time displayed in timeLeft @ start of game
var startTime = 60;

// Score @ beginning of game (not displayed)
var score = 0;

// index of current iteration
var index = 0;

// At the start of the quiz, the user's score information is hidden
userStats.style.display = "none";

// This lays out quiz questions and their answers, indicating which are correct
var quiz = [
    {
        question: "All old people know each other! Don't you know that?",
        answers: ["Master Pakku", "King Bumi", "Admiral Zhao", "Uncle Iroh",],
        correctAnswer: "King Bumi"
    },
    {
        question: "Hey! We're in enemy territory. Those are enemy birds.",
        answers: ["Zuko", "Toph", "Mai", "Sokka",],
        correctAnswer: "Sokka",
    },
    {
        question: "It's easy to do nothing. It's hard to forgive.",
        answers: ["Aang", "Katara", "Gran-Gran", "Uncle Iroh"],
        correctAnswer: "Aang",
    },
    {
        question: "Very well. But first I must finish my roast duck.",
        answers: ["Uncle Iroh", "Jeong Jeong", "Monk Gyatso", "Master Piandao",],
        correctAnswer: "Uncle Iroh",
    },
    {
        question: "Oh, Sokka, just hold hands.",
        answers: ["Toph", "Aang", "Katara", "Princess Yue"],
        correctAnswer: "Katara",
    },
    {
        question: "My own mother thought I was a monster. She was right, of course, but it still hurt.",
        answers: ["Sokka", "Haru", "Azula", "Jet",],
        correctAnswer: "Azula",
    },
    {
        question: "You've seen nothing once, you've seen it a thousand times.",
        answers: ["Zuko", "Toph", "Suki", "Katara",],
        correctAnswer: "Toph",
    },
    {
        question: "Stealing is wrong...unless it's from pirates.",
        answers: ["Aang", "Suki", "Katara", "Hama"],
        correctAnswer: "Katara",
    },
    {
        question: "Pants are an illusion, and so is death.",
        answers: ["Huu", "Aunt Wu", "The Earth King", "Guru Pathik"],
        correctAnswer: "Huu",
    },
    {
        question: "My cabbages!",
        answers: ["Come on now", "You know this", "Seriously, this one's a gimmie", "Cabbage vendor",],
        correctAnswer: "Cababge vendor",
    }
]

// Timer counts down 60 seconds, stops at zero
function countDown() {
    var timeInterval = setInterval(function () {
        startTime--;
        timeLeft.textContent = "Time Remaining: " + startTime;
        if (startTime === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

// Displays the question of each quiz index, loops over each answers array creating the list of answers for each question
function renderQuiz() {
    chocieList.textContent = "";
    questionText.textContent = quiz[index].question;
    for (i = 0; i < quiz[index].answers.length; i++) {
        var answerList = document.createElement("li");
        answerList.textContent = quiz[index].answers[i];
        chocieList.appendChild(answerList);
    }

    // When time runs out or we run out of questions, display the user's stats
    if(startTime <= 0 || index === 9) {
        chocieList.style.display = "none";
        timeLeft.style.display = "none";
        questionText.textContent = "";
        userStats.style.display = "block";

        // Scorecard message changes based on user's score
        if (score >= 5) {
            userResults.textContent = "Flame-o, Hotman! Brag to your friends!"
        }
        else {
            userResults.textContent = "That's rough, buddy. Tell everyone how much you suck."
        }
    
    }

}

// // When user clicks "start quiz" button, countdown begins and intro paragraph disappears
startButton.addEventListener("click", function () {
    countDown();
    introText.textContent = "";
    titleText.textContent = "";
    startButton.style.display = "none";
    renderQuiz();
})

// When user clicks on their answer choice, their score incrases if it is correct and the time remaining decreases if it is incorrect
document.querySelector("#choices").addEventListener("click", function (event) {
    if (event.target.textContent === quiz[index].correctAnswer) {
        score++;
        console.log(score);
    }
    else {
        startTime = startTime - 10;
    }
    // Repeat the function for the next index in the quiz array
    index++;
    renderQuiz();
})



// This variable is used to store the last user's data in local storage
userScore.value = score;
var user = {
    initials: userInitials.value,
    userScore: score
};



// When user submits their data, it will be collected and stored in local storage
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (userInitials.value === "") {
        userResults.textContent = "Please enter your initials!"
    }
    else {
        userResults.textContent = "Success! Everyone knows your score now!"
        // Send user data to local storage
        localStorage.setItem("user", JSON.stringify(user));
    }
})

// Retrieve last user data from local storage
highScores.addEventListener("click", function () {
    userResults.textContent = "Here ya go, nosy!";
    var lastHighScore = localStorage.getItem("user", JSON.parse(user));
    console.log(lastHighScore);
    userInitials.value = lastHighScore.initials;
    userScore.value = lastHighScore.score;
})



