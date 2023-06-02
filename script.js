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

  $('.projects').click(function() {
    $(this).find('.project-details').slideToggle();
  });

  const projectsContainer = document.getElementById('projects-container');
  const scrollTrigger = document.getElementById('scroll-trigger');

  // Function to add a new project to the container
  function addProject() {
    const projectHTML = `
      <!-- ...existing project HTML... -->
    `;
    const projectElement = document.createElement('div');
    projectElement.classList.add('projects');
    projectElement.innerHTML = projectHTML;
    projectsContainer.appendChild(projectElement);
  }

  // Add initial projects (you can replace this with your own logic to load projects)
  for (let i = 0; i < 8; i++) {
    addProject();
  }

  // Infinite scrolling
  projectsContainer.addEventListener('scroll', function() {
    if (projectsContainer.scrollTop + projectsContainer.clientHeight >= scrollTrigger.offsetTop) {
      addProject();
    }
  });

  // Load initial projects
  loadProjects();

  // Infinite scroll
  $('#projects-container').scroll(function() {
    if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      loadProjects();
    }
  });

  // Function to load projects
  function loadProjects() {
    var projects = [
      {
        name: 'Project 1',
        description: 'Description of Project 1',
        imageSrc: '/Content/project1.jpg'
      },
      // Add more projects as needed
    ];

    var projectRow = $('#project-row');

    // Append projects to the project row
    projects.forEach(function(project) {
      var projectHTML = `
        <div class="projects">
          <div class="project-thumbnail">
            <img src="${project.imageSrc}" alt="${project.name}">
          </div>
          <h3>${project.name}</h3>
          <div class="project-details">
            <p>${project.description}</p>
          </div>
        </div>
      `;

      projectRow.append(projectHTML);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var carouselExample = document.getElementById('carouselExample');
  var carousel = new bootstrap.Carousel(carouselExample, {
    interval: 2000, // Set the interval time in milliseconds (e.g., 2000 = 2 seconds)
    pause: false, // Disable pausing on hover
    ride: 'carousel' // Enable automatic cycling
  });
});
