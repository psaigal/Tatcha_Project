$( document ).ready(function() {
  productSearch();

  scrollDown();

  $(".carousel").carousel({
    interval: 2000
  });
});


var productSearch = function() {
  $('#submit').click(function(event) {
    document.getElementById("this-carousel-id").style.display = "none";
    var userInput = $("#product_name").val();
    var formData = {searchTerm: userInput};

    event.preventDefault();
    var request = $.ajax({
      url: '/search',
      type: 'POST',
      data: formData
    });

    request.done(function(response){
      $(".container-fluid").empty();
      amazonProductsResponse(response);
    });
  });
};


var amazonProductsResponse = function(response) {
  for (var i = 0; i < response.length; i++){
    var product = document.createElement("div");
    product.className = "col-md-4";
    var product_img = document.createElement("img");
    product_img.src = response[i].MediumImage[0].URL[0];
    product_img.className = "product-image";
    var amazon_img = new Image();
    amazon_img.src = "/Amazon-Button.png";
    amazon_img.className = "amazon-product-link";
    var a = document.createElement('a');
    a.href = response[i].DetailPageURL[0];
    a.appendChild(amazon_img)
    $(product).append("<p id='product-description'>" + response[i].ItemAttributes[0].Title[0] + "</p>");
    $(product).append("<div class='line_break'></div>");
    $(product).append(product_img);
    $(product).append("<br>")
    $(product).append(a);
    $(".container-fluid").append(product);
  };
};


var scrollDown = function() {
  var searchHeight = 614; //pixel top offset of search bar
  $(".downClick").on("click", function(event) {
    var target = $(".downClick");
    if( target.length ) {
      event.preventDefault();
      var vertical = searchHeight - target.offset().top;
      $("html, body").animate({
          scrollTop: target.offset().top + vertical
      }, 500);
    }
  });
};
