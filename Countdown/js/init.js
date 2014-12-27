  function initialize() {
   /*Count Down Settings*/
   datetime='12/27/2014 00:00:00';
   /* Google MAP Settings*/
     lat= 28.546863;  //Change the value with your address Latitude
	 lng= 77.273633;  //Change the value with your address Longitude
  }

  /*  Animation section home  */
  function startPage() {
    setTimeout ( function () {
		$(".logo").removeClass("Out").addClass("In fadeInDown");
		},300 );
    setTimeout ( function () {
		$(".diamond1").removeClass("Out").addClass("In fadeInUp");
		},1000 );
    setTimeout ( function () {
		$(".diamond2").removeClass("Out").addClass("In fadeInUp");
		},1000 );
    setTimeout ( function () {
		$(".diamond3").removeClass("Out").addClass("In fadeInUp");
		},1400 );
    setTimeout ( function () {
		$(".diamond4").removeClass("Out").addClass("In fadeInUp");
		},1400 );
    setTimeout ( function () {
		$(".diamond5").removeClass("Out").addClass("In fadeInUp");
		},1400 );
    setTimeout ( function () {
		$(".diamond6").removeClass("Out").addClass("In fadeInUp");
		},1800 );
    setTimeout ( function () {
		$(".diamond7").removeClass("Out").addClass("In fadeInUp");
		},1800 );
    setTimeout ( function () {
			$(".title_header").removeClass("Out").addClass("In fadeInUp");
		},2400 );
	} /*  End animation section home  */


  /*Onload function*/
  $(window).load(function(){
    initialize();
    $("#preload").css({ display: 'none'});
    $("body").removeClass("preload");
    startPage();
    $("html").niceScroll({
        cursorcolor: "#333",
        cursoropacitymin: 0.6,
        background: "#666",
        cursorborder: "0",
        autohidemode: true,
        cursorminheight: 30,
        zindex:9999999,
        horizrailenabled:false
    });

/**
* INITIALIZE COUNTDOWN SCRIPT
**/
     $('#countdown').downCount({
            date: datetime,
            offset: +10
        }, function () {
            alert('done!');
        });

  });

    var myMap = initializeMap();
     setTimeout(function() {
      google.maps.event.trigger(myMap, 'resize');
     }, 100);

  function initializeMap() {
    initialize();
     var mapOptions = {
       center: new google.maps.LatLng(lat, lng),
       zoom: 16,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
     var marker = new google.maps.Marker({
position: mapOptions['center'],
map: map,
});
     return map;
    }
/*Contact Form*/

$(document).ready(function() {
    setTimeout(function(){$('.khazana').css('display','block');
                          $('.footerT').css('display','block');
                     
                     },2850);
    var to;
    $("#subscribe_submit").click(function(){
        to=$("#subscribe_email");
        $.get("/mail",{to:to},function(data){

        });
    });
});
