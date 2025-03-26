const input = require('fs').readFileSync('./input_7568.txt').toString().split("\n").map(el => el.split(" ").map(Number))
const n = input.shift()

let answer = []
for(let i=0; i<n; i++){
    let cnt = 0
    for(let j=0; j<n; j++){
        if(input[i][0] < input[j][0] && input[i][1] < input[j][1]){
            cnt++
        }
    }
    answer.push(cnt+1)
}

console.log(answer.join(" "))
