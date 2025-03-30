const input = require('fs').readFileSync('./input_2738.txt').toString().trim().split("\n").map(el=> el.split(" ").map(Number))
const [n, m] = input.shift()
const arrA = input.slice(0,n)
const arrB = input.slice(n)

let answer = []
for(let i=0; i<n; i++){
    let arr = []
    for(let j=0; j<m; j++){
        arr.push(arrA[i][j] + arrB[i][j])
    }
    answer.push(arr)
}

answer.forEach(el=> console.log(el.join(" ")))