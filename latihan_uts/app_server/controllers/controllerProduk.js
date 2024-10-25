const Produk = require("../models/produk");

const produkIndex = (req, res, next) => {
    Produk.find({}, { __v: 0 })
      .then((produk) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: produk
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

const produkInsert = (req, res, next) => {
    const produk = new Produk({
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga,
      stok: req.body.stok,
    });
  
    produk.save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Product Successfully Created",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = { produkIndex, produkInsert };