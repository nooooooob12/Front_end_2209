// 재귀 함수 (Recursion) n! = n*(n-1)! 단, 0!은 1

const num = 5;
let c = 1;
for(let i=1; i<=num; i++) {
    c *= i;
}
console.log(`${num}! 는 ${c}입니다.`);

//재귀함수
function factorial(n) {
    if(n == 0 ) {
        return 1;
    }else {
        return n * factorial(n-1);
    }
}
console.log(`10!은${factorial(10)}입니다.`);

// fibonacci 수열 f(n) = f(n-1) + f(n-2); f(0),f(1) = 모두 1

function fibo(n) {
    if(n==0 || n == 1) {
        return 1;
    }
    return fibo(n-1) + fibo(n-2);
}
for(let i=0; i<10; i++) {
    console.log(fibo(i));
}