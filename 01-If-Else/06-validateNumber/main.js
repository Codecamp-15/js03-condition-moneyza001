let number1 = prompt('put first Number');
let number2 = prompt('put second Number');
let result = +number1 + +number2;

if(number1 === null || number1.trim()=== '' || isNaN(number1)=== true){
    alert('invalid number')
}
else if(number2 === null || number2.trim()=== '' || isNaN(number2)=== true){
    alert('invalid number')
}
else {
    alert(result)
}