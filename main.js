var mainSection = document.getElementById("mainSection");
var aboutSection = document.getElementById("aboutSection");
var contactSection = document.getElementById("contactSection");


function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.body.style.backgroundColor = "white";
}

//Stuff for tab 1
function goTab1() {

	mainSection.className = "active";
	aboutSection.className = "inactive";
	contactSection.className = "inactive";

}

//Stuff for tab 2
function goTab2() {

	mainSection.className = "inactive";
	aboutSection.className = "active";
	contactSection.className = "inactive";

}

//Stuff for tab 3
function goTab3() {

	mainSection.className = "inactive";
	aboutSection.className = "inactive";
	contactSection.className = "active";

}