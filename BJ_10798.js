const input = require('fs').readFileSync('./input_10798.txt').toString().split("\n")

let col = 0
let maxIdx = 1
for(let i=0; i<input.length; i++){
    maxIdx = Math.max(input[i].length, maxIdx)
}
let answer = []
while(col < maxIdx){
    for(let i=0; i<input.length; i++){
        answer.push(input[i][col])
    }
    col++
}

console.log(answer.join(""))