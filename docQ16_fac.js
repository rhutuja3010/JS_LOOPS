// Write a program to print the factorial of a numberaccepted by the user.


// let n=require("readline-sync")
// let num=n.questionInt("enter the no :")
// let fac=1
// while (num>0){
//     fac=fac*num
//     num--
// }
// console.log(fac)





let n=require("readline-sync")
let num=n.questionInt("enter the no :")
let fac=1
while (num>0){
    fac=fac*num
    num--
}
console.log(fac)