
function solution(N, input){
    let dx = [0,1, 0, -1]
    let dy = [1,0, -1, 0]
    
    let maxHeight = 0;
    for(const x of input){
        maxHeight = Math.max(maxHeight, ...x)
    } // 2차배열 중에서 가장 큰 값 찾기

    const dfs = (x,y, heigth, visited) =>{
        for(let i=0; i<4; i++){
            let nx = x + dx[i]
            let ny = y + dy[i]
            if(nx>=0 && ny>=0 && nx<N && ny<N && !visited[nx][ny]){
                visited[nx][ny] = 1
                dfs(nx, ny, heigth, visited)
                
            }
        }
    }

    let maxArea = 0 //최대 영역
    for(let i = maxHeight; i>=0; i--){ //최대 높이부터 1까지 반복
        let area = 0 // 영역 수 
        // 높이 i 이하일때 true값 넣기
        let visited = [...Array(N)].map((_,x)=> [...Array(N)].map((_,y)=> input[x][y]<=i))

        for(let r=0; r<N; r++){
            for(let c=0; c<N; c++){
                if(!visited[r][c]){
                    visited[r][c] = 1
                    dfs(r,c,i,visited)
                    area++
                }
            }
        }
        maxArea = Math.max(maxArea, area)
    }

    console.log(maxArea)
    
}

const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    input : fs.createReadStream('input_2468.txt'),
    // input : process.stdin,
    output : process.stdout,

})

let input = []
let list = []
rl.on('line', (line)=>{
    input.push(line)
}).on('close', ()=>{
    let N = +input.shift()
    list = input.map(el => el.split(' ').map(Number))
    solution(N, list)
    process.exit()
})

