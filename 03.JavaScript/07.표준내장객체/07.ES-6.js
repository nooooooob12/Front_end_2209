// ES-6(2015년 추가된 문법)


// 1.Destructuring assignment (비구조적 어사인먼트)
const fruits = ['apple','banana','cherry'];
const [a,b,c] = fruits;
console.log(a,b,c);

const product = {name:'mouse', price:20000};
const {name,price} = product;
console.log(name,price);

// 2.Spread syntax '...'
const fruits1 = ['grape','mango'];
const fruits2 = [fruits, fruits1];
console.log(fruits2);
const fruits3 = [...fruits,...fruits1];
console.log(fruits3);

const numbers = [4,16,9,25,36];
console.log(Math.max(numbers)); // 결과 = NaN
console.log(Math.max(...numbers)); // Math.max(4,16,9,25,36) => 결과 : 36


// 3. let, const

// 4. template literals ` ${} & enter 등 자유롭게 사용 가능 ` 

// 5. 3항 연산자 ? 참 : 거짓

// 6. 화살표 함수(Arrow function) -- let rs = str => str.split('').reverse().join('');

// 7. Default parameters -- 함수 인자의 default 값 지정 가능

// 8. object showthand property -- object의 key값과 value 값이 동일할 시 생략할 수 있어짐

// 9. class의 등장

// 10. Set

const mySet = new Set();
mySet.add(1);
mySet.add(3);
mySet.add(1);
console.log(mySet);
console.log(mySet.has(3));
console.log(mySet.size); // length와 같음
