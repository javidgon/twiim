/*!
 * http://www.nostravia.com
 *
 * Created by José Vidal. 
 * 
 */

// THIS IS THE CONTROLLER. IT'LL CONTROL THE APP AND IT'LL MAKE THE CALLS TO DIFFERENT FILES.'


////////////////////////////////////////////////////////////////////////
//
//				CONTROL PANEL.
//
////////////////////////////////////////////////////////////////////////

function controller(ID){
	$("#howto").hide();	// Hide howto link.
    if(document.getElementById("tag").value.charAt(0) == "@"){	// If want to search an concrete user.
     
        getTimeline(ID);
        
    }else{	// If we are searching tweets.
        
        getSearch(ID);
    }
   
}

////////////////////////////////////////////////////////////////////////
//
//				GET USER TIMELINE
//
////////////////////////////////////////////////////////////////////////

function getTimeline(ID){
    ID = ID;
    defined_values = [];
    var old = defined_values;

    var query = $("#tag").val(); // Query.
    if(ID == 0){
		userInfluence = 0;
        query = query.toLowerCase();
        addSearchTerm();

        times = 0;
 
        // Delete everything before every search.
    
        var olddiv = document.getElementById("tweets");

        for(i=0; i < tweets_id.length; i++){
            
            if(document.getElementById("container"+i)){

                olddiv.removeChild(document.getElementById("container"+i));
            }
        }
        tweets_id = [];
        
    }
    var nres = document.getElementById("results").value; // Results number.
    $("#tagcloud").hide();
 
    // Get Tweets.
    counter = 0;
    $.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=' + query +'&count=' + Number(parseInt(nres) + (parseInt(10)*parseInt(times))) + '&callback=?',

        function(data){

            $.each(data, function(i,item){
                counter++;
                summary[i] = item.text;
                nick[i] = item.user.screen_name;
                name[i] = item.user.name;
                image[i] = item.user.profile_image_url;
                tweet_id[i] = item.id;
                user_id[i] = item.user.id;
                var s = item.created_at;

				var date = new Date(
				    s.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/,
				        "$1 $2 $4 $3 UTC"));
				
				created_at[i] = date.getTime();
                retweet_count[i] = item.retweet_count;
                favorites_count[i] = item.user.favourites_count;
                followers_count[i] = item.user.followers_count;
                friends_count[i] = item.user.friends_count;
                statuses_count[i] = item.user.statuses_count;
                personalUrl[i] = item.user.url;
                description[i] = item.user.description;
                account_created_at[i] = item.user.created_at;
                defined_values.push(i);

            });
            
            if(counter > 0){
                $(".results").show();
                $("#back").show();
                addProfileView(user_id[0], image[0]);
                printProfile(ID);
            
            }else{
                
                $("#box").html('<div id="nothing' + tweets_id[tweets_id.length-1] + '" class="morebox"><a href="index.php">Ops! I couldn\'t find any user with this nick.</a></div>');

            }
            
            
        });

		
}

////////////////////////////////////////////////////////////////////////
//
//				GET TWEETS
//
////////////////////////////////////////////////////////////////////////


function getSearch(ID)   
{  
    ID = ID;
    defined_values = [];
    var counter = 0;
    var from ="";
    var remaining_hits; // Remaining hits.
    var query = document.getElementById("tag").value; // Query.
    if(ID == 0){
        query = query.toLowerCase();
        addSearchTerm();
        times = 0;

        // Delete everything before every search.
    
        var olddiv = document.getElementById("tweets");

        for(i=0; i < tweets_id.length; i++){
            
            if(document.getElementById("container"+i)){

                olddiv.removeChild(document.getElementById("container"+i));
            }
        }
        if($("#tweets")){
            $("#tweets").html("");
        }
        tweets_id = [];
    }
 
    var nres = document.getElementById("results").value; // Results number.
    var lang = document.getElementById("lang").value; // Language.    
    completeQ = query; // Complete query.


    
    $("#tagcloud").hide();
 
    // Calculate remaining_hits.
    
       
    $.getJSON(
        'http://api.twitter.com/1/account/rate_limit_status.json?callback=?',
        function(data) {
            var percent = (data.remaining_hits / data.hourly_limit) * 100;
            remaining_hits = data.remaining_hits;
            var $statusText = $('#statusText').html(' ' + percent.toFixed(1) + '% of Twitter API calls remaing. Quota will be reset at ' + data.reset_time);
            if(data.remaining_hits == 0) {
                Ext.Msg.alert('Warning', 'There is currently no more Twitter API calls remaining for you. Your quota will be reset at ' + data.reset_time);
            }
            
        }

        );
    
    // Get Tweets.
    counter = 0;
    $.getJSON('http://search.twitter.com/search.json?callback=?&lang=' + lang + '&q="'+ encodeURIComponent(completeQ) + '"&rpp=' + Number(parseInt(nres) + (parseInt(10)*parseInt(times))) + '&include_entities=1',

        function(data){
            $.each(data.results, function(i,item){
                
                summary[i] = item.text;
                nick[i] = item.from_user;
                image[i] = item.profile_image_url;
                tweet_id[i] = item.id;
                user_id[i] = item.from_user_id;
                var s = item.created_at;

				var date = new Date(
				    s.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/,
				        "$1 $2 $4 $3 UTC"));
				
				created_at[i] = date.getTime();
                defined_values.push(i);
                counter++;
            });
            
            if(counter > 0){
                $(".results").show();
                $("#back").show();
                printTweets(ID);
            
            }else{
                
                $("#box").html('<div id="nothing' + tweets_id[tweets_id.length-1] + '" class="morebox"><a href="index.php">Ops! I couldn\'t find anything.</a></div>');

            }
        });
}

////////////////////////////////////////////////////////////////////////
//
//				GET GLOBAL TRENDING TOPICS.
//
////////////////////////////////////////////////////////////////////////

function getTrendingTopics(){
    var string = "";
    $.ajax({
        url: 'http://api.twitter.com/1/trends/1.json',
        dataType: 'jsonp',
        success: function(data) {
            $.each(data[0].trends, function(i) {
                TTname[i] = data[0].trends[i].name;
                TTurl[i] = data[0].trends[i].url;
                TTquery[i] = data[0].trends[i].query;
            });
            
            
            string = '<span style="font-size:1em">';
            for(var j=0;j<TTname.length;j++){
                var aux = TTname[j].replace(/ /g, "+");
                string += '<a href="#" onclick=tagClick("'+ aux + '") >' + TTname[j] + '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
            string += '</span>';
            $("#tagcloud").append(string);
        }
    });
    
    
    
    
}