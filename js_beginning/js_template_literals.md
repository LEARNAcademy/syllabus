# Template Literals in Javascript

Template literals in Javascript allow us to embed expressions in our string literals among other things. In other words, with a twist in syntax we can put Javascript expressions in our strings. Here we'll focus on some of the most useful implementations of template strings.

There were a lot of technical terms in that description. Let's dive into implementation.

## String Interpolation

One of the most useful and common implementations of template literals is string interpolation. String interpolation is essentially the embedding of expressions in a string.

Here's an example:

```javascript
let fruit = "apple"

console.log(`The fruit is a ${fruit}`)

fruit = "orange"

console.log(`Now the fruit is a ${fruit}`)
```

Let's look at the important pieces here:

- The back tick characters (``) are used to signal the start and end of a template string
- A dollar sign ($) indicates the start of an embedded expression
- The curly braces ({}) indicate the beginning and end of the javascript expression. In this case, fruit is the expression we're asking javascript to evaluate.

As you may have noticed string interpolation makes our strings very dynamic and easy to read and write. It's worlds apart from what we had to work with pre ES6.

Here's an compare and contrast with a more complex example:

```javascript
var customer = {
  name: "Foo"
}
var card = {
  amount: 7,
  product: "Bar",
  unitPrice: 42
}

// Pre ES6

var message = "Hello " + customer.name +
" want to buy " + card.amount + " " + card.product + " for a total of " + (card.amount * card.unitPrice) + " bucks?"

// With ES6 string interpolation

var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitPrice} bucks?`
```

Here we can see just how many characters string interpolation saves  us when constructing string literals that require expressions. Notice we were also able to throw in a math expression in our string.

Again, our gains are:

- Easy to write expressions
- Very readable code

String interpolation is essentially at the core of the template literal feature of ES6 and many of it's additional features build on this piece. That said, getting comfortable with just this piece will get you a long way in understanding the more complex template literal implementations.

## Multi-line Strings

Template literals also makes it super easy to make multi-line strings.

```javascript

// Pre ES6

let oldLongString = "This\nis\na\nlong\nstring"

console.log(oldLongString)

let longString = `
This
is
a
long
string
`

console.log(longString)
```

Note that the ES6 version again is very easy to read and write.

## Other uses

Template literals have a few other uses that are a bit beyond the scope of what is useful at this point in the course. That's not to say that you won't ever utilize them.

Here are some links to some resources for those usages:

- [Nesting Templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Nesting_templates)
- [Tagged Templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates)


