

$(window).scroll(function(){
  var sticky = $('.header-site-main'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement("style")
  msViewportStyle.appendChild(
    document.createTextNode(
      "@-ms-viewport{width:auto!important}"
    )
  )
  document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}

  let userAgent, ieReg, ie;
  userAgent = window.navigator.userAgent;
  ieReg = /msie|Trident.*rv[ :]*11\./gi;
  ie = ieReg.test(userAgent);
  const pictureArray = document.querySelectorAll('img');

  if(ie) {
    [...pictureArray].forEach(picture => {
        let imgUrl = picture.firstChild.src;
        if(imgUrl){
          picture.style.backgroundImage = `url(${imgUrl})`;
          picture.classList.add('custom-object-fit');
        }
    });
  }



  $('.slider-content').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
    infinite: true,
     centerMode: true,
    speed: 1000,
  asNavFor: '.slider-thumb',
    arrows: false,
  focusOnSelect: true
});
$('.slider-thumb').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-content',
  dots: false,
   infinite: true,
  centerMode: true,
  vertical: true,
   arrows: false,
  focusOnSelect: true
});

$('.slider-start').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
    infinite: true,
     vertical: true,
     centerMode: true,
  asNavFor: '.start-numb',
    arrows: false,
  focusOnSelect: true
});
$('.start-numb').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-start',
  dots: false,
   infinite: true,
  centerMode: true,
  vertical: true,
   arrows: false,
  focusOnSelect: true
});

$('.slider-start_sites').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
    infinite: true,
     vertical: true,
     centerMode: false,
  asNavFor: '.start-numb_sites',
    arrows: false,
  focusOnSelect: true
});
$('.start-numb_sites').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-start_sites',
  dots: false,
   infinite: true,
  centerMode: true,
  vertical: true,
   arrows: false,
  focusOnSelect: true
});

$('.our_work .slider-content1').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
    infinite: true,
     centerMode: true,
    speed: 1000,
  asNavFor: '.our_work  .slider-thumb1',
    arrows: false,
  focusOnSelect: true,
  accessibility:true
});
$('.our_work .slider-thumb1').slick({
  slidesToShow:1,
  slidesToScroll: 1,
  asNavFor: '.our_work  .slider-content1',
  dots: false,
   infinite: true,
  centerMode: true,
  vertical: false,
   arrows: false,
  focusOnSelect: true
});


$('.slider-start_design').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
    infinite: true,
     vertical: true,
     centerMode: false,
  asNavFor: '.start-numb_design',
    arrows: false,
  focusOnSelect: true
});
$('.start-numb_design').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-start_design',
  dots: false,
   infinite: true,
  centerMode: true,
  vertical: true,
   arrows: false,
  focusOnSelect: true
});
              $(document).ready(function(){
                

              $('.menu_btn').click(function () {
                $('.hamburger-menu').toggleClass('open');
                   $('.right_sidebar').toggleClass('open');
                    $('.main_ul').toggleClass('show');
                    $('body nav.header-site-main').toggleClass('open');

                      });
                 
  $('ul li.has-children').click(function(e) {
 $('.main_ul').removeClass("open");
    $(this).toggleClass("open");

          $('ul li.has-children').not($(this)).removeClass('open');

      if ( $( this ).hasClass( 'open' ) ) {

     $('.main_ul').addClass('open');
         $(this).find('ul').toggleClass('open');
          $('ul li.has-children').not($(this)).find('ul').removeClass('open');

    }
    });


             



              $('.about_us_page .our_services > .container > .row.services_box .service_items > .toggle_button').click(function() {

                   $(this).toggleClass('open');
                   
                     if ( $( this ).hasClass( 'open' ) ) {
     $(this).parents( '.service_items').toggleClass('open');

    }
                  });



              });


              (function($){
                $(window).on("load",function(){

                  $(".scroll_div").mCustomScrollbar({
                    axis:"x",
                    theme:"rh-theme",
                    setWidth: 650,
                    scrollButtons:{ 
                      enable: true,
                    }
                  });
                });
              })(jQuery);


              $('popup_container').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
              

  

var size = 400,

  newsContent = $('.package'),
  newsText = newsContent.text();


 
if (newsText.length > size) {
  newsContent.text(newsText.slice(0, size) + ' ...');

}

var s = 400,
 newsContent1 = $('.sites_box .col_site p.text'),
  newsText1 = newsContent1.text();
if (newsText1.length > s) {
  newsContent1.text(newsText1.slice(0, s) + ' ...');

}

// let btn_mega1 = document.querySelectorAll(`.menu__box.main_ul li.has-children`)

// for (let j = 0; j < btn_mega1.length; j++)
// {

//     btn_mega1[j].querySelector('.menu__box.main_ul li.has-children').classList.add(`item_menu-${j}`)

//     btn_mega1[j].onclick = function(event){
//         event.target.classList.toggle('show')
//         console.log(event.target.classList)
    
// console.log(document.querySelectorAll(`.menu__box.main_ul li.has-children`))
// }
// }


// let btn_mega = document.querySelectorAll(`.about_us_page .our_services > .container > .row.services_box .service_items`)
// for (let i = 0; i < btn_mega.length; i++)
// {
//     btn_mega[i].classList.add(`service_items-${i}`)
//     btn_mega[i].querySelector('.toggle_button').classList.add(`toggle_button-${i}`)

//     btn_mega[i].onclick = function(event){
//         event.target.classList.toggle('open')
//         console.log(event.target.classList)
//     }
// }
