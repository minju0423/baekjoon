const input = require('fs').readFileSync('./input_3184.txt').toString().split('\n')
const [R, C] = input.shift().split(" ").map(Number)
let dir = [[1,0], [-1,0], [0,1], [0,-1]]
let visited = Array(R).fill().map(_=>Array(C).fill(0))
let wolfs = 0
let sheeps = 0
let cntS = 0
let cntW = 0
for(let i=0; i<R; i++){
    for(let j=0; j<C; j++){
        if(input[i][j] !== '#' && !visited[i][j]){
            // bfs(i,j)
            dfs(i,j)
            //영역 안의 양의 수가 늑대의 수보다 많으면 양이 살아남음 그렇지 않으면 늑대가 살아남음
            sheeps > wolfs ? (cntS += sheeps) : (cntW += wolfs)
            sheeps = 0
            wolfs = 0
        }
        
    }
}
console.log(cntS, cntW)

//dfs 풀이
function dfs(i,j){
    visited[i][j] = 1
    if(input[i][j] === 'v') wolfs++
    if(input[i][j] === 'o') sheeps++
    for(let d=0; d<4; d++){
        let nr = i + dir[d][0]
        let nc = j + dir[d][1]
        if(nr>=0 && nc>=0 && nr<R && nc<C && input[nr][nc] !== '#' && !visited[nr][nc]){
            dfs(nr,nc)
        }
    }
}

//bfs 풀이
function bfs(i,j){
    let queue = [[i,j]]
    visited[i][j] = 1
    if(input[i][j] === 'v'){
        wolfs++
    }
    if(input[i][j] === 'o'){
        sheeps++
    }
    while(queue.length){
        let [row, col] = queue.shift()
        for(let i=0; i<4; i++){
            let nr = row + dir[i][0]
            let nc = col + dir[i][1]
            if(nr>=0 && nc>=0 && nr<R && nc<C && input[nr][nc] !== '#' && !visited[nr][nc]){
                visited[nr][nc] = 1
                bfs(nr,nc)
            }
        }
    }
    
}

