// const input = require('fs').readFileSync('input_15658.txt').toString().split('\n')
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let N = input[0]
let numArr = input[1].split(' ').map(Number)
let operArr = input[2].split(' ').map(Number)
let operObj = {// 0: 덧셈, 1: 뺄셈, 2: 곱하기, 3: 나누기
    0 : (oper1, oper2)=> oper1 + oper2,
    1 : (oper1, oper2)=> oper1 - oper2,
    2 : (oper1, oper2)=> oper1 * oper2,
    3 : (oper1, oper2)=> {
        if(oper1 < 0){
            return -Math.floor(-oper1/ oper2);
        }
        return Math.floor(oper1/oper2)
    }
    
}

let min = Number.MAX_SAFE_INTEGER //최대 정수값
let max = Number.MIN_SAFE_INTEGER //최소 정수값


function calc(cnt,sum){//조합
    if(cnt == N-1){
        max = Math.max(max, sum)
        min = Math.min(min, sum)
        return
    }

    for(let i=0; i< 4; i++){
        if(operArr[i] !==0) { //연산자 개수가 0이 아니라면
            operArr[i] -= 1
            calc(cnt+1, operObj[i](sum, numArr[cnt+1])) 
            operArr[i] += 1
        }
    }
}
calc(0, numArr[0])

console.log(`${max}\n${min}`)