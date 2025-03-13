interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // Propriedade opcional
}

const Carro: Carro = {
    marca: "Ford",
    modelo: "Celta",
    ano: 1999,
    motor: "1.9 Turbo",
};

console.log(`Marca: ${Carro.marca}, Modelo: ${Carro.modelo}, Ano: ${Carro.ano}, Motor: ${Carro.motor ?? "Não especificado"}`);