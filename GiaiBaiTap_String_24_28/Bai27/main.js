/* 
const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
Đếm từ tôi trong string a trên ?
*/
/* cách 1 dung split:
const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
const tuCanTim ="tôi";
let soLanXuatHien = 0;
let tach_tu = a.split(" ");
for (let i = 0; i<tach_tu.length;i++){
    if (tuCanTim === tach_tu[i]){
        soLanXuatHien ++;
    }
}
console.log(`Số lần xuất hiện của từ "${tuCanTim}" là: ${soLanXuatHien}`);
*/
// cách 2 dung slice

const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
const tuCanTim ="tôi";
let soLanXuatHien = 0;
for (let i =0 ; i< a.length;i++){
    if (a.slice(i, i+tuCanTim.length) === tuCanTim){
        soLanXuatHien++
    }
}
console.log(`Số lần xuất hiện của từ "${tuCanTim}" là: ${soLanXuatHien}`);
