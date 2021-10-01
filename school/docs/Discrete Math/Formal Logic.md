---
date updated: "2021-08-30T17:40:12-07:00"
---

## Introduction

**Propositions**: a statement or a proposition is a <u>declarative sentence</u> that's either true or false, but not both.

<u>Ex</u>: the following are propositions

- [x] Los Angeles is in U.S.A (true)
- [x] London is in France (false)
- [x] 2<4 (true)
- [x] 5=7 (false)

<u>Ex</u>: the following are not propositions

- [ ] What is your name? (question)
- [ ] Do your homework. (command)
- [ ] This sentence is false. (neither true or false)
- [ ] $x$ is an even number. (depends on what $x$ represents)

---

**Connectives**: In propositional logic, we assume a collection of <u>atomic propositions</u> are given.
$p,q,r,s,t,...$
Then we form compound propositions by using logical connectives to have propositional molecules.
**Compound propositions** are denoted by upper case letters $P,Q,R,...$

Logical Connective

| name          | represented by        | meaning                           |
| ------------- | --------------------- | --------------------------------- |
| negation      | $\lnot p$             | not p                             |
| conjunction   | $p \land q$           | "p and q" or "p but q"            |
| disjunction   | $p \lor q$            | "p or q" (or both)                |
| exclusive or  | $p \oplus q$          | either p or q (but not both)      |
| implication   | $p \to q$             | "if p then q" or "p implies q"    |
| biconditional | $p \leftrightarrow q$ | "p if and only if q" or "p iff q" |

<u>Ex</u>:

**suppose**

- $p =$ "cruise ships only go on big rivers"
- $q =$ "cruise ships go on the Hudson"
- $r =$ "The Hudson is not a big river"

**then**

$p \land q$
: "cruise ships only go on big rivers <u>and</u> cruise ships go on the Hudson"

$p \land q \to r$
: "<u>if</u> cruise ships only go on big rivers <u>and</u> cruise ships go on the Hudson <u>then</u> the Hudson is not a big river"

---

## Truth tables

| p   | q   | $\lnot p$ | $p \lor q$ | $p \land q$ | $p \to q$ | $p \leftrightarrow q$ |
| --- | --- | --------- | ---------- | ----------- | --------- | --------------------- |
| T   | T   | F         | T          | T           | T         | T                     |
| T   | F   | F         | T          | F           | F         | F                     |
| F   | T   | T         | T          | F           | T         | F                     |
| F   | F   | T         | F          | F           | T         | T                     |

<u>Ex</u>: if <u>it is raining</u> (p) then <u>I am wet</u> (q)

| p   | q   | $p \to q$ |
| --- | --- | --------- |
| T   | T   | T         |
| T   | F   | F         |
| F   | T   | T         |
| F   | F   | T         |

**Tautology**: always true

**Contradiction**: always false

**Contingency**: sometimes false sometimes true

<u>Ex</u>: determine if the proposition is a tautology, contradiction, or contingency

| p   | $\lnot p$ | $p \land \lnot p$ |
| --- | --------- | ----------------- |
| T   | F         | F                 |
| F   | T         | F                 |

this is a **contradiction**

---

| p   | q   | $\lnot q$ | $p \land \lnot q$ |
| --- | --- | --------- | ----------------- |
| T   | T   | F         | F                 |
| T   | F   | T         | T                 |

this is a **contingency**

---

| p   | q   | $p \land q$ | $\lnot (p \land q)$ | $p \lor (\lnot (p \land q))$ |
| --- | --- | ----------- | ------------------- | ---------------------------- |
| T   | T   | T           | F                   | T                            |
| T   | F   | F           | T                   | T                            |
| F   | T   | F           | T                   | T                            |
| F   | F   | F           | T                   | T                            |

this is a **tautology**

---

| p   | q   | $\lnot p$ | $p \lor q$ | $\lnot p \land (p \lor q)$ | $(\lnot p \land (p \lor q)) \to q$ |
| --- | --- | --------- | ---------- | -------------------------- | ---------------------------------- |
| T   | T   | F         | T          | F                          | T                                  |
| T   | F   | F         | T          | F                          | T                                  |
| F   | T   | T         | T          | T                          | T                                  |
| F   | F   | T         | F          | F                          | T                                  |

this is a **tautology**
