const chalk = require('chalk');
const readlineSync = require('readline-sync');
console.log("Welcome to the  quiz \nLet's see how much you know about Sports...\n")
let name = readlineSync.question("Please enter your goodname:\n");
console.log(`So ${name} lets begin with the quiz...\n\n`);
console.log(`For the following questions, enter the correct option no.\n\n Good Luck ${name}!!\n\n`);
let score = 0;
let answer1 = readlineSync.question("Who won the first T20 World Cup??\n 1.Srilanka \n 2.India \n 3.Pakistan \n 4.Australia\n" );
if (answer1 === "2") {
	console.log(chalk.green("Correct Answer!!"));
	score = score + 1;
	console.log(`Great start ${name} !Let's move ahead...\n`);
} else {
	console.log(chalk.red("Oops ! Your answer is incorrect.\n"));
}
let answer2 = readlineSync.question(
	"Which country has won the Cricket World Cup three times in a row?\n 1.South Africa \n 2.India\n 3.Australia\n 4.England\n");
if (answer2 === "3") {
	console.log(chalk.green("Correct Answer!!"));
	score = score + 1;
	console.log(`Good going ${name} !\n`);
} else {
	console.log(chalk.red("Oops ! Your answer is incorrect.\n"));
}
let answer3 = readlineSync.question("How many times has India won the ICC World Cup?\n 1.2\n 2.1\n 3.4\n 4.3\n");
if(answer3==="2"){
  console.log(chalk.green("Correct Answer!!\n"));
  score=score+1;
}else{
  console.log(chalk.red("Oops ! Your answer is incorrect.\n"));
}
let answer4=readlineSync.question("Who is known as the Flying Sikh of India?\n1.Usain Bolt\n 2.Milkha Singh\n 3.Sandeep Singh\n 4.Navjot Singh\n");
if(answer4==="2"){
  console.log(chalk.green("Correct Answer!!"));
  score=score+1;
  console.log(`Wonderful ${name}!!\n`);
}else{
  console.log(chalk.red("Oops ! Your answer is incorrect.\n"));
}
let answer5=readlineSync.question ("How many times has India won the Hockey World Cup (Men’s)?\n 1.1\n 2.2\n 3.4\n 4.3\n");
if(answer5==="1"){
  console.log(chalk.green("Correct Answer!!"));
  score=score+1;
  console.log(`\nWell Played ${name}!!\n`);
}else{
  console.log(chalk.red("Oops ! Your answer is incorrect.\n"));
}
console.log(chalk.blue(`Your final score is : ${score}`));