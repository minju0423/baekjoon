const input = require('fs').readFileSync('input_2251.txt').toString().split(' ').map(Number);

const a = input[0]
const b = input[1]
const c = input[2]
const visited = Array(201).fill().map(_=> Array(201).fill(false))
const answer = Array(201).fill(false)
let result = []

function dfs(ca, cb, cc){
    if(visited[ca][cb]){
        return
    }

    if(ca == 0){ //물통 A가 0이라면 물통 C의 용량 기록
        answer[cc] = true
    }
    visited[ca][cb] = true;
    
    // A -> B
    if(ca + cb > b){
        dfs((ca+cb)-b, b, cc)
    }else{
        dfs(0, ca+cb, cc)
    }

    // B -> A
    if(cb+ca > a){
        dfs(a, (cb+ca)-a, cc)
    }else{
        dfs(cb+ca, 0 , cc)
    }

    // C -> A
    if(cc+ca > a){
        dfs(a, cb, (cc+ca)-a)
    }else{
        dfs(cc+ca, cb , 0)
    }

    // C -> B
    if(cc+cb > b){
        dfs(ca,b, (cc+cb)-b)
    }else{
        dfs(ca, cc+cb, 0)
    }

    // B -> C, A -> C
    // A + B = C 이기 때문에, C가 넘칠 일이 없다.
    dfs(ca, 0, cb+cc);
    dfs(0, cb, ca+cc)
}

dfs(0,0,c)

for(let i=0; i<201; i++){
    if(answer[i]){
        result.push(i)
    }
}

console.log(result.join(" "))