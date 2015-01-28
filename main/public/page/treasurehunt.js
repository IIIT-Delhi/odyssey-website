jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    
    
    var eventName = 'tHunt';

    var menuIn = false;
    
    var description = "Do you ever wonder what it would be like to die?<br/>Do you crave for the supernatural?<br/>Do you believe in a heaven and a hell?<br/>…And the devil?<br/>Above all, do you dare to defeat him - at his own game?<br/>Sounds surreal? It isn't. Come and try your luck at Odyssey’s first alternate dark reality Treasure Hunt<b>7 Sins - Hunt for The Lost Souls﻿</b><br/>Sign the deal with the devil and exchange your soul for a chance at a fortune.<br/>Embark upon a dark journey,go through various levels of hell summoning the creatures of darkness, come face to face with your darkest deepest desires and redeem your soul in a final battle with the Satan himself.<br/>Make a team of 3-4 warriors and register yourself because nobody can survive this alone..<br/><br/>WARNING: No one returns from hell the same.<br/><br/>Entry Fees - Rs 40/-<br/><br/>Prizes worth Rs 12,000 to be won!"; // change the event wise description in the switch case at the end not this

    var tHuntRules =["Each team should comprise of 3-4 members. Cross college and school teams are allowed.",
    "It will be a 2 day event.Teams will face elimination leading up to the final round of the hunt, details of each round will be revealed only to those who make it.",
    "In case of any discrepancy, the decision of the organisers will be final and binding.",
    "No accommodation facility will be provided by IIIT-Delhi to teams which qualify for finals on second day.",
    "A smart-phone with internet connectivity is a must!",
    "The prizes are subject to change on the basis of quality of participation.<br/><br/><br/>Contact for further assistance-<br/><br/>Shubham Sinha(shubham13159@iiitd.ac.in)   :- +91-9953600441<br/>Rishi Baijal(rishi12084@iiitd.ac.in)                  :- +91-8527385260<br/>Hardik Choudhary(hardik12038@iiitd.ac.in)    :- +91-9910550694"
    
    ]


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
            case 'tHunt': 
                imagePath = "/page/7Sins_low.jpg";
                arrayOfRules = tHuntRules;
                description = description;
                eventRegistrationForm = "http://goo.gl/forms/VtgrFET8Lo";
                break;

            

        }
        fillEverything();
    });

    $cross.click(exitModal);



    
    


});