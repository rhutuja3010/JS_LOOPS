// Write a program to add first n terms of the following series using a while loop :
// 1/1! + 1/2! + 1/3! + ........ + 1/n!


// let n=require("readline-sync")
// let first=n.questionInt("enter the no :")
// let n_number=n.questionInt("enter the last no :")
// let i=first;
// let sum=0;
// while (i<=n_number){
//     sum+=i
//     i+=1
// }
// console.log(sum)


// let num=require("readline-sync")
// let n=num.questionInt("enter the no :")
// let i=1
// s=""
// while(i<=n){
//     s+="1/"+i
//     s+=" "
//     i+=1
// }
// console.log(s)










let num=require("readline-sync")
let n=num.questionInt("enter the no :")
let i=1
let s=""
while (i<=n){
    if (i==n){
        s=s+(1+"/"+i+" ")
    }else{
        s+=(1+"/"+i+" "+"+")
        s+=" "
    }
    i++
}
console.log(s)