// let string=""
// let n=5
// for (let i=1;i<=n;i++){
//     for (let j=1;j<=n-i;j++){
//         string+=" "
//     }
//     for (let k=1;k<=2*i-1;k++){
//         string+="*"

//     }string+="\n"
// }
// console.log(string)



let n = 4; // height of pattern
let string = "";
let count = 1;
// External loop
for (let i = 1; i <=n; i++) {
  // Internal loop
  for (let j = 1; j <=i; j++) {
    string += count;
    count++;
  }
  string += "\n";
}
console.log(string);


// string=""
// let row=7;
// // let column=7;
// let i=1
// while (i<=row){
//     let j=1
//     while (j<=row){
//         j-=2
//         string+=j
//     }
//     string+="\n"
//     i+=3
// }


// for (let i=1;i<=row;i+=3){
//     for (let j=1;j<=column;j-=2){
//         string+=i
        
//     }
//     string+="\n"
// }
// console.log(string)

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





