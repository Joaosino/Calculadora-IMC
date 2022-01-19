const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');
  if (nome == '' || altura == '' || peso == '') {
    resultado.textContent = 'Preencha todos os Campos';
  } else {
    const imc = (peso / (altura * altura)).toFixed(2); //agrupando a conta utilizando os parenteses para que seja possivel utilizar o comando toFixed(2) para deixar 2 casas decimais
    let classe = '';
    if (imc < 18.5) {
      classe = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classe = 'Peso na média';
    } else if (imc < 30) {
      classe = 'Acima do peso';
    } else if (imc > 30) {
      classe = 'Obesidade';
    }

    resultado.textContent = `seu nome é ${nome}, tem ${altura} de altura e pesa ${peso} kilos e seu IMC é ${imc} e está categorizado como ${classe}`;
  }

}
calcular.addEventListener('click', imc);