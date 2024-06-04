/**
 * DFS
 */

let n = 7 //컴퓨터의 수
let m = 6 //네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수
let computer = [
    [1, 2],
    [2, 3],
    [1, 5],
    [5, 2],
    [5, 6],
    [4, 7],
]

function solution(n,m,computer){
    let answer = 0;
    let visited = Array(n+1).fill(0)
    let graph = Array(n+1).fill().map(_=>[])

    computer.forEach(element => {
        let st = element[0]
        let en = element[1]
        graph[st].push(en)
        graph[en].push(st)
        
    });

    function dfs(st){
        visited[st] = 1
        for(let end of graph[st]){
            if(!visited[end]){
                visited[end] =1
                answer++
                dfs(end)
            }
        }
    }
    dfs(1)
    return console.log(answer)
}

solution(n,m,computer)