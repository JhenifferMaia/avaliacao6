const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const VestidosSchema = new Schema({
        tipo: { type: String, required: true },
        tamanho: { type: String, required: true },
        preco: { type: String, required: true }
    },
    opts
);

VestidosSchema.virtual("url").get(function () {
    return `/vestidos/${this._id}`;
});


module.exports = mongoose.model("vestidos", VestidosSchema, "vestidos");