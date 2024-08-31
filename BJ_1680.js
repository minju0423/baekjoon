const input = require('fs').readFileSync('input_1680.txt').toString().split("\n")

const T = +input.shift();
// console.log(input)
for(let i=0; i<T; i++){//테스트케이스 횟수만큼
    //W: 쓰레기차 용량, N: 지점의 개수
    const [W ,N] = input.shift().split(' ').map(Number)
    let arr = input.splice(0,N).map(el=> el.split(" ").map(Number))

    let capa = 0 //용량
    let dist = 0 //움직인 거리 
    let prev = 0 //이전 값
    for(let i=0; i<N; i++){//지점의 개수만큼
        //x: 쓰레기장으로부터의 거리, w: 쓰레기 양
        let [x, w] = arr[i]
        if(capa+w < W){
            dist += x - prev
            capa += w
        }
        //1. 쓰레기의 양이 용량에 도달했을 때
        else if(capa+w == W){
            dist += (x-prev) + x*2
            capa = 0
            if(i == N-1){
                dist -= x*2
            }
            
        }
        //2. 그 지점의 쓰레기를 실었을 때 쓰레기차의 용량을 넘게 될때
        else if(capa+w > W){
            capa = w
            dist += (x-prev) + x*2
        }
        prev = x
        //3. 더 이상 쓰레기를 실을 지점이 없을 때
        if(i == N-1){
            dist += x
        }
    }
    console.log(dist)
}