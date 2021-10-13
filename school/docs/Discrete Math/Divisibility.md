## Examples

### Example 1

<!-- prettier-ignore -->
!!! question "Prove by induction"
    $5^n-1$ is divisible by 4, for all $n \geq 1$

Suppose
: $p(n)$: "$5^n-1$ is divisible by 4"

one should prove that $p(n)$ is true for all $n \geq 1$

If $n=1$ then
: $5^1-1=5-1=4$ is divisible by 4.

$p(1)$ is true

Suppose $k \geq 1$ is given such that $p(k)$ is true.

So $5^k-1$ is divisible by 4
: $\exists t: 5^k-1=4t \Rightarrow  5^k=4t+1$

Note that

$$
\begin{aligned}
5^{k+1}-1&=5^k-1\\
&=5(4t+1)-1\\
&=20t+5-1\\
&=20t+4\\
&=4\underbrace{(5t+1)}_{t_1}=4t_1
\end{aligned}
$$

$5^{k+1}-1=4t_1$. So $5^{k+1}-1$ is also divisible by 4

---

### Example 2

<!-- prettier-ignore -->
!!! question "Prove by induction"
    Show that $10^n-1$ is divisible by 9, for all $n\geq1$

Suppose
: $p(n)$: "$10^n-1$ is divisible by 9"

one should prove that $p(n)$ is true for all $n \geq 1$

If $n=1$ then
: $10^1-1=10-1=9$ is divisible by 9.

$p(1)$ is true

Suppose $k \geq 1$ is given such that $p(k)$ is true.

So $10^k-1$ is divisible by 9

$\exists t: 10^k-1=9t \Rightarrow  10^k=9+1$

$$
\begin{aligned}
10(10^k-1)&=10(9t)\\
10^{k+1}-10&=90t\\
(10^{k+1}-1)-9&=90t\\
10^{k+1}-1&=90t+9\\
10^{k+1}-1&=9\underbrace{(10t+1)}_{t_1}\\
10^{k+1}-1&=9t_1
\end{aligned}
$$

$10^{k+1}-1$ is divisible by 9 and so $p(k+1)$ is true. By induction $p(n)$ is true for all $n\geq1$

---

### Example 3

<!-- prettier-ignore -->
!!! question "Prove by induction"
    For any integer $n\geq1$,
    : $n^2+n$ iis even

    (The product of two consecutive integer is divisible by 2)

Suppose
: $p(n)$: "$n^2+n$ is even"

one should prove that $p(n)$ is true for all $n \geq 1$

If $n=1$ then
: $(1)^2+1=1=1=2$ is even.

$p(1)$ is true

Suppose $k \geq 1$ is given such that $p(k)$ is true.

So $k^2+k$ is even

$\exists t: k^2+k=2t$

$$
\begin{aligned}
(k+1)^2+(k+1)&=k^2+2k+1+k+1\\
&=(k^2+k)+(2k+2)\\
&=2t+2(k+1)\\
&=2\underbrace{(t+k+1)}_{t_1}\\
(k+1)^2+(k+1)&=2t_1\\
\end{aligned}
$$

So $(k+1)^2+(k+1)$ is even and $p(k+1)$ is true. By induction $p(n)$ is true for all $n\geq1$
