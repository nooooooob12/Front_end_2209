let number = 273.1;
let num = Number('273.1');
console.log(number === num);

// 기본 자료형 - 숫자, 문자 , 불리언

// 객체 자료형
let obj = new Number(273.1);
console.log((typeof number), (typeof num), (typeof obj));

let pi = Math.PI;
console.log(pi);
console.log(pi.toExponential(), pi.toFixed(2),pi.toPrecision(6)); 
// 지수형태 & 소숫점 이하 자리 지정 & 유효 자릿수 지정

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY);
console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER); // 2의 53승 - 1값, - 2의 53승 
console.log(Math.pow(2,53)-1); // 9007199254740991 ↑와 동일한 값