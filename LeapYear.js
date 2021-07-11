let input = require("readline-sync");
console.log("Checking weather Year is Leap or Not ")

let Year=input.question('Enter the year :');
Year = Number(Year);
if(Year%4==0 && Year%100!=0 || Year%400==0)
{
    console.log("Input year is Leap Year");
}
else 
{
    console.log("Input year is Not a Leap Year");
}
