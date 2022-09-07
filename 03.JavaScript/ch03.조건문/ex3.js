// 3번문제
const randomNum = Math.ceil(Math.random()*50 + 50)
switch (parseInt(randomNum/10)) {
    case 9:
    case 10:
        console.log(randomNum, 'A학점')
        break;
    case 8:
        console.log(randomNum, 'B학점')
        break;
    case 7:
        console.log(randomNum, 'C학점')
        break;
    case 6:
        console.log(randomNum, 'D학점')
        break;
    default:
        console.log(randomNum, 'F학점')                
}