// let n=5;
// let string=""
// for (let i=1;i<=n;i++){
//     for (let j=0;j<n-i+1;j++){
//         string+=String.fromCharCode((n-1-j)+65)
//     }string+="\n"
// }console.log(string)


let n=5;
let string=""
for (let i=1;i<=n;i++){
    for (let j=0;j<n-i+1;j++){
        string+=String.fromCharCode((n-i-j)+65)
    }string+="\n"
}console.log(string)


