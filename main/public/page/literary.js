jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    
    
    var eventName = 'grammarnazi';

    var menuIn = false;
    
    var description = []; // change the event wise description in the switch case at the end not this


	var grammarnazi = "This event would be aiming at testing your skills for the global language we all converse in. We want to create hype about your knowledge, your speed, your skills, efficiency, fluency and correcting your each grammatical mistakes mistake you make. So get ready to test where your level is and prove us are you a Grammar Nazi. Your each correction will be PS : Dare u use d chatin lang here . its al abot bludy grammar :P";

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
var rhetorica = {
"eventName": "Rhetorica: A Debating Battle",
"eventShortDescription": "The most awaited debating battle is back in this year’s edition of odyssey. But, there is a twist in the tale. This time, we have decided to have an “Oxford” style debate. The event description and details is as follows:",
"Event Description": [
"Rhetorica is an oxford – style debating event i.e. the audience is also the judge!",
["Individual participants need to upload a short video(2-3 min) on ANY ONE of the following listed topics latest by 12th january(tentative):"," Should rape accused be given capital punishment?","Are single sex schools good for education?","Should juveniles be tried and treated as adults?"],
"After scrutinizing the above videos, 6 candidates will be shortlisted.",
"Through a random draw, the 6 participants will be divided into 2 teams of 3 members each.",
"The above two teams, will be competing against each other on a common topic(to be declared after shortlisting) on the day of the event i.e. 24th January."
],
"rules": [
"Two teams of size exactly 3 will be competing together on a common topic. One team will be “for” and one “against” the argument.",
"There would be THREE rounds:",["1st:Opening arguments ( 5 min on clock for each team member )","2nd:Rebuttals/Cross-questioning (10 min/team )","3rd:Audience Q & A ( 15 minutes min/team )"],
"Two polls will be conducted among the audience(including the judges) – One before the start of the debate and one after the round 3.",
"The team which manages to sway maximum no. of votes to their side wins.",
"Prizes :",["One winning team ( 3 participants )","Best speaker"],
"FAQs:", [
"1. Is Rhetorica a team event or it has individual participation?",
"Rhetorica is a team event; however you have to apply as an individual. Participants will be shortlisted based on their performance in the video round and the shortlisted participants would be divided into two teams who will speak for and against a topic.","2. What is in it for the audience?",
"Audience is an integral part of Rhetorica, as a member of the audience you will get to vote on the winning team, best speaker, ask questions, interject and also put forth your views on the topic. Audience will help in taking the debate to the next level in rounds 2 and 3. Also we will have some refreshments for the audience.",
"3.Can I speak on any topic in the video round?",
"No, you have to select one of the three topics mentioned on the website and speak for OR against that motion.",
"4.Will the final topic of the event be one of these three topics?",
"Not necessarily, the purpose of the first round is to shortlist good debaters, people who can adapt themselves quickly to any given topic and speak freely for or against any motion. Rhetorica would have balanced topics where public opinion would not be skewed in favour of a team.",
"5.So the team with a majority of votes in their favour wins right?",
"No, the numerical majority has no significance. We will only be seeing the difference in the initial and final votes for a team. The team which manages to sway maximum votes in their favour wins even if they have a minority of votes.",
"6.How is the best speaker decided? Does he/she have to be a member of the winning team?",
"Best speaker will be decided by a panel of judges and he/she need not be from the winning team.",
"7.When will I get to know my team?",
"The shortlisted candidates and their teams will be announced a week before the event. It is up to you whether you want to coordinate with the team members or just prepare your own stuff for the debate.",
"8.How do I give my presentation? Can I read from a paper? Can I use slides?",
"The mode of presentation is entirely up to the speaker. You can use slides, read from a page, give a prepared speech, do a skit or even sing (if it is relevant to the motion). The idea is to win over the audience with your presentation and arguments.",
]],
"eventHead":["<br>Aditya Jain  mailto:aditya14129@iiitd.ac.in ph:+91 9910075519<br>","Rohit Chandra  mailto:rohit11090@iiitd.ac.in ph:+91 7042809329"],
"facebookLink": "your facebook link without any space"
    }
    
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
    var eventTitle;
var eventHead;
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
           var k = 0;
        $('body').addClass('noscroll');
        //console.log(++k);
        $(".bgRules").css("background", "url('')");
        //console.log(++k);
        $(".bgRulesForModalR").css("background", "url('')");
        //console.log(++k);
        $modalListOfRules.empty();
        //console.log(++k);
        $list.append("<strong id='rulesRules' style='font-size:35px;font-weight:300;font-family:'Source Sans Pro','Open Sans', sans-serif;'><br>RULES<br><br></strong>");
        //console.log(++k);
        $mR.css("background", "none");
        //console.log(++k);
        $(".bgRules").css({
            "background": "url('" + imagePath + "') no-repeat"

        });
        //console.log(++k);
        $(".bgRulesForModalR").css({
            "background": "url('" + imagePath + "') no-repeat",
            "background-size": "80% 60%"


        });
        //console.log(++k);

            if(description.constructor === Array) {
            for (j = description.length - 1; j > 0;) {
                $list.prepend("<li style='color:rgba(255,255,255,1);'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8227;" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + description[j] + "</li>");
                j--;
            }
            //                    $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i][1] + "</li>");
            $list.prepend("<p>" + description[0] + "</p><br>");

        } else
            $list.prepend("<p style='text-align:left;'>" + description + "</p><br><br>");
         
             $list.prepend("<h1 style='font-size:44px;text-align:left;'>" + eventTitle + "</h1><br><br>");
             
        for (i = 0; i < arrayOfRules.length;) {

            if (arrayOfRules[i].constructor === Array) {

                for (j = 0; j < arrayOfRules[i].length;) {
                    $list.append("<li style='color:rgba(255,255,255,1);'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8227;" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + arrayOfRules[i][j] + "</li>");
                    j++;
                }
                //                    $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i][1] + "</li>");
            } else
                $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i] + "</li>");
            i++;
            //                }
        }
          $list.append("<br>-----------------------CONTACT-----------------------<br>  ");
        for(i=0;i<eventHead.length && eventHead != 'undefined' ;++i)
        {
            $list.append("<br>"+(eventHead[i]));
            }
         

             $('.registerbtn').prop('href',eventRegistrationForm); // using prop instead attr makes it work. Don't know why.
             
        setTimeout(showpanel, 1900);
        setTimeout(exitOnclickAnywhere, 2000);setTimeout(function(){         $(".nano").nanoScroller({alwaysVisible: true });      $('.rulebook ol li').css("margin-right","7px");         }, 2400);

        $mR.addClass("showMe").addClass("animR");
        $mL.addClass("showMe").addClass("animL");
        $('#wrapper').addClass("lightsDim");

        }
    var eventRegistrationForm = "#";
    $rc.click(function() {
        eventName = $(this).attr('id');
        switch (eventName) { 
            case 'grammarnazi': 
                eventTitle = "Grammar Nazi";
                imagePath = "/page/grammarNaziBan.png";
                arrayOfRules = vrules;
                description = grammarnazi;
                eventHead =  ["Vrinda Malhotra : 9990297377<br>","Gagan Khanijau : 9910847404<br>"];
                eventRegistrationForm ="#";
                break;

            case 'hoaxpocus': 
                eventTitle = "Hoax Pocus";
                imagePath = "/page/hoaxPocusBan.png";
                arrayOfRules = [];
                description =  "<br><br><h1>Event Details will be here soon!</h1>";
                eventHead = [];
                eventRegistrationForm ="#";
                break;
				
			 case 'rhetorica': 
                eventTitle = "Rhetorica";
                imagePath = "/page/rhetoricaBan.png";
                arrayOfRules = rhetorica.rules;
                description =  rhetorica.eventShortDescription;
                eventHead =  rhetorica.eventHead;
                eventRegistrationForm ="http://goo.gl/forms/r44hZ9EJmp";
                break;
				
			 case 'avadhnam': 
                eventTitle = "Avadhanam";
                imagePath = "/page/avadhnamBan.png";
                arrayOfRules = [];
                description =  "<br><br><h1>Event Details will be here soon!</h1>";
                eventHead = [];
                eventRegistrationForm ="#";
                break;

        }
        fillEverything();
    });

    $cross.click(exitModal);



    
    


});