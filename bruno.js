var bruno = {};
bruno.getElements = function(e) {
  return document.querySelectorAll(e);
}
bruno.getElement = function(e) {
  return document.querySelector(e);
}
bruno.ajax = function(type, file, asyncn, callback) {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback();
    }
  };
  xhttp.open(type, file, asyncn);
  xhttp.send();
}
bruno.get = function(file, callback) {
  bruno.ajax("GET", file, true, callback);
}
bruno.post = function(file, callback) {
  bruno.ajax("POST", file, true, callback);
}
bruno.sync = function(type, file, callback) {
  bruno.ajax(type, file, false, callback);
}
bruno.HTML = function(elem, html, select, num) {
  if (select) {
    bruno.getElements(elem)[num].innerHTML = html;
  } else {
    bruno.getElement(elem).innerHTML = html;
  }
}
bruno.text = function(elem, html, select, num) {
  if (select) {
    bruno.getElements(elem)[num].innerText = html;
  } else {
    bruno.getElement(elem).innerText = html;
  }
}
bruno.each = function(array, fordo) {
  for (var i=0; i<array.length; i+=1) {
    fordo(i);
  }
}
bruno.addElement = function(name, text, addplace) {
  var elem = document.createElement(name);
  var text = document.createTextNode(text);
  elem.appendChild(text);
  var add = bruno.getElement(addplace);
  add.appendChild(elem);
}

