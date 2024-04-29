
function myFunction() {
	chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
		var url = tabs[0].url;
		console.log(url);
	});

};

function hidePages() {
	var i, x, tablinks;
	x = document.getElementsByClassName("pages");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	};
	tablinks = document.getElementsByClassName("tab-link");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("w3-amber", "");
	};
};

document.getElementById("changeToPg1").addEventListener("click", changeToPg1);

function changeToPg1() {
	hidePages();
	document.getElementById("numeros").style.display = "block";
	document.getElementById("changeToPg1").className += " w3-amber";
};

document.getElementById("changeToPg2").addEventListener("click", changeToPg2);

function changeToPg2() {
	hidePages();
	document.getElementById("geral").style.display = "block";
	document.getElementById("changeToPg2").className += " w3-amber";
};

document.getElementById("changeToPg3").addEventListener("click", changeToPg3);

function changeToPg3() {
	hidePages();
	document.getElementById("metricas").style.display = "block";
	document.getElementById("changeToPg3").className += " w3-amber";
};

document.getElementById("changeToPg4").addEventListener("click", changeToPg4);

function changeToPg4() {
	hidePages();
	document.getElementById("calculadora").style.display = "block";
	document.getElementById("changeToPg4").className += " w3-amber";
};
