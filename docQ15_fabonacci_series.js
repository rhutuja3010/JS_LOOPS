let n=require("readline-sync")
let num=n.questionInt("enter the number :")
let x=0;
let y=1;
let z=0;
while (z<=num){
    console.log(z)
    x=y
    y=z
    z=x+y
}

// let i=0
// while (i <=10) {
//     console.log("The number is " + i)
//     i++;
//   }