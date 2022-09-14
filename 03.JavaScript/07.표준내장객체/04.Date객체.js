let today = new Date();
console.log(today.toDateString()); // 날짜/요일
console.log(today.toLocaleString()); // Timezone 반영한 현재 시간
console.log(today.toISOString()); // Timezone 설정은 안되지만 22-09-14 09:00:00와 유사하게 나옴

// 22-09-14 09:00:00과 같은 데이트값 가져올 수 있는 함수 만들어보기
function myLocaleTimeFormate(date) {
    let year = String(date.getFullYear()).substring(2);             //2022 -> 22만 추출
    let month = String(date.getMonth()+1);
        month = month.length == 1 ? '0' +month : month;             // 9월 -> 09
    let day = `${date.getDate() <10 ? +'0' + date.getDate():date.getDate()}`;
    let hour = `${date.getHours() <10? '0' + date.getHours():date.getHours()}`;
    let minuts = `${date.getMinutes() <10? + '0' + date.getMinutes():date.getMinutes()}`;
    let seconds = `${date.getSeconds() <10? + '0' + date.getSeconds():date.getSeconds()}`;
    return `${year}-${month}-${day} ${hour}:${minuts}:${seconds}`;
}
console.log(myLocaleTimeFormate(today));


// Unix time 구하기
const unixDate = new Date(1.6632e12);
console.log(myLocaleTimeFormate(unixDate));
console.log(unixDate.toLocaleString());

// 문자열 생성

const strDate = new Date('2022-09-14 09:50'); //시간 설정을 안할 시 표준시 00:00로 설정
console.log(myLocaleTimeFormate(strDate));

// 시간 요소로 생성

const elementDate = new Date(2022,9-1, 14, 9, 50); //월(month값)은 -1 해줘야함
console.log(myLocaleTimeFormate(elementDate));


//시간 더하고 빼기

today = today.setDate(today.getDate()+100);
console.log(myLocaleTimeFormate(today));

//시간 간격
const examDay = new Date('2022-11-14')
today = new Date('2022-09-14');
const diff =examDay.getTime() - today.getTime(); //수능일과 오늘 밀리초 
const dDay = diff / (24 * 60 * 60 * 1000);
console.log(`오늘은 수능 D-${dDay}입니다.`);