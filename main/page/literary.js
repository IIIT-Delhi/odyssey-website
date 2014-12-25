jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    
    
    var eventName = 'verve';

    var menuIn = false;
    
    var description = ""; // change the event wise description in the switch case at the end not this

    var btd = "<h1>Reverbe: The Fashion Parade</h1>“Fashion is about dressing according to what's fashionable. Style is more about being yourself. “ -Oscar de la Renta <p>A shout-out to all the designers, models and all you beautiful people out there! Pull up your socks ‘cuz Odyssey 2015 brings to you the most exciting and glamorous event of the year, Reverbe. The New York Times had very aptly quoted, “The sun never sets on the runway”. The most happening Fashion Parade of the year awaits you. If fashion is your thing, then this is the ‘IT’ place to be. We’re rolling out the red carpet for all you talented designers and super-glam models. So stop thinking and hurry up. Register now!</p>";

	var verve = "<h1>Grammar Nazi</h1>This event would be aiming at testing your skills for the global language we all converse in. We want to create hype about your knowledge, your speed, your skills, efficiency, fluency and correcting your each grammatical mistakes mistake you make. So get ready to test where your level is and prove us are you a Grammar Nazi. Your each correction will be PS : Dare u use d chatin lang here . its al abot bludy grammar :P";

    var vrules = [
   "There would be two major rounds in total which would be further divided into smaller tasks to be accomplished.",
		"Round 1 would be a pen and paper round where you will be tested on various skills. We will have questions with a marking scheme and you will have to prove your abilities to proceed to the next round.",
		
"Round 1 may include questions or tasks like spellathon, jumbled words, small crosswords, scramble, a fan fiction to correct etc.",

"The more you score, more are your chances of proceeding to the next round.",

"The top 5-6 teams would make to the final round. Audience round would be there to gather more people.",

"Round2 would be a kind of live event including on the spot performances on the skills like scramble, pronunciation, spelling bee, correction tasks, etc.",
"The rounds would be independent so just give your best.", 

"We can have tie breaker rounds for deciding the winner in case required.",

"We may keep some surprise questions or bonus for round 2.",

"Apart from the main event, we would give some glimpses of the questions to keep indulging and promoting on event page on FB. There online event would start 3-4 weeks before the fest and some star question answerers and overall performers would be rewarded as well.",
	]

    var rulesID523 = [
  "For the prelims, you are required to submit any two of your best designs. A panel of judges will decide the finalists based on the innovation, creativity, originality of your design.",

"For the finals, each team is free to choose their own theme and showcase a set of garments. It can range from something like a “Winter Wonderland” to as wacky as showcasing the “Gothic culture”. Our panel of judges and organisers will judge you on the basis of your innovation, creativity, originality, poise and confidence.",
		

 "For the finals, the designer must submit the music and an AV (if there is one) till 20th January. (Considering the event might be on the 24th.)",

"The Designers 'must' bring their own models. (A minimum of 3 and maximum of 10)",

"Every team will be provided with a total of 15 minutes to make the required set ups and showcase their designs. From the time your team’s name is announced to the time you finally exit.",

"The designs must be original. The designers are free to use any material of their choice. There are NO restrictions as such.",

"The team allowed should consist of a. Minimum 1 designer Maximum 2 designer b. Minimum 5 models Maximum 10 models c. Minimum 2 crew members Maximum 4 crew members who take care of the designing, ",
		

 "Teams must be well versed with their light requirements so as to be able to utilise their transition time period optimally.",

 "Vulgarity is strongly prohibited. Any form of obscenity will lead to debarring the team from the competition.",

 "Use of cigarettes, alcohol, and any unfair means is strongly prohibited.",

 "Teams will be judged on the basis of the costumes, theme, walking stance, and attitude.",

 "Decision of the judges will be final and binding.",

 "IIIT-Delhi or the organisers will not be responsible for any damage or loss of property. ",

 "The prize money is subject to change keeping in mind the quality of participation.",

 "See that your garments and accessories are in the correct order. Organize your accessories.",
" Be considerate of others. Remain as quiet as possible backstage. Do not gossip or discuss the show or circumstances that arise during the show. Discuss the experiences of the show afterward.",
    ];
    


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
            $list.append("<p>" + description + "</p>" + "<strong style='font-size:20px;font-weight:300;'><br>RULES</strong>");console.log(++k);
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
            
             setTimeout(showpanel, 1900);
        setTimeout(exitOnclickAnywhere, 2000);
        
        $mR.addClass("showMe").addClass("animR");
        $mL.addClass("showMe").addClass("animL");
        $('#wrapper').addClass("lightsDim");
        }
    
    $rc.click(function() {
        eventName = $(this).attr('id');
        switch (eventName) { 
            case 'verve': 
                imagePath = "https://lh3.googleusercontent.com/-XjvHWP52vCk/AAAAAAAAAAI/AAAAAAAAA3w/3Z0Fot1hShc/photo.jpg";
                arrayOfRules = vrules;
                description = verve;
                break;

            case 'battletroupe': 
                imagePath = "https://scontent-b-sin.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/1508623_600690736652512_1911486469_n.jpg?oh=a30215bd40ffd1ae0101ecaa69aea3c3&oe=5538209B";
                arrayOfRules = rulesID523;
                description =  btd;
                break;
				
			 case 'rhetorica': 
                imagePath = "https://scontent-b-sin.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/1508623_600690736652512_1911486469_n.jpg?oh=a30215bd40ffd1ae0101ecaa69aea3c3&oe=5538209B";
                arrayOfRules = rulesID523;
                description =  btd;
                break;
				
			 case 'avadhanam': 
                imagePath = "https://scontent-b-sin.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/1508623_600690736652512_1911486469_n.jpg?oh=a30215bd40ffd1ae0101ecaa69aea3c3&oe=5538209B";
                arrayOfRules = rulesID523;
                description =  btd;
                break;

        }
        fillEverything();
    });

    $cross.click(exitModal);



    
    


});