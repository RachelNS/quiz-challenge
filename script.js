var timeLeft = document.querySelector("#timer");
var startButton = document.querySelector("#start");

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

countDown();





// TODO: When user clicks "start quiz" button:
    // TODO: Timer starts counting down
    // TODO: Intro paragraph goes away, first question appears

    // TODO: While loop--while timer is not zero and there are more questions, these things happen
            // TODO: Questions disappear when they are answered, and are replaced with the next question. Each question is an unordered list with possible answers.
            // TODO: If they click the correct answer, their score goes up. 
            // TODO: If they answer incorrectly, deduct 10 seconds from the timer.

    // TODO: When all questions are answered or the timer runs out, display "game over" message with score
        // TODO: Collect user initials and score, store in local storage
        // TODO: If they click "view high scores" button, retrieve user data from local storage and display
