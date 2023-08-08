- จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรดในรูปแบบ Ternary Operator
- ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
- ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
- ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
- ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
- ถ้าคะแนน น้อยกว่า 50 ได้ F

let number = prompt('Put your point')
let grade ;

if(number === null || number.trim()=== '' || isNaN(number)=== true){
    alert('invalid number')
}
else if(number >= 80 ) {
    alert('A')
}
else if(number >= 70 && number < 80 ) {
    alert('B')
}
else if(number >= 60 && number < 70 ) {
    alert('C')
}
else if(number >= 50 && number < 60 ) {
    alert('D')
}
else if(number >= 0 && number < 50) {
    alert('F')
}
else if(number < 0) {
    alert('Invalid number')
}