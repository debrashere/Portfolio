/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function handleMenuClick() {
  event.preventDefault();  
  var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    } 
}

function watchMenuClick() {      
  $(".icon").click(function(event) { 
    event.preventDefault();  
    handleMenuClick();
  });  
}

function setupHandleEvents() { 
    watchMenuClick(); 
}

$(setupHandleEvents);