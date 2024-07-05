const input = require('fs').readFileSync('input.txt').toString().split(/\s/)
// const input = require('fs').readFileSync('/dev/stdin').toString().split(/\s/).map(Number)

const n = parseInt(input[0]);
const x = parseInt(input[1]);

const n_arr = input.filter(v=> v !== '').slice(2,n+2).map(Number);

let result = ''
for(let i=0; i<n_arr.length; i++){
    if(n_arr[i] < x){
        result += n_arr[i] + ' '

    }
    
}

console.log(result)