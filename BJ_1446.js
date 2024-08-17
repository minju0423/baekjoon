const input = require('fs').readFileSync('input_1446.txt').toString().split('\n').map(el=>el.split(' ').map(Number))

const [n, d] = input.shift()

let dist = Array(d+1).fill(Infinity) 
const graph = Array(d+1).fill().map(_=>[])


for(let i=0; i<n; i++){
    let [start, end, w] = input[i]
    if(end > d) continue //도착위치가 d보다 크면 넘어감
    if(end-start <= w) continue //지름길이 더 길면 안가는게 낫다

    graph[start].push([end,w]) //start 위치에 [도착위치, 지름길 길이] 추가
}

let prev = -1
for(let i=0; i<=d; i++){
    if(i) prev = dist[i-1]
    
    // prev =  dist[i-1] + 1 : 지름길을 이용하지 않는 방식
    dist[i] = Math.min(dist[i], prev+1)
    
    for(let [next,cost] of graph[i]){//i에서 출발하는 지름길이 있다면
        
        //현재까지 온 거리 + 지름길의 길이가 도착위치 보다 작다면 값 갱신
        if(dist[next] > dist[i]+cost){
            dist[next] = dist[i]+cost
        }
    }
}

console.log(dist[d])
