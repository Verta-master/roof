//Mobile and footer menu
if (window.innerWidth < 1200) {
  $('.menu__btn').click(function() {
    $('.menu__main').toggleClass('menu__main--opened');
    $('.menu__list').slideToggle();
  });
  
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  });
}

//Scroll to top
$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});

