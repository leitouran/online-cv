jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });

});

$(".readmore").click(function(e){
    
    var id = $(this).attr("expid")
    var offset = $("#exp-"+id).offset();
    var details = $("#details-"+ id)
    
    details.slideToggle()

    if(details.hasClass("shown")){
        $(this).html("Read more [+]")
        $("#exp-summary-"+id).toggleClass("summary-grayed")
        details.toggleClass("shown")
    } else {
        $(this).html("Read less [-]")
        $("#exp-summary-"+id).toggleClass("summary-grayed")
        details.toggleClass("shown")
        
        $('html, body').animate({
            scrollTop: offset.top-20,
            scrollLeft: offset.left
        });        
    }

});

$(".config").click(function(){
    tag = $(this).attr("tag")
    $(".skill-"+tag).toggle()

})
