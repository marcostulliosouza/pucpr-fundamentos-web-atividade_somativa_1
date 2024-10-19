function validarFormulario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const idade = document.getElementById('idade').value;

  if (nome === '' || email === '' || idade === '') {
    alert('Todos os campos são obrigatórios!');
    return false;
  }
  return true;
}

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const nome = urlParams.get('nome');
  const email = urlParams.get('email');
  const idade = urlParams.get('idade');

  if (nome && email && idade) {
    document.getElementById('resultado').textContent = `Nome: ${nome}, Email: ${email}, Idade: ${idade}`;
  }
}