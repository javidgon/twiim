////////////////////////////////////////////////////////////////////////
//
//				READY TASKS
//
////////////////////////////////////////////////////////////////////////

$("document").ready(function(){
    $(".results").hide();
    $("#back").hide();
	$("#howto").show();
    $("form :text").addClass("default-text");
    
    getTrendingTopics();
    
   

    start();

    $('#small-logo').hover(function () {
        this.src = 'http://twiimcdn.appspot.com/img/twiim_logo_without_slogan_focus.png';
    }, function () {
        this.src = 'http://twiimcdn.appspot.com/img/twiim_logo_without_slogan.png';
    });
});
       
function start(){
	if(($("#tag").val() != "Enter term or user")){
		$("#charCounter").show();
		$("#charCounter").html($("#tag").val().length);
	}else{
		$("#charCounter").hide();
	}
               
    if(($("#tag").val() != "") && ($("#tag").val() != "Enter term or user")){

        $("#search").attr("disabled", false);
    }else{

        $("#search").attr("disabled", true); 
    }
    
                
}

////////////////////////////////////////////////////////////////////////
//
//				TAG CLICK EVENT
//
////////////////////////////////////////////////////////////////////////
         
function tagClick(text){
    if($("#tag").val() == "Enter term or user"){
        back = "";
    }else{
        back = $("#tag").val();
    }
    $("#tag").removeClass("default-text");
    $("#tag").addClass("focused");
    $("#tag").val(text);

    start();
    controller(0);
}

////////////////////////////////////////////////////////////////////////
//
//				ENTER EVENT
//
////////////////////////////////////////////////////////////////////////
           
function enter() {
    var value = false;
    if(window.event.keyCode == 13){
        controller(0);

    }else{
        value = true;
    }
    return value;
} 

////////////////////////////////////////////////////////////////////////
//
//				MORE BUTTON EVENT
//
////////////////////////////////////////////////////////////////////////

$(function() 
{

    $('#box').live("click",function() 
    {
        var ID = $(".more").attr("id");

        if(ID)
        {
            $("#more"+ID).html('<img src="http://twiimcdn.appspot.com/img/moreajax.gif" />');
            controller(ID);
                       
        }
        else
        {
                      
            $(".morebox").hide();
            reload();
        }

        return false;
    });
    
////////////////////////////////////////////////////////////////////////
//
//				TEXT BOX EVENTS
//
////////////////////////////////////////////////////////////////////////

                
    $("form :text").focus(function(){
        
        if($(this).val() == "Enter term or user"){
            $(this).removeClass("default-text");
            $(this).addClass("focused");
            $(this).val("");
                        
        }
        
    });
                
    $("form :text").blur(function(){
        
        if($(this).val() == ""){
            $(this).removeClass("focused");
            $(this).addClass("default-text");
            $(this).val("Enter term or user");
        }
        
        
    });

});
