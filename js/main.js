// modal functions
$('a.btn').on('click', function(e) {
	e.preventDefault()
	$('.modal').addClass('modal-ativo')
})

$('.modal').on('click', function(modal) {
	if (modal.target == this) {
		$(this).removeClass('modal-ativo')
	}
})

// scroll animations
$(window).on('scroll', () => {
	let windowTop = $(this).scrollTop()
	
	$('.anime').each(function(){
		if( windowTop > $(this).offset().top )
			$(this).addClass('anime-init')		
		else
			$(this).removeClass('anime-init')
	})
})