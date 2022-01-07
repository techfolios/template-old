---
layout: essay
type: essay
title: O que significa "Dados" em Lisp?
# All dates must be YYYY-MM-DD format!
date: 2020-12-03
labels:
  - Iniciação Cientifíca
---

# O que significa "Dados"?

Nós começamos a implementação dos números racionais nos exemplos anteriores através da implementação das funções `add-rat`, `sub-rat` e também através de outras três funções não especificadas: `make-rat`, `numer` e `denom`. Até esse ponto, nós podemos pensar nas operações sendo definidas através de objetos de dados (objetos numeradores, objetos denominadores e números racionais) nos quais o comportamento vai ser especificado no futuro através das três funções

Porém, o que exatamente significa "Dados"? Não é suficiente apenas dizer "Tudo aquilo que é implementado por determinado seletores e construtores". Claramente, nem todo conjunto arbitrário de três funções pode servir como uma base apropriada para se implementar números racionais

Nós precisamos garantir isto, se caso nós construirmos um número racional $x$ a partir de um par de inteiros $n$ e $d$, então extrair o numerador e denominador de $x$ e depois dividir eles, devemos ter o mesmo resultado dividindo $n$ por $d$. Em outras palavras: `make-rat`, `numer` e `denom` devem satisfazer esta condição, para qualquer inteiro $n$ e para qualquer denominador (diferente de $0$) $d$, se $x$ é igual ao retorno da função (make-rat n d), então:

$$\frac{(\text {numer } x )}{(\text {denom } x)} = \frac{n}{d}$$

De fato, está é a única condição necessária que as funções precisam satisfazer para formar uma base válida para a representação de um número racional. De formal geral, nós podemos pensar em dados como uma coleção de seletores e construtores que quando atuam juntos são capazes de preencher os requisitos para validar uma condição específica

Essa perspectiva serve não apenas para definir objetos de dados de "alto nível" como no caso de números racionais, mas também objetos de dados de níveis inferiores. Considere a noção de par, que nós usamos para definir nossos números racionais. Nós nunca dissemos o que um par significava, apenas que as funções `cons`, car e `cdr` operam sobre pares. Porém a única coisa que nós precisamos saber a respeito dessas três operações é que se nós, "colarmos" dois objetos usando cons, nós podemos retornar esses mesmos objetos através de car e cdr.

Portanto, as operações satisfazem a condição de que para cada objeto $x$ e $y$, se $z$ for igual o valor de retorno da função `(cons x y)`, então `(car z)` é igual a $x$ e `(cdr z)` é igual a $y$. De fato, nós mencionamos que estas três funções são incluídas como primitivas na nossa linguagem, contudo, qualquer outras três funções que satisfação a condição descrita, poderão ser válidas para implementar um par. Esse ponto é ilustrado de maneira impressionante pelo fato de que poderíamos implementar `cons`, `car` e `cdr` sem usar nenhuma estrutura de dados, mas apenas usando funções, confira o exemplo abaixo:procedimentos

```scheme
(define (cons x y)
  (define (dispatch m)
    (cond ((= m 0) x)
          ((= m 1) y)
          (else 
           (error "Argument not 0 or 1:
                   CONS" m))))
  dispatch)

(define (car z) (z 0))
(define (cdr z) (z 1))
```

Esse uso de funções não corresponde com nada do que nossa noção intuitiva de dados deveria ser. Mesmo assim, tudo que nós precisamos fazer para mostrar que temos uma forma valida de representar pares é verificar se as funções satisfazem a condição acima

O ponto sutil que deve ser notado é que o valor retornado pela função `(cons x y)` é uma função `dispatch`, que recebe um argumento e retorna $x$ ou $y$ dependendo se o argumento recebido for $0$ ou $1$. Correspondente, `(car z`) é definida para aplicar $z$ a $0$

Portanto, se $z$ for a função formada por `(cons x y)`, então $z$ será aplicado a $0$ e irá resultar em $x$. Assim, nós mostramos que (`car (cons x y))` resulta em $x$, conforme o desejado. De maneira similar, `(cdr (cons x y))` aplica a função retornada por `(cons x y)` em $1$, que por sua vez irá retornar $y$. Portanto, essa implementação procedural de pares é uma implementação válida, e se caso nós gostaríamos de ter acesso ao par usando apenas cons, car e cdr, nós não conseguiríamos distinguir essa implementação de alguma que use estruturas de dados "reais"

A ideia de exibir esta representação procedural de pares não é dizer que nossa linguagem funciona dessa forma (Scheme e Sistemas Lisp em geral implementam pares de forma direta, por uma questão de eficiência) mas sim demonstrar que poderia funcionar desta forma. A representação procedural, mesmo que obscura, é perfeitamente adequada para representar pares, desde que satisfaça a condição que é necessária ser satisfeita.

Esse exemplo também demonstra que habilidade de manipular funções como objetos  automaticamente provê a habilidade de representar dados compostos. Isso pode parecer apenas um detalhe agora, porém representações procedurais de dados irão desempenhar um papel central no nosso repertório de programação. Esse estilo de programação é ás vezes chamado de *message passing*, e nós iremos utilizá-lo como ferramenta básica no futuro

---

## Exercícios

> **Exercise 2.4**: Here is an alternative procedural representation of pairs. For this representation, verify that (car (cons x y)) yields x for any objects x and y.

```scheme
(define (cons x y) 
  (lambda (m) (m x y)))

(define (car z) 
  (z (lambda (p q) p)))
```

> What is the corresponding definition of cdr? (Hint: To verify that this works, make use of the substitution model of 1.1.5.)

- **Resposta**

    ```scheme
    (define (cons x y)
      (lambda (m) (m x y)))

    (define (car z)
      (z (lambda (p q) p)))

    (define (cdr z)
      (z (lambda (p q) q)))
    ```

    Método de Substituição:

    ```scheme
    (car (cons x y))
    (car (lambda (m) (m x y))) ;; Substituimos *cons*
    ((lambda (p q) p) (lambda (m) (m x y)) ;; Substituimos *car*
    ((lambda (p q) p) x y) ;; lambda (p q) recebe x y de lambda (m)
    x ;; lambda (p q) retorna x

    ;; Processo segue a mesma lógica pra *cdr*

    (cdr (cons x y))
    (cdr (lambda (m) (m x y)))
    (lambda (p q) q) (lambda (m) (m x y))
    (lambda (p q) q) x y)
    y
    ```

> **Exercise 2.5:** Show that we can represent pairs of nonnegative integers using only numbers and arithmetic operations if we represent the pair a and b as the integer that is the product 2 a 3 b . Give the corresponding definitions of the procedures cons, car, and cdr.

- **Resposta**

    ```scheme
	;; Não terminado
    ```

> **Exercise 2.6**: In case representing pairs as procedures wasn’t mind-boggling enough, consider that, in a language that can manipulate procedures, we can get by without numbers (at least insofar as nonnegative integers are concerned) by implementing 0 and the operation of adding 1 as

```scheme
(define zero (lambda (f) (lambda (x) x)))

(define (add-1 n)
  (lambda (f) (lambda (x) (f ((n f) x)))))
```

> This representation is known as *Church numerals*, after its inventor, Alonzo Church, the logician who invented the λ-calculus.
Define one and two directly (not in terms of zero and add-1). (Hint: Use substitution to evaluate (add-1 zero)). Give a direct definition of the addition procedure + (not in terms of repeated application of add-1).

- **Resposta**

    ```scheme
    #lang racket

    (define zero (lambda (f) (lambda (x) x)))

    (define (add-1 n)
      (lambda (f) (lambda (x) (f ((n f) x)))))

    (add-1 zero)
    (add-1 (lambda (f) (lambda (x) x)))
    ((lambda (f) (lambda (x) (f ((n f) x)))) (lambda (f) (lambda (x) x)))
    ((lambda (f) (lambda (x) (f (((lambda (f) (lambda (x) x) f) x))))))
    (lambda (f) (lambda (x) (f (f x))))

    (define one (lambda (f) (lambda (x) x)))

    (add-1 one)
    (add-1 (lambda (f) (lambda (x) x)))
    (lambda (f) (lambda (x) (f (((lambda (f) (lambda (x) (f (f x)))) f) x))))
    (lambda (f) (lambda (x) (f (f (f x)))))

    (define two (lambda (f) (lambda (x) (f (f (f x))))))
    ```
