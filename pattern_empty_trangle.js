let n=5;
let s='';
// for (let i=0;i<n;i++){
//     for (let j=0;j<n-i;j++){
//         s+="*"
//     }s+="\n"
// }console.log(s)

let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing star
  for (let j = 0; j < i; j++) {
    if(i === n) {
      string += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);




// // let n=6;
// // let s='';
// // for (let i=0;i<=n;i++){
// //     for (let j=0;j<i;j++){
// //         if (i===n){
// //             s+="*"
// //         }else{
// //             if(j==0 || j==i-1){
// //                 s+="*"
// //             }else{
// //                 s+=" "
// //             }
// //         }
// //     }s+="\n"
// // }console.log(s)




// let n1=6;
// let s='';
// for (let i=0;i<n1;i++){
//     let n2=6;
//     for (let j=0;j<n2;j++){
//         if(i==n1-1||j==0||i==j){
//             s+="*"
//         }else{
//             s+=" "
//         }
//     }
//     s+="\n"
    
// }console.log(s)