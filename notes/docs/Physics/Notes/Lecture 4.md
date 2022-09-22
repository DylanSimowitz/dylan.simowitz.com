---
date updated: '2021-09-01T20:24:04-07:00'

---


<u>EX 1</u>

You throw a football with an initial speed of $17 \frac{m}{s}$ at an angle of 35 degrees (with respect to the horizontal). What is its speed half a second later (0.5s)?

$V_{0x}=17\frac{m}{s}\cos35=13.93\frac{m}{s}$
$V_{0y}=17\frac{m}{s}\sin35=9.75\frac{m}{s}$

Half a second later, $v_x=13.93\frac{m}{s}$. Still. $v_y=v_{0y}-gt=(9.75\frac{m}{s})-(9.8\frac{m}{s^2})(0.5s)=4.85\frac{m}{s}$

So speed = magnitude of the velocity 

>$\sqrt{(13.93\frac{m}{s})^2+(4.85\frac{m}{s})^2}=14.75\frac{m}{s}$

---

<u>EX 2</u>

How far does the ball land?
![[../../Discrete Math/Notes/attachments/ball_ex.png]]

$v_{0x}=22\frac{m}{s}\cos(30)=19.05\frac{m}{s}$
$v_{0y}=22\frac{m}{s}\sin(30)=11\frac{m}{s}$

$-40m=(11\frac{m}{s})t-(0.5)(9.8\frac{m}{s^2})t^2$
$t=4.192s$

>$19.05\frac{m}{s}\cdot4.192s=79.9m$

Calculating the time to fall, an alternative way.

The time to go up: $v_y=v_{0y}-gt \to 0=11\frac{m}{s}-gt$
$t_{up}=\frac{(11\frac{m}{s})}{(9.8\frac{m}{s^2})}=1.122s$

How high do you go up?
$\Delta y=v_{0y}t-\frac{1}{2}gt^2=(11\frac{m}{s})(1.122s)-(0.5)(9.8\frac{m}{s^2})(1.122s)^2=6.17m$

How much time to come down? from 46.17m now
$-46.17m=(0)t-(0.5)(9.8\frac{m}{s^2})t^2$
$t_{down}=3.07s$

$3.07s+1.122s=4.192s$
>$19.05\frac{m}{s}\cdot4.192s=79.9m$

---

### Dynamics

> Newton's laws are the reason that the kinematics happens the way it does.
>
> ![[../../Discrete Math/Notes/attachments/ndtmeme.png]]

**There are 3 laws of motion**

1. Also called Galileo's law of inertia. Unless acted on by a force, objects at rest remain at rest, or objects in motion, stay in motion, traveling in a straight line, and constant speed.

   - Objects just drift. If not bothered by a force, all objects keep doing whatever they were doing.

   - In mathematical language this is expressed by saying if $F=0$, then $a=0$

   - Or, if you want a non-zero acceleration, you need a force.

   - This doesn't tell you how much acceleration to expect from any force.

   - The simplest possible relation between force and acceleration would be $F=a$ but some objects respond differently because of mass, so $F=ma$
