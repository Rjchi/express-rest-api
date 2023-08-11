const express = require("express");

// Con este modulo podremos concatenar directorios
const path = require("path");

const app = express();

// Con este podemos servir contenido de forma mas dinamica
// todo lo que este dentro de esta carpeta va a ser publico y va a poder ser accedido
app.use("/public", express.static(path.join(__dirname, 'ejemplo')));

app.all("/", (req, res) => {
  res.send("Home");
});

app.listen(5000, () => console.log("PORT 5000"));
