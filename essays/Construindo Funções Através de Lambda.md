# Sumário_6

Concluído: No
Criado: Oct 25, 2020 11:42 AM
Source: SICP Book
Ultimo Edit: Oct 29, 2020 1:15 AM

# Construindo Funções Através de *Lambda*

Como visto na função `sum` , parece estranho termos que definir procedimentos tão triviais como `pi-term` ou `pi-next` apenas para que possamos usá-los como argumentos na função (*procedure*) de alta ordem. Ao invés de definirmos esses termos, seria mais conveniente de especifica-los diretamente, digamos, sem precisar "batizá-los" com algum nome. Podemos fazer isso através do conceito de *Lambda.*

```scheme
(lambda (x) (+ x 4))
```

```scheme
(lambda (x) (/ 1.0 (* x (+ x 2))))
```

Nossa função `pi-sum` pode ser expressa agora sem precisar de nenhuma definição de funções auxiliares, observe:

```scheme
(define (pi-sum a b)
  (sum (lambda (x) (/ 1.0 (* x (+ x 2))))
       a
       (lambda (x) (+ x 4))
       b))
```

Novamente, usando *lambda*, nós podemos escrever a função de `integral` da seguinte forma:

```scheme
(define (integral f a b dx)
  (* (sum f (+ a (/ dx 2.0))
            (lambda (x) (+ x dx))
            b)
     dx))
```

Em geral, *lambda* é usado para criar funções da mesma maneira que criávamos com o `define`, porém agora sem o nome que antes servia como identificação da mesma. Confira a fórmula geral de uma função *lambda*:

```scheme
(lambda (⟨formal-parameters⟩) ⟨body⟩)
```

A leitura da expressão lambda é dada da seguinte maneira:

(lambda                     (x)     (+      x          4))
    |                               |        |       |           |
Função que recebe     x  e soma  x  com 4

## Usando *let* Para Criar Variáveis Locais

Outra utilidade do conceito de lambda é poder criar variáveis locais. Frequentemente precisamos de variáveis locais em funções além daquelas já passadas nos parâmetros formais. Imagine o seguinte exemplo:

$$f(x,y) = x(1+xy)^2 + y(1-y) +(1+xy)(1-y),$$

Essa mesma função poderia também ser escrita da seguinte maneira:

$$
a = 1 + xy, \\
b = 1 -y, \\
f(x,y) = xa^2 + yb + ab.

$$

No processo de escrita de uma função que compute $f$, nós gostaríamos de poder incluir as variáveis locais necessárias, não apenas $x$ e $y$, mas também as intermediarias como $a$ e $b$. Uma forma de se resolver isso seria através do uso de funções auxiliares que vinculam as variáveis locais.

```scheme
(define (f x y)
  (define (f-helper a b)
    (+ (* x (square a))
       (* y b)
       (* a b)))
  (f-helper (+ 1 (* x y)) 
            (- 1 y)))
```

Porém como vimos o conceito de *lambda* e como ele pode facilitar muito de nossa vida na programação, vamos refazer esta função acima com o uso do seu conceito:

```scheme
(define (f x y)
  ((lambda (a b)
     (+ (* x (square a)) 
        (* y b) 
        (* a b)))
   (+ 1 (* x y))
   (- 1 y)))
```

Porém graças a utilidade desta construção, podemos usar uma forma especial (*special form*) ainda mais conveniente para nos ajudar, o `let`

```scheme
(define (f x y)
  (let ((a (+ 1 (* x y)))
        (b (- 1 y)))
    (+ (* x (square a))
       (* y b)
       (* a b))))
```

A forma geral da expressão `let` pode ser vista da seguinte maneira:

```scheme
(let ((⟨var₁⟩ ⟨exp₁⟩)
      (⟨var₂⟩ ⟨exp₂⟩)
      …
      (⟨varₙ⟩ ⟨expₙ⟩))
  ⟨body⟩)
```

E pode ser "lida" da seguinte forma:

let  ⟨var₁⟩ have the value ⟨exp₁⟩ and
      ⟨var₂⟩ have the value ⟨exp₂⟩ and
    …
      ⟨varₙ⟩ have the value ⟨expₙ⟩
  in ⟨body⟩

A primeira parte da expressão `let` é uma lista de pares de nome de expressões (name-expression).Quando o `let` é avaliado, cada nome é associado a um valor correspondente na expressão. O corpo da expressão `let` tem esses nomes vinculados a variáveis locais. A forma como tudo isto acontece é que a expressão `let` é interpretada como uma sintaxe alternativa para:

```scheme
((lambda (⟨var₁⟩ … ⟨varₙ⟩)
   ⟨body⟩)
 ⟨exp₁⟩
 …
 ⟨expₙ⟩)
```

---

## Exercícios

> **Exercise 1.34**: Suppose we define the procedure:

```scheme
(define (f g) (g 2))
```

> Then we have

```scheme
(f square)
> 4
```

```scheme
(f (lambda (z) (* z (+ z 1))))
> 6
```

> What happens if we (perversely) ask the interpreter to evaluate the combination (f f)? Explain.

- **Resposta**

    A função f recebe como argumento uma outra função, logo quando a função f passada for chamada, irá resultar em um erro pois 2 é um número e não uma função

---

## Funções como Métodos Gerais

Foi introduzido anteriormente o conceito de **funções compostas** como um mecanismo para abstrair padrões de operações numéricas de moo a torná-los independentes, ou seja, independente  do número particular envolvido na operação, funcionando de forma geral

Com as funções de ordem superior (função de integral), podemos observar um tipo mais poderoso de abstração: funções usadas para expressar métodos gerais de computação, independente das funções particulares envolvidas.

Nesta seção será discutido dois exemplos mais elaborados:

- **Métodos Gerais** para encontrar zeros e pontos fixos de funções
- Como expressar diretamente esses métodos em forma de função

### Encontrar Raízes de Equações através do método de bissecção

O método de bissecção é uma técnica simples, porém poderosa. Com ela é possível encontrarmos as raízes de uma equação $f(x) = 0$, onde $f$ é uma **função contínua.** A ideia é esta, se nos for dado os pontos $a$ e $b$ em que $f(a) <0<f(b)$, então $f$ deve ter pelo menos um valor $0$ entre $a$ e $b$.

Para localizar o valor zero, seja $x$ a média de $a$ e $b$ , então compute $f(x)$. Caso $f(x) <0$, então   $f$ deve ter um valor zero entre $x$ e $b$. Continuando, podemos identificar intervalos cada vez menores nos quais $f$ deve ter um valor zero. Quando chegarmos a um ponto em que o intervalo é pequeno o suficiente, o processo acaba.

Uma vez que o intervalo de incerteza é reduzido pela metade em cada etapa do processo, o número de etapas necessárias cresce como $Θ(log(L/T))$, onde $L$ é o comprimento do intervalo original e $T$ é o erro de tolerância(ou seja, o tamanho do intervalo que consideraremos "suficientemente pequeno"). 

Aqui está uma função que implementa esta estratégia: 

```scheme
(define (search f neg-point pos-point)
  (let ((midpoint 
         (average neg-point pos-point)))
    (if (close-enough? neg-point pos-point)
        midpoint
        (let ((test-value (f midpoint)))
          (cond 
           ((positive? test-value)
            (search f neg-point midpoint))
           ((negative? test-value)
            (search f midpoint pos-point))
           (else midpoint))))))
```

Assumimos que inicialmente recebemos a função $f$ junto com os pontos nos quais seus valores são negativos e positivos. Primeiro calculamos o ponto médio dos dois pontos dados, em seguida verificamos se o intervalo dado é pequeno o suficiente e, se for, simplesmente retornamos o ponto médio como nossa resposta. Caso o contrário, calculamos como um valor de teste o valor de $f$ no ponto médio.

Se o valor do teste for positivo, então continuamos o processo com um novo intervalo que vai do ponto negativo original ao ponto médio. Se o valor do teste for negativo, continuamos com o intervalor do ponto médio ao ponto positivo.

Finalmente, existe a possibilidade do valor do teste ser $0$, caso em que o ponto médio é a própria raiz que procurávamos.

Para testar se os pontos finais estão "próximos o suficiente", podemos usar a seguinte função:

```scheme
(define (close-enough? x y) 
  (< (abs (- x y)) 0.001))
```

Usar a função `Search` não é uma boa escolha, pois acidentalmente podemos dar a ela pontos em que os valores de $f$ não tem o sinal necessário, nesse caso obteríamos uma resposta errada. Em vez disso, usaremos a pesquisa por meio da seguinte função, que verifica qual dos pontos de extremidade tem um valor de função negativo e qual tem um valor positivo e, chama o procedimento de pesquisa de acordo com o valor obtido.

Se a função tiver o mesmo sinal nos dois pontos dados, o método do intervalo não pode ser usado, caso em que a função sinaliza um erro.

```scheme
(define (half-interval-method f a b)
  (let ((a-value (f a))
        (b-value (f b)))
    (cond ((and (negative? a-value) 
                (positive? b-value))
           (search f a b))
          ((and (negative? b-value) 
                (positive? a-value))
           (search f b a))
          (else
           (error "Values are not of 
                   opposite sign" a b)))))
```

O exemplo a seguir usa o método de bissecção para aproximar $\pi$ como raiz entre $2$ e $4$ de $\sin x=0$:

```scheme
(half-interval-method sin 2.0 4.0)
> 3.14111328125
```

Outro exemplo, agora com a equação $x^3-2x-3=0$ entre $1$ e  $2$:

```scheme
(half-interval-method 
 (lambda (x) (- (* x x x) (* 2 x) 3))
 1.0
 2.0)
> 1.89306640625
```

### Encontrando Pontos Fixos Das Funções

Um número $x$ é chamado de ponto fixo de uma função quando $x$ satisfaz a equação $f(x) = x$. Para algumas funções $f$, podemos localizar um ponto fixo começando com uma estimativa inicial e aplicando $f$ repetidamente até que o valor não mude muito

$$f(x),f(f(x)),f(f(f(x))),...$$

Usando está ideia, podemos conceber uma função de ponto fixo que toma como entradas uma função e uma estimativa inicial e produz uma aproximação de um ponto fixo da função. 

Aplicamos a função repetidamente até encontrarmos dois valores sucessivos cuja diferença é menor do que alguma tolerância prescrita:

```scheme
(define tolerance 0.00001)

(define (fixed-point f first-guess)
  (define (close-enough? v1 v2)
    (< (abs (- v1 v2)) 
       tolerance))
  (define (try guess)
    (let ((next (f guess)))
      (if (close-enough? guess next)
          next
          (try next))))
  (try first-guess))
```

Por exemplo, nós podemos usar este método para aproximar o ponto fixo da função cosseno, começando com $1$ como estimativa inicial:

```scheme
(fixed-point cos 1.0)
> .7390822985224023
```

Vejamos agora como outro exemplo, a solução da equação $y = \sin y + \cos y$ :

```scheme
(fixed-point (lambda (y) (+ (sin y) (cos y)))
             1.0)
> 1.2587315962971173
```

O processo de ponto fixo é uma reminiscência do processo que usamos para encontrar raízes quadradas, ambos são baseados na ideia de melhorar repetidamente uma estimativa até que o resultado satisfaça algum critério. Na verdade podemos formular prontamente o cálculo da raiz quadrada assim como a pesquisa de ponto fixo.

Calcular a raiz quadrada de algum número $x$ requer encontrar um $y$ tal que $y^2 = x$. Colocando está equação na forma equivalente $y = \frac {x}{x}$, nós reconhecemos que estamos procurando um ponto fixo da função $y \mapsto \frac{x}{y}$, e podemos portanto, tentar calcular as raizes quadradas da seguinte forma:

```scheme
(define (sqrt x)
  (fixed-point (lambda (y) (/ x y))
               1.0))
```

Infelizmente, essa busca de ponto fixo não converge. Considere uma estimativa inicial $y_{1}$, a próxima estimativa é $y_{2} = \frac{x}{y_{1}}$ e a próxima será $y_{3} = \frac{x}{y_{2}} = \frac{x}{(\frac{x}{y_{1}})}$. Isto resulta em loop infinito no qual as duas suposições $y_{1}$ e  $y_{2}$ se repetem continuamente, oscilando em torno da resposta.

Uma maneira de controlar estas oscilações é evitar que as suposições mudem tanto. Uma vez que a resposta está sempre entre nosso palpite $y$ e $\frac {x}{y}$, podemos fazer um novo palpite que não está tão longe desses dois valores. Podemos fazer isto calculando a média de $y$ com $\frac {x}{y}$, de modo que o próximo palpite depois de $y$ seja $\frac{1}{2}(y+\frac{x}{y})$ ao invés de somente $\frac {x}{y}$. O processo de fazer tal sequencia de palpites é simplesmente o processo de olhar para um ponto fixo de $y \mapsto \frac{1}{2} (y+\frac{x}{y})$:

```scheme
(define (sqrt x)
  (fixed-point 
   (lambda (y) (average y (/ x y)))
   1.0))
```

Com essa modificação, a função de raiz quadrada funciona. Na verdade, se desvendarmos as definições, podemos ver que a sequência de aproximações da raiz quadrada gerada é precisamente a mesma gerada pela nossa função anterior. 

Essa abordagem de calcular a média de aproximações sucessivas de uma solução, uma técnica que chamamos de *average damping*, muitas vezes auxilia na convergência de pesquisas de ponto fixo.