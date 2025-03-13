class GerenciadorUsuarios {
    constructor() {
        this.registros = [];
    }
    adicionar(usuario) {
        this.registros.push(usuario);
    }
    listar() {
        return this.registros;
    }
}
const bdUsuarios = new GerenciadorUsuarios();
bdUsuarios.adicionar({ nome: "Lucas", email: "Lucas@gmail.com" });
bdUsuarios.adicionar({ nome: "Corradini", email: "Corradini@gmail.com" });
console.log(bdUsuarios.listar());
