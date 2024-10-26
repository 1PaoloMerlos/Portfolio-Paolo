$(document).ready(function() {
  $('.sub-filter-button').click(function() {
    // Remove active class from all sub-filter buttons
    $('.sub-filter-button').removeClass('active');
    
    // Add active class to the clicked sub-filter button
    $(this).addClass('active');
    
    var value = $(this).attr('data-filter');
    if (value === 'all') {
      $('.projects').show('1000');
    } else {
      $('.projects').hide('3000');
      $('.projects.' + value).show('3000');
    }
  });

  $('.projects').click(function() {
    var project = $(this);
    var projectDetails = project.find('.project-details');
    var isDetailsVisible = projectDetails.is(':visible');

    projectDetails.slideToggle(function() {
      if (isDetailsVisible) {
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        var projectTop = project.position().top;

        if (projectTop > windowHeight) {
          $(window).scrollTop(windowScrollTop + projectTop - windowHeight);
        }
      }
    });
  });

  // $(document).ready(function() {
//   $('.sub-filter-button').click(function() {
//     $('.sub-filter-button').removeClass('active');
//     $(this).addClass('active');

//     if ($(this).hasClass('active')) {
//      let filterValue = $(this).attr("data-filter");
//      if (filterValue == 'all') {
//       $('.projects').show('1000');
//     }else {
//       $('.projects' + `.${filterValue}`).show('1000')
//       $('.projects').hide('1000');

//     }
//     }

    

// })})



});


