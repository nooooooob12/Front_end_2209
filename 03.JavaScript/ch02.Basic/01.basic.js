var a = 10;
 a += 20;
 console.log(a);

 const b = 10;
 /* b += 20; */
 console.log(b);

 // JS - > 웬만하면 const로 변수 선언할 것
 // 값의 재할당이 필요하면 var로 선언할 것 (2015년 이전) (현재) let으로 선언

// let d = 10;
 //console.log(Math.PI, Math.sqrt(d));

 //1.Number(숫자 자료형)
 console.log(typeof(3.1),typeof(3));

 //2. String(문자열)
 console.log(typeof('안녕하세요'),typeof("abc"));
 
 // template literal
 let tl = `a=${a},b=${b}` // back quote
 tl = tl + '문자열 결합';
 console.log(tl);
 
 let st = '문자열과 숫자의 결합 ' + 12345;
 console.log(st);
 console.log(st,st[0],st[1],st[2],st[3],st[st.length-1]);
 
 let today = new Date(); // 객체 생성시 기본 문법
 console.log(today, today.getFullYear(), today.getMonth()); 
 console.log(typeof today);

 //3. boolean
 console.log(4 > 3, 4 < 3);
 console.log(4 > 3 && 10 > 8, '가방' < '나무' || false);
 console.log(today.getHours() >= 9 && today.getHours() < 18);

 //4. undefined
 let pi;
 console.log(typeof pi);
 pi = Math.PI;
 console.log(typeof pi);