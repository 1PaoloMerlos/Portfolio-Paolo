$(document).ready(function() {
    //projects 
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

});
