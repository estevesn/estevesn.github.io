$('.nav-item').on('mouseover', function(){
	$(this).addClass('selected');
});

$('.nav-item').on('mouseout', function(){
	$(this).removeClass('selected');
});