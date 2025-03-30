const input = require('fs').readFileSync('./input_2563.txt').toString().split("\n").map(el => el.split(" ").map(Number))

const cnt = input.shift()

const array = Array(100).fill().map(_=> Array(100).fill(0))
let answer = 0

for(let i=0; i<cnt; i++){
    let startX = input[i][0]
    let startY = input[i][1]

    for(let r=0; r<10; r++){
        for(let c=0; c<10; c++){
            if(array[startX+r][startY+c] !== 0) continue
            if(array[startX+r][startY+c] === 0){
                array[startX+r][startY+c] = 1
                answer++
            }
        }
    }
}

console.log(answer)