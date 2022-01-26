// Write a program to display sum of odd numbers and even numbers separately that fall between two
// numbers accepted from the user.(including both numbers) 100 and 500.


let n=require("readline-sync")
let num1=n.questionInt("enter the 1st no :")
let num2=n.questionInt("enter the last no :")
let i=num1
let sum_of_even_no=0
let sum_of_odd_no=0
while (i<=num2){
        if(i%2==0){
            sum_of_even_no+=i
        }
        else{
            sum_of_odd_no+=i
        }
        i++
}
console.log("sum_of_odd_no :",sum_of_odd_no)
console.log("sum_of_even_no",sum_of_even_no)