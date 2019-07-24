# NewCat Component

Time to build the form to add new cats. Remember we already have the call for NewCat in ```App.js``` - so all that’s left is to create the component.

## Challenge

Create a component that fulfills the tests in this file. You will see that these tests assume we are using bootstrap to create our view, and reference bootstrap components that will need to be added to your ```pages/Cats.js``` file.

### src/pages/__tests__/NewCat.js

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import NewCat from '../NewCat'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewCat />, div)
})

it('has a name input', ()=>{
  const component = mount(<NewCat />)
 expect(component.find('label#name').text()).toBe("Name")
})

it('has a age input', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('label#age').text()).toBe("Age")
})

it('has a enjoys input', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('label#enjoys').text()).toBe("Enjoys")
})

it('has a submit button', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('button#submit').text()).toBe("Create Cat Profile")
})
```

Once you have a view that satisfies the tests, you’ll be ready to refactor your code to create a controlled form.

## Controlled components
Thinking ahead just a bit, we're going to need to pass the values from our form back up to the calling component. In order to do this easily, we will hold the values typed in by the user in state. To “watch” our inputs and save values into state, we need to switch our inputs to being “controlled components”(meaning watched by state). Or, in other words, add a 'value', and an 'onChange' attribute to the inputs. Then we can manage the value of the inputs in the components’ internal state until the form is submitted. Do you remember how to do this from the "Component, State, & Props" day?

We start by adding state to the component in a constructor:

### src/pages/NewCat.js

```javascript
constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      age: '',
      enjoys: ''
    }
  }
}
```
And then for each input, we use an arrow function to bind its value to state. We'll add a name to the input too, and an onChange() callback, as we're going to need those next. Here is 'name', the other two are nearly identical.

### src/pages/NewCat.js

```javascript
<Form.Control
  type="text"
  name="name"
  onChange={this.handleChange}
  value={this.state.form.name}
/>
```

So what does handleChange() look like?

### src/pages/NewCat.js

```javascript
handleChange = (event) => {
  let {form} = this.state
  form[event.target.name] = event.target.value
  this.setState({form: form})
}
```

## For Discussion

Notice how we didn't test the handleChange() method and when it was called?  Why do you suppose we didn't do that?

The answer is that handleChange() is an internal mechanism of the component, and we want to have flexibility later down the road to change how the component works. We're not particularly interested in those inner workings from a testing perspective.

What we are interested in is what the component passes back to its caller, which we're going to test extensively.  If you remember that testing is for validating outputs based on particular inputs, you'll write flexible tests that allow you to easily refactor.

As a General Rule:
* Don't test the inner working of a component.
* Test that you get the correct outputs based on specific inputs.
* Test behavior of the component, especially if it directly affects the user experience.

#### Where to go from here

[Go to Cat Tinder: New Cat Functionality Overview](./10cat_tinder_form_submit.md)

[Back to Cat Tinder: Cats component](./06cat_tinder_cats.md)

[Back to Syllabus](../../README.md)
