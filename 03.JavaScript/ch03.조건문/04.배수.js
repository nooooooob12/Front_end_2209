// 어떤 숫자가, 3의 배수인지, 5의 배수인지  두 수의 공배수인지, 아닌지 확인하는 것
// 3의 배수 = Fizz 5의 배수 = Buzz  두 수의 공배수 = FizzBuzz 아니면 숫자를 출력

const num = Math.ceil(Math.random() * 100);
if (num % 3 === 0 && num % 5 === 0)  {
    console.log(num,'FizzBuzz');
} else if (num % 3 === 0) {
    console.log(num,'Fizz');
} else if (num % 5 === 0 ) {
    console.log(num,'Buzz');
}else {
    console.log(num, num);
};