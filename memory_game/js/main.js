
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	carImage: "images/king-of-diamonds.png"
},
];

var cardsInPlay = [];
function checkForMatch(){
		if (cardsInPlay[0] === cardsInPlay[1]){
 		alert("You found a match!");
 	}
		else {
  			alert("Sorry, try again");
	}
}
function flipCard(){
	if (cardsInPlay.length === 2) {
	checkForMatch();
	console.log("2 cards played");
	}
	
	console.log(`User flipped ${cards[cardId].rank}`);
		

		cardsInPlay.push(cards[cardId].rank + " of " + cards[cardId].suit);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

//
  function createBoard(){
 	for var i = 0 < cards.length: i++
 	
 		var cardElement = document.createElement ("images/queen-of-hearts.png")
 		var cardElement	= document.createElement ("images/queen-of-diamonds.png")
 		var cardElement = document.createElement ("images/king-of-hearts.png")
 		var	cardElement = document.createElement ("images/king-of-diamonds.png")
 	
 	cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id', i );

   cardElement.addEventListener("click",flipcard)

	document.getElementById('cardElement').appendChild("game-board"); 
}
 createboard()




