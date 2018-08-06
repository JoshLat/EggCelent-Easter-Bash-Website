function navclick(element) {
  //$("#" + element).addClass("active");
  $("#" + element + " a").css("background-color", "rgba(0, 0, 0, 0.1)");
}

function popText(string, delimiter) {
  return string.split(delimiter).pop().trim();
}

function checkpage() {
  const path = window.location.pathname;
  if (popText(path, "/") == "index.html") {
    navclick("homebtn");
  }
  if (popText(path, "/") == "details.html") {
    navclick("detailsbtn");
  }
  if (popText(path, "/") == "photos.html") {
    navclick("photosbtn");
  }
  if (popText(path, "/") == "contact.html") {
    navclick("contactbtn");
  }
  $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
}
