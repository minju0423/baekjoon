/**
 * DP
 */
function solution(n){
    let dp = Array(n).fill(0)
    dp = [0,1,2]
    for(let i=3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return console.log(dp[n])
}

solution(4) // 5