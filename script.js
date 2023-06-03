$(document).ready(function() {
  $('.filter-button').click(function() {
    var value = $(this).attr('data-filter');
    if (value === 'projects') {
      $('.projects-all').show('1000');
      $('.about-content').hide('3000');
    } else if (value === 'about') {
      $('.projects-all').hide('3000');
      $('.about-content').show('1000');
    }
  });

  $('.sub-filter-button').click(function() {
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

document.addEventListener('DOMContentLoaded', function() {
  var carouselExample = document.getElementById('carouselExample');
  var carousel = new bootstrap.Carousel(carouselExample, {
    interval: 2000,
    pause: false, // Disable pausing on hover
    ride: 'carousel' // Enable automatic cycling
  });
});
