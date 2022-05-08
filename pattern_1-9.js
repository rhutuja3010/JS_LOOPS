let count=1
let string=""
let n=3
for (let i=1;i<=n;i++){
    for (let j=1;j<=n-i;j++){
        string+=" "
    }for (let k=1;k<=2*i-1;k++){
        string+=count
        count+=1
    }string+="\n"
}
console.log(string)







// let i=1
// let count=1
// let string=""
// let n=3
// while(i<=n){
//     let j=1
//     while(j<=n-i){
//         string+=" "
//         j++
//     }let k=1
//     while(k<=2*i-1){
//         string+=count
//         count++
//         k++
//     }string+="\n"
//     i++
// }
// console.log(string)










