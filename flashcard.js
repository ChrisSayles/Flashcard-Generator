//Required packages
var inquirer = require("inquirer");
var fs = require("fs");
//Required Variables for External Files
var basicCard = require("./basicCard.js");
var clozeCard = require("./clozeCard.js");



//BASIC CARD CONSTRUCTOR
 function BasicCard(front,back){
  console.log("basic card")
  this.front = front;
  this.back = back;
};
function ClozeCard(text,cloze){
  this.text = text;
  this.cloze = cloze;
  this.fullText = function(){
    return this.text + this.cloze;
  }
}
var count = 0;
var score = 0;




var askQuestion = function() {
if (count < basicCard.basicQuestions.length) {

    inquirer.prompt([
      {
        name: "input",
        message: basicCard.basicQuestions[count].front
      }
    ]).then(function(answers) {
      if (answers.input === basicCard.basicQuestions[count].back) {
        console.log("You're Groovin!");
        score++;
      } else {
        console.log("Who's Bad?.  The correct answer is " + basicCard.basicQuestions[count].back);
      }
      
      count++;
      askQuestion();
    });
  } else {

      var gameOver = true;
      count = 0;
      if (gameOver === true)
        {
          inquirer.prompt([
            {
              type: "list",
              name: "game",
              message: "Was it just my imagination? Your Score was " + score + " answers correct\n  Would you like to try again?",
              choices: ["Yes", "No"]
            }
            ]).then(function (answer) {
            if(answer.game === "Yes") {
              startgame();
              endGame = false;
            } else {
              console.log("I know you want to leave me but i refuse to let you go!");
            }

        });

    }

  }
}

var askCloze = function() {
  function ClozeCard(text,cloze){
  this.text = text;
  this.cloze = cloze;
  this.fullText = function(){
    return this.text + this.cloze;
  }
};
if (count < clozeCard.clozeQuestions.length) {
  inquirer.prompt([
      {
        name: "input",
        message: clozeCard.clozeQuestions[count].text + "____________"
      }
     ]).then(function(answers) {
      if (answers.input === clozeCard.clozeQuestions[count].cloze) {
        console.log("You're Groovin!");
        score++;
      } else {
        console.log("Who's Bad?.  The correct answer is " + clozeCard.clozeQuestions[count].cloze);
      }
      count++;
      askCloze();
    });
     } else {

      var gameOver = true;
      count = 0;
      if (gameOver === true)
        {
          inquirer.prompt([
            {
              type: "list",
              name: "game",
              message: "Was it just my imagination? Your Score was " + score + " answers correct\n  Would you like to try again?",
              choices: ["Yes", "No"]
            }
            ]).then(function (answer) {
            if(answer.game === "Yes") {
              startgame();
              endGame = false;
            } else {
              console.log("I know you want to leave me but i refuse to let you go!");
            }

        });

    }

  }
}

  





var startgame = function () {
  count=0;
  score=0;
  inquirer.prompt([
  {
    type: "list",
    message: "Choose from the Following:",
    choices: ["Basic", "Cloze"],
    name: "chooseType"
  }
    ]).then(function (answers) {
    if (answers.chooseType === "Basic") {
      askQuestion();
    }
    else {
      askCloze();
    }
});
}

startgame(); 
