function changeBackground() {

  // make variables to get the values from the sliders
  var rd = parseInt(document.getElementById('red').value);
  var gn = parseInt(document.getElementById('green').value);
  var bl = parseInt(document.getElementById('blue').value);

  // convert the decimal values into hexadecimal
  var rdhex = (rd < 16) ? "0" + rd.toString(16) : rd.toString(16);
  var gnhex = (gn < 16) ? "0" + gn.toString(16) : gn.toString(16);
  var blhex = (bl < 16) ? "0" + bl.toString(16) : bl.toString(16);

  // create a variable that concatenates all the parts
  var hexcode = "#" + rdhex + gnhex + blhex;

  // change the background color
  document.body.style.backgroundColor = hexcode;
  document.getElementById('hexCode').innerHTML = hexcode;

} // end of function
