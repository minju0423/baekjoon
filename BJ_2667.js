const input = require('fs').readFileSync('input_2667.txt').toString().trim().split('\n')

const N = +input.shift()

let dir = [[1,0], [0,-1], [-1,0], [0,1]]
let map = input.map(el=> el.split("").map(Number))
let visited = Array(N).fill().map(_=> Array(N).fill(false))

let cnt = 0; //단지 수
let cnt_home = 0 //단지 내 집의 수
let answer = []

for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        //집이 있고 방문하지 않았다면
        if(map[i][j] == 1 && visited[i][j] == false){
            
            dfs(i,j)
            cnt++
            answer.push(cnt_home)
            cnt_home = 0; //초기화
        }
    }
}


function dfs(i,j){
    if(visited[i][j] ==false && map[i][j] ==1){
        visited[i][j] = true
        cnt_home++
        for(let idx=0; idx<4; idx++){ //상하좌우
            let nx = i + dir[idx][0]
            let ny = j + dir[idx][1] 
            if(nx>=0 && ny>= 0 &&  nx<N && ny<N){
                dfs(nx, ny)
            } 
        }
    }
}

console.log(cnt +'\n'+ `${answer.sort((a,b)=>a-b).join('\n')}`)
