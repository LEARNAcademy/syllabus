# Cat Tinder Create Functionality

## Overview
- Adding the CRUD "create" functionality to the frontend of Cat Tinder

## Learning Objectives
- Applying the concept of RESTful routes to a React application

## Additional Resources
- [ Reactstrap Form Components ](https://reactstrap.github.io/components/form/)

## Cat Create Form
To create a new cat the first step is creating a form for the user to be able to add a new cat to the list of cat friends. We can utilize Reactstap to help with form styling.

In each `<FormGroup>` tag there will be a label and an input. Each input tag will take two attributes. The first is `type` that describes what information can be entered into the field. The second is `name` that matches the cat attribute.

**src/pages/CatNew.js**
```javascript
<Form>
  <FormGroup>
    <Label>Name</Label>
    <Input
      type="text"
      name="name"
    />
  </FormGroup>
</Form>
```

Complete the process by importing the Reactstrap components.

**src/pages/CatNew.js**
```javascript
import {
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
```

When we create new cats we want to collect the data and transmit the data as a 


## Controlled components
Thinking ahead just a bit, we're going to need to pass the values from our form back up to the calling component. In order to do this easily, we will hold the values typed in by the user in state. To “watch” our inputs and save values into state, we need to switch our inputs to being “controlled components” (meaning watched by state). Or, in other words, add a 'value', and an 'onChange' attribute to the inputs. Then we can manage the value of the inputs in the components’ internal state until the form is submitted.

We start by adding state to the component in a function:

**src/pages/NewCat.js**
```javascript
const [form, setState] = useState({
      name: '',
      age: '',
      enjoys: ''
})
```
And then for each input, we use an arrow function to bind its value to state. We'll add a name to the input too, and an onChange() callback, as we're going to need those next. Here is 'name', the other two are nearly identical.

**src/pages/NewCat.js**

```javascript
<Form>
  <FormGroup>
    <Label htmlFor="name" id="name">Name</Label>
    <Input
      type="text"
      name="name"
      onChange={ handleChange }
      value={ form.name }
    />
  </FormGroup>
</Form>
```

So what does handleChange() look like?

**src/pages/NewCat.js**

```javascript
handleChange = e => {
    setState({
        //take all the existing form data and,...
        ...form,
        //...add new data to the end as it is typed
        [e.target.name]: e.target.value
    })
}
```

## For Discussion

Notice how we didn't test the handleChange() method and when it was called?  Why do you suppose we didn't do that?

The answer is that handleChange() is an internal mechanism of the component, and we want to have flexibility later down the road to change how the component works. We're not particularly interested in those inner workings from a testing perspective.

What we are interested in is what the component passes back to its caller, which we're going to test extensively. Testing is for validating outputs based on particular inputs. If you remember this you'll write flexible tests that allow you to easily refactor.

As a General Rule:
* Don't test the inner working of components
* Test that you get the correct outputs based on specific inputs
* Test the behavior of the component, especially if it directly affects the user experience

## Challenge
- Create a component that fulfills the tests in this file. You will see that these tests assume we are using Reactstrap to create our view, and reference Reactstrap components that will need to be added to your `pages/NewCat.js` file.

[ Go to Cat Tinder: New Cat Functionality Overview ](./10cat_tinder_form_submit.md)

[ Back to Cats Tinder Read Functionality ](./cat-read.md)

[ Back to Syllabus ](../../README.md)
