const readline = require('readline-sync'); 
let num = readline.question("Enter The Number Like 1,10, 100, 1000 , 10000,... : "); 
num = Number(num);

if(num==1)
{
    console.log("Ones");
}
else if(num == 10)
{
    console.log("Tens");
}
else if(num == 100)
{
    console.log("Hundred");
}
else if(num == 1000)
{
    console.log("Thousand");
}
else if(num == 10000)
{
    console.log("Ten Thousand");
}
else
{
    console.log("INVALID INPUT");
}