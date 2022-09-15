/* random number로 10보다 크고 100보다 작은 두개의 정수가 주어집니다.
두 숫자의 공약수를 세트 형태로 구하도록 프로그램을 작성하세요. */

// 11 ~ 99 까지 랜덤한 수를 가진 두개의 정수 %2 == 0,  ㅇㅇ. 이걸 집합(Set) 자료형 으로 만드는거??

const num1 = Math.ceil(Math.random()*89 + 10 );
const num2 = Math.ceil(Math.random()*89 + 10 );
const divisors1 = [];
const divisors2 = [];
for(let i= 1; i<num1; i++) {
    if (num1 % i ==0) {
        divisors1.push(i); // num 1의 약수
    }
    
}
for(let i= 1; i<num2; i++) {
    if (num2 % i ==0) {
        divisors2.push(i); // num2의 약수
    }
    
}
let cd = new Set(divisors1.filter(function(val) {
    return divisors2.includes(val); // Boolean
}));
console.log(cd);