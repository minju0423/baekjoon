function solution(input){
    let answer = []
    let maxVal = Math.max(...input)
    let index = input.findIndex((el)=> el === maxVal)
    answer.push(maxVal, index+1)
    answer.forEach(el=>{
        console.log(el)
    })
}

const fs = require('fs')

const readline = require("readline")
const rl = readline.createInterface({
    //제출 시 주석을 바꿔서 제출해야됨
    input : fs.createReadStream('input_2562.txt'), 
    // input : process.stdin,
    output: process.stdout,
})

let input = [];
let list = []
rl.on("line", (line)=>{
    input.push(line)
    // rl.close()
}).on("close", ()=>{
    list = input.map(Number)
    solution(list)
    process.exit()
})