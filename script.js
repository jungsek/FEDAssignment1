/*JS FUNCTION FOR CONCEAL NAV BAR INTO VERTICAL NAV MENU FUNCTION*/
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px";
    }
    else 
    {
        MenuItems.style.maxHeight = "0px";
    }
}



/*JS FUNCTION FOR REVEAL ELEMENTS ON SCROLL FUNCTION*/
window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('activereveal');
    }

  }
}



