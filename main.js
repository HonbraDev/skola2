function showInfo() {
  document.getElementById("info").style.display = "initial";
  document.getElementById("showInfo").style.display = "none";
  document.getElementById("hideInfo").style.display = "initial";
}
function hideInfo() {
  document.getElementById("info").style.display = "none";
  document.getElementById("showInfo").style.display = "initial";
  document.getElementById("hideInfo").style.display = "none";
}
function main() {
  document.getElementById("jsNotice").style.display = "none";
}
function start() {
  document.getElementById("start").style.top = "0";

  setTimeout(function() {
    location.replace("/app.html");
  }, 1000);
}


// function stop() {
// document.getElementById("start").style.top = "100vh";
// document.getElementById("ver").style.top = "20px";
// }
