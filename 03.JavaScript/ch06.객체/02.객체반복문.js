const maria = {name:'마리아', age:24, gender:'여성'};
const james = {name:'제임스', age:28, gender:'남성'};

 // for 반복문에서 in을 사용
for (let key in maria) {
    console.log(key,maria[key]);
}

//배열 안에 객체가 담긴 경우
const persons = [maria,james]; 
for (let person of persons) { // persons 는 배열이므로 for - of 로 아이템을 꺼내온다?
    for (let key in person) { // person는 객체가 되므로 기본적인 방식대로 for in으로 불러온다.
        console.log(key,person[key]);
    }
}
console.clear()
//외부와 데이터를 주고 받는 경우
const externalForm = JSON.stringify(persons); // JSON으로 저장
console.log(externalForm);
const internalForm = JSON.parse(externalForm); // JSON 파일 불러오기
console.log(internalForm);