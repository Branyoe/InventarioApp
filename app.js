import Alert from "./models/Alert.js";
import Card from "./models/Card.js";
import CardsManager from "./models/CardsManager.js";
import Form from "./models/Form.js";
import Inventory from "./models/Inventory.js";
import Product from "./models/Producto.js";
import ToastController from "./models/ToastController.js";
import Utilidades from "./Utilidades.js";


const inventory = new Inventory();
const saveBtn = Utilidades.selector('btn-submit');
const searchBtn = Utilidades.selector('btn-search');
const searchInp = Utilidades.selector('search-inp');
const cardsContainer = Utilidades.selector('cardsContainer');
const cardsManager = new CardsManager(cardsContainer);
const alert = new Alert('No existen resultados')
const form = new Form(
  Utilidades.selector('nameInp'),
  Utilidades.selector('quantityInp'),
  Utilidades.selector('costInp')
);
const toast = document.getElementById('liveToast');
const toastComponent = new ToastController(toast);
// const toastComponent = {
//   action: Utilidades.selector('action'),
//   code: Utilidades.selector('code'),
//   name: Utilidades.selector('name'),
//   quantity: Utilidades.selector('quantity'),
//   cost: Utilidades.selector('cost')
// }

let codeForUpdate = 0;
let updateFlag = false;

saveBtn.addEventListener('click', e => {
  e.preventDefault();

  if (!updateFlag) {
    saveBtnHandleAdd();
  } else {
    saveBtnHandleUpdate();
  }
});

searchBtn.addEventListener('click', e => {
  e.preventDefault();

  const searchedCode = Number(searchInp.value);
  const foundProduct = inventory.search(searchedCode);

  cardsManager.removeCards();
  alert.remove();

  if (!foundProduct) {
    cardsManager.removeCards();
    cardsContainer.append(alert.render());
    return
  }
  cardsManager.renderCard(foundProduct.getCode);
});

searchInp.addEventListener('input', e => {
  if (searchInp.value.toString() === '') {
    alert.remove();
    cardsManager.removeCards();
    cardsManager.renderCards();
  }
})

function deleteProduct(code) {
  toastComponent.set({
    action: 'Deleted Product',
    ...inventory.search(code).getValue
  })
  toastComponent.show();
  cardsManager.removeCard(code);
  inventory.delete(code);
}

function updateProduct(code) {
  updateFlag = true;
  setSaveBtnMode(true);
  codeForUpdate = code;
  form.setValue(inventory.search(code));
}

function saveBtnHandleUpdate() {
  inventory.update(codeForUpdate, form.getValue);
  cardsManager.update(codeForUpdate, form.getValue);
  cardsManager.rerenderCards();
  form.reset();
  toastComponent.set({
    action: 'Updated Product',
    ...inventory.search(codeForUpdate).getValue
  })
  toastComponent.show();
  setSaveBtnMode(false);
  updateFlag = false;
}

function saveBtnHandleAdd() {
  const newProducto = new Product(form.getValue);
  inventory.add(newProducto);

  const card = new Card(
    inventory.getLastProduct,
    code => deleteProduct(code),
    code => updateProduct(code)
  )
  alert.remove();
  cardsManager.add(card);
  cardsManager.rerenderCards();
  form.reset();
  toastComponent.set({
    action: 'Added Product',
    ...newProducto.getValue
  })
  toastComponent.show();
}

function setSaveBtnMode(isUpdate){
  if(isUpdate){
    saveBtn.classList.add('btn-success');
    saveBtn.classList.remove('btn-primary');
    return
  }
  saveBtn.classList.remove('btn-success');
  saveBtn.classList.add('btn-primary');
}

