const input = require('fs').readFileSync('input_2455.txt').toString().split('\n').map(el => el.split(" ").map(Number))
let max = 0
let count = 0
for(let i=0; i<4; i++){
    let [takeOut, takeIn] = input[i]
    count -= takeOut
    count += takeIn
    max = Math.max(max, count)
}

console.log(max)