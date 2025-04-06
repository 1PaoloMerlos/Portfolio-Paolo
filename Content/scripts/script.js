$(document).ready(function() {
    //projects 
    //append content for each project from json file using their id and add their id from json as #id
    $.getJSON('content/projects.json', function (data) {
        $.each(data, function (index, project) {
            const projectId = `${project.id}`;
            $('.projects').append(`
                <div class="project" id="${projectId}"> 
                    <h3>${project.name}</h3>
                    <p class="project-description">${project.description}</p>
                    <p class="technologies">${project.technologies}</p>
                    <button class="show-more" data-project-id="${projectId}"> More Info </button>
                </div>
            `);
            $('.content-projects').append(`
                <div class="project-content hidden md:max-w-2xl p-5" id="section-${projectId}">
                    <p class="project-description">${project.description}</p>
                    <p class="technologies pt-2">${project.technologies}</p>
                    <button><a href="${project.url}" target="_blank">View Project</a><button>
                </div>
            `);
        });
    });

    //on click show more button, show the content of each individual project of their corresponding id
$('.projects').on('click', '.show-more', function() {
    const projectId = $(this).data('project-id');
    const projectContent = $(`#section-${projectId}`);
        
    //loop through project content and show the content of the project that matches the id of the button clicked
    $.each($('.project-content'), function(index, content) {
        if ($(this).attr('id') !== `section-${projectId}`) {
            $(this).addClass('hidden');
            }

        else {
            projectContent.removeClass('hidden');
            projectContent.addClass('showing');
            }
        });
    });
});
