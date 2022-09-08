// 매개변수 정의(지정)되지 않은 경우  => if !부정문을 통해, 또는 한줄if문을 통해서도 가능
// 논리식 or(||)을 통해서도 가능, 한줄 if문 = 삼항연산자 쓰는게 나을듯?
function print(name,count) {
    /* if (!count) {
        count=0;
    } */
    count = count ? count : 0;
   //count = count || 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
print('사과',10);
print('감');