// const input = require('fs').readFileSync('input_1946.txt').toString().trim().split('\n')
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const T = Number(input[0]) //테스트 케이스

let value = [];
let result = [];

for(let i=1; i<=T; i++){
    let N = input[i]
    value.push(
        //splice(시작할 인덱스, 제거할 요소의 수)
        input.splice(i+1, N)
             .map((item) => item.split(" ")) 
             .sort((a,b) => a[0]-b[0]) //0번 인덱스로 오름차순 정렬
    )    
}

for(let i=0; i<value.length; i++){
    let count = 1; //1등은 무조건 포함되기 때문에
    let standard = Number(value[i][0][1]) //기준 : 각 TC의 서류 1등인 지원자의 면접 등수
    
    for(let j=1; j<value[i].length; j++){
        if(Number(value[i][j][1]) < standard){ //기준 다음순서부터 돌면서 기준보다 숫자가 낮으면(등수가 높음)
            count++ //count 1씩 올림
            standard = Number(value[i][j][1]) //기준이 바뀜
        }
    }
    result.push(count)
}

console.log(result.join('\n'))

