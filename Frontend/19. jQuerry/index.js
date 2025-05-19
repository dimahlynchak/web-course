$("h1").on("mouseover", function(){
    $("h1").addClass("awful-style");
})

$("input").keydown(function(event){
    $("h1").text(event.key);
})

// $("button").on("click", function(){
//     $("h1").slideToggle();
// });

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});