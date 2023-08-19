function executar(fn, num1, num2) {
    if (typeof fn === 'function') {
        return fn(num1, num2);
    }
}

function somar(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Não se divide por ZERO.";
    }
}

let continuar = true;

while (continuar) {
    const operacao = prompt("Escolha a operação (+, -, *, /) ou digite 'sair' para encerrar:");

    if (operacao === 'sair') {
        continuar = false;
        console.log("Calculadora encerrada.");
        continue;
    }

    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));

    let resultado;

    switch (operacao) {
        case '+':
            resultado = executar(somar, num1, num2);
            break;
        case '-':
            resultado = executar(sub, num1, num2);
            break;
        case '*':
            resultado = executar(mult, num1, num2);
            break;
        case '/':
            resultado = executar(div, num1, num2);
            break;
        default:
            console.log("Operação inválida.");
            continue;
    }

    console.log("Resultado:", resultado);
}
