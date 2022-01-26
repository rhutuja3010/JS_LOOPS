// Write a program to print the following series till n terms.1 4 9 16 25 _ _ _ _ _ n terms

let n=require("readline-sync")
let num=n.questionInt("enter the no :")
// let i=1
// let string=""
// while(i<=num){
//     let squre=i**2
//     string+=" "
//     string+=squre
//     i++
// }
// console.log(string)



let string=""
for(let i=1;i<=num;i++){
    let squre=i**2
    string+=" "
    string+=squre
}
console.log(string)
