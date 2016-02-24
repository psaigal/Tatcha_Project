var express = require('express');
var router = express.Router();
var amazon = require('amazon-product-api');

/* GET home page. */
router.get('/', function(req, res, next) {

  var client = amazon.createClient({
    awsId: process.env.AccessID,
    awsSecret: process.env.SecretKey,
    awsTag: process.env.AssociateTag
  });

  var y = client.itemSearch({
    searchIndex: 'All',
    keywords: "Tatcha",
    responseGroup: 'ItemAttributes, Images'
    }, function(err, results, response) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { title: 'Tatcha Coding Challenge', indexResults: results});

    }
  });


});



module.exports = router;
