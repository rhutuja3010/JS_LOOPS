// Write a program to accept 10 numbers from the user and display it’s average.

let i=1
let sum=0
while (i<=10){
    let r=require("readline-sync")
    let num=r.questionInt("enter the no :")
    sum+=num
    i+=1
    let ave=0
}
ave=sum/10
console.log("sum :",sum)
console.log("average :",ave)
