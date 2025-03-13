interface BancoDeDados<T> {
    adicionar(item: T): void;
    listar(): T[];
}

class GerenciadorUsuarios implements BancoDeDados<{ nome: string; email: string }> {
    private registros: { nome: string; email: string }[] = [];

    adicionar(usuario: { nome: string; email: string }): void {
        this.registros.push(usuario);
    }

    listar(): { nome: string; email: string }[] {
        return this.registros;
    }
}

const bdUsuarios = new GerenciadorUsuarios();

bdUsuarios.adicionar({ nome: "Lucas", email: "Lucas@gmail.com" });
bdUsuarios.adicionar({ nome: "Corradini", email: "Corradini@gmail.com" });

console.log(bdUsuarios.listar());