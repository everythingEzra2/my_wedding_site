$(document).ready(function () {
    console.log("ready!");
    
    $(".scroll-to").click(function() {
        var destination = $(this).attr('destination');
        $('html, body').animate({
            scrollTop: $('#'+ destination).offset().top
        }, 'smooth');
    });
    
    $("#")
});