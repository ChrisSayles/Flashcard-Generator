 

//Required packages
var inquirer = require("inquirer");
var fs = require("fs");
//Required Variables if I choose to go the route of having seperate files for basic and cloze
var basicCard = require("./basicCard.js");
// var clozeCard = require("./clozeCard.js");
// var questions = require("./questions.json");
var count = 0;

var askQuestion = function(){
inquirer.prompt([
  {
    type: "list",
    message: "Choose from the Following:",
    choices: ["Basic", "Cloze"],
    name: "chooseType"
  }
  ]).then(function(userInput) {
  	if(userInput.chooseType === "Basic"){
  		console.log("choosing Basic");
  		askBasicQuestion();
  	}else if(userInput.chooseType === "Cloze"){
  		console.log("choosing Cloze")
    }else{
    	console.log("Please spell the word correctly");
    }
   });
 }

 askQuestion();

//BASIC CARD CONSTRUCTOR
 function BasicCard(front,back){
	console.log("basic card")
	this.front = front;
	this.back = back;
};

function askBasicQuestion() {
	var newCard = new BasicCard(basicCard.basicQuestions[count].front,
		basicCard.basicQuestions[count].back);

	inquirer.prompt([
	{
		type:"input",
		message: newCard.front,
		name: "userAnswer"
	}
	]).then(function(user){
		var correctChoice = newCard.back;
		if(user.userAnswer === correctChoice){
			console.log("You got it right!");
			count++
			startOverBasic();
			askBasicQuestion();
		}else{
			console.log("You got it wrong, the correct answer is: " + newCard.back);
			count++;
			startOverBasic()
			askBasicQuestion();
		}
	});
}

function startOverBasic(){
    if(count === basicCard.basicQuestions.length){
        inquirer.prompt([

            {
                type: "confirm",
                message: "Would you like to play again?",
                name: "playAgain"
            }

        ]).then(function(user){
            if(user.playAgain === true){
                count = 0;
                askBasicQuestion();
            }
            else {
                askQuestion();
            }

        });
    }
}


