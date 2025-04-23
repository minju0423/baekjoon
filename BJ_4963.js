const input = require('fs').readFileSync('input_4963.txt').toString().split('\n').map(el => el.split(" ").map(Number))

let dir = [[1,0], [-1,0], [0,1], [0,-1], [1,1], [1,-1], [-1,1], [-1,-1]] //가로, 세로, 대각선

let tc = 0
while(true){
    let [w,h] = input[tc]
    if(w === 0 && h === 0) return 
    let cnt = 0 //섬의 개수
    let visited = Array(h).fill().map(el => Array(w).fill(false))
    let map = input.slice(tc+1, tc+1+h)

    const bfs = (row, col) => {
        let queue = [[row,col]]
        visited[row][col] = true

        while(queue.length){
            let [r, c] = queue.shift()
            for(let i=0; i<8; i++){
                let nr = r + dir[i][0]
                let nc = c + dir[i][1]
                if(nr < 0 || nc < 0 || nr >= h || nc >= w) continue
                if(map[nr][nc] === 1 && !visited[nr][nc]){
                    visited[nr][nc] = true
                    
                    queue.push([nr, nc])
                }
            }

        }
    }
    for(let i=0; i<h; i++){
        for(let j=0; j<w; j++){
            if(map[i][j] === 1 && !visited[i][j]){
                cnt++
                bfs(i,j)
            }
        }
    }
    console.log(cnt)
    tc = tc + 1+ h
    
}

