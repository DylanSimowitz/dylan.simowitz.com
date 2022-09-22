## Definition

> A predicate (or propositional function) is a statement containing variables.

<u>Ex</u>:
The following are predicates

1. $x+2=7$
   - predicate with one variable
2. $x$ is france
3. $x+y \leq 10$

## Notation

A predicate $P$ containing $n$ variables $x_1,x_2,x_3,...,x_n$ is denoted by $P(x_1,x_2,x_3,...,x_n)$.

So $P(x,y,z)$ is a predicate in 3 variables.

Therefore, $P(x), Q(x,y),...$ are predicates

A set of values in which the variables in a predicate may assume their values is called the universal domain of discourse or the domain of the predicate.

<u>Ex</u>:
Suppose $D=N$ is the set of all natural numbers, and let $P(x,y) : x+y=12$

Then $P(3,9) : 3+9=12$ is true.
But $P(2,5) : 2+5=12$ is false.

## Quantifiers

Given a predicate $P(x)$, the statement
: there is some x such that $P(x)$
: for some x, $P(x)$ is true
: there is a value of $x$ such that $P(x)$ is true

is denoted by $(\exists x)P(x)$ and is called <u>the essential quantifiers</u>.
Similarly, the statement
: for all $x, P(x)$
: for all values of $x, P(x)$ is true

is denoted by $(\forall x)P(x)$ and is called <u>the universal quantifiers</u>.

<u>Ex</u>:

1. If $P(x) : x+2=7$, then $x=5$ is a solution. Therefore, $(\exists x)P(x)$ means the statement is true for $x=5$.
   > Note that in this case $(\forall x)P(x)$ is false.
2. If $Q(x) : (x+1)^2=x^2+2x+1$, then the statement is true for all values of $x$. Therefore, $(\forall x)Q(x)$ means the statement is true for all values of $x$.

<u>Ex</u>:
Suppose $D=Z$ is the set of all integers. Transcribe each predicate into a logical notation.

1. For each value of $x$, one can find a value of $y$ such that $x+y=0$
   : $P(x,y) : x+y=0$
   : $(\forall x \exists y)\ P(x,y)$
   : This is true

2. There is some value of $x$ such that for all values of $y$, we have $xy=0$.
   : $P(x,y) : xy=0$
   : $(\exists x \forall y)\ P(x,y)$
   : This is true ($x=0$)

---

### Negation of a Quantifier

1. $\lnot(\forall x P(x))=?$
   Note that the negation of the proposition $(\forall x)P(x)$ is:

> it is not the case that $P(x)$ is true for all values of $x$
>
> Equivalently, there is some value of $x$, for which $P(x)$ is not true

Therefore,
$\lnot(\forall x P(x))\equiv (\exists x)(\lnot P(x))$ $\lnot(\exists x P(x))\equiv \forall x(\lnot P(x))$

<u>Ex</u>:
Find the negation of each statement

1. $\forall x(x^2\lt 0)$
   $\lnot(\forall x(x^2\lt 0))\equiv (\exists x)(x^2\geq 0)$
2. $\forall x \exists y (x+y=1)$
   $\lnot(\forall x \exists y (x+y=1))\equiv \exists x \forall y(x+y\neq 1)$
3. $\forall x \forall y(x\gt y \to x^2\gt y^2)$
   $\lnot(\forall x \forall y(x\gt y \to x^2\gt y^2))\equiv \exists x \exists y(x\gt y \land x^2\leq y^2)$
4. $\forall x(x \gt 2 \to x^2 \gt 4)$
   $\lnot(\forall x(x \gt 2 \to x^2 \gt 4))\equiv \exists x(x\gt 2 \land x^2 \leq 4)$
