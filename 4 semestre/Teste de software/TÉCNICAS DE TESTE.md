### **TÉCNICAS DE TESTE**



-É uma estratégia específica usada para verificar um aspecto ou comportamento

---



#### **Teste de Regressão**

* Testar novamente funcionalidades que já funcionavam, depois de uma mudança no código;
* **Objetivo:** garantir que uma correção ou nova feature não quebrou algo que já estava pronto



**Exemplo:** Uma rede social adiciona "editar comentário -> reexecuta os testes de criar e excluir comentários.



---



#### **Teste de estresse**

* Testa o sistema em condições extremas, acima do limite normal de uso, para ver onde e como ele falha;
* Objetivo não é confirmar se funciona bem é descobrir o ponto limite do software;

---



#### **Teste de Performance**

* Mede velocidade, tempo de resposta e uso de recursos(CPU, memória) do sistema sob uso normal;
* **Diferente do teste de estresse**: aqui o volume é realista, o foco é a qualidade da resposta;



**Exemplo**: Medir quanto tempo uma tela de resultados de busca demora para carregar com uso normal de usuários.

---



#### **Teste de Recuperação**

* Verifica se o sistema consegue voltar ao normal depois de uma falha (queda de energia, perda e conexão, crash do servidor)
* Avalia se os dados são preservados e se o sistema retoma de forma segura.



**Exemplo:** Desligar a energia de um totem de autoatendimento no meio de um pedido e checar se ele recupera o estado ao religar.

---



#### **Teste de Segurança**

* Verifica se o sistema protege dados e funcionalidades contra acessos não autorizados, ataques e vulnerabilidade.
* Testa autenticação, autorização, criptografia e proteção contra invasões.



**Exemplo:** Tentar a área de administrador de um site usando uma URL direta, sem estar logado como admin.

---



#### **Teste de Paralelo**

* Compara o comportamento de duas versões do sistema (a antiga e a nova) rodando ao mesmo tempo, com as mesmas entradas;
* **Objetivo:** garantir que a versão nova produz os mesmos resultados corretos que a antiga, antes de substitui-la de vez.



**Exemplo:** Rodar o sistema antigo de folha de pagamento de uma empresa junto com o novo, comparando os valores calculados batem.

---



#### **EXECÍCIO DE FIXAÇÃO 1**



###### **App de Delivery em Dia de Promoção**

O app normalmente recebe 500 pedidos por hora. A empresa vai lançar uma promoção que pode multiplicar isso por 20.



**Tarefa:** Descreva como você montaria um teste de estresse para esse cenário e cite 2 possíveis falhas que esse teste poderia revelar.



**Resposta:** Testaria o app em sua condição extremas, ou seja com números de pedidos acima do que é proposto por seu limite normal, para ver onde e como ele falha. Duas possíveis falhas são em errar a quantidade de pedido de cada cliente e a outra é o sistema travar com o excesso de pedidos.

---



#### **EXECÍCIO DE FIXAÇÃO 2**



###### **Sistema de Consulta de Notas Online**

No início do semestre, cerca de 300 alunos acessam o sistema por dia para ver notas. A escola quer garantir uma boa experiência de uso.



**Tarefa:** Defina uma métrica de performance aceitável para esse sistema (ex: tempo máximo de carregamento) e justifique por que esse limite faz sentido para o contexto.



**Resposta:** O Sistema deve Medir quanto tempo um aluno leva na tela de resultados e quanto tempo a busca demora para carregar com uso normal de aluno. Com essas informações a escola poderá garantir uma boa experiência de uso aos alunos.

---



#### **EXECÍCIO DE FIXAÇÃO 3**



###### **Sistema de Matrícula de uma Escola:** O time corrigiu um bug no módulo de "cancelamento de matrícula".



O sistema também tem os módulos de "cadastro de aluno", "emissão de boletim" e "pagamento de mensalidade", que não foram alterados.



**Tarefa:** Explique por que um teste de regressão é necessário aqui, e liste 2 funcionalidades que você testaria novamente mesmo sem terem sido alteradas diretamente.



**Resposta:** O teste é necessário para garantir que a correção não quebrou algo que já estava pronto, testaria de novo o "cadastro de aluno" e a "emissão de boletim", pois pode ter algum erro após a correção do bug, embora não tenham sido alteradas.

---



#### **EXECÍCIO DE FIXAÇÃO 4**



###### **Sistema de Pedidos de uma Cantina**

Um cliente está finalizando um pedido pelo app quando a conexão com o servidor cai por 10 segundos.



**Tarefa:** Liste 2 comportamentos esperados do sistema para ser considerado "recuperado com sucesso" e 1 comportamento que indicaria falha grave.



**Resposta:** Avaliar se os dados são preservados e se o sistema retoma de forma segura. O cliente precisar fazer novamente o pedido do zero.

---



#### **EXECÍCIO DE FIXAÇÃO 5**



**App de Delivery com Área de Entregador**



O app tem uma área exclusiva para entregadores verem pedidos e ganhos, separada da área do cliente comum.



**Tarefa:** Liste 2 testes de Segurança que você faria para garantir que um cliente comum não consiga acessar a área do entregador.



**Resposta:** Testar a área de entregador de um app sem estar logado como entregador e verifica se o sistema protege dados e funcionalidades contra acessos não autorizados



---

#### **EXECÍCIO DE FIXAÇÃO 6**



**Migração do Sistema de Notas de uma Escola**



A escola vai trocar o sistema antigo de lançamento de notas por um novo, mas antes precisa garantir que os cálculos de média estão corretos\*\*.\*\*



**Tarefa:** Descreva como aplicar teste paralelo nesse cenário e o que a equipe deve fazer se os dois sistemas apresentarem resultados diferente.



**Resposta:**

---

#### **EXECÍCIO DE FIXAÇÃO 7**

