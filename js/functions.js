document.addEventListener("DOMContentLoaded", function () {
	// Есть ли поддержка тач событий или это apple устройство
	if (!is_touch_device() || !/(Mac|iPhone|iPod|MacIntel|iPad)/i.test(navigator.platform)) document.documentElement.classList.add('custom_scroll')


	// Ленивая загрузка
	const boxes = document.querySelectorAll('.lazyload')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio >= 0.2 && !entry.target.classList.contains('loaded')) {
				entry.target.src = entry.target.getAttribute('data-src')
				entry.target.classList.add('loaded')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))


	// Установка ширины стандартного скроллбара
	document.documentElement.style.setProperty('--scroll_width', widthScroll() + 'px')


	// Моб. версия
	fakeResize = false
	fakeResize2 = true

	if (document.body.clientWidth < 375) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
	}
	
	if (is_touch_device()) {
		// Закрытие моб. меню свайпом справо на лево
		let ts

		$('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX })

		$('body').on('touchend', (e) => {
			let te = e.originalEvent.changedTouches[0].clientX

			if ($('body').hasClass('menu_open') && ts > te + 50) {
				// Свайп справо на лево
				$('header .mob_menu_btn').removeClass('active')
				$('body').removeClass('menu_open')
				$('header .menu').removeClass('show')
				$('.overlay').fadeOut(300)
			} else if (ts < te - 50) {
				// Свайп слева на право
			}
		})
	}	
})






// Вспомогательные функции
const setHeight = className => {
	let maxheight = 0

	className.each(function () {
		let elHeight = $(this).outerHeight()

		if (elHeight > maxheight) maxheight = elHeight
	})

	className.outerHeight(maxheight)
}


const is_touch_device = () => !!('ontouchstart' in window)


const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}