let string=""
let n=5
for (let i=1;i<=n;i++){
    for (let j=1;j<=n-i;j++){
        string+=" "
    }
    for (let k=1;k<=2*i-1;k++){
        string+=k

    }string+="\n"
}
console.log(string)


// let string=""
// let i=1
// let n=5
// while (i<=n){
//     let j=1
//     while (j<=n-i){
//         j++
//         string+=" "

//     }let k=1
//     while (k<=2*i-1){
//         string+=k
//         k++
//     }string+="\n"
//     i++

// }
// console.log(string)





