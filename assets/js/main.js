(function($) {
    "use strict";
    skillProgressBars();
    menuControl();
    setParallax();
    setActiveMenuItem();
    // setSlowScroll();
    skillFill();
    loadMoreProjects();
    scrollfade();

    $(window).on('load', function() {
        setTimeout(() => {
            document.getElementById("loftloader-wrapper").classList.add("off")
        }, 5000);
    })
    $(window).on('resize', function () {
        skillFill();
        setActiveMenuItem();
    });

    $(window).on('scroll', function () {
        skillFill();
        setActiveMenuItem();
        scrollfade();
    });
    AOS.init();

    function skillProgressBars() {
        $(".animated-progress span").each(function () {
            $(this).animate(
              {
                width: $(this).attr("data-progress") + "%",
              },
              1000
            );
            $(this).text($(this).attr("data-progress") + "%");
          });
    }
    const y1 = document.getElementById('scroll-down');
    function scrollfade(){
        window.addEventListener('scroll',()=>{
            let x = window.pageYOffset;
            if (x>=254){
                y1.style.opacity = 0;
            }
            else{
                y1.style.opacity = 1;
            }
        })
    }
    function skillFill() {
        if ($('.skill-fill')[0]) {
            $(".skill-fill:not(.animation-done").each(function (i) {
                var top_of_object = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if ((bottom_of_window - 70) > top_of_object) {
                    $(this).width($(this).data("fill"));
                    $(this).addClass('animation-done');
                }
            });
        }
    }

    function menuControl() {
        $(document).ready(function() {
            $(document).on('click', '.show-hide-nav-btn', function() {
                $(this).toggleClass('active');
                $('.nav-wrapper').toggleClass('active')
            });
        });
    }


    function setActiveMenuItem() {
        var currentSection = null;
        var c = $('.page-wrapper .section.section-active').data("num");
        $('.section').each(function () {
            var element = $(this).attr('id');
            if ($('#' + element).is('*')) {
                if ($(window).scrollTop() >= $('#' + element).offset().top - 150) {
                    currentSection = element;
                }
            }
        });
        $('.nav-menu ul li').removeClass('current').find('a[href*="#' + currentSection + '"]').parent().addClass('current');
        $('.page-wrapper .section').removeClass('section-active');
        $('#' + currentSection).addClass('section-active');
        if (c !== $('#' + currentSection).data("num")) {
            c = $('#' + currentSection).data("num");
            $('.nav-count').animate({"opacity": '1', "right": "217px"}, 150, function () {
                $(this).text(c).animate({"opacity": '1', "right": "217px"}, 150);
            });
        }
    }

    function setParallax() {
        // $('[data-jarallax-element]').jarallax({
        //     speed: 0.2
        // });
    }
    
    // function setSlowScroll() {
    //     $('.nav-menu ul li a[href^="#"], a.button, .slow-scroll').on("click", function (e) {
    //         if ($(this).attr('href') === '#') {
    //             e.preventDefault();
    //         } else {
    //             $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1500);
    //             return false;
    //         }
    //     });
    // }

    function loadMoreProjects() {
        let currentItems = 2;
        $('#load-more-btn').innerHTML = 'hello';

        $(document).on('click', '#load-more-btn', function() {
            let boxes = [...document.querySelectorAll('.portfolio-items .portfolio-item-col')];
            $('#load-more-btn').innerHTML = 'hello';

            for ( var i = currentItems; i < currentItems + 2; i++) {
                boxes[i].style.display = 'block';
            }
            currentItems += 2;
        })

    }

    $(document).ready(function() {
        $('.image-link').magnificPopup({
          type: 'image',
          closeBtnInside: true, // Show close button inside the lightbox
          closeOnBgClick: true, // Close lightbox when clicking outside the image
          callbacks: {
            open: function() {
              $('.mfp-close').addClass('custom-close-button'); // Add a custom class to the close button
            }
          }
        });
      });
})(jQuery);
function loading(){
    document.querySelector('.loading').textContent='NO MORE';
}
let pimg1 = document.getElementById('pimg1');
function ponclick(){
    let xx = document.getElementsByClassName('portfolio-img');
    for(let ii=1;ii<=5;ii++){
        xx[ii].style.opacity='0.5'
    }
    delayFunctionCall(none);
}
function delayFunctionCall(callback) {
    setTimeout(callback, 1000); 
}
function none(){
    let xx = document.getElementsByClassName('portfolio-img');
    for(let ii=0;ii<=5;ii++){
        xx[ii].style.display='none'
    }
    document.getElementsByClassName('loading')[0].style.display='none'
    document.querySelector('.portfolio-resume').style.display='block';
}
function undo() {
    let xx = document.getElementsByClassName('portfolio-img');
    for (let ii = 0; ii <= 5; ii++) {
      xx[ii].style.opacity = '1'; // Reset opacity to original value
      xx[ii].style.display = 'block';
    }
    document.getElementsByClassName('loading')[0].style.display='block'
    document.querySelector('.portfolio-resume').style.display = 'none'; // Hide the element
  }
