const [N, r, c] = require('fs').readFileSync('input_1074.txt').toString().split(' ').map(Number)

let answer = 0;

const divide = (row, col, size)=>{

    //좌표 찾음
    if(row === r && col === c ){
        console.log(answer)
        return
    }
    
    if(r >= row && r < row+size && c >= col && c < col+size){ //영역 내에 있음
        size = parseInt(size/2)
        divide(row, col, size) //왼쪽 위
        divide(row, col+size, size) //오른쪽 위
        divide(row+size, col, size) //왼쪽 아래
        divide(row+size, col+size, size) //오른쪽 아래
    }else {//영역 밖에 있다면
        //해당 영역의 크기만큼 answer에 더해줌
        answer += size * size
        
    }
    
}

divide(0, 0 , Math.pow(2,N))