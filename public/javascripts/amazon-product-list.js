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
        $("#container").html("");
        for (var i = 0; i < response.length; i++ ){
          var img= document.createElement("img");
          img.src= response[i].MediumImage[0].URL[0]
          $(.col-md-4.col-sm-6.col-xs-12)
          $("#container").append(response[i].DetailPageURL[0] + "<br>");
          $("#container").append(response[i].ItemAttributes[0].Title[0] + "<br>");
          $("#container").append(img);
          $("#container").append(response[i].ItemAttributes[0].Brand[0] + "<br>" + "<br>");
        };
      });
    });
  });



