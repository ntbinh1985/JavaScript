//Giải phương trình bậc 2, sử dụng function
//1. Function Declaration
function ptbac2_1(a,b,c){
    let delta = (b**2) - (4*a*c);
    if(delta < 0){
        console.log("Phương trình vô nghiệm");
    }else if(delta === 0 ){
        let x  = -b/(2*a);
        console.log(`Phương trình có nghiệp kép x1 = x2 = ${x}`);
    }else {
        let x1 = (-b + Math.sqrt(delta))/(2*a);
        let x2 = (-b - Math.sqrt(delta))/(2*a);
        console.log(`Phương trình có 2 nghiệm phân biệt x1 = ${x1} ; x2 = ${x2}`);
    }
}
ptbac2_1(1,2,-3);
ptbac2_1(1,2,1);
ptbac2_1(1,1,1);

// 2. Function Expression
let ptbac2_2 = function(a,b,c){
    let delta = (b**2) - (4*a*c);
    if(delta < 0){
        console.log("Phương trình vô nghiệm");
    }else if(delta === 0 ){
        let x  = -b/(2*a);
        console.log(`Phương trình có nghiệp kép x1 = x2 = ${x}`);
    }else {
        let x1 = (-b + Math.sqrt(delta))/(2*a);
        let x2 = (-b - Math.sqrt(delta))/(2*a);
        console.log(`Phương trình có 2 nghiệm phân biệt x1 = ${x1} ; x2 = ${x2}`);
    }
}
ptbac2_2(1,2,-3);
ptbac2_2(1,2,1);
ptbac2_2(1,1,1);

// 3. Arrow Function
let ptbac2_3 = (a,b,c) =>{
      let delta = (b**2) - (4*a*c);
    if(delta < 0){
        console.log("Phương trình vô nghiệm");
    }else if(delta === 0 ){
        let x  = -b/(2*a);
        console.log(`Phương trình có nghiệp kép x1 = x2 = ${x}`);
    }else {
        let x1 = (-b + Math.sqrt(delta))/(2*a);
        let x2 = (-b - Math.sqrt(delta))/(2*a);
        console.log(`Phương trình có 2 nghiệm phân biệt x1 = ${x1} ; x2 = ${x2}`);
    }
}
ptbac2_3(1,2,-3);
ptbac2_3(1,2,1);
ptbac2_3(1,1,1);