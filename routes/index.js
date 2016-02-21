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
    responseGroup: 'ItemAttributes,Offers,Images'
    }, function(err, results, response) {
    if (err) {
      console.log(err);
    } else {
      // console.log(results[3].MediumImage[0].URL[0])
      // console.log(JSON.stringify(results));  // products
      // console.log(response); // response (containing TotalPages, TotalResults, MoreSearchResultsUrl and so on)
      res.render('index', { title: 'Tatcha Coding Challenge', indexResults: results});

    }
  });


});



module.exports = router;
