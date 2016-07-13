$(document).ready(function () {
    console.log("ready!"); 
    
    $(".scroll-to").click(function() {
        var destination = $(this).attr('destination');
        $('html, body').animate({
            scrollTop: $('#'+ destination).offset().top
        }, 'smooth');
    });
    
    $("#rsvp-send").on('click', function() {
       var valid = false;
       
       valid = true;
       console.log("sending");
       
       if (valid == true)
       {
           // Collect rsvp fields
           var rsvp = {
                name: $("#full-name").val(),
                coming: $('input[name="rsvp"]:checked').val(),
                count: $("#count").val(),
                notes: $("#rsvp-notes").val()
           }
           
           
           
           
           console.log(rsvp);
           
            $.ajax( { url: "https://api.mlab.com/api/1/databases/one_summers_day/collections/rsvp?apiKey=ofhZUMH_83xHQ3Eq3Dd9Ji3TRZ1u5Ste",
                data: JSON.stringify( { "rsvp_entry" : rsvp } ),
                type: "POST",
                contentType: "application/json",
                success: function(data) {
                    alert("Thank you, We've recieved your rsvp! :) \n Please remember knoxville is in eastern time zone, you may have to account for a time change");
                } 
            });
       } 
    });
    
    function OpenInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }   
});

function OpenInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}  