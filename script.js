const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC <= 18.5) {
            classificacao = 'abaixo do peso médio'
        } else if (valorIMC <= 25){

            classificacao = 'Você está na media!!'
        } else if(valorIMC < 30){

            classificacao = 'Você está levemente acima do peso...'
        } else if(valorIMC < 35){

            classificacao = 'Com obesidade de grau I...'
        } else if(valorIMC < 40){

            classificacao = 'Com grau de obesidade 2...'
        } else {
            classificacao= 'com grau de obesidade III, por favor, procure um medico'
        }

        resultado.textContent = `${nome}, seu IMC é de ${valorIMC} e voce está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos.';
    }
}

calcular.addEventListener('click', imc)