/*
Viết chương trình tách số và chữ từ chuối nhập vào thành 2 chuỗi :
ví dụ nhập vào : abc123 sẽ tách và in ra thành 2 chuỗi abc và 123
*/
/* cánh 1:
let chuoiNhap = prompt("Nhập chuỗi cần tách: ");
let chuoiChu = "";
let chuoiSo = "";

for (let i = 0; i< chuoiNhap.length; i++){
    let kyTu = chuoiNhap[i];
    if ((kyTu >= "a" && kyTu <= "z") || (kyTu >= "A" && kyTu <= "Z")){
        chuoiChu += kyTu;
    }else if (kyTu >= "0" && kyTu <= "9"){
        chuoiSo += kyTu;
    }
}
console.log(`Chuỗi chữ: ${chuoiChu}`);
console.log(`Chuỗi số: ${chuoiSo}`);
*/
// Cách 2: dùng function
function seperate(inputString){
    let chuoiChu = "";
    let chuoiSo ="";

    for (let i = 0; i < inputString.length; i++){
        let char = inputString[i];

        if (isNaN(char)){ //Nếu ký tư char không phải là sô, thêm vào chuoiChu
            chuoiChu += char;
        }else{
            chuoiSo += char;
        }
    }
    return {chuoiChu,chuoiSo};
}

let inputString = prompt("Mời nhập vào chuỗi");
let kq = seperate(inputString);

alert(`
    Chuỗi chữ là : ${kq.chuoiChu}
    Chuối số là : ${kq.chuoiSo}   
    `);
