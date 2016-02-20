var express = require('express');
var router = express.Router();
// var amazon = require('amazon-product-api');
var AmazonAPI = require('amz-products');


router.post('/', function (req, res) {
  var data = req.body //data: formData
  var searchTerm = data.searchTerm //userInput
  res.send("HELLO WORLD");
  var amazon = new AmazonAPI({
    awsId: process.env.AccessID,
    awsSecret: process.env.SecretKey,
    awsTag: process.env.AssociateTag
  });


 amazon.getItemsInBrowseNode({
    'SearchIndex': 'All',
    'Keywords': searchTerm
  }, function(err, res){
      console.log(res)
  });
});



module.exports = router;
