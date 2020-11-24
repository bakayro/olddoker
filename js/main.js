$(document).ready(function() {

	$('body').on('click', '.menu-li', function(){
		$(".menu-li").removeClass("active");
		$(this).addClass("active");
	});

	$('body').click(function(e){
		if ($(e.target).closest('.select-ul, .select-a').length === 0){
			$('.select-ul').stop(true,true).slideUp(300);
		}
	});

	$('body').on('click', '.select-a', function(e){
		$(".select-ul").stop(true,true).slideUp(200);
		$(this).siblings(".select-ul").stop(true,true).slideToggle(200);
		e.preventDefault();
	});

	$('body').on('click', '.share-btn', function(e){
		$(".share-btn.active").not(this).removeClass("active");
		$(this).toggleClass("active");
		e.preventDefault();
	});


	/* popup */
	if ($.fn.magnificPopup) {
		$('.select-link').magnificPopup({
			items: {
					src: $('.popup'),
					type: 'inline'
				}
		});
	}

	$('.select').selectbox();

	$('.owl-carousel').owlCarousel({
		items:1,
		autoplay:true,
		autoplayTimeout:4000,
		smartSpeed:650,
		autoplayHoverPause:true,
		lazyLoad:true,
		loop:true
	});

	if ($.fn.packery){
		var pkry = $('.tiles-grid').packery({
			itemSelector: '.itemm',
			gutter: 0
		});
		setTimeout(function(){
			pkry.packery();
		}, 100);

		$('.tiles-grid').addClass('active');
	}

	// кнопки с сортировкой
	$('body').on('click', '.sort-btn, .sort-btn2, .sbHolder', function(e){
			e.preventDefault();
			$(this).toggleClass('active');
	});

	// при нажании на крестик скрывает лот
	$('body').on('click', '.btn-edit', function(){
			$(".wrap-block").slideUp(300);
			$(".tr-open").removeClass('active').show();
	});

	$('body').on('click', '.tr-open', function(e){
		var tr = $(this);
		$(".tr-open").show();
		if (!$(e.target).is('button') && !$(e.target).is('a') && !$(e.target).is('label') && !$(e.target).is('input')){
			tr.siblings().removeClass('active');
			tr.toggleClass('active');
			$(".detail .wrap-block").stop(true,true).slideUp(300);
			if (tr.hasClass('active')){
				tr.next(".detail").find('.wrap-block').stop(true,true).slideDown("300");
				setTimeout(function(){
					tr.hide();
				},100);
			} else {
				tr.show();
				$(".detail .wrap-block").stop(true,true).slideUp(300);
			}
		}
	});

	/*--- Табы на странице Партнеры ---*/
	$('body').on('click', '.tab-links-li', function(e){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");

		tab = $('a', this).attr('href');
		$(tab).siblings().hide();
		$(tab).show();

		e.preventDefault();
	});

		/*--- Табы на в личном кабинете ---*/
	$('body').on('click', '.tabs-li', function(e){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");

		tab = $('a', this).attr('href');
		$(tab).siblings().hide();
		$(tab).show();

		e.preventDefault();
	});

	/*--- Пагинация на стр. Новости ---*/
	$('body').on('click', '.pagination a', function(e){
		$('.pagination a').removeClass("active");
		$(this).addClass("active");

		e.preventDefault();
	});

	/* появление красных всплывашек при некорректном вводе в input*/
	$('body').on('click', '.form-group .inp', function(e){
		$('.uncorrect-right, .uncorrect-left').stop(true,true).fadeOut("500");
		$(this).siblings('.uncorrect-right, .uncorrect-left').stop(true,true).fadeIn("500");

		e.preventDefault();
	});

	$('body').on('mouseout', '.form-group .inp', function(e){
		$('.uncorrect-right, .uncorrect-left').fadeOut("500");
		$(this).siblings('.uncorrect-right, .uncorrect-left').stop(true,true).fadeOut("500");

		e.preventDefault();
	});

	$('[title]').hover(function(e){
		$('body').append($('<div class="title-block">'+$(this).attr('title')+'</div>'));
		$(this).attr('data-title', $(this).attr('title'));
		$(this).removeAttr('title');
		$('.title-block').css({
			left: e.pageX+'px',
			top: (e.pageY+10)+'px'
		});
	}, function(){
		$(this).attr('title', $(this).attr('data-title'));
		$('.title-block').remove();
	});

	/* появление всплывашки при нажании купить */
	$('body').on('click', '.detail .tcell .btn-buy', function(){
		$('.popup-buy').fadeIn("200");
	});
	$('body').on('click', '.detail .tcell .btn-garant', function(){
		$('.popup-buygarant').fadeIn("200");
	});
	/* закрытие всплывашки*/
	$('body').on('click', '.btn-close', function(){
		$('.popup-buy, .popup-buygarant, .popup-message-2, .popup-newgame').fadeOut("200");
	});


	/* появление окна для написания отзыва */
	$('body').on('click', '.btn-recall', function(){
		$('.popup-myrecall').fadeIn("200");
	});
	$('body').on('click', '.btn-close', function(){
		$('.popup-myrecall').fadeOut("200");
	});


	/* появление уведомления */
	$('body').on('click', '.mail-a', function(){
		$('.popup-message').fadeIn("200");
	});
	$('body').on('click', function(e){
		if ($(e.target).closest('.popup-message, .mail-a').length === 0){
			$('.popup-message').stop(true,true).fadeOut(300);
		}
	});


	$('body').on('click', '.add-newgame', function(){
		$('.popup-newgame').fadeIn("200");
	});
	$('body').on('click', '.popup-newgame', function(e){
		if ($(e.target).closest('.popup-newgame, .add-newgame').length === 0){
			$('.popup-newgame').stop(true,true).fadeOut(300);
		}
	});


	$('body').on('click', '.popup-buy, .popup-buygarant, .popup-message-2', function(e){
		if ($(e.target).closest('.popup-buy .content, .popup-buygarant .content, .popup-message-2 .content').length === 0){
			$('.popup-buy, .popup-buygarant, .popup-message-2').stop(true,true).fadeOut(300);
		}
	});

	$('body').on('click', '.main-header .btn-orange', function(){
		$('.popup-message-2').fadeIn("200");
	});


	$('body').on('click', '.close', function(e){
		e.preventDefault();
		var selector = $(this).data('close');
		if (selector){
			$(selector).val('');
		} else {
			$(this).siblings(".inp").val('');
		}
	});

	$('body').on('click', '[data-toggle-block]', function(e){
		e.preventDefault();
		e.stopPropagation();
		$($(this).data('toggle-block')).slideDown(200);
		$($(this).data('hide-block')).slideUp(200);
		$(this).addClass('active');

		$("#countdown").countdown(new Date((new Date()).getTime() + 1000*300), function (event) {
			 var time = {
				days: event.strftime('%D'),
				hours: event.strftime('%H'),
				minutes: event.strftime('%M'),
				seconds: event.strftime('%S')
			};
			$("#countdown").html('<i class="icon icon-time"></i>'+time.minutes+':'+time.seconds+'min');
			});
		})


	$('.countdown').each(function(i, counter){
		var start = $(this).data('start') || new Date((new Date()).getTime() + 1000*300);
			$(counter).countdown(start, function (event) {
				 var time = {
					days: event.strftime('%D'),
					hours: event.strftime('%H'),
					minutes: event.strftime('%M'),
					seconds: event.strftime('%S')
				 };
				$(counter).html('<i class="icon icon-time"></i>'+time.hours+':'+time.minutes+':'+time.seconds+'sec');
		 });
	});


	var directionSlider = document.getElementById('slider-direction');

	if (directionSlider){
			noUiSlider.create(directionSlider, {
				start: [ -20 ],
				behaviour: 'drag',
				connect: 'upper',
				tooltips: [ wNumb({
					decimals: 0,
					postfix: '%'
				}) ],
				range: {
					'min':  -50,
					'max':  0
				}
			});

		directionSlider.noUiSlider.on('slide', function(val){
			val = parseInt(val[0]);
			$("#slide-input").val(val+'%');
		});
		$("#slide-input").on('keyup', function(){
			directionSlider.noUiSlider.set(parseInt($(this).val()));
		});
	}
});