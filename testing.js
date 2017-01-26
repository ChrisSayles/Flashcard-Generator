//Required packages
var inquirer = require("inquirer");
var fs = require("fs");
//Required Variables if I choose to go the route of having seperate files for basic and cloze
// var basicCard = require("./basicCard.js");
// var clozeCard = require("./clozeCard.js");
var questionCount = 0;

//Constructor Function that will be used for our Basic Card set 
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

//Constructor Function that will be used for our Cloze Card set 
function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.completeCloze = function () {
        return this.text + this.cloze;
    }
}

//Basic Flashcard Questions
var question1 = new BasicCard("Which group had their first US number one on the Billboard chart in 1965 with 'My Girl'?", "The Temptations");
var question2 = new BasicCard("Who recorded 'You Are The Sunshine Of My Life'?", "Stevie Wonder");
var question3 = new BasicCard("The Supremes were one of the sixties most popular groups. Who was the best known lead singer of this famous female trio?", "Dianna Ross");
var question4 = new BasicCard("Who was the lead singer with Motown group The Miracles in the 1960s?", "Smokey Robinson");
var question5 = new BasicCard("Too Busy Thinking 'bout My Baby' was a hit single for which Motown artist?", "Marvin Gaye");
var question6 = new BasicCard("What year did the Jackson 5 leave Motown to sign with Epic Records?", "1975");
var question7 = new BasicCard("It was at the 'Motown 25: Yesterday, Today, Forever' special that this artist first publicly performed his moonwalk on national television. Who was this great artist?", "Michael Jackson");
var question8 = new BasicCard("Which Motown artist had a hit with, 'What Becomes Of The Brokenhearted'?", "Jimmy Ruffin");
var question9 = new BasicCard("In which US city was Motown records originally based?", "Detroit");
var question10 = new BasicCard("You and I must make a pact, we must bring salvation back. Where there is love, I'll be there...Was sung by which group ", "Jackson 5");
var question11 = new BasicCard("Who founded Motown Records Motown Records?", "Berry Gordy Jr.");

//storing Basic Card Questions into an array that will be looped through
var basicQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11];

//Function for Basic Cards
var askBasicQuestions = function(){
    if(questionCount < basicQuestions.length) {
        inquirer.prompt([
            {
                name: "response",
                message: basicQuestions[questionCount].front
            }
        ]).then(function(answers) {
            if(answers.response === basicQuestions[questionCount].back) {
                console.log("Right");
            } else {
                console.log("That is incorrect.  The right choice is" + basicQuestions[questionCount].back);
            }

            questionCount++;
            askBasicQuestions();
        });
    }else{
        var gameEnd = true;
        questionCount=0;
        if(gameEnd === true)
        {
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "game",
                    message: "Do you want to play again?"
                }
            ]).then(function (answers) {
                if(answers.game === true) {
                    startGame();
            gameEnd = false;
                }else {
                    console.log("Talk to you later");
                }
            });
        }
    }
}

//Function to start game
var startgame = function () {
  inquirer.prompt([/* Pass your questions in here */
  {
    name: "start",
    // message: "Which flash cards do you want?  Type Basic or Cloze to select."

  }
    ]).then(function (answers) {
    if (answers.start === "Basic") {
      askBasicQuestion();
    }
});
}

startgame();
