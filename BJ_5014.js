function solution(input){
    let [F, S, G, U, D] = input

    const bfs = (S)=>{
        const visited = Array(F+1).fill(0)
        const queue = [[S, 0]]
        while(queue.length){
            const [floor, count] = queue.shift()
            if(visited[floor]) continue
            if(floor === G){
                return count
            }

            for (const stairs of [floor + U, floor - D]) {
                stairs >= 1 &&
                stairs <= F &&
                !visited[floor] &&
                queue.push([stairs, count + 1]);
            }
            visited[floor] = 1;
          
        }
        return "use the stairs";
    }

    console.log(bfs(S))
}



const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    input : fs.createReadStream('input_5014.txt'),
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