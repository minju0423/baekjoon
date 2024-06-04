/**
 * 8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
 * 
 */

let n = 10
let m = 13
let chess = [
    ['BBBBBBBBWBWBW'],
    ['BBBBBBBBBWBWB'],
    ['BBBBBBBBWBWBW'],
    ['BBBBBBBBBWBWB'],
    ['BBBBBBBBWBWBW'],
    ['BBBBBBBBBWBWB'],
    ['BBBBBBBBWBWBW'],
    ['BBBBBBBBBWBWB'],
    ['WWWWWWWWWWBWB'],
    ['WWWWWWWWWWBWB']
]

function solution(n,m,chess){
    let answer = []
    let arr = []
    
    for(let i=0; i<chess.length; i++){
        arr.push(chess[i][0].split(''))
    }
    
    const white = [
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW'
    ]
    const black = [
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB"
    ]
    function whiteSt(x,y){
        let min = 0;
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                // console.log(chess[i+x][j+y])
                if(arr[i+x][j+y] !== white[i][j]) min++
            }
        }
        return min

    }

    function blackSt(x,y){
        let min = 0;
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                if(arr[i+x][j+y] !== black[i][j]) min++
            }
        }
        return min
    }

    for(let i=0; i< n-7; i++){
        for(let j=0; j<m-7; j++){
            answer.push(whiteSt(i,j))
            answer.push(blackSt(i,j))
        }
    }
    // console.log("answer : " + answer)
    return console.log( Math.min(...answer));
}

solution(n,m,chess)

