export default class Card {
  //********Propertys********
  card = document.createElement("div");
  cardBody = document.createElement("div");
  cardTitle = document.createElement("h5");
  codeSubtitle = document.createElement("h6");
  costSubtitle = document.createElement("h6");
  quantitySubtitle = document.createElement("h6");
  deleteBtn = document.createElement("a");

  //********Methods********
  constructor(product, handleDelete) {
    this.code = product.getCode;
    this.name = product.getName;
    this.quantity = product.getQuantity;
    this.cost = product.getCost;
    this.deleteBtn.addEventListener('click', () => handleDelete(this.code));
  }

  remove(){
    this.card.remove();
  }

  render() {
    this.card.classList.add('card', 'mb-3');
    this.cardBody.classList.add('card-body');
    this.cardTitle.innerHTML = `Nombre: ${this.name}`;

    this.quantitySubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    this.quantitySubtitle.innerHTML = `Cantidad: ${this.quantity}`

    this.costSubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    this.costSubtitle.innerHTML = `Costo: ${this.cost}`

    this.codeSubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    this.codeSubtitle.innerHTML = `Código: ${this.code}`;

    this.deleteBtn.classList.add('card-link', 'btn', 'btn-danger');
    this.deleteBtn.textContent = 'Delete';

    this.cardBody.append(
      this.cardTitle,
      this.codeSubtitle,
      this.quantitySubtitle,
      this.costSubtitle,
      this.deleteBtn
    );
    this.card.append(this.cardBody);

    return this.card;
  }
}