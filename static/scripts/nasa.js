$(window).on('load', function () {
    const randomDate = function () {
	const year = Math.floor(Math.random() * (2020 - 2000 + 1) + 2000);
	let month = Math.floor(Math.random() * (12) + 1);
	let day = Math.floor(Math.random() * (30) +1);
	if (day < 10) {
	    day = '0' + day.toString();
	}
	if (month < 10) {
	    month = '0' + month.toString();
	}
	return year.toString() + '-' + month.toString() + '-' + day.toString();
    };
    $('.request').on('click', function () {
	const date = randomDate();
	console.log(date);
	$('body img').attr('src', '../static/images/wait.gif');
	$.ajax({
	    url: 'https://api.nasa.gov/planetary/apod',
	    data: {'api_key': 'DEMO_KEY',
		   'date': date},
	    success: function (resp) {
		console.log(resp);
		if (resp.media_type == 'video') {
			$('body img').css('display', 'none');
			$('body iframe').css('display', 'block');
		    $('body iframe').attr('src', resp.url);
		} else {
			$('body img').css('display', 'block');
			$('body iframe').css('display', 'none');
		}
		$('body img').attr('src', resp.url);
		$('body h1').text(resp.title + ' ' + resp.date);
		$('body h2').text(resp.explanation);
	    },
	    error: function (resp) {

			console.log(resp);
	    }
	});
    });
});
