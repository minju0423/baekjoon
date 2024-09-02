const input = require('fs').readFileSync('input_2606.txt').toString().trim().split('\n')

const N = +input.shift() //컴퓨터의 수
const M = +input.shift() //네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수
//네트워크 상에서 직접 연결되어 있는 컴퓨터의 번호 쌍
const arr = input.map(el => el.split(" ").map(Number))

let computer = Array(N+1).fill().map(_=> [])
let visited = Array(N+1).fill().map(_=>false) //방문 배열
visited[1] =  true
let cnt = 0

arr.forEach(a=>{//양방향 노드
    computer[a[0]].push(a[1])
    computer[a[1]].push(a[0])
})

function dfs(start){
    for(let i of computer[start]){
        if(!visited[i]){
            visited[i] = true
            cnt++
            dfs(i)
        }
    }
}
dfs(1)
console.log(cnt)



