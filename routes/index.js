var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const indexPath = path.join(__dirname,'..','client','index.html');
  res.sendFile(indexPath);
});

module.exports = router;
