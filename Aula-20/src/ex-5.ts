type ResultadoServidor = string | boolean;

function analisarResposta(resposta: ResultadoServidor): void {
    console.log(
        typeof resposta === "string"
            ? `Servidor respondeu: ${resposta}`
            : `Status da operação: ${resposta}`
    );
}

analisarResposta("Sucesso!");
analisarResposta(false);