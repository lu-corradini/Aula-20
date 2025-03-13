function criarMultiplicador() {
    return (num1, num2) => num1 * num2;
}
const multiplicar = criarMultiplicador();
console.log(multiplicar(2, 3));
