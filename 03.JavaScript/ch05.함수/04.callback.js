function callFiveTimes(callback) {
    for(let i=1; i<=5; i++) {
        callback();
    }
}

const cb = function() {
    console.log('함수가 호출되었습니다.');
}
/* callFiveTimes(cb); */
/* callFiveTimes(function() {
    console.log('함수가 호출되었습니다.');
}); */

callFiveTimes(() => {
    console.log('함수가 호출되었습니다.');
});