//완전수(perfect Number) = 자기 자신을 제외한 약수의 합이 자기 자신과 같은 수
// ex) 6 = 1 + 2 + 3, Q1) 10000이하 완전수 찾기 = 4개있음

for (let i=2; 2<=10000; i++) {
    //약수 찾기
    let divisors = [];
    for(let k=1; k<i; k++)
    if(i % k == 0) {
        divisors.push(k);
    }
    // 약수의 합 구하기
    let sum = 0;
    for (let div of divisors) {
        sum += div;
    }
    // 자기 자신과 같은지 확인
    if (sum == i) {
        console.log(i);
        console.log(divisors.toString());
    }
}
