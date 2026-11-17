# Falas completas

Texto de cada fala, na mesma ordem de `script.json`. Para cada bloco use `## Nome do bloco` (igual ao do script) e, para cada fala,
`### Nome do integrante | tópico` seguido do texto (pode ter parágrafos). O que vem depois do `|` é só lembrete.
Se o integrante não bater com o do script, a fala é ignorada (nunca aparece o texto de outra pessoa).

## Abertura e contexto

### Lucas | Boas-vindas e apresentação

Bom dia, e sejam bem-vindos ao Papo de Dados, o podcast que conversa sobre dados, tecnologia e carreira sem complicar! Eu sou Lucas Marques, estudante de Ciência de Dados da Fatec Baixada Santista.

### Timóteo | Título do episódio

E eu sou Timóteo Pereira, da mesma turma. Nosso episódio é “Economia da inferência: quem paga a conta da IA”.

### Lucas | Nuvem é prédio de servidores

Uma palavra que todo mundo usa sem pensar: nuvem. Ela parece leve, mas é um prédio cheio de servidores, ligado na tomada e refrigerado com ar ou com água.

### Timóteo | Treinar é fábrica, inferir é resposta

E aí entra o termo-chave. Treinar um modelo de IA é como construir uma fábrica: custa muito, mas acontece poucas vezes. Já a inferência é cada resposta que o modelo dá a uma pergunta nossa. Cada uma custa pouco, mas elas somam bilhões.

### Lucas | AIE: 415 TWh em 2024, 945 em 2030

Segundo a Agência Internacional de Energia, no relatório Energy and AI, de abril de 2025, os data centers consumiram cerca de 415 terawatts-hora em 2024, perto de 1,5% da eletricidade do planeta. A projeção é chegar a 945 em 2030. Terawatt-hora é a unidade que mede países inteiros.

### Timóteo | Gartner: 565 TWh, só projeção

As projeções continuam sendo revistas. Em junho de 2026, a Gartner estimou 565 terawatts-hora para este ano, alta de 26% sobre 2025. Mas atenção: são projeções, e não certezas.

### Lucas | Quem paga a conta? Chama os convidados

Então, quem paga a energia, a água, os chips e o dinheiro de cada resposta? E, numa disciplina de linguagens, quanto isso depende do idioma em que a gente pergunta? Vamos conhecer os quatro convidados!

## Perfil dos convidados

### Lucas | Apresenta João Pedro, economista

O primeiro é João Pedro Dias de Andrade Silva, economista, mestre em Economia da Energia, com dissertação sobre preço e regulação e mais de dez anos em consultoria de infraestrutura. Senhor Dias, obrigado por aceitar o convite!

### João Pedro | Preço e escassez explicam tudo

Eu que agradeço. Meu recado é simples: preço e escassez explicam quase tudo. Quem controla os chips e o capital controla a conta.

### Timóteo | Apresenta Ivan, eng. ambiental

Também conosco, Ivan Guimarães dos Santos da Silva, engenheiro ambiental, pós-graduado em recursos hídricos, com atuação em licenciamento de obras de energia e hoje assessor de projetos de data centers. Seja bem-vindo!

### Ivan | Água, energia e território

Obrigado, pessoal. Eu trago a conta que não aparece no boleto: a água, a energia da rede e o território.

### Lucas | Apresenta Victor F., Green AI

Victor Ferreira Santos é cientista da computação, doutor em Engenharia da Computação, com tese sobre eficiência energética, e pesquisa a Green AI, a IA verde, medindo a energia e o carbono de cada modelo. Obrigado por vir, senhor Ferreira!

### Victor F. | Sem medir vira opinião

Obrigado pelo convite. Eu entro com a medida: sem medir, a discussão vira opinião.

### Timóteo | Apresenta Leme, MLOps e FinOps

E, por fim, Victor Gabriel Leme da Silva, engenheiro de MLOps e FinOps, especialista em Engenharia de Dados e cofundador de uma empresa de otimização de custo de nuvem. MLOps coloca modelos em produção, e FinOps cuida do custo da nuvem. Bem-vindo, senhor Leme!

### Leme | Quem recebe a fatura

Valeu! Eu sou quem recebe a fatura: reduzo o custo de rodar IA sem piorar o produto.

## Gancho universitário

### Lucas | Stanford: queda de 13% no emprego jovem

Uma pergunta que é nossa também, como estudantes. Um estudo de Stanford, de agosto de 2025, de Erik Brynjolfsson e colegas, encontrou queda relativa de 13% no emprego de jovens de 22 a 25 anos nas ocupações mais expostas à IA. O que mudou, nesses últimos dois ou três anos, para quem está entrando no mercado? E o que isso tem a ver com a conta da IA?

### João Pedro | Insumo barato, trabalho vira decisão

Tem tudo a ver. Quando um insumo fica barato, as empresas o usam mais, e o trabalho humano se desloca para decidir, verificar e se responsabilizar pelo resultado. Se a empresa compra tarefas por token, o pedacinho de texto que a IA cobra, ela repensa o que paga pelas tarefas iniciais.

### Leme | Falta quem explique a fatura de IA

E a empresa precisa de gente que meça se o gasto vale o que custa. Na minha, é difícil achar alguém que abra a fatura de IA e explique por que ela subiu.

## Bloco A: Quem paga?

### Lucas | AI Index: custo caiu 280 vezes

Senhor Dias, o AI Index de 2025, de Stanford, mostra que o custo de obter desempenho de nível GPT-3.5 caiu 280 vezes entre 2022 e 2024. Se ficou tão barato, por que ainda se reclama da fatura?

### João Pedro | Paradoxo de Jevons e o caso Uber

Pelo paradoxo de Jevons: quando algo fica mais barato, as pessoas usam muito mais, e o gasto total pode até subir. O diretor de tecnologia da Uber, Praveen Neppalli Naga, contou ao The Information, em abril, que a empresa já tinha esgotado o orçamento de 2026 para ferramentas de IA de programação.

### Leme | Custo por requisição, não por modelo

Confirmo, vendo de dentro. O preço por token caiu, mas a conta subiu, porque o volume explodiu. Por isso a gente mede custo por requisição: não existe “quanto custa o modelo”, e sim “quanto custa cada tarefa concluída”.

### Timóteo | O que são GPUs?

E a oferta? O que são as GPUs?

### João Pedro | Nvidia domina e dita preço

É o chip que faz os cálculos da IA. Segundo analistas do setor, a Nvidia detém a maior fatia do mercado de chips para treinar modelos, e isso dá poder de preço.

### Timóteo | Como a conta não explode?

Senhor Leme, na prática, como a conta não explode?

### Leme | Roteamento, cache e quantização

Três coisas. Roteamento por tarefa: perguntas simples vão para modelos menores, e o modelo de fronteira, o mais caro, fica para as difíceis. Cache, que é guardar respostas repetidas para não pagar duas vezes. E quantização, que reduz a precisão dos números do modelo para ele rodar mais barato.

## Bloco B: Energia e água

### Timóteo | Como medir energia e água?

Senhor Ferreira, como a ciência mede a conta física, de energia e de água?

### Victor F. | Estimativas de Vries-Gao: CO2 e água

Com muita incerteza, porque as empresas não separam a IA do resto do consumo. Alex de Vries-Gao, na revista Patterns, em dezembro de 2025, estimou que a IA emitiu entre 32,6 e 79,7 milhões de toneladas de CO2 em 2025 e usou entre 312 e 765 bilhões de litros de água. A faixa é larga porque os dados não são divulgados.

### Ivan | Harvard: água está na usina

E a água derruba um mito. Um estudo de Harvard, de Gianluca Guidi e Francesca Dominici, de julho de 2026, calculou que 472 grandes data centers dos Estados Unidos usam cerca de 300 bilhões de litros de água por ano, e que cerca de três quartos disso estão ligados à geração de eletricidade, e não à refrigeração do prédio.

### Timóteo | A água não é gasta no prédio?

Ou seja, a água não é gasta onde fica o prédio?

### Ivan | Lugar importa: ONS e Aneel

Muitas vezes, não: é gasta na usina que gera a energia. Por isso o lugar importa tanto. No Brasil, conectar um data center passa pelo Operador Nacional do Sistema Elétrico, o ONS, e pela agência reguladora, a Aneel.

### João Pedro | Escala e PUE

O argumento a favor da escala é que grandes data centers costumam ser mais eficientes, o que se mede pelo PUE, sigla em inglês para Power Usage Effectiveness: a energia total do prédio dividida pela que chega aos servidores. Quanto mais perto de 1, melhor.

### Victor F. | Eficiência não reduz o total: Jevons

O PUE nasceu em 2007, no Green Grid, um consórcio da indústria, e virou norma ISO em 2016. Mas, respondendo ao senhor Dias, eficiência por unidade não reduz o total se o uso cresce mais rápido. É o Jevons de novo.

## Bloco C: Linguagem e tokens

### Timóteo | O que é um token?

Estamos numa disciplina de linguagens, então: o que é, afinal, um token?

### Victor F. | Pedaço de texto, cobrança por token

Um pedaço de texto. O modelo não lê letra por letra nem palavra por palavra: ele divide o texto em pedaços e transforma cada um em número. E a cobrança é por token.

### Timóteo | O idioma entra na conta?

Então o idioma entra na conta?

### Victor F. | NeurIPS: até 15 vezes mais tokens

Entra. Um estudo de Aleksandar Petrov e colegas, na conferência NeurIPS, em 2023, mostrou que o mesmo texto, em idiomas diferentes, pode gerar até 15 vezes mais tokens. Isso significa pagar mais, esperar mais e ter menos espaço de contexto.

### Leme | Meça o seu caso antes de assinar

Para uma startup brasileira, isso entra na planilha: meça o seu caso antes de assinar.

### Lucas | Educação com a IA custa dinheiro?

Dizem que ser educado com a IA custa dinheiro. Procede?

### Leme | Altman e o por favor

Na lógica, sim, com um aviso. Em abril de 2025, Sam Altman, da OpenAI, disse a um usuário no X, meio de brincadeira, que o “por favor” e o “obrigado” custam dezenas de milhões de dólares em eletricidade, “bem gastos”. Não é medição oficial, mas cada palavra a mais é um token a mais.

### Timóteo | Data centers em países em desenvolvimento

Senhor Guimarães, muitos data centers estão indo para países em desenvolvimento, onde o idioma local é menos bem atendido. Isso tem a ver com idioma?

### Ivan | Lugar é energia, não idioma; lei Redata

Diretamente, não. O lugar é decidido por energia, terreno, clima, impostos e latência, que é o tempo de resposta. Um prompt em português pode ser processado na Virgínia. O ponto verdadeiro é que quem hospeda a infraestrutura arca com água e energia, e nem sempre é quem tem o seu idioma bem atendido.

É o que o Redata tenta organizar no Brasil: aprovado pelo Senado em 1º de setembro de 2026 e sancionado em 15 de setembro. A lei reduz tributos de equipamentos, mas exige que as empresas destinem ao menos 10% da capacidade ao mercado nacional e reportem o WUE, o índice de quanta água se usa por energia consumida.

## Bloco D: Raciocínio e cross-fire

### Lucas | Modelos que pensam compensam?

Senhor Ferreira, os modelos que “pensam” antes de responder gastam muito mais tokens. Dá para saber quando compensa?

### Victor F. | Token Economy Score

Existe o Token Economy Score, que mede o ganho de acerto em relação aos tokens extras. Vem do artigo The Reasoning Tax, de 2026, de pesquisadores da Lenovo. Em raciocínio em sequência, como matemática e programação, compensa. Em lembrar conhecimento, o ganho é baixo.

### Leme | Raciocínio só quando a tarefa pede

Vira regra no meu trabalho: raciocínio só quando a tarefa pede. Prazo de entrega não precisa de um modelo que pense por dez segundos, mas a análise de um contrato talvez precise. Primeiro testa, depois decide.

### Timóteo | Cross-fire: eficiência versus escala

Cross-fire rápido! Senhor Ferreira defende eficiência, e Senhor Dias defende escala. Uma resposta curta de cada.

### João Pedro | Escala paga a próxima eficiência

Eficiência sem escala não paga a pesquisa que gera a próxima eficiência. E as projeções da Agência Internacional de Energia e da Gartner divergem porque partem de premissas diferentes: eu sempre pergunto qual é a premissa.

### Victor F. | Escala sem eficiência vira conta de luz

Concordo com a ressalva das premissas, mas escala sem eficiência vira conta de luz. A discussão é sobre proporção, e não sobre escolher um lado.

## Habilidades do futuro

### Timóteo | Quais habilidades as empresas procuram?

Que habilidades as empresas procuram hoje? Cada um em poucas palavras.

### Leme | Custo por requisição e prompt curto

Medir custo por requisição e ler uma fatura de nuvem. E escrever com economia: prompt claro e curto custa menos e costuma funcionar melhor.

### João Pedro | Dado em decisão, questionar premissas

Transformar dado em decisão e questionar as premissas de uma projeção. Quem só repete o número do relatório não agrega nada.

### Victor F. | Método científico e margem de erro

Método científico: replicar resultados e desconfiar de número sem fonte. E saber explicar a margem de erro para quem não é da área.

### Ivan | Medir impacto e entender a regulação

Medir impacto, como PUE e WUE, e entender a regulação do território. Dado sem contexto legal e ambiental não vira decisão.

## Erros comuns

### Lucas | Qual o erro mais comum?

Qual é o erro mais comum de quem está começando, entre a teoria e a prática?

### Leme | Mais caro não é melhor

Achar que o modelo mais caro é o melhor, sem medir o que ele agrega. Na faculdade a gente compara acurácia, no mercado compara acurácia por real gasto.

### Victor F. | Acurácia como única métrica

Na mesma linha: tratar acurácia como única métrica e esquecer o custo de chegar lá, em energia e em dinheiro.

### Ivan | Ignorar território e lei

Ignorar o território e a lei. Na prática, tem licença, tem vizinho e tem rede elétrica.

### João Pedro | Projeção não é certeza

Tomar projeção como certeza. Projeção é cenário, e não destino.

## Conselho de ouro

### Timóteo | Um conselho de ouro de cada um

Agora, um conselho de ouro de cada um, para quem quer se destacar em processos seletivos ou criar uma startup.

### João Pedro | Nicho, não preço do token

Não compita no preço do token, porque quem tem escala ganha esse jogo. Procure um nicho em que o seu conhecimento do problema valha mais que o modelo.

### Ivan | Ler relatórios e a lei

Aprenda a ler relatórios, como o da Agência Internacional de Energia, e a lei, como o Redata. Quem entende a regra antes sai na frente.

### Victor F. | Replicar artigo e publicar no GitHub

Replique um artigo sobre custo ou eficiência e publique no GitHub, explicando onde o seu resultado diferiu. Isso mostra método.

### Leme | Portfólio com antes e depois

Monte um projeto de portfólio que reduza um custo e mostre o antes e o depois, com número. É o que eu gostaria de ver em um currículo.

## Síntese

### Lucas | Quatro partes da conta

Resumindo, a conta da IA tem quatro partes. O dinheiro, em que o token cai, mas o uso explode. Os chips, concentrados em poucas empresas. A energia e a água, gastas longe de quem usa. E a linguagem, que muda os tokens.

### Timóteo | Cada resposta é um evento material

O fio que liga tudo é que cada resposta de uma IA é um evento material, com um custo que alguém paga. Quem trabalha com dados precisa saber medir esse custo, questionar a fonte e dizer, em voz alta, quando o número não fecha.

## Call to action

### Lucas | Chamada para os contatos

Chegamos ao fim, mas a conversa continua. Cada convidado diz onde encontrá-lo e uma leitura ou curso que recomenda.

### João Pedro | YouTube JP Dias Economia

Estou no YouTube, no canal JP Dias Economia. Recomendo o relatório Energy and AI, da Agência Internacional de Energia, que é aberto.

### Ivan | Instagram territorio.ivan

Estou no Instagram, em territorio.ivan, falando de energia e meio ambiente. Minha dica é ler o texto do Redata.

### Victor F. | GitHub victorferreira-lab

Meu código e minhas replicações ficam no GitHub, em victorferreira-lab, Victor Ferreira traço lab. Recomendo o artigo de Petrov e colegas, que liga linguagem e custo.

### Leme | LinkedIn victorleme-finops

Estou no LinkedIn, em victorleme-finops, Victor Leme traço finops. Recomendo dois cursos gratuitos: Introduction to FinOps e Green Software for Practitioners.

### Timóteo | AI Index e encerramento

E, do próprio Papo de Dados, o AI Index Report, de Stanford. Convidados, muito obrigado! E obrigado a vocês! Até o próximo episódio!
