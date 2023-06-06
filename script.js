$(document).ready(function() {

    $('.filter-button').click(function() {
    // Remove active class from all filter buttons
    $('.filter-button').removeClass('active');
    
    // Add active class to the clicked filter button
    $(this).addClass('active');
    
    var value = $(this).attr('data-filter');
    if (value === 'projects') {
      $('.projects-all').show('3000');
      $('.about-content').hide('5000');
    } else if (value === 'about') {
      $('.projects-all').hide('3000');
      $('.about-content').show('1000');
    }
  });


 
  $('.filter-button').click(function() {
    // Remove active class from all sub-filter buttons
    $('.filter-button').removeClass('active');
    
    // Add active class to the clicked sub-filter button
    $(this).addClass('active');
    
    var value = $(this).attr('data-filter');
    
    if (value === 'AllProjects') {
      $('.showcase-container').hide('1000');
      $('.projects-container').show('1000');
    } else if (value === 'Showcase') {
      $('.projects-container').hide('1000');
      $('.showcase-container').show('1000');
    }
  });

  
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
        var scrollPosition = project.offset().top;
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        var projectTop = project.position().top;

        if (projectTop > windowHeight) {
          $(window).scrollTop(windowScrollTop + projectTop - windowHeight);
        }
      }
    });
  });

  // Infinite scroll
  $('#projects-container').scroll(function() {
    if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      loadProjects();
    }
  });

  function loadProjects() {
    // Code to load more projects
  }
});


