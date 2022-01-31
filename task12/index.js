// What is ES6?

// ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

// Name 3 examples of ES6 features.

// let, const , arrow function

// What is the difference between let and const?

// `const` is a signal that the identifier won’t be reassigned.
// `let` is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function

// How do you access object values? Give 3 examples

const example = {
  name: "example",
};

example.name;
example["name"];
const { name } = example;
console.log(name);

// What does setInterval and setTimeout do?

// The setTimeout method executes a function after a delay. setInterval calls a function repeatedly with a delay between each call.

// What are promises?

// A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved

// Convert this async function to async/await

const toAsync = async () => {
  try {
    const quote = await getQuote();
    console.log(quote);
  } catch (error) {
    console.log(error);
  }
};

// Convert this code to arrow function.

const greeting = (firstname, lastname) => {
  return `Hi ${firstname} ${lastname}`;
};

// Explain what a callback function is.

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

// What does the functions pop and push do to an array?

// push() is used to add an element/item to the end of an array
// The pop() function is used to delete the last element/item of the array

// What is the expected answer to this code?

// '123'

// What data type would Array.map() and Array.filter() return?

// Object

//  What data type would Array.includes() and Array.some() return?

// Boolean

//  Write down the 4 main methods of rest api

// GET,POST,PUT,DELETE

// What is the difference between JSON and a JavaScript object?

// The only noticeable difference is that all names in JSON must be wrapped in double quotes.
// If you create an object using JSON format, javascript engine treats it the same as you would have created the object using the object literal. Safe to say that all JSON data are valid Javascript object
