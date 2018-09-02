/*global variables*/

var doc = document;

/*global variables*/

document.getElementById('proceed').onclick = main;


function main() {

	var inputs = document.getElementsByTagName('input'),
		input_one_val = inputs[0].value,
		input_two_val = inputs[1].value,
		buttonOk = doc.getElementsByClassName("button-ok")[0],
		wrapper = doc.getElementsByClassName("modal-wrapper")[0],
		content = doc.getElementsByClassName("modal-content")[0],
		header = doc.getElementsByTagName('h2')[0];


	if ((input_one_val == "") || (input_two_val == "")) { //if inputs are empty
		header.innerText = "Enter the value!";
	} else {
		if (input_one_val == input_two_val) { //compare the values
			header.innerText = "These Strings are the same";
		} else {
			header.innerText = "These Strings are different";
		}
	}

	show_modal();
	buttonOk.onclick = hide_modal;

	function show_modal() {

		if (wrapper.classList.contains("hidden")) {
			wrapper.classList.toggle("hidden");
		}

		content.classList.add("zoomInLeft");
	}

	function hide_modal() {
		content.classList.add("zoomOutRight");
		content.classList.remove("zoomInLeft");
		content.addEventListener("animationend", deleteModalFromBom);
	}

	function deleteModalFromBom() {
		content.removeEventListener("animationend", deleteModalFromBom);
		wrapper.classList.toggle("hidden");
		content.classList.remove("zoomOutRight");
	}
}