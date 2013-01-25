<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="description" content="Search through millions of tweets and users and figure out their influence! Express yourself and follow new interesting and valuable people at the same time." />
        <meta name="keywords" content="twiim, rate, vote, rating, interesting, valueable, search, social, terms, twitter, tweets, social, facebook, friends, people, meet people, followers, follow" />
        <meta http-equiv="Content-Language" content="en" />
        <title>Twiim.com | How does it work?</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link href="http://twiimcdn.appspot.com/styles/jquery_notification.css" type="text/css" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="http://twiimcdn.appspot.com/styles/business.css" title="default" />
        <link rel="stylesheet" type="text/css" href="http://twiimcdn.appspot.com/styles/searcher.css" title="default" />
        <link rel="stylesheet" type="text/css" href="http://twiimcdn.appspot.com/styles/results.css" title="default" />
        <script type ="text/javascript" src="http://twiimcdn.appspot.com/js/vars.js"></script> 
        <script type="text/javascript" src="http://twiimcdn.appspot.com/js/jquery-1.4.2.min.js"></script> 
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
        <div class="everything">

            <div id="top"><a href="index.php"><img id="small-logo" style="float:left;padding-top: 2px; padding-left: 40px" src="http://twiimcdn.appspot.com/img/twiim_logo_without_slogan.png" width="80px" alt="Twiim - Social Search" /></a>
                <span id="back-buttom" style="position:absolute;top:9px;right:30px">
                    <a href="index.php" >Back to Main Page</a>
                </span>
            </div>
            <span id="logo"><a href="index.php">
                    <img src="http://twiimcdn.appspot.com/img/twiim_logo_final.png" name="Twiim - Social rating" alt="Twiim - Social rating"></a>
            </span>
            <div class="index">
                <h3>What's social rating about?</h3>
                <p><span style="text-decoration:underline;">Social rating is a great concept</span>. It's like when you were at school and you had to vote for class president. You can say, this is similar to "I like" buttons. Of course It is, but this time <span style="font-weight:bold;">your vote will change things</span>, more precisely, the tweet and user influences. <span style="text-decoration:underline;">It's not just about "share" content but value people.</span></p>
                <h3>And... What do we get with that?</h3>
                <p>It's easy, isn't it? With this concept you will be able to figure out easily <span style="text-decoration:underline;">which people deserve your attention, and which not.</span> You won't follow more people without know their reputation and influence. And, if you like the tweets, <span style="text-decoration:underline;">you can vote them, and improve their influences!</span></p>
                <p>Also, It's great for knowing our influence and if people like what we write. Before that you only could know it seeing how many retweets did you have. But this is not accurate, because retweets are a global way to share things, we can't know about individual tastes, and furthermore, people sometimes don't like to spread their opinions through an "official" account.<span style="text-decoration:underline;"> Twiim is completly anonymous, you can vote without any log in.</span>(and... It's controlled, you can't vote twice the same tweet)</p>
                <h3>How influence is calculated?</h3>
                <p><span style="text-decoration:underline;">Influence is basically calculated with points.</span> Every tweet starts with at least your followers score (number of followers). If that tweet has been retweeted, you will get 5 points more for every retweet. And now the great part, If that tweet has been rated positively, you will get 1 point more for every vote. And 1 point less for every negative vote. It's easy right?. Let's see the formula:  </p>
                <p>Tweet Influence.</p>
                <img src="http://twiimcdn.appspot.com/img/it.png" alt="Tweet influence"/>
                <p>User Influence.</p>
                <img src="http://twiimcdn.appspot.com/img/Iu.png" alt="User influence"/>
                <p>Where <span style="font-style:italic">BETA </span> is the "followers number", <span style="font-style:italic">EPSILON </span> is the "retweets number",<span style="font-style:italic"> <span style="font-style:italic">ALPHA[p] </span> is the number of positives votes, and <span style="font-style:italic">ALPHA[n] </span> the number of negative votes.</p>
                <h3>Can I collaborate?</h3>
                <p><span style="text-decoration:underline;">Sure</span>, I'd appreciate it so much. I really need some collaborators for improve some important aspects. I practically don't have enough time at all. So, If you want to join the team, just write me a message at:</p><p> admin [at] twiim.com</p>
            </div>
            <h3></h3>

        </div>
    </div>

    <div class="push"></div>
    <div class="credits">Twiim.com is brought to you by <a style="color:#55DAF9;" href="http://www.about.me/josevidal" target="_blank" >Jos&eacute; Vidal</a>. © 2011 Jos&eacute; Vidal.</div>

</body>

</html>
