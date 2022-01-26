// Write a program to accept 10 numbers from the user and display the largest & smallest number.
let n=require("readline-sync")
let num=n.questionInt("enter the num :")
let i=1
let l=[]
while (i<=num){
    let num1=n.questionInt("enter the no :")
    l.push(num1)
    i++
}
let largest_no=0
let smallest_no=0
console.log(l)
for (let j=0;j<=l.length;j++){
    if (largest_no<l[j])
    largest_no=l[j]
}
console.log("largest no :",largest_no)
for (let j=0;j<=l.length;j++){
    if (smallest_no>l[j])
    smallest_no=l[j]
}
console.log("smallest no :",smallest_no)