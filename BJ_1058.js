const input = require('fs').readFileSync('input_1058.txt').toString().split('\n')
const n = +input[0]
const map = input.splice(1).map(el=> el.split(''))

let answer = 0


for(let i=0; i<map.length; i++){
    let set = new Set();
    for(let j=0; j<map[i].length; j++){
        if(j !== i && map[i][j] == 'Y'){
            set.add(j)
        }
    }
    let arr = [...set]
    arr.forEach((p)=>{
        for(let z = 0; z< map[0].length; z++){
            if(z !== i && map[p][z] == 'Y'){
                set.add(z)
            }
        }
    })

    if(set.size === n-1){
        console.log(set.size)
        return
    }else{
        answer = Math.max(answer, set.size)
    }
}

console.log(answer)