let a = Number(prompt("Nhập vào số a: "));
let b = Number(prompt("Nhập vào số b: "));
let c = Number(prompt("Nhập vào số c: "));

let delta = (Math.pow(b,2)) - (4*a*c);
if (delta < 0){
    console.log("Phương trình vô nghiệm");
}else if (delta === 0){
    console.log(`Phương trình có 1 nghiệm x1 = x2 = ${-b/(2*a)}`);
}else {
    let x1,x2 ;
    x1 = (-b + Math.sqrt(delta))/(2*a);
    x2 = (-b - Math.sqrt(delta))/(2*a);
    console.log(`Phương trình có 2 nghiệm :\n x1 = ${x1} , x2 = ${x2}`);
}