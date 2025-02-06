const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input : fs.createReadStream('input_16953.txt'),
    // input : process.stdin,
    output : process.stdout
})

let input =[]
rl.on('line', (line)=>{
    input = line.split(" ").map(Number)

}).on('close', ()=>{
    let [A, B] = input
   
    const bfs =  () =>{
        let queue = [[A, 1]]
        while(queue.length){
            let [curNum, cnt] = queue.shift()
            if(curNum === B){
                return cnt
            }else{
                if(curNum*2 <= B){
                    queue.push([curNum*2 , cnt+1])
                }
                if(Number(curNum + '1') <= B){
                    queue.push([Number(curNum+'1'), cnt+1])
                }
    
            }
    
            
        }
        return -1
    }

    console.log(bfs())

    
    
})