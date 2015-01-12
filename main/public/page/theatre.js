jQuery(document).ready(function ($) {

	$rc = $(".round-thumb");
	$mL = $(".modalL");
	$mR = $(".modalR");
	$rb = $(".rulebook")
	$modalListOfRules = $(".orderedList");


	var eventName = '';

	var menuIn = false;

	var description = ""; // change the event wise description in the switch case at the end not this

	var s = "<h1>Singularity</h1></br><p>“All the world's a stage and most of us are desperately unrehearsed.”</br> ― Seán O'Casey</p><p>If you can mesmerise everyone by your acting prowess and if you are adaring lone wolf. Come show us your soliloquy .The stage is set and the spot lights are on.<br><br>Date & Time:<br><br>Saturday 31, 11AM </p>";
	var h = "<h1>HASRATEIN</h1></br><p>I believe that in a great city, or even in a small city or a village, a great theatre is the outward and visible sign of an inward and probable culture.<br>~Laurence Olivier<br><br>Is this what theatre means to you as well? Is there a social message that you want to spread? Do you, for once, feel the urge of breaking the barriers and letting your voice be heard?<br><br>So, take it to the STREETS! Sing, Act, Dance! Voice your views, Leave a mark, Be the impact!<br><br>IIITD's very own cultural fest, Odyssey welcomes all to 'Hasratein: The Voice in You', a street play competition. A fiesta which brings young talent to the foyer and gives them a platform to highlight social issues!<br>To top it all, you get to compete against some of the best teams in town!<br><br> Date and Time: <br>30th-31st Jan, 10 am- 4 pm<br>Registration starts at 9 am.</p>";


	var srules = ["Record a monologue or any solo act of about 3 min.",
"The medium of the act can be Hindi/English or both.",
"Shortlisted candidates will be contacted and will have to be present in the campus on the day of the fest.",
"There will be 2 rounds in the event..",
"Participants are supposed to arrange and bring props if required by them.",
"Decision of the judges will be final and irrevocable.",
"Obscenity strictly not allowed.<br><br>."];


		var hrules =["Team size: 8-20(including actors and music accompanists)","All registered teams are subject to a preliminary round in case we receive higher participation. For this, the teams will have to submit in a short video (no time limit) of their act for pre-evaluation. ","Time limit for final day: 15 minutes","The team size represents the number of people registered as a team. Only these shall be allowed to perform the street play.",  
" Maximum 20 members allowed including music accompanists.", "Minimum of 8 actors to be included in the team.",
"Teams are expected to perform at the open air venue, with an audience on all sides.",
"Plays can be in Hindi, English or Bilingual.",
"Plays can be based on any theme related to a social issue.",
"The script can be original or an adaptation. If it is an adaptation of already published work, due credit must be given to the owner of the content.",
"No technical support will be provided.",
"Teams are allowed to use Dholak, Flute or any other music instrument of their choice, but usage of electrical instruments is not allowed.",
"Teams will be penalised if they exceed the time limit.",
"Obscenity (at the discretion of judges) of any kind is not allowed and may lead to disqualification.",
"The decision of the judges and organisers will be final and binding.",
" The organizers reserve the right to change the rules as they deem fit.",
" Organizers have the right to disqualify any team if they break any rule.<br><br>","----CONTACT-----------<br><br>Manish Kumar<br>Email : Manish12142@iiitd.ac.in<br>Ph. : 9990422801<br><br>Sahar Siddiqui<br>Email : sahar14091@iiitd.ac.in<br>Ph. : 9871278784<br><br>Arushi Kumar <br>Email : arushi14023@iiitd.ac.in<br>Ph. : 9560070521<br><br>Nandika Chaudhary<br>Email : nandika13066@iiitd.ac.in<br>Ph. : 8826571198<br><br>"];



	$cross = $(".spanExitButton");
	$cross.addClass("hideMe");

	function exitModal() {
		$cross.addClass("hideMe");
		$('body').removeClass('noscroll');
		$mR.removeClass("animR").removeClass("showMe");
		$mL.removeClass("animL").removeClass("showMe");
		$('#wrapper').removeClass("lightsDim");
		$("#wrapper").unbind("click", exitModal);$(".nano").nanoScroller({ stop: true });
	}
	var imagePath;
	var arrayOfRules;

	function showpanel() {
		$cross.removeClass("hideMe");


		//        $('body:not("modal")')
	}

	function exitOnclickAnywhere() {
		$("#wrapper").dblclick(exitModal);
	}
	$list = $mL.find("ol");

	function fillEverything() {
		var k = 0;
		$('body').addClass('noscroll');
		console.log(++k);
		$(".bgRules").css("background", "url('')");
		console.log(++k);
		$(".bgRulesForModalR").css("background", "url('')");
		console.log(++k);
		$modalListOfRules.empty();
		console.log(++k);
		if (arrayOfRules != null) {
			$list.append("<p>" + description + "</p>" + "<strong id='rulesRules' style='font-size:35px;font-weight:300;font-family:'Source Sans Pro','Open Sans', sans-serif;'><br>RULES<br><br></strong>");
			console.log(++k);
		} else {
			$list.append("<p>" + description + "</p>");
			console.log(++k);
		}
		$mR.css("background", "none");
		console.log(++k);
		$(".bgRules").css({
			"background": "url('" + imagePath + "') no-repeat"

		});
		console.log(++k);
		$(".bgRulesForModalR").css({
			"background": "url('" + imagePath + "') no-repeat",
			"background-size": "80% 60%"


		});
		console.log(++k);

		if (arrayOfRules != null) {
			for (i = 0; i < arrayOfRules.length;) {
				$list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i] + "</li>");
				i++;
			}
		}
		 

         $('.registerbtn').prop('href',eventRegistrationForm); // using prop instead attr makes it work. Don't know why.
        
		setTimeout(showpanel, 1900);
		setTimeout(exitOnclickAnywhere, 2000);setTimeout(function(){         $(".nano").nanoScroller({alwaysVisible: true });      $('.rulebook ol li').css("margin-right","7px");         }, 2400);

		$mR.addClass("showMe").addClass("animR");
		$mL.addClass("showMe").addClass("animL");
		$('#wrapper').addClass("lightsDim");
	}
var eventRegistrationForm = "";
	$rc.click(function () {
		eventName = $(this).attr('id');
		switch (eventName) {
		case 'h':
			imagePath = "/page/singularityBan.png";
			arrayOfRules = srules;
			description = s;
                eventRegistrationForm = "https://docs.google.com/a/iiitd.ac.in/forms/d/1vpSXZtqJYmkvttqBUFlLAuZblCKtFrNe1Ld6KdovVEM/viewform";
			break;
		case 's':
			imagePath = "/page/Hasrateinfull.jpg";
			arrayOfRules = hrules;
			description = h;
                eventRegistrationForm = "https://docs.google.com/forms/d/1OTgPO-CuG1XaHRM0lxyHq47o5mJOKhfVwRvB-fU3xQ8/viewform";
			break;



		}
		fillEverything();
	});

	$cross.click(exitModal);







});
