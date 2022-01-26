// Write a program to find the product of the digitsof a number accepted from the user.

// let n=require ("readline-sync")
// let num=n.questionInt("enter the no :")
// let i=0
// product=1
// while (i<num){
//     product=product*num%10
//     num=Math.floor(num/10)
//     i++
// }
// console.log(product)


let n=require("readline-sync")
let num=n.questionInt("enter the no :")
let rev=0
while (0<num){
    let rem=num%10
    rev=num*rem
    num=Math.floor(num/10)
    
}
console.log(rev)