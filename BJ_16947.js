let input = require('fs').readFileSync('input_16947.txt').toString().trim().split('\n').map(el=> el.split(' ').map(Number))


const N = +input[0]

let staion = Array(N+1).fill().map(el =>[] )
let visit = Array(N+1).fill(false)

for(let i=1; i<=N; i++){
    let [from, to] = [input[i][0], input[i][1]]
    staion[from].push(to)
    staion[to].push(from)
    
}

const bfs = (start, target)=>{
    let stack = [[start, 0]]
    visit[start] = true

    while(stack.length){
        const [cur, depth] =stack.pop()
        if(cur == target) return depth
        for(let node of staion[cur]){
            if(!visit[node]){
                visit[node] = true
                stack.push([node, depth+1])
            }
        }
    }
}

