Pseudo for a winner

WHAT IS YOUR STATE?
-----------------------
What am I? ('mooop')
- red or black
- which player?
Where am I?

Click a column
........................
go to the empty child and assume those starting coordinates
- coordinates


WHO'S AROUND YOU?
--------------------------
Am I above y3?
-if yes, grab array y-1 to 3
- check to see if all the same as you
-- IF yes 'WINNNnnnnnnNER1'
- if no, then continue....

> Grab my NEXT array (linear)
- +3x, and -3x, linearly
--> y constant for horizontal
--> y + with x+ for diag 1
--> y- with x + for diag 2

Exclude edge cases:
.....................
-  max out if (x or y =0) OR (x>7 or y>6)
- if so, exclude form array??

DO YOU HAVE A WINNER?
-------------------------
- search array for sequence of 4 sequential, similar values
-if there are....then 'WINNNnnnnnnNER1'
-if not, then next players turn
