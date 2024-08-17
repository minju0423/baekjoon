const input = require('fs').readFileSync('input_1544.txt').toString().trim().split('\n')

let N = +input.shift()
let arr = input.map(el=> el.trim())

for(let i=0; i<N; i++){
    let prevStr = arr[i]
    for(let j=i+1; j<N; j++){
        let str = arr[j]
        
        if(str.length == prevStr.length){//현재 단어와 전 단어의 길이가 같으면
            let strConcat = str.concat("", str) //현재단어 두개 붙임

            if(strConcat.includes(prevStr)){// 그 전 단어가 포함되어 있으면
                //arr 배열안에 있는 것을 지움
                arr.splice(j,1) //splice(index, delCount) 
                N--
                j--
            }
        }
    }
    
    
}
console.log(N)

