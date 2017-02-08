$.noConflict();

jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#email').on('keyup', function(){
    var currentvalue = $(this).val();
    var vaildpattern = $(this).attr('pattern');
    console.log(currentvalue,vaildpattern);
    if(currentvalue.match(vaildpattern)){
      $('#submit').addClass('active');
    }
    else {
      $('#submit').removeClass('active');
    }
  });
  
});