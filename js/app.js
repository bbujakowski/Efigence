$(document).foundation();

var userPass = document.getElementById('login-user-pass');
// zapomniałeś tutaj dodac var, wiec zamiast klasycznej zmiennej zostanie utworzona
// globalna zmienna (na obiekcie window), jeśli chcesz tworzyc kilka zmiennych jednym
// wyrazem var, to linijka 3-cia powinna się kończyc przecinkiem a nie średnikiem
    btnSubmit = document.getElementById('login-user-pass-btn');

  // ucinamy zbędne rzeczy, w funkcji dodajesz parametr "e" ale
  // z niego nie korzystasz, najlepiej uprzątac takie rzeczy
  // + dziwne wcięcie =)
  btnSubmit.addEventListener('click', function(e){
    console.log(userPass.value);
  })
