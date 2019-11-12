var idx = 0;
window.onload = function(){
  slideShow();
}

function slideShow(){
    var i;
    var x = document.getElementsByClassName("slide");
  
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";
    }
    idx++;
    if (idx > x.length){
      idx = 1;
    }
  
    x[idx - 1].style.display = "block";
    setTimeout(slideShow, 2000);
  }