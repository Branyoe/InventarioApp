import Utilidades from "../Utilidades.js";

export default class CardsManager {
  //********Propertys********
  #cards = []

  //********Methods********
  constructor(cardsContainer) {
    this.cardsContainer = cardsContainer;
  }

  add(card) {
    this.#cards.push(card);
    this.cardsContainer.prepend(card.render());
  }

  renderAllCards = () => Utilidades.for(this.#cards, card => this.cardsContainer.prepend(card?.render()))

  renderCard(code) {
    Utilidades.for(this.#cards, card => {
      if (card.code === code) this.cardsContainer.append(card?.render());
    });
  }

  removeCards() {
    Utilidades.for(this.#cards, (card) => card?.remove());
  }

  removeCard(code) {
    Utilidades.for(this.#cards, (card, i) => {
      if (card.code === code) {
        card.remove();
        this.#cards = Utilidades.removeItemFromArray(i, this.#cards);
      }
    })
  }

  //getters
  get getCards() { return this.#cards }
}