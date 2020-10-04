
/* Set the width of the side navigation to 400px */
function openNav() {
    document.getElementById("sidenav").style.width = "400px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }

  /* ---------------------------------------------------
    TYPING ANIMATION
----------------------------------------------------- */
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
};

$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 1500;
  function hidePreloader() {
  var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });

   /* ---------------------------------------------------
    FROM REDIRECT
----------------------------------------------------- */

const fromPlanet = {
  Mars: "from_mars.html",
  Earth: "from_earth.html",
  Moon: "from_moon.html",
  UFA:"from_uns.html"
};

var dataBase = {
  fromPlace:""
};

function fromLinker(dataBase,fromPlanet){
   var x = document.getElementById("from-first-form").selectedIndex;
   var fromPlaceValue = document.getElementsByTagName("option")[x].value;
   alert(fromPlaceValue);
   alert(dataBase.fromPlace);
   dataBase.fromPlace = fromPlaceValue;
   
   for(const property in fromPlanet){
     if(property == fromPlaceValue){
       var Linkvalue = fromPlanet.property;
     }
   }
   alert(Linkvalue);
   document.getElementById("firstlink").href = Linkvalue;
};




function fromSettlement(){
  var y = document.getElementById("settlement-selection").selectedIndex;
  var settlementValue = document.getElementsByTagName("option")[y].value;
  alert(settlementValue);
  document.getElementById("from-settlement-name").value = settlementValue;
};