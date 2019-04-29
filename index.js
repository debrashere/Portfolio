
// Show hidden div when "View More" is clicked for any of the project summaries
function showProjectDetails() {
    $(".btn-details ").click(function(event) { 
        event.preventDefault(); 
        const projectId = event.currentTarget.id.replace("btn","project"); 
        const project = document.getElementById(projectId);    
        const projectDetailId = event.currentTarget.id.replace("btn","project-detail");
        const projectDetail = document.getElementById(projectDetailId);  
        projectDetail.className = "collaspable  margin-top-20px";   
        project.focus();     
    }); 
}

// Hide div when "Close" is clicked for any of the project detail information
function hideProjectDetails() {
    $(".btn-collaspe ").click(function(event) { 
        event.preventDefault();           
        const projectDetailId = event.currentTarget.id.replace("close","project-detail");             
        const project = document.getElementById(projectDetailId);          
        project.className = "collaspable collasped  margin-top-20px";               
    }); 
}
 
function setHandlers() {
    /* showProjectDetails(); */
    /* hideProjectDetails(); */
}

$(setHandlers());
