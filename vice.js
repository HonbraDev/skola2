function vice() {
  document.getElementById("infoicon").innerHTML = "clear";
  document.getElementById("infoicon").setAttribute("onClick", "");
  setTimeout(function() {
    document.getElementById("infoicon").setAttribute("onClick", "mene()");
  }, 801);
  document.getElementById("infoicon").style.transform = "rotate(3600deg)";
  document.getElementById("arrowdiv").style.width = "100vw";
  document.getElementById("arrowdiv").style.height = "100vh";
  document.getElementById("arrowdiv").style.padding = "0px";
  document.getElementById("arrowdiv").style.bottom = "0px";
  setTimeout(function() {
    document.getElementById("arrowdiv").style.borderRadius = "0px";
  }, 800);
  document.getElementById("arrows").style.display = "none";
  document.getElementById("vicediv").style.display = "initial";
}

function mene() {
  document.getElementById("infoicon").innerHTML = "info";
  document.getElementById("infoicon").setAttribute("onClick", "");
  setTimeout(function() {
    document.getElementById("infoicon").setAttribute("onClick", "vice()");
  }, 800);
  document.getElementById("infoicon").style.transform = "rotate(0deg)";
  document.getElementById("arrowdiv").style.width = "";
  document.getElementById("arrowdiv").style.height = "";
  document.getElementById("arrowdiv").style.padding = "";
  document.getElementById("arrowdiv").style.bottom = "";
  document.getElementById("arrowdiv").style.borderRadius = "";
  setTimeout(function() {
    document.getElementById("arrows").style.display = "initial";
  }, 801);
  document.getElementById("vicediv").style.display = "none";
}

function zpet() {
  location.replace("/");
}