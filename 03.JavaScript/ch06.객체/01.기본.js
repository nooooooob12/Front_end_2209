// 배열 예시
let fruits = ['사과','배','감'];

let arrayPersonInfo = ['제임스',28,'남자'];

// 객체
let personInfo = {
    'name':'제임스', 'age':28,'gender':'남자'
};
//기본 호출방식
console.log(personInfo['name']);

//자바스크립트의 또 다른 선언 & 호출 방식
let maria = {name:'마리아', age:24, gender:'여성'};
console.log(maria.성별);

//key 값을 변수(문자열)로 받는 경우
const key = 'age';
//maria.key - 이와 같이 사용할 순 없고, 아래와 같이 사용하면 됨
console.log(maria[key], maria['gen' + 'der']);


// ES-6에서 가능한 문법!

const name = '홍길동';
const age = 25;
const gender = '남자';
const hong = {name:name,age:age,gender:gender}; // 기본 방식
const hongES6 = {name, age, gender}; // ES-6 방식 문법 - React에서도 많이 활용되는 방식.
console.log(hong,hongES6);
