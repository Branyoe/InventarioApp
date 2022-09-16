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

  search(code){
    for (let i = 0; i < this.#cards.length; i++) {
      if(this.#cards[i].code === code) return this.#cards[i];
    }
  }

  update(code, newValue) {
    this.search(code).update(newValue);
  }

  renderCards = () => Utilidades.for(this.#cards, card => this.cardsContainer.prepend(card?.render()))

  renderCard(code) {
    Utilidades.for(this.#cards, card => {
      if (card.code === code) this.cardsContainer.append(card?.render());
    });
  }

  rerenderCards() {
    this.removeCards();
    this.renderCards();
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