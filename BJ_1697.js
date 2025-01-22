function solution(input){
    let [N, K] = input

    const visited = Array(100001).fill(0)
    const queue = [[N, 0]]

    while(queue.length){
        const [subin, count] = queue.shift()
        if(visited[subin]) continue
        visited[subin] = 1
        if(subin === K){
            return console.log(count)
        }

        for(const move of [subin+1, subin-1, subin*2]){
            if(move >= 0 && move <= 100000 && !visited[move]){
                queue.push([move, count+1])

            }
        }
        
    }
    
}

const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    
    input : fs.createReadStream('input_1697.txt'),
    // input : process.stdin,
    output : process.stdout,
})

let input
let list = []
rl.on('line', (line)=>{
    input = line
    rl.close()
}).on('close', ()=>{
    list = input.split(' ').map(Number)
    solution(list)
    process.exit()
})