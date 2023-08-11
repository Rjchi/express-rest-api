// PARA PROBARLO SIN POSTMAN PODEMOS UTILIZAR LA EXTENSION THUNDER CLIENT

const express = require("express");
const morgan = require("morgan");

const app = express();
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 3000,
  },
  {
    id: 2,
    name: "pep",
    price: 3030,
  },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  // en este caso finc esta buscando un recurso con el mismo id que viene de la URL
  const producto = products.find((p) => p.id === parseInt(id));
  res.json(producto);
});

app.post("/products", (req, res) => {
  console.log(req.body);
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send("Creando Producto");
});

app.put("/products/:id", (req, res) => {
  const newData = req.body;
  const { id } = req.params;
  // en este caso map los recorre en caso de que exista lo reemplaza y si no lo deja igual
  const newProducts = products.map((p) =>
    p.id === parseInt(id) ? { ...p, ...newData } : p
  );
  res.json(newProducts);
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  // en este caso filter devuelve todos los valores diferentes a el id de la url
  const producto = products.filter((p) => p.id !== parseInt(id));
  res.sendStatus(204);
});

app.listen(5000, () => console.log("PORT 5000"));
