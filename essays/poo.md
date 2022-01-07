---
layout: essay
type: essay
title: Um Pouco Sobre POO em C++
# All dates must be YYYY-MM-DD format!
date: 2020-09-07
labels:
  - Graduação
---


Breve Resumo
============

A **POO** é um paradigma surgido nos anos 1970, que utiliza objetos como
elementos fundamentais na construção da solução. Um objeto é uma
abstração de algum fato ou ente do mundo real, com atributos que
representam as suas caraterísticas ou propriedades, e métodos que emulam
o seu comportamento ou atividade. Todas as propriedades e métodos comuns
aos objetos encapsulam-se ou agrupam-se em classes. Uma classe é um
modelo, um protótipo para criar objetos; no geral, diz-se que cada
objeto é uma instância ou exemplar de uma classe.

Os Quatro Pilares da POO
========================

Dentro deste paradigma de programação, é necessário a compreensão destes
4 pilares:

1.Abstração
---------

A abstração consiste em um dos pontos mais importantes dentro de
qualquer linguagem Orientada a Objetos. Como estamos lidando com uma
representação de um objeto real (o que dá nome ao paradigma), temos que
imaginar o que esse objeto irá realizar dentro de nosso sistema. São
três pontos que devem ser levados em consideração nessa abstração.

O primeiro ponto é darmos uma **identidade** ao objeto que iremos criar.
Essa identidade deve ser única dentro do sistema para que não haja
conflito. Na maior parte das linguagens, há o conceito de pacotes (ou
namespaces). Nessas linguagens, a identidade do objeto não pode ser
repetida dentro do pacote, e não necessariamente no sistema inteiro.

A segunda parte diz respeito a características do objeto. Como sabemos,
no mundo real qualquer objeto possui elementos que o definem. Dentro da
programação orientada a objetos, essas características são nomeadas
**propriedades** (ou atributos). Por exemplo, as propriedades de um
objeto "Cachorro" poderiam ser "Tamanho", "Raça" e "Idade".

Por fim, a terceira parte é definirmos as ações que o objeto irá
executar. Essas ações, ou eventos, são chamados **métodos**. Esses
métodos podem ser extremamente variáveis, desde "Acender()" em um objeto
lâmpada até "Latir()" em um objeto cachorro.

2.Encapsulamento
--------------

O encapsulamento é uma das principais técnicas que define a programação
orientada a objetos. Se trata de um dos elementos que adicionam
segurança à aplicação em uma programação orientada a objetos pelo fato
de esconder as propriedades, criando uma espécie de caixa preta.

A maior parte das linguagens orientadas a objetos implementam o
encapsulamento baseado em propriedades privadas, ligadas a métodos
especiais chamados `getters` e `setters`, que irão retornar e setar o
valor da propriedade, respectivamente. Essa atitude evita o acesso
direto a propriedade do objeto, adicionando uma outra camada de
segurança à aplicação.

Para fazermos um paralelo com o que vemos no mundo real, temos o
encapsulamento em outros elementos. Por exemplo, quando clicamos no
botão ligar da televisão, não sabemos o que está acontecendo
internamente. Podemos então dizer que os métodos que ligam a televisão
estão encapsulados.

3.Herança
-------

O reuso de código é uma das grandes vantagens da programação orientada a
objetos. Muito disso se dá por uma questão que é conhecida como
**herança**. Essa característica otimiza a produção da aplicação em
tempo e linhas de código.

Para entendermos essa característica, vamos imaginar uma família: a
criança, por exemplo, está herdando características de seus pais. Os
pais, por sua vez, herdam algo dos avós, o que faz com que a criança
também o faça, e assim sucessivamente.

Um objeto **filho** herda os métodos e atributos do objeto **pai**

A questão da herança varia bastante de linguagem para linguagem. Em
algumas delas, como `C++`, há a questão da herança múltipla. Isso,
essencialmente, significa que o objeto pode herdar características de
vários "ancestrais" ao mesmo tempo diretamente. Em outras palavras, cada
objeto pode possuir quantos pais for necessário. Porém deve-se manter atento
em relação ao famigerado **Problema Diamante**.

### Hierarquia das Heranças

Quando uma classe derivada herda uma classe base, ela pode ser herdade
de três formas: **Pública**, **Privada** e **Protegida**

-   Caso herdada de forma pública, todos os atributos e métodos das
    classe base se mantém nas mesma forma, ou seja, o que é público se
    mantém público, o que é privado se mantém privado etc\...

-   Caso herdada de forma protegida, os atributos e métodos da classe
    base que antes eram públicos, se tornam protegidos na classe
    derivada . O restante se mantém igual

-   Por fim, caso seja herdada de forma privada, todos os métodos e
    atributos da classe base se tornam privados na classe derivada

4.Polimorfismo
------------

Outro ponto essencial na programação orientada a objetos é o chamado
polimorfismo. Na natureza, vemos animais que são capazes de alterar sua
forma conforme a necessidade, e é dessa ideia que vem o polimorfismo na
orientação a objetos. Como sabemos, os objetos filhos herdam as
características e ações de seus "ancestrais". Entretanto, em alguns
casos, é necessário que as ações para um mesmo método seja diferente. Em
outras palavras, o **polimorfismo consiste na alteração do funcionamento
interno de um método herdado de um objeto pai.**

Como um exemplo, temos um objeto genérico "Eletrodoméstico". Esse objeto
possui um método, ou ação, "Ligar()". Temos dois objetos, "Televisão" e
"Geladeira", que não irão ser ligados da mesma forma. Assim, precisamos,
para cada uma das classes filhas, reescrever o método "Ligar()".

Associação
==========

A associação é um tipo de relação existente entre as classes, essas
relações podem ser categorizadas da seguinte forma:

-   **Agregações**

    Representa que um tipo de objeto é composto, pelo menos em parte, de
    outro objeto em uma relação todo/parte. O objeto parte é um atributo
    do objeto todo.

    O ciclo de vida do objeto parte é limitado ao ciclo de vida do
    objeto todo. Porém, a parte **vive sem o todo e o todo existe sem as
    partes** (relação todo-parte fraca).

-   **Composição**

    Toda vez que dizemos que a relação entre duas classe é de composição
    estamos dizendo que uma dessas classe (a Parte) está contida na
    outra (o Todo) e a parte **não vive/não existe** sem o todo.

    Sendo assim, toda vez que destruirmos o todo, a parte que é única e
    exclusiva do todo se vai junto.

Funções Amigas
==============

Em `C++`, pode-se romper a proteção aos membros de uma classe usando os
`friends`, ou amigos. As classes do `C++` podem declarar dois tipos de
`friends`. Uma classe inteira pode ser `friend` de uma outra classe, ou
uma única função pode ser declarada como sendo um `friend`. Uma classe
`friend` pode ser qualquer outra classe no sistema, geralmente fora da
hierarquia da classe a que pertence `friend`. Uma função `friend` pode
ser qualquer uma do programa, incluindo funções membros de outra classe.

Uma função declarada como `friend` em uma classe, recebe acesso aos
membros privados e protegidos desta classe. Se essa função for membro de
uma outra classe, como é o normal, apenas essa função, e nenhum outro
membro da classe, receberá permissão de acesso aos membros privados da
classe que faz a declaração.

Declarando uma função específica como amiga de duas classes, dá-se a
essa função acesso aos campos privados e protegidos de instâncias de
ambas as classes. A função `friend` pode ser uma função global do `C++`
ou um membro de uma outra classe. Em um projeto típico, a função
`friend` declara parâmetros das duas classes para as quais ela deve a
sua amizade. Dentro da função `friend`, as instruções podem então
acessar normalmente membros escondidos nos parâmetros passados como
argumentos para a função.

É importante notar que `friends` são interessantes para dar a objetos
acesso aos campos privados de outros objetos. Usadas cuidadosamente,
`friends` podem melhorar o desempenho, eliminando o desperdício
associado com a chamada a funções membro. Todavia, `friends` também
rompem as barreiras que protegem os dados dentro das classes. Usar
`friends` reduz as vantagens da programação orientada a objetos advindas
do encapsulamento de funções e dados, e do isolamento de instruções que
acessam valores críticos. Por isso, deve-se ter muito cuidado para usar
funções `friends`.

Textos retirados de: `DevMedia`, `Wikipedia` e `PUC`.
