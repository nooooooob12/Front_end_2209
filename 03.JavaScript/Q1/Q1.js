/* random number로 두개의 정수가 주어집니다.(첫번째 값의 범위는 1 ~20,
    두 번째 값의 범위는 10 ~ 30이며 첫 번째 값은 두 번째 값보다 4이상 작아야 합니다).
    첫 번째 정수부터 두 번째 정수까지를 지수로 하는 2의 거듭제곱 배열을
    출력하는 프로그램을 만드세요.
    단, 배열의 두 번째 요소와 뒤에서 두 번째 요소는 삭제한 뒤 출력하세요. */


    // 첫번째수가 만약 15고 두번째 수가 20이라고 하면, 15부터 20까지의 지수로 하는 2의 거듭제곱을 배열에 담아서 출력하는거고..
    // 그랬을때, 16과 19는 담지 않는다.



    // 첫번째수와 두번째 랜덤 수 만들기부터

let first = Math.ceil(Math.random()*20);
let second = 0;
while (second < first+4){
    second = Math.ceil(Math.random()*20 + 9);
}
console.log(first,second);
const powerArray =[];
for (let i = first; i<=second; i++) { 
    if (i == first+1 || i == second-1)//앞에서 2번째, 뒤에서 2번째 수 배제
            continue;
    powerArray.push(Math.pow(2,i));

}
console.log(powerArray);