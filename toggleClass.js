function toggleClass() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  var element = document.getElementById("topbox");
  element.classList.toggle("formatting");
  
}