// Write a program to check whether a number is primeor not.


let n=require("readline-sync");
let num=n.questionInt("enter the number :")
let i=1;
let count=0;
while (i<=num){
    if (num%i==0)
        count++
        i++
    

}if (count==2){
    console.log("this is prime no ")

}else{
    console.log("this is not prime no")

}












// let n=require("readline-sync");
// let num=n.questionInt("enter the number :")
// let i=2;
// let count=0
// while (num%i==0){
//     count+=1
//     i++
// }if (count===i){
//     console.log("prime")
// }else{
//     console.log("not")
// }