// Write a python program to sum the sequence:
// 1 + 1/1! + 1/2! + 1/3! + ........ + 1/n!

let num=require("readline-sync")
let n=num.questionInt("enter the no :")
// let i=1
// let sum=0
// let muliply=1
s=""
// while (i<=n){
//     s+="1/"+i
//     muliply=1/i
//     // sum+=muliply
//     s+="  "
//     sum+=muliply
//     // sum+=s
//     i++
//     console.log(sum)
// }
// console.log(s)
    // console.log(sum)

for (let i=1 ; i<=n;i++){
    s+="1/"+i
    // muliply=1/i
    s+=" "
    // sum+=muliply
    // console.log(sum)
}
console.log(s)