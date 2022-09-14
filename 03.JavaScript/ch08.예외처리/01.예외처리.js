try {
error.error.error();
} catch(e) {
    console.log(e.name); // 에러 이름 알아내기
    console.log(e.message); // 에러가 발생한 이유(메시지) 알기
}
console.log('------------------------------------------------');

function callThreeTimes(callback) {
    if (typeof(callback) == 'function'){
        for(let i =0; i<3; i++) {
            callback();
        }
    } else {
        console.log('callback함수를 정의하세요')
    }
}

function myFunc(){
    console.log('호출이 되었음');
}

callThreeTimes(myFunc());
callThreeTimes(); 
console.log('프로그램 정상 종료'); 

function callThreeTimes2(callback) {
    try{
        for(let i =0; i<3; i++) {
            callback();
        }
    } catch(e) {
        console.log('callback함수를 정의하세요')
    }
}
callThreeTimes2();