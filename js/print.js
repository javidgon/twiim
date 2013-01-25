
////////////////////////////////////////////////////////////////////////
//
//				PRINT USER TIMELINE
//
////////////////////////////////////////////////////////////////////////

function printUserTimeline(ID){
    var numberOldContainers = tweets_id.length;

    for(i = 0; i < defined_values.length ;i++){
        // IF IT'S NOT REPEATED'
                
        if($.inArray(tweet_id[i], tweets_id) == -1){
           
    
            var d = document.createElement("div");
            d.id = "container"+numberOldContainers;
                
            // Format the text.
                
            var copy = linkify(summary[i]);
                
            // Save tweet id.
                
            tweets_id.push(tweet_id[i]);

            // Show the tweet.
         
            
            document.getElementById("tweets").appendChild(d);

            $("#container" + numberOldContainers).html("<table><tr><td rowspan=\"3\" class = \"numbers\">" + tweets_id.length + "</td><td rowspan=\"3\" class = \"picture\"><img src=\"" + image[i]
                + "\" width=\"48px\" alt=\"Image\" /></td><td><span id=\"user\"><a href=\"http://www.twitter.com/" + nick[i] +
                "\" target=\"_blank\">" + nick[i] + "</a></span></td></tr><tr><td id=\"tweet-text\">" +
                copy  + "</td></tr><tr><td id=\"date\"><span style=\" font-size:1.3em; \">" +TwitterDateConverter(created_at[i]) + "</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Retweeted <span style=\"font-family:'HelveticaNeueBold';font-weight:bold;color:#0085B0; \">" +
                retweet_count[i] + " </span>times.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Influence: <span id=\"S" + tweet_id[i] + "\"></span>&nbsp;&nbsp;&nbsp;<span class=\"votation\"><a href=\"#\" onclick=\"voteTweet(" + tweet_id[i] +
                ",1,"+ i +");return false;\"><img src=\"http://twiimcdn.appspot.com/img/positive.png\" alt=\"positive\" />Nice</a><span id=\"P" + tweet_id[i] +
                "\"></span><a href=\"#\" onclick=\"voteTweet(" + tweet_id[i] + ",-1,"+ i +");return false;\"><img src=\"http://twiimcdn.appspot.com/img/negative.png\" alt=\"negative\" />Awful</a><span id=\"N" + tweet_id[i] +
                "\"></span><span id=\"I" + tweet_id[i] +"\"></span></span></td></tr></table>");  

            // Increment the number of containers.
                        
            numberOldContainers++;
                
            // Save into the DB.
            addTweet(i); 
                           
            // GET VOTES. 
        
            getVotes(tweet_id[i],i);


        }
            
    }
            
    if(defined_values.length > 0){
            
        //More Button here $msg_id values is a last message id value.
        $("#box").html('<div id="more' + tweets_id[tweets_id.length-1] + '" class="morebox"><a href="#" class="more" id="' + tweets_id[tweets_id.length-1] + '">more</a></div>');

            
    }else{
                
        $("#box").html('<div id="nothing' + tweets_id[tweets_id.length-1] + '" class="morebox"><a href="index.php">Ops! I couldn\'t find anything.</a></div>');          
    }

    if(ID != 0){
        $("#more"+ID).remove(); // removing old more button
    }
    times++;
  
}

////////////////////////////////////////////////////////////////////////
//
//				PRINT TWEETS RESULT
//
////////////////////////////////////////////////////////////////////////

function printTweets(ID){
    $("#back-buttom").html('<h3><a style="color:white;font-size:0.8em;text-decoration:underline;" href="index.php">Back</a><h3>');
    var numberOldContainers = tweets_id.length;
    // Create the header.
            
    if(defined_values.length > 0){
        var c = document.createElement("div");
        c.id = "title";
        document.getElementById("division").appendChild(c);
        $("#title").html("<table id=\"title\"><tr><td id=\"tweet-title\">Last tweets</td></tr></table>");
    }
     

    for(i = 0; i < defined_values.length ;i++){
        // IF IT'S NOT REPEATED'
                
        if($.inArray(tweet_id[i], tweets_id) == -1){
    
            var d = document.createElement("div");
            d.id = "container"+numberOldContainers;
                
            // Format the text.
                
            var copy = linkify(summary[i]);
                
            // Save tweet id.
                
            tweets_id.push(tweet_id[i]);

            // Show the tweet.

            document.getElementById("tweets").appendChild(d);
            $("#container" + numberOldContainers).html("<table><tr><td rowspan=\"3\" class = \"numbers\">" + tweets_id.length + "</td><td rowspan=\"3\" class = \"picture\"><img src=\"" + image[i]
                + "\" width=\"48px\" alt=\"Image\" /></td><td><span id=\"user\"><a href=\"#\" onclick=tagClick(\"@" +
                nick[i] + "\")>" + nick[i] + "</a></span></td></tr><tr><td id=\"tweet-text\">" +
                copy  + "</td></tr><tr><td id=\"date\"><span style=\" font-size:1.3em; \">" +TwitterDateConverter(created_at[i]) + "</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"#\" onclick=tagClick(\"@" +
                nick[i] + "\") >See more <span style=\"font-weight:bold;\">" + nick[i] + "'s Tweets</span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"votation\"><a href=\"#\" onclick=\"voteTweet(" + tweet_id[i] + ",1,"+ i +");return false;\"><img src=\"http://twiimcdn.appspot.com/img/positive.png\" alt=\"positive\" />Nice</a><span id=\"P" + tweet_id[i] + "\"></span><a href=\"#\" onclick=\"voteTweet(" + tweet_id[i] + ",-1,"+ i +");return false;\"><img src=\"http://twiimcdn.appspot.com/img/negative.png\" alt=\"negative\" />Awful</a><span id=\"N" + tweet_id[i] + "\"></span><span id=\"I" + tweet_id[i] +"\"></span></span></td></tr></table>");  
 
            // Increment the number of containers.
                        
            numberOldContainers++;
                
            // Save into the DB.
                
            addTweet(i);
            
                           
            // GET VOTES. 
            
            getVotes(tweet_id[i],i);

        }
            
    }

            
    if(defined_values.length > 0){
            
        //More Button here $msg_id values is a last message id value.
        $("#box").html('<div id="more' + tweets_id[tweets_id.length-1] + '" class="morebox"><a href="#" class="more" id="' + tweets_id[tweets_id.length-1] + '">more</a></div>');

            
    }else{
                
        $("#box").html('<div id="nothing' + tweets_id[tweets_id.length-1] + '" class="morebox"><a href="index.php">Ops! I couldn\'t find anything.</a></div>');
          
    }

    if(ID != 0){
        $("#more"+ID).remove(); // removing old more button
    }
    times++;

}

////////////////////////////////////////////////////////////////////////
//
//				PRINT PROFILE HEADLINE
//
////////////////////////////////////////////////////////////////////////

function printProfile(ID){
    
    if(back != ""){
        $("#back-buttom").html('<h3><a style="color:white;font-size:0.8em;text-decoration:underline;" href="#" onclick=tagClick("' + back + '")>Back</a><h3>');
    }else{
        $("#back-buttom").html('<h3><a style="color:white;font-size:0.8em;text-decoration:underline;" href="index.php">Back</a><h3>');
    }
    if(defined_values.length > 0){
        if(ID == 0){
            var c = document.createElement("div");
            c.id = "title";
            document.getElementById("division").appendChild(c);
            $("#title").html("<table id=\"title\"><tr><td id=\"tweet-title\">Profile and last tweets</td></tr></table>");
    
		
            $("#tweets").html("<table id=\"profile\"><tr><td rowspan=\"5\"><img src=\"" + 
                image[0] + "\" width=\"72\" alt=\"Profile image\"/></td><th>Nick:</th><td>" + nick[0] + 
                "</td><th>Followers:</th><td>" + followers_count[0] + "</td><th>Profile views:</th><td id=\"views\"></td><td></td></tr><tr><th>Friends:</th><td>" + friends_count[0] +
                "</td><th>Statuses:</th><td>" + statuses_count[0] + "</td><th>User Influence:</th><td id=\"influence\"></td><td></td></tr><tr><th>Website:</th><td colspan=\"6\"><a href=\"" + personalUrl[0] + "\" target=\"_blanket\">" + personalUrl[0] +"</a></td></tr><tr><th style=\"margin:40px\">Description:</th><td colspan=\"6\">" + description[0] +
                "</tr><tr><th>Created at:</th><td colspan=\"4\">" + account_created_at[0] + "</td><td colspan=\"2\"><iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"src=\"//platform.twitter.com/widgets/follow_button.html?screen_name=" + nick[0] + "&show_count=false\"style=\"width:300px; height:20px;\"></iframe></td></tr></table>");
        }
        getViews(user_id[0]);

    
        printUserTimeline(ID);
    }
    
}