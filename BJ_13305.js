const input = require('fs').readFileSync('input_13305.txt').toString().split("\n")
//n의 최댓값이 10^5, 거리와 가격은 10^9로 매우 커서 BigInt 사용
const n = +input.shift()
const dist = input.shift().split(" ").map(v => BigInt(v))
const price = input.shift().split(" ").map(v => BigInt(v))
let answer = 0n
let curPrice = price[0]

for(let i=0; i<n-1; i++){
    answer += curPrice * dist[i]
    //현재 가격보다 다음 가격이 저렴한 경우 갱신
    if(curPrice > price[i+1]){
        curPrice = price[i+1]
    }
}

console.log(String(answer))
