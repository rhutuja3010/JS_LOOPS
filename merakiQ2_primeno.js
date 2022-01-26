// var num=require("readline-sync")
// var number1=num.questionInt("enter the no :")
// let count=0
// for (var i=1; i<=number1;i++ ){
//     if (number1%i==0)
//     count+=1   
// }if 
//     (count==2){
//         console.log("prime no. ")
// }else{
//     console.log("not prime")
// }


// var num=require("readline-sync")
// var number1=num.questionInt("enter the no :")
// let count=0
// var i=1
// while (i<=number1){
//     if (number1%i==0)
//     count+=1
//     i+=1
// }if (count==2){
//     console.log("prime no ")
// }else{
//     console.log("not")
// }






// var num=require("readline-sync")
// var number1=num.questionInt("enter the first no :")
// var number2=num.questionInt("enter the last no :")

// for (var i=number1;i<=number2;i++){
//     var count=0
//     for (var j=1;j<=i;j++){
//         if (i%j==0){
//             count+=1
//         }
//     }

// if(count==2){
//     console.log(i,"prime no")
// }else{
//     console.log(i,"not")
// }}





// let n=require("readline-sync")
// let num=n.questionInt("enter the no :")
// let count=0;
// for (let i=1;i<=num;i++){
//     if (num%i==0)
//     count++
// }if (count==2){
//     console.log("prime no")
// }else{
//     console.log("not")
// }






// let n=require("readline-sync")
// let num=n.questionInt("enter the no :")
// let count=0
// for (let i=1;i<=num;i++){
//     if (num%i==0)
//     count++
// }if (count==2){
//     console.log("prime no ")
// }else{
//     console.log("not prime no")
// }




// let n=require("readline-sync")
// let num=n.questionInt("enter the first no :")
// let num1=n.questionInt("enter the first no :")
// let count=0
// for (let i=num;i<=num1;i++){
//     let count=0
//     for (let j=1;j<=i;j++){
//         if (j%i==0){
//             count++
//         }
//     }
// }if (count==2){
//     console.log(j,"prime no")
// }else{
//     console.log(j,"not prime no")
// }


var num=require("readline-sync")
var number1=num.questionInt("enter the first no :")
var number2=num.questionInt("enter the last no :")
for (let i=number1;i<=number2;i++){
    let count=0
    for (let j=1;j<=i;j++){
        if(i%j==0){
            count++
        }
    }if (count==2){
        console.log(i,"prime no ")
    }else{
        console.log(i,"not prime no")
    }
}
