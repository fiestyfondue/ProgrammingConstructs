let min = 999;
let max = 0;
minLimit = 100;
maxLimit = 999;
for (let i = 1 ; i < 5 ; i++) // Taking Four Numbers
{
    let num = (Math.random()*(maxLimit-minLimit + 1) + minLimit); // Taking Three Digit Random Numbers
    console.log(+ i +" : The number is :" + num)
    if(min > num)
    {
        min = num;
    }
    if(max < num)
    {
        max = num;
    }
}
console.log("The Minimum Number Is : " + min) // Printing Minimum Number
console.log("The Maximum Number Is : " + max) // Printing Maximum Number
