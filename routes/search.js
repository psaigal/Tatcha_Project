var express = require('express');
var router = express.Router();
// var AmazonAPI = require('amz-products');
var amazon = require('amazon-product-api');


router.post('/', function (req, res) {
  var data = req.body //data: formData
  var searchTerm = data.searchTerm //userInput


  var client = amazon.createClient({
    awsId: process.env.AccessID,
    awsSecret: process.env.SecretKey,
    awsTag: process.env.AssociateTag
  });

  var x = client.itemSearch({
  searchIndex: 'All',
  keywords: searchTerm,
  responseGroup: 'ItemAttributes,Offers,Images'
  }, function(err, results, response) {
    if (err) {
      console.log(err);
    } else {
      res.send(results);  // products
      // console.log(response); // response (containing TotalPages, TotalResults, MoreSearchResultsUrl and so on)
    }

    // res.send(x)
  });



   // //somehow you need to make a formatted query string, => use to make a GET request to the amazon api
   //  var x = amazon.getItemsInBrowseNode({
   //    Service:"AWSECommerceService",
   //    Operation:"ItemSearch",
   //    SearchIndex:"All",
   //    Keywords: searchTerm
   //  },
   //  function(err, res){
   //    console.log(res)
   //    res.send(x);//send amazon api response back to client
   //  });//end amazon.getitems

  // res.send(x)
});



module.exports = router;
