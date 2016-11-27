$(document).ready(function(){

	$('#main-tab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	// Sliders
	$('input[type="range"]').change( function(){
		console.log($(this).siblings('input[type="text"]'));
		$(this).siblings('input[type="text"]').val( $(this).val() );
	});

});