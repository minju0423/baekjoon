const input = require('fs').readFileSync('input_2776.txt').toString().trim().split('\n')
const T = +input.shift()


for(let i=0; i<T; i++){
    const N = +input.shift()
    const arr1 = input.shift().split(' ').map(Number).sort((a, b) => a - b);
    const M = +input.shift()
    const arr2 = input.shift().split(' ').map(Number)
    
    let answer = []
    
    arr2.forEach(target=>{
        let success = false
        if(arr1.includes(target)){
            success = true
        }
        let res = success ? 1:0
        answer.push(res)
        

    })
    
    console.log(answer.join('\n'))
}

