## Introduction

<!-- prettier-ignore -->
!!! note "Definition"
    The strong induction is similar to ordinary induction.
    It consists of a basic step `B` and inductive step `I`.

    However, the basic step may contain proofs for several initial values, and in the inductive step the truth of predicates $p(k)$ is assumed not just for one value of $k$ but also for all values through $k$, and then the truth of $p(k+1)$ is proved.

Suppose $p(n)$ is a property that is defined for ineger $n$ and $a$ and $b$ are fixed numbers with $a\leq b$ such that

`B`: $p(a), p(a+1),\dots,$ and $p(b)$ are true.

`I`: Suppose $k\geq a$ is given such that
: $p(a), p(a+1),\dots,p(k-1)$ and $p(k)$ are true.
: Then $p(k+1)$ is true.
: By induction $p(n)$ is true for all $n\geq a$.

## Examples

### Example 1

<!-- prettier-ignore -->
!!! question "Prove by strong induction"
    Suppose a sequence $\{a_n\}$ is given by
    : $a_n=7a_{n-1}-10a_{n-2}$, for all $n\geq2$
    : $a_0=5, a_1=16$

    Show that $a_n=3(2^n)+2(5^n), \forall n\geq0$

Suppose
: $p(n)$: "$a_n=3(2^n)+2(5^n)$"

one should prove that $p(n)$ is true for all $n \geq 0$

`B`: If $n=0\Rightarrow a_0=3(2^0)+2(5^0)=3+2=5$
: $p(0)$ is true

`B`: If $n=1\Rightarrow a_1=3(2^1)+2(5^1)=6+10=16$
: $p(1)$ is true

`I`: Suppose $k\geq1$ is given such that $p(0),p(1),\dots,p(k-1),$ and $p(k)$ are true.
: One should prove that $p(k+1)$ is true.

Therefore:
: $p(k-1)$ is true $\Rightarrow a_{k-1}=3(2^{k-1})+2(5^{k-1})$
: $p(k)$ is true $\Rightarrow a_{k}=3(2^{k})+2(5^{k})$
: Note that

$$
\begin{aligned}
a_{k+1}&=7a_k-10a_{k-1}\\
&=7[3(2^k)+2(5^k)]-10[3(2^{k-1})+2(5^{k-1})]\\
&=21(2^k)+14(5^k)-30(2^{k-1})-20(5^{k-1})\\
&=2^{k-1}(21(2)-30)+5^{k-1}(14(5)-20)\\
&=2^{k-1}(42-30)+5^{k-1}(70-20)\\
&=2^{k-1}(12)+5^{k-1}(50)\\
&=2^{k-1}(4)(3)+5^{k-1}(25)(2)\\
&=2^{k-1}(2^2)(3)+5^{k-1}(5^2)(2)\\
a_{k+1}&=3(2^{k+1})+2(5^{k+1})\\
\end{aligned}
$$

So $p(k+1)$ is true and by induction $p(n)$ is true for all $n\geq0$
