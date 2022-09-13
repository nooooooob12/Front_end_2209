//상속(inheritance), 메소드 재정의(overriding)

class Person {
    constructor(name='홍길동',age=24,gender='남자') { //속성
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

    toString() { // 메소드
        return `저는 ${this.name}이고, 나이는${this.age}이며, ${this.gender}입니다.`;
    }
}
const hong = new Person();
console.log(hong.toString());

//상속

class Student extends Person {
    constructor(name,age,gender,scholarship=100000) {
        super(name,age,gender); // 새 속성값을 주기 위해 부모 속성을 먼저 호출하기.
        this.scholarship = scholarship;
    }
    toString() {
        return super.toString() +`\n장학금은${this.scholarship}원을 받았습니다.`;
    }
}
const student = new Student('성춘향',17,'여자',200000);
console.log(student.toString());



// Teacher 클래스 - Person 상속, 속성 추가 : 담당부서 추가 + toString() 메소드 재정의

class Teacher extends Person {
    constructor(name, age, gender,Department) {
        super(name,age,gender);
        this.Department =Department;
    }
    toString() {
        return super.toString() + `\n담당부서는 ${this.Department} 입니다.`;
    }
}

const teacher = new Teacher('가나다',24,'남자','국어');
console.log(teacher.toString());