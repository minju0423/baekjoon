const n = +require('fs').readFileSync('input_1914.txt').toString().trim()
let answer = []
function hanoi(n, start, via, end){
    if(n === 1) {
        answer.push(`${start} ${end}`)
    }else{
        hanoi(n-1, start, end, via)
        answer.push(`${start} ${end}`)
        hanoi(n-1, via, start, end)

    }
    
}
console.log((2n ** BigInt(n) - 1n).toString());
if(n <= 20){
    hanoi(n, 1, 2, 3)
    console.log(answer.join("\n"))
}