# BDD Car Challenge

## Process

Before starting the implementation, copy each story into the editor as a comment, and use the function recipe to guide the implementation of each method.
Keep each class in it's own file with it's own test file.

## Stories

**Story**:	As a programmer, I can make a vehicle.
**Hint**:	Test that `Vehicle.new` does not raise any errors.

**Story**:	As a programmer, I can make a car.
**Hint**:	Test that creating an instance of the new class does not raise any errors.

**Story**:	As a programmer, I can tell how many wheels a car has; default is four.
**Hint**:	`initialize` the car to have four wheels, then create a method to return the number of wheels.

**Story**:	As a programmer, I can honk the horn.
**Hint**:	When I call `honk_horn`, I get a "BEEP!".

**Story**:	As a programmer, I can make a Toyota car.
**Hint**:	Test that class `Toyota` which inherits from class `Car` can be created.

**Story**:	As a programmer, I can honk the horn of a Toyota car which makes the sound "whoop".

**Story**:	As a programmer, I can make a Tata car.

**Story**:	As a programmer, I can honk the horn of a Tata car - "beep".

**Story**:	As a programmer, I can make a Tesla car.

**Story**:	As a programmer, I can honk the horn of Tesla - "Beep-bee-bee-boop-bee-doo-weep".

**Story**:	As a programmer, I can tell which model year a vehicle is from. Model years never change.
**Hint**:	Make model year part of the initialization.

**Story**:	As a programmer, I can turn on and off the lights on a given Vehicle.
**Hint**:	Create method(s) to allow programmer to turn lights on and off. Which class are the methods in?

**Story**:	As a programmer, I can determine if the lights are on or off. Lights start in the off position.

**Story**:  As a programmer, I can signal left and right. Turn signals starts off.

**Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 km/h.

**Story**:	As a programmer, I can speed my Teslas up by 10 km/h per acceleration.

**Story**:	As a programmer, I can slow my Teslas down by 7 km/h per braking.

**Story**:	As a programmer, I can speed my Tatas up by 2 km/h per acceleration.

**Story**:	As a programmer, I can slow my Tatas down by 1.25 km/h per braking.

**Story**:	As a programmer, I can speed my Toyotas up by 7 km/h per acceleration.

**Story**:	As a programmer, I can slow my Toyotas down by 5 km/h per braking.

**Story**:  As a programmer, I can call upon a car to tell me all it's information.
**Hint**:   Implement `to_s` on one or more classes. You can call a super class's `to_s` with `super`.

**Story**:  As a programmer, I can store and retrieve all of my cars from a garage.
**Hint**:   "Garage" is a noun, "store" and "retrieve" are verbs.

**Story**:	As a programmer, I can sort the cars in my garage based on model year.

**Story**:	As a programmer, I can sort the cars in my garage based on model.
**Hint**:	Sort based on class name.

**Story**:	As a programmer, I can sort the cars in my garage based on model and then year.
**Hint**:   Find out how the spaceship operator can help you with an array.
