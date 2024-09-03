const input = require('fs').readFileSync('input_3085.txt').toString().trim().split('\n')

/*
 * 사탕의 색이 다른 인접한 두 칸 고르기
 * 고른 칸에 들어있는 사탕 교환 
 * 빨간색 C
 * 파란색 P
 * 초록색 Z
 * 노란색 Y
 */
const N = +input.shift()
const candy = input.map(el=>el.split(''))
let answer = 1
for(let i=0; i<N; i++){
    if(answer == N) break 
    for(let j=0; j<N; j++){
        if(answer == N) break
        swap(i,j)
    }
}

console.log(answer)

function swap(i, j){ 
    const dir = [[0,1], [1,0]]
    for(let [x,y] of dir){
        //범위를 벗어나지않았을 때
        if(i+x > -1 && j+y > -1 && i+x<N && j+y<N && candy[i+x][j+y] !== candy[i][j]){
            let temp = candy[i][j]
            candy[i][j] = candy[i+x][j+y]
            candy[i+x][j+y] = temp
            //행, 열 갯수 계산
            checkRow()
            checkCol()
            candy[i+x][j+y] = candy[i][j]
            candy[i][j] = temp
        }
    }
}

function checkRow(){
    for(let i=0; i<N; i++){
        let checkArr = [1]
        for(let j=1; j<N; j++){
            checkArr[j] = candy[i][j-1] === candy[i][j] ? checkArr[j-1]+1 : 1
        }
        answer = Math.max(...checkArr, answer)
    }
}
function checkCol(){
    for(let i=0; i<N; i++){
        let checkArr = [1]
        for(let j=1; j<N; j++){
            checkArr[j] = candy[j-1][i] === candy[j][i] ? checkArr[j-1]+1 : 1
        }
        answer = Math.max(...checkArr, answer)
        
    }
}




