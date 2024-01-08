
    // $('.business-slider-class').slick({
    //   dots: false,
    //   infinite: false,
    //   loop:true,
    //   speed: 300,
    //   centerPadding:"30px",
    //   spaceBetween: 30,
    //   slidesToShow: 3,
    //   slidesToScroll: 4,
    //   prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    //   nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
            
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
            
    //       }
    //     },
    //     {
    //       breakpoint: 800,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // });

    $(document).ready(function(){


      // Initialize the slider
      var slider = $('.business-slider-class').slick({
        dots: false,
        infinite: true,
        loop: true,
        speed: 300,
        centerPadding: "30px",
        spaceBetween: 30,
        slidesToShow: 3,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  
      // Add click event listener to the Next arrow
      $('.slick-next').on('click', function() {
        // Remove the 'slick-arrow-clicked' class from all Next arrows
        $('.slick-next').removeClass('slick-arrow-clicked');
        // Add the 'slick-arrow-clicked' class to the clicked Next arrow
        $(this).addClass('slick-arrow-clicked');
      });
    });

// Swiper-2
// var swiper = new Swiper(".expert-swiper", {
//   slidesPerView: 3,
//       spaceBetween: 30,
  
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       // pagination: {
//       //   el: ".swiper-pagination",
//       // },
//       mousewheel: true,
//       keyboard: true,
//     });


    $('.expert-slider-class').slick({
      dots: false,
      infinite: false,
      speed: 300,
      centerPadding:"30px",
      spaceBetween: 30,
      slidesToShow: 3,
      slidesToScroll: 4,
      prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


// Swiper-3
var swiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
      centeredSlides: true,
      // autoplay:  {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});


// =============///


$(document).ready(function(){
  // Initialize the slider
  $('.business-slider-class').slick({
    // Your slick slider settings go here
  });

  // Add a class to the button when the slider is active
  $('.slider').on('init reInit afterChange', function(event, slick, currentSlide){
    if (slick.activeBreakpoint !== null || slick.slideCount <= slick.options.slidesToShow) {
      // Slider is active, add a class to the button
      $('.slick-next.slick-arrow').addClass('slider-active');
    } else {
      // Slider is not active, remove the class from the button
      $('.slick-next.slick-arrow').removeClass('slider-active');
    }
  });
});
