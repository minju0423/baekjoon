const input = require('fs').readFileSync('input_2776.txt').toString().trim().split('\n')
const T = +input.shift()


for(let i=0; i<T; i++){
    const N = +input.shift()
    const arr1 = input.shift().split(' ').map(Number).sort((a, b) => a - b);
    const M = +input.shift()
    const arr2 = input.shift().split(' ').map(Number)
    
    let answer = []
    
    arr2.forEach(target=>{
        let st = 0
        let end = arr1.length-1
        let success = false
        let mid
        while(st<=end){
            mid = parseInt((st+end)/2)
            if(target<arr1[mid]){
                end = mid-1
            }else if(target > arr1[mid]){
                st = mid+1
            }else if(target == arr1[mid]){
                success = true
                break
            }

        }
        const res = success ? 1 : 0
        
        answer.push(res)

    })
    
    console.log(answer.join('\n'))
}

