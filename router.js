// Asi podemos exportar rutas a otro archivo
const express = require("express");
const router = express.Router()

router.get("/user", (req, res) => {
  res.send("USER");
});

router.get("/home", (req, res) => {
  res.send("HOME");
});

module.exports = router;