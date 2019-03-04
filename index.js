function showProjectDetails() {
    $(".btn-details ").click(function(event) { 
        event.preventDefault();  
        let projectId = event.currentTarget.id.replace("btn","project")
        console.log("showProjectDetais event.currentTarget.id projectId ", "Target.id: " + event.currentTarget.id + "  projectId: " + projectId);
        let project = document.getElementById(projectId);  
        console.log("showProjectDetais project ",  project);               
        project.className = " collaspable";                 
        project.focus();     
    }); 
}

function hideProjectDetails() {
    $(".btn-collaspe ").click(function(event) { 
        event.preventDefault();       
        let projectId = event.currentTarget.id.replace("close","project")
        console.log("hideProjectDetails event.currentTarget.id projectId ", "Target.id: " + event.currentTarget.id + "  projectId: " + projectId);
              
        let project = document.getElementById(projectId); 
        console.log("hideProjectDetails project ",  project);          
        project.className = "collaspable collasped";               
    }); 
}

function setHandlers() {
    showProjectDetails();
    hideProjectDetails();
}

$(setHandlers());