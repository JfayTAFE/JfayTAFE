let hourlyPay = 32.25;
let hoursWorked = 38;

let weeklyGrossPay = hourlyPay * (hoursWorked * 5)
let withholdingTax = weeklyGrossPay * 0.15
let netPay = weeklyGrossPay - withholdingTax

console.log(`Gross Pay: ${weeklyGrossPay}\n\
Withholding Tax: ${withholdingTax}\n\
Net Pay: ${netPay}`)