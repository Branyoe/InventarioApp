import Utilidades from "../Utilidades.js";

export default class CardsManager {
  cards = []

  constructor(cardsContainer) {
    this.cardsContainer = cardsContainer;
  }

  add(card) {
    this.cards.push(card);
    this.cardsContainer.prepend(card.render());
  }

  cleanCardsContainer() {
    Utilidades.for(this.cards, (card) => {
      card?.remove();
    });
  }

  renderAllCards = () => Utilidades.for(this.cards, card => this.cardsContainer.prepend(card?.render()))

  renderCard(code){
    Utilidades.for(this.cards, card => {
      if(card.code === code) this.cardsContainer.append(card?.render());
    });
  }

  removeCard(code){
    Utilidades.for(this.cards, (card, i) => {
      if(card.code === code){
        card.remove();
        this.cards = Utilidades.removeItemFromArray(i, this.cards);
      }
    })
  }

  get getCards(){ return this.cards }
}