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

function insertAfter (targetElement,newElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild === targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function addClass (element,value) {
	if(!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

function highlightPage () {
	if(!document.getElementById) return false;
	if(!document.getElementsBtTagName) return false;
	if(!document.getElementById("navigation")) return false;
	var nav = document.getElementById("navigation"));
	var links = nav.getElementsByTagName("a");
		for (var i=0; i<links.length; i++) {
			var linkurl = links[i].getAttribute("href");
			var currenturl = window.location.href;
			if(currenturl.indexOf(linkurl) != -1) { //this method returns the first occurence of the substring - in this case"Is the link URL within the current URL?"
				links[i].className = "here";
				var linktext = links[i].lastChild.nodeValue.toLowerCase ();
				document.body.setAttribute("id",linktext);
			}
		
	}
}

addLoadEvent(highlightPage);