let n=require("readline-sync")
let guess_number=n.questionInt("enter the number :")
let i=1
while (i<3){
    if (guess_number==5){
        console.log("congratulations , your guess is correct ")
        break}
    
    else{
        console.log("sorry your guess is wrong ")
    }let again_guess_number=n.questionInt("again enter the number :")
    if (again_guess_number==5){
        console.log("congrats , your guess is correct")
        break}
    else{
        console.log("your guess is wrong")
    }
    i++
}
