//Credit to W3schools, crt demo by Alec Lownes, 
//browser detection by Satinder Singh from codepedia.
//And most importantly, my brain.
var i = 0;
var x = 0;
var lnum = 0;
var line = 1;
var speed = 50;
var text = document.getElementById("load");
var dot = document.getElementById("dot");
const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];




let userAgent = navigator.userAgent;
let browserName;
if(userAgent.match(/chrome|chromium|crios/i)){
  browserName = "Chrome";
  }else if(userAgent.match(/firefox|fxios/i)){
    browserName = "Firefox";
  }  else if(userAgent.match(/safari/i)){
    browserName = "Safari";
  } else if(userAgent.match(/opr\//i)){
    browserName = "Opera";
  } else if(userAgent.match(/edg/i)){
    browserName = "Edge";
  } else{
    browserName="No browser detected.";
}


//        TEXT AREA


// \n count as one character
var txt = 'Detecting Browser: ' + browserName + '\
\nFetching current time... Success\
\nCurrent time: ' + TwoDigit(date.getDate()) + '-' + months[date.getMonth()] + '-' + date.getFullYear() + '  ' + TwoDigit(date.getHours()) + ':' + TwoDigit(date.getMinutes()) + ':' + TwoDigit(date.getSeconds()) + '\
\nIncoming signal...\
\nIncoming file detected...\
\nFetching file...\
\nHash: ' + TwoDigit(date.getDate()) + TwoDigit(date.getMonth()) + TwoDigit(date.getFullYear()) + '-' + genID(12) + '\
\nOpening file: Wakeup.txt\
\n[./root/download/Wakeup.txt] If you are reading this, you\'ve been in a coma for almost 20 years now...\
\n                             We are trying a new technique...\
\n                             We don\'t know where this message will end up in your dream...\
\n                             But we hope we are getting through...\
\n                             Please wake up...\
\n                             Your family is waiting for you...\
\n                             [End of File]\
\nError: Connection Timed Out...\
\nAttempting to reconnect';



function TwoDigit(str) {
  return str.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}

function genID(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}



function typeWriter() {
  if (i < txt.length) {

    speed = 10;
    text.innerHTML += txt.charAt(i);

    if (txt.charAt(i) == " ") {
      speed = 0;
    } else if (txt.charAt(i) == "\n") {
      speed = 1000;
      line ++;
      lnum = 0;
    }

    //Emulate Loading Time
    if (lnum == "18" && line == "1") {
      speed = 1000;
    }
    if (lnum == "25" && line == "2") {
      speed = 1000;
    }
    lnum++;
    i++;
  } else if (x != 3){
    speed = 1000;
    x++;
    dot.innerHTML += '.';
  } else {
    x = 0;
    dot.innerHTML = dot.innerHTML.slice(0,-3)
  }
  setTimeout(typeWriter, speed);
}
window.onload = typeWriter;
