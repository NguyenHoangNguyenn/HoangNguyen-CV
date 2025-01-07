// Sticky Navbar
window.onscroll = function() {stickyNavbar()};

var navbar = document.querySelector('nav');
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function() {
  var navbar = document.querySelector('nav');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
};


