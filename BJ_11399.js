const input = require('fs').readFileSync('input_11399.txt').toString().split('\n')
const n = +input.shift()
const arr = input.shift().split(' ').map(Number)

arr.sort((a,b)=> a-b)

let sumArr = []

let sum = 0;
for(let i=0; i<n; i++){
    sum += arr[i]
    sumArr.push(sum)
}

let answer = sumArr.reduce((a,b)=> a+b)
console.log(answer)