$(document).ready(function () {
    // Projects
    //append content for each project from json file using their id and add their id from json as #id
  $.getJSON('Content/projects.json', function(data) {
    const $projectsContainer = $('.projects');
    let activeFilter = null; // currently active category

    function renderProjects(filtered = data) {
      $projectsContainer.empty();

      if (!data.length || filtered.length === 0) {
        $projectsContainer.append(`
          <p class="text-white text-center w-full">There is no specific project</p>
        `);
        return;
      }

      $.each(filtered, function(index, project) {
        const projectId = project.id;
        $projectsContainer.append(`
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" id="${projectId}" 
             class="project group block w-64 h-48 rounded-lg overflow-hidden relative cursor-pointer"
             style="background-image: url('${project.image}'); background-size: cover; background-position: center;">
            <div class="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white">
              <h3 class="text-lg text-center font-bold mb-2">${project.name}</h3>
              <p class="text-sm mb-1 text-center">${project.description}</p>
              <p class="text-xs">${project.technologies.join(', ')}</p>
            </div>
          </a>
        `);
      });
    }

    renderProjects(); // show all initially

    function filterProjects(filter) {
      activeFilter = filter;
      if (!filter || filter === 'all') {
        renderProjects();
      } else {
        const filteredProjects = data.filter(project => project.category.includes(filter));
        renderProjects(filteredProjects);
      }
    }

    // Hover to activate filter
    $('[data-filter]').hover(function() {
      const filter = $(this).data('filter');
      filterProjects(filter);
    });

    // Click to activate filter (for mobile)
    $('[data-filter]').on('click', function() {
      const filter = $(this).data('filter');
      filterProjects(filter);
    });

  }).fail(function() {
    // If JSON file can't be loaded
    $('.projects').html(`<p class="text-white text-center w-full">There is no specific project assign at the moment :(</p>`);
  });


//Typewriter effect for all elements with id "typer"
function typeWriterAll() {
  const elements = document.querySelectorAll("#typer"); 
  let current = 0;
  elements.forEach(el => el.classList.add("hidden"));

  function typeElement(el, text, speed, done) {
    let i = 0;
    el.textContent = "";
    el.classList.remove("hidden");

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        done && done();
      }
    }
    type();
  }

  function next() {
    if (current >= elements.length) return;
    const el = elements[current];
    const text = el.dataset.text || el.textContent;
    if (current > 0) {
        typeElement(el, text, 30, () => {
        current++;
        next();
    });
    } else {
        typeElement(el, text, 70, () => {
        current++;
        next();
    });
  }
    }
  next();
};//();
typeWriterAll();


// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const attr = this.getAttribute('href');
        if (attr && attr!== "#") {
            const target = document.querySelector(attr);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});



//Mobile Navbar on click toggles
$('#mobileNavbar').on('click', function () { 
  $('#navbar-hamburger').toggleClass('hidden');
});

$('#navbar-hamburger a').on('click', function () { 
  $('#navbar-hamburger a')
    .removeClass('bg-gray-700 text-white')
    .addClass('text-gray-900');
    
  $(this)
    .addClass('bg-gray-700 text-white')
    .removeClass('text-gray-900');
});

$(window).on('click', function (e) {
  if (!$(e.target).closest('#navbar-hamburger, #mobileNavbar').length) {
    $('#navbar-hamburger').addClass('hidden');
  }
});


/* ======================== =========== CONTACT FORM  ============= ======================= */

//     document.addEventListener("DOMContentLoaded", function () {
//         const contactForm = document.querySelector("#contact-form");
//         const fields = {
//             name: document.querySelector("#name"),
//             email: document.querySelector("#email"),
//             message: document.querySelector("#message"),
//             file: document.querySelector("#file"),
//             submit: document.querySelector("#submit")
//         };
 
//         const successMessageDiv = document.querySelector("#success-message");
//         // Email Validation
//         function validateEmail(email) {
//             const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             return re.test(String(email).toLowerCase());
//         }
    
//            // Form Validation
//         function validateForm() {
//             clearAllErrors(); // clear previous errors
//             let isValid = true; // assume invalid until proven valid
    
//             // 1. Name Validation
//             if (!fields.name || fields.name.value.trim() === "") {
//                 showError('name', "Name is required.");
//                 isValid = false;
//             }
    
//             // 2. Email Validation
//             if (!fields.email || fields.email.value.trim() === "") {
//                 showError('email', "Email is required.");
//                 isValid = false;
//             } else if (!validateEmail(fields.email.value.trim())) {
//                 showError('email', "Invalid email format.");
//                 isValid = false;
//             }
    
//             // 3. Message Validation
//             if (!fields.message || fields.message.value.trim() === "") {
//                 showError('message', "Message is required.");
//                 isValid = false;
//             }
//             //4. file validation
//             // const file = fields.file.files[0];
//             // const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
//             // const maxSizeMB = 5 * 1024 * 1024; // 5MB Limit

//             // if (!allowedTypes.includes(file.type)) {
//             //     showError('file', `Invalid file type. Only ${allowedTypes.join(', ')} are allowed.`);
//             //     isValid = false;
//             // } else if (file.size > maxSizeMB) {
//             //         showError('file', `File is too large. Maximum size is ${maxSizeMB / 1024 * 2}MB.`);
//             //         isValid = false;
//             // }
    
//             // return isValid; // Return true if no errors were found 
//             //files attachements don't work in formspree
//         }
//         contactForm.addEventListener("submit", function (event) {
//             event.preventDefault();        
//             if (validateForm()) {
//                 const formData = new FormData(contactForm);
//                 fetch(contactForm.action, {
//                     method: contactForm.method,
//                     body: formData,
//                     headers: {
//                         'Accept': 'application/json'
//                     }
//                 })
//                 .then(response => {
//                     if (response.ok) {
//                         showPopup();
//                         return response.json();
                       
//                     } else {
//                          return response.json().then(data => { throw new Error(data.error || 'Something went wrong :(') });
//                     }
//                 })
//                 .catch((error) => {
//                     console.error('Error submitting form via AJAX:', error);
//                     showError('submit', `Submission failed: ${error.message}. Please try again.`);
//                 });
        
//             }
    
//     }); // End DOMContentLoaded
// });

//popUp
function showPopup() {
    document.getElementById('popup').classList.remove('hidden');
  }
  
  function closePopup() {
    document.getElementById('popup').classList.add('hidden');
  }
  
});