import Alert from "./models/Alert.js";
import Card from "./models/Card.js";
import CardsManager from "./models/CardsManager.js";
import Form from "./models/Form.js";
import Inventory from "./models/Inventory.js";
import Product from "./models/Product.js";
import ToastController from "./models/ToastController.js";
import Utils from "./Utils.js";


const alert = new Alert('No existen resultados')
const cardsContainer = Utils.selector('cardsContainer');
const cardsManager = new CardsManager(cardsContainer);
const form = new Form(
  Utils.selector('nameInp'),
  Utils.selector('quantityInp'),
  Utils.selector('costInp')
);
const inventory = new Inventory();
const saveBtn = Utils.selector('btn-submit');
const searchBtn = Utils.selector('btn-search');
const searchInp = Utils.selector('search-inp');
const toast = Utils.selector('liveToast');
const toastComponent = new ToastController(toast);
const sortBtn = Utils.selector('sort-btn')

let codeForUpdate = 0;
let updateFlag = false;
let isShortUp = true;

saveBtn.addEventListener('click', e => {
  e.preventDefault();

  if (!updateFlag) {
    saveBtnHandleAdd();
  } else {
    saveBtnHandleUpdate();
  }
  alert.remove();
  cardsManager.renderCards();
  form.reset();
});

searchBtn.addEventListener('click', e => {
  e.preventDefault();

  const searchedCode = Number(searchInp.value);
  const foundProduct = inventory.search(searchedCode);

  alert.remove();

  if (!foundProduct) {
    cardsManager.removeCards();
    cardsContainer.append(alert.render());
    return
  }
  cardsManager.renderCard(foundProduct.getCode);
});

sortBtn.addEventListener('click', e => {
  e.preventDefault();

  isShortUp = !isShortUp;
  if (!isShortUp) {
    sortBtn.classList.add('filterItmSelected');
    cardsManager.renderInvertedCards();
  } else {
    sortBtn.classList.remove('filterItmSelected');
    cardsManager.renderCards();
  }
})

searchInp.addEventListener('input', () => {
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
  cardsManager.deleteCard(code);
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
  cardsManager.add(card);
  toastComponent.set({
    action: 'Added Product',
    ...newProducto.getValue
  })
  toastComponent.show();
}

function setSaveBtnMode(isUpdate) {
  if (isUpdate) {
    saveBtn.classList.add('btn-success');
    saveBtn.classList.remove('btn-primary');
    return
  }
  saveBtn.classList.remove('btn-success');
  saveBtn.classList.add('btn-primary');
}

