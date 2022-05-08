// let i=1;
// k=1
// string=""
// while (i<=19){
//     let j=i;
//     while (j>=k){
//         string+=" "
//         string+=j
//         j-=2
// }
//     string+="\n"
//     i+=3
//     k+=1
// }
// console.log(string)

string=""
let a=1
for (let i=1;i<=19;i+=3){
    for (let j=i;j>=a;j-=2){
    string+=" "
    string+=j
    }
    string+="\n"
    a+=1
}
console.log(string)
