const currentTime = new Date();

if (currentTime.getHours() < 12 ) { // 조건문 안에 코드가 다중으로 존재해야 할 때는 중괄호 선언이 필요
    console.log(`${currentTime.toLocaleString()}은 오전입니다.\n`);
} else {
    console.log(`${currentTime.toLocaleString()}은 오후입니다.\n`);
};

if (currentTime.getHours() < 12 ) // if 조건문 안에 실행문이 하나 일때는 중괄호 선언을 생략할 수 있음. 그러나 3항 연산자로 표현하는게 권장됨
    console.log(`${currentTime.toLocaleString()}은 오전입니다.\n`);
 else 
    console.log(`${currentTime.toLocaleString()}은 오후입니다.\n`);

    // 조건 연산자, 3항 연산자

const amPm = currentTime.getHours() < 12 ? '오전' : '오후';
console.log(`${currentTime.toLocaleString()}은${amPm}입니다.`);

// python 3항 연산 방식 : a = 값1 if 조건 else 값2, JS의 3항 연산 방식 : a = 조건 ? 값 1 : 값 2 