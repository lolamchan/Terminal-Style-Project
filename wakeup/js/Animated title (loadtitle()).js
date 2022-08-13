// Select "length" amount of character from a string start from "pos"
// * Can't handle double length of string
function pick(pos, length) {
  console.log(pos)
  var x = "";
  var cutoff = 0;
  while (length != 0) {
    x += str.slice(pos, pos+length)
    cutoff = str.slice(pos, pos+length).length;
    pos = 0;
    length -= cutoff;
  }
  return x;
}

//Load it as title
function loadtitle() {
  if (i == 0) {
    i = str.length;
  }
  document.title = "(੭•̀ω•́)੭̸" + pick(i,9);
  i--;
  setTimeout(load, 500);
}