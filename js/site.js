$.noConflict();
(function($) {
  $(document).ready(function(){
    $('#button').attr('disabled', 'disabled');
    $('#email').on('keyup focus blur', function() {
      var currentValue = $(this).val();
      var validPattern = $(this).attr('pattern');
      if(currentValue.match(validPattern)) {
        $('#button').removeAttr('disabled');
      }
      else{
        $('#button').attr('disabled', 'disabled');
      }
    });
    $('#movies').on('submit', function(e) { 
      e.preventDefault(); 
      window.location.reload();
      $("#name").val("");
      $("#email").val("");
      $("#fav").val("");
    }); 
  });
})(jQuery);