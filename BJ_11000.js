const input= require('fs').readFileSync('input_11000.txt').toString().trim().split('\n')
// const input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let N = input[0]
let arr = []

for(let i=1; i<=N; i++){
    const [start, end] = input[i].split(" ").map(Number)
    arr.push([start,1]) //[시작시간, 1]
    arr.push([end,-1]) // [종료시간, -1]
}

arr.sort((a,b)=> {
    if(a[0] == b[0]){ 
        return a[1] - b[1]
    }
    return a[0]-b[0]
})


let count = 0
let result = 0

/*특정 시간대에 동시에 진행되는 강의의 수 중 최댓값이 정답*/
for(let i=0; i< arr.length; i++){
    result += arr[i][1]
    count = Math.max(result, count) 
}

console.log(count)
