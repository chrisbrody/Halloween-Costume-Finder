/*$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
}); */
function findCostumes() {
	
	var costumeStyle = document.getElementById("costumeTypes").value;
	var gender = document.querySelector('input[name = "gender"]:checked').value;
	
			
	localStorageData();
			
	if(costumeStyle == "scary") {
		if(gender == "male") {
			alert("scary male");

		} else if (gender =="female") {
			alert("scary female");
		} else if (gender == "other") {
			alert("scary other");
		}
	}
}

function localStorageData() {
	var costumeStyle = document.getElementById("costumeTypes").value;
	
	var gender = document.querySelector('input[name = "gender"]:checked').value;
	
	// Store
	localStorage.setItem("costumeTypes", costumeStyle);
	localStorage.setItem("genderTypes", gender);
}
		

