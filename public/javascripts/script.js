$(document).ready(function(){
  $('.parallax').parallax();
  $('.slider').slider({full_width: true});
});

$(".dropdown-button").dropdown();
$(".button-collapse").sideNav();

var options = [
  {selector: '.aboutus-content-list', offset: 200, callback: 'showStaggeredList(".aboutus-content-list")' },
  {selector: '.materialboxed', offset: 300, callback: 'fadeInImage(".materialboxed")'}
];
scrollFire(options);

// Scroll to top
$('.btn-floating.green').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});

$("#aboutlink").click(function () {
    $("html,body").animate({
        scrollTop: $("#aboutus").offset().top
    }, 800);
});
$('#contactlink').click(function () {
    $('html,body').animate({
        scrollTop: $("#contactus").offset().top
    }, 800);
});
$('#memberlink').click(function () {
    $('html,body').animate({
        scrollTop: $("#member").offset().top
    }, 800);
});
$('#skilllink').click(function () {
    $('html,body').animate({
        scrollTop: $("#skillus").offset().top
    }, 800);
});