<?php
require ('db/getMax.php');
require ('db/getTags.php');
require ('db/getUsers.php');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="description" content="Search through millions of tweets and users and figure out their influence! Express yourself and follow new interesting and valuable people." />
        <meta name="keywords" content="twiim, rate, vote, rating, interesting, valueable, search, social, terms, twitter, tweets, social, facebook, friends, people, meet people, followers, follow" />
        <meta http-equiv="Content-Language" content="en" />
        <title>Twiim.com | Social rating</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link href="http://twiimcdn.appspot.com/styles/jquery_notification.css" type="text/css" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="http://twiimcdn.appspot.com/styles/business.css" title="default" />
        <link rel="stylesheet" type="text/css" href="http://twiimcdn.appspot.com/styles/searcher.css" title="default" />
        <link rel="stylesheet" type="text/css" href="http://twiimcdn.appspot.com/styles/results.css" title="default" />
        <script type ="text/javascript" src="http://twiimcdn.appspot.com/js/vars.js"></script> 
        <script type="text/javascript" src="http://twiimcdn.appspot.com/js/jquery-1.4.2.min.js"></script> 
        <script type="text/javascript" src="http://twiimcdn.appspot.com/js/jquery.cuteTime.min.js"></script>
        <script type="text/javascript" src="http://twiimcdn.appspot.com/js/jquery_notification_v.1.js"></script>        
		<script type ="text/javascript" src="http://twiimcdn.appspot.com/js/format.js"></script>       
        <script type ="text/javascript" src="http://twiimcdn.appspot.com/js/algorithms.js"></script>
        <script type ="text/javascript" src="http://twiimcdn.appspot.com/js/print.js"></script>
        <script type ="text/javascript" src="http://twiimcdn.appspot.com/js/db.js"></script>
        <script type ="text/javascript" src="http://twiimcdn.appspot.com/js/controller.js"></script> 
        <script type ="text/javascript" src="http://twiimcdn.appspot.com/js/index.js"></script> 
        <!-- Seguimiento GOOGLE ANALYTICS-->
        <script type="text/javascript">

            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-12569599-3']);
            _gaq.push(['_setDomainName', '.twiim.com']);
            _gaq.push(['_trackPageview']);

            (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();

        </script>

    </head>
    <body>
        <div class="everything"> <!-- Wraps everything. -->

            <!-- Top bar -->
            <div id="top">
                <a href="index.php">
                    <!-- Mini logo image -->
                    <img id="small-logo" style="float:left;padding-top: 2px; padding-left: 40px" src="http://twiimcdn.appspot.com/img/twiim_logo_without_slogan.png" width="80px" alt="Twiim - Social Search" /></a> 
                <!-- Back link. Hidden in Main Page. -->
                <span id="back-buttom" style="position:absolute;top:9px;right:30px">
                </span>
                <!-- HowTo link. Showed in Main Page. -->
                <span id="howto" style="position:absolute;top:9px;right:30px">
                    <a href="howto.php" >How does it work?</a>
                </span>
            </div>
            <!-- Top bar END -->

            <!-- Logo image -->
            <span id="logo"><a href="index.php">
                    <img src="http://twiimcdn.appspot.com/img/twiim_logo_final.png" name="Twiim - Social rating" alt="Twiim - Social rating"></a>
            </span>
            <!-- Logo image END-->

            <!-- FORM DIV -->
            <div class="index">
                <form name="main" action="">
                    <table>
                        <tr><td colspan="3"><input type="text" class="text" name="tag" value="Enter term or user" id="tag" title="Enter term" onkeyup="start();"  onkeypress="return enter();" ></td></tr>
                        <tr><td><input type="button" id="search" name="search" value="Search" disabled="disabled" onclick="controller(0);" ></td><td><a href="operators.php" >Use our operators.</a></td><td><span id="charCounter" style="margin-left: 20px; font-size: 1em;"></span></td></tr><tr><td colspan="2">Advanced: <SELECT id="results" NAME="results"> 
                                    <OPTION VALUE="10">10 results</OPTION>
                                    <OPTION VALUE="20">20 results</OPTION>
                                    <OPTION VALUE="40">40 results</OPTION>
                                </SELECT> </td></tr><tr><td colspan="2">Language:<SELECT id="lang" NAME="lang"> 
                                    <OPTION VALUE="">All</OPTION>
                                    <OPTION VALUE="en">English</OPTION>
                                    <OPTION VALUE="es">Español</OPTION>
                                    <OPTION VALUE="ja">日本語</OPTION>
                                    <OPTION VALUE="fr">Française</OPTION>
                                    <OPTION VALUE="it">Italiano</OPTION>
                                    <OPTION VALUE="de">Deutsch</OPTION>
                                    <OPTION VALUE="ru">русский</OPTION>

                                </SELECT> </td></tr>
                    </table> 
                </form>
                <h4>Search and rate millions of <span style="color:#0085B0;">tweets</span> and <span style="color:#0085B0;">users.</span><br/> Express your opinion and figure out people <span style="color:#0085B0;">influence.</span></h4>
            </div>
            <!-- FORM DIV END -->

            <!-- TT Tagcloud -->
            <div id="tagcloud"></div>    
            <!-- TT Tagcloud END -->

            <!-- Most popular UsersCloud -->
            <span id="userscloud">
                <?php
                $users = getUsers();
                foreach ($users as $user):
                    echo '<a href="#" onclick=tagClick("@' . $user['nick'] . '")><img src="' . $user['picture'] . '" width="30px" alt="profile"/></a>';
                endforeach;
                ?>
            </span>   
            <!-- Most popular UsersCloud END-->

            <!-- RESULTS DIV. Hidden in Main Page. -->
            <div class="results">

                <div id="division"></div>
                <div id="tweets"></div>

            </div>
            <!-- RESULTS DIV END -->

            <!-- "MORE" BUTTON. Hidden in Main Page. -->
            <div id="box"></div>
            <!-- "MORE" BUTTON END -->
        </div>
        <!-- EVERYTHING DIV END. -->
   
<!-- CREDITS DIVS-->
    <div class="push"></div>
    <div class="credits">Twiim.com is brought to you by <a style="color:#55DAF9;" href="http://www.about.me/josevidal" target="_blank" >Jos&eacute; Vidal</a>. © 2011 Jos&eacute; Vidal.</div>
<!-- CREDITS DIVS END -->
</body>

</html>
