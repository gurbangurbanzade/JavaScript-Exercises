function myFunction() {
  var x = document.getElementById("fname");

  if (x.value.length == 1) {
    x.value = x.value[0];
  } else if (x.value.length == 2) {
    if (x.value[1] == "/") {
      // x.value = x.value[0] + x.value[1];
    } else if (x.value[0] == "/") {
      x.value = x.value[1];
    } else {
      x.value = x.value[0] + x.value[1] + "/";
    }
  } else if (x.value.length == 3) {
    if (x.value[3] == "/") {
      x.value = x.value[0] + x.value[1] + "/" + x.value[2];
    } else {
      x.value = x.value[0] + x.value[1] + "/";
    }
  } else if (x.value.length == 4 && x.value.length < 5) {
    if (x.value[2] == "/") {
    } else {
      x.value = x.value[0] + x.value[1] + "/" + x.value[2];
    }
  } else if (x.value.length == 5 && x.value.length < 6) {
    x.value = x.value[0] + x.value[1] + "/" + x.value[3] + x.value[4];
  } else if (x.value.length >= 6) {
    x.value = x.value[0] + x.value[1] + "/" + x.value[3] + x.value[4];
  }

  // console.log(typeof x.value);
}
