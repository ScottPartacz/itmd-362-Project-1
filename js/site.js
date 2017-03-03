$.noConflict();
(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  $(document).ready(function(){
    $('#movies').on('submit', function(e) { 
      e.preventDefault(); 
      window.location.reload();
      $("#name").val("");
      $("#email").val("");
      $("#fav").val("");
      }); 
      $('#email').on('keyup focus blur', function() {
       var currentValue = $(this).val();
       var validPattern = $(this).attr("pattern");
       if (currentValue.match(validPattern)) {
          $("#submit").addClass("active");
        } 
        else {
          $("#submit").removeClass("active");
        }
      });
     });
})(jQuery);