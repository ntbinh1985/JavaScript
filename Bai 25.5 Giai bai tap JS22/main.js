function tinhGiaiThuaFor(n){
    let gt =1;
    for (let i =1;i<=n; i++){
        gt*=i;
    }
    return gt;
}

function tinhGiaiThuaWhile(n){
    let gtwhile =1;
    let i = 1;
    while (i<=n){
        gtwhile *= i;
        i++;
    }
    return gtwhile;
}

let n = Number(prompt("Nhập vào 1 số nguyên không âm "));
while (!Number.isInteger(n) || n < 0){
    n = Number(prompt("Số không hợp lệ, nhập lại "))
}
    console.log(`${n}! sử dụng for = ${tinhGiaiThuaFor(n)}`);
    console.log(`${n}! sử dụng while = ${tinhGiaiThuaWhile(n)}`);