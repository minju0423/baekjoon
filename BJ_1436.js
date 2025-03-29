const N = +require('fs').readFileSync('./input_1436.txt').toString()

const tripleSix = 666
let cnt = 0
let num = 666
while(cnt < 100001){
    if(String(num).includes(tripleSix)){
        cnt++
    }
    if(cnt === N){
        console.log(num)
        break
    }
    num++

}