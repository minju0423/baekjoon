const input = require('fs').readFileSync('input_10813.txt').toString().split("\n").map(el=> el.split(' ').map(Number))

const [n, m] = input.shift()
let arr = Array(n).fill().map((el,i)=> i+1)

let temp = 0
for(let a=0; a<m; a++){
    let [i, j] = input[a]
    temp = arr[i-1]
    arr[i-1] = arr[j-1]
    arr[j-1] = temp
    
}

console.log(arr.join(" "))