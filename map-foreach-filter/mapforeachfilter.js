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
