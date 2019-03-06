function showProjectDetails() {
    $(".btn-details ").click(function(event) { 
        event.preventDefault();  
        let projectId = event.currentTarget.id.replace("btn","project")
        let project = document.getElementById(projectId);            
        project.className = "collaspable  margin-top-20px";                 
        project.focus();     
    }); 
}

function hideProjectDetails() {
    $(".btn-collaspe ").click(function(event) { 
        event.preventDefault();       
        let projectId = event.currentTarget.id.replace("close","project")              
        let project = document.getElementById(projectId);          
        project.className = "collaspable collasped  margin-top-20px";               
    }); 
}

function setHandlers() {
    showProjectDetails();
    hideProjectDetails();
}

$(setHandlers());