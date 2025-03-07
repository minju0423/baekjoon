function solution(input){
    let [N, M] = input.shift()
    let graph = Array(N+1).fill().map(_=>[])
    for(let i=0; i<M; i++){
        let [a,b,c] = input[i]
        graph[a].push([b,c])
        graph[b].push([a,c])
    }
    let T = 2
    let distances = dijkstra(N, T, graph)
    let dp = Array(N+1).fill(-1)

    console.log(dfs(1, T, distances, graph, dp))
    
}

function dijkstra(N, start, graph){
    let distances = Array(N+1).fill(Infinity)
    let pq = [[0, start]]; //우선순위 큐(거리, 노드)
    distances[start] = 0;

    while(pq.length){
        pq.sort((a,b)=> a[0]-b[0])
        let [curDist, curNode] = pq.shift()
        if(distances[curNode] < curDist) continue
        for(let [next, weight] of graph[curNode]){
            let newDist = curDist + weight
            if(newDist < distances[next]){
                distances[next] = newDist
                pq.push([newDist, next])
            }
        }
    }

    return distances
}

function dfs(cur, T, distances, graph, dp){
    if(cur === T) return 1
    if(dp[cur] !== -1) return dp[cur]

    let count = 0
    for(let [next, _] of graph[cur]){
        if(distances[cur] > distances[next]){
            count += dfs(next, T, distances, graph, dp)
        }
    }

    return (dp[cur] = count)
}

const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input : fs.createReadStream('input_2176.txt'),
    // input : process.stdin,
    output : process.stdout
})
let input = []
rl.on('line', (line)=>{
    input.push(line.split(" ").map(Number))
}).on('close', ()=>{
    solution(input)
    process.exit()
})