## Introduction

<!-- prettier-ignore -->
!!! question
    Forming cent amounts by using 3¢ and 5¢ coins

    For all integers $n \geq 8$, $n$ cents can be obtained by using 3¢ cent and 5¢ cent coins.

    Equivalently

    $$
    \begin{aligned}
    \exists a, \exists b, n=3a+5b \\
    \end{aligned}
    $$

    If
    : $P(n)$: "$n$ cents can be obtained by using 3¢ and 5¢"

    One should prove that
    : $P(n)$ is true for all $n \geq 8$

| Number of cents ¢ | How to obtain it |
| ----------------- | ---------------- |
| a                 | b                |

Suppose $k \geq 8$ is a given integer such that
: $P(k)$ is true. Then

$$\exists a, \exists b, k=3a+5b$$

One can show that $(k+1)$¢ can be also obtained using 3¢ and 5¢ coins.

Suppose $b \geq 1, \quad k=3 a+5 b$, then

$$
\begin{aligned}
k+1 &=3 a+5 b+1 \\
&=3 a+5 b-5+5+1 \\
&=3 a+(5 b-5)+6 \\
&=(3 a+6)+(5 b-5) \\
&=3\underbrace{(a+2)}_{a_{1}}+5 \underbrace{(b-1)}_{b_{1}}\\
k+1 &=3 a_{1}+5 b,
\end{aligned}
$$

Suppose $k=3 a$

$$
\begin{aligned}
k+1 &=3 a+1 \\
&=3 a-9+9+1 \\
&=(3 a-9)+10 \\
&=3\underbrace{({a-3})}_{a_{1}}+5 \underbrace{(2)}_{b_{1}}\\
k+1 &=3 a_{1}+5 b_{1}
\end{aligned}
$$

Note that we prove that

1. $P(8)$ is true
2. If $k \geq 8$ is given such that $P(k)$ is true then $P(k+1) is also true.

## Principle of Mathematical Induction

Suppose $P(n)$ is a property that is for integer $n$ and $a$ is a fixed integer.

Suppose the following two statments are true.

1. $P(a)$ is true.
2. For any given integer $k \geq a$, if $P(k)$ is true then $P(k+1)$ is also true.

: Equivalently $\underbrace{P(k) \Rightarrow P(k+1)}_{\text{Inductive step}}$

Then by mathematical induction $P(n)$ is true for all integers $n \geq a$


### Example 1

Prove by induction

$$
\begin{aligned}
1+2+3+\dots+n=\frac{n(n+1)}{2}, \forall n \geq 1 \\
\end{aligned}
$$

Suppose

$$
\begin{aligned}
P(n) = 1+2+3+\dots+n=\frac{n(n+1)}{2}, \forall n \geq 1 \\
\end{aligned}
$$

1) Suppose $k \geq 1$ is given such that $P(k)$ is true. So

$$
\begin{aligned}
1+2+3+\dots+k=\frac{k(k+1)}{2} \\
\end{aligned}
$$

Note that

$$
\begin{aligned}
\underbrace{1+2+3+\cdots+k+(k+1)} &{\left.=\frac{K(k+1)}{p(k)}+k+1\right)} \\
{ } &{=\frac{k(k+1)+2(k+1)}{2}} \\
{1+2+3+\cdots+k+1} &{=\frac{(k+1)(K+2)}{2}} \end{array
\end{aligned}
$$

So $P(k+1)$ is also true.

By induction $P(n)$ is true for all $n \geq 1$

### Example 2

Prove by induction

$$
\begin{aligned}
4^3+4^4+4^5\dots+4^n=\frac{4(4^n-16)}{3}, \forall n \geq 3
\end{aligned}
$$

Suppose

$$
\begin{aligned}
P(n)=4^3+4^4+4^5\dots+4^n=\frac{4(4^n-16)}{3}
\end{aligned}
$$

One should prove that
: $P(n)$ is true for all $n \geq 3$

If $n=3 \Rightarrow 4^3=\frac{4(4^3-16)}{3}=\frac{4(64-16)}{3}=4(16)=64=4^3$

Suppose $k \geq 3$ is given such that $P(k) is true. So

$$
\begin{aligned}
4^3+4^4+4^5\dots+4^k=\frac{4(4^k-16)}{3}
\end{aligned}
$$

Note that

$$
\begin{aligned}
\underbrace{(4^3+4^4+4^5\dots+4^k)}_{P(k)}+4^{k+1}&=\frac{4(4^k-16)}{3}+4^{k+1}\\
&=\frac{4(4^k-16)+3(4^{k+1})}{3}\\
&=\frac{4^{k+1}-64+3(4^{k+1})}{3}\\
&=\frac{4(4^{k+1})-64}{3}\\
&=\frac{4(4^{k+1}-16)}{3}
\end{aligned}
$$

So $P(k+1)$ is also true.

By induction $P(n)$ is true for all $n \geq 3$
