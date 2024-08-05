const input = require('fs').readFileSync('input_3055.txt').toString().split('\n')

const [row,col] = input[0].split(" ").map(Number)

const map = input.slice(1).map(el => el.trim().split(''))
const visited = Array(row).fill().map(_=>Array(col).fill(0))

const dir = [[-1,0], [1,0], [0,-1], [0,1]]

let sx, sy, ex, ey;
let ans = 0;

let watertQueue = []
for(let i=0; i< row; i++){
    for(let j=0; j<col; j++){
        if(map[i][j] == 'S'){//고슴도치 위치
            sx=i
            sy=j
        }
        if(map[i][j] == 'D'){ //비버의 굴 위치
            ex=i
            ey=j
        }
        if(map[i][j] == '*'){//물 위치
            watertQueue.push([i,j])
        }
    }
}



//매 분마다 고슴도치는 현재 있는 칸과 인접한 네칸 중 하나로 이동할 수 있음
function bfs(){
    let queue = []
    queue.push([sx,sy,0])
    visited[sx][sy] =1

    while(queue.length){
        const len = queue.length
        waterBFS()

        for(let i=0; i<len; i++){
            const [x,y,cnt] = queue.shift()
            if(x == ex && y == ey){
                ans = cnt
                return
            }

            for(let i=0; i<4; i++){
                const [nx, ny] = [x+dir[i][0], y+dir[i][1]]
                if(nx<0 || ny<0 || nx>=row || ny>=col 
                    || map[nx][ny]=='*' || map[nx][ny] =='X' || visited[nx][ny]) continue
                visited[nx][ny] = 1
                queue.push([nx,ny,cnt+1])
                
            }
        }
    }
    return
}


//물이 있는칸과 인접해있는 비어있는 칸은 물이 차게됨
function waterBFS(){
    let queue = []
    for(let [x,y] of watertQueue){
        for(let i=0; i<4; i++){
            const [nx, ny] = [x+dir[i][0], y+dir[i][1]]
            if(nx <0 || ny<0 || nx>=row || ny>=col || map[nx][ny]!=='.') continue
            map[nx][ny] = '*'
            queue.push([nx, ny])
        }
    }
    watertQueue.push(...queue)
}

bfs()
ans > 0 ? console.log(ans) : console.log('KAKTUS')