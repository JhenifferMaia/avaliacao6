const express = require('express');
const app = express();
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

/*
app.listen(8081, function(){
  console.log("Teste")
})
*/


//SET DEBUG=avaliacao6:* & npm start
//export DEBUG=avaliacao6:* & npm start
//controller: dados do banco e telas
//view
//model
//controllers
