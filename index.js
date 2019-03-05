function showProjectDetails() {
    $(".btn-details ").click(function(event) { 
        event.preventDefault();  
        let projectId = event.currentTarget.id.replace("btn","project")
        let project = document.getElementById(projectId);            
        project.className = "collaspable";                 
        project.focus();     
    }); 
}

function hideProjectDetails() {
    $(".btn-collaspe ").click(function(event) { 
        event.preventDefault();       
        let projectId = event.currentTarget.id.replace("close","project")              
        let project = document.getElementById(projectId);          
        project.className = "collaspable collasped";               
    }); 
}

function setHandlers() {
    showProjectDetails();
    hideProjectDetails();
}

$(setHandlers());