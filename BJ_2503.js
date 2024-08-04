// const input = require('fs').readFileSync('input_2503d.txt').toString().split('\n')
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = input[0]

let num = []

let ans = [];
let visit = Array(10).fill(0)
for(let i=1; i<=N; i++){
    let arr=input[i].split(' ').map(Number)
    num.push(arr)
}

function isBall(answer, num){
    let cnt = 0
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(i !== j){
                if(answer[i] === num[j]) cnt++
            }
        }
    }
    return cnt
}


function isStrike(answer, num){
    let cnt = 0;
    for(let i=0; i<3; i++){
        if(answer[i] === num[i]) cnt++
    }
    return cnt
}

function dfs(res, visit){
    if(res.length == 3){
        let flag = true
        let answer = res.join("")

        for(const [n, s, b] of num){
            const strN = n.toString()
            const strike = isStrike(answer, strN)

            if(s !== strike){
                flag = false
                break
            }

            const ball = isBall(answer, strN)
            if(b !== ball){
                flag = false
                break
            }
        }

        if(flag) ans.push(answer)
        return
    }

    for(let i=1; i<=9; i++){
        if(!visit[i]){
            visit[i] = 1
            res.push(i)
            dfs(res, visit)
            visit[i] = 0
            res.pop()
        }
    }

}

dfs([], visit)
console.log(ans.length)
