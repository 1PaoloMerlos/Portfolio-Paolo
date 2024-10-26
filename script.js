$(document).ready(function() {
  $(".sub-filter-button").on('click', function() {
    $(this).addClass('active');
    if ($(this).hasClass('active')) {
      $(".sub-filter-button").not($(this)).removeClass("active"); 
      $(".subfilters-buttons a").click(function(){
        $(this).tab('show');
      });
    }
  });
});


 