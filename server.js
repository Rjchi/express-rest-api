const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/products", (req, res) => {
    res.send("Obteniendo Productos");
})

app.get("/products/:id", (req, res) => {
    res.send("Obteniendo Producto");
})

app.post("/products", (req, res) => {
    res.send("Creando Producto");
})

app.put("/products/:id", (req, res) => {
    res.send("Actualizando Producto");
})

app.delete("/products/:id", (req, res) => {
    res.send("Eliminando Producto");
})

app.listen(5000, () => console.log("PORT 5000"))