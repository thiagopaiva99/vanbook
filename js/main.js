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

$(window).on('scroll', () => {
	let windowTop = $(this).scrollTop()
	console.log(windowTop)
})