# Ruby Decision Structures Challenge

## If/Else

if, else
Ruby has quite a few more ways of branching than Javascript does, but they're simpler to use on the whole.

There is a simple if-else construct similar to Javascript.

x = 1
if x == 3
  puts "Huh?"
else
  puts "Just confused now."
end
elsif
When you need more than an either/or. elsif indicates an alternative to the preceding if and any other preceding elsif statements. So, you start off with the if, have any number of elsif alternatives, and end with an else to capture all the leftover possibilities. In Javascript it was spelled out as: else if.

x = 1
if x == 2
  puts "Double huh?"
elsif x == 1
  puts "That's right."
else
  puts "Just confused now."
end
We write elsif rather than Javascript's else if and you don't need the parentheses, but its otherwise pretty similar.

unless
There's also an unless, which is just like if !(...). The unless keyword is just if in reverse. It's a conditional statement that executes only if the condition is false, instead of true.

x = 1
unless x > 1
  puts "Okay"
else
  puts "Huh?"
end


## Challenges:

Write a loop that prints from 1 to 20. Try it with all the loops covered in this lesson. Do it again counting down from 20 to 1.
Write a program which takes a number and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.
Write a program that prints the numbers from 1 to 100. But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz
Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.
Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.
Create an array of words. Iterate through the array using .each and a block, then print each of those words in all capitals.
Write a method which calls another method, then uses its return value.
Write a function called valid_date that prompts the user for a date with a month, date, and year (all numerically expressed) and returns 'true' if this date exists and 'false' if it does not (for example: 7 28 2014 exists, but 22 34 1999 does not). Make sure to account for leap years. This program is easiest if you prompt for the month, date, and year separately.
Using if, elsif, and else blocks, write a function called rps_game which allows two users to input their moves in "Rock, Paper, Scissors" and which determines the winner (or if a tie occurred).

### Password Checker Challenge
You are writing the user registration page for a secure web site.
On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:

User ID and password cannot be the same
User ID and password have to be at least six characters long
Password has to contain at least one of: !#$
User ID cannot contain the following characters: !#$ and space
Password cannot contain "password" in a capitalization
Proceed as follows:

Challenge: Write a function called same that takes a user ID and a password, and returns true if they are, and false otherwise.
Tests:

same("joe", "joe") -> true
same("joe", "joe1") -> false
Challenge: Write a function called long_enough that checks whether a String is at least six characters long, and returns true if it is, and false otherwise.
Tests:

long_enough("12345") -> false
long_enough("123456") -> true
Challenge Write a function called does_not_contain_special which checks to see if !, #, $ is not contained in a given String.
Tests:

does_not_contain_special("Hello Friend") -> true
does_not_contain_special("A#C") -> false
does_not_contain_special("A!C") -> false
does_not_contain_special("A$C") -> false
Challenge Write a method called contains_special which checks to see if !, #, $ is contained in a given String.
Tests:

contains_special("Hello Friend") -> false
contains_special("A#C") -> true
contains_special("A!C") -> true
contains_special("A$C") -> true
Challenge Write a method that inputs user ID and password from the user, and then tells the user if the they are acceptable.
Write a main method called validate_password that:

First lets a user input both user ID and password,
Then use the methods above to evaluate if the user ID and password combination is acceptable or not
Tells user what the result is.
Stretch Goal
Password has to contain at least one digit Task: Write a function using basic functions on String to see if a given String contains contains one of "0","1", "2", "9". Tests:
has_digit("abc") -> false
has_digit("a1c") -> true
Super Stretch Goal
Password has to contain a lower and an uppercase letter. Tests:
has_upper_and_lowercase("abc") -> false
has_upper_and_lowercase("aBc") -> true
has_upper_and_lowercase("123") -> false
