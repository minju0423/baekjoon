const input = require('fs').readFileSync('input_1051.txt').toString().split("\n")
const [n, m] = input.shift().split(" ").map(Number)

const arr = input.map(el=> el.split("").map(Number))
let maxSize = 1;
let size = 0;


// 1. 최대 크기는 n, m 중 더 작은 수가 됨
size = Math.min(n, m)

//2. 더 작은 수에 맞춰서 꼭짓점에 쓰여있는 수가 같은지 판별
for(let i=0; i<n; i++){ // 세로
    
    for(let j=0; j<m; j++){
        let start = arr[i][j];
        for(let k=0; k<size; k++){
            if(i+k >= n || j+k >=m) break;
            let width = arr[i][j+k]
            let heigth = arr[i+k][j]
            let end = arr[i+k][j+k]
            if(start === end && width === heigth && heigth === end){
                maxSize = maxSize < (k+1) ** 2 ? (k+1) ** 2 : maxSize
            }
        }
    }
}

console.log(maxSize)


