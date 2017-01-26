
//Required packages
var inquirer = require("inquirer");
var fs = require("fs");
//Required Variables for External Files
var basicCard = require("./basicCard.js");
// var clozeCard = require("./clozeCard.js");



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
};
var count = 0;
var score = 0;


var askQuestion = function() {

if (count < basicCard.basicQuestions.length) {

    inquirer.prompt([
      {
        name: "response",
        message: basicCard.basicQuestions[count].front
      }
    ]).then(function(answers) {
      if (answers.response === basicCard.basicQuestions[count].back) {
        console.log("You're Groovin!");
        score++;
      } else {
        console.log("Who's Bad?.  The correct answer is " + basicCard.basicQuestions[count].back);
      }
      
      count++;
      askQuestion();
    });
  } else {

      var endGame = true;
      count = 0;
      if (endGame === true)
        {
          inquirer.prompt([
            {
              type: "list",
              name: "game",
              message: "Was it just my imagination? Your Score was " + score + " answers correct\n  Would you like to try again?",
              choices: ["Yes", "No"]
            }
            ]).then(function (answers) {
            if(answers.game === "Yes") {
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
      console.log("Cloze Activated");
    }
});
}

startgame();
