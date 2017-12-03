var sY
var d = 20;
function autoScrollTo(el) {
	var cY = window.pageYOffset;
	var tY = document.getElementById(el).offsetTop;
	var bH = document.body.offsetHeight;
	var yP = cY + window.innerHeight;
	var action = setTimeout('autoScrollTo(\''+el+'\')',3);
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

function resetScroller(el){
	var cY = window.pageYOffset;
    var tY = document.getElementById(el).offsetTop;
	var action = setTimeout('resetScroller(\''+el+'\')',5);
	if(cY > tY){
		sY = cY-d;
		window.scroll(0, sY);
	} else {
		clearTimeout(action);
	}
}
