// 함수 이름을 갖는 기본 함수 - 선언함수 - web

function funcName () {
    console.log('함수 이름을 갖는 함수');
}
funcName();

// 익명(Anonymous) 함수 - Node.js
const fn = function() {
    console.log('익명 함수');
}
fn();

// 화살표 함수/ES6 (Arrow function) 
const arrowFunc = () => {
    console.log('화살표 함수');
}
arrowFunc();

const square2 = (x,y) => { // 기존 방식?
    return x*x + y*y;
}
console.log(square2(3,2));

const square = x => { // 매개변수가 1개인 경우 매개변수를 감싸는 소괄호()를 생략하는 방식
    return x*x;
}
console.log(square(5));

const sq = x => x*x; // 함수안의 return 인자 값이 1개인 경우 {}와 return을 생략하여 사용하는 방식
console.log(sq(10));

// 짝수면 제곱수를, 홀수면 세제곱수를 반환하는 함수

const myFunc = x => x%2 == 0 ? x*x : x*x*x; // 한줄로 쓰는 방식 = 가독성의 문제가 있을 수 있음. 잘 사용하자!
console.log(myFunc(2),myFunc(3));