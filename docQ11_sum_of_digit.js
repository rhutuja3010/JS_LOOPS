// Write a program to find the sum of the digitsof a number accepted from the user

// let n=require("readline-sync")
// let num=n.questionInt("enter the number :")
// let i=0
// let sum=0
// while (i<num){
//     sum=sum+num%10
//     num=Math.floor(num/10)
//     i++
// }
// console.log(sum)





// let n=require("readline-sync")
// let num=n.questionInt("enter the no :")
// let sum=0
// // let i=0
// while (num>0){
//     sum=sum+num%10
//     // num=num%10
//     num=Math.floor(num/10)
//     // i++
// }
// console.log(sum)


let n=require("readline-sync")
let num=n.questionInt("enter the no :")
let fac=1
while(fac>0){
    fac=fac*num
    num=num-1
}
console.log(fac)




