jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    
    
    var eventName = '';

    var menuIn = false;
    
    var description = ""; // change the event wise description in the switch case at the end not this

  var chessRules = [], chessDesc = "<h1>Chess</h1><h2 style='text-align:left;'>Rules will be here soon !</h2>";


    $cross = $(".spanExitButton");
    $cross.addClass("hideMe");

    function exitModal() {
        $cross.addClass("hideMe");
        $('body').removeClass('noscroll');
        $mR.removeClass("animR").removeClass("showMe");
        $mL.removeClass("animL").removeClass("showMe");
        $('#wrapper').removeClass("lightsDim");
        $("#wrapper").unbind("click", exitModal);
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
            $list.append("<p>" + description + "</p>" + "<strong style='font-size:35px;font-weight:300;'><br>RULES</strong>");console.log(++k);
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
            $(".nano").nanoScroller();
             $('.registerbtn').prop('href',eventRegistrationForm); // using prop instead attr makes it work. Don't know why.
             setTimeout(showpanel, 1900);
        setTimeout(exitOnclickAnywhere, 2000);
        
        $mR.addClass("showMe").addClass("animR");
        $mL.addClass("showMe").addClass("animL");
        $('#wrapper').addClass("lightsDim");
         
        }
    var eventRegistrationForm;
    $rc.click(function() {
        eventName = $(this).attr('id');
        switch (eventName) { 
          case 'chess': 
                imagePath = "https://drive.google.com/a/iiitd.ac.in/uc?export=view&id=0BxM10NrmUxTdZHFod1ZSb2RDQ2c";
                arrayOfRules = chessRules;
                description =  chessDesc;
                eventRegistrationForm = "https://docs.google.com/a/iiitd.ac.in/forms/d/1yD7b1s5YSbVKWGT_k8N9omru63nKBQet9CX0UUjyiBs/viewform";
                break;

        }
        fillEverything();
    });

    $cross.click(exitModal);



    
    


});