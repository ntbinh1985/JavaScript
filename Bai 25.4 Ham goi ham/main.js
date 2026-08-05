// Hàm cộng 2 số
function cong(a,b){
    return a+b;
}
//Hàm nhân 2 số
function nhan(x,y){
    return x*y;
}
// Hàm tính cộng num1, num2 sau đó nhân với num3
function CongNhan(num1,num2,num3){
    // gọi hàm cong
    let sum = cong(num1,num2);
    // gọi hàm nhan
    let product = nhan(sum,num3);
    return product;
}
let result = CongNhan(2,3,5);
console.log(result);