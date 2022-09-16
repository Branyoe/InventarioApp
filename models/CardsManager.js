import Utils from "../Utils.js";

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

  search(code) {
    let foundCard, i = 0;
    do {
      if (this.#cards[i].code === code) foundCard = this.#cards[i];
      i++;
    } while (!foundCard && i < this.#cards.length)
    return foundCard;
  }

  update(code, newValue) {
    this.search(code).update(newValue);
  }

  renderCards() {
    this.removeCards();
    Utils.for(this.#cards, card => this.cardsContainer.prepend(card?.render()));
  }

  renderInvertedCards() {
    this.removeCards();
    Utils.for(this.#cards, card => this.cardsContainer.append(card?.render()));
  }

  renderCard(code) {
    this.removeCards();
    this.cardsContainer.append(this.search(code).render());
  }

  removeCards() {
    Utils.for(this.#cards, (card) => card?.remove());
  }

  deleteCard(code) {
    Utils.for(this.#cards, (card, i) => {
      if (card.code === code) {
        card.remove();
        this.#cards = Utils.removeItemFromArray(i, this.#cards);
      }
    })
  }

  //getters
  get getCards() { return this.#cards }
}