let a=[2,5,9,1,12,56,23,6]
let max=0;
let second=0;
for (i of a){
    if (max<i){
        max=i
        store=max
    }
}
for (j of a){
        if (second<j){
            if(store!=j){
                second=j
            }
    }
}
console.log(second)

// let a=[4,1,7,3,67,34,23]
// let max=0
// for (i of a){
//     if(i>max){
//         max=i
//     }
// }
// // console.log(max)
// let second_max=0
// for (i of a){
//     if(i>second_max){
//         if(i!=max){
//             second_max=i
//         }
//     }
// }console.log(second_max)