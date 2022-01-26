let string=""
let n=4
for (let i=0;i<=n;i++){
    for (let j=0;j<n-i+1;j++){
        string+=String.fromCharCode(j+65)
    }string+="\n"
}console.log(string)