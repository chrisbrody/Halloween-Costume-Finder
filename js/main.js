/*$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
}); */
function findCostumes() {
	
	var costumeStyle = document.getElementById("costumeTypes").value;
	var gender = document.querySelector('input[name = "gender"]:checked').value;
	
			
	localStorageData();

	window.location.href = "results.html"
	
}

function localStorageData() {
	var costumeStyle = document.getElementById("costumeTypes").value;
	
	var gender = document.querySelector('input[name = "gender"]:checked').value;
	
	// Store
	localStorage.setItem("costumeTypes", costumeStyle);
	localStorage.setItem("genderTypes", gender);
}
		
function showResults() {
	var costumeStyle = localStorage.costumeTypes;
	var costumeGender = localStorage.genderTypes;
	


//scary//
if(costumeStyle == "scary") {
		if(costumeGender == "male") {
			document.getElementById("mscary").className =
   document.getElementById("mscary").className.replace("hidden", "");
   console.log(document.getElementsByClassName("mscary").className);


		} else if (costumeGender  == "female") {	
			document.getElementById("fscary").className =
   document.getElementById("fscary").className.replace("hidden", "");
   console.log(document.getElementsByClassName("fscary").className);
		}
	}
//FUNNY//
if(costumeStyle == "funny") {
		if(costumeGender == "male") {
			document.getElementById("mfunny").className =
   document.getElementById("mfunny").className.replace("hidden", "");
   console.log(document.getElementsByClassName("mfunny").className);


		} else if (costumeGender  == "female") {
			document.getElementById("ffunny").className =
   document.getElementById("ffunny").className.replace("hidden", "");
   console.log(document.getElementsByClassName("mfunny").className);
		}
	}

//ANIMALS//

if(costumeStyle == "animals") {
		if(costumeGender == "male") {
			document.getElementById("manimal").className =
   document.getElementById("manimal").className.replace("hidden", "");
   console.log(document.getElementsByClassName("manimal").className);


		} else if (costumeGender  == "female") {
			document.getElementById("fanimal").className =
   document.getElementById("fanimal").className.replace("hidden", "");
   console.log(document.getElementsByClassName("fanimal").className);
		}
	}

	//SEXY//

	if(costumeStyle == "sexy") {
		if(costumeGender == "male") {
			document.getElementById("msexy").className =
   document.getElementById("msexy").className.replace("hidden", "");
   console.log(document.getElementsByClassName("msexy").className);


		} else if (costumeGender  == "female") {
		document.getElementById("fsexy").className =
   document.getElementById("fsexy").className.replace("hidden", "");
   console.log(document.getElementsByClassName("fsexy").className);
		}
	}

	//MOVIES//

	if(costumeStyle == "movie") {
		if(costumeGender == "male") {
			document.getElementById("mmovie").className =
   document.getElementById("mmovie").className.replace("hidden", "");
   console.log(document.getElementsByClassName("mmovie").className);


		} else if (costumeGender  == "female") {
		document.getElementById("fmovie").className =
   document.getElementById("fmovie").className.replace("hidden", "");
   console.log(document.getElementsByClassName("fmovie").className);
		}
	}
//MEDIVAL//

if(costumeStyle == "medival") {
		if(costumeGender == "male") {
			document.getElementById("mmedival").className =
   document.getElementById("mmedival").className.replace("hidden", "");
   console.log(document.getElementsByClassName("mmedival").className);


		} else if (costumeGender  == "female") {
		document.getElementById("fmedival").className =
   document.getElementById("fmedival").className.replace("hidden", "");
   console.log(document.getElementsByClassName("fmedival").className);
		}
	}

//SUPERHERO//
	if(costumeStyle == "superhero") {
		if(costumeGender == "male") {
			document.getElementById("msuperhero").className =
   document.getElementById("msuperhero").className.replace("hidden", "");
   console.log(document.getElementsByClassName("msuperhero").className);


		} else if (costumeGender  == "female") {
		document.getElementById("fsuperhero").className =
   document.getElementById("fsuperhero").className.replace("hidden", "");
   console.log(document.getElementsByClassName("fsuperhero").className);
		}
	}
}
















