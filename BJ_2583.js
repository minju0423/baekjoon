const input = require('fs').readFileSync('input_2583.txt').toString().split("\n").map(el => el.split(" ").map(Number))
const [m , n, k] = input.shift()

let arr = Array(m).fill().map(_=> Array(n).fill(0))


for(let i=0; i<k; i++){
    const [x1, y1, x2, y2] = input[i]
    
    for(let r = y1; r<y2; r++){
        for(let c = x1; c<x2; c++){
            arr[r][c] = 1
            
        }
        
    }
}

let answer = []
let dir = [[1,0], [-1,0], [0,1], [0,-1]]
let visited = Array(m).fill().map(_=> Array(n).fill(0))

for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
        if(arr[i][j] === 0 && !visited[i][j]){
            visited[i][j] = 1
            answer.push(bfs(i,j))
            
        }
    }
}


function bfs(i,j){
    let queue = [[i,j]]
    let cnt = 0
    while(queue.length){
        let [x, y] = queue.shift()
        cnt++
        for(let d=0; d<4; d++){
            let nx = x + dir[d][0]
            let ny = y + dir[d][1]
            if(nx >=0 && ny>=0 && nx < m && ny < n && arr[nx][ny] ===0 && !visited[nx][ny]){
                visited[nx][ny] = visited[x][y] + 1
                queue.push([nx,ny])
                
            }
        }
    }
    return cnt
}

console.log(answer.length)
console.log(answer.sort((a,b)=> a-b).join(" "))
