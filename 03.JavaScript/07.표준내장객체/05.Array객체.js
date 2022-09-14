// Array 생성
const cars = ['Saab','Volvo','BMW'];
const persons = new Array('James','Maria'); //Array도 객체, 생성자 함수 사용 생성 가능!
console.log(cars,persons);


//Array 속성 - lenghth
console.log(cars.length,persons.length);

//마지막 요소 구하는 법
console.log(cars[cars.length-1]);


// 배열 합치기 - concat
console.log(cars.concat(persons));
console.log(cars,persons);
console.log(cars + persons); // cars.toString() + persons.toString()의 형태
console.log([cars,persons]); // 2차원 배열

// 문자열 만들기 - join
console.log(cars.join(' | '));

// 요소 제거 - pop, 파괴적 성향의 메소드로 배열이 변함
let car = cars.pop();
console.log(cars,car);

// 마지막에 요소 추가 - push,파괴적 성향의 메소드로 배열이 변함 
cars.push('Benz');          //cars 변수는 배열의 데이터가 있는 곳의 주소
console.log(cars);

console.log('---------------------------------------------------------------------')

// 배열의 순서 뒤집기 - reverse,파괴적 성향의 메소드로 배열이 변함
console.log(cars.reverse(),cars);
function reverseString(str) {
/*     let strArray = str.split('');
    strArray.reverse();
    let result = strArray.join('');
    return result;  */
   return str.split('').reverse().join('');
}
console.log(reverseString('토마토 스위스 기러기'));
// 화살표 함수로 바꿀시
let rs = str => str.split('').reverse().join('');
console.log(rs('토마토 스위스 기러기'));

// 배열 자르기 - slice
const fruits = ['apple','banana','cherry','grape'];
console.log(fruits.slice(1,2)); // 시작 인덱스, 끝 인덱스(포함하지 않음), 끝 인덱스 생략시 맨 마지막 인덱스까지

//배열 요소 정렬 - sort , 배열이 변화
console.log(cars);
cars.sort(); // 오름차순 정렬
console.log(cars.sort());

// 내림차순 정렬
const numbers = [45,47,67,35,97,82];
numbers.sort().reverse(); // reverse와 결합하여 내림차순으로 변경시키기 가능
console.log(numbers);


// 배열 지정범위 삭제 및 반환 - splice, 배열이 변화함
const abFruits = fruits.splice(0,2);
console.log(abFruits,fruits);


// 배열의 각 요소에 대해서 함수 적용 - map
let result = numbers.map(function(num){
    return Math.sqrt(num);
})
result = numbers.map(x=> Math.sqrt(x));
console.log(result);







// 앞으로 해결해야 할 문제? 과제? - callback & chaining 적용이 필요함
const objArray = [
    {name : 'james',score:80, math:80, sci:70},
    {name : 'maria',score:60, math:90, sci:70},
    {name : 'adam',score:70, math:80, sci:60},
    {name : 'eve',score:65, math:70, sci:80}
]

// 이 중에서 성적 순으로 내림차순 정렬을 해보세요
// math와 sci 평균을 구해보세요.
// math 점수가 80점 이상인 사람