const express = require('express');
const router = express.Router();

const produkController = require("../controllers/controllerProduk");
router.get("/produk", produkController.produkIndex);
router.post("/produk", produkController.produkInsert);

module.exports = router;