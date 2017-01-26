 

//Required packages
var inquirer = require("inquirer");
var fs = require("fs");
//Required Variables if I choose to go the route of having seperate files for basic and cloze
var basicCard = require("./basicCard.js");
// var clozeCard = require("./clozeCard.js");
// var questions = require("./questions.json");
// var count = 0;

//BASIC CARD CONSTRUCTOR
 function BasicCard(front,back){
  console.log("basic card")
  this.front = front;
  this.back = back;
};

var count = 0;
//Function which prompts the user to select what type of flashcard to select
var askQuestionType = function(){
//Inquirer Package gives drop down list of Flashcard choices
inquirer.prompt([
  {
    type: "list",
    message: "Choose from the Following:",
    choices: ["Basic", "Cloze"],
    name: "chooseType"
  }
  ]).then(function(userInput) {
    //If user selects  Basic the askBasicQuestion function will trigger
  	if(userInput.chooseType === "Basic"){
  		console.log("choosing Basic");
  		askBasicQuestion();
    //If user selects Cloze the askClozeQuestion function will trigger
  	}else if(userInput.chooseType === "Cloze"){
  		console.log("choosing Cloze")
    }
   });
 }

 askQuestionType();



function askBasicQuestion() {
  //new card will populate from the basicCard.js with the question and answer
	var newCard = new BasicCard(basicCard.basicQuestions[count].front,
		basicCard.basicQuestions[count].back);
  //text will display the question and require the user to type the answer
	inquirer.prompt([
	{
		type:"input",
		message: newCard.front,
		name: "userAnswer"
	}
  //if the user types in the exact answer the console will display "You got it right" and the count will increment up
	]).then(function(user){
		var correctChoice = newCard.back;
		if(user.userAnswer === correctChoice){
			console.log("You got it right!");
			count++;
			askBasicQuestion();
      //If user types in the incorrect answer the console will log (You got it wrong, the correct answer is__)
		}else{
			console.log("You got it wrong, the correct answer is: " + newCard.back);
			count++;
      startOverBasic();
			askBasicQuestion();
		}
	});
}

function startOverBasic(){
     inquirer.prompt([
  {
    name: "start",
    message: "Which flash cards do you want?  Type Basic or Cloze to select."

  }
    ]).then(function (answers) {
    if (answers.start === "Basic") {
      askQuestion();
    }
    else {
      console.log("Clozure Function")
    }
});
}

startOverBasic();



