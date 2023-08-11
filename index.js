const express = require("express")
const app = express()

// Importamos las rutas que hay en el archivo router.js
const router = require("./router");

app.use(router)

app.listen(5000, () => console.log("PORT 5000"))