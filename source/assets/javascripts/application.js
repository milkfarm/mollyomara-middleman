function toggleMenu() {
  var x = document.getElementById("menu");
  if (x.className === "") {
    x.className += "active";
  } else {
    x.className = "";
  }
}

function externalLinks() {
  if ( !document.getElementsByTagName ) return;
  var anchors = document.getElementsByTagName("a");
  for ( var i=0; i<anchors.length; i++ ) {
    var anchor = anchors[i];
    if ( anchor.getAttribute("href") && anchor.getAttribute("rel") == "external" )
      anchor.target = "_external";
  }
}
window.onload = externalLinks;
