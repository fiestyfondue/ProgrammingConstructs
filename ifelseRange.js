let Min=100;
let Max=0;
MinLimit=100;
MaxLimit=999;
for(let i=0;i<=4;i++)
{
    let num = (Math.random()*(MaxLimit-MinLimit + 1) + minLimit); //For three digit random numbers 
    console.log("${i} : The number is ${num}");
    if(Min>num)
    {
        Min=num;
    }
    if(Max<num)
    {
        Max=num;
    }
}
console.log("MInimum number is ${Min}");
console.log("Maximum number is ${Max}");

