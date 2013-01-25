////////////////////////////////////////////////////////////////////////
//
//				GET VOTES.
//
////////////////////////////////////////////////////////////////////////

function getVotes(id,i){
       var tweetInfluence = 0;
	   var ranking = 0;
    $.post("db/getVotes.php", {
        id: id

    }, function(data) {

        var array = data.split(",");
		tweetInfluence = getInfluence(id,array,i);
		if(i < 10){
			userInfluence += tweetInfluence;
			ranking = valoration(tweetInfluence);
			if(statuses_count[i] >= 10){
				$("#influence").fadeIn("fast","linear").html(userInfluence/10 + " [" + ranking + " / 10]").css("color", "green").css("font-size","1.3em");
		}else{
				$("#influence").fadeIn("fast","linear").html(userInfluence/statuses_count[i] + " [" + ranking + " / 10]").css("color", "green").css("font-size","1.3em");
			
		}
		}
        $("#P"+id).html("&nbsp;&nbsp;(" + array[0] + " votes)");
        $("#N"+id).html("&nbsp;&nbsp;(" + array[1] + " votes)");
		
		if(tweetInfluence > 0){
			$("#S"+id).fadeOut("slow","linear").fadeIn("slow","linear").html("&nbsp;&nbsp;" + tweetInfluence).css("color", "green").css("font-size","1.3em");
		}else{
			$("#S"+id).fadeOut("slow","linear").fadeIn("slow","linear").html("&nbsp;&nbsp;" + tweetInfluence).css("color", "red").css("font-size","1.3em");
			
		}
		return array;
    });

}

////////////////////////////////////////////////////////////////////////
//
//				VOTE TWEET
//
////////////////////////////////////////////////////////////////////////

function voteTweet(id,type,i){
    // Save into the DB.
                
    $.post("db/voteTweet.php", {
        id: id,
        type:type
                
    }, function(data) {
        if(data == ""){
            getVotes(id,i);
                $("#I"+id).fadeIn("slow","linear").html("&nbsp;&nbsp;Thanks!").css("color", "green").css("font-size","1.3em").fadeOut(5000,"linear");
        }else{
            $("#I"+id).fadeOut("fast","linear");
                $("#I"+id).fadeIn("slow","linear").html("&nbsp;&nbsp;Can't vote twice!").css("color", "red").css("font-size","1.3em").fadeOut(5000,"linear");

        }
    
    });
}


////////////////////////////////////////////////////////////////////////
//
//				ADD SEARCH TERM
//
////////////////////////////////////////////////////////////////////////

function addSearchTerm(){
    var query = document.getElementById("tag").value; // Query.
    query = query.toLowerCase();

    // Save into the DB.
                
    $.post("db/insertSearch.php", {
        query: query 
                
    }, function(data) {
        //alert("Data Loaded: " + data);

        });
}

////////////////////////////////////////////////////////////////////////
//
//				ADD PROFILE VIEW
//
////////////////////////////////////////////////////////////////////////

function addProfileView(id,picture){
    var nick = $("#tag").val().substring(1); // Query.

    // Save into the DB.
                
    $.post("db/addView.php", {
        id: id,
        nick:nick,
        picture:picture
                
    }, function(data) {
        //alert("Data Loaded: " + data);

        });
}


////////////////////////////////////////////////////////////////////////
//
//				GET VIEWS
//
////////////////////////////////////////////////////////////////////////

function getViews(id){
    // Save into the DB.

    $.post("db/getViews.php", {
        id: id
                
    }, function(data) {

        $("#views").html(data);
        

    });
}

////////////////////////////////////////////////////////////////////////
//
//				ADD TWEET
//
////////////////////////////////////////////////////////////////////////

function addTweet(i){
    $.post("db/insert.php", {
        tweet_id: tweet_id[i],
        summary:summary[i],
        nick:nick[i],
        user_id:user_id[i],
        image:image[i],
        uri:"http://www.twitter.com/"+nick[i],
        created_at:created_at[i]
                
    }, function(data) {
         //alert("Data Loaded: " + data);
        });
            
}