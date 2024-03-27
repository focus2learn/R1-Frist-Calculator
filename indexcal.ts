#! /usr/bin/env node

// a simple calculater input two numbers and simplify ( + - * / ) operator with the help of Inquirer lib
// name : Naushad Hussain (class : Sunday 9-12) learned from online Ramadan Night class

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter Your first number.... : ", type: "number", name: "firstnumber" },
  {
    message: " Enter Your second number.... : ",
    type: "number",
    name: "secondnumber",
  },
  {
    message: " Select any one of the following Operations.... : ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional coding using IF / ELSE IF...

if(answer.operator === "Addition")
{
  console.log(`   The Result of Addition is...... ${answer.firstnumber + answer.secondnumber}`);
} 
else if(answer.operator === "Subtraction")
{
  console.log(`   The Result of Subtraction is...... ${answer.firstnumber - answer.secondnumber}`);
}
else if(answer.operator === "Multiplication")
{
  console.log(`   The Result of Multiplication is...... ${answer.firstnumber * answer.secondnumber}`);
}
else if(answer.operator === "Division")
{
  console.log(`   The Result of Division is...... ${answer.firstnumber / answer.secondnumber}`);
}
else 
{
  console.log(" Please select the corrent operator...")
};