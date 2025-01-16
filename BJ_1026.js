const input = require('fs').readFileSync('input_1026.txt').toString().split('\n')

const n = +input.shift()

const arrA = input[0].split(' ').map(Number)
const arrB = input[1].split(' ').map(Number)

arrA.sort((a,b)=> a-b)
arrB.sort((a,b)=>b-a)

let s = 0
for(let i=0; i<n; i++){
    s += arrA[i] * arrB[i]
}

console.log(s)