const input = require('fs').readFileSync('input_1544.txt').toString().trim().split('\n')

const N = +input.shift()
let arr = input.map(el=> el.trim())

let answer = new Set()

let i=0
while(i<N){
    let str = arr[i]
    let reWord = str.concat("",str)
    
    let notInclude = arr.filter((el)=>reWord.includes(el))
    console.log(notInclude)
    answer.add(notInclude)

    i++
}


console.log(answer)

/**
 * 1. 단어가 있는 배열 돌기
 *      1) idx = 1부터 시작 0번째 배열은 비교 대상 
 * 2. 단어의 문자 하나씩 돌기
 *      1) 그 전의 단어와 현재 단어의 길이가 같으면 비교, 아니면 answer++
 * 3. 현재 단어가 
 * 
 * atsats
 */