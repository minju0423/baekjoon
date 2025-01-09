const input = require('fs').readFileSync('input_2212.txt').toString().split('\n')
const n = +input.shift()
const k = +input.shift()
const arr = input.shift().split(" ").map(Number)

arr.sort((a,b)=> a-b); //오름차순 정렬
let dif = []; // 차이
for(let i=0; i<n-1; i++){
    dif[i] = arr[i+1]- arr[i]
}

dif.sort((a,b)=> b-a); //내림차순 정렬

let answer = 0

for(let i=k-1; i<n-1; i++){
    answer += dif[i]
}

console.log(answer)
