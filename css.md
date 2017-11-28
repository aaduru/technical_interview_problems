Can you explain the difference between these 3 selectors? div div, div > div, div + div


Selector Combination  div div

Here the second div element is the descendant of the first div element. Here all the div elements which are a descendant of a div element will have the same properties defined.


Selects all <div> elements inside <div> elements


Selector Combination  div > div
The child selector selects all elements that are the immediate children of a specified element.

Selects all <div> elements where the parent is a <div> element

Selector Combination  div + div

selects all elements that are the adjacent siblings of a specified element.

Selects all <div> elements that are placed immediately after <div> elements



Choose 5 other CSS selectors and explain what they do and why you might use them in a real application of some sort.

Selector Combination  div, p

Selects all <p> elements and all <div> elements
This can be used when you want two elements to have same styling.



Selector Combination  p ~ ul
Selects every <ul> element that are preceded by a <p> element

this can be used in a place the list under a  paragraph should have a specific styling



Selector Combination a:visited

Selects all visited links

we can use this to change the color of the visited links.



Selector Combination p:only-of-type

Selects every <p> element that is the only <p> element of its parent

assign the style to element that is the only element of its parent



Selector Combination a:link

Selects all unvisited links

we can use this to change the color of the unvisited links.
