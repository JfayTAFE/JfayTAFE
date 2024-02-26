let ticketNumber = 154123;
let ticketNumber5Digit = Math.floor(ticketNumber / 10);
let remainder = ticketNumber5Digit % 7;
let droppedDigit = ticketNumber % 10;
let digitComparison = remainder == droppedDigit;

console.log(`Is ticket ${ticketNumber} valid: ${digitComparison}`)