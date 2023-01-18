$(() => {


    // Ширина окна для ресайза
    WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
    WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
    BODY = document.getElementsByTagName('body')[0]
    OVERLAY = document.querySelector('.overlay')


    // Моб. меню
    $('header .mob_menu_btn').click((e) => {
        e.preventDefault()

        $('header .mob_menu_btn').addClass('active')
        $('body').addClass('menu_open')
        $('header .menu').addClass('show')
        $('.overlay').fadeIn(300)
    })

    $('header .close_btn, header .menu .item a, .overlay').click((e) => {
        e.preventDefault()

        $('header .mob_menu_btn').removeClass('active')
        $('body').removeClass('menu_open')
        $('header .menu').removeClass('show')
        $('.overlay').fadeOut(300)
    })



    $('body').on('click', '.modal_link', function (e) {
      e.preventDefault()

      Fancybox.close(true)
        Fancybox.show([{
            src: $(this).data('content'),
            type: 'inline',
        }]);
  })


    	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	// Fancybox.defaults.template = {
	// 	closeButton: '<img src=../images/close.png>',
	// 	spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
	// 	main: null
	// }


  $('select').niceSelect();


  $('input[type=tel]').inputmask('+7 (999) 999-99-99')



  	// Скрол к пунктам меню
	$(".scroll").on("click", function(e){
		e.preventDefault();
		let id = $(this).attr("href");

		$("html, body").animate({
				scrollTop: $(id).offset().top - 50
			}, {
				duration: 1500,
				easing: "swing"
		});
	});




  $('.show-more').click(function(){
		$('.hide-content').slideToggle(300); 
    $('.show-more').remove();     
		return false;
	});

      // Слайдер Услуги

      const serviceSliders = [],
      service = document.querySelectorAll('.service .swiper')
  
      service.forEach(function (el, i) {
      el.classList.add('service_s' + i)
  
      let options = {
        loop: true,
        speed: 500,
        watchSlidesProgress: true,
        slideActiveClass: 'active',
        slideVisibleClass: 'visible',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        preloadImages: false,
        lazy: {
          enabled: true,
          checkInView: true,
          loadOnTransitionStart: true,
          loadPrevNext: true
        },
        breakpoints: {
          0: {
            spaceBetween: 0,
            slidesPerView: 1
          },
          480: {
            spaceBetween: 0,
            slidesPerView: 1
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2
          },
          1280: {
            spaceBetween: 30,
            slidesPerView: 3
          }
        },
        on: {
          init: swiper => {
            setTimeout(() => setHeight($(swiper.$el).find('.swiper-slide')))
          },
          resize: swiper => {
            setTimeout(() => {
              $(swiper.$el).find('.swiper-slide').height('auto')
              setHeight($(swiper.$el).find('.swiper-slide'))
            })
          }
        }
      }
  
      serviceSliders.push(new Swiper('.service_s' + i, options))
    })



     // Слайдер Работы

     const worksSliders = [],
     works = document.querySelectorAll('.works .swiper')
 
     works.forEach(function (el, i) {
     el.classList.add('works_s' + i)
 
     let options = {
       loop: true,
       speed: 500,
       watchSlidesProgress: true,
       slideActiveClass: 'active',
       slideVisibleClass: 'visible',
       pagination: {
         el: '.swiper-pagination2',
         type: 'bullets',
         clickable: true,
       },
       navigation: {
         nextEl: '.swiper-button-next2',
         prevEl: '.swiper-button-prev2'
       },
       preloadImages: false,
       lazy: {
         enabled: true,
         checkInView: true,
         loadOnTransitionStart: true,
         loadPrevNext: true
       },
       breakpoints: {
         0: {
           spaceBetween: 20,
           slidesPerView: 2
         },
         480: {
           spaceBetween: 20,
           slidesPerView: 2
         },
         768: {
           spaceBetween: 20,
           slidesPerView: 3
         },
         1023: {
          spaceBetween: 20,
          slidesPerView: 3
        },
         1280: {
           spaceBetween: 30,
           slidesPerView: 4
         }
       },
       on: {
         init: swiper => {
           setTimeout(() => setHeight($(swiper.$el).find('works .swiper-slide')))
         },
         resize: swiper => {
           setTimeout(() => {
             $(swiper.$el).find('.works .swiper-slide').height('auto')
             setHeight($(swiper.$el).find('.works .swiper-slide'))
           })
         }
       }
     }
 
     worksSliders.push(new Swiper('.works_s' + i, options))
   })




    

   window.addEventListener('resize', function () {
    WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
  
    let windowW = window.outerWidth
  
    if (typeof WW !== 'undefined' && WW != windowW) {
  
  
      // Перезапись ширины окна
      WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
  
  
      // Моб. версия
      if (!fakeResize) {
        fakeResize = true
        fakeResize2 = false
  
        document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
      }
  
      if (!fakeResize2) {
        fakeResize2 = true
  
        if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
      } else {
        fakeResize = false
        fakeResize2 = true
      }
    }
  })



})