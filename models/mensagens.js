const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const MensagemSchema = new Schema({
        titulo: { type: String, required: true },
        texto: { type: String, required: true }
    },
    opts
);

MensagemSchema.virtual("url").get(function () {
    return `/mensagens/${this._id}`;
});


module.exports = mongoose.model("mensagens", MensagemSchema, "mensagens");