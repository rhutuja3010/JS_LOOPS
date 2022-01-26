// Write a program to convert binary to decimal.


let a=[1,0,0,1,1,0,1,1]
// let i=1;
let j=0;
let sum=0;
for (i in a){
    var s=-i
    d=a[s]
    console.log(d)
    sum=sum+(2**j)*d
    j+=1
    i-=1
// console.log(sum)
}
// i+=1
// j+=1
// console.log(sum)