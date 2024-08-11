let fiboArr =[0]
let fibo = (n)=>{
    if(n<3){
        fiboArr[n] =1
    }

    if(!fiboArr[n]){
        fiboArr[n] = fibo(n-1) + fibo(n-2)
    }

    return fiboArr[n]
}

console.log(fibo(10)) //55