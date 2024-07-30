// const input = require('fs')
//   .readFileSync('input_7562.txt')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.split(' ').map(Number));

const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')
.map((v) => v.split(' ').map(Number));

// 나이트가 이동할 수 있는 x, y좌표 여덟 곳
const dir = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
let start, goal, N, visited; // 시작 지점, 목표 지점, 체스판 한 변의 길이, 방문 체크할 배열

const bfs = () => {
  // 시작 지점의 x,y좌표와 이동 횟수를 카운트할 초기값 0을 큐에 담는다.
  const queue = [[start[0], start[1], 0]];
  while (queue.length) {
    const [cx, cy, move] = queue.shift();

	// 현재 위치가 목적지 좌표와 같아지면 이동한 칸 수 반환
    if (cx == goal[0] && cy == goal[1]) return move;

	// 현재 위치 기준으로 나이트가 이동할 수 있는 여덟 곳 탐색할 반복문
    for (let i = 0; i < 8; i++) {
      const nx = cx + dir[i][0];
      const ny = cy + dir[i][1];

	  // 해당 위치가 체스판을 벗어나지 않았고 방문하지 않았다면
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
        visited[nx][ny] = true; // 방문 처리
        queue.push([nx, ny, move + 1]); // 큐에 해당 위치, 이동 횟수 +1하여 담기
      }
    }
  }
};

// 테스트케이스 입력값 정제 작업
for (let idx = 1; idx < input.length - 1; idx++) {
  N = +input[idx];
  start = input[idx + 1];
  goal = input[idx + 2];
  idx += 2;
  visited = Array.from(Array(N), () => Array(N).fill(false));

  console.log(bfs());
}