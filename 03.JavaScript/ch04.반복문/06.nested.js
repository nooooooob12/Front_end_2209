// 별그리기 - 직각 삼각형
// 1사분면
for(let i=1; i<=5; i++) {
    let stars = '';
    for(let k=1; k<=i; k++) {
        stars += '*';
    }
    console.log(stars);
}
//4 사분면 - 감소
for(let i=5; i>=1; i--) {
    let stars = '';
    for(let k=1; k<=i; k++) {
        stars += '*';
    }
    console.log(stars);
}
// 2사분면
for(let i=1; i<=5; i++){
    let stars = '';
    for (let k=1; k<=5-i; k++){
        stars += ' ';
    }
    for (let k=1; k<=i; k++){
        stars += '*';
    }
    console.log(stars);
}

// 3사분면
for(let i=5; i>=1; i--) {
    let stars = '';
    for (let k=1; k<=5-i; k++){
        stars += ' ';  
    }
    for (let k=1; k<=i; k++){
        stars += '*';
    }
    console.log(stars);
}