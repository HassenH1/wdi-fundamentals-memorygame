// // var cardOne = "queen"
// // var cardTwo = "queen"
// // var cardThree = "king"
// // var cardFour = "king"

// // console.log("User flipped " + cardOne)
// // console.log("User flipped " + cardThree)

// var cards = [
//   {
//     rank: "queen",
//     suit: "hearts",
//     cardImage: "../images/images/queen-of-hearts.png"
//   },
//   {
//     rank: "queen",
//     suit: "diamonds",
//     cardImage: "../images/images/queen-of-diamonds.png"
//   },
//   {
//     rank: "king",
//     suit: "hearts",
//     cardImage: "../images/images/king-of-hearts.png"
//   },
//   {
//     rank: "king",
//     suit: "diamonds",
//     cardImage: "../images/images/king-of-diamonds.png"
//   },
// ]
// var cardsInPlay = []

// function checkForMatch(){
//   // if (cardsInPlay[0] === cardsInPlay[1]) {
//   //   console.log("You found a match!");
//   // } else {
//   //   console.log("Sorry, try again.");
//   // }
//   if (cardsInPlay.length === 2) {
//     if (cardsInPlay[0] === cardsInPlay[1]) {
//       console.log('Found a match!!!')
//     } else {
//       console.log("sorry no match found")
//     }
//   }
// }

// function flipCard(cardId) {
//   // var cardOne = cards[0]
//   // cardsInPlay.push(cardOne)

//   //console.log("Cards Object " + cards)
//   //console.log(cardId.rank)
//   // var cardTwo = cards[3]
//   // cardsInPlay.push(cardTwo)
//   console.log("User flipped " + cardId.rank)

//   cardsInPlay.push(cardId.rank)
//   //console.log("pushed " + cardsInPlay)

//   console.log(cardId.cardImage)
//   console.log(cardId.suit)

//   checkForMatch()

//   // if (cardsInPlay.length === 2) {
//   //   if (cardsInPlay[0] === cardsInPlay[1]) {
//   //     alert('Found a match')
//   //   } else {
//   //     alert("sorry no match")
//   //   }
//   // }
// }

// function createBoard(){
//   for(var i = 0; i < cards.length; i++){
//     var cardElement = document.createElement('img')
//     cardElement.setAttribute("src", "images/images/back.png")
//     cardElement.setAttribute("data-id", i)
//     cardElement.addEventListener("click", flipCard)
//     cardElement.appendChild(cardElement)
//   }
// }

// // flipCard(cards[0])
// // flipCard(cards[1])
// createBoard(0)
// createBoard(1)

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/images/king-of-diamonds.png"
  }
];

var cardsInPlay = []

var counter = 0;
function checkForMatch(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("found a match")
    counter++;
    console.log(counter)
  } else {
    alert("no match")
  }
  var updateScore = document.getElementById("score")
  console.log(updateScore)
  updateScore.innerHTML = counter;
}

function flipCard(){
  // var cardOne = cards[0]
  // cardsInPlay.push(cardOne)
  // console.log("user flipped " + cardOne)

  // var cardTwo = cards[2]
  // cardsInPlay.push(cardTwo)
  // console.log("user flipped " + cardTwo)
  var cardId = this.getAttribute('data-id')
  
  cardsInPlay.push(cards[cardId].rank)

  console.log("user flipped " + cards[cardId].rank)
  //console.log("card image " + cards[cardId].cardImage)
  //console.log("card suit " + cards[cardId].suit)
  this.setAttribute('src', cards[cardId].cardImage)

  if(cardsInPlay.length === 2){

    checkForMatch()
  }
 
  //console.log(cardsInPlay)
}

function createBoard(){
  var gameBoard = document.getElementById('game-board')
  for(var i = 0; i < cards.length; i++){
    //console.log(cards[i])
    var cardElement = document.createElement("img")
    console.log(cardElement)
    cardElement.setAttribute("src", "images/images/back.png")
    cardElement.setAttribute('data-id', i)
    //console.log(cardElement)
    cardElement.addEventListener('click', flipCard)
    
    gameBoard.appendChild(cardElement)
  }

  var button = document.querySelector(".btn")
  //reset button
  //listen for a click
  //then take gameboard and set it to nothing
  button.addEventListener('click', res)

  
}

function res(){
  console.log(123)
  var game = document.getElementById('game-board')
  game.innerHTML = " "
  cardsInPlay = []
  createBoard()
}

createBoard()