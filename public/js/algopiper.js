Date.prototype.add_millis = function(n) {
    this.setMilliseconds(this.getMilliseconds()+n);
    return this;
};
var now = new Date();
var time_elapsed = now - new Date(JSON.parse(localStorage.getItem('algopiper-container'))['start_time']);
var two_hours = 2 * 60 * 60 * 1000;
if(time_elapsed < two_hours){
    var time_remaining = two_hours - time_elapsed;
    var countUntil = now.add_millis(time_remaining);
    $('#defaultCountdown').countdown({until: countUntil});
}

$('#doc-1').click(function(){
    $('.doc-side-nav').attr("class","doc-side-nav");
    $('#doc-1').attr("class","doc-side-nav doc-active");
    
    $('.algopiper-section').hide();
    $('#algopiper').show();
});
$('#doc-2').click(function(){
    $('.doc-side-nav').attr("class","doc-side-nav");
    $('#doc-2').attr("class","doc-side-nav doc-active");
    
    $('.algopiper-section').hide();
    $('#guide').show();
    
});
$('.algopiper-try').click(function(){
    $('.doc-side-nav').attr("class","doc-side-nav");
    $('#doc-3').attr("class","doc-side-nav doc-active");
    
    $('.algopiper-section').hide();
    $('#try').show();
});
$('.algopiper-submit').click(function(){
    $('.doc-side-nav').attr("class","doc-side-nav");
    $('#doc-4').attr("class","doc-side-nav doc-active");
    
    $('.algopiper-section').hide();
    $('#submit').show();
});
$('#deploy-btn').click(function(){
    $('#deploy-btn').attr('disabled', 'disabled');
    $('#deploy-btn').html('deploying ..');
    if(localStorage.getItem('algopiper-container') != undefined){
        // there is a container deployed before for this host. check its start time.
        var now = new Date();
        var time_elapsed = now - new Date(JSON.parse(localStorage.getItem('algopiper-container'))['start_time']);
        var two_hours = 2 * 60 * 60 * 1000;
        if(time_elapsed < two_hours){
            window.open(JSON.parse(localStorage.getItem('algopiper-container'))['endpoint'], '_blank');
            $('#deploy-btn').removeAttr('disabled');
            $('#deploy-btn').html('DEPLOY!');
            return;
        }
    }
    var jqxhr = $.get( "/try-algopiper")
	       .done(function(data,textStatus,jqXHR) {
               data = JSON.parse(data);
               if(data['status'] === 'success'){
                   setTimeout(openTab, 500);
                   function openTab(){
                       window.open(data['endpoint'], '_blank');
                   }
                   localStorage.setItem('algopiper-container', JSON.stringify({'start_time': new Date, 'endpoint': data['endpoint']}));
                   var now = Date();
                   var two_hours = 2 * 60 * 60 * 1000;
                   var countUntil = now.add_millis(two_hours);
                   $('#defaultCountdown').countdown({until: countUntil});
               }
           })
        .fail(function(data) {
            alert(data);
        })
        .always(function(){
            $('#deploy-btn').removeAttr('disabled');
            $('#deploy-btn').html('DEPLOY!');
        });
});