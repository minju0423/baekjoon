const input = require('fs').readFileSync('input_1010.txt').toString().split('\n')
const T = +input.shift()
const array = input.map(el=>el.split(' ').map(Number))

for(let i=0; i<T; i++){
    let [n,m] = array[i]
    let answer = Math.round(factorial(m)/(factorial(m-n)*factorial(n)))
    console.log(answer)
    
}

function factorial(num){
    if(num<=1) return 1
    return num * factorial(num-1)
}