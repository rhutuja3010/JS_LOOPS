// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // // downside pyramid
// // for (let i = 1; i <= n - 1; i++) {
// //   // printing spaces
// //   for (let j = 0; j < i; j++) {
// //     string += " ";
// //   }
// //   // printing star
// //   for (let k = (n - i) * 2 - 1; k > 0; k--) {
// //     string += "*";
// //   }
//   // string += "\n";
// // }
// console.log(string);



let count=1
let string=""
let n=3
for (let i=1;i<=n;i++){
    for (let j=1;j<=n-i;j++){
        string+=" "
    }for (let k=1;k<=2*i-1;k++){
        string+="*"
        count+=1
    }string+="\n"
}

// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string)

