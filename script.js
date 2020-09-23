//question 1: Create an array called petArray with 3 string items in it: "cat", "cow", "dog".

// my answer for question 1
var petArray = ["cat", "cow", "dog"];

//question 2: Console log the value of the second item in petArray.

// my answer for question 2
console.log(petArray[1]);

//question 3: Add the item "sheep" to petArray using the push method.

// my answer for question 3
petArray.push("sheep");

//question 4: Console log how many items there are now in petArray using the length method.

// my answer for question 4
console.log(petArray.length);

//question 5: Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.

// my answer for question 5
var catObject = {
  name: "whiskers",
  colour: "white",
  age: 7,
};

//question 6: Console log the value of the third property of catObject.

//  my answer for question 6
console.log(catObject.age);

//question 7: Take the value of catObject (the {} part) and place it inside an array called catArray.

// my answer for question 7
var catArray = [
  {
    name: "whiskers",
    colour: "white",
    age: 7,
  },
];

//question 8: Loop through catArray and console log each property of each object inside (there will be only 1 object inside).

// my answer for question 8
for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i]);
}

//question 9: Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.

//  my answer for question 9
function logToConsole(four) {
  console.log(four);
}

//question 10: Call the logToConsole function and pass in the value "donkey".

// my answer for question 10

logToConsole("donkey");
