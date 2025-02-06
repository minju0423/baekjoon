function solution(N, input){
    dp = new Array(N).fill(0)
    dp[0] = input[0]
    dp[1] = dp[0] + input[1]
    dp[2] = Math.max(input[0], input[1]) + input[2]
    for(let i=3; i<N; i++){
        dp[i] = Math.max(dp[i-3] + input[i-1] + input[i], dp[i-2] + input[i])
    }
    console.log(dp[N-1])
}

const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input : fs.createReadStream('input_2579.txt'),
    // input : process.stdin,
    output : process.stdout
})

let input = []
rl.on('line', (line)=>{
    input.push(+line)
}).on('close', ()=>{
    let N = input.shift()
    solution(N, input)
    process.exit()
})