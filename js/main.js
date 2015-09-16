/*$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
}); */

function findCostumes() {
	console.log("hi");
	var costumeStyle = document.getElementById("costumeTypes").value;
	console.log(costumeStyle);
	var gender = document.querySelector('input[name = "gender"]:checked').value;
	console.log(gender);
}



