let n = 4
let m = 6
let miro = [
    ['1','0','1','1','1','1'],
    ['1','0','1','0','1','0'],
    ['1','0','1','0','1','1'],
    ['1','1','1','0','1','1']
]

function solution(n,m,miro) {
    let visited = Array(n).fill().map(x=>Array(m).fill(0))

    function bfs(row, col){
        let dx = [1,0,-1,0]
        let dy = [0,-1,0,1]

        let queue = []
        queue.push([row,col])

        visited[row][col] = 1

        while(queue.length){

            let [x, y] = queue.shift();

            for(let i=0; i<4; i++){
                let nx = x + dx[i]
                let ny = y + dy[i]

                if(nx<0||nx>=n||ny<0||ny>=m) continue;

                if(visited[nx][ny] === 0 && miro[nx][ny] == 1){
                    visited[nx][ny] = visited[x][y]+1
                    queue.push([nx,ny])
                }
                
            }
            

        }
        
    }
    bfs(0,0)
    
    return console.log(visited[n - 1][m - 1])
}

solution(n,m,miro)

