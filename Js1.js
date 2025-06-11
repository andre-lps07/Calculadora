    let expressao = ''; 
    let resultadoCalculado = false;

    const display = document.getElementById('display');

    function atualizarDisplay() {
        display.value = expressao || '0';
    }

    function addNumero(numero) {
        if (resultadoCalculado) {
            limpar();
            resultadoCalculado = false;
        }
        if (numero === '.' && expressao.includes('.')) return;

        expressao += numero;
        atualizarDisplay();
    }

    function operacaoSelecionada(op) {
        if (expressao === '') return;
        if (['+', '-', '*', '/'].includes(expressao[expressao.length - 1])) return;
        expressao += ' ' + op + ' ';
        atualizarDisplay();
    }

    function calcular() {
        try {
            if (expressao === '') return;
            let resultado = eval(expressao); 
            expressao = resultado.toString();
            resultadoCalculado = true;
            atualizarDisplay();
        } catch (e) {
            alert('Erro na expressão!');
            limpar();
        }
    }

    function limpar() {
        expressao = '';
        resultadoCalculado = false;
        atualizarDisplay();
    }
