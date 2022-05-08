
let n=5;
let s='';
for (let i=1;i<=n;i++){
    for (let j=0;j<=n-i;j++){
        s+=' '
    }for(let k=0;k<2*i-1;k++){
        if (i===0 || i===n){
            s+='*'
        }else{
            if(k===0 ||k===2*i-2){
                s+='*'
            }else{
                s+=' '
            }
        }
    }s+='\n'
}console.log(s)