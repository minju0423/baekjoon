const input = require('fs').readFileSync('input_1343.txt').toString()

function solution(n){
    n = n.replace(/XXXX/g, 'AAAA')
    n = n.replace(/XX/g, 'BB')

    return n.split('').includes('X') ? -1 : n
}

let answer = solution(input)

console.log(answer)