const input = require('fs').readFileSync('input_10819.txt').toString().split('\n')
const n = +input.shift()
const arr = input.shift().split(' ').map(Number)

let answer = 0

let newArr = []
function cal(newArr){
    let sum = 0
    for(let i=0; i<n-1; i++){
        sum += Math.abs(newArr[i] - newArr[i+1])
    }
    return sum
}


function dfs(L){
    if(L === n){
        answer = Math.max(answer, cal(newArr))
        
    }else{
        for(let i=0; i<n; i++){
            if(newArr.includes(arr[i])){
                continue
            }
            newArr.push(arr[i])
            dfs(L+1)
            newArr.pop()
        }
    }
}

dfs(0)
console.log(answer)
