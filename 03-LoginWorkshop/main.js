let user = prompt('What user')

if(user == '' || user == null){
    user = 'guest'
    alert(`Welcome ${user}`)
}
else if(user == 'codecamp'){
    let passWord = prompt('What password');
    if(passWord == '123456'){
        let user = 'codecamp'
        alert(`Welcome ${user} `)
        
    }
    else{
        alert('wrong password')  
    } 
}
else {

    alert(`Welcome ${user}`)
}