const input = require('fs').readFileSync('input_1431.txt').toString().trim().split('\n')

const N = +input.shift()

input.sort((a,b)=>{
    if(a.length != b.length) return a.length-b.length
    let sum1 = sum(a)
    let sum2 = sum(b)
    if(sum1 == sum2) return a.localeCompare(b)
    return sum1 - sum2
})

console.log(input.join('\n'))

function sum(str){
    return str.match(/[\d]/g)?.reduce((acc,num)=> acc + parseInt(num,10),0) || 0
}

