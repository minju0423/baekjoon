function solution(input){
    const [N, M] = input.shift().split(" ").map(Number)
    const  board = input.map(el=> el.split(""))
    let answer = []

    let black = [
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
    ]

    let white = [
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
    ]

    /**
     * 블랙 또는 화이트 배열이랑 일치하는지 판별하는 함수
     * @param {Array} color : black or white
     * @param {Number} x 
     * @param {Number} y 
     * @returns 
     */
    function firstColor(color, x, y){
        let cnt = 0
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                if(board[i+x][j+y] !== color[i][j]) cnt++
            }
        }
        return cnt
    }

    for(let row=0; row<=N-8; row++){
        for(let col=0; col<=M-8; col++){
            answer.push(firstColor(black,row,col))
            answer.push(firstColor(white,row,col))
        }
    }
    console.log(Math.min(...answer))

}

const readline = require('readline')
const fs = require('fs').createReadStream('./input_1018.txt')
const rl = readline.createInterface({
    input : fs,
    // input : process.stdin,
    output : process.stdout
})

let input = []
rl.on('line', (line)=>{
    input.push(line)
}).on('close', ()=>{
    solution(input)
    process.exit()
})