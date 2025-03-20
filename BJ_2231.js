const m = +require('fs').readFileSync('./input_2231.txt').toString()

for(let n=0; n<m; n++){
    let sum = n
    nStr = n.toString()
    let len = nStr.length
    for(let i=0; i<len; i++){
        sum += parseInt(nStr[i]) // n과 n의 각 자리수의 합
    }
    if(m === sum){
        console.log(n)
        break
    }
    if(n === m-1){
        console.log(0)
    }
}