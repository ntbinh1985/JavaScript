/*Viết chương trình chuyển tin nhắn sang mật mã theo bảng :
const a="abcdefghijklmnopqrstuvwxyz"
const b="zxcvbnmasdfghjklqwertyuiop"
*/
/*
const a="abcdefghijklmnopqrstuvwxyz"
const b="zxcvbnmasdfghjklqwertyuiop"
let tinNhan = prompt("Nhập tin nhắn cần mã hóa: ");
let tinNhanMaHoa = "";
for (let i = 0; i < tinNhan.length;i++){
    let kyTu_tn = tinNhan[i];
    let vitri_a = a.indexOf(kyTu_tn);
    let vitri_b = b[vitri_a];
    tinNhanMaHoa += vitri_b;
}
alert("Chuỗi mã hóa: " + tinNhanMaHoa);
*/

function encryptMessage(message){
    const a="abcdefghijklmnopqrstuvwxyz";
    const b="zxcvbnmasdfghjklqwertyuiop";
    let result ="";

    for (let i=0; i< message.length; i++){
        let char = message[i].toLowerCase(); // Chuyển đổi thành chữ thường để phù hợp bảng mã
        //Kiểm tra ký tự nhập vào có trong bảng mã hay không
        if (a.includes(char)){ 
            // thực hiện chuyển đổi
            //Kiểm tra vị trí index ký tự nhập vào trong a
            let index = a.indexOf(char);
            // lấy giá trị index, dóng sang chuỗi b để lấy ký tự tương ứng trên b
            result += b[index];
        }
        // Nếu không có trong bảng mã thì giữ nguyên ký tự và cộng dồn vào result
        else{
            result += char;
        }
    }
    return result;
}

let messageInput = prompt("Nhập vào tin nhắn");
let kq = encryptMessage(messageInput)
alert(`Chuỗi sau khi mã hóa: ${kq} `);