//작성된 js 문서 jquery로 바꾸기, + 버튼(보이기, 감추기) 생성하여 입력태그 ~ 답칸 감추고 보이게 
//이벤트 설정, 토요일까지

function answer1() {
    const first = parseInt($('#first').val());
    const second = parseInt($('#second').val());
    console.log(first, second);
    let result = [];
    for (let i=first; i<=second; i++) {
        if (i == first+1 || i == second-1)
            continue;
        result.push(2**i);
    }
    $('#result1').html(result.join(', '));
}

function answer2() {
    const text = $('#text').val();
    const noPunct = text.replace(/[-',.]/g, '').replace(/\n/g, ' ');    // 구둣점 제거, 줄바꿈은 공백으로 변경
    console.log(noPunct);
    const words = noPunct.split(' ');
    let count = 0;
    for (let word of words) {
        if (word == 'the')
            count++;
    }
    $('#result2').html(`the의 갯수는 ${count}개`); 
}

function answer3() {
    const num1 = parseInt($('#num1').val());
    const num2 = parseInt($('#num2').val());
    const divisors1 = [];
    for (let i=1; i<=num1; i++) {
        if (num1 % i == 0)
        divisors1.push(i);          // num1의 약수
    }
    const divisors2 = [];
    for (let i=1; i<=num2; i++) {
        if (num2 % i == 0)
            divisors2.push(i);      // num2의 약수
    }
    const commonDivisors = divisors1.filter(val => divisors2.includes(val));
    $('#result3').html(`Set(${commonDivisors.join(', ')})`);
}
$(document).ready(function(){
    $('.box1,.box2,.box3').hide();
    $('.shows1').click(function(e){
        $('.box1').show();
    });
    $('.hides1').click(function(e){
        $('.box1').hide();
    });
    $('.shows2').click(function(e){
        $('.box2').show();
    });
    $('.hides2').click(function(e){
        $('.box2').hide();
    });
    $('.shows3').click(function(e){
        $('.box3').show();
    });
    $('.hides3').click(function(e){
        $('.box3').hide();
    }); 
    
})