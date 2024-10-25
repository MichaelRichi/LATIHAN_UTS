const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.pembayaranSchema({
    transaksi_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaksi',
        required: true,
    },
    metode_pembayaran:{
        type: String,
    },
    jumlah:{
        type: Number,
    },
    tanggal_pembayaran:{
        type: Date,
    },
    status:{
        type: String,
    },
});

const Ulasan = mongoose.model('ulasan', ulasanSchema);
module.exports = Ulasan;