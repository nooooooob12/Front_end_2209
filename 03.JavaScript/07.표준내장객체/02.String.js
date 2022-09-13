let hello = '안녕하세요.'; //literal로 부터 생성
let helloFromConstructor = new String('안녕하세요'); // 생성자 함수 사용해서 생성

//속성
console.log(hello.length); // String property = 글자수

//메소드
console.log(hello[1],hello.charAt(1)); // position에 위치한 값, 하지만 [index]로 많이 불러와서 사용 잘 안함
console.log(hello.concat('여러분~')); // hello + 'String'의 형태로도 많이 써서 활용도 낮음
console.log(hello.indexOf('하'), hello.indexOf('한')); // 해당 string의 위치 인덱스를 불러옴. 없는 인덱스는 -1 리턴


//Q1, 디지털 시계(00:00 ~ 23:59)가 있다. 디지털 시계에서 3이라는 숫자가 있는 시간은 하루에 총 몇초인가?
let totalSeconds = 0;
for (let hour = 0; hour<24; hour++) {
    for (let minuts = 0; minuts<60; minuts++) {
        let display = String(hour) + ':' + String(minuts);
        if (display.indexOf('3')>=0) {
            totalSeconds+=60;
        }
        }
}
console.log(totalSeconds);

// Regular Expression(정규표현식)
let sample = 'A quick brown fox 갈색의 재빠른 여우가 over the lazy dog';
let newStr = sample.replace(/[A-Z]/, ''); // 대문자 -> 공백
console.log(newStr);
newStr = sample.replace(/[r]/g, 'R'); //글자 하나 변경
console.log(newStr);
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ-가-힣]/g, ''); //한글 지우기
console.log(newStr);


// 문자열의 일부분 추출
let str = 'Apple, Banana, Kiwi';
console.log(str.slice(7,7+6));
console.log(str.slice(7));

console.log(str.substring(7,13));//slice와 크게 다를건 없다??
console.log(str.substr(7,6)); // (시작인덱스, 갯수)로 좀 다름. 근데 곧 사라질 메소드..

// 문자열을 특정 문자열을 기준으로 배열 만들기
const fruits = str.split(',');
console.log(fruits);

// Q2, 1에서부터 1000까지 숫자, 0은 몇 번 오고 1은 몇 번, ... 9는 몇번 나오는지 세기?
let numbers = '';
for(let i = 0; i<=1000; i++) {
    numbers += String(i);
}
let obj = {};
    for(let i = 0; i<10; i++){
    obj[String(i)]=numbers.split(String(i)).length-1;
}
console.log(obj)
