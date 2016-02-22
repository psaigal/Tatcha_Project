$( document ).ready(function() {
  $('#downClick').on('click', function(event) {
    var target = $('#downClick');
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top + 100
        }, 500);
    }
  });


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
        console.log(response)
        $(".container-fluid").html("");
        var counter = 1
        for (var i = 0; i < response.length; i++){
          var product = document.createElement("div");
          product.className = "col-md-4";
          var img = document.createElement("img");
          img.src = response[i].MediumImage[0].URL[0];
          img.id = "product-image"
          var a = document.createElement('a');
          a.href = response[i].DetailPageURL[0];
          a.id = "product-link"
          var linkText = document.createTextNode("Shop on Amazon");
          a.appendChild(linkText);
          a.title = "Shop on Amazon";
          $(product).append("<p id='product-description'>" + response[i].ItemAttributes[0].Title[0] + "</p>");
          $(product).append("<div class='line_break'></div>");
          $(product).append(img);
          $(product).append("<br>")
          $(product).append(a);
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
  });



