const str = require('fs').readFileSync('input_10988.txt').toString().trim()

let answer = 1

let left = 0
let right = str.length - 1

while(left < right){
    if(str[left] !== str[right]){
        return console.log(0)
    }
    left++
    right--
}

console.log(answer)


