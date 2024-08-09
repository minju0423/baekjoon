const input = require('fs').readFileSync('input_9095.txt').toString().split('\n').map(Number)

const T = input.shift()
const arr = input

let dp = Array(11).fill(0) //1,2,3의 합을 배열에 저장 (n<11)
/**
 * 1을 만드는 방법 : 1 => 1개
 * 2를 만드는 방법 : 1+1 , 2 => 2개
 * 3을 만드는 방법 : 1+1+1 , 1+2, 2+1. 3 => 4
 * 어떤 앞의 수에서 끝에 1,2,3을 더하는 것이 되므로 현재값-1, 현재값-2, 현재값-3의 횟수를 더한 값
 */
dp = [0,1,2,4]

for(let i=0; i<T; i++){
    let num = arr[i]
    for(let j=4; j<=num; j++){
        dp[j] = dp[j-3] + dp[j-2] + dp[j-1]
    }

    console.log(dp[num])
}