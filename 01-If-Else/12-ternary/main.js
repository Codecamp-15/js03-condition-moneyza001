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