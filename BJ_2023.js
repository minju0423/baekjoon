const N = require('fs').readFileSync('input_2023.txt').toString()
// const N = require('fs').readFileSync('/dev/stdin').toString()

//소수 구하는 로직
function isPrime(num){
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i == 0){
            return false
        }
    }
    return true
}


for(let i=2; i<=9; i++){
    if(isPrime(i)){
        digit(i)
    }
    
}


function digit(num){
    if(num.toString().length == N){
        console.log(parseInt(num))
        return
    }
    for(let el=parseInt(num.toString()+String(0)); el<=parseInt(num.toString()+String(9)); el++){
        if(isPrime(el)){
            digit(el)
            
        }
            
    }

}
