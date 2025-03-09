const input = require('fs').readFileSync('input_13458.txt').toString().split("\n")
const n = +input.shift()
const persons = input.shift().split(" ").map(Number)
const [b, c] = input.shift().split(" ").map(Number)

let answer = 0

for(let i=0; i<n; i++){
    persons[i] -= b
    answer++
    
    if(persons[i] > 0){
        if(persons[i]% c !== 0){
            answer += parseInt(persons[i]/c)+1
        }else{
            answer += parseInt(persons[i]/c)
        }
    }
}

console.log(answer)

