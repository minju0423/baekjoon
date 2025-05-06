const input = require('fs').readFileSync('input_1916.txt').toString().trim().split('\n')

const n = +input[0]
const m = +input[1]
const [start, end] = input.at(-1).split(" ").map(Number)

let arr = Array(n+1).fill().map(_=>[])


for(let i=2; i<m+2; i++){
    let [st, en, c] = input[i].split(" ").map(Number)
    arr[st].push([en,c]) //단방향
}


const getMinNode = (dist, visited) => {
    let minDist = Infinity
    let minNode = -1

    for(let i=1; i<=n; i++){
        if(!visited[i] && dist[i] < minDist){
            minDist = dist[i] 
            minNode = i
        }
    }
    return minNode
}

const dijkstra = (start, end) => {
    const distances = Array(n+1).fill(Infinity)
    let visited = Array(n+1).fill(false)
    distances[start] = 0

    for(let i=0; i<n; i++){
        const curNode = getMinNode(distances, visited)
        if(curNode === -1) break
        visited[curNode] = true

        for(const [nextNode, cost] of arr[curNode]){
            const distance = distances[curNode] + cost
            if(distance < distances[nextNode]) distances[nextNode] = distance
        }
    }

    return distances[end]
}

console.log(dijkstra(start, end))