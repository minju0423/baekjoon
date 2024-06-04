function solution(n){
    let answer = 0
    while(0 < n){
        if (n & 1) {
            answer++;
          }
          n >>= 1;
    }
   
    return console.log(answer);

}

solution(23)
solution(32)
solution(64)
solution(48)