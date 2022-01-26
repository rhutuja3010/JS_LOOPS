

let i=1
string=""
while(i<=10){
    let j=1
    while (j<=10){
        product=i*j
        string="  "+string+"   "+product
        j++
    }
    string=string+(" \n ")
    i++
}
console.log(string)



// let string=""
// for (let i=1;i<=10;i++){
//     for(let j=1;j<=5;j++){
//         product=i*j
//         string=" "+string+" "+product
//     }string=string+(" \n ")
    
// }console.log(string)