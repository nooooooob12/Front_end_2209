// Prototype - 구버전 js에서 제공하는 방법
// 객체를 찍어내는 Class의 이름은 대문자로 시작(python과 동일)
// 권장하는 방법은 아님.
function Person(name,age,gender) { // 생성자 함수
    this.name = name;
    this.age = age;
    this.gender = gender;
    Person.prototype.intro = function(){ // 메소드
        console.log(`저는 ${this.name}이고, 나이는${this.age}이며, ${this.gender}입니다.`);
    }
}
// 객체의 instance를 만드는 방법
james = new Person('제임스',28,'남자');
maria = new Person('마리아',24,'여자');

james.intro();
maria.intro();