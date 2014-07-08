function addLoadEvent(func) {
  if (window.addEventListener)
    window.addEventListener("load", func, false);
  else if (window.attachEvent)
    window.attachEvent("onload", func);
  else { // fallback
    var old = window.onload;
    window.onload = function() {
      if (old) old();
      func();
    };
  }
}

function showSection(id) {
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i<divs.length; i++) {
		if (divs[i].className.indexOf("section") === -1) continue;
		if (divs[i].getAttribute("id") != id) {
			divs[i].style.display = "none";
		} else {
			divs[i].style.display = "block";
		}
	}
}

function prepareInternalnav () {
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("internalnav")) return false;
	var nav = document.getElementById("internalnav");
	var links = nav.getElementsByTagName("a");
	for(var i=0; i<links.length; i++) {
		var sectionId = links[i].getAttribute("href").split("#")[1];
		if(!document.getElementById(sectionId)) continue;
		document.getElementById(sectionId).style.display = "none";
		links[i].destination = sectionId;
		links[i].onclick = function () {
			showSection(this.destination);
			return false;
		};
	}
}
	
addLoadEvent(prepareInternalnav);