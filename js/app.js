/*console.log("WTF IS GOING ON!!!???")

$("button").click(function(){
    $("#red").animate({left: '250px'});
}); 

$("button").click(function(){
    $("#blue").animate({left: '1000px'});
}); 												old code. using as a reference.

$(window).keypress(function(){
});
$(document).keypress(function(e) {
    if(e.which == 13) {
    }
});

*/



$(window).keypress(function(q) {
    if(q.which == 49)								//keypress 49 is key 1
 $("#red").animate({width: "+=100px"});
});

$(window).keypress(function(p) {
    if(p.which == 50)								//keypress 50 is key 2
 $("#blue").animate({width: "+=100px"});
});