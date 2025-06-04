const input = require('fs').readFileSync('input_10103.txt').toString().split('\n').map(el => el.split(" ").map(Number))
const n = input.shift()
let changyoung_score = 100
let sangduck_score = 100
for(let i=0; i<n; i++){
    let [changyoung, sangduck] = input[i]
    if(changyoung < sangduck){
        changyoung_score -= sangduck
    }else if(changyoung > sangduck){
        sangduck_score -= changyoung
    }
}

console.log(changyoung_score)
console.log(sangduck_score)