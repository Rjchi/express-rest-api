const express = require("express");
// con esto requerimos el modulo ejs para trabajar con plantillas
require("ejs");
const { render } = require("ejs");
const path = require("path");
const app = express();

// Configuramos el motor de plantillas que vamos a utilizar
app.set("view engine", "ejs");
// configuracion para que sepa donde esta la plantilla que deseo renderizar
app.set("views", path.join(__dirname, "src/views"));

app.get("/", (req, res) => {
  const title = "Esto es un titulo";
  // De esta manera podemos mandar valores a la vista html
  res.render("index", { title: title });
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/users", (req, res) => {
  res.render("users");
});

app.listen(5000, () => console.log("PORT 5000"));
