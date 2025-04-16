let word = require('fs').readFileSync('input_2941.txt').toString().trim()
const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']


croatia.forEach(el =>{
    word = word.split(el).join("Q")
})

console.log(word.length)