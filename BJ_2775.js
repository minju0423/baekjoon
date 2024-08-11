const input = require('fs').readFileSync('input_2775.txt').toString().split('\n').map(Number)


const T = input.shift() //테스트 케이스

for(let i=0; i<T; i++){
    let k = input.shift() //층수
    let n = input.shift() //호수

    const house = Array(k+1).fill().map(() => Array(n+1).fill(0))
    for(let i=1; i<=n; i++){
        house[0][i] = i //0층의 i호에는 i명이 산다
    }

    for(let i=1; i<=k; i++){//층수
        for(let j=1; j<=n; j++){ //호수
            house[i][j] = house[i-1][j] +house[i][j-1]
        }
    }

    console.log(house[k][n])
}

