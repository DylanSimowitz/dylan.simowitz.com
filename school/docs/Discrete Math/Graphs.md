## Definition

> A graph $G$ consists of two things:
>
> 1. The vertex set $V$, whose elements are called <u>vertices</u>, nodes, or points.
> 2. The edge set $E$ or set of edges connecting pairs of vertices. If the edges are directed, then the graph is called a directed graph.

Each edge is associated with a pair of vertices

![Pasted image 20210929115950.png](attachments/Pasted%20image%2020210929115950.png)

## Degrees

The degree of a vertex $V$ is denoted by the $deg V$, is the number of edges that are incident at $V$

<u>Ex</u>:

![Pasted image 20210929120319.png](attachments/Pasted%20image%2020210929120319.png)
: $deg$ $a=2$
: $deg$ $b=3$
: $deg$ $c=3$
: $deg$ $d=2$

## Graph Coloring

> A vertex coloring or coloring of a graph $G$ is an assignment of a color to each vertex of $G$ such that adjacent vertices have different colors.

The minimum number of colors needed to paint $G$ is called the <u>chromatic number</u> of $G$ and is denoted by $\chi (G)$

<u>Ex</u>:
Find the chromatic number of the graph $G$.

![Pasted image 20210929121910.png](attachments/Pasted%20image%2020210929121910.png)

1. Find the degrees of all vertices.
   : $deg$ $V_1=3$
   : $deg$ $V_2=4$
   : $deg$ $V_3=4$
   : $deg$ $V_4=3$
   : $deg$ $V_5=6$
   : $deg$ $V_6=4$
   : $deg$ $V_7=5$
   : $deg$ $V_8=3$
2. Order vertices according to their degrees
   : $V_5,V_7,V_2,V_3,V_6,V_1,V_4,V_8$
3. First color: $V_5, V_1$
4. Second color: $V_7, V_2, V_4$
5. Third color: $V_3, V_6, V_8$

$\chi(G)=3$
