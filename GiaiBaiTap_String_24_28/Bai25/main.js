/*
a.
Viết chương trình kiểm tra tính hợp lệ của mật khẩu:
1. mật khẩu hợp lệ khi có ít nhất 6 ký tự
2. chứa ít nhất 1 chữ cái viết hoa
3. chứa ít nhất 1 chữ cái viết thường
4. chứa ít nhất 1 chữ số
b.
Cho người dùng nhập vào mật khẩu để login / so sánh, nếu đúng mở
của, sai quá 5 lần khóa đăng nhập, thoát chương trình
// Ví dụ mật khẩu hợp lệ : Abc123
*/
let matKhau = prompt("Mời bạn đặt mật khẩu:");
let err =` Mật khẩu không hợp lệ
1. mật khẩu hợp lệ khi có ít nhất 6 ký tự
2. chứa ít nhất 1 chữ cái viết hoa
3. chứa ít nhất 1 chữ cái viết thường
4. chứa ít nhất 1 chữ số`;
let hasUpperCase = false;
let hasLowerCase = false;
let hasDigit = false;
        for (let i = 0; i <matKhau.length; i++){
            let kyTu = matKhau[i];
            if(kyTu >= "a" && kyTu <= "z"){
                hasLowerCase = true;
            }
            if (kyTu >= "A" && kyTu <= "Z"){
                hasUpperCase = true;
            } 
            if (kyTu >= "0" && kyTu <="9"){
                hasDigit = true;
            }
        }
        if (matKhau.length >=6 &&hasUpperCase === true && hasLowerCase === true && hasDigit === true){
            alert("Mật khẩu hợp lệ");
        }else{
            alert(err);
        }

let soLanLogin =1;
let loginStatus = false;
let lockedAccout = false;
while (soLanLogin <= 5){
    let nhapMatKhau = prompt("Mời nhập mật khẩu của bạn: ");
    if (nhapMatKhau === matKhau){
        alert ("Đăng nhập thành công");
        break;
    }else{
        alert(`Bạn nhập sai mật khẩu. Lần ${soLanLogin} / 5}`);
        soLanLogin +=1;
        if (soLanLogin === 5){
            lockedAccout = true;
        }
    }
}   
if (lockedAccout === true){
    alert("Bạn nhập sai mật khẩu 5 lần, tài khoản đã bị khóa");
}
