const input = require('fs').readFileSync('input_2293.txt').toString().split('\n')

const [n,k] = input.shift().split(' ').map(Number)

const arr = input.map(Number)

let dp = Array(k+1).fill(0)
dp[0] = 1

for(let i=0; i<n; i++){
    for(let j=arr[i]; j<=k; j++){
        // console.log(j + ": "+ dp[j])
        dp[j] = dp[j] + dp[j-arr[i]]
    }
}

console.log(dp[k])


