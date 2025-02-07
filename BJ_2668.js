function solution(input){
    let N = input.shift()
    let answer = []
    let arr = [0]
    for(let i=1; i<=N; i++){
        arr[i] = input[i-1]
    }
    let isVisit = Array(N+1).fill(false)

    for(let i=1; i<=N; i++){
        isVisit[i] = true
        dfs(i,i)
        isVisit[i] = false
    }

    function dfs(start, target){
        if(arr[start] === target){
            answer.push(target)
            return
        }

        if(!isVisit[arr[start]]){
            isVisit[arr[start]] = true
            dfs(arr[start], target)
            isVisit[arr[start]] = false
        }
    }

    console.log(answer.length)
    console.log(answer.join("\n"))
}


const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input : fs.createReadStream('input_2668.txt'),
    // input : process.stdin,
    output : process.stdout
})
let input = []
rl.on('line', (line)=>{
    input.push(+line)
}).on('close', ()=>{
    solution(input)
    process.exit()
})