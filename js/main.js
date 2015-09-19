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
	console.log(costumeStyle == "superhero")
	if(costumeStyle == "superhero") {
		if(true) {
			alert("superhero male");

		} else if (costumeGender  == "female") {
			alert("superhero female");
		} else if (costumeGender  == "other") {
			alert("superhero other");
		}
	}
}
















