//31.2 Date Set Methods, đinh dạng và xuất thời gian
//4. set thời gian theo ý muốn
//Cách 1: new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
let  myDate1 = new Date(2024,1,14) // Tháng 1 là 0, tháng 2 là 1...
console.log(myDate1);
console.log(myDate1.toLocaleDateString()); // output 2/14/2024

//cách 2: new Date(dateString)
let myDate2 = new Date("2024-02-14T12:30:45");
console.log(myDate2);
console.log(myDate2.toLocaleDateString());

//cách 3: sử dụng setFullYear, setMonth,setDate....
let myDate3 = new Date();
console.log(myDate3);

myDate3.setFullYear(2027);
myDate3.setMonth(5);
myDate3.setDate(23);
console.log(myDate3);

//5. Xuất ngày tháng năm
//Xuất dùng phương thức toLocaleDateString
console.log(myDate3.toLocaleDateString());

//Xuất ngày tháng năm theo định dạng mong muốn
console.log(`
Ngày ${myDate3.getDate()} / Tháng ${myDate3.getMonth()+1} / Năm ${myDate3.getFullYear()}
    `);