const input = require('fs').readFileSync('./input_19532.txt').toString().split(" ").map(Number)
let [a,b,c,d,e,f] = input

for(let x = -999; x<1000; x++){
    for(let y=-999; y<1000; y++){
        if(
            (a*x+b*y) === c && (d*x+e*y) === f
        ){
            return console.log(x, y)
        }
    }
}



