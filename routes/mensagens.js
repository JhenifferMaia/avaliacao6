const express = require("express");
const router = express.Router();
const mensagensController=require("../controllers/mensagensController");

router.get("/index", mensagensController.list);
router.get("/show/:mensagemId/", mensagensController.show);
router.get("/create/", mensagensController.create);
router.post("/create/", mensagensController.create);
router.post("/:mensagemId/update", mensagensController.update);
router.get("/:mensagemId/update", mensagensController.update);
router.get("/:mensagemId/delete", mensagensController.delete);

router.get('/mensagem/index',function(req, res, next) {
  res.render('mensagens/index')
});
module.exports = router;