// let n=require("readline-sync")
// let a=n.questionInt("enter the no :")
// let i=1
// let sum=0
// while(i<a){
//     if (a%i==0){
//         sum+=i
//     }
//     i++
// }
// if (a==sum){
//     console.log("perfect")
// }else{
//     console.log("not")
//     }



let n=require("readline-sync")
sum=0
let num1=n.questionInt("enter the first no :")
let num2=n.questionInt("enter the last no :")
for (let i=num1;i<=num2;i++){
    let sum=0
    for (let j=1;j<=i;j++){
        if (i%j==0)
        sum+=i
    }    // i++
    
}if (i==sum){
    console.log(i,"perfect no")
}else{
    console.log(i,"not")
}


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
