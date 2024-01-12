
    // ========testimonial slider/=====/
    $('.testimonial-slider-class').slick({
      dots: true,
      infinite: false,
      speed: 300,
      centerPadding:"30px",
      spaceBetween: 30,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows:false,
    
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


    // ========blog slider/=====/
    $('.blog-slider-class').slick({
      dots: true,
      infinite: false,
      speed: 300,
      centerPadding:"50px",
      spaceBetween: 50,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows:false,
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
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


