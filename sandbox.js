var headLine = document.getElementById('head-line');

function deeperFunction() {
		//loop
		for (var i = 0; i < possibleHeadLines.length; i++) {
	}
}

function simpleFunction() {
	deeperFunction();
}

function changeHeadLine() {
	var possibleHeadLines = ['First Head Line', 'Second HeadLine', 'Third Headline', 'Big Title'];
	var messageIndex = 0;
}
function changeMessage() {
	simpleFunction();
}

window.onload = funciton() {
	setInterval(changeMessage, 4000);
};