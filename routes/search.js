var express = require('express');
var router = express.Router();
// var amazon = require('amazon-product-api');
var AmazonAPI = require('amz-products');


router.post('/', function (req, res) {
  var client = amazon.createClient({

  });
  var data = req.body //data: formData
  var searchTerm = data.searchTerm
  res.send(searchTerm);
});

module.exports = router;
