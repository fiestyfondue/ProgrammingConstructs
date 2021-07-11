const readline = require("readline-sync");
console.log("Enter the day anywhere between 1-30");
const Day = readline.question('Enter the Day :');
console.log("Enter the Month anywhere between 1-12");
const Month = readline.question('Enter The Month In Digit :');
let day = Number(Day);
let month = Number(Month);

if((month == 3 && day >= 20 ) || (month == 4 && day > 0) ||
  (month == 5 && day > 0 ) || (month == 6 && day > 0))
  {
        console.log("True");
  }
  else
  {
      console.log("False");
  }


