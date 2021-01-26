// forEach
const myArray = [1, 2, 3, 4, 5];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// function myCallback(element, index) {
//   console.log(`the number is : ${element} ; the index is : ${index}`);
// }

myArray.forEach((element, index) => {
  console.log(`the number is : ${element} ; the index is : ${index}`);
});

// map()
const double = myArray.map((num) => num * 2);
console.log(double);

// filter
const eventNum = myArray.filter((num) => num % 2 === 0);
console.log(eventNum);
console.log("myArray", myArray);

//  Object.freeze()

const arr = [1, 2, 3, 4];
arr.push(300);
console.log(arr); // even though arr is declared with `const` we can still push new values into it

// const newArr = Object.freeze([1, 2, 3, 4]);
// newArr.push(300);
// console.log(newArr);// we're no longer allowed to change `arr`

const groceryList = Object.freeze([
  { item: "carrots", haveIngredient: false },
  { item: "onions", haveIngredient: true },
  { item: "celery", haveIngredient: false },
  { item: "cremini mushrooms", haveIngredient: false },
  { item: "butter", haveIngredient: true },
]);

// const needThyme = [...groceryList, { item: "thyme", haveIngredient: false }]; //this one works
const needThyme = groceryList.concat([
  { item: "thyme", haveIngredient: false },
]); //We can also use .concat() for this one. Concat is a method that essentially takes two arrays, glues them together and gives us back the new array.
console.log(needThyme);

const gotTheThyme = [
  ...needThyme.slice(0, 5),
  { ...needThyme[5], haveIngredient: true },
];
console.log(gotTheThyme);

const notNeceCelery = [...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3)];
console.log(notNeceCelery);
