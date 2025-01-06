const input = require('fs').readFileSync('input_1138.txt').toString().split('\n')
const n = +input.shift()
const arr = input[0].split(" ").map(Number)

const result = Array(n).fill(0)

for(let i=1; i<n+1; i++){ // i == 사람 키
    let temp = arr[i-1]; // 자기보다 키가 큰 사람의 수
    let cnt = 0
    for(let j=0; j<arr.length; j++){
        if(temp === cnt && result[j] === 0){
            result[j] = i
            break
        }else if(result[j] === 0){
            cnt++;
        }
    }
}
console.log(result.join(" "))