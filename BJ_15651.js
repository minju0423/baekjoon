const [n, m] = require('fs').readFileSync('./input_15651.txt').toString().split(" ").map(Number)


let arr = Array(m).fill(0)
let result = []

dfs(0)
console.log(result.join("\n"))

function dfs(cnt){
    if(cnt === m){
        result.push(arr.join(" "))
        return
    }
    for(let i=0; i<n; i++){
        arr[cnt] = i+1
        dfs(cnt+1)
    }
}