const ObjectId = require('mongoose').Types.ObjectId;
const Vestido = require('../models/vestidos');

exports.list = async (req, res) => {
    await Vestido.find({}).exec(function(err, docs) {
        res.render("vestidos/index", { vestidos : docs, msg : res.msg});
    });
}

exports.show = (req, res) => {
    res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {
    if (req.method == "POST") {
        const vestidoDocument = new Vestido({tipo: req.body.tipo, tamanho: req.body.tamanho, preco: req.body.preco});
        vestidoDocument
            .save()
            .then(result => {
                res.render("vestidos/create", { msg: 'Vestido cadastrado com sucesso.' });
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    } else {
        res.render('vestidos/create');
    }
}

exports.update = async (req, res) => {
    if(req.method == "POST"){
        const filter = { _id: new ObjectId(req.body.id) };
        console.log(filter);
        const update = { tipo: req.body.tipo };
        console.log(update);
        await Vestido.findOneAndUpdate(filter, update).then(function (err, result) {
            console.log(req.body.nome);
            msg = "Vestido atualizado com sucesso!";
            res.msg = msg;
            exports.list(req, res);
        });
    } else {
        await Vestido.findOne({ _id : new ObjectId(req.params.vestidoId)}).then(function (result) {
            //console.log(result);
            res.render(`vestidos/update`, { doc : result });
        })
        
    }

}

exports.delete = async (req, res) => {
    var msg;
    await Vestido.findOneAndDelete({ _id: new ObjectId(req.params.vestidoId) }).then(function (err, data) {
        msg = "Vestido excluído com sucesso!";
        res.msg = msg;
        exports.list(req, res);
    });
}

