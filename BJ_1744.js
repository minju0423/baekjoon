function solution(input){
    let N = input.shift()
    
    let negative = [] //음수, 0 저장
    let positive = [] //양수 저장
    let result = 0

    for(const i of input){
        if(i <= 0){ //음수와 0이면 negative 배열에 저장
            negative.push(i)
        }else if(i > 1){ //양수면 positive 배열에 저장
            positive.push(i)
        }else if(i === 1){ //1은 그냥 바로 결과값에 저장
            result += i
        }
    }

    positive.sort((a,b)=> b-a) //내림차순
    negative.sort((a,b)=> a-b) //오름차순

    //양수 계산 (큰 수끼리 곱한 값이 최대)
    for(let i=0; i<positive.length; i+=2){
        if(i+1 < positive.length){
            result += positive[i] * positive[i+1]
        }else{
            result += positive[i]
        }
    }

    //음수 계산(작은 수끼리 곱한 값이 최대)
    for(let i=0; i<negative.length; i+=2){
        if(i+1 < negative.length){
            result += negative[i]*negative[i+1]
        }else{
            result += negative[i]
        }
    }

    console.log(result)
}

const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input : fs.createReadStream('input_1744.txt'),
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