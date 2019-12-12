/*
var mensa = "m3ns4";

login();

var usrpass = "WWxkV2RXTXlSVDA9";

function login() {
  var usrpass = prompt("Zadejte klíč k aplikaci", "");

  if (usrpass == mensa) {
    // \/ sem dejte kód, který se má spustit po přihlášení
    // /\
  } else {
    location.replace("/");
  }
}
*/

// if (usrpass == "WWxkV2RXTXlSVDA9") {
//   location.replace("/");
// }

// iframe src (zdroj)
document.getElementById("panoRaven").src =
  "https://panoraven.com/embed/UX7Z8ll3Zl";

// nastavení onclick (po kliknutí)
document.getElementById("up").setAttribute("onClick", "");
document.getElementById("left").setAttribute("onClick", "navigate_prizemi_l()");
document.getElementById("right").setAttribute("onClick", "");
document.getElementById("down").setAttribute("onClick", "");

// nastavení class (vzhled)
document.getElementById("up").setAttribute("class", "arrow-unav");
document.getElementById("left").setAttribute("class", "arrow");
document.getElementById("right").setAttribute("class", "arrow-unav");
document.getElementById("down").setAttribute("class", "arrow-unav");

// info
document.getElementById("infoh1").innerHTML = "Přízemí";
document.getElementById("infop").innerHTML =
  "Na tomto místě nejou žádné zajímavosti k zobrazení.";

function navigate_prizemi() {
  // iframe src (zdroj)
  document.getElementById("panoRaven").src =
    "https://panoraven.com/embed/UX7Z8ll3Zl";

  // nastavení onclick (po kliknutí)
  document.getElementById("up").setAttribute("onClick", "");
  document
    .getElementById("left")
    .setAttribute("onClick", "navigate_prizemi_l()");
  document.getElementById("right").setAttribute("onClick", "");
  document.getElementById("down").setAttribute("onClick", "");

  // nastavení class (vzhled)
  document.getElementById("up").setAttribute("class", "arrow-unav");
  document.getElementById("left").setAttribute("class", "arrow");
  document.getElementById("right").setAttribute("class", "arrow-unav");
  document.getElementById("down").setAttribute("class", "arrow-unav");

  // info
  document.getElementById("infoh1").innerHTML = "Přízemí";
  document.getElementById("infop").innerHTML =
    "Na tomto místě nejou žádné zajímavosti k zobrazení.";
}

function navigate_prizemi_l() {
  // iframe src (zdroj)
  document.getElementById("panoRaven").src =
    "https://panoraven.com/embed/w0K47K696e";

  // nastavení onclick (po kliknutí)
  document.getElementById("up").setAttribute("onClick", "");
  document
    .getElementById("left")
    .setAttribute("onClick", "navigate_prizemi_jidelna()");
  document.getElementById("right").setAttribute("onClick", "");
  document.getElementById("down").setAttribute("onClick", "navigate_prizemi()");

  // nastavení class (vzhled)
  document.getElementById("up").setAttribute("class", "arrow-unav");
  document.getElementById("left").setAttribute("class", "arrow");
  document.getElementById("right").setAttribute("class", "arrow-unav");
  document.getElementById("down").setAttribute("class", "arrow");

  // info
  document.getElementById("infoh1").innerHTML = "Přízemí, vlevo";
  document.getElementById("infop").innerHTML =
    "Na tomto místě nejou žádné zajímavosti k zobrazení.";
}

function navigate_prizemi_jidelna() {
  // iframe src (zdroj)
  document.getElementById("panoRaven").src =
    "https://panoraven.com/embed/k2U0dtThJn";

  // nastavení onclick (po kliknutí)
  document.getElementById("up").setAttribute("onClick", "");
  document.getElementById("left").setAttribute("onClick", "");
  document.getElementById("right").setAttribute("onClick", "");
  document
    .getElementById("down")
    .setAttribute("onClick", "navigate_prizemi_l()");

  // nastavení class (vzhled)
  document.getElementById("up").setAttribute("class", "arrow-unav");
  document.getElementById("left").setAttribute("class", "arrow-unav");
  document.getElementById("right").setAttribute("class", "arrow-unav");
  document.getElementById("down").setAttribute("class", "arrow");

  // info
  document.getElementById("infoh1").innerHTML = "Přízemí, jídelna";
  document.getElementById("infop").innerHTML =
    "Na tomto místě nejou žádné zajímavosti k zobrazení.";
}
