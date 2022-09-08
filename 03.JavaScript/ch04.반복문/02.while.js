//1. while문 기본 조건 : ex) 1 + n * n = 1000 초과?

let number = 1 ; sum = 0;

while (true) {
    sum+=number;
    if (sum > 1000)
        break;
    number++;
    
};
console.log(sum,number)

sum = 0;
for (let i = 1; i < 1000; i++) { // 변수 i 는 지역변수라, 스코프 범위를 벗어나서 사용할 수 없음
    sum += i;
    if (sum > 1000)
        break;
}

let i;
sum = 0;
for (i=1; i < 1000; i++) {
    sum += i;
    if (sum > 1000)
        break;
}
console.log(sum,i)