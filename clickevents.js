
// myElement.onclick = function() { //Great way of using JavaScript to add event handling, cross browser
//     alert('testing');
// };

// var sidebar = document.getElementById('sidebar');
// var myNewElement = document.createElement('li');

// myElement2.addEventListener('click', myFunction, false); //Very good for adding multipul events but not cross browser.

var HTMLbutton = document.getElementById('button2');
var HTMLlink = document.getElementById('button');
var Email = document.getElementById('email-input');

window.onload = function() {
     //prepare anything needed
    prepareEventHandlers();
}

function prepareEventHandlers() {
    HTMLbutton.onclick = function() {
        alert('testing');
    };
    Email.onfocus = function() { //value is used for forms
    	if (Email.value == 'Your Email')
    		Email.value = '';
    };
    Email.onblur = function() {
    	if (Email.value == '')
    		Email.value = 'Your Email';
    };       
}
//Time Outs, intervals and clearing
function justAMessage() {
	alert('Hello This is an alert');
}
setTimeout(justAMessage, 5000); //Can also use setInterval which keeps looping over it every 5 seconds
// clearInterval(justAMessage); This code can clear the interval whenever you want based on a click or anything really
// also clearTimeout
