const str = require('fs').readFileSync('input_1157.txt').toString().trim().toUpperCase()

let map = new Map()

for(let i=0; i< str.length; i++){
    if(!map.has(str[i])){
        map.set(str[i], 1)
    }else{
        map.set(str[i], map.get(str[i])+1)
    }
}

let max = 0
let answer = ''
map.forEach((val, key)=>{
    if(max < val){
        max = val
        answer = key
    }else if(max === val){
        answer = '?'
    }
   
})

console.log(answer)

