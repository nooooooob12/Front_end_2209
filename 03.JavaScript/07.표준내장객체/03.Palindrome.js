//Palindrome > 3자리 정수 두개를 곱해서 나온 결과가 Palindrome일때 가장 큰 수와 그때 두개의 정수는?
// Ex) N * N = result == Palindrome 이어야 함

//Q1. 문자를 뒤집는 함수(거꾸로 출력)
function reverseString(str) {
    let result = ''
    for(let i = str.length-1; i>=0; i--) {
        result+=str[i];
    }
    return result;
}
console.log(reverseString('스위스, 기러기,토마토'));

//Q2. 주어진 문자열이 Palindrome인지 확인하는 함수
function isPalindrome(str) {
    //Palindrome == 참, != false를 리턴하는 함수
     return str == reverseString(str);
}
console.log(isPalindrome('우영우'));

//Q3. 배열에서 가장 큰 수와 그것의 인덱스 구하기

const array = [3,18,27,51,46,98];
// 최대값 임의 선정, 제일 첫번째 원소
let maxVal = array[0]; // maxVal = -1 , Number.MIN_SAFE_INTEGER
let maxIndex = 0;       // maxIndex = -1
for(let i = 1; i<array.length; i++){
    if(array[i]>maxVal) {
        maxVal=array[i];
        maxIndex = i;
    }
}
console.log(maxIndex,maxVal);

//Palindrome > 3자리 정수 두개를 곱해서 나온 결과가 Palindrome일때 가장 큰 수와 그때 두개의 정수는?
// Ex) N * N = result == Palindrome 이어야 함
let maxPal = 0, maxI = 0,  maxK=0;
for(let i =100; i<=999; i++) {
    for (let k = i; k<=999; k++) {
        let product = i * k;
        if (isPalindrome(String(product))) {
            if(product > maxPal) {
                maxPal = product;
                maxI = i;
                maxK = k;
            }
        }
    }
}
console.log(`${maxI} x ${maxK} = ${maxPal}`);