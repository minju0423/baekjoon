let input = require('fs').readFileSync('input_16947.txt').toString().trim().split('\n').map(el=> el.split(' ').map(Number))


const N = +input[0]

let station = Array(N+1).fill().map(el =>[] )
let visit = Array(N+1).fill(false)

for(let i=1; i<=N; i++){//인접 리스트 생성
    let [from, to] = [input[i][0], input[i][1]]
    station[from].push(to)
    station[to].push(from)
    
}
console.log(station)
let answer = []

const bfs = (start)=>{
    let q = []
    q.push([start, 0])
    visit[start] = true

    while(!q.length){
        const [cur, depth] =q.shift()
        
        for(let node of station[cur]){
            if(!visit[node]){
                visit[node] = true
                q.push([node, depth+1])
            }
        }
    }
}

console.log(bfs(1))

