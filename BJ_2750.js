const input = require('fs').readFileSync('input_2750.txt').toString().trim().split('\n').map((el)=> Number(el))
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((el)=> Number(el))

let [n, ...arr] = input

arr.sort((a,b)=> {return a-b}) //오름차순 정렬

for(let i=0; i<n; i++){
    console.log(arr[i])
}