function solution(input){
    let [N, M] = input.shift()
    let table = input.slice(0,N)
    let coord = input.slice(N)
    let dp = Array(N+1).fill().map(_=>Array(N+1).fill(0))

    for(let i=1; i<N+1; i++){
        for(let j=1; j<N+1; j++){
            dp[i][j] = table[i-1][j-1] + dp[i][j-1] + dp[i-1][j] - dp[i-1][j-1]
        }
    }

    let answer = []

    for(let i=0; i<M; i++){
        const [x1, y1, x2, y2] = coord[i]
        answer.push(dp[x2][y2] - (dp[x1-1][y2] + dp[x2][y1-1]) + dp[x1-1][y1-1])
    }
    
    console.log(answer.join("\n"))
}


const readline = require('readline')
const fs = require('fs').createReadStream('./input_11660.txt')

const rl = readline.createInterface({
    input : fs,
    // input : process.stdin,
    output : process.stdout
})

let input = []
rl.on('line', (line)=>{
    input.push(line.split(" ").map(Number))

}).on('close', ()=>{
    solution(input)
    process.exit()
})