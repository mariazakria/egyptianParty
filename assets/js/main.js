"use strict"
$(".sideNav").on("click",function(){
        $(".sidebar").animate({width: "250px"},1000),
        $(".sideNav").animate({ left: "262px" }, 1000); 

})


$(".toggle").on("click",function(){
    $('.inner').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
})

$(".closebtn").on("click",function(){
    $(".sidebar").animate({width: "0px"},1000),
    $(".sideNav").animate({ left: "25px" }, 1000); 

})
const countDownDate = new Date("dec 31, 2024 00:00:00").getTime();

var downCounter = setInterval(function () {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    if (days < 10)
        $('.days').text('0' + days + ' D');
    else
        $('.days').text(days + ' D');

    if (hours < 10)
        $('.hours').text('0' + hours + ' H');
    else
        $('.hours').text(hours + ' H');

    if (minutes < 10)
        $('.minutes').text('0' + minutes + ' M');
    else
        $('.minutes').text(minutes + ' M');

    if (seconds < 10)
        $('.second').text('0' + seconds + ' S'); 
    else
        $('.second').text(seconds + ' S');

    if (timeleft < 0) {
        clearInterval(downCounter);
        document.querySelector(".days").innerHTML = "";
        document.querySelector(".hours").innerHTML = "";
        document.querySelector(".minutes").innerHTML = "";
        document.querySelector(".second").innerHTML = ""; 
        document.querySelector(".end").innerHTML = "PARTY TIME!!";
    }

}, 1000);



$("#textarea").keyup(function () {
    let val = $("#textarea").val().length;
    let remaining = 100 - val;

    if (val >= 100) {
        $("#textarea").val($("#textarea").val().substring(0, 100));  
        $("#btnForm").addClass("disabled").css("background-color", "#E68285");
    } else {
        $("#btnForm").removeClass("disabled").css("background-color", "#D62E33");
    }

    $(".counter").text(remaining);
});
