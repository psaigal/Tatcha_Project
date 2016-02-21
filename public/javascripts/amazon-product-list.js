
$( document ).ready(function() {
    // console.log($("#submit"));

    $('#submit').click(function(event) {
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

          $("#container").append(response[i].DetailPageURL[0] + "<br>");
          $("#container").append(response[i].ItemAttributes[0].Title[0] + "<br>");
          $("#container").append(img);
          $("#container").append(response[i].ItemAttributes[0].Brand[0] + "<br>" + "<br>");
        };
      });
  });
});


