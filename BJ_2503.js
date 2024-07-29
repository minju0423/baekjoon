const input = require('fs').readFileSync('input_2503.txt').toString().split('\n')
const N = input[0]

let num = []
let st = []
let ball = []
let answer = 0;
for(let i=1; i<=N; i++){
    let arr=input[i].split(' ').map(Number)
    num.push(arr[0])
    st.push(arr[1])
    ball.push(arr[2])
}

console.log(num, st, ball)

/**
13x
3x2
x12

3xx
x5x
xx6

32x
3x7
x27

x4x
xx4
8xx
xx8
9xx
x9x
 */