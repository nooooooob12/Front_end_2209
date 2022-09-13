// 물건(product) 클래스를 정의
// 속성 : 이름(name), 가격(price), toString 메소드
// 5가지 상품을 만들 것(instence화)
// 장바구니 객체 Cart 클래스 생성 - 속성 : 상품, 갯수(수량), 메소드 : add, sum
// Cart의 총 가격을 구하시오.

/** 
class Product {
    constructor(name,price){
    this.name = name;
    this.price=price;
    }
    toString(){
        return `${this.name}의 가격은 ${this.price}원 입니다.`
    }
}
let product = ['바나나','감','귤','딸기','복숭아']

class Cart{
 constructor(products,number) {
    this.products = products;
    this.number = number;
 }
 add() {
    for(let items of product) {
    }
    
 }
 toString() {
    return `${products} 가격의 총 갯수는${number}개입니다.`
 }   
}
*/

class Product {
    constructor(name,price) {
        this.name=name;
        this.price=price;
    }
    toString() {
        return `제품명: ${this.name}, 가격 : ${this.price}`;
    }
}
const mouse = new Product('마우스',30000);
const keyboard = new Product('키보드',25000);
const usb = new Product('USB(32GB)',12000);
const monitor = new Product('모니터',200000);
const headset = new Product('헤드셋',25000);

class Cart {
    constructor() {
        this.cart = [];
    }
    add(product,quantity) {
        if (quantity <= 0) 
            return ;
        this.cart.push({product:product,quantity:quantity});
    }
    sum() {
        let totalPrice = 0;
        for(let cart of this.cart) {
            totalPrice += cart.quantity * cart.product.price;
        }
        return totalPrice;
    }
    toString() {
        let result = '';
        for (let cart of this.cart) {
            result += cart.product.toString() + `, 수량:${cart.quantity}\n`;
        }
        result += `합계:${this.sum()}`;
        return result;
    }
}
const cart = new Cart();
cart.add(mouse,4);
cart.add(usb,10);
cart.add(monitor,2);
console.log(cart.toString());