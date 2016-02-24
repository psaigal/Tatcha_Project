var express = require('express');
var router = express.Router();
var amazon = require('amazon-product-api');


router.post('/', function (req, res) {
  var data = req.body //data: formData
  var searchTerm = data.searchTerm //userInput


  var client = amazon.createClient({
    awsId: process.env.AccessID,
    awsSecret: process.env.SecretKey,
    awsTag: process.env.AssociateTag
  });

  var getProducts = client.itemSearch({
  searchIndex: 'All',
  keywords: searchTerm,
  responseGroup: 'ItemAttributes,Offers,Images'
  }, function(err, results, response) {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});



module.exports = router;
