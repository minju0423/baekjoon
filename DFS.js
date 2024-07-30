function dfs_recursive(graph, v, visited){
    //현재 노드를 방문 처리
    visited[v] = true

    //현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for(let node of graph[v]){
        if(!visited[node]){
            visited[node] = true
            dfs(graph, node, visited)
        }
    }

}

function dfs_stack(graph, start, visited){
    const stack = []
    stack.push(start)

    while(stack.length){
        let v = stack.pop()
        if(!visited[v]){
            visited[v] = true
            for(let node of graph[v]){
                if(!visited[node]){
                    stack.push(node)
                }
            }
        }
    }
}