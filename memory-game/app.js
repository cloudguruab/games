document.addEventListener("DOMContentLoaded", () => {
  // card ops
  const cardArray = [
    {
      name: "fries",
      img: "images/frieds.png", // rel path
    },
    {
      name: "fries",
      img: "images/frieds.png", // rel path
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheesburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheesburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  cardArray.Sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // creating board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      // creating event listener for click and to flip card
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check for match function
  function checkMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const opetionTwoId = cardsChosenId[1];
    if ((cardChosen[0], cardChosen[1])) {
      alert("You have a match!");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[opetionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[opetionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry try again");
    }
    cardsChosenId = [];
    cardsChose = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "You have found them all";
    }
  }

  // flip your card function
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosen.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  createBoard();
  flipCard();
  checkMatch();
});
