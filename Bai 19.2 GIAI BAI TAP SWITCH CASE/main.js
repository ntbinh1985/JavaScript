/*
Chọn cách tìm kiếm:
1. Tìm theo tên
2. Tìm theo tác giả
3. Tìm theo nhà xuất bản
4. Tìm theo tiêu đề
nhập vào lựa chọn, in lựa chọn ra màn hình
*/
// alert(`Chọn cách tìm kiếm:
// 1. Tìm theo tên
// 2. Tìm theo tác giả
// 3. Tìm theo nhà xuất bản
// 4. Tìm theo tiêu đề
// `)
let luachon = Number(prompt(`Chọn cách tìm kiếm:
1. Tìm theo tên
2. Tìm theo tác giả
3. Tìm theo nhà xuất bản
4. Tìm theo tiêu đề
`))
switch (luachon){
    case 1:
        console.log ("Bạn lựa chọn 1. Tìm theo tên");
        alert("Bạn lựa chọn 1. Tìm theo tên");
        break;
    case 2:
        console.log ("Bạn lựa chọn 2. Tìm theo tác giả");
        alert ("Bạn lựa chọn 2. Tìm theo tác giả");
        break;
    case 3:
        console.log ("Bạn lựa chọn 3. Tìm theo nhà xuất bản");
        alert ("Bạn lựa chọn 3. Tìm theo nhà xuất bản");
        break;
    case 4:
        console.log ("Bạn lựa chọn 4. Tìm theo tiêu đề");
        alert ("Bạn lựa chọn 4. Tìm theo tiêu đề");
        break;
    default:
        console.log ("Lựa chọn không hợp lệ");
        alert ("Lựa chọn không hợp lệ");
}