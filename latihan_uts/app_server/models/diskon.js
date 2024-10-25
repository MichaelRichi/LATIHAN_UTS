const mongoose = require("mongoose");

const diskonSchema = new mongoose.diskonSchema({
    produk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produk',
        required: true,
    },
    persentase_diskon:{
        type: Number,
    },
    tanggal_mulai:{
        type: Date,
    },
    tanggal_akhir:{
        type: Date,
    },
    keterangan:{
        type: String,
    },
});

const Diskon = mongoose.model('Diskon', diskonSchema);
module.exports = Diskon;