const input = require('fs').readFileSync('input_10026.txt').toString().trim().split('\n')
const N = Number(input.shift())

const grid = input.map(el => el.split(""))

let colorWeak = 0; //적록색약인  카운트
let person = 0; //일반인 카운트

let visited = Array(N).fill().map(el => Array(N).fill(false)) //일반인 방문배열
let visitedWeak = Array(N).fill().map(el => Array(N).fill(false)) //적록색약 방문배열
for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(!visited[i][j]){
            if(!visitedWeak[i][j]){
                colorWeak++
            }
            dfs(i,j, grid[i][j])
            person++
        }
    }
}

console.log(person, colorWeak)

function dfs(x,y, color){
    //구역을 벗어나면 리턴
    if(x<0 || y<0 || x>=N || y>=N) return
    //Red or Green 일때 적록색약 dfs 적용
    if(color == 'R' || color == 'G'){
        weakDfs(x,y)
    }
    //이미 방문 또는 다른 색상이면 리턴
    if(visited[x][y] || color != grid[x][y]) return
    
    visited[x][y] = true
    dfs(x+1,y,color)
    dfs(x,y+1,color)
    dfs(x-1,y,color)
    dfs(x,y-1,color)
    
}

function weakDfs(x,y){//적록색약 dfs
    //구역을 벗어나고 Blue 일때 리턴
    if(x<0 || y<0 || x>=N || y>=N || grid[x][y] == 'B') return
    //이미 방문했을 때 리턴
    if(visitedWeak[x][y]) return
    visitedWeak[x][y] = true
    weakDfs(x+1, y)
    weakDfs(x-1, y)
    weakDfs(x, y+1)
    weakDfs(x, y-1)
}


