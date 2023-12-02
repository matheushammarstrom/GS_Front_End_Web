function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  
  if(name && email) {
      alert('Obrigado por enviar seus dados!');
  } else {
      alert('Por favor, preencha todos os campos.');
  }
}
