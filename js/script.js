$(window).scroll(function(){
	var widthScroll = $(this).scrollTop();

	$('#sec_1_content').css({
      'transform' : 'translate(0px, '+ widthScroll /5 +'%)'
    });
});


$(document).ready(function(){
	$('.info-job').hide();

	$('.job1').click(function(){
		$('.info-job1').show().addClass('animated bounceIn');
	});
	$('.fechar').click(function(){
		$('.info-job1').fadeOut("slow");
	});

	$('.job2').click(function(){
		$('.info-job2').show().addClass('animated bounceIn');
	});
	$('.fechar').click(function(){
		$('.info-job2').fadeOut("slow");
	});

	$('.job3').click(function(){
		$('.info-job3').show().addClass('animated bounceIn');
	});
	$('.fechar').click(function(){
		$('.info-job3').fadeOut("slow");
	});

	$('.job4').click(function(){
		$('.info-job4').show().addClass('animated bounceIn');
	});
	$('.fechar').click(function(){
		$('.info-job4').fadeOut("slow");
	});

	$('.job5').click(function(){
		$('.info-job5').show().addClass('animated bounceIn');
	});
	$('.fechar').click(function(){
		$('.info-job5').fadeOut("slow");
	});

	$('.job6').click(function(){
		$('.info-job6').show().addClass('animated bounceIn');
	});
	$('.fechar').click(function(){
		$('.info-job6').fadeOut("slow");
	});

	$('.job7').click(function(){
		$('.info-job7').show().addClass('animated bounceIn');
	});
	$('.fechar').click(function(){
		$('.info-job7').fadeOut("slow");
	});

	$('.job8').click(function(){
		$('.info-job8').show().addClass('animated bounceIn');
	});
	$('.fechar').click(function(){
		$('.info-job8').fadeOut("slow");
	});
});