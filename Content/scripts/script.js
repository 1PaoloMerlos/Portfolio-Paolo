$(document).ready(function () {
    // Projects
    //append content for each project from json file using their id and add their id from json as #id
    $.getJSON('Content/projects.json', function (data) {
        $.each(data, function (index, project) {
            const projectId = `${project.id}`;
            $('.projects').append(`
                <div class="project" id="${projectId}"> 
                 <div class="bg-gray-800 p-6 rounded-lg">
                    <img src="${project.image}" alt="${project.name}" class="w-full h-48 object-cover rounded-md">
                    <h3>${project.name}</h3>
                    <p class="project-description">${project.description}</p>
                    <p class="technologies">${project.technologies}</p>
                    <button><a href="${project.url}" target="_blank">View Project</a></button>
                </div></div>
            `);
        });
    });



$('#mobileNavbar').on('click', function (event) { 
    if ($('#navbar-hamburger').hasClass('hidden')) {
        $('#navbar-hamburger').removeClass('hidden');
    } 
    else {
        $('#navbar-hamburger').addClass('hidden');
    }
});

/* ======================== =========== CONTACT FORM  ============= ======================= */

    document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.querySelector("#contact-form");
        const fields = {
            name: document.querySelector("#name"),
            email: document.querySelector("#email"),
            message: document.querySelector("#message"),
            file: document.querySelector("#file"),
            submit: document.querySelector("#submit")
        };
        // Error Messages comment out if enabled   
        // const errorSpans = {
        //     name: document.querySelector("#name-error"),
        //     email: document.querySelector("#email-error"),
        //     message: document.querySelector("#message-error"),
        //     file: document.querySelector("#file-error")
        // };
        const successMessageDiv = document.querySelector("#success-message");
       
        // // error Display
        // function showError(fieldKey, message) {
        //     if (fields[fieldKey]) {
        //         fields[fieldKey].classList.add('invalid');
        //     }
        //     if (errorSpans[fieldKey]) {
        //         errorSpans[fieldKey].textContent = message;
        //         errorSpans[fieldKey].style.display = 'block'; 
        //     }
        // }
    
        // function clearError(fieldKey) {
        //     if (fields[fieldKey]) {
        //         fields[fieldKey].classList.remove('invalid');
        //     }
        //     if (errorSpans[fieldKey]) {
        //         errorSpans[fieldKey].textContent = '';
        //     }
        // }
    
        // function clearAllErrors() {
        //     Object.keys(errorSpans).forEach(key => clearError(key));
        //      successMessageDiv.style.display = 'none';
        //      successMessageDiv.textContent = '';
        // }
    
        // Email Validation
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    
           // Form Validation
        function validateForm() {
            clearAllErrors(); // clear previous errors
            let isValid = true; // assume invalid until proven valid
    
            // 1. Name Validation
            if (!fields.name || fields.name.value.trim() === "") {
                showError('name', "Name is required.");
                isValid = false;
            }
    
            // 2. Email Validation
            if (!fields.email || fields.email.value.trim() === "") {
                showError('email', "Email is required.");
                isValid = false;
            } else if (!validateEmail(fields.email.value.trim())) {
                showError('email', "Invalid email format.");
                isValid = false;
            }
    
            // 3. Message Validation
            if (!fields.message || fields.message.value.trim() === "") {
                showError('message', "Message is required.");
                isValid = false;
            }
            //4. file validation
            // const file = fields.file.files[0];
            // const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
            // const maxSizeMB = 5 * 1024 * 1024; // 5MB Limit

            // if (!allowedTypes.includes(file.type)) {
            //     showError('file', `Invalid file type. Only ${allowedTypes.join(', ')} are allowed.`);
            //     isValid = false;
            // } else if (file.size > maxSizeMB) {
            //         showError('file', `File is too large. Maximum size is ${maxSizeMB / 1024 * 2}MB.`);
            //         isValid = false;
            // }
    
            // return isValid; // Return true if no errors were found 
            //files attachements don't work in formspree
        }
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();        
            if (validateForm()) {
                const formData = new FormData(contactForm);
                fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        showPopup();
                        return response.json();
                       
                    } else {
                         return response.json().then(data => { throw new Error(data.error || 'Something went wrong :(') });
                    }
                })
                .catch((error) => {
                    console.error('Error submitting form via AJAX:', error);
                    showError('submit', `Submission failed: ${error.message}. Please try again.`);
                });
        
            }
    
    }); // End DOMContentLoaded
});

//popUp
function showPopup() {
    document.getElementById('popup').classList.remove('hidden');
  }
  
  function closePopup() {
    document.getElementById('popup').classList.add('hidden');
  }
  
});