$(document).ready(function() {
  $('.filter-button').click(function() {
    var value = $(this).attr('data-filter');
    if (value == 'projects') {
      $('.projects').show('1000');
      $('.sub-filters').removeClass('d-none');
    } else {
      $('.projects').hide('3000');
      $('.sub-filters').addClass('d-none');
    }
  });

  $('.sub-filter-button').click(function() {
    var value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.projects').show('1000');
    } else {
      $('.projects').hide('3000');
      $('.projects.' + value).show('3000');
    }
  });
});
