function analisarResposta(resposta) {
    console.log(typeof resposta === "string"
        ? `Servidor respondeu: ${resposta}`
        : `Status da operação: ${resposta}`);
}
analisarResposta("Sucesso!");
analisarResposta(false);
