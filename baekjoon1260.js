/**
 * DFS
 * BFS
 */
let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [3, 4]
]

function solution(arr){
    let answer_bfs = []
    let answer_dfs = []
    let visited = Array(arr.length).fill(false)
    let graph = Array(arr.length).fill().map(_=> [])
    arr.forEach(el => {
        graph[el[0]].push(el[1])
        graph[el[1]].push(el[0])
    });

    function dfs(start){
        
        if(visited[start]) return
        visited[start] = true
        answer_dfs.push(start)
        graph[start].forEach(val=>{
            if(!visited[val]){
                dfs(val)
            }
        })
    }
    dfs(1)

    visited = Array(arr.length).fill(false)
    function bfs(start){
        
        let queue = [start]
        visited[start] = true
        answer_bfs.push(start)
        
        while(queue.length){
            let cur = queue.shift()
            graph[cur].forEach(val=>{
                if(!visited[val]){
                    visited[val] = true
                    queue.push(val)
                    answer_bfs.push(val)
                }
            })
            
        }
    }
    bfs(1)
    
    return console.log(answer_dfs, answer_bfs)
}

solution(arr)




