// const Inventario = require("./models/Inventario.js");
// const Producto = require("./models/Producto");
import Card from "./models/Card.js";
import Form from "./models/Form.js";
import Inventario from "./models/Inventario.js";
import Producto from "./models/Producto.js";
import Utilidades from "./Utilidades.js";

const form = new Form(
  Utilidades.selector('nombre'),
  Utilidades.selector('cantidad'),
  Utilidades.selector('costo')
)
const btnSubmit = Utilidades.selector('btn-submit');

btnSubmit.addEventListener('click', e => {
  const newProducto = new Producto(form.getValue)
});
const inventario = new Inventario(form, btnSubmit, cardsContainer);

const cardsContainer = Utilidades.selector('contenedorCartas');


