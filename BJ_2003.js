const input = require('fs').readFileSync('./input_2003.txt').toString().split("\n").map(el => el.split(" ").map(Number))
const [n, m] = input.shift()
const arr = input.shift()

let answer = 0
for(let i=0; i<n; i++){
    let sum = arr[i]
    let idx = i
    while(sum <m && idx<n-1){
        idx++
        sum += arr[idx]
    }
    if(sum === m) answer++
    
}


console.log(answer)