function solution(R, C, input){
    let visited = Array(26).fill(false)
    let dx = [0, 1, 0, -1]
    let dy = [1, 0, -1, 0]
    let answer = 0

    const dfs = (x, y, cnt) =>{
        
        answer = Math.max(answer, cnt)
        
        for(let i=0; i<4; i++){
            let row = x + dx[i]
            let col = y + dy[i]
            if(row >=0 && col>=0 && row<R && col<C && !visited[input[row][col].charCodeAt()-65]){
                visited[input[row][col].charCodeAt() - 65] = true
                dfs(row, col, cnt+1)
                visited[input[row][col].charCodeAt() - 65] = false
            }
        }
        
    }
    visited[input[0][0].charCodeAt()-65] = true
    dfs(0,0,1)
    console.log(answer)
    
}


const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    input : fs.createReadStream('input_1987.txt'),
    // input : process.stdin,
    output : process.stdout,
})

let input = []
let list = []
let R, C
rl.on('line', (line)=>{
    input.push(line)
    // rl.close()
}).on('close', ()=>{
    [R, C] = input.shift().split(' ').map(Number)   
    list = input.map(el => el.split(''))
    solution(R, C, list)
    process.exit()
})
