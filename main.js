import Alert from "./models/Alert.js";
import Card from "./models/Card.js";
import CardsManager from "./models/CardsManager.js";
import Form from "./models/Form.js";
import Inventario from "./models/Inventario.js";
import Producto from "./models/Producto.js";
import Utilidades from "./Utilidades.js";


const inventary = new Inventario();
const addBtn = Utilidades.selector('btn-submit');
const searchBtn = Utilidades.selector('btn-search');
const searchInp = Utilidades.selector('search-inp');
const cardsContainer = Utilidades.selector('cardsContainer');
const cardsManager = new CardsManager(cardsContainer);
const alert = new Alert('No existen resultados')
const form = new Form(
  Utilidades.selector('nombre'),
  Utilidades.selector('cantidad'),
  Utilidades.selector('costo')
);

addBtn.addEventListener('click', e => {
  e.preventDefault();

  const newProducto = new Producto(form.getValue);
  inventary.add(newProducto);

  const card = new Card(
    inventary.getLastProduct.getFullValue,
    code => deleteProduct(code)
  )
  alert.remove();
  cardsManager.add(card);
  cardsManager.cleanCardsContainer();
  cardsManager.renderAllCards();
  form.reset();
});

searchBtn.addEventListener('click', e => {
  e.preventDefault();

  const searchedCode = Number(searchInp.value);
  const foundProduct = inventary.search(searchedCode);

  cardsManager.cleanCardsContainer();
  alert.remove();

  if (!foundProduct) {
    cardsManager.cleanCardsContainer();
    cardsContainer.append(alert.render());
    return
  }
  cardsManager.renderCard(foundProduct.getCode);
});

searchInp.addEventListener('input', e => {
  if(searchInp.value.toString() === ''){
    alert.remove();
    cardsManager.cleanCardsContainer();
    cardsManager.renderAllCards();
  }
})

function deleteProduct(code) {
  cardsManager.removeCard(code);
  inventary.delete(code);
}


