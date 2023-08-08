let userName = prompt('What Username')
let password = prompt('What Password')

if(userName == ''  || userName == null) {
    alert('Username is requires')
}
else if( password == ''|| password == null) {
    alert('password is required')
}
else if(userName == 'admin' && password == '1234') {
    alert(`Hello ${userName} `)
}
else if(userName == 'john' && password == 'qwerty') {
        alert(`Hello ${userName} `)
        
    }
else {
    alert('invalid username or password')
}