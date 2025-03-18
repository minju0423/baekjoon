const input = require('fs').readFileSync('./input_11403.txt').toString().split('\n')
const N = +input.shift()
const graph = input.map(el => el.split(" ").map(Number))
let adj = Array(N).fill().map(_=> [])

let answer = Array(N).fill().map(_=> Array(N).fill(0))

for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(graph[i][j] === 1){
            adj[i].push(j)  //단방향
        }
    }
}

for(let i=0; i<N; i++){
    let visited = Array(N).fill(false)
    bfs(i, visited)
   
}

function bfs(start, visited){
    let queue = [start]
    // visited[start] = true
    while(queue.length){
        let cur = queue.shift()
        for(const next of adj[cur]){
            if(!visited[next]){
                visited[next] = true
                answer[start][next] = 1
                queue.push(next)
                
            }
        }
    }
}


for(let i=0; i<N; i++){
    console.log(answer[i].join(" "))
}