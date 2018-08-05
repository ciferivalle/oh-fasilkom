// Set the date we're counting down to
    var countDownDate = new Date("Nov 3, 2018 08:30:00").getTime();

		// Update the count down every 1 second
		var x = setInterval(function() {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		// document.getElementById("timeline").innerHTML = days + "d " + hours + "h " +
		// minutes + "m " + seconds + "s ";

    day_str = days.toString();
    day = day_str.split("");
    if (day.length == 2) {
      document.getElementById("kiri").innerHTML = day[0];
      document.getElementById("kanan").innerHTML = day[1];
    } else {
      document.getElementById("kiri").innerHTML = "0";
      document.getElementById("kanan").innerHTML = day[1];
    }
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("timeline").innerHTML = "It's the day!";
		}
	}, 1000);
	$(window).scroll(function() {
		$(".slideanim").each(function() {
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass("slide");
			}
		});
	});
