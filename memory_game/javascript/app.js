// var cardOne = "queen"
// var cardTwo = "queen"
// var cardThree = "king"
// var cardFour = "king"

// console.log("User flipped " + cardOne)
// console.log("User flipped " + cardThree)

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "../images/images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "../images/images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "../images/images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "../images/images/king-of-diamonds.png"
  },
]
var cardsInPlay = []

function checkForMatch(){
  // if (cardsInPlay[0] === cardsInPlay[1]) {
  //   console.log("You found a match!");
  // } else {
  //   console.log("Sorry, try again.");
  // }
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log('Found a match!!!')
    } else {
      console.log("sorry no match found")
    }
  }
}

function flipCard(cardId) {
  // var cardOne = cards[0]
  // cardsInPlay.push(cardOne)

  //console.log("Cards Object " + cards)
  //console.log(cardId.rank)
  // var cardTwo = cards[3]
  // cardsInPlay.push(cardTwo)
  console.log("User flipped " + cardId.rank)

  cardsInPlay.push(cardId.rank)
  //console.log("pushed " + cardsInPlay)

  console.log(cardId.cardImage)
  console.log(cardId.suit)

  checkForMatch()

  // if (cardsInPlay.length === 2) {
  //   if (cardsInPlay[0] === cardsInPlay[1]) {
  //     alert('Found a match')
  //   } else {
  //     alert("sorry no match")
  //   }
  // }
}


flipCard(cards[0])
flipCard(cards[3])