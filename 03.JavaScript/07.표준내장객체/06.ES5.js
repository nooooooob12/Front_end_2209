// 2008~9년도 문법인 ES-5에 추가된 내용임

const fruits = ['apple','banana','cherry','grape'];


// for-Each - 배열순회 메소드
fruits.forEach(function(value,index){
    console.log(`인덱스${index}의 값은 ${value}네요`);
});
fruits.forEach(value => console.log(value)); // 화살표 함수를 통해 사용도 가능












// 배열의 각 요소에 대해서 함수 적용 - map
const numbers = [4,16,9,25,36];
let result = numbers.map(function(num){
    return Math.sqrt(num);
})
result = numbers.map(x=> Math.sqrt(x));
console.log(result);

//배열에서 기준을 만족시키는 것만 추출 - filter
// 20보다 큰 수만 추출
result = numbers.filter(value => value>20); 
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