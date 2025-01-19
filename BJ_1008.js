function solution(input){
    let answer = input[0] / input[1]
    console.log(answer)
    
}
const fs = require('fs')

const readline = require('readline')
const rl = readline.createInterface({
    // input : process.stdin,
    input : fs.createReadStream('input_1008.txt'),
    output: process.stdout
})

let input;
let list = []
rl.on("line", (line)=>{
    input = line
    rl.close();
}).on("close", ()=>{
    list = input.split(" ").map(Number)
    solution(list)
    process.exit()
})