/*Bài tập JS 15:
Viết chương trình nhập vào số nguyên n, in ra kết quả n!
- Dùng vòng lặp for
- Dùng vòng lặp while
*/
/*
console.log("============= Bài tập 15, tính giai thừa n! ===========");
let n = Number(prompt("Nhập vào số nguyên dương n = "));
while (!Number.isInteger(n) || n < 0){
    n = Number(prompt("Nhập sai giá trị, vui lòng nhập lại"))
}
   if (n===0){
        console.log(`Giai thừa của ${n} = 1`);
    }else {
        let giaithua =1;
        let i =1;
        // for (let i =1; i <=n; i++){
        // giaithua *=i;
        while (i<=n){
            giaithua *=i;
            i++;
        }
        console.log(`${n}! = ${giaithua}`);
    }


*/
/*
Viết chương trình nhập nhập số a từ bàn phím,
Nếu a chẵn thì tính tổng các số chẵn từ 0 đến a
V Nếu a lẻ thì in ra dòng chữ “tôi o tính tổng số lẻ, bye bye " và
thoát chương trình
*/
// let a = Number(prompt("Nhập vào số nguyên dương a"));
// while (!Number.isInteger(a)){
//     a = Number(prompt("Nhập lại giá trị a, a phải là số nguyên"));
// }
//     if(a%2===0) {
//         let tong =0;
//        for(let i =0;i<=a; i+=2){
//         tong +=i;
//        }        
//         alert(`Tổng các số chẵn từ 0 đến ${a} là: ${tong}`);
//     }else{
//         alert(`${a} là số lẻ, tôi không tính tổng số lẻ, bye bye`);
//     }

/*
Viết chương trình tính tổng các số lẻ từ 1 đến n, n nhập từ bàn phím
- Nhập n = 7, Bỏ qua không cộng tổng với số 3 => in ra kết quả (gợi ý đáp án : 1+5+7 =13)
- Thử break khi vòng lặp chạy đến giá trị n=3
*/
// console.log("======== tính tổng các số lẻ từ 1 đến n ======")
// let n = Number(prompt("Nhập vào so nguyên dương n: "));
// while (!Number.isInteger(n)){
//     n = Number(prompt("Nhập lại n, n là số nguyên: "));
// }
//     let tong =0;
//     for (let i =1; i<=n; i+=2){
//         if( i=== 3){
//             continue;
//         }
//         tong += i;
//     }
//     alert(`Tổng các số lẻ từ 0 đến ${n}, loại trừ 3 là ${tong}`);

/* Bài tập JS 19: Chương trình tính S=1!+2!+3!....10!"
// console.log("Chương trình tính S=1!+2!+3!....10!");
// let tong =0;
// let giaithua = 1;
//     for(let i=1; i<=10;i++){
//        giaithua *=i;
//        tong += giaithua;
//     }
// console.log(tong);
*/

/*
bài tập js 20 - Số Hoàn Hảo trong Phạm Vi 1-1000
*/
// let n = 100000;
// console.log(`Số hoàn hảo từ 1 đến ${n}`);
// for (let i =1; i<=n;i++){
//     let sum =0;
//     for(let j =1 ; j <i; j++){
//     if(i % j === 0){
//         sum +=j;
//     }
// }
//     // Kiểm tra số hoàn hảo
//     if (sum === i){
//     console.log(`${i} là số hoàn hảo`)
//     }
// }

/*Bai tập JS 21:
Viết chương trình nhập nhập số nguyên a> 0 từ bàn phím
Cho biết đó có phải số ng tố
( số ng tố là số >1, và chỉ chia hết cho 1 và chính nó)
V Kết thúc chương trình hỏi người dùng: Bạn có muốn tiếp tục sử dụng
phần mềm không? Nếu chọn không thì thoát ctrinh */
while(true){
    let a = Number(prompt("Nhập vào a > 0: "));
    while (!Number.isInteger || a <= 0){
        a = Number(prompt("Nhập lại a, a phải là số nguyên dương"));
    }
    // Kiểm tra số nguyên tố
        let laSoNguyenTo = true;
        for (let i =2; i<a;i++){
            if (a % i === 0){
                laSoNguyenTo = false;
                break;
            }
        }
        if(laSoNguyenTo){
            alert(`${a} là số nguyên tố`);
        }else{
            alert(`${a} không là số nguyên tố`);
        }
        1
    
    let luachon = prompt(`Bạn có muốn tiếp tục sử dụng chương trình: 
        Nhấn phím bất kỳ để tiếp tục
        Nhấn n/N để thoát`);
        if(luachon === 'n' || luachon === 'N' || luacho === null){
           alert('bạn chọn n');
           break;
    }
}
