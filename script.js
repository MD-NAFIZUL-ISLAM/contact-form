


var login_button = document.getElementById('login_button')
login_button.addEventListener("click", function (e) {
    e.preventDefault()
    var confirm = document.getElementById('confarmation');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var massage = document.getElementById('massage').value;
    var body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> phone: ' + phone + '<br/> massage: ' + massage; 

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mdnafizulislam2023@gmail.com",
        Password: "hjtexygbptznuaeg",
        To: 'mdnafizulislam2023@gmail.com',
        From: email,
        Subject: "customer",
        Body: body
    }).then(
        message => alert(message)
    );



})



// if (name.value == ''){
    //     name.style.border = '2px solid red'
    //     confirm.innerHTML = 'Something missing ...'
    //     confirm.style.color = 'red'
    //     confirm.style.marginLeft = '10px'
    // }
    // else{
    //    name.style.border = '2px solid black'
    //    confirm.innerHTML = 'sent'
    //     confirm.style.color = 'blue'
    // }

    // if (email.value == ''){
    //     email.style.border = '2px solid red'
    //     confirm.innerHTML = 'Something missing ...'
    //     confirm.style.color = 'red'
    //     confirm.style.marginLeft = '10px'
    // }
    // else{
    //     email.style.border = '2px solid black'
    //     confirm.innerHTML = 'sent'
    //     confirm.style.color = 'blue'
    // }

    // if (phone.value == ''){
    //     phone.style.border = '2px solid red'
    //     confirm.innerHTML = 'Something missing ...'
    //     confirm.style.color = 'red'
    //     confirm.style.marginLeft = '10px'
    // }
    // else{
    //     phone.style.border = '2px solid black'
    //     confirm.innerHTML = 'sent'
    //     confirm.style.color = 'blue'
    // }

    // if (massage.value == ''){
    //     massage.style.border = '2px solid red'
    //     confirm.innerHTML = 'Something missing ...'
    //     confirm.style.color = 'red'
    //     confirm.style.marginLeft = '10px'
    // }
    // else{
    //     massage.style.border = '2px solid black'
    //     confirm.innerHTML = 'sent'
    //     confirm.style.color = 'blue'
    // }