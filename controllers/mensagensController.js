const ObjectId = require('mongoose').Types.ObjectId;
const Mensagem = require('../models/mensagens');

exports.list = async (req, res) => {
    await Mensagem.find({}).exec(function(err, docs) {
        res.render("mensagens/index", { mensagens : docs, msg : res.msg});
    });
}

exports.show = (req, res) => {
    res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {
    if (req.method == "POST") {
        const mensagemDocument = new Mensagem({titulo: req.body.titulo, texto: req.body.texto});
        mensagemDocument
            .save()
            .then(result => {
                res.render("mensagens/create", { msg: 'texto criado com sucesso.' });
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    } else {
        res.render('mensagens/create');
    }
}

exports.update = async (req, res) => {
    if(req.method == "POST"){
        const filter = { _id: new ObjectId(req.body.id) };
        console.log(filter);
        const update = { texto: req.body.texto };
        console.log(update);
        await Mensagem.findOneAndUpdate(filter, update).then(function (err, result) {
            console.log(req.body.texto);
            msg = "texto atualizado com sucesso!";
            res.msg = msg;
            exports.list(req, res);
        });
    } else {
        await Mensagem.findOne({ _id : new ObjectId(req.params.mensagemId)}).then(function (result) {
            //console.log(result);
            res.render(`mensagens/update`, { doc : result });
        })
        
    }

}

exports.delete = async (req, res) => {
    var msg;
    await Mensagem.findOneAndDelete({ _id: new ObjectId(req.params.mensagemId) }).then(function (err, data) {
        msg = "texto excluído com sucesso!";
        res.msg = msg;
        exports.list(req, res);
    });
}

