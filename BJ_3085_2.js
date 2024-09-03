const input = require('fs').readFileSync('input_3085.txt').toString().trim().split('\n')

const N = +input.shift()
const candy = input.map(el=> el.split(''))
let max = 1

/**
 * 두 칸을 상하좌우 다 변경 가능
 * 교환은 한번만
 * 교환한 것은 다시 돌려놔야 함
 */

//행을 기준으로 오른쪽 색과 변경
for(let i=0; i<N; i++){
    for(let j=0; j<N-1; j++){
        swap(i, j, i, j+1)
        search()
        swap(i, j+1, i, j)
    }
}
//열을 기준으로 아래쪽 색과 변경
for(let i=0; i<N-1; i++){
    for(let j=0; j<N; j++){
        swap(i, j, i+1, j)
        search()
        swap(i+1, j, i, j)
    }
}

console.log(max)

function swap(row1, col1, row2, col2){
    let temp = candy[row1][col1]
    candy[row1][col1] = candy[row2][col2]
    candy[row2][col2] = temp
}

function search(){
    //행에서 긴 수열 탐색
    for(let i=0; i<N; i++){
        let cnt = 1
        for(let j=0; j<N-1; j++){
            if(candy[i][j] == candy[i][j+1]){
                cnt++
                max = Math.max(cnt, max)
            }else{
                cnt = 1
            }
        }
    }

    //열에서 긴 수열 탐색
    for(let i=0; i<N; i++){
        let cnt = 1
        for(let j=0; j<N-1; j++){
            if(candy[j][i] == candy[j+1][i]){
                cnt++
                max = Math.max(cnt, max)
            }else {
                cnt =1
            }
        }
    }
}