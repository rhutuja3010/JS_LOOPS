// Write a program to print the following series till n terms.
// 2 , 22 , 222 , 2222 _ _ _ _ _ n terms


// let n=require("readline-sync")
// let number=n.questionInt("how many times you want this no :")
// let which_no=n.questionInt("which no you want :")
// let i=1
// let store=which_no
// let s=""
// let z=0
// while (i<=number) {
//     store=(store*10)+z
//     s+=" "
//     i++
//     console.log(store)

// }


// let n=require("readline-sync")
// let number=n.questionInt("how many times you want this no :")
// let which_no=n.questionInt("which no you want :")
// let i=1
// let store=which_no
// let s=""
// let z=0
// while (i<=number) {
//     s+=store
//     s+=" "+","
//     z+=store
//     store=(store*10)+which_no
//     i++
// }
// console.log(s)

// let num=require("readline-sync")
// let n=num.questionInt("enter the no :")
// let i=1
// let s=""
// while (i<=n){
//     if (i==n){
//         s=s+(1+"/"+i+" ")
//     }else{
//         s+=(1+"/"+i+" "+"+")
//         s+=" "
//     }
//     i++
// }
// console.log(s)


// let n=require("readline-sync")
// let how_many=n.questionInt("how many times you want this no :")
// let which_no=n.questionInt("which no you want :")
// let i=1
// let store=which_no
// let s=""

// while (i<=how_many){ 
//     s+=store
//     if (i==how_many){
//         s+=" "+" "
        
//         store=(store*10)+which_no
//     }else{
//         s+=" "+", "
        
//         store=(store*10)+which_no
//     }
//     i++
// }
// console.log(s)




let n=require("readline-sync")
let how_many=n.questionInt("how many times you want this no :")
let which_no=n.questionInt("which no you want :")
let i=1
let store=which_no
s=""
while(i<=how_many){
    s+=store
    if (i==how_many){
        s+=" "+" "
        store=(store*10)+which_no
    }else{
        s+=" "+" , "
        store=(store*10)+which_no
    }
    i+=1
}
console.log(s)