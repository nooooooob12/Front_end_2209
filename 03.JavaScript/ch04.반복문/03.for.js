// 1에서 100까지 합 반복문
let sum = 0; 
for (let i= 1; i <= 100; i++) {
    sum+=i
}
console.log(`1에서 100까지 정수의 합은 ${sum}입니다.`);

// 1에서 100까지의 홀수의 합 반복문
sum = 0;
for (let i = 1; i <= 100; i+=2) {
    sum+=i;
}
console.log(`1에서 100까지 정수 홀수의 합은 ${sum}입니다.`);

// 1에서 100까지의 짝수의 합 반복문
sum = 0;
for (let i = 2; i <= 100; i+=2) {
    sum+=i;
}
console.log(`1에서 100까지 정수 짝수의 합은 ${sum}입니다.`);

// 10f (factorial)의 값을 구하기
let product = 1;
for (let i= 1; i <= 10; i++) {
    product *=i
}
console.log(`1에서 100까지 정수의 곱은 ${product}입니다.`);