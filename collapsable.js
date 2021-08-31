

var coll = document.getElementsByClassName("collapsible");
var i;
var header = document.getElementById("header");


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}



/*function collap(){
  var content = document.getElementsByClassName("collapsible");
  for (i = 0; i < content.length; i++){
    document.write(content.length);

    document.write(content[i]);
    content[i].addEventListener("click",   content[i].classList.toggle("edges"));
    
  }
/*
  if (coll.style.display === "grid") {
    setTimeout(function(){
      coll.style.display = "none";
      content[0].classList.toggle("edges");
      plusminus.innerHTML = "+";

    }, 0); 

  } else {
    coll.style.display = "grid";
    content[0].classList.toggle("edges");
    plusminus.innerHTML = "-";

  }



  content[0].classList.toggle("active");
  content[0].classList.toggle("collapsible2");
*/

