const input = require('fs').readFileSync('input_1057.txt').toString().split(' ').map(Number)
const n = input[0]
let jimin = input[1]
let hansu = input[2]

let answer = 1;

for(let i=0; i<n; i++){
    if(Math.ceil(jimin/2) === Math.ceil(hansu/2)){
        break
    }else{
        jimin = Math.ceil(jimin/2)
        hansu = Math.ceil(hansu/2)
        answer++
    }
}

console.log(answer)

