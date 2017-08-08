$(document).foundation();

var userPass = document.getElementById('login-user-pass');
    btnSubmit = document.getElementById('login-user-pass-btn');
    
  btnSubmit.addEventListener('click', function(e){
    console.log(userPass.value);
  })
