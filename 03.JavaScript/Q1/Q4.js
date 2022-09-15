/* 다음 배열에서 제조사(manufacturer)와 모델명(model)을 분리해서
별도의 배열을 각각 만드세요.
const cars = [‘buick skylark 320’, ‘plymouth satellite’, ‘amc rebel sst’, ‘ford torino’]; */

//  split/ slice를 통해서 빼와서 join 주면 됌.
const cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino'];
let model= [];
let menu = [];
for(let items of cars) {
     let res1 = items.split(' ').slice(0,1).join();
     let res2 = items.split(' ').slice(1).join().replace(',','');
     menu.push(res1);
     model.push(res2);
}
console.log(menu,model);
console.log(`제조사는 ${menu} \n모델명은 ${model} 입니다.`);

