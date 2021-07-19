/**
 * ECMA Script
 */
'use strict' //de kiem tra nghiem ngat
console.clear();
let a = "Hello word";
console.log(a);

// convert number to string
let b = 123;  // b la so thi gia tri tren terminal mau vang
console.log(b);

let c = '' + 123; // cong them chuoi rong thi bien thanh chuoi c la chuoi thi gia tri tren terminal mau trang
console.log(c);

let d = b.toString(); // chuyen so thanh chuoi
console.log(d);
//convert string to number
let e = '1';
let f = "2.5";
// let g = e + f ;   //ghep bien e va f thanh 12.5 vay lam sao cong e va f??
let g = parseInt(e) + parseFloat(f); // chuyen chuoi thanh so thi phai parse chuoi theo kieu du lieu e+f=3.5
console.log(g); 

let h = 'I\'am a Student.\nMy university HCMUS'; // chu y dau \ de trinh duyet biet la chua het chuoi va \n la xuong dong
console.log(h);

let i = "She is Marry.\
she is a student"; //cach xuong nhieu dong trong 1 chuoi dai nhieu dong bang dau \ nhung trong terminal van la 1 dong
console.log(i);

//string template
let j = 1000;
let k = "Perter";
let l = `${k} has ${j}$`; //quet chuoi va nhan phim duoi Esc luu y bien nam trong dau ngoac nhon {}
console.log(l);

let m = "     She is Marry. she is a student    ";
console.log(m);
let n = m.trim(); //xoa cac khoang trang truoc va sau chuoi
console.log(n);
console.log(n.toLocaleUpperCase()); //in het chu Hoa (la phuong thuc nen toLocalUpperCase co dau ngoac)
console.log(n.toLocaleLowerCase()); // viet thuong het

console.log(n[2]); //lay ky tu thu 2 trong chuoi
console.log("lenght",n.length); //cho biet chieu dai chuoi (la thuoc tinh nen length khg co dau ngoac)

console.log(m.concat (" ->",n)); // cong chuoi lenh concat 
console.log(m + " ->" +n); //hay dung de cong chuoi

console.log(n.indexOf("Marry")); // tra ra vi tri dau tien cua chuoi Marry neu chuoi khong co thi tra ra -1
console.log(n.lastIndexOf('she')); //tra ra vi tri cua chu she cuoi cung trong chuoi

console.log(n.substring(4, 12)); //lay chuoi tu vi tri 4 den vi tri 12
console.log(n.substr(4, 10)); //lay chuoi tu vi tri 4 va dem 10 ky tu sau do.

console.log(n.replace('Marry','Rose')); //thay chuoi Marry thanh Rose

let o = n.split(' '); //tach chuoi n theo khoan trang
console.log(o);

console.log(n.slice(4, 6)); //lay ky tu tuw vi tri 4 den 6 giong substring

let t = n.split(' ');
console.log(t);
t.splice(2, 2, 'Rose'); // thay tu vi tri thu 2  xoa 2 chu(marry va she) thanh Rose.
console.log(t);

let u = t.join(' '); //noi cac chuoi duoc tach boi khoang trang
console.log(u);

let v = u.split('');
console.log(v);
v.reverse(); // dao chuoi reverse
console.log(v);
u = v.join(''); // noi chuoi da dao
console.log(u);





