let cardsContainer = document.getElementById("cards-container");
let likedCardsContainer = document.getElementById("liked-cards_container");
let deslikedCardsContainer = document.getElementById(
  "desliked-cards_container"
);
let showResultBtn = document.getElementById("resultBtn");
let cards = [
  {
    title: "Butterfly",
    description:
      "Butterflies are winged insects from the lepidopteran suborder Rhopalocera",
    image: "../assets/imgs/butterfly.jpg",
  },
  {
    title: "gray cat",
    description:
      "Cats conserve energy by sleeping for an average of 13 to14 hours a day",
    image: "../assets/imgs/cat.jpg",
  },
  {
    title: "beautiful bird",
    description:
      "Les Oiseaux (Aves) sont une classe de Vertébrés tétrapodes caractérisée par la bipédie",
    image: "../assets/imgs/bird.jpg",
  },
  {
    title: "chameleon",
    description:
      "Les Caméléonidés (Chamaeleonidae) sont une famille de sauriens surtout arboricoles",
    image: "../assets/imgs/chameleon.jpg",
  },
  {
    title: "chevanon",
    description: "chevanon is one of the most beautifull fishes in the world",
    image: "../assets/imgs/chevanon.jpg",
  },
  {
    title: "eagle",
    description:
      "Eagles are powerful birds of prey heralded for their strength",
    image: "../assets/imgs/eagle.jpg",
  },
  {
    title: "elephant",
    description:
      "Elephants are proboscidian mammals of the Elephantidae family.",
    image: "../assets/imgs/elephant.jpg",
  },
  {
    title: "owl",
    description:
      "Owls are birds from the order Strigiformes which includes over 200 species",
    image: "../assets/imgs/owl.jpg",
  },
  {
    title: "geraffe",
    description:
      "The giraffe (Giraffa camelopardalis) is a species of artiodactyl ungulate mammals",
    image: "../assets/imgs/geraffe.jpg",
  },
  {
    title: "parrot",
    description:
      "Parrots are primarily birds of the tropics. Their distribution encompasses",
    image: "../assets/imgs/parrot.jpg",
  },

  {
    title: "monkey",
    description:
      "Monkeys are intelligent animals that are good at solving problems. Almost all types live together in groups",
    image: "../assets/imgs/monkey.jpg",
  },
];
// let img = document.createElement("img");
// img.src = "../imgs/bg2.jpg";
let likedCards = [];
let deslikedCards = [];
cardsContainer.innerHTML = "";
cards.map((card, cardId) => {
  cardsContainer.innerHTML += `
  <div class="card-block" id="${cardId}">
      <div class="card" >
          <img src="${card.image}">
          <h4 class="title">${card.title}</h4>
          <p class="description">
            ${card.description}
          </p>
      </div>
      <div class="buttons">
         <button type="button" class="deslike" onclick="deslikeCard(this)">
           <i class="fa fa-thumbs-down"></i>
         </button>
         <button id="like" type="button" class="like" onclick="likeCard(this)">
           <i class="fa fa-heart"></i>
         </button>
      </div>
  </div>`;
});

let likeCard = (e) => {
  for (let i = 0; i <= cards.length; i++) {
    if (e.parentElement.parentElement.id == i) {
      likedCards.push(cards[i]);
      e.parentElement.parentElement.remove();
    }
  }
  console.log("liked cards", likedCards);
};
let deslikeCard = (e) => {
  cards.map((card, cardId) => {
    if (e.parentElement.parentElement.id == cardId) {
      deslikedCards.push(card);
      e.parentElement.parentElement.remove();
    }
    console.log("card id", cardId);
  });
};

let displayCards = () => {
  likedCardsContainer.innerHTML = "";
  deslikedCardsContainer.innerHTML = "";
  likedCards.map((card) => {
    likedCardsContainer.innerHTML += `
        <div class="card">
            <img src="${card.image}">
            <h4 class="title">${card.title}</h4>
            <p class="description">
              ${card.description}
            </p>
        </div>`;
  });
  deslikedCards.map((card) => {
    deslikedCardsContainer.innerHTML += `
        <div class="card">
            <img src="${card.image}">
            <h4 class="title">${card.title}</h4>
            <p class="description">
              ${card.description}
            </p>
        </div>`;
  });
  showResultBtn.style.display = "none";
  cardsContainer.style.display = "none";
};

let styleCards = () => {};

console.log("cards", cards);
showResultBtn.addEventListener("click", displayCards);
