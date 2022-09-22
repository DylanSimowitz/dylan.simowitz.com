---
date updated: "2021-09-15T12:11:37-07:00"
---

## Definition

A mathematical system consists of the following:

1. Axioms:
   - Propositions that are assumed to be true
2. Definitions:
   - Definitions are going to be used to create new concepts from old ones.
3. Undefined terms:
   - Corresponding to the primitive concepts of the system.
4. Theorems:
   - Proportions that can be proved to be true.
5. Proofs:
   - An argument that establishes the truth of a theorem or proposition.

<u>Ex</u>:
<u>Definitions</u>

- If $n$ is an integer, then $n$ is even $\Leftrightarrow$ there is an integer $k$ such that $n=2k$

- $n$ is even $\Leftrightarrow \exists k : n=2k$

- $n$ is odd $\Leftrightarrow \exists k : n=2k+1$

---

1. If $a$ and $b$ are integers, show that $6a^2b$ is even.

   $6a^2b=2(3a^2b)=2k$

2. If $a$ and $b$ are integers, show that $10a+8b+1$ is odd.
   $10a+8b+1=2(5a+4b)+1=2k+1$
3. If $n$ is an integer, then $2n+11$ is odd.
   $2n+11=2n+10+1=2(n+5)+1=2k+1$
   $\exists k : 2n+11=2k+1$

---

## Methods of Proof

1. Direct Proof:
   1. Express the given statement to be proved in the following form.
      $\forall x (P(x) \to Q(x))$
   2. Select an element $x$ for which $P(x)$ is true, and show that $Q(x)$ is also true by using definitions, theorems, and the rules of logical arguments.

<u>Ex</u>:
Prove that the sum of two even integers is even.
One should prove that if $m$ and $n$ are even integers, then $m+n$ is also even
Suppose $m$ and $n$ are even integers.

$m$ is even $\Rightarrow \exists k_1: m=2k_1$
Suppose $m$ and $n$ are even integers.
: $m$ is even $\Rightarrow \exists k_1: m=2k_1$
: $n$ is even $\Rightarrow \exists k_2: n=2k_2$

$\Rightarrow m+n=2k_1+2k_2=2(k_1+k_2)=2k$
: $k_1+k_2=k$

$\exists k : m+n = 2k$

<u>Ex</u>:
If $n$ is even, then $n^2$ is also even.

Suppose $n$ is an even integer
: $\exists k : n=2k$
: $\Rightarrow n^2=(2k)^2=4k^2=2(2k^2)=2k$

$\exists k : n^2=2k$
