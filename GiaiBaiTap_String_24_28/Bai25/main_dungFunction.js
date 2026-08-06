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

function isPasswordValid(password){
    if (password.length < 6){
        return false;
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
        for (let i = 0; i <password.length; i++){
            let kyTu = password[i];
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
        return hasUpperCase && hasLowerCase && hasDigit;
}

function setPassword(){
    let password = prompt("Thiết lập mật khẩu: ");

    if (isPasswordValid(password)){
        alert("Đặt mật khẩu thành công.");
        return password;
    }else {
        alert(`Mật khẩu không hợp lệ
            1. mật khẩu hợp lệ khi có ít nhất 6 ký tự
            2. chứa ít nhất 1 chữ cái viết hoa
            3. chứa ít nhất 1 chữ cái viết thường
            4. chứa ít nhất 1 chữ số`);
        setPassword();
    }
}

let passwordOk = setPassword();

let coutLogin = 0;
while(true){
    let passLogin = prompt("Nhập mật khẩu đăng nhập: ");
    if (passLogin === passwordOk){
        alert("Đăng nhập thành công");
    }else{
        coutLogin++;
        if (coutLogin < 5){
            alert("Bạn đã nhập sai mật khẩu "+ coutLogin + "/ 5 lần");
        }else{
            alert("Bạn nhập sai mật khẩu 5 lần, tài khoản đã bị khóa");
            break;
        }
    }
}