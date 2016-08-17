$(document).ready(function(){

	$('#main-tab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

});