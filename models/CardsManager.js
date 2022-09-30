import Utils from "../Utils.js";

export default class CardsManager {
  //********Propertys********
  #cards = []

  //********Methods********
  constructor(cardsContainer) {
    this.cardsContainer = cardsContainer;
  }

  add(card) {
    let indexForInsert;
    if (!this.#cards.length) {
      this.#cards.push(card);
    } else {
      indexForInsert = Utils.binarySearchForInsertCard(this.#cards, card.code);
      this.insert(card, indexForInsert + 1);
    }
    console.log(this.#cards);
  }

  insert(card, index) {
    this.#cards.length += 1;
    for (let i = this.#cards.length - 1; i >= index; i--) {
      this.#cards[i] = this.#cards[i - 1];
    }
    this.#cards[index] = card;
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
    if(this.ca)
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