 var elem = document.querySelector('.sidenav');

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();

    start();
    jump();

	function start () {
		var devep = $("#developer");
		devep.animate({
			letterSpacing:"+=2px"
		}, "slow");
		devep.animate({
			letterSpacing:"+=1px"
		}, "slow");
		devep.animate({
			letterSpacing:"-=2px"
		}, "slow");
		devep.animate({
			letterSpacing:"-=1px"
		}, "slow", start);
	}
	function jump () {
		var astronauta = $("#human");
		astronauta.animate({
			backgroundPositionY:"+=300px"
		}, 3000);
		astronauta.animate({
			backgroundPositionY:"-=150px"
		}, 2000);
		astronauta.animate({
			backgroundPositionY:"+=150px"
		}, 3000);
		astronauta.animate({
			backgroundPositionY:"-=350px"
		}, 2000, jump);
		astronauta.animate({
			backgroundPositionY:"+=350px"
		}, 2000);
		astronauta.animate({
			backgroundPositionY:"-=300px"
		}, 4000, jump);
		
	}
  });