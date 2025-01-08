const input = require('fs').readFileSync('input_2559.txt').toString().split('\n')

const [n, k] = input.shift().split(" ").map(Number)

const arr = input.shift().split(" ").map(Number)

let max = Number.MIN_SAFE_INTEGER;
let sum = [0];

for(let i=1; i<=n; i++){ //누적합
    sum[i] = sum[i-1] + arr[i-1]
}

for(let i=k; i<=n; i++){
    max = Math.max(max, sum[i]-sum[i-k])
}

console.log(max)


