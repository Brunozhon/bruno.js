var bruno = {};
bruno.getElements = function(e) {
  return document.querySelectorAll(e);
}
bruno.getElement = function(e) {
  return document.querySelector(e);
}
bruno.ajax = function(type, file, asyncn, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback();
    }
  };
  xhttp.open(type, file, asyncn);
  xhttp.send();
}
