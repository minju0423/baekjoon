// const input = require('fs').readFileSync('input_10814.txt').toString().split('\n')
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let N = Number(input[0])

let person = []
for(let i=1; i<=N; i++){
    let [age, pName] = input[i].split(" ")
    age = Number(age)
    person.push([age, pName])
}

person.sort((a,b)=>{
    return a[0]-b[0]
})

for(let i=0; i<person.length; i++){
    console.log(person[i].join(" "))
}