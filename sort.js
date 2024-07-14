// 선택 정렬 함수
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
    	let minIndex = i; //첫번째 자리를 가장 작은 값이라고 가정
        for (let j = i+1; j < arr.length; j++) { //i+1번째 자리부터 순회하며
        	if (arr[minIndex] > arr[j]) {//arr[i]보다 작은 값이 있는지 검사
                minIndex = j
            }
        }
		// 스와프(swap)
        if(minIndex !== i){ //minIndex 값이 i와 같이 않다면 
            //그 값과 i번째 값을 교환
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp

        }
    }
    return arr
}

let selectionArray = selectionSort([5, 4, 3, 2, 1])
console.log(selectionArray)

function insertionSort(arr){
    for(let i=1; i< arr.length; i++){
        let cur = arr[i] //현재 데이터
        let left = i-1 //왼쪽 데이터
        
        while(left>=0 && arr[left] > cur){//left가 0보다 크거나 같고, arr[left]가 cur보다 큰 경우
            //arr[left+1]에 arr[left] 값을 넣고 left값을 하나씩 줄여감
            arr[left+1] = arr[left]
            left--
        }//왼쪽과 비교하다가 교환이 다 끝나고 while문 종료
        array[left+1] = cur //맨 앞의 요소에 cur값 
    }
    return arr;
}

let insertionArray = selectionSort([5, 4, 3, 2, 1])
console.log(insertionArray)


function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        let temp;
        for(let j=0; j<arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
        //각 회전을 끝내고 temp변수가 undefined 상태라면 정렬이 다 되었다는 뜻
        if(!temp) break; 
    }
    return arr
}

let bubbleArray = selectionSort([5, 4, 3, 2, 1])
console.log(bubbleArray)