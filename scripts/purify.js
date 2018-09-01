window.onload = function() {
	var body = doc.getElementsByTagName('body'),
		divarray = doc.getElementsByTagName('div'),
		divcounter = 0;

	for (let i = divarray.length - 1; i >= 0; i--) {
		if (divarray[i].hasAttribute('style')) {
			divarray[i].remove();
			++divcounter;
			if (divcounter == 2) break;
		}
	}
};