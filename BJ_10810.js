function solution(input){
    let [N, M] =  input.shift()
    let buket = Array(N+1).fill(0)
    
    for(let i=0; i<M; i++){
        let [start, end, k]= input[i]
        for(let j=start; j<=end; j++){
            buket[j] = k
        }
    }
    buket.shift()
    console.log(buket.join(" "))
    
}

const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    input : fs.createReadStream('input_10810.txt'),
    // input : process.stdin,
    output : process.stdout,
})

let input = []
let list = []
rl.on('line', (line)=>{
    input.push(line)
    // rl.close()
}).on('close', ()=>{
    input.forEach((val)=>{
        list.push(val.split(' ').map(Number))
    })
    solution(list)
    process.exit()
})