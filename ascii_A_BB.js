let string=""
let n=5
for (let i=1;i<=n;i++){
    for (let j=0;j<i;j++){
        string+=String.fromCharCode(i+64)
    }string+="\n"
}console.log(string)