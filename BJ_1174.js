const N = +require('fs').readFileSync('input_1174.txt').toString()

const numArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let answer = []

function dfs(num, index){
    if(!answer.includes(num)){
        answer.push(num)
    }
    if(index >= 10){
        return
    }

    dfs((num*10) + numArr[index], index+1)
    dfs(num, index+1)
}

dfs(0,0)
answer.sort((a,b) => a-b )
if(answer[N-1] !== undefined){
    console.log(answer[N-1])
}else {
    console.log(-1)
}