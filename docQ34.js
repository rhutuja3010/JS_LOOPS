L = [23, 45, 32, 25, 46,33, 71, 90]
let i=0
l=[]
while (L.length>i){
    if (L[i]%2==0){
        l.push(L[i])
    }i++
}
console.log(l)