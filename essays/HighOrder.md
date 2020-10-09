# Sumário_5

Concluído: Yes
Criado: Oct 8, 2020 9:04 PM
Source: SICP Book
Ultimo Edit: Oct 9, 2020 3:14 PM

# Formulando abstrações com Funções de Alta Ordem

Nós vimos que as funções (*procedures*) são, em efeito, abstrações que descrevem operações compostas que agem sobre números, independe de quais sejam estes números.

```scheme
(define (cube x) (* x x x))
```

Quando nós declaramos a função acima, nós não estamos falando sobre o cubo de algum número particular, mas sim estamos demonstrando um método que obtém o cubo de qualquer número que a função interaja sobre. Nós podemos obter o mesmo resultado sem necessariamente precisarmos de uma função, observe as expressões:

```scheme
(* 3 3 3)
(* x x x)
(* y y y)
```

Esta forma de trabalhar traria muitas desvantagens, uma delas seria nos forçar a trabalhar sempre no nível particular de operações primitivas da linguagem (multiplicação neste caso), desta forma não poderíamos trabalhar com operações de níveis superiores. Nossos programas devem ser capazes de computar o cubo de algum número, porém a nossa linguagem não iria ter a capacidade de expressar o conceito de realizar o cubo de um número.

Uma das coisas que devemos demandar de uma linguagem de programação poderosa é a habilidade de construir abstrações através da imputação de nomes para padrões comuns e depois trabalhar com abstrações diretamente. Funções (*procedures*) nos permitem isso. Isto é a razão pela qual a maioria das linguagens de programação mais primitivas incluem o conceito de mecanismos para declarar uma procedure

No entanto, dentro do processamento numérico nós vamos estar severamente limitados na nossa habilidade de criar abstrações se nós restringirmos as funções que os parâmetros devem ser obrigatoriamente números. Ás vezes o mesmo padrão de programação será usado com um número em diferentes procedures. Para expressar determinados padrões em forma de conceitos, nós vamos precisar construir procedures como valores. **Procedures que podem manipular outras procedures são chamadas de Funções de Alta Ordem** (High-Order Procedures)

## Funções como argumentos

Considere as três seguintes funções:

- A primeira computa a soma dos inteiros entre a e b

```scheme
(define (sum-integers a b)
  (if (> a b) 
      0 
      (+ a (sum-integers (+ a 1) b))))
```

- A segunda computa o soma dos cubos de inteiros de determinado escopo

```scheme
(define (sum-cubes a b)
  (if (> a b)
      0
      (+ (cube a)
         (sum-cubes (+ a 1) b))))
```

- A terceira computa a soma de uma sequência de termos em uma série

$$\frac {1}{1*3} + \frac {1}{5*7} + \frac {1}{9*11} + ...,$$

O resultado irá convergir para **$\frac{\pi}{8}$**

```scheme
(define (pi-sum a b)
  (if (> a b)
      0
      (+ (/ 1.0 (* a (+ a 2))) 
         (pi-sum (+ a 4) b))))
```

Essas três funções claramente compartilham uma padrão em comum. Elas são quase idênticas em boa parte. Nós podemos gerar um padrão de preenchimento destas funções

```scheme
(define (⟨name⟩ a b)
  (if (> a b)
      0
      (+ (⟨term⟩ a) 
         (⟨name⟩ (⟨next⟩ a) b))))
```

A presença deste padrão é uma evidência forte que existe uma abstração útil esperando para emergir. De fato, matemáticos a muito tempo identificaram a abstração de soma (*summation of a series*) e inventaram a **notação sigma.** O poder da notação sigma é o que permite os matemáticos lidarem com o conceito de somas de forma geral

$$\sum\limits_{n=a}^b f(n) = f(a)+...+f(b)$$

De maneira similar, nós programadores gostamos que nossas linguagens sejam poderosas o suficiente para serem capazes de nos permitir escrever funções que expressam o conceito de soma de forma geral e não apenas computações de números específicos. Nós podemos fazer isso prontamente em nossa linguagem, pegando o modelo comum e transformando os "slots" acima em **parâmetros formais**

```scheme
(define (sum term a next b)
  (if (> a b)
      0
      (+ (term a)
         (sum term (next a) next b))))
```

Note que `sum` recebe como argumento os limites inferiores e superiores (a e b) juntos da função `term` e `next` 

Podemos usar `sum` exatamente como como faríamos com qualquer outra função. Por exemplo, podemos usá-la (junto com uma função `inc` que incrementa 1 em seu argumento) para definir `sum-cubes`

```scheme
(define (inc n) (+ n 1))

(define (sum-cubes a b)
  (sum cube a inc b))
```

Desta forma podemos agora computar a soma dos cubos dos inteiros de 1 a 10:

```scheme
(sum-cubes 1 10)
> 3025
```

Com a ajuda de uma função de identidade, podemos definir `sum-integers` em termos de `sum`

```scheme
(define (identity x) x)

(define (sum-integers a b)
  (sum identity a inc b))
```

E com isto temos a soma de todos os inteiros entre 1 e 10:

```scheme
(sum-integers 1 10)
> 55
```

Por fim, podemos definir uma função que compute uma aproximação de $\pi$

```scheme
(define (pi-sum a b)
  (define (pi-term x)
    (/ 1.0 (* x (+ x 2))))
  (define (pi-next x)
    (+ x 4))
  (sum pi-term a pi-next b))
```

No output:

```scheme
(* 8 (pi-sum 1 1000))
3.139592655589783
```

Agora que nós temos a função `sum`, nós podemos formular conceitos mais abstratos. Por exemplo, a definição integral de uma função $f$ entre os limites $a$ e $b$ pode ser aproximada numericamente através da soma:

$$\int_a^b \! f(x) = \bigg[f\Big(a+\frac{dx}{2}\Big) + f\Big(a+dx+\frac{dx}{2}\Big) + f\Big(a+2dx+\frac{dx}{2}\Big)+...\bigg] \, \mathrm{d}x.$$

Expressando isso na forma de função:

```scheme
(define (integral f a b dx)
  (define (add-dx x) (+ x dx))
  (* (sum f (+ a (/ dx 2.0)) add-dx b) 
     dx))

(integral cube 0 1 0.01)
> .24998750000000042

(integral cube 0 1 0.001)
> .249999875000001
```

O valor exato da integral do cubo entre $0$ e $1$ é $\frac{1}{4}$

## Exercícios

> **Exercise 1.29**: Simpson’s Rule is a more accurate method of numerical integration than the method illustrated above. Using Simpson’s Rule, the integral of a function f between a and b is approximated as

$$\frac{h}{3}(y_{0} + 4y_{1} + 2y_{2} + 4y_{3} + 2y_{4}+ ... + 2y_{n-2} + 4y_{n-1} + y_{n}),$$

> where $h = \frac{b-a}{n}$ , for some even integer $n$ , and $y_{k} = f( a + k h )$ . (Increasing $n$ increases the accuracy of the approximation.) Define a procedure that takes as arguments $f$ , $a$ , $b$ , and $n$ and returns the value of the integral, computed using Simpson’s Rule. Use your procedure to integrate cube between 0 and 1 (with  $n = 100$ and $n = 1000$ ), and compare the results to those of the integral procedure shown above.

- **Resposta**

    ```scheme
    #lang racket

    (define (sum term a next b)
      (if (> a b)
          0
          (+ (term a)
             (sum term (next a) next b))))

    (define (integral f a b dx)
      (define (add-dx x) (+ x dx))
      (* (sum f (+ a (/ dx 2.0)) add-dx b)
         dx))

    (define (cube x) (* x x x))

    (define (simpson f a b n)
      (let ((h (/ (- b a) n)))
        (define (Yk k)
          (f (+ a (* k h))))
        (define (k-term k)
          (* (cond ((or (= k 0) (= k n)) 1)
                   ((odd? k) 4)
                   (else 2))
             (Yk k)))
        (* (/ h 3) (sum k-term 0 add1 n))))
    ```

> **Exercise 1.30**: The sum procedure above generates a linear recursion. The procedure can be rewritten so that the sum is performed iteratively. Show how to do this by filling in the missing expressions in the following definition:

```scheme
(define (sum term a next b)
  (define (iter a result)
    (if ⟨??⟩
        ⟨??⟩
        (iter ⟨??⟩ ⟨??⟩)))
  (iter ⟨??⟩ ⟨??⟩))
```

- **Resposta**

    ```scheme
    #lang racket

    (define (sum term a next b)
      (define (iter a result)
        (if (> a b)
            result 
            (iter (next a) ( + result (term a))))) 
      (iter a 0))                                  

    ;; "a" avança com o termo next e result computa o valor com o termo a antigo
    ```