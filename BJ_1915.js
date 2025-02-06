function solution(n, m, list){
    let answer = 0
    let dp = list.map((x)=> [...x])
    
    for(let i=1; i<n; i++){
        for(let j=1; j<m; j++){
            if(list[i][j]) dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
        }
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            answer = dp[i][j] > answer ? dp[i][j] : answer
        }
    }

    console.log(answer**2)
}

const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input : fs.createReadStream('input_1915.txt'),
    // input : process.stdin,
    output : process.stdout
})

let input = []
let list = []
rl.on('line', (line)=>{
    input.push(line)
}).on('close', ()=>{
    let [n, m] = input.shift().split(" ").map(Number)
    input.forEach(val =>{
        list.push(val.split("").map(Number))
    })
    solution(n,m,list)
    process.exit()
})