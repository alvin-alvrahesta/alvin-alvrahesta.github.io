var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example2",
});
//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let gototop = document.getElementById("gototop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
    mybutton.style.transition = "0.5s";
  } else {
    mybutton.style.display = "none";
    mybutton.style.transition = "0.5s";
  }
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    gototop.style.opacity = "1";
    gototop.style.transition = "0.5s";
  } else {
    gototop.style.opacity = "0";
    gototop.style.transition = "0.5s";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
