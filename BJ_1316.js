const input = require('fs').readFileSync('./input_1316.txt').toString().split('\n')

const n = +input.shift()
let answer = Array(n).fill(true)

for(let i=0; i<n; i++){
    let arr = []
    let word = input[i]
    if(word.length < 2){ answer[i] = true} // 단어의 개수가 1이면 무조건 그룹 단어
    else { arr.push(word[0]) } //단어 개수가 2 이상이면 배열에 첫번째 문자를 넣음
    for(let j=1; j<word.length; j++){
        if(!arr.includes(word[j])){ // 배열에 해당 문자가 없으면 배열에 넣음
            arr.push(word[j])
        }else{// 배열에 문자가 있는데 배열 마지막의 문자와 같으면 연속된 단어로 보고, 
            //  같지 않으면 연속되지 않은 문자이기 때문에 그룹단어가 아니므로 false로 바꾸고 break
            if(arr[arr.length-1] !== word[j]){
                answer[i] = false
                break
            }
        }
       
    }
    
}

//true인것이 그룹 단어이므로 filter -> 그룹 단어의 개수
console.log(answer.filter(el=> el===true).length)
