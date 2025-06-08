const input = require('fs').readFileSync('input_8979.txt').toString().split('\n').map(el => el.split(" ").map(Number))
const [n, k] = input.shift()


input.sort((a,b) => {
    //금메달 수가 같지않으면 금메달 차순
    if(a[1] !== b[1]){
        return b[1] - a[1]
    }else if(a[2] !== b[2]){ 
        return b[2] - a[2]
    }else return b[3] - a[3]
})

let idx = input.findIndex(el => el[0] === k)

for(let i=0; i<n; i++){
    if(JSON.stringify(input[idx].slice(1)) === JSON.stringify(input[i].slice(1))){
        console.log(i+1)
        break
    }
}