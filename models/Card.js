import Inventario from "./Inventario.js";

export default class Card {
  divCard = document.createElement("div");

  cardBody = document.createElement("div");
  cardTitle = document.createElement("h5");

  subtitleCosto = document.createElement("h6");
  subtitleCantidad = document.createElement("h6");
  subtitleCodigo = document.createElement("h6");

  // btnUpdate = document.createElement("a");
  btnDelete = document.createElement("a");

  handleDelete = () => {};
  
  constructor(producto, handleDelete, handleUpdate) {
    this.code = producto.codigo;
    this.nombre = producto.nombre;
    this.cantidad = producto.cantidad;
    this.costo = producto.costo;
    this.btnDelete.addEventListener('click', () => handleDelete(this.code));
    // this.btnUpdate.addEventListener('click', () => handleUpdate(this.codigo, producto))
  }

  render() {
    this.divCard.classList.add('card', 'mb-3');
    this.divCard.setAttribute('style', 'width: 100%;');
    this.divCard.addEventListener('click', e => {

    });

    this.cardBody.classList.add('card-body');

    this.cardTitle.innerHTML = `Nombre: ${this.nombre}`

    this.subtitleCantidad.classList.add(
      'card-subtitle',
      'mb-2',
      'text-muted'
    );
    this.subtitleCantidad.innerHTML = `Cantidad: ${this.cantidad}`

    this.subtitleCosto.classList.add(
      'card-subtitle',
      'mb-2',
      'text-muted'
    );
    this.subtitleCosto.innerHTML = `Costo: ${this.costo}`
    
    this.subtitleCodigo.classList.add(
      'card-subtitle',
      'mb-2',
      'text-muted'
    );
    this.subtitleCodigo.innerHTML = `Código: ${this.code}`;
    this.subtitleCodigo.setAttribute('id', 'codeLabel');

    this.btnDelete.classList.add('card-link', 'btn', 'btn-danger');
    this.btnDelete.textContent = 'Delete';

    this.cardBody.append(
      this.cardTitle,
      this.subtitleCantidad,
      this.subtitleCosto,
      this.subtitleCodigo,
      // this.btnUpdate,
      this.btnDelete
    );
    this.divCard.append(this.cardBody);
    return this.divCard;
  }

  remove(){
    this.divCard.remove();
  }
}