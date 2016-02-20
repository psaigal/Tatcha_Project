
$( document ).ready(function() {
    // console.log($("#submit"));

    $('#submit').click(function(event) {
      var userInput = $('#product_name').val();
      var formData = {searchTerm: userInput};
      event.preventDefault();
      console.log(formData);
      var request = $.ajax({
        url: '/search',
        type: 'POST',
        data: formData
      });
      request.done(function(response){
        console.log(response);
      });
  });
});
