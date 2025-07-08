The CSS @supports Rule
The CSS @supports rule lets you check if the browser supports a specific CSS property or value, and to define fallback styles if the feature is not supported.

This is useful for applying styles only when the browser can handle them.

Basic Syntax
@supports (property: value) {
  /* CSS rules */
}
Example: Using @supports with grid and flex
You can combine @supports with regular CSS to provide fallback styling.

Here, if the browser supports display: flex, the CSS inside the @supports rule will be applied. If not, the .container class outside the @supports rule will be applied:

Example
/* use this CSS if the browser does not support display: flex */
.container {
  float: left;
  width: 100%;
}

/* use this CSS if the browser supports display: flex */
@supports (display: flex) {
  .container {
    display: flex;
  }
}
Here, if the browser supports display: grid, the CSS inside the @supports rule will be applied. If not, the .container class outside the @supports rule will be applied:

Example
/* use this CSS if the browser does not support display: grid */
.container {
  display: table;
  width: 90%;
  background-color: #2196F3;
  padding: 10px;
}

/* use this CSS if the browser supports display: grid */
@supports (display: grid) {
  .container {
    display: grid;
    grid: auto;
    grid-gap: 10px;
    background-color: #2196F3;
    padding: 10px;
  }
}
ADVERTISEMENT
Negating with not
You can use not to apply styles only when a feature is not supported:

Example
@supports not (display: grid) {
  .warning {
    background-color: pink;
    padding: 10px;
    border: 1px solid red;
  }
}
Combining Conditions
You can use and, or, and not for multiple conditions:

Example
@supports (display: grid) and (gap: 10px) {
  .container {
    display: grid;
    gap: 10px;
  }
}