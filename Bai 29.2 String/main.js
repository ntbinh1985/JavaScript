//Cắt chuỗi trong JS - Slice vs substring
let s4 = "4343534534";

// cắt chuỗi bằng slice(startIndex, endIndex)
let s5 = s4.slice(2,8); // cắt từ vị trí index 2 đến index 8-1
console.log(s5);

// Ví dụ: chỉ cho phép tin nhắn dài tối đa 20 ký tự
// nếu quá thì tự cắt xuất chuỗi sau xủ lý
let s6 = prompt("Mời bạn nhập tin nhắn");
if (s6.length>20){
    console.log(`Bạn đã nhập quá ${s6.length - 20} ký tự`);
    s7 = s6.slice(0,20);
    console.log(`Chuỗi sau xử lý: ${s7}`);
}

//code online
console.log ("CHuỗi 2 sau xử lý là: " + prompt("Mời nhập tin nhắn 2").slice(0,20));

// substring(startIndex, endIndex)
let s8 = prompt("Mời bạn nhập tin nhắn 3");
if (s8.length>20){
    console.log(`Bạn đã nhập quá ${s8.length - 20} ký tự`);
    s9 = s8.substring(0,20);
    console.log(`Chuỗi 3 sau xử lý: ${s9}`);
}