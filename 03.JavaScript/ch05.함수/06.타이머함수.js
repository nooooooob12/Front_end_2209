// TimeOut 설정 - setTimeout 함수는 매개변수로 핸들러( 콜백함수)를 매개변수로 넣어야함.
 setTimeout(function(){
    console.log('Timeout 발생(3초후)');
},3000);//ms단위

//시간 간격(interval) - 주기적 실행
const si = setInterval(()=>{
    console.log(new Date());
},1000);
// 주기적으로 실행되는 것 멈추기
setTimeout(()=>{
    clearInterval(si);
},5000);