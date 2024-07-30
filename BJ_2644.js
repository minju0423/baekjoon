// const input = require('fs').readFileSync('input_2644.txt').toString().trim().split('\n')
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
//trim() => 공백을 제거해야지 통과함(런타임에러: TypeError 발생ㅜ,ㅜ)


const n = Number(input.shift())
let [a,b] = input.shift().split(' ').map(Number)
const m = Number(input.shift())
let arr = input.map((v) => v.split(' ').map(Number))

let visited = Array(n+1).fill(false)
let graph = Array(n+1).fill().map((_)=>[])

arr.map(([from,to])=>{ //양방향 그래프
    graph[from].push(to)
    graph[to].push(from)
})

let bfs= (start, target)=>{
    let stack = [[start,0]]
    visited[start] = true
    while(stack.length){
        const [curNum, depth] = stack.pop()
        if(curNum == target) return depth
        for(let el of graph[curNum]){
            if(!visited[el]){
                visited[el] = true
                stack.push([el, depth+1])
            }

        }
    }
    return -1
}

console.log(bfs(a,b))







