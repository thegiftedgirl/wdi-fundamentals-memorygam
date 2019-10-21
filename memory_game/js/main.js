const cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch(){
		if (cardsInPlay[0] === cardsInPlay[1]){
 		alert("You found a match!");
 	}
		else {
  			alert("Sorry, try again");
	}
}
function flipCard(cardID){
	console.log(`User flipped ${cards[cardID]}`)
	checkForMatch()
}




// function name(firstname, lastname){
// 	if (firstname === ''){
// 		console.log('we dont have a first name!')
// 	} else {
// 	console.log(`Hi ${firstname}, ${lastname}`)
// }
// }

// name('', 'banks')

/*var cardTwo = cards[1];
cardsInPlay.push(cardsTwo);
console.log('User flipped' + cardTwo);



var cardFour = cards[3];
cardsInPlay.push(cardsFour);
console.log('User flipped' + cardThree);
*/