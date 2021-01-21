var readLineSync = require('readline-sync');
const chalk = require('chalk');
var userName =readLineSync.question(chalk.red(' May i have your name?'));
console.log(chalk.blue(userName));
var welcomeMessage = "Welcome " + userName;
console.log(chalk.green(welcomeMessage));

var readLineSync = require("readline-sync");
var score = 0;


function play(question, answer){
  var userAnswer = readLineSync.question(question);

  if (userAnswer === answer){
    console.log(chalk.green.bold("You are right!"));
    score = score + 1;
  } else {
  console.log(chalk.red.bold("you are wrong!"));
  score = score - 1;
  }

}

play("The language spoken by the people by Indian is? ", "Hindi");

play("The World Largest desert is?", "Sahara");
play("Country that has the highest in Barley Production ? ",  "Russia");
play("The metal whose salts are sensitive to light is ? ", "Silver");
play("The Central Rice Research Station is situated in ? ", "Cuttak");


console.log(chalk.yellow.bold("Your score is ", score));
