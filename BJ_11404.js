const input = require('fs').readFileSync('input_11404.txt').toString().split('\n')

const n = +input.shift()
const m = +input.shift()

const info = input.map(el => el.split(" ").map(Number))

const answer = Array(n+1).fill().map(_=>Array(n+1).fill(Infinity))

for(let k=0; k<info.length; k++){
    let st = info[k][0] //start city
    let end = info[k][1] //end city
    let cost = info[k][2] //cost

    //간선이 여러 번 주어질 경우
    answer[st][end] = Math.min(answer[st][end], cost)
}

//자기 자신으로 가는 비용 0
for(let i=1; i<=n; i++){
    answer[i][i] = 0 
}


for(let k=1; k<answer.length; k++){

    for(let a=1; a<answer.length; a++){
        for(let b=1; b<answer.length; b++){
            answer[a][b] = Math.min(answer[a][b], answer[a][k]+ answer[k][b])
        }
    }
}

for(let i=1; i<=n; i++){
    const row = []
    for(let j=1; j<=n; j++){
        row.push(answer[i][j] === Infinity ? 0 : answer[i][j])
    }
    console.log(row.join(" "))
}
