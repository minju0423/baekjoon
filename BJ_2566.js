const input = require('fs').readFileSync('./input_2566.txt').toString().split("\n").map(el=> el.split(" ").map(Number))
let max = 0
let row = 0, col = 0
for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
        if(max < input[i][j]){
            row = i
            col = j
        }
        max = Math.max(max, input[i][j])
        
    }

}

console.log(max)
console.log(row+1, col+1)