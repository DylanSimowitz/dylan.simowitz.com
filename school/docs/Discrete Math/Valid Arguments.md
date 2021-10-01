---
date updated: "2021-09-13T11:23:27-07:00"
---

## Definition

A valid argument is a finite set (or collection) of propositions $P_1,P_2,...,P_n$ called <u>premises</u>, together with a proposition $C$ called the <u>conclusion</u> such that the implication

- $P_1 \land P_2 ... \land P_n \to C$

is always true or a tautology. In this case we write

- $P_1 \land P_2 ... \land P_n \Rightarrow C$

> Note that if one of the premises $P_1,P_2,...P_n$ is false then we have a valid argument.

---

## Notation

### Inferential Form

A logical argument with premises $P_1,P_2,...P_n$ and the conclusion $C$ can be denoted by the following inferential form

> TAKE SCREENSHOT

<u>EX</u>:
Determine if the given argument is valid.

- If John <u>has a B in calculus</u>($p$), <u>he will graduate</u>($q$).
- John does <u>have a B in calculus</u>($p$).
- Therefore <u>he will graduate</u>($q$).
  : The argument is valid if $(p \to q) \land p \to q$ is a tautology

| p   | q   | $p \to q$ | $(p \to q) \land p$ | $(p \to q) \land p \to q$ |
| --- | --- | --------- | ------------------- | ------------------------- |
| T   | T   | T         | T                   | T                         |
| T   | F   | F         | F                   | T                         |
| F   | T   | T         | F                   | T                         |
| F   | F   | T         | F                   | T                         |

---

- If <u>Harvey is a dentist</u>($p$), then <u>Harvey drills teeth</u>($q$).
- Harvey does <u>not drill teeth</u>($\lnot q$).
- Therefore Harvey is <u>not a dentist</u>($\lnot p$).

  > REVIEW THIS IN LECTURE VIDEO

  > Note that by contrapositive law $p \to q \equiv \lnot q \to \lnot p$

  $(p \to q) \land \lnot q \Rightarrow p$

---

- If <u>Mary wears the green hat</u>($p$), then <u>she leads the band</u>($q$)
  : $(p \to q)$
- Mary does not wear the green hat
  : ($\lnot p$)
- Therefore, <u>Mary does not lead the band</u>($\lnot q$)
  : $(p \to q) \land (\lnot p) \Rightarrow \lnot q$

  | p | q | $p \to q$ | $\lnot p$ | $(p \to q) \land \lnot p$ | $\lnot q$ | $(p \to q) \land (\lnot p) \to \lnot q$|

---

- If <u>I work</u>($p$), I can <u>not study</u>
  : $(\lnot q)$.
- Either <u>I study</u>
- Therefore, I pass mathematics
  : $(p \to \lnot q) \land (q \lor r) \land p \Rightarrow r$

| p   | q   | r   | $\lnot q$ | $p \to \lnot q$ | $q \lor r$ | $(p \to \lnot q) \land (q \lor r) \land p$ | $(p \to \lnot q) \land (q \lor r) \land p \Rightarrow r$ |
| --- | --- | --- | --------- | --------------- | ---------- | ------------------------------------------ | -------------------------------------------------------- |
| T   | T   | T   | F         | F               | T          | F                                          | T                                                        |
| T   | T   | F   | F         | F               | T          | F                                          | T                                                        |
| T   | F   | T   | T         | T               | T          | T                                          | T                                                        |
| F   | T   | T   | F         | T               | T          | F                                          | T                                                        |
| F   | F   | T   | T         | T               | T          | F                                          | T                                                        |
| T   | F   | F   | T         | T               | F          | F                                          | T                                                        |
| F   | F   | F   | T         | F               | F          | F                                          | T                                                        |
| F   | T   | F   | F         | T               | T          | F                                          | T                                                        |

The argument is valid because it's a tautology
