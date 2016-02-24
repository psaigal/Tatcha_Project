$( document ).ready(function() {
  productSearch();

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
      var searchHeader = document.createElement("H1");
      searchHeader.id = "search-header";
      var text = document.createTextNode("Search Results for " + userInput.charAt(0).toUpperCase() + userInput.slice(1));
      searchHeader.appendChild(text);
      $(".container-fluid").append(searchHeader);
      amazonProductsResponse(response);
    });
  });
};


var amazonProductsResponse = function(response) {
  for (var i = 0; i < response.length; i++){
    var product = document.createElement("div");
    product.className = "col-xs-6";
    var productImg = document.createElement("img");
    productImg.src = response[i].MediumImage[0].URL[0];
    productImg.className = "product-image";
    var productImgContainer = document.createElement("div");
    productImgContainer.id = "product-image-container";
    productImgContainer.appendChild(productImg);
    var amazonImg = document.createElement("img");
    amazonImg.src = "/Amazon-Button.png";
    amazonImg.className = "amazon-product-link";
    var amazonLink = document.createElement('a');
    amazonLink.href = response[i].DetailPageURL[0];
    amazonLink.appendChild(amazonImg)
    var price = response[i].OfferSummary[0].LowestNewPrice[0].FormattedPrice[0];
    $(product).append("<p id='product-description'>" + response[i].ItemAttributes[0].Title[0] + "</p>");
    $(product).append("<div class='line_break'></div>");
    $(product).append("<br>");
    $(product).append(productImgContainer);
    $(product).append("<br>");
    $(product).append("<p>" + price + "</p>");
    $(product).append(amazonLink);
    $(".container-fluid").append(product);
  };
   while(($children = $(':not(.row)>.col-xs-6:lt(2)')).length) {
    $children
    .parent()
    .append(
    $('<div class="row"></div>')
      .append($children.remove())
    );
  }
};

