const input = require('fs').readFileSync('./input_3273.txt').toString().trim().split("\n")
const n = +input.shift()
const numArr = input.shift().split(" ").map(Number)
const x = +input.shift()

numArr.sort((a,b)=> a-b)
let first = 0
let last = n-1
let sum = 0
let answer = 0
while(first < last){
    sum = numArr[first] + numArr[last]
    if(sum === x){
        answer++
        first++
        last--
    }else if(sum > x){
        last--
    }else if(sum < x) {
        first++
    }
}

console.log(answer)