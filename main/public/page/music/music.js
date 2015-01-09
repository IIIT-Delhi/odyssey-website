jQuery(document).ready(function ($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    var j;

    var eventName = 'verve';

    var menuIn = false;
    var desc,eventHead;


    var rulebook = {
        "aH": {
"eventName": "Acoustic Hymns",
"eventShortDescription": "<h1>Acoustic Hymns</h1><br><br>If jamming away your blues or singing to celebrate is your thing, then no look further! We present to you Acoustic hymns, the acoustic music event of Odyssey’15 wherein you can turn on the Mozart in you and compose music that touches the soul. Compete in this heated acoustic performance rivalry and win the crowd over!<br>This time the strings are attached!",
"rules": [
"Team Composition: minimum-3 and maximum-8",
"Teams per College: Unlimited",
"Registration: Online, Pre-Registration must",
"Pre Final Round: Each team has to upload a video (not more than 7-8 minutes) performing any song of their choice",
"Final Round: Top teams will qualify based on their performance in pre final round",
"Final Round Duration: 10 minutes per team [includes setup time / sound check] : ",
"The participants have to perform acoustic renditions of Hindi or English songs of any genre or their original compositions. At-least one performance with innovation is highly expected.",
"There is no constraint on the Theme. The event is open for both Western and Indian compositions.",
" A minimum of one vocalist is compulsory.",
"No constraint on number of songs to be performed. The only constraint is the Time Limit.",
"There should be a minimum of three performing members on the stage at any particular point of time.",
" Beat boxing, clapping and other physical sound effects in the performances are allowed.",
" Every extra minute taken beyond specified time limit will lead to reduction in the total marks scored.",
"Only acoustic instruments are allowed. ( No Drums, Electric Guitar )",
" Availability of the following instruments (if required) is assured:An Electric Bass + Amp, Keyboard, Microphone/ Mics, A Sound System and Mixer",
"Usage of keyboard only in piano tone is allowed. No other electronic instruments are allowed.",
"Judging criteria:Musical ability, originality and stage presence",
"Judges’ decision is final and binding."
],
"facebookLink": " ",
            "eventHeads": ["Ankush Jolly : 9873289569", "Sankalp Mehar : 9582810052", "Siddhant Verma : 7838138148"]
},

        "bob": {
            "eventName": "Battle Of Bands",
            "eventShortDescription": "<h1>Battle Of Bands</h1><br><br><p>Rock the stage with IIIT-Delhi's battle of the bands. Get a chance to battle it out with the best bands across India and make your place among the legends. Battle of Bands '15 gives you the platform to exhibit the hard rock talent in you. With entrancing music and ear-splitting performances, we promise you an amazing experience. Be there!<br><br>There are two stages in the competition. The first is online prelims. Bands will submit two recordings, out of which at least one is an original composition. Six bands will be shortlisted by the judges, which will perform live on 24th Jan.<br>Send us in at least two recorded entries and video links to your band’s performances. Entries must be sent in before 11:59 PM, 20th January.<br><br>Registrations now open.</p>",
            "rules": [" No registration fees will be charged."," The band can have at most eight (8) members and minimum three (3) members . No more than 8 inputs will be provided on the stage. "," Having a vocalist in the band is a necessity. No instrumental tracks will be considered. "," No college/age restrictions "," The preliminary round will be open to all bands. The bands will be asked to submit two recordings of at most 10 minutes each. At least one of them has to be an original composition."," There will be no language restrictions on the entries. "," The selection of teams will be the sole discretion of the judges.Professionals will be handling the judging of the event. Judges for both rounds can be different. They will be announced before hand ","We believe in transparency, marks awarded to each band in the second round will be declared"," Once you have cleared the preliminary round, further details shall be provided to you about the finals. Six bands will be short listed by the judges for the final round. ","Please be on time for the final event at the venue specified. If you reach after your performance slot, you will not be allowed to participate. ","on the spot registration will not be allowed at the venue of the event. ","The time limit for the performance is 20 minutes on and off the stage, exceeding which a deduction in the score for that performance will take place as per the rules decided by the judges. "," Each band has to get its own instruments. Only a common drum kit with a single bass pedal will be provided. Drummers can bring their own cymbals and pedals. "," Sequencing will NOT be allowed. It will result in the band being disqualified","The final decision regarding any matter is unquestionable and lies in the hands of the organizers and judges."," For the final round, each band will have to submit the lyrics of their original song as a typed sheet. Please do not scrawl it out on a piece of paper at the last minute and present to the judges. Our judges are music experts- not handwriting analysts. "],
            "facebookLink": "your facebook link without any space",
            "eventHeads" :["Kushagra singh : 8130962007","Gurshabad Grover : +919873686518", "Puneet Jain : 9717037957"]
        },

        "uml": {
            "eventName": "UML - Undergound Music League",
            "eventShortDescription": ["<h1>Underground Music League</h1>",
           "Sub Events: (click on the event to see the rules)",
           "<a href='https://docs.google.com/document/d/1gdT-rH74pn9bMjZUR4xhkdQHyaQlZ9TJC5Y_kZMs5i0/edit?usp=sharing'  id='sub11' target='_blank'>1. Rapsody</a>",
           "<a href='https://docs.google.com/document/d/1ueeugpizBX-VXzZFNiNqA4KfgmKBY0Begv1ZnRWQuig/edit?usp=sharing' id='sub12' target='_blank'>2. Vocal Chords</a>",
           "<a href='https://docs.google.com/document/d/1Qs7LOtu2Eolc2co7gv87i3tVJy-vCIptF6x_XosKq-0/edit?usp=sharing' id='sub13' target='_blank'>3. BdwnBdup</a>"],
            "rules": [],
            "facebookLink": "your facebook link without any space",
            "eventHeads" :["Email ID : umlodyssey@gmail.com<br><br>","Divay Prakash : +91-9650016622","Kunal Sharma : +91-9711442853","Pulkit Rohilla : +91-7838613665"]
        },
        
        "encore": {
"eventName": "Encore",
"eventShortDescription": ["<h1>Encore- Solo Western Music</h1><br><br>Without music, life would be an error.’<br>Do you have a penchant for singing or an instrument and think you are skilled enough to beat the best? Is music an escape from the reality you live in? Then Encore, Odyssey’15 is the platform you’ve been looking for! Compete with the best singers / instrumentalists and show your talent to the world. Exciting prizes up for grabs!"],
"rules": [
"All those in the age group 17-25 years are eligible.",
"Vocals will be held on the first day and Instrumentals on the second day of the fest",
"The event is an offline event. However, there will be 3 wild card entries from online submissions both for vocals and instrumentals. Wild card entries directly enter the finals. Others have to qualify the offline prelims in campus.",
"1 wild card entry each for vocals and instrumentals will be of the maximum number of likes when we upload your video on our facebook page.",
"The chosen song can be of any western genre.",
"Online submissions can be done by adding your video link in the online registration form. Registrations are bound to close depending on the number of entries with time.",
"Time limit for online submissions is 2.5 minutes.",
"You can participate in the offline prelims too, if you don’t qualify in the online wild card round.",
"To participate in the offline prelims, you need to register online. Although we will allow on spot registrations, preference will be given to online registered candidates in case of high participation.",
" For vocals, you are allowed to accompany two instrumentalists at most, or play yourself. No instruments will be provided on site. You will have to bring your own. Mikes and amplifier will be provided.",
"Time limit for offline prelims in vocals is 3.5 minutes and in instrumentals is 5 minutes including the instruments setup and sound check.",
"The prelims will be immediately followed by the finale on the same day.",
"Around 10 candidates in total will be selected for the finals in both vocals and intrumentals.",
"Time limit for finals is 6 minutes for vocals and 8 minutes for instrumentals, including the instruments setup and sound check.",
"If the participant chooses to sing an original composition, he/she should provide lyrics of the song to the judges.",
],
"facebookLink": "",
    "eventHeads" : ["Apurba Mondal : 8826358908", "Arushi Jain : 9650732552", "Pulkit Kumar Gupta : 9818753076"]
},
        "swa":{
    "eventName": "Swaraanchal: Solo Indian music ",
    "eventShortDescription": "<h1>Swaraanchal: Solo Indian music</h1><br><br>For all those musical enthusiasts who love Indian music it’s an event where they can bring out the soulful music within and create a melodious atmosphere with their performance. You just don’t have to sing or play, you have to feel it and make others not just only love it but also live it.",
    "rules": [
        "You should be a college/school student. Minimum age limit is 16 years",
        "There will be two separate categories for vocal and instrumental rounds. Each participant is allowed to participate in both.",
        "Only one entry in each category will be accepted. ",
        "Participants can perform on any Hindi classical or Bollywood composition.",
        "Vocals will be held on the first day and Instrumentals on the second day of the fest. The prelims will be immediately followed by the further rounds on the same day.",
        "You can either opt for online or on-campus prelim rounds. Fill your choice carefully in registration form. People opting for online prelims will get preference. Only limited slots available for offline prelims",
        "Online Prelims: Participants are required to sing/play any 1 song of their choice for 2 minutes. ",
        "Only video clips allowed for instrumental round. Both audio and video clips allowed in vocal category. ",
        "Karaoke tracks and accompaniments (atmost 2) are allowed. No audio editing is allowed in submissions. Make sure that it is your talent that shows not of your mates.",
        "Offline Prelims: Participants are required to sing/play any 1 song of their choice for 1.5 minutes. Karaoke needs to be sent to us beforehand to swaraanchal@gmail.com with subject <yourname_karaoke>. Accompaniments (atmost 2) are allowed in all rounds.",
        "10 participants in each category will be shortlisted for further rounds that would be held on campus. Participants need to bring their instruments along. Make sure your instruments are well tuned before your performance.",
        "One entry for the finals will be selected on the basis of facebook likes and shares. We will post the entries on your behalf on our facebook page",
        "Finals (Vocals): Participants have to sing one song of their choice and one from this list: http://goo.gl/uzTL3R . 2 minutes for each song will be given. People using karaoke tracks are advised to send them to us in advance.",
        "Finals (Instrumental) Participants have to play on any composition of their choice in 5 minutes.",
        "The organizers have the right to disqualify any participant that violates the rules and regulations.",
        "Judges Decision would be unquestionable and final.",
        "Bonus marks will be awarded for incorporating the 'Alternate Reality' theme of the fest "
    ],
    "facebookLink": "https://www.facebook.com/events/584442228324400/",
            "eventHeads":["Nikhil singhal : 8527470596", "Devyani Rohilla : 8587094431", "Harsh Vardhan Jaiswal	: +91-9953630355"]
}
          




    };


var eventRegistrationForm = "#";
              $subBox=$('.subbtncontainer');


    $cross = $(".spanExitButton");
    $cross.addClass("hideMe");
var count=1;
 function exception(){
    if(eventRegistrationForm == "#"){
        
        if(count==1)
        {
        //for(m=0;m<$subBox.length;++m){
            $subBox.fadeIn(10);
            $subBox.animate({
                opacity:1,
                bottom: "282px",
                width:"90%",
                left:"90px",
            },800,'easeInBack');
        }
        else {
             
            
        //for(m=0;m<$subBox.length;++m){
            $subBox.fadeOut(700);
            $subBox.animate({
                opacity:0,
                bottom: "0px",
                width:"20px",
                left:"255px",
            },800,'linear');
        }
                    count*=(-1);

       
    //    }
    }}
    
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
        //console.log(++k);
        $(".bgRules").css("background", "url('')");
        //console.log(++k);
        $(".bgRulesForModalR").css("background", "url('')");
        //console.log(++k);
        $modalListOfRules.empty();
        $subBox.fadeOut(10);
        //console.log(++k);
        if(eventName!="uml")
            $list.append("<strong id='rulesRules' style='font-size:35px;font-weight:300;font-family:'Source Sans Pro','Open Sans', sans-serif !important;'><br>RULES<br><br></strong>");
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

        if (desc.constructor === Array) {
            for (j = desc.length - 1; j > 0;) {
                $list.prepend("<li style='color:rgba(255,255,255,1);'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8227;" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + desc[j] + "</li>");
                j--;
            }
            //                    $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i][1] + "</li>");
            $list.prepend("<p>" + desc[0] + "</p><br>");

        } else
            $list.prepend("<p style='text-align:left;'>" + desc + "</p><br><br>");

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
        $list.append("<br><br><br>");
        
        $('.registerbtn').prop('href',eventRegistrationForm); // using prop instead attr makes it work. Don't knwo why.
        $('.registerbtn').on('click',exception);
        setTimeout(showpanel, 1900);
        setTimeout(exitOnclickAnywhere, 2000);setTimeout(function(){         $(".nano").nanoScroller({alwaysVisible: true });      $('.rulebook ol li').css("margin-right","7px");         }, 2400);
       
 /*setTimeout(function(){
        $(".nano").nanoScroller({alwaysVisible: true });      $('.rulebook ol li').css("margin-right","7px");
        }, 2400);*/
        $mR.addClass("showMe").addClass("animR");
        $mL.addClass("showMe").addClass("animL");
        $('#wrapper').addClass("lightsDim");
        
//        setTimeout(function(){
  
//        },1000);
        
        


    }
//    $("body > *").click(function(){alert($(this).prop('tagName'));});
    $('.round-image > a > img').click(function(e){
    e.stopPropagation();
});
    $rc.click(function () {
        eventName = $(this).attr('id');
        switch (eventName) {
        case 'bob':
            imagePath = "/page/music/bobBan.png";
            desc = rulebook.bob.eventShortDescription;
            arrayOfRules = rulebook.bob.rules;
            eventHead = rulebook.bob.eventHeads;
                eventRegistrationForm = "http://www.songdew.com/contests/IIIT-Delhi-Battle-of-bands/94";
            break;
        case 'encore':
            imagePath = "/page/music/encoreBan.png";
            desc = rulebook.encore.eventShortDescription;
            arrayOfRules = rulebook.encore.rules;
                eventHead = rulebook.encore.eventHeads;
                eventRegistrationForm = "https://docs.google.com/forms/d/1cqZ2uE81o4aeDXnGzHzFXAyV6OQiTtNmLzsr27FM1Ls/viewform?usp=send_form";
            break;
        case 'aH':
            imagePath = "/page/music/AcousticHymnsBan.png";
            desc = rulebook.aH.eventShortDescription;
            arrayOfRules = rulebook.aH.rules;
                eventHead = rulebook.aH.eventHeads;
                eventRegistrationForm = "https://docs.google.com/a/iiitd.ac.in/forms/d/1KtmL07cvsaFC3naGRw1Xj5Ezn8V9Hr5z1-Ddk3GniT0/viewform";
            break;
        case 'uml':
            imagePath = "/page/music/umlBan.png";
            desc = rulebook.uml.eventShortDescription;
            arrayOfRules = rulebook.uml.rules;
                eventHead = rulebook.uml.eventHeads;
                eventRegistrationForm = "#";
            break;
        case 'swa':
            imagePath = "/page/music/swaraanchalBan.png";
            desc = rulebook.swa.eventShortDescription;
            arrayOfRules = rulebook.swa.rules;
                eventHead = rulebook.swa.eventHeads;
                eventRegistrationForm = "https://docs.google.com/a/iiitd.ac.in/forms/d/1L5IoKlTgNpuDc7k_jcVJo2faeEdpEeKBFaPpX736_j8/viewform";
            break;

        }
        fillEverything();
    });

    $cross.click(exitModal);







});

