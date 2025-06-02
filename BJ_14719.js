const input = require('fs').readFileSync('input_14719.txt').toString().split("\n").map(el => el.split(" ").map(Number))
const [h, w] = input.shift()
const blocks = input.shift()

let cnt = 0
//2번째 열을 기준으로 좌측/우측으로 가장 높은 블록을 찾은 후, 더 낮은 쪽의 높이 - 2번째 열의 높이 => 고이는 물의 양
for(let i=1; i<w-1; i++){
    const leftMaxHeight = Math.max(...blocks.slice(0,i))
    const rightMaxHeight = Math.max(...blocks.slice(i+1))
    const basisHeight = Math.min(leftMaxHeight, rightMaxHeight)

    if(blocks[i] < basisHeight) cnt += basisHeight - blocks[i]
}

console.log(cnt)

