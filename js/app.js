/*console.log("WTF IS GOING ON!!!???")

$("button").click(function(){
    $("#red").animate({left: '250px'});
}); 

$("button").click(function(){
    $("#blue").animate({left: '1000px'});
}); 

$(window).keypress(function(){
});
$(document).keypress(function(e) {
    if(e.which == 13) {
    }
});

*/



$(window).keypress(function(q) {
    if(q.which == 49)
 $("#red").animate({width: "+=100px"});
});

$(window).keypress(function(p) {
    if(p.which == 50)
 $("#blue").animate({width: "+=100px"});
});