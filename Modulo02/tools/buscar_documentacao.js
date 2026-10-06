const buscar_documentacao = {
    type: "function",
    function: {
        name: "buscar_documentacao",
        description: "Busca dos documentos publicados no índice principal da documentação o assunto referente à dúvida do usuário",
        parameters: {
            type: "object",
            properties: {
                tema: {
                    type: "string"
                }
            },
            required: [
                "tema"
            ]
        }
    }
};

export { buscar_documentacao };