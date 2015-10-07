Pseudo for removing Flexbox
--------------

  <div class="container">
    <% a = *(1..6) %>
    <% a.reverse.each do |i| %>
      <div class="column_1 row_<%=i%>"></div>
      <div class="column_2 row_<%=i%>"></div>
      <div class="column_3 row_<%=i%>"></div>
      <div class="column_4 row_<%=i%>"></div>
      <div class="column_5 row_<%=i%>"></div>
      <div class="column_6 row_<%=i%>"></div>
      <div class="column_7 row_<%=i%>"></div>
    <% end %>

  </div>
  ------------
.container {
  border: 1px solid black;
  text-align: center;
  background-color: orange;
  width: 700px;
  height: 600px;
  padding-top: 20px;
  position: relative;
  margin: 0 auto;
}

.container div {
  display: inline-block;
  width: 90px;
  border: 1px solid black;
  height: 90px;
  background-color: #CBD2EA;
  border-radius: 100%;
}



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


Diagonal Checks

if target = #x1, then
  x+1 y-1, x+2 y-2, x+3 y-3
  x+1 y+1, x+2 y+2, x+3 y+3

if target = #x2, then
  x-1 y-1, x+1 y+1, x+2 y+2, x+3 y+3
  x-1 y+1, x+1 y-1, x+2 y-2, x+3 y-3

if target = #x3, then
  x-2 y-2, x-1 y-1, x+1 y+1, x+2 y+2, x+3 y+3
  x-2 y+2, x-1 y+1, x+1 y-1, x+2 y-2, x+3 y-3

if target = #x4, then
  x-3 y-3, x-2 y-2, x-1 y-1, x+1 y+1, x+2 y+2, x+3 y+3
  x-3 y+3, x-2 y+2, x-1 y+1, x+1 y-1, x+2 y-2, x+3 y-3

if target = #x5, then
  x-3 y-3, x-2 y-2, x-1 y-1, x+1 y+1, x+2 y+2
  x-3 y+3, x-2 y+2, x-1 y+1, x+1 y-1, x+2 y-2

if target = #x6, then
  x-3 y-3, x-2 y-2, x-1 y-1, x+1 y+1
  x-3 y+3, x-2 y+2, x-1 y+1, x+1 y-1

if target = #x7, then
  x-1 y-1, x-2 y-2, x-3 y-3
  x-1 y+1, x-2 y+2, x-3 y+3
