const express = require("express");
const router = express.Router();
const vestidosController = require("../controllers/vestidosController");

router.get("/index", vestidosController.list);
router.get("/show/:vestidoId/", vestidosController.show);
router.get("/create/", vestidosController.create);
router.post("/create/", vestidosController.create);
router.post("/:vestidoId/update", vestidosController.update);
router.get("/:vestidoId/update", vestidosController.update);
router.get("/:vestidoId/delete", vestidosController.delete);

router.get('/vestido/index',function(req, res, next) {
  res.render('vestidos/index')
});
module.exports = router;