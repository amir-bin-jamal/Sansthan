// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    // mybutton.style.transition = "all 2s ease-in";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Clock

function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
  var x = new Date();
  document.getElementById("ct").innerHTML = x;
  display_c();
}

function display_ct() {
  var x = new Date();
  var x1 = x.toUTCString(); // changing the display to UTC string
  document.getElementById("ct").innerHTML = x1;
  tt = display_c();
}

//GoTo Homepage

function GoToHomePage() {
  window.location = "/";
}

//scroll to

function aboutScroll() {
  window.scrollTo(0, 690);
}

function contactsScroll() {
  window.scrollTo(0, document.body.scrollHeight);
}
