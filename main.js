// const Inventario = require("./models/Inventario.js");
// const Producto = require("./models/Producto");
import Alert from "./models/Alert.js";
import Card from "./models/Card.js";
import Form from "./models/Form.js";
import Inventario from "./models/Inventario.js";
import Producto from "./models/Producto.js";
import Utilidades from "./Utilidades.js";


const inventario = new Inventario();
const btnSubmit = Utilidades.selector('btn-submit');
const cardsContainer = Utilidades.selector('cardsContainer');
const btnSearch = Utilidades.selector('btn-search');
const form = new Form(
  Utilidades.selector('nombre'),
  Utilidades.selector('cantidad'),
  Utilidades.selector('costo')
);

let cards = [];

btnSubmit.addEventListener('click', e => {
  const newProducto = new Producto(form.getValue);
  inventario.add(newProducto);

  const card = new Card(
    inventario.getLastProduct.getFullValue,
    (code) => deleteProduct(code),
    () => {}
  )
  cards.push(card);

  cleanCardsContainer();
  renderCards();
  console.log(cards);
  console.log(inventario.getList);
});

const alert = new Alert('No existen resultados')

btnSearch.addEventListener('click', e => {
  e.preventDefault();
  // console.log(cards);
  // console.log(inventario.getList);

  let searchedCode = Number(Utilidades.selector('search-inp').value);
  const foundProduct = inventario.search(searchedCode);
  
  cleanCardsContainer()

  if(!foundProduct) {
    cleanCardsContainer()
    cardsContainer.append(alert.render());
    return
  }

  let foundCard
  Utilidades.for(cards, card => {
    if(card.code === foundProduct.getCode) foundCard = card;
  });

  cardsContainer.prepend(foundCard.render());

  
});

function cleanCardsContainer (){
  Utilidades.for(cards, (card) => {
    card?.remove();
  });
  Utilidades.selector('alert')?.remove();
}

function renderCards (){
  Utilidades.for(cards, (card) => cardsContainer.prepend(card?.render()) );
}

const deleteProduct = (code) => {
  Utilidades.for(cards, (card, i) => {
    if(card.code === code){
      card.remove();
      cards = Utilidades.removeItemFromArray(i, cards);
    }
  })
  inventario.delete(code);
  console.log(cards);
  console.log(inventario.getList);
}

//Pendiente al final
// const updateProduct = (code, newData = {}) => {
  
// }



