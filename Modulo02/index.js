import ollama from 'ollama';
import { buscar_documentacao } from './tools/buscar_documentacao.js';
const MODELO = 'gemma4:e2b';

async function agente() {
    const historico = [
        {
            role: "system",
            content: "Você é um agente que pesquisa documentações da CHB Sistemas escritas pelos desenvolvedores, " +
                "e responde perguntas feitas a eles sobre o tópico pesquisado na documentação"
        },
        {
            role: "user",
            content: "Qual o padrão recomendado para confecção de grids?"
        }
    ];

    const resposta = await ollama.chat({
        model: MODELO,
        messages: historico,
        tools: [
            buscar_documentacao
        ],
        think: false
    });


    const chamada = resposta.message.tool_calls?.[0];
    if (chamada.function.name == "buscar_documentacao") {
        historico.push(
            resposta.message,
            {
                role: 'tool',
                tool_name: chamada.function.name,
                content: JSON.stringify("O padrão é utilizar grids de atributos caso a leitura permita, caso não permita o correto é usar grids de SDT")
            }
        );
    }

    console.log(historico);
}

await agente();