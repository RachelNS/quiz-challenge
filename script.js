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

// This is the ul tag containing the questions
var chocieList = document.querySelector("#choices");

// Time displayed in timeLeft @ start of game
var startTime = 60;

// Score @ beginning of game (not displayed)
var score = 0;

// First question in the quiz
var firstQuestion = {
    question: "All old people know each other! Don't you know that?",
    answer1: "Master Pakku",
    answer2: "King Bumi",
    answer3: "Admiral Zhao",
    answer4: "Uncle Iroh",
}

// Second question in the quiz
var secondQuestion = {
    question: "Hey! We're in enemy territory. Those are enemy birds.",
    answer1: "Zuko",
    answer2: "Toph",
    answer3: "Mai",
    answer4: "Sokka",
}

// Third question in the quiz
var thirdQuestion = {
    question: "Very well. But first I must finish my roast duck.",
    answer1: "Uncle Iroh",
    answer2: "Jeong Jeong",
    answer3: "Monk Gyatso",
    answer4: "Master Piandao",
}

// Fourth question in the quiz
var fourthQuestion = {
    question: "My own mother thought I was a monster. She was right, of course, but it still hurt.",
    answer1: "Sokka",
    answer2: "Haru",
    answer3: "Azula",
    answer4: "Jet",
}

// Fifth question in the quiz
var fifthQuestion = {
    question: "You've seen nothing once, you've seen it a thousand times.",
    answer1: "Zuko",
    answer2: "Toph",
    answer3: "Suki",
    answer4: "Katara",
}

// Sixth question in the quiz
var sixthQuestion = {
    question: "My cabbages!",
    answer1: "Come on now",
    answer2: "Keep looking",
    answer3: "Seriously, this one's a gimmie",
    answer4: "Cabbage vendor",
}

// Timer counts down 60 seconds, stops at zero
function countDown() {
    var timeInterval = setInterval(function () {
        startTime--;
        timeLeft.textContent = "Time Remaining: " + startTime;
        if (startTime === 0) {
            clearInterval(timeInterval);
            timeLeft.textContent = "Time's up!"
    
        }

    }, 1000);
}
// When user clicks "start quiz" button, countdown begins and intro paragraph disappears
startButton.addEventListener("click", function () {
    countDown();
    introText.textContent = "";
    titleText.textContent = "";
    startButton.style.display = "none";

    // Populates h2 tag with question text, creates li tags to hold answer text
    questionText.textContent = firstQuestion.question;
    var firstAnswer = document.createElement("li");
    firstAnswer.textContent = firstQuestion.answer1;
    chocieList.appendChild(firstAnswer);

    var secondAnswer = document.createElement("li");
    secondAnswer.textContent = firstQuestion.answer2;
    chocieList.appendChild(secondAnswer);

    var thirdAnswer = document.createElement("li");
    thirdAnswer.textContent = firstQuestion.answer3;
    chocieList.appendChild(thirdAnswer);

    var fourthAnswer = document.createElement("li");
    fourthAnswer.textContent = firstQuestion.answer4;
    chocieList.appendChild(fourthAnswer);


})














    // TODO: While loop--while timer is not zero and there are more questions, these things happen
            // TODO: Questions disappear when they are answered, and are replaced with the next question. Each question is an unordered list with possible answers.
            // TODO: If they click the correct answer, their score goes up. 
            // TODO: If they answer incorrectly, deduct 10 seconds from the timer.

    // TODO: When all questions are answered or the timer runs out, display "game over" message with score
        // TODO: Collect user initials and score, store in local storage. If score is greater than 3, display "Flame-O, hotman! Brag to your friends!" If score is lower than 3, display "That's rough, buddy. Tell everyone how much you suck."
        // TODO: If they click "view high scores" button, retrieve user data from local storage and display
