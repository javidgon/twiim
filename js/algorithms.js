/* 
 * Created by javidgon.
 */

////////////////////////////////////////////////////////////////////////
//
//				LEVENSHETEIN FUNCTION. IT WILL CALCULATE COINCIDENCES.
//
////////////////////////////////////////////////////////////////////////

function levenshtein( a, b )
{
    var i;
    var j;
    var cost;
    var d = new Array();
 
    if ( a.length == 0 )
    {
        return b.length;
    }
 
    if ( b.length == 0 )
    {
        return a.length;
    }
 
    for ( i = 0; i <= a.length; i++ )
    {
        d[ i ] = new Array();
        d[ i ][ 0 ] = i;
    }
 
    for ( j = 0; j <= b.length; j++ )
    {
        d[ 0 ][ j ] = j;
    }
 
    for ( i = 1; i <= a.length; i++ )
    {
        for ( j = 1; j <= b.length; j++ )
        {
            if ( a.charAt( i - 1 ) == b.charAt( j - 1 ) )
            {
                cost = 0;
            }
            else
            {
                cost = 1;
            }
 
            d[ i ][ j ] = Math.min( d[ i - 1 ][ j ] + 1, d[ i ][ j - 1 ] + 1, d[ i - 1 ][ j - 1 ] + cost );
			
            if(
                i > 1 && 
                j > 1 &&  
                a.charAt(i - 1) == b.charAt(j-2) && 
                a.charAt(i-2) == b.charAt(j-1)
                ){
                d[i][j] = Math.min(
                    d[i][j],
                    d[i - 2][j - 2] + cost
                    )
         
            }
        }
    }
 
    return d[ a.length ][ b.length ];
}


////////////////////////////////////////////////////////////////////////
//
//				SIMILARITY ALGORITHM
//
////////////////////////////////////////////////////////////////////////

function similarity(text,key){
    text = text.toLowerCase();
    key = key.toLowerCase();
    var sim = key.length;
    var aux;
    var i = 0;
    var pos = 0;
    
    var words = text.split(" ");
    
    while(aux != 0 && i < words.length){
        aux = key.length;
        
        if(words[i] == key){
            
            aux = 0;
            
        }else if(words[i] != key && key.length == 1){
            
            aux = 1;
            
        }else{
        
            aux = levenshtein(words[i],key);
        }
        
        if (aux < sim){
            
            sim = aux;
        }
        
        i++;
    }
    
    return sim;
    
}

////////////////////////////////////////////////////////////////////////
//
//				INFLUENCE ALGORITHMS
//
////////////////////////////////////////////////////////////////////////


function getInfluence(tweet_id,array,i){
	var retweets = 0;
	if(summary[i].indexOf("RT") == -1){
		if(retweet_count[i] == "100+"){
			retweets = 100;
		}else{
			retweets = retweet_count[i];
		}
	}
   var influence = followers_count[i] + (retweets * 5) + Number(array[0] - array[1]);
    
return influence;
      
}

function getTotalInfluence(tweets_id,array,i){
	var score = 0;
	for(var j = 0;j < 10;j++){
    	score += getInfluence(tweets_id[j],array,j);
	}
    
return score;
      
}

////////////////////////////////////////////////////////////////////////
//
//				VALORATION SCALE
//
////////////////////////////////////////////////////////////////////////

function valoration(value){
	var number = 0;
	var points = Math.round(value);
	
	if(points < 50)
		number=1;
	else if(points > 50 && points <= 75)
		number=2;
	else if(points > 75 && points <= 300)
		number=3;
	else if (points > 300 && points <= 1000)		
		number=4;
	else if (points > 1000 && points <= 3000)
		number=5;
	else if (points > 3000 && points <= 8000)
		number=6;
	else if (points > 8000 && points <= 20000)
		number=7;
	else if (points > 20000 && points <= 50000)
		number=8;
	else if (points > 50000 && points <= 100000)
		number=9;
	else if (points > 100000)
		number=10;

return number;	
}


