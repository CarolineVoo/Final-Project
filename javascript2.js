

var sI = 1;
sS(1);
function nS(n) {
  sS(sI += n);
}
function tS(n) {
  sS(sI = n);
}
function sS(n) {
  var i;
  var side = document.getElementsByClassName("slide");
  var p = document.getElementsByClassName("punkt");
  if (n > side.length) {sI = 1}
  if (n < 1) {sI = side.length}
  for (i = 0; i < side.length; i++) {
      side[i].style.display = "none";
  }

  for (i = 0; i < p.length; i++) {
      p[i].className = p[i].className.replace(" active", "");
  }
  if(window.innerWidth < 768){
    side[sI-1].style.display = "block"
  }else {side[sI-1].style.display = "flex";}
  p[sI-1].className += " active";
}
