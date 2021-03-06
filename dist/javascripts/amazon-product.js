$( document ).ready(function() {
    $('#submit').click(function(event) {
      document.getElementsByClassName("home")[0].style.display = "none";
      var userInput = $('#product_name').val();
      var formData = {searchTerm: userInput};

      event.preventDefault();
      var request = $.ajax({
        url: '/search',
        type: 'POST',
        data: formData
      });

      request.done(function(response){
        // console.log(JSON.stringify(response))
        $(".container-fluid").html("");
        var counter = 1
        for (var i = 0; i < response.length; i++){
          var product = document.createElement("div");
          product.className = "col-md-4";
          var product_img = document.createElement("img");
          product_img.src = response[i].MediumImage[0].URL[0];
          product_img.className = "product-image";
          var amazon_img = new Image();
          amazon_img.src = '/Amazon-Button.png';
          var a = document.createElement('a');
          a.href = response[i].DetailPageURL[0];
          amazon_img.className = "product-link"
          amazon_img.onclick = function() {
              window.location.href = a.href;
          };
          $(product).append("<p id='product-description'>" + response[i].ItemAttributes[0].Title[0] + "</p>");
          $(product).append("<div class='line_break'></div>");
          $(product).append(product_img);
          $(product).append("<br>")
          $(product).append(amazon_img);
          $('.container-fluid').append(product);
        };
        while(($children = $(':not(.row)>.col-md-4:lt(2)')).length) {
        $children
            .parent()
            .append(
                $('<div class="row"></div>')
                    .append($children.remove())
        );
        }
      });
    });

  $('#downClick').on('click', function(event) {
    var target = $('#downClick');
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top + 100
        }, 500);
    }
  });
});



