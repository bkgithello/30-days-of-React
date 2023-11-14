JSX stands for JavaScript XML.
JSX allows us to write HTML elements with javaScript code.
Babel is a library which transpiles JSX to pure JavaScript and latest JavaScript to older version.

- JSX must be wrapped by an outer parent element.
<header>
<h1>Welcome to 30 Dayos of React</h1>
<h1>Getting Started React</h1>
</header>
- Without the header HTML element or other parent HTML element the above JSX is invalid. 

* The ReactDom package has a method render. The render method takes two argument: a JSX element or a componet and the rood document.