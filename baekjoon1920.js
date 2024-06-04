/**
 * 완전탐색
 */
let arr= [4, 1, 5, 2, 3]
let target_list = [1, 3, 7, 9, 5]

function solution(arr, target_list){
    let answer = []
    arr.sort((a,b)=>a-b)
    // arr = [1,2,3,4,5]
    
    target_list.forEach(element => {
        let st = 0
        let en = arr.length -1
        let chk = false
        while(st <= en){
            mid = parseInt((st+en)/2)
            if(arr[mid] < element){
                st = mid+1
            }else if(arr[mid] > element){
                en = mid-1
            }else{
                chk = true
                break
            }
        }

        if(chk){
            answer.push(1)
        }else{
            answer.push(0)
        }
    });
    
    return console.log(answer);
}

solution(arr, target_list)

/**
 * forEach => includes 확인
 */
function solution2(arr, target_list){
    let answer = []
    target_list.forEach(element => {
        if(arr.includes(element)){
            answer.push(1)
        }else answer.push(0)
    });

    return console.log(answer)
}
solution2(arr,target_list)