// 객체 내부에서 사용되는 함수(method)
// 객체 : 속성(property, attribute) - 형용사의 형태 
//        + 메소드(method) - 동사의 형태

const james =  {
    name:'제임스', 
    age:28, 
    gender:'남성',
    intro: function(){
        console.log(`저는 ${this.name}이고, 나이는${this.age}이며, ${this.gender}입니다.`);
    }
};
james.intro();

const maria = {
    name:'마리아', //속성
    age:24, 
    gender:'여성',
    intro: function() { // 메소드
        console.log(`저는 ${this.name}이고, 나이는${this.age}이며, ${this.gender}입니다.`);
    }
};
console.log(maria);
maria.intro();