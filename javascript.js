var sY
var d = 20;
function autoScrollTo(input) {
	var yP = cY + window.innerHeight;
	var bH = document.body.offsetHeight;
	var cY = window.pageYOffset;
	var tY = document.getElementById(input).offsetTop;
	var action = setTimeout('autoScrollTo(\''+input+'\')',3);
	if(yP > bH){
		clearTimeout(action);
	} else {
		if(cY < tY-d){
		    sY = cY+d;
		    window.scroll(0, sY);
	    } else {
		    clearTimeout(action);
	    }
	}
}

function resetScroller(input){
	var tY = document.getElementById(input).offsetTop;
	var cY = window.pageYOffset;
	var action = setTimeout('resetScroller(\''+input+'\')',5);
	if(cY > tY){
		sY = cY-d;
		window.scroll(0, sY);
	} else {
		clearTimeout(action);
	}
}
