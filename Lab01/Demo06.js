// dinh nghia ham   - define funtion
'use strict'
console.clear();

function sum(a,b){
    return a + b ;
}
console.log(sum(1, 2)); // tra ra phep cong a va b 
console.log(sum(1, '2')); //tra ra chuoi(chu y)

function swap(a, b){
    let temp = a;
    a = b;
    b = temp;
   // console.log(`=> a = ${a},-> b = ${b}`); //hoan vi bien a va b(trong ham swap)
   return[a, b]; //phai tra ve mang khi truyen tham tri
}
let a = 5;
let b = 4;
console.log(`a = ${a},-> b = ${b}`);
swap(a, b);                               // goi ham swap              
console.log(`a = ${a},-> b = ${b}`);   // nhung a va b khong hoan vi khi ra ngoai ham swap (trong javaScript chi truyen tham tri voi bien co so)
// vay muon truyen tham chieu de thay doi gia tri cua a va b thi lam sao???
function swap_2(a, b){      //cach truyen tham chieu
    return [b, a];
}

let c = 5;
let d = 4;
console.log(c, '-', d);
console.log(swap(c, d)); // truyen tham tri phai nam trong mang

[c, d] = swap_2(c, d);
console.log(c, '-', d); // dao c va d do goi ham swap_2

function power_1(a){return a * a;}
console.log(power_1(2)); // tra ra ket qua la 2
// anonymouse function (ham nac danh)
const power_2 = function (a){return a * a;} // bien co gia tri la mot ham (hay con tro ham) function(a) goi la ham nac danh
console.log(power_2(3)); // tra ra ket qua la 9
//arrow function
const power_3 = (a) =>{return a * a;}
console.log(power_3(5)); // tra ra ket qua 25.
const power_4 = a => a *a;
console.log(power_4(9)); //viet gon khi chi co 1 tham so a 