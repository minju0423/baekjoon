const input = require('fs').readFileSync('input_1913.txt').toString().split('\n').map(Number)
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number)

let N = input[0];
let findNum = input[1]
let arr = Array(N).fill().map((x,i)=> Array(N).fill(0))
let cnt = Math.pow(N,2)+1
let x = -1
let y = 0

let findX=0;
let findY=0;

while(0<N){
    
    for(let i=0; i<N; i++){//위->아래
        arr[++x][y] = --cnt
        
    }
    N -= 1
    for(let i=0; i<N; i++){//왼쪽->오른쪽
        arr[x][++y] = --cnt
        
    }
    
    for(let i=0; i<N; i++){//아래->위
        arr[--x][y] = --cnt
        
    }
    N -=1
    for(let i=0; i<N; i++){//오른쪽->왼쪽
        arr[x][--y] = --cnt
        
    }

}

N= input[0] //while문에서 N이 바뀌어서 다시 원래값으로 바꿔줌

for(let i=0; i<N;i++){
    console.log(arr[i].join(" "))
    if(arr[i].indexOf(findNum) !== -1){//arr배열에서 findNum을 찾으면 좌표(x=i, y=indexOf()값)를 저장
        findX = i
        findY = arr[i].indexOf(findNum)
    }
}

console.log(findX+1, findY+1)

