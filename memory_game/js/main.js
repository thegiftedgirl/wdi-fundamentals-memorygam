
const cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cards[0]);
console.log('User flipped queen');

var cardTwo = cards[1];
cardsInPlay.push(cards[1]);
console.log('User flipped queen');

var cardThree = cards[2];
cardsInPlay.push(cards[2]);
console.log('Userflipped king');

var cardFour = cards[3];
cardsInPlay.push(cards[3]);
console.log('User flipped king');

if (cardsInPlay[0] === cardsInPlay[1])
 	alert("You found a match!");
	else {
  alert("Sorry, try again");
}
