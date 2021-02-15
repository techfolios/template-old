---
layout: essay
type: essay
title: Criptografia - Ataques Side-Channel
# All dates must be YYYY-MM-DD format!
date: 2021-02-15
labels:
  - Graduação
---

# Criptografia: Ataques Side-Channel

## Do que trata o DPA?

**Differential Power Analysis** (DPA) é um ataque side-channel que envolve analisar
estatisticamente as medições de energia em um criptossistema. Este ataque explora
têndencias de variações de energia em microprocessadores ou outros hardwares
enquanto os mesmos realizam operações usando chaves secretas. Os ataques DPA
tem propriedades de processamento de sinal e correção de erros que podem extrair
"segredos" das medições que contêm muito "ruído" para serem analisados pelo SPA.
Usando o DPA, um adversário pode obter as chaves secretas analisando as medições
de consumo de energia de várias operações criptográficas executadas por um smart
card vulnerável por exemplo, ou outro dispositivo.

## Diferença SPA x DPA


Ainda falando sobre os smart cards, embora esses sistemas estejam executando
apenas uma única operação, sistemas mais complexos geralmente executam várias
operações ao mesmo tempo. Um computador moderno usa tecnologias como o
DMA, tecnologia essa que permite que o hardware acesse a memória diretamente do
sistema, sem interromper o processador. Todos esses sinais funcionam em paralelo,
gerando uma grande quantidade de ruído

É aqui que entra o DPA. Para melhorar as chances de sucesso na captura de chaves, o
DPA envolve a analise do consumo de energia quando as operações não
criptográficas normais estão sendo feitas e, em seguida, análises adicionais durante
as operações criptográficas. Os dois modelos estatísticos são comparados, afim de
"subtrair" o ruído do sinal.

Como exemplo, podemos pensar nos **FPGAs** (Field Programmable Gate Array). Os
FPGAs não podem ser atacados por SPA porque eles são "paralelos" por natureza.
Eles realmente não funcionam como um microprocessador normal. Em vez disso,
são uma série de portas lógicas paralelas que operam em uníssono em uníssono em
um único sinal de clock comum. Desta forma, o SPA não consegue identificar os
"sinais" separados porque cada componente interno faz a mesma coisa em cada
ciclo de clock

## SPA e Suas Detecções

Simple Power Analysis, ou, mais conhecido como SPA, é uma técnica que envolve
interpretar diretamente as medidas de consumo de energia que são coletadas
durante as operações criptográficas do hardware. O SPA pode fornecer informações
sobre a operação do dispositivo e também sobre a chave (Key) envolvida no
processo.

Por conta desta capacidade do SPA de revelar a sequência de instruções executadas,
ele pode ser usado como uma forma de "quebrar" as implementações criptográficas
nas quais o processo de execução que está acontecendo dependa diretamente do
dado que está sendo processado.

Como exemplo, temos:
- **DES Key Schedule** : A computação desse "cronograma" da chave DES envolve a
rotação de
chaves registros de 28 bits. Uma condicional é comumente usada para checar os
bits que foram desviados para o fim e que possam ser "embrulhados"novamente. O resultado do rastreio envolvendo consumo de energia para um
bit 1 e para um bit 0 irá conter diferentes recursos SPA que irão ser diferentes
graças ao caminho que a execução tomar

- **DES Permutação** : As implementações do DES realizam uma variedade de
permutações com bits. As rotas condicionais no software ou no microcode
podem causar uma variação significante no consumo de energia para bits 0 ou
para bits 1

- **Comparações** : A comparação de strings ou de memórias tipicamente realizam
um ramificação condicional quando uma correspondência não é encontrada.
Essa ramificação causa características SPA notáveis e até ás vezes características
temporais

- **Multiplicadores** : Circuitos de multiplicação modular tendem a "vazar" uma
grande parte das informações sobre os dados que eles estão processando. As
funções "vazadas" dependem do design do multiplicador, porém muitas vezes
estão fortemente correlacionadas com os valores e pesos operacionais.

- **Exponenciadores** : Uma simples função de exponenciação modular pode vir a
cruzar o expoente, realizando assim uma operação de quadrados em cada
iteração junto a uma operação de multiplicação para cada bit expoente que é
igual a "1". O expoente pode ser comprometido caso a operação de quadrados e a
operação de multiplicação possuam diferentes características de consumos de
energia, diferentes quantidades de tempo ou sejam separadas por códigos
diferentes. Funções de exponenciação modular que operam com dois ou mais
bits expoentes por vez possuem um vazamento de funções de vazamento mais
complexas.

## Prevenindo o SPA

Técnicas para a prevenção de SPA são geralmente bastante simples de serem
implementadas. Evitando funções que usem alguns intermédios secretos ou chaves
(keys) para as operações de condicionais irão mascarar bastantes características de
SPA.

O microcode em alguns microprocessadores pode causar uma grande dependência
de energia nos operadores. Para sistemas assim, até mesmo a constante linha de
execução do código pode ter sérias vulnerabilidades SPA
Grande parte das implementações de algoritmos criptográficos simétricos em de
_hard-wire_ hardwares tem uma variação pequena de energia que faz com que o SPA 
não forneça um material chave

## Utilização do DPA em Criptoanálise

Algoritmos de chaves públicas podem ser analisados por DPA através da correlação
feita entre valores-candidatos usados na computação de intermédios e a medida do
consumo de energia. Para as operações exponenciais modulares , é possível testar
estimativas de bits expoentes através do teste de estimativas valores intermediários
que estão correlacionados com a computação real. A implementação de RSA com o
Teorema Chinês do Resto (CRT) também pode ser analisada, por exemplo,
definindo as funções de seleção sobre os processos de redução ou combinação
utilizados no teorema

Em geral, os sinais que são emitidos durante a operação assimétrica tendem a ser
muito mais fortes do que os de muito algoritmos simétricos porque a sua
complexidade computacional relativamente alta envolvendo operações de
multiplicação, pode vir a ser desafiadora para o sistema

O DPA também pode ser utilizado para "quebrar" as implementações de quase todos
os algoritmos simétricos ou assimétricos. Nós ainda utilizamos esta técnica para
algoritmos e protocolos desconhecidos afim de facilitar a engenharia reversa, e com
isso podemos testar hipóteses sobre algum processo de um dispositivo
computacional (talvez seja até possível automatizar todo esse processo de
engenharia reversa)

## Prevenindo o DPA

Técnicas para prevenção de DPA e ataques podem ser separados em três categorias
1. A primeira medida é reduzir o tamanho dos sinais, por exemplo através do uso
de execuções constantes de trilhas de códigos, escolhendo operações que filtrem
e vazem menos informação durante seu consumo de energia, balanceando seus
pesos e estados de transições, e através da proteção física do dispositivo.
Infelizmente algo como a redução de sinais geralmente não pode fazer com que
o sinal seja reduzido a zero, dessa forma um atacante com um infinito números
de amostras ainda poderia executar o DPA sobre o sinal. Na prática, a proteção
mais agressiva pode tornar os ataques inviáveis, porém acresce no custo e
tamanho do dispositivo

2. A segunda medida envolve introduzir "ruídos" na medida do consumo de
energia. Assim como a redução do tamanho dos sinais, 
adicionar ruídos aumenta o número de amostras requeridas pelo atacante para realizar o ataque.
Em adição, o tempo de execução pode ser randômico. Designers e avaliadores
devem abordar a ofuscação temporal com grande cuidado, no entanto, muitas
técnicas podem ser usadas para "driblar" ou compensar esses efeitos. Diversos
produtos vulneráveis passaram por revisões que usaram métodos de
processamento de dados. Para a segurança, deve ser possível permitir que os
métodos de ofuscação sejam desligados temporariamente durante os testes de
avaliação e certificação

3. Por fim, a terceira técnica envolve projetar sistemas criptográficos com
estimativas realísticas sobre o hardware subjacente. Os procedimentos de
atualização não linear podem ser implementados a fim de garantir que os traços
de energia não possam vir a ser correlacionado as transações. Como um
exemplo simples, fazendo o hash de uma chave de 160 bits com SHA[10] deve já
ser eficiente para destruir parte da informação que um atacante poderia vir a ter
sobre a chave


