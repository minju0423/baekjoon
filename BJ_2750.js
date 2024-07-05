// const input = require('fs').readFileSync('input_2750.txt').toString().trim().split('\n')
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let n = parseInt(input[0])
let arr = input.slice(1,n+1).map(Number)
arr.sort((a,b)=> {return a-b})
for(let i=0; i<n; i++){
    console.log(arr[i])
}