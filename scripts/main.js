/*global variables*/

var doc = document;

/*global variables*/


document.getElementById('proceed').onclick = main;

function main() {
	var inputs = document.getElementsByTagName('input'),
		input_one_val = inputs[0].value,
		input_two_val = inputs[1].value;

	if ((input_one_val == "") || (input_two_val == "")) { //if inputs are empty
		alert("Enter the value!");
	} else {
		if (input_one_val == input_two_val) { //compare the values
			alert("These Strings are the same");
		} else {
			alert("These Strings are different");
		}
	}
}