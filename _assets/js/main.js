// general js for the project that wouldn't be a reuseable component



/*********** Blur and change colour of hero images  *************/


$(window).on('scroll', function () {

//console.log('hey');
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    var pixs = $(document).scrollTop(),
    pixs = pixs / 100,
    offset = 600,
    range = 100,
    calc = 0.8 - (pixs )/17;

	if(isFirefox === false){

		$(".bv-banner-out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)","opacity": calc });

  }  else  { $(".bv-banner-out").css({"opacity": calc });}
});




/*********** Mobile: Place current Nav-Tab in the center  *************/

//Get value from Nav-Item (nav-order)

  var itemName = document.getElementById("item-name").title;
	var itemNumber = document.getElementsByClassName("site-nav__item");
	var itemNavTabs = itemNumber.length/2;

// Translate number to array counting (nav-order) -1

  var itemIndex = itemName-1;

// find width of all items and add them
	var itemsAll = 0;

	for (var i=1; i<itemNavTabs; i++)
	{
	 var itemSingle = document.getElementsByClassName("site-nav__item")[i].offsetWidth;
	 	itemsAll = itemsAll + itemSingle;

	}

// find current item and add the ones before
	var itemsBeforeCurrent=0;
	for (var j=1; j<=itemIndex; j++)
	{
	 itemSingle = document.getElementsByClassName("site-nav__item")[j].offsetWidth;
	 itemsBeforeCurrent = itemsBeforeCurrent + itemSingle;
	}


// find current item and get width
  var itemCurrentWidth = document.getElementsByClassName("site-nav__item")[itemIndex].offsetWidth;

// find screen-width
	var deviceWidth = screen.width;
	var deviceWidthHalf = screen.width/2;

// find screen-width
  var scrollPos = document.getElementById("item-name");
    	scrollPos.scrollLeft = itemsBeforeCurrent-deviceWidthHalf+itemCurrentWidth/2;

	var arrowPos = itemsAll-deviceWidth+itemCurrentWidth;
	var arrowLeft = document.getElementById("nav-arrows");
	var arrowRight = document.getElementById("nav-arrows");


if (scrollPos.scrollLeft > 0  ){
  arrowLeft.classList.add("site-nav__arrow-before");

} if (scrollPos.scrollLeft >= arrowPos) {
	arrowRight.classList.remove("site-nav__arrow-after");

}

/*
    console.log('itemIndex: '+itemIndex);
    console.log('itemsAll: '+itemsAll);
    console.log('itemsBeforeCurrent: '+itemsBeforeCurrent);
    console.log('itemCurrentWidth: '+itemCurrentWidth);
    console.log('scrollPos.scrollLeft: '+scrollPos.scrollLeft);
    console.log('deviceWidthHalf: '+deviceWidthHalf);
    console.log('deviceWidth: '+deviceWidth);
    console.log('arrowPos: '+arrowPos);
		*/







/*********** Get the modal  *************/

// Get the modal
var modal = document.getElementById('bv-myModal');

// Get the button that opens the modal
var btn = document.getElementById("bv-myBtn");

//console.log(btn);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("bv-close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
    $('body').addClass('bv-disable-scroll');
		//console.log(child.id);
		$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
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
