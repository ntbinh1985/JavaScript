// Vi dụ 1: tính giai thừa
function giaiThua(n){
    if (n===0 || n === 1){
        return 1;
    }else{
        return n * giaiThua(n-1);
    }
}

let ketQua = giaiThua(8);
console.log (ketQua);

// Ví dú 2: tinh dãy Fibonacci
function f(n){
    if (n<=2){
        return 1;
    }else{
        return f(n-1) + f(n-2);
    }
}
let ketQuaFibonacci =f(18);
console.log(ketQuaFibonacci);