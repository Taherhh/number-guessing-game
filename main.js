console.log("guess a number between 1 to 10");
// now variable create
let a = Math.floor(Math.random() * 10);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "enter your guess number u want:" });
    //provide code
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guess number absolutely correct");
        break;
    }
    else {
        console.log("sorry you guess wrong number try again");
    }
}