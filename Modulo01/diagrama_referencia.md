# Descrição do Processo
- O programador ou analista de suporte precisa mandar hoje um pedido de ajuda ou questionar em algum grupo caso esteja realizando um desenvolvimento (programador) ou atendimento ao cliente (analista de suporte) manualmente para ser atendido. Muitos assuntos costumam ser revisitados em diversas discussões. Uma arquitetura AI-First em um componente ajudaria no sentido de fazer consultas ao que já foi discutido e resolvido no passado, poupando o tempo de uma nova conversa. Iniciar um novo tópico nos grupos de suporte é necessário apenas caso o assunto não seja resolvido automaticamente pelo que já tenha sido discutido no passado, ou caso o próprio desenvolvedor/analista não tenha ficado satisfeito com a resposta

# Gateway
- Programador/Analista faz uma busca de um assunto pelo sistema de suporte. Identificar o grupo correto pelo login do analista ou assunto da conversa, afim de realizar as buscas no grupo correto da discussão

# Orquestrador
- Identificar o assunto da busca recebido e acionar os modelos com o contexto correto, mediante o grupo identificado

# Modelo + Tools/RAG
- Buscar assunto via RAG/consultas nas APIs de busca do Google Chat/Google Docs, destrinchando o assunto e montando a resposta para o usuário

# Approval Gate
- Usuário decide se a resposta foi satisfatória e, caso não tenha sido, o sistema cria uma nova mensagem com contexto da dúvida no grupo correto

# Observabilidade
- Versionamento do prompt de busca, entrada humana, respostas obtidas e tokens gastos setorizando por RAG/input/output

| Componente/Subtarefa | P1: Regra finita? | P2: Erro caro e irreversível? | P3: Muda com contexto? | Classificação |
| - | - | - | - | - |
| Gateway: validar formulário | Sim | Não | Não | Regra |
| Identificar assunto da busca | Não | Não | Sim | Agente |
| Identificar grupos que podem ser úteis na busca | Não | Não | Sim | Agente |
| Realizar busca com contexto nos grupos selecionados | Não | Não | Sim | Agente |
| Apresentar resultados obtidos ao usuário | Não | Não | Sim | Agente |

# Orçamento de trade-off
| Componente | Latência | Custo | Precisão | Eixo inegociável |
| - | - | - | - | - |
| Gateway | Baixa | Baixo | N/A | Latência |
| Orquestrador | Baixa | Alto | Alto | Precisão |
| Modelo + Tools/RAG | Tolerável | Alto | Alto | Precisão |
| Approval Gate | Média Tolerância | N/A | N/A | N/A |

# Reflexão
- A observabilidade pode se tornar onerosa na quantidade de informações armazenadas. Com base no uso dos funcionários, caso os registros onerem muito no custo do armazenamento, é possível diminuir quais dados são armazenados.
- Caso a quantidade de interações humanas no approval gate reduza com o tempo, ou também caso não seja coletada nenhuma resposta relevante para o contexto do usuário, é possível automatizar o envio da mensagem para o grupo correto mediante o contexto da dúvida