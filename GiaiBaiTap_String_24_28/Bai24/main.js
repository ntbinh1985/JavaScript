/* Nhập vào 1 chuỗi từ bàn phím,
1. đếm xem có bao nhiêu ký tự thường
2. bao nhiêu in hoa
3. bao nhiêu số
4. bao nhiêu space
*/
let str = prompt("Nhập vào 1 chuỗi: ");
console.log(str);
let soKyTuThuong =0;
let soKyTuInHoa =0;
let soKyTuSo =0;
let soKyTuSpace =0;
for (let i = 0; i< str.length; i++){
    let kyTu = str[i];
    if (kyTu >= "a" && kyTu <="z"){
        soKyTuThuong +=1;
    }else if (kyTu >="A" && kyTu <="Z"){
        soKyTuInHoa += 1;
    }else if (kyTu >="0" && kyTu <="9"){
        soKyTuSo +=1;
    }else if (kyTu ===" "){
        soKyTuSpace +=1;
    }
   }
console.log(`Số ký tự thường trong chuỗi là : ${soKyTuThuong}`);
console.log(`Số ký tự in hoa trong chuỗi là : ${soKyTuInHoa}`);
console.log(`Số ký tự số trong chuỗi là : ${soKyTuSo}`);
console.log(`Số ký tự space trong chuỗi là : ${soKyTuSpace}`);
