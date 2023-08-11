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

// Especificamos donde esta el css
app.use("/public", express.static(path.join(__dirname, 'src/public')));

app.get("/", (req, res) => {
  const title = "Esto es un titulo";
  // De esta manera podemos mandar valores a la vista html
  res.render("index", { title: title });
});

app.get("/home", (req, res) => {
  let isActive = true

  res.render("home", {isActive:isActive});
});

app.get("/users", (req, res) => {
  const users = [
    {
      id:1,
      name:"Rosa",
    },
    {
      id:2,
      name:"Pedro",
    },
    {
      id:3,
      name:"Esteban",
    }
  ]

  res.render("users", { users: users });
});

app.listen(5000, () => console.log("PORT 5000"));
