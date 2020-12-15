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
var startTime = 5;

// Score @ beginning of game (not displayed)
var score = 5;

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

    
    // For each index in the quiz array, run this block of code
    quiz.forEach(function(quiz){
        // Set h2 tag to current question text
        questionText = quiz.question;
        // Loop over each answers array and create a new tag to hold the text of each answer
        for(i=0; i<quiz.answers.length; i++) {
            var answerList = document.createElement("li"); 
            answerList.textContent = quiz.answers[i];
            chocieList.appendChild(answerList);
        }
    });

    // // Loop over quiz array displaying each question in the h2 tag
    // for (var i = 0; i < quiz.length; i++) {
    //     questionText = quiz[i].question;
    //     console.log(questionText);
    // }

    // // Loop over the answers for each question and create a new li tag to hold each answer
    // for (var j = 0; j < quiz[j].answers.length; j++) {
    //     var answerList = document.createElement("li");
    //     answerList.textContent = quiz[j].answers[j];
    //     chocieList.appendChild(answerList);
    // }

})



// Tracking variable for while loop
// var i = 0

// As long as there is still time on the clock and the quiz has not run out of questions, run the following block of code
// while (timeLeft !== 0 && i < quiz.length) {

//     // For each 
//     for (var j = 0; j < quiz[i].answers.length; j++) {
//         questionText.textContent = quiz[i].question;

//         var answerList = document.createElement("li");
//         answerList.textContent = quiz[i].answers[j];
//         chocieList.appendChild(answerList);

//         chocieList.addEventListener("click", function (event) {
//             if (event.target.textContent === quiz[i].correctAnswer) {
//                 score++;
//                 console.log(score);
//             }
//             else {
//                 timeLeft = timeLeft - 10;
//             }
//             questionText.textContent = "";
//             answerList.textContent = "";


//         });
//         i++;
//     }
// }


        // for (var i=0; i<quiz.length; i++) {

        // }

        // for (var i = 0; i < quiz[0].answers.length; i++) {
        //     var answerList = document.createElement("li");
        //     answerList.textContent = quiz[0].answers[i];
        //     chocieList.appendChild(answerList);
        // }

        // chocieList.addEventListener("click", function (event) {
        //     if (event.target.textContent === quiz[0].correctAnswer) {
        //         score++;
        //         console.log(score);
        //     }
        //     else {
        //         timeLeft = timeLeft - 10;
        //     }

        // })



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

// This variable is used to store the last user's data in local storage
userScore.value = score;
var user = {
    initials: userInitials.value,
    userScore: score   
};

if(score>=3) {
    userResults.textContent = "Flame-o, Hotman! Brag to your friends!"
}
else{
    userResults.textContent = "That's rough, buddy. Tell everyone how much you suck."
}

// When user submits their data, it will be collected and stored in local storage
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    if(userInitials.value==="") {
        userResults.textContent = "Please enter your initials!"
    }
    else{
        userResults.textContent = "Success! Everyone knows your score now!"
        // Send user data to local storage
        localStorage.setItem("user", JSON.stringify(user));
    }
})

// Retrieve last user data from local storage
highScores.addEventListener("click", function(){
userResults.textContent = "Here ya go, nosy!";
var lastHighScore = localStorage.getItem("user", JSON.parse(user));
console.log (lastHighScore);
userInitials.value = lastHighScore.initials;
userScore.value = lastHighScore.score;
})



