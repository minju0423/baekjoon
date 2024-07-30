//graph 자료구조와 startNode를 입력
const BFS1 = (graph, startNode)=>{
    let visited = []; //탐색을 마친 노드들
    let needVisit = [] //탐색을 해야할 노드들

    needVisit.push(startNode)

    while(!needVisit.length){ //탐색 해야할 노드가 남아있다면 (needVisit.length !== 0)
        const node = needVisit.shift() //가장 오래 남아있던 정점을 뽑음
        if(!visited.includes(node)){ //해당 노드 방문이 처음이라면
            visited.push(node)
            needVisit = [...needVisit, graph[node]]
        }
    }

    return visited;
}

//배열 큐 사용
const BFS2 = (graph, start, visited)=>{
    const q = []
    q.push(start)
    visited[start] = true

    while(!q.length){
        const v = q.shift()

        for(const cur of graph[v]){
            if(!visited[cur]){
                visited[cur] = true
                q.push(cur)
            }
        }
    }
}