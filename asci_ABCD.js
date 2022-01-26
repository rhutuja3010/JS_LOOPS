let string=""
let n=5
for (let i=1;i<=n;i++){
    for (let j=0;j<n;j++){
        string+=String.fromCharCode(j+97)
        
    }string+="\n"
}console.log(string)