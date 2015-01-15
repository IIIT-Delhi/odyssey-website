jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    
    
    var eventName = '';

    var menuIn = false;
    
    var description = ""; // change the event wise description in the switch case at the end not this

  var chessRules = ["Detailed Event Structure : - <br><br><strong>DAY 1</strong><br>Reporting Time: 2:00 pm<br>Round 1: 3:00-4:00<br>Round 2: 4:00-5:00<br><br><strong>DAY 2</strong><br>5 rounds + Breaks + Tie-breaker (if required) (Entire Day)","Event Venue:-<br><br>Venue: IIIT-Delhi, Okhla Industrial Area, Phase III, New Delhi (Near Govindpuri Metro Station), Library Block : LR0, LR2, LR3, Library<br>","Individual Participation, Swiss League Event",
"The tournament will be played as per FIDE’s Rules and Regulations.",
"All players will play all 7* rounds.",
"Time format : 25 minutes + 10 Seconds or 30 minutes each.",
"Walk over time - 15 minutes.",
"If possible, bring your own Chess Clocks.",
"In case of tied scores after the end of the tournament a blitz match might be conducted as a tie-breaker, though the discretion lies in the hands of the organisers.",
"In the case of any dispute or claim, the decision of the arbiter will be final and binding to all rules and regulations.","First-come, first-served (Cap - 100).","Preference will still be given to rated players.","Entry fee - Rs 250/-","-------------Contact-------------------<br><br>● Ankit Verma - 9810581076, ankit13017@iiitd.ac.in<br>● HarshVardhan Kalra - 9910127900, harshvardhan14043@iiitd.ac.in<br>● Nikita Gupta - 9899813036,nikita13068@iiitd.ac.in<br>● Sumit Keswani - 9999748647, sumit13111@iiitd.ac.in",
  
  
  ], chessDesc = "<h1>Chess</h1><h2 style='text-align:left;'><strong>Event duration</strong> : 2 Days<br><br><Strong>Event Dates</strong> : 30th and 31st Jan’15</h2><br><br><h3>For all Chess enthusiasts out there, IIIT-Delhi presents its very 2nd Chess Tournament at Odyssey’15. If \"Chess is life\" for you too, make good of this opportunity to compete against the best players in the city and earn amazing prizes worth Rs 25,000/-</h3><br><br>Eligibility: For college students and school students only.";


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
             console.log(++k);
            $(".bgRules").css("background","url('')");console.log(++k);
            $(".bgRulesForModalR").css("background","url('')");console.log(++k);
            $modalListOfRules.empty();console.log(++k);
            $list.append("<p>" + description + "</p>" + "<strong id='rulesRules' style='font-size:35px;font-weight:300;font-family:'Source Sans Pro','Open Sans', sans-serif;'><br>RULES<br><br></strong>");console.log(++k);
            $mR.css("background", "none");console.log(++k);
            $(".bgRules").css({
            "background": "url('" + imagePath + "') no-repeat"

            });console.log(++k);
            $(".bgRulesForModalR").css({
            "background": "url('" + imagePath + "') no-repeat",
            "background-size": "80% 60%"


            });console.log(++k);
           

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
          case 'chess': 
                imagePath = "/page/chessBan.png";
                arrayOfRules = chessRules;
                description =  chessDesc;
                eventRegistrationForm = "https://docs.google.com/a/iiitd.ac.in/forms/d/1yD7b1s5YSbVKWGT_k8N9omru63nKBQet9CX0UUjyiBs/viewform";
                break;

        }
        fillEverything();
    });

    $cross.click(exitModal);



    
    


});