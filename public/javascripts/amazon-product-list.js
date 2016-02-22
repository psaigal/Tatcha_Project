$( document ).ready(function() {
  $('#downClick').on('click', function(event) {

    var target = $('#downClick');

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }

  });


    $('#submit').click(function(event) {
      // document.getElementsByClassName("jumbotron")[0].style.display = "none";
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
          var a = document.createElement('a');
          var linkText = document.createTextNode("Shop on Amazon");
          a.appendChild(linkText);
          a.title = "Shop on Amazon";
          a.href = response[i].DetailPageURL[0];
          img.src = response[i].MediumImage[0].URL[0];
          $(product).append(img);
          $(product).append(response[i].ItemAttributes[0].Title[0] + "<br>");
          // $(product).append(response[i].DetailPageURL[0] + "<br>");
          $(product).append(a);
          // $(product).append(response[i].ItemAttributes[0].Brand[0] + "<br>" + "<br>");
          // if(product.id === "col" + (counter)|| product.id === "col"+ counter - 1){
          $('.container-fluid').append(product);
          // }
          // if(i % 2 === 0){
          // // var counter = 1;
          //     var row = document.createElement("div")
          //     row.className = "row";
          //     row.id = "row" + counter;
          //     $('#results').append(row);
          //     counter ++
          //   }
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







    // row = document.createElement("div");
          // row.className = "row";
          // $("#results").append(row);
          // for (var j = 0; j < response.length; j++)

