// var cardOne = "queen"
// var cardTwo = "queen"
// var cardThree = "king"
// var cardFour = "king"

// console.log("User flipped " + cardOne)
// console.log("User flipped " + cardThree)

var cards = ["queen", "queen", "king", "king"]
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

  // //console.log("User flipped " + cardsInPlay)

  // var cardTwo = cards[3]
  // cardsInPlay.push(cardTwo)

  console.log("User flipped " + cardId)
  cardsInPlay.push(cardId)
  //console.log("pushed " + cardsInPlay)

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
flipCard(cards[1])