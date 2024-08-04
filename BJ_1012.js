// const input = require('fs').readFileSync('input_1012.txt').toString().trim().split('\n').map(el => el.split(" ").map(Number))
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number))
const T = +input[0]

let m, n ,k

let place = []
let visit = []
let dx = [1,0,-1,0]
let dy = [0,-1,0,1]


for(let tc=1; tc<=T; tc++){//T만큼 돌면서
    
    [m, n, k] = input[tc] // m : 가로길이, n : 세로길이, k : 배추가 심어져있는 위치의 개수
    let arr = input.splice(tc+1, k) // 배추의 위치
    
    place = Array(n).fill().map(_=> Array(m).fill(0)) //배추밭
    visit = Array(n).fill().map(_=> Array(m).fill(false)) //방문배열
    
    while(k>0){
        k--
        const [x,y] = arr.shift()
        place[y][x] = 1
    }

    let answer = 0;
    for(let i=0; i<n; i++){// 세로
        for(let j=0; j<m; j++){ //가로
            if(place[i][j] ===1 && !visit[i][j]){//배추가 심어져있고 방문하지 않았을 때
                visit[i][j] = true
                dfs(i, j, n, m)
                answer++
            }
        }
    }
    console.log(answer)
    
}


function dfs(i, j, n ,m){
    visit[i][j] = true
    for(let idx=0; idx<4; idx++){//동서남북 4번
        let ni = i + dx[idx]
        let nj = j + dy[idx]
        if(ni<0 || nj <0 || ni>=n || nj>=m) continue
        if(place[ni][nj] === 1 && !visit[ni][nj]){
            dfs(ni, nj, n , m)
        }
    }
}
