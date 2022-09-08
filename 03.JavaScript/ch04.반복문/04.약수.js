// 10보다 큰 정수를 입력으로 받아 약수를 모두 배열로 만들어서 출력.
let Num = 12;
let array = [];
for(let i = 1; i <= Num; i++) {
    if(Num % i === 0)
        array.push(i);
}
console.log(array);