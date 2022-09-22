```latex
\usepackage{gensymb}
```
### Vector Subtraction
Define $A - B = A + (-B)$

This way we can use tip to tail like with addition

$A = 3x + 4y - z$, $B = -2x + 2y + 3z$
$A - B = 5x + 2y - 4z$

![[../../Discrete Math/Notes/attachments/vector_subtraction_sketch.png]]

What is A - B? Whatever it is, it must make A when added to B.

---

### Vector Multiplication
Scalar multiplication is 3A = A + A + A
A times B. What is that?

$A=4x+2y$, $B=3x-y$

$A \cdot B=(4)(3)+(2)(-1)=10$

This is an example of the dot product, or scalar product of A and B.

##### Magnitude
1. What is the magnitude of A? $|A| = \sqrt{20}$
2. What is the magnitude of B? $|B| = \sqrt{10}$
3. What is the angle between A and B?
	$\tan{\theta} = (2/4) \to \theta = 26.57 \degree$
	$\tan{\tau} = (1/3) \to \tau = 18.43 \degree$ so the angle between A and B is 45 degrees
	The dot product always produces $|A||B|\cos(angle)$
	
Suppose $C=5x+y$ and $D=3x-4y$
$C \cdot D = (5)(3)+(1)(-4) = 11$
$|C| = \sqrt{26}$, $|D| = 5$ so $\cos\theta = \frac{11}{5\sqrt{26}}$

![[../../Discrete Math/Notes/attachments/vector_dot_product.png]]

$F=2x+y-5z$, $G=-x+3y+2z$
What is the angle between F and G?
$F\cdot G=(2)(-1)+(1)(3)+(-5)(2)=-9$
$|F|=\sqrt{30}$, $|G|=\sqrt{14}$
$-9 = (\sqrt{30})(\sqrt{14})\cos\theta$
Solve for $\theta = 116.05\degree$

1. Note that the cosine is positive whenever its angle is less than 90 degrees.
2. Note that the cosine is negative whenever its angle is more than 90 degrees.
3. Note the cosine of 90 degrees is 0.

A direct consequence of these is the dot product of two perpendicular vectors is always zero.

If the 2 vectors happen to be parallel, then $\cos0=1$ and the dot product produces just the product of their magnitudes. That is, suppose $|A|=7$ and $|B|=3$, and they're parallel, then $A\cdot B=21$. If they are perfectly anti-parallel, then the dot product will be -21

Quiz question: what do you get if you take the dot product of a vector with itself.
$V \cdot V = |V|^2$

Show it 2 ways.
1. Dot product is always $|V||V|\cos0=|V|^2$
2. $V=V_xx + V_yy+V_zz$
	$V\cdot V=(V_x)^2+(V_y)^2+(V_z)^2=|V|^2$
	
---
	
What does gravity do? It pulls things down. Putting that into slightly more technical language: it makes a vertical acceleration, <u>but not a horizontal one!</u>

When are 2 vectors equal? They are equal if and only if they have the same magnitude and direction.
Another way to say this is they have all the same cartesian components.

If you write a vector equation, then the vector on the left of the equal sign must be the same vector as the one on the right.

$a =\frac{dv}{dt}$ therefore  $a_x=\frac{dv_x}{dt}, a_y=\frac{dv_y}{dt}, a_z=\frac{dv_z}{dt}$

In the case of gravity, $a=-gy$ if we take the y direction as up and the x direction as horizontal. 

Write this acceleration with more detail: $a=(0)x-(9.8 \frac{m}{s^2})y$

$\frac{dv_x}{dt}=0, \frac{dv_y}{dt}=-9.8\frac{m}{s^2},\frac{dv_z}{dt}=0$

This doesn't say that $v_x$ is zero, it says its derivative is zero, which is a different thing.
This means $v_x$ keeps its value forever. In a nutshell, freefall problems amount to 2 facts
- The horizontal motion is un-accelerated ($v_x$ doesn't change)
- The vertical motion behaves the same as it did in 1D free-fall problems.

For the baseball problem:
![[../../Discrete Math/Notes/attachments/baseball_problem.png]]

Where is the ball 2 seconds later? What is the position?

<u>Free-fall acceleration equations</u>
$\Delta y=v_{0y}t-\frac{1}{2}gt^2$
$v_y=v_{0y}-gt$
$v_{y^2}=v_{0y^2}-2g\Delta y$
$\Delta x=v_{0x}t$
$v_x=v_{0x}$

$\Delta y =  (12 \frac{m}{s})(2s)-\frac{1}{2}g(2s)^2=4.4m$

When does this baseball hit the ground?
$v_y=v_{0y}-gt$
At the top, $v_y=0$, $0=12\frac{m}{s} - (9.8\frac{m}{s^2})t$
solve for $t=1.22s$ then multiply by 2 because ball has to come down $=2.45s$

Where does this baseball hit the ground?
$\Delta x=v_{0x}t = (16\frac{m}{s})(2.45s)=39.2m$

How high does it go before hitting the ground?
$\Delta y=v_{0y}t-\frac{1}{2}gt^2=7.35m$