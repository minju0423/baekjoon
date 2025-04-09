const input = require('fs').readFileSync('./input_2470.txt').toString().split("\n")
const n = +input.shift()
const solution = input.shift().split(" ").map(Number)
//오름차순 정렬
solution.sort((a,b)=> a-b)

let min = Infinity
let arr = [0,0]
let sum = 0
let first = 0 //첫번째 index 
let last = n-1 //마지막 index
while(first!==last){
    sum = solution[first] + solution[last]
    if(Math.abs(sum) < min){ // sum 절댓값이 작을 수록 0과 가까움
        min = Math.abs(sum)
        //arr에 두 수를 저장
        arr[0] = solution[first]
        arr[1] = solution[last]
        
    }
    if(sum === 0){
        break
    }else if(sum > 0){
        last--
    }else if(sum<0){
        first++
    }
    
}
console.log(arr.join(" "))