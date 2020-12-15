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

// Time displayed in timeLeft @ start of game
var startTime = 60;

// Score @ beginning of game (not displayed)
var score = 0;

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
        question: "Very well. But first I must finish my roast duck.",
        answers: ["Uncle Iroh", "Jeong Jeong", "Monk Gyatso", "Master Piandao",],
        correctAnswer: "Uncle Iroh",
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
            timeLeft.textContent = "Time's up!"

        }

    }, 1000);
}

// // When user clicks "start quiz" button, countdown begins and intro paragraph disappears
startButton.addEventListener("click", function () {
    countDown();
    introText.textContent = "";
    titleText.textContent = "";
    startButton.style.display = "none";
    questionText.textContent = quiz[0].question;

    // TODO: For each iteration of "quiz:"
    // -Change questionText (h2) content to "quiz[i]"
    // -Change answerList (li) text to quiz[i].answers[j]
    // 



    for (var i = 0; i < quiz[0].answers.length; i++) {
        var answerList = document.createElement("li");
        answerList.textContent = quiz[0].answers[i];
        chocieList.appendChild(answerList);  
    }

    chocieList.addEventListener("click", function (event){
        if(event.target.textContent===quiz[0].correctAnswer) {
            score++;
            console.log(score);
        }
    })

    






})


//     // TODO: for loop going over quiz array, generate an li element for each answer. If the answer is correct, blah blah blah if the answer is wrong blah blah blah
//     // TODO: seperate html for score page?

// })














    // TODO: While loop--while timer is not zero and there are more questions, these things happen
            // TODO: Questions disappear when they are answered, and are replaced with the next question. Each question is an unordered list with possible answers.
            // TODO: If they click the correct answer, their score goes up. 
            // TODO: If they answer incorrectly, deduct 10 seconds from the timer.

    // TODO: When all questions are answered or the timer runs out, display "game over" message with score
        // TODO: Collect user initials and score, store in local storage. If score is greater than 3, display "Flame-O, hotman! Brag to your friends!" If score is lower than 3, display "That's rough, buddy. Tell everyone how much you suck."
        // TODO: If they click "view high scores" button, retrieve user data from local storage and display