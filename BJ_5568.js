const input = require('fs').readFileSync('input_5568.txt').toString().split('\n').map(Number)
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number)

let [n,k,...arr] = input //n:카드 개수, k:조합할 카드수


let answer = Array(k).fill()
let selected = Array(n).fill(false)
let setArr = new Set(); //중복제거

function cardSet(cnt){ //순열 이용
    if(cnt == k){
        setArr.add(Number(answer.join("")))
        return 
    }
    for(let i=0; i<n; i++){
        if(!selected[i]){
            selected[i]=true
            answer[cnt] = arr[i]
            cardSet(cnt+1)
            selected[i]=false
        }
    }
}

cardSet(0)
console.log(setArr.size)