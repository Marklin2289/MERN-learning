// var sayHello = function (name) {
//   console.log("Hello " + name);
// };

// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// };

const sayHello = (name) => console.log(`Hello ${name}`);
sayHello("Mark");
// ==================================================================
// const returnObjLonghand = () => {
//   return {
//     firstName: "John",
//     lastName: "Wick",
//   };
// };

const returnObj = () => ({ firstName: "John", lastName: "Wick" });
returnObj();
// ===================================================================

// class Deck {
//   initialize() {
//     const suits = ["Diamond", "Heart", "Spade", "Club"];
//     const faces = [
//       "Ace",
//       "2",
//       "3",
//       "4",
//       "5",
//       "6",
//       "7",
//       "8",
//       "9",
//       "10",
//       "Jack",
//       "Queen",
//       "King",
//     ];
//     const deck = [];
//     for (const suit of suits) {
//       for (const face of faces) {
//         deck.push(this.createCard(suit, face));
//       }
//     }
//     this.deck = deck;
//   }
// }

class Deck {
  initialize() {
    const suits = ["Diamond", "Heart", "Spade", "Club"];
    const faces = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];
    const deck = [];
    suits.forEach((suit) => {
      faces.forEach((face) => {
        deck.push(this.createCard(suit, face));
      });
    });
  }
}
