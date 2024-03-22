"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var score = 0;
function rollDice() {
    while (true) {
        var userOutcome = parseInt(readlineSync.question('What will be the outcome of 2 6-sided die? '));
        var die1 = Math.floor(Math.random() * 6) + 1;
        var die2 = Math.floor(Math.random() * 6) + 1;
        var dieTotal = die1 + die2;
        console.log("The die rolled ".concat(dieTotal));
        score += 1;
        if (userOutcome == dieTotal) {
            console.log("You guessed correctly with ".concat(score, " tries"));
            break;
        }
        else {
            console.log("Wrong guess. Try again");
        }
    }
}
rollDice();
