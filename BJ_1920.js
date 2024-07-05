/**
 * 백준1920 - 수 찾기(실버4)
 */
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const input = require('fs').readFileSync('input_1920.txt').toString().split('\n')
const N = +input[0]

const nArr = input[1].split(" ").map(Number)

const M = parseInt(input[2])
const mArr = input[3].split(" ").map(Number)

let result = []

nArr.sort((a,b)=>{return a-b})
// console.log(nArr)


for(let m of mArr){
    let low = 0;
    let high = nArr.length-1;
    let chk = false
    while(low<=high){
        let mid = parseInt((low+high)/2)
        if(nArr[mid] < m){
            low = mid+1
        }else if(nArr[mid] > m){
            high = mid-1
        }
        if(nArr[mid] == m){
            chk = true;
            break
        }
    }
    
    if(chk){
        result.push(1)
    }else{
        result.push(0)
    }
}

console.log(result.join('\n'))