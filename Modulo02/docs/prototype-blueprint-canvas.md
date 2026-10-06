# Canvas de Calibragem do Protótipo
> **José Nelson Cultri · AI Architecture Toolkit**

Para cada componente, justifique o nível de intensidade escolhido: não copie o nível máximo por padrão.

**Seu caso:** preencha os quatro componentes abaixo (seções 1-4) para o seu próprio contexto de trabalho
---

## 1. Memória

- [X] Nenhuma (cada chamada é isolada)
- [ ] Curto prazo (contexto da própria requisição)
- [ ] Longo prazo (histórico entre sessões)

**Justificativa:**  Cada dúvida de um programador poderá ser analisada individualmente, lendo a documentação e pesquisando os termos sem necessidade de lembrar de dúvidas passadas

---

## 2. Loop (ReAct)

- [X] Não precisa de loop: uma chamada resolve
- [ ] Loop com máximo de ___ iterações

**Critério de parada:** A princípio, será feita uma chamada apenas à ferramenta de pesquisa do conteúdo, não precisa ainda de análise em loop de busca de ferramentas ou de verificação de resposta final, ou seja, não será feito nenhum loop.

---

## 3. Reflexão

- [X] Não precisa
- [ ] Superfície (formato, completude, consistência interna)
- [ ] Superfície + Conteúdo (comparação com fonte externa)

**Justificativa:** A pesquisa aqui vai ser entender o tema do usuário e executar a ferramenta de busca da base de conhecimento

---

## 4. Ferramentas

Liste cada ferramenta que o agente pode chamar:

| Nome | Schema tipado? (sim/não) | Leitura ou escrita? | Passa pelo Approval Gate antes de executar? |
|---|---|---|---|
| buscar_documentacao | sim | leitura | não |
