// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย  
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1

// V.0 แสดงตัวที่มากที่สุด
// V.1 Handle เลขที่ไม่เหมือนกัน => เรียงลำดับ
// V.2 Handle เลขที่เหมือนกัน


let x = Number(prompt('Enter number 1'));
let y = +prompt('Enter number 2');
let z = +prompt('Enter number 3');

// case1 : x มากสุด
// case2 : y มากสุด
// case3 : z มากสุด
// DRY Principle : Don't Repeat yourself


// V.0
// let max;

// if(x > y && x > z) {
//     // console.log(`MAX = ${x}`)
//     max = x;
// } else if(y > x && y > z){
//     // console.log(`MAX = ${y}`)
//     max = y;
// }else if(z > y && z > x){
//     // console.log(`MAX = ${z}`)
//     max = z;
// }
//     console.log(`MAX = ${max}`)


// V.1 Handle เลขที่ไม่เหมือนกัน => เรียงลำดับ
// let max;
// let mid;
// let min;

// if(x > y && x > z) {
//     // 1A : y มากกว่า z
//     max = x;
//     if(y > z) {
//         mid = y;
//         min = z;
//     }else {
//         mid = z;
//         min = y; 
//     }

    
// } else if(y > x && y > z){
//     max = y;
//     if(x > y){
//         mid = x;
//         min = z;
//     }else{
//         mid = z;
//         min = x;
//     } 
// }else if(z > y && z > x){
//     max = z;
//     if(y > x){
//         mid = y;
//         min = x;
//     }else {
//         mid = x;
//         min = y;
//     }
// }
//     console.log(`${max} : ${mid} : ${min}`)

// V.2 เลขซ้ำ
    let max;
    let mid;
    let min;
    
    if(x >= y && x >= z) {
        // 1A : y มากกว่า z
        max = x;
        if(y >= z) {
            mid = y;
            min = z;
        }else {
            mid = z;
            min = y; 
        } 
    } else if(y >= x && y >= z){
        max = y;
        if(x >= y){
            mid = x;
            min = z;
        }else{
            mid = z;
            min = x;
        } 
    }else if(z >= y && z >= x){
        max = z;
        if(y >= x){
            mid = y;
            min = x;
        }else {
            mid = x;
            min = y;
        }
    }
        console.log(`${max} : ${mid} : ${min}`)
    
        
