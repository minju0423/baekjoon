let input = require('fs').readFileSync('input_16947.txt').toString().trim().split('\n').map(el=> el.split(' ').map(Number))

const N = +input[0]

let visit = Array(N+1).fill(0) //방문배열

//역과 역을 연결하는 구간의 정보
let station = Array(N+1).fill().map(el =>[] )
for(let i=1; i<=N; i++){//인접 리스트 생성
    let [from, to] = [input[i][0], input[i][1]]
    station[from].push(to)
    station[to].push(from)
    
}

/**
 * 1. 사이클(순환선)에 해당하는 노드들 구하기 => DFS
 *  => 처음 방문했던 노드를 다시 방문하게 될 때 사이클이 발생
 * 2. 모든 노드들을 조회하면서, 사이클까지의 최단거리 구하기 => BFS
 */

//#region :: 1. 사이클에 해당하는 노드들 구하기 => DFS
let flag = 0
let cycle; //사이클(순환선)

let start; //시작노드
for(let i=1; i<=N; i++){
    start = i
    visit[i] = 1
    dfs(1,i)
    visit[i] =0
    if(flag) break;
}

/**
 * 
 * @param {방문횟수} L 
 * @param {시작노드} idx 
 * @returns 
 */
function dfs(L, idx){
    if(flag) return

    for(let x of station[idx]){
        console.log(x)
        if(!visit[x]){//미방문이라면
            visit[x] = 1 //방문처리
            dfs(L+1, x)
            visit[x] = 0
        }else if(L >= 3 && x === start){
            //방문한 노드가 3개 이상이고, 다음 노드가 시작노드라면 사이클임
            flag = 1
            cycle = visit.slice() //탈출 시 방문 배열 복사
            return
        }
    }

   
}
//#endregion

//#region :: 2. 노드로부터 사이클까지의 최단거리 구하기 => BFS
let result = []
for(let i=1; i<=N; i++){
    if(cycle[i]){ //노드가 사이클에 있으면 bfs를 실행할 필요가 없음 => 0 push
        result.push(0)
        continue
    }
    result.push(bfs(i)) //사이클에 없으면 bfs 실행하여 최소거리 정보 push
}

console.log(result.join(" ")) //출력

function bfs(i){
    const queue = []
    queue.push(i)

    let dist = 0; //시작노드에서의 거리
    const visit2 = new Array(N+1).fill(0) //방문배열(생략가능)
    visit2[i] =1

    while(true){
        dist++ //큐에서 shift가 진행되기 전에 거리를 1씩 증가

        //큐에는 계속 shift되면서 연결된 노드가 담기므로, 현재 큐의 크기만큼 반복
        const iterator = queue.length

        //현재 큐의 크기로 반복해야 dist 변수를 증가시키는 시점을 알수있음
        for(let i=0; i<iterator; i++){
            const from = queue.shift()
            for(let to of station[from]){
                if(cycle[to]){//사이클이 존재한다면
                    //거리(dist)를 반환하며 무한루프를 빠져나옴
                    return dist
                }
                if(!visit2[to]){ //방문하지않았다면
                    visit2[to] = 1 //방문처리
                    queue.push(to)
                }
            }
        }
    }

}



