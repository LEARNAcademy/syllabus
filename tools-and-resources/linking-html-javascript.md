# Connecting HTML and JavaScript

### Create an HTML page that takes a user's name and returns "Welcome, <user's name>!"

#### Document Object Model (DOM)
When a web page is loaded, the browser creates a Document Object Model of the page. The DOM can be manipulated with Javascript after the page has been loaded.

#### DOM Manipulation
The document is the actual page loaded into the window, and is represented in JavaScript by the Document object. You can use this object to return and manipulate information on the HTML and CSS that comprises the document, change its text content, apply new styles to it, etc.


#### Create an HTML page
- Create the boilerplate DOCTYPE
- Add a form
- Add a button
- Add a place for the output to display

#### Create a JavaScript file
- Create a function called greeter

#### Linking the JS to HTML
- Getting the HTML property (getElementBy....Id, Class, TagName, etc)
```javascript
document.getElementById("idHere").value
document.getElementById("idHere").innerHTML
```

- DOM events - onclick, onmouseup, onmousedown, many more
- Add the script tag to HTML body to import the JS file


```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>My greeter page</h1>
    <input type="text" id="user-input">
    <button type="button" name="button" onclick="greeter()">Click me!</button>
    <h3 id="output"></h3>
    <script type="text/javascript" src="greeter.js"></script>
  </body>
</html>
```
```javascript
function greeter(){
  let userName = document.getElementById("user-input").value
  document.getElementById("output").innerHTML = `Welcome, ${userName}!`
}
```
