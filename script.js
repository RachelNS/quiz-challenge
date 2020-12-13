// This is the p tag in the upper left corner that displays the time countdown
var timeLeft = document.querySelector("#timer");

// This is the "start quiz" button
var startButton = document.querySelector("#start");

// This is the p tag giving instructions to the user at the start of the quiz
var introText = document.querySelector("#intro");

// This is the h1 tag that says the name of the quiz
var titleText = document.querySelector("big-text");




var startTime = 60;

// Timer counts down 60 seconds, stops at zero
function countDown() {
    var timeInterval = setInterval(function() {
        startTime--;
        timeLeft.textContent = "Time: " + startTime; 
        if (startTime === 0 ) {
            clearInterval(timeInterval);
            timeLeft.textContent = "Time's up!"
        }
    }, 1000);
}

// When user clicks "start quiz" button, countdown begins and intro paragraph disappears
startButton.addEventListener("click", function(){
    countDown();
    introText.textContent = "";

    var firstQuestion = {
        question: "Here is a question.",
        answer1: "clever but wrong answer.",
        answer2: "second wrong answer.",
        answer3: "wrong again!", 
        answer4: "finally, you got one right."
    }


})











    // TODO: While loop--while timer is not zero and there are more questions, these things happen
            // TODO: Questions disappear when they are answered, and are replaced with the next question. Each question is an unordered list with possible answers.
            // TODO: If they click the correct answer, their score goes up. 
            // TODO: If they answer incorrectly, deduct 10 seconds from the timer.

    // TODO: When all questions are answered or the timer runs out, display "game over" message with score
        // TODO: Collect user initials and score, store in local storage
        // TODO: If they click "view high scores" button, retrieve user data from local storage and display
