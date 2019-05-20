// general js for the project that wouldn't be a reuseable component

$(window).on('scroll', function () {


	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  //console.log(isFirefox);

    var pixs = $(document).scrollTop(),
    pixs = pixs / 100,
    offset = 600,
    range = 100,
    calc = 1 - (pixs )/10;

	if(isFirefox === false){

		$(".bv-banner-out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)","opacity": calc });

  }  else  { $(".bv-banner-out").css({"opacity": calc });}
});


// Get the modal
var modal = document.getElementById('bv-myModal');

// Get the button that opens the modal
var btn = document.getElementById("bv-myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("bv-close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
    $('body').addClass('bv-disable-scroll');
		$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
      $('body').removeClass('bv-disable-scroll');
			//$('#video').stopVideo();
			$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
        $('body').removeClass('bv-disable-scroll');
				$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  }
}
/*
$('.close').on('click', function() {
	//$('#video').stopVideo();
$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});*/


// Make legend acceesible
var i;
var j;
var index_highest = 0;

var pins = ['genuss', 'natur', 'abenteuer', 'kultur'];
var coll = document.getElementsByClassName("bv-toggle");
var coll1 = document.getElementsByClassName("marker--genuss");
var coll2 = document.getElementsByClassName("marker--natur");
var coll3 = document.getElementsByClassName("marker--abenteuer");
var coll4 = document.getElementsByClassName("marker--kultur");



document.getElementById('bv-pin1').addEventListener("click", function(){

	//console.log(zindex);
for (i = 1; i <= coll1.length; i++) {
	//var zindex = document.getElementById('genuss'+i).style.getPropertyValue("z-index");
  var elemGenuss = document.getElementById('genuss'+i);

  if (elemGenuss.style.display === "none") {
      elemGenuss.style.display = "block";
			elemGenuss.style.zIndex = 20+i;
			this.classList.add('bv-toggle-active');


    } else {
      elemGenuss.style.display = "none";
			elemGenuss.style.zIndex = 5;
			this.classList.remove('bv-toggle-active');

    }
  }
});


document.getElementById('bv-pin2').addEventListener("click", function(){

for (i = 1; i <= coll2.length; i++) {

  var elemNatur = document.getElementById('natur'+i);

  if (elemNatur.style.display === "none") {
      elemNatur.style.display = "block";
			this.classList.add('bv-toggle-active');

    } else {
      elemNatur.style.display = "none";
			this.classList.remove('bv-toggle-active');
    }
  }
});

document.getElementById('bv-pin3').addEventListener("click", function(){

for (i = 1; i <= coll3.length; i++) {

  var elemAbenteuer = document.getElementById('abenteuer'+i);


  if (elemAbenteuer.style.display === "none") {
      elemAbenteuer.style.display = "block";
			this.classList.add('bv-toggle-active');

    } else {
      elemAbenteuer.style.display = "none";
			this.classList.remove('bv-toggle-active');

    }
  }
});

document.getElementById('bv-pin4').addEventListener("click", function(){

for (i = 1; i <= coll4.length; i++) {

  var elemKultur = document.getElementById('kultur'+i);

  if (elemKultur.style.display === "none") {
      elemKultur.style.display = "block";
			this.classList.add('bv-toggle-active');
    } else {
      elemKultur.style.display = "none";
			this.classList.remove('bv-toggle-active');
    }
  }
});
