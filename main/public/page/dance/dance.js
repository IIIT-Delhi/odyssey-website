jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    
    
    var eventName = 'verve';

    var menuIn = false;
    
    var description = ""; // change the event wise description in the switch case at the end not this

    var btd = "<h1>Battle Troupe</h1><br><br><p>Let Your Moves Do The talking.</p><p>Odyssey’15, IIIT Delhi invites you to a fleeting moment where you feel alive, to enchant with your vibrant rhythm, to speak out all through dance and of-course claim the BattleTroupe crown!</p><p><b>Two rounds event :</b></p><p><b>Prelims :</b> Video based selection round (judged by a particular panel - judging criteria to be decided).</b></p><p><b>Finals :</b> Best 15 teams selected from the prelims will compete against each other on the day of the final event (judged by a particular panel - judging criteria to be decided)</p>";
    var fo = "<h1>Face Off</h1><br><br><p>Face it off against your rivals. Prove your mettle. Be so good, they just can’t ignore you!</p>";
    var verve = "<h1>Verve</h1><br><br><p>\"Get your body out of the way and let your spirit soar!\" - Ibrahim Farrah</p> <p>Calling out all dance enthusiasts out there to dance their heart out. Whatever your interest be - jazz, hip hop, contemporary ,classical or freestyle, come join us this Odyssey ! Verve gives you the chance to showcase your hidden talent and passion for dance. Put forward a short solo performance in the preliminary round to secure your spot in the finals.</p>";

    var forules = ["Age Limit : 16 - 25 years.",
                   "Last date of online registration is 28th January 2015. On the spot registrations will also be open but priority will be given to online registrations.",
"Any props/costumes if to be used should be arranged by the participants. Use of fire or any other inflammable object is restricted and accounts for negative marking.",
"Qualified participants have to ensure that one copy of their edited song is with the event head and one copy they should carry with them. Song should be in .mp3 format. Also, it is the contestant’s duty to be careful and aware of the order of performance and should be present 15 mins before the allotted time.",
"All the participants are required to carry their identity cards to the campus on the day of the event.",
"The organizing committee reserves the right to change the venue, time and rules, if required.",
"The decision of the judges will be final and binding.",
"Organizers have the right to disqualify any team if they break any rule."]

    var vrules = [
    "Only college students are allowed.",
"Last date of online registration is 15th January 2015. On the spot registrations will also be open but priority will be given to online registrations.",
"Incorporating the theme of the fest - ‘Alternate Reality’ will fetch the participant bonus marks.",
"Any props/costumes if to be used should be arranged by the participants. Use of fire or any other inflammable object is restricted and accounts for negative marking.",
"Qualified participants have to ensure that one copy of their edited song is with the event head and one copy they should carry with them. Song should be in .mp3 format. Also, it is the contestant’s duty to be careful and aware of the order of performance and should be present 15 mins before the allotted time.",
"All the participants are required to carry their identity cards to the campus on the day of the event.",
"The organizing committee reserves the right to change the venue, time and rules, if required.",
"The decision of the judges will be final and binding."]

    var rulesID523 = [
	"The last date of registration for prelims is 22nd January 2015.",
    "There is no restriction on the theme. It’s an Open theme Group Dance Competition.",
    "Maximum 2 teams per college allowed.",
    "Cross-college teams are not allowed.",
    "Only college students are allowed to participate.<br/> <br/> Prelims:-",
    "Teams have to submit a 3-5 minute video of their performance for prelims.",
"Incase of multiple video submissions,only the first one will be considered for evaluation.",
"No late entries shall be tolerated.",
"On clearing the preliminary round, further details will be provided to the selected teams about the finals via mail/phone.",
"Decision of the judges and the Organising Committee will be final and binding.",
"No responsibility will be held by Odyssey’15, IIITD for any late or lost entries or any such events.<br/><br/> Finals:-",
"Time limit per team : 8 minutes. Teams will be penalized in case the time limit is exceeded.",
"Team size should not be more than 15. However there must be at least 4 members on stage at any point during the performance.",
"It is mandatory for all the team members to carry their college ID cards to the final event.",
"Usage of props is allowed and should be consulted with any of the event heads in advance. (it does not carry extra credit).",
"Use of fire or any other inflammable object is restricted and accounts for negative marking.",
"No lead dancer or solo performance is allowed at any point of time during the performance.",
"The selected teams must send their final song track 2 days before the final event and also bring the same in a pendrive/CD on the day of the final event.",
"The selected teams must report at the registration desk two hours before the event.",
"Decision of the judges and the Organising Committee will be final and binding.The college reserves the right, in its sole discretion, to disqualify any entry at any time in the event if it is determined that the entrant has not complied with these rules or has acted in an unsportsmanlike or disruptive manner.",
"The prizes are subject to change on the basis of quality of participation.",
    ];
    
    var battletroupe =  [
        "Rulesssssssssss",
        "toooooooooooools"
    ];

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
var imagePath ;
    var arrayOfRules ;

    function showpanel() {
        $cross.removeClass("hideMe");
        

        //        $('body:not("modal")')
    }

    function exitOnclickAnywhere() {
        $("#wrapper").dblclick(exitModal);
    }
    $list = $mL.find("ol");
    
         function fillEverything(){
             var k =0;
            $('body').addClass('noscroll');
              
            $(".bgRules").css("background","url('')"); 
            $(".bgRulesForModalR").css("background","url('')"); 
            $modalListOfRules.empty(); 
            $list.append("<p>" + description + "</p>" + "<strong id='rulesRules' style='font-size:35px;font-weight:300;font-family:'Source Sans Pro','Open Sans', sans-serif;'><br>RULES<br><br></strong>"); 
            $mR.css("background", "none"); 
            $(".bgRules").css({
            "background": "url('" + imagePath + "') no-repeat"

            }); 
            $(".bgRulesForModalR").css({
            "background": "url('" + imagePath + "') no-repeat",
            "background-size": "80% 60%"


            }); 
           

            for (i = 0; i < arrayOfRules.length;) {
                $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i] + "</li>");
                i++;
            }
             
             
              $('.registerbtn').prop('href',eventRegistrationForm); // using prop instead attr makes it work. Don't know why.
            
             setTimeout(showpanel, 1900);
        setTimeout(exitOnclickAnywhere, 2000);setTimeout(function(){         $(".nano").nanoScroller({alwaysVisible: true });      $('.rulebook ol li').css("margin-right","7px");         }, 2400);
        
        $mR.addClass("showMe").addClass("animR");
        $mL.addClass("showMe").addClass("animL");
        $('#wrapper').addClass("lightsDim");
        }
    var eventRegistrationForm;
    $rc.click(function() {
        eventName = $(this).attr('id');
        switch (eventName) { 
            case 'verve': 
                imagePath = "/page/dance/verveBan.png";
                arrayOfRules = vrules;
                description = verve;
                eventRegistrationForm ="https://docs.google.com/a/iiitd.ac.in/forms/d/1dWGeSdMjw0S6VmMMmEuflI-18ez3AbOqHRTCQG1fZvI/viewform";
                break;

            case 'battletroupe': 
                imagePath = "/page/dance/battleTroupeBan.png";
                arrayOfRules = rulesID523;
                description =  btd;
                eventRegistrationForm ="https://docs.google.com/a/iiitd.ac.in/forms/d/1CRtFBsMNdDqw7NLr_t2lCudaK3-UaUhgy-vFdIhlt4M/viewform";

                break;

            case 'faceoff':
                imagePath = "/page/dance/faceOffBan.png";
                arrayOfRules = forules;
                description =  fo;
                eventRegistrationForm = "https://docs.google.com/a/iiitd.ac.in/forms/d/1sC1gU9FxwyTHbAl2J3ihV9nIkxf9quQYQV3P8NfOj5g/viewform?c=0&w=1";
                break;
        }
        fillEverything();
    });

    $cross.click(exitModal);

});
