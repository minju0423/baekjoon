/**
 * 백준 10811- 바구니 뒤집기
 */
// const input = require('fs').readFileSync('input_10811.txt').toString().split('\n')
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let [N, M] = input[0].split(" ").map(Number)
let turn  = []
let basket = new Array(N).fill().map((val, i)=> val = i+1)

for(let idx=1; idx<=M;idx++){
    let [a,b] = input[idx].split(' ').map(Number)
    let arr = []
    

    for(let j=a-1; j<b; j++){
        arr.push(basket[j])
    }    
    arr.reverse()
    basket.splice(a-1, b-a+1, ...arr)
}

console.log(basket.join(" "))
