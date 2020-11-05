---
layout: essay
type: essay
title: Utilizando Lambda em Lisp (Exercícios)
# All dates must be YYYY-MM-DD format!
date: 2020-11-05
labels:
  - Iniciação Cientifíca
---

## Exercise 1.35

> Show that the golden ratio φ (1.2.2) is a fixed point of the transformation x ↦ 1 + 1 / x , and use this fact to compute φ by means of the fixed-point procedure.

- **Resposta**

    ```scheme
    (define tolerance 0.00001)
    (define (fixed-point f first-guess)
      (define (close-enough? v1 v2)
    	(< (abs (- v1 v2)) tolerance))
      (define (try guess)
    	(let ((next (f guess)))
    	  (if (close-enough? guess next)
    		  next
    		  (try next))))
      (try first-guess))

    > (fixed-point (lambda (x) (+ 1 (/ 1 x))) 1.0)
    > 1.6180327868852458
    ```

## Exercise 1.36

> Modify fixed-point so that it prints the sequence of approximations it generates, using the `newline` and display primitives shown in Exercise 1.22. Then find a solution to $x^x = 1000$ by finding a fixed point of $x \mapsto log(1000)/log(x)$ (Use Scheme’s primitive log procedure, which computes natural logarithms.) Compare the number of steps this takes with and without average damping. (Note that you cannot start fixed-point with a guess of 1, as this would cause division by $log(1)=0$.)

- **Resposta**

    ```scheme
    (define (fixed-point f first-guess)
  (define (close-enough? v1 v2)
    (< (abs (- v1 v2))
       tolerance))
  (define (try guess)
    (display guess)
    (newline)
    (let ((next (f guess)))
      (if (close-enough? guess next)
          next
          (try next))))
  (try first-guess))

  ((lambda () (fixed-point (lambda (y) (+ 1 (/ 1 y))) 1.0))) 
  
  ;; https://github.com/dragonwasrobot/sicp-exercises/blob/master/1-building-abstractions-with-procedures.scm

  (define x-power-x (fixed-point (lambda (y) (/ (log 1000) (log y))) 2.0))

    ```

## Exercise 1.37

> **1**. An infinite continued fraction is an expression of the form

$$f= \cfrac{N_{1}}{D_{1}+\cfrac{N_{2}}{D_{2}+\cfrac{N_{3}}{D_{3}+\cdots}}}$$

> As an example, one can show that the infinite continued fraction expansion with the $N_{i}$ and the $D_{i}$ all equal to 1 produces $1 / φ$ , where $φ$ is the golden ratio (described in 1.2.2). One way to approximate an infinite continued fraction is to truncate the expansion after a given number of terms. Such a truncation—a so-called finite continued fraction *k-term finite continued fraction*—has the form

$$\cfrac{N_{1}}{D_{1}+\cfrac{N_{2}}{...+\cfrac{N_{k}}{D_{k}}}}$$

> Suppose that n and d are procedures of one argument (the term index i ) that return the $N_{i}$ and $D_{i}$ of the terms of the continued fraction. Define a procedure cont-frac such that evaluating (`cont-frac n d k`) computes the value of the k -term finite continued fraction. Check your procedure by approximating $1 / φ$ using

```scheme
(cont-frac (lambda (i) 1.0)
           (lambda (i) 1.0)
           k)
```

> for successive values of k. How large must you make k in order to get an approximation that is accurate to 4 decimal places?

- **Resposta**

    ```scheme
    (define (cont-frac n d k)
       (define (cont-frac-rec i)
          (if (= i > k)
              0
              (/ (n i) (+ (d i) (cont-frac-rec (+ i 1))))))
       (cont-frac-rec 1))
       
    (/ 1 (cont-frac (lambda (i) 1.0) (lambda (i) 1.0) 12))
    > 1.6180555555555558

    ;; É necessário pelo menos 11 no valor de K para que tenha uma aproximação 
    ;; precisa de até 4 casas decimais
    ```

> **2**. If your `cont-frac` procedure generates a recursive process, write one that generates an iterative process. If it generates an iterative process, write one that generates a recursive process.

- **Resposta**

    ```scheme

    ```

## Exercise 1.38

> In 1737, the Swiss mathematician Leonhard Euler published a memoir *De Fractionibus Continuis*, which included a continued fraction expansion for $e − 2$where $e$ is the base of the natural logarithms. In this fraction, the $N_{i}$ are all 1, and the $D_{i}$ are successively 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8, …. Write a program that uses your `cont-frac` procedure from Exercise 1.37 to approximate $e$ , based on Euler’s expansion.

- **Resposta**

    ```scheme
    (define (d-euler i)
      0)

    (define (display-serie f n)
      (define (rec i)
        (display (f i)) (display ", ")
        (if (= i n)
            (newline)
            (rec (add1 i))))
      (rec 1))

    (display-serie d-euler 12)

    ;; Essa procedure tem a ideia de imprimir o esqueleto da 
    ;; lista sucessiva de números (0,0,0,0,0,0,0,0,0)

    (define (d-euler i)
      (if (= (modulo i 3) 2)
          (* 2(/ (+ i 1) 3))
          1))

    ;; Na procedure acima, o if irá verificar se o módulo do número por 3 é par
    ;; caso sim, o valor dele será atribuido através do calculo: (* 2(/ (+ i 1) 3))
    ;; imagine o numéro 2 = 2 + 1 -> 3 -> 3/3 = 1 -> 1*2 = 2

    ;; por fim, temos a função completa:

    (define (cont-frac-iter n d k)
      (define (iter i result)
        (if (= 0 i)
            result
            (iter (sub1 i) (/ (n i) (+ result (d i))))))
      (iter (sub1 k) (/ (n k) (d k))))

    (define (d-euler i)
      (if (= (modulo i 3) 2)
          (* 2(/ (+ i 1) 3))
          1))

    (define (display-serie f n)
      (define (rec i)
        (display (f i)) (display ", ")
        (if (= i n)
            (newline)
            (rec (add1 i))))
      (rec 1))

    (display-serie d-euler 12)

    ;  exact result is 0.718281828459
    (cont-frac-iter (lambda (i) 1.0)
                     d-euler
                     1)  (newline)

    > 0.7182818284590452

    ;; Agradecimentos ao codology pelo auxílio
    ;; https://codology.net/post/sicp-solution-exercise-1-38/
    ```

## Exercise 1.39

> A continued fraction representation of the tangent function was published in 1770 by the German mathematician J.H. Lambert:

$$\tan x= \cfrac{x}{1-\cfrac{x²}{3{}-\cfrac{x²{}}{5{}-\cdots}}}$$

> where x is in radians. Define a procedure (`tan-cf x k`) that computes an approximation to the tangent function based on Lambert’s formula. k specifies the number of terms to compute, as in Exercise 1.37.

- **Resposta**

    ```scheme
    #lang racket

    (define (cont-frac-iter n d k)
      (define (iter i retorno)
        (if (= 0 i)
            retorno
            (iter (sub1 i) (/ (n i) (+ retorno (d i))))))
      (iter (sub1 k) (/ (n k) (d k))))

    (define (tan-cf x k)
      (let ((a (- (* x x))))
        (cont-frac-iter (lambda (i) (if (= i 1) x a))
                   (lambda (i) (- (* i 2) 1))
                   k)))

    > (display (tan-cf 1 8)) (newline)
    > 1763649/1132426 = 1.55740772465
    ```
