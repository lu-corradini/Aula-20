interface Multiplicacao {
    (valor1: number, valor2: number): number;
}

function criarMultiplicador(): Multiplicacao {
    return (num1: number, num2: number) => num1 * num2;
}

const multiplicar = criarMultiplicador();
console.log(multiplicar(2, 3));