// const N = parseInt(require('fs').readFileSync('/dev/stdin').toString())
const N = parseInt('4')

let dp = []
dp = [0, 3, 7, 17]

for(let i=4; i<=N; i++){
    dp[i] = (2*dp[i-1] + dp[i-2])%9901
}

console.log(dp[N])