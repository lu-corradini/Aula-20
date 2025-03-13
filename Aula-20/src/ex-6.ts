interface Universitario {
    nome: string;
    curso: string;
}

interface Profissional {
    empresa: string;
    cargo: string;
}

type UniversitarioEmpregado = Universitario & Profissional;

const alunoEmpregado: UniversitarioEmpregado = {
    nome: "Lucas",
    curso: "Engenharia da Computação",
    empresa: "Itaú",
    cargo: "Estágiario"
};

console.log(alunoEmpregado);