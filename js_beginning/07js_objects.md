### Epic Challenges

Working with functions and objects.

Exercise 1  
Consider this variable:

```javascript
var product = { name: "chair", price: 14.99 }
```

Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

Exercise 2
Consider this function:

```JavaScript
function message(product, inBudget){
  if (inBudget) {
    return "Product is within budget"
  } else {
    return "Product is beyond budget"
  }
}````
And consider this variable:

````JavaScript
var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00
```

Write a function checkBudget that takes a product, budget and the message function as arguments, determines whether the product is within budget and returns the result of the message function.

Refactor the previous exercise to replace "Product" in the return to the name of the product.

For example

 checkBudget(product, budget, message) ----> "OledMonitor is beyond budget"


[Go to ES6 Syntax](../js_intermediate/07js_es6_syntax.md)