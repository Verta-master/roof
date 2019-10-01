//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

if (window.innerWidth < 766) {
  $('.menu__link').click(function() {
    $('.menu__list').slideToggle();
    $('.menu').removeClass('menu--opened');
  })
}

//Scroll to top
$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});

