// 36. Accept two numbers from the user and display sum of even numbers between them(including both)
let n=require("readline-sync")
let num1=n.questionInt("enter the 1st no :")
let num2=n.questionInt("enter the last no :")
let i=num1
let l=[]
while (i<=num2){
    if (i%2==0){
        l.push(i)

    }i++
}
console.log(l)