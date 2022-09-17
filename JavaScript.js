function menue() {
    var x = document.getElementById('navigation');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
        x.style='animation:menu 0.5s ease-in-out';
      x.style.display = "block";
      
    }
  }