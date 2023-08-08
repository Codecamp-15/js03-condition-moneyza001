let number = prompt('input number');

if(number === null || number.trim()=== '' || isNaN(number)=== true){
    alert('invalid number')
}
else if(+number > 0) {
    alert('Positive number')
}
else if(+number == 0) {
    alert('Zero')
}
else {
    alert('Negative number')
}

