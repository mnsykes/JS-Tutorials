// Week 3 OSB

// Declare variables for selectors
var modal = document.getElementById("orderModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("closeModal")[0];

// Modal opens on button click
btn.onclick = function () {
	modal.style.display = "block";
};

// Modal closes on (x) click
span.onclick = function () {
	modal.style.display = "none";
};

// Modal closes if clicked outside of it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}; // end modal function

// Opens payment info on radio button click
function creditOpen() {
	document.getElementById("hide").style.display = "block";
} // end creditOpen function

// End Week 3 OSB
