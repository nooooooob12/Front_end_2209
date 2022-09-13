// 클래스 선언 - 객체의 틀 생성 
class Person {
    constructor(name,age,gender) { //속성
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

    intro() { // 메소드
        console.log(`저는 ${this.name}이고, 나이는${this.age}이며, ${this.gender}입니다.`);
    }
}
james = new Person('제임스',28,'남자');
maria = new Person('마리아',24,'여자');
console.log(james);
console.log(maria);
james.intro();
maria.intro();
