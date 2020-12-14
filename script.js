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
var startTime = 5;

// Score @ beginning of game (not displayed)
var score = 0;

// This lays out quiz questions and their answers, indicating which are correct
var quiz = [
    {
        question1: "All old people know each other! Don't you know that?",
        answers1: [
            { text: "Master Pakku", correct: false },
            { text: "King Bumi", correct: true },
            { text: "Admiral Zhao", correct: false },
            { text: "Uncle Iroh", correct: false },
        ]
    },
    {
        question2: "Hey! We're in enemy territory. Those are enemy birds.",
        answers2: [
            { text: "Zuko", correct: false },
            { text: "Toph", correct: false },
            { text: "Mai", correct: false },
            { text: "Sokka", correct: false },
        ]
    },
    {
        question3: "Very well. But first I must finish my roast duck.",
        answers3: [
            { text: "Uncle Iroh", correct: true },
            { text: "Jeong Jeong", correct: false },
            { text: "Monk Gyatso", correct: false },
            { text: "Master Piandao", correct: false },
        ]
    },
    {
        question4: "My own mother thought I was a monster. She was right, of course, but it still hurt.",
        answers4: [
            { text: "Sokka", correct: false },
            { text: "Haru", correct: false },
            { text: "Azula", correct: true },
            { text: "Jet", correct: false },
        ]
    },
    {
        question5: "You've seen nothing once, you've seen it a thousand times.",
        answers5: [
            { text: "Zuko", correct: false },
            { text: "Toph", correct: true },
            { text: "Suki", correct: false },
            { text: "Katara", correct: false },
        ]
    },
    {
        question6: "My cabbages!",
        answers6: [
            { text: "Come on now", correct: false },
            { text: "You know this", correct: false },
            { text: "Seriously, this one's a gimmie", correct: false },
            { text: "Cabbage vendor", correct: true },
        ]
    }
]

console.log(quiz);

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

})














    // TODO: While loop--while timer is not zero and there are more questions, these things happen
            // TODO: Questions disappear when they are answered, and are replaced with the next question. Each question is an unordered list with possible answers.
            // TODO: If they click the correct answer, their score goes up. 
            // TODO: If they answer incorrectly, deduct 10 seconds from the timer.

    // TODO: When all questions are answered or the timer runs out, display "game over" message with score
        // TODO: Collect user initials and score, store in local storage. If score is greater than 3, display "Flame-O, hotman! Brag to your friends!" If score is lower than 3, display "That's rough, buddy. Tell everyone how much you suck."
        // TODO: If they click "view high scores" button, retrieve user data from local storage and display



