let no_name=["zero","one","two","three","four","five","six","seven","eight","nine","ten"]
let n=require("readline-sync")
let num=n.questionInt("enter the no :")
let i=0
while (i<no_name.length){
    if (i==num){
        console.log(no_name[i])  
    }
i++
}
