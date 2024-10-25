const mongoose = require("mongoose");

const transaksikSchema = new mongoose.transaksikSchema({
    produk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produk',
        required: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna',
        required: true,
    },
    jumlah:{
        type: Number,
    },
    total_harga:{
        type: Number,
    },
    tanggal_transaksi:{
        type: Date,
    },
});

const Produk = mongoose.model('Produk', produkSchema);
module.exports = Produk;