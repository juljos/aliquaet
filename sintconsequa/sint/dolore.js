function addClass(element, className) {
  if (!element.classList) {
    element.className += " " + className;
  } else {
    element.classList.add(className);
  }
}

function eById(id) {
  return document.getElementById(id);
}

addClass(eById("hosted"), "hidden");
