    let expressao = '';  // Agora vamos usar uma única variável para armazenar a expressão inteira
    let resultadoCalculado = false;

    const display = document.getElementById('display');

    // Atualiza o display com a expressão ou o número final
    function atualizarDisplay() {
        display.value = expressao || '0';
    }

    // Adiciona números ou parênteses ao display
    function addNumero(numero) {
        if (resultadoCalculado) {
            limpar();
            resultadoCalculado = false;
        }

        // Previne adicionar múltiplos pontos decimais
        if (numero === '.' && expressao.includes('.')) return;

        expressao += numero;
        atualizarDisplay();
    }

    // Seleciona o operador (+, -, *, /)
    function operacaoSelecionada(op) {
        if (expressao === '') return;

        // Impede adicionar operadores repetidos consecutivos
        if (['+', '-', '*', '/'].includes(expressao[expressao.length - 1])) return;

        expressao += ' ' + op + ' ';
        atualizarDisplay();
    }

    // Realiza o cálculo usando eval(), que resolve a expressão completa
    function calcular() {
        try {
            if (expressao === '') return;

            // Verifica se a expressão tem parênteses e realiza a avaliação corretamente
            let resultado = eval(expressao);  // Eval vai avaliar a expressão com parênteses corretamente

            // Atualiza o display com o resultado
            expressao = resultado.toString();
            resultadoCalculado = true;
            atualizarDisplay();
        } catch (e) {
            alert('Erro na expressão!');
            limpar();
        }
    }

    // Limpa a expressão e o display
    function limpar() {
        expressao = '';
        resultadoCalculado = false;
        atualizarDisplay();
    }
