var name = "User";
var smyle = document.getElementsByClassName('smyle');

document.getElementsByClassName('chat-smyle')[0].onclick = function () {
	smyle[0].style.display = "block";
}

document.getElementsByClassName('chat-smyles')[0].onclick = function () {
	smyle[0].style.display = "none";
}

document.onclick = function (event) {
	var smyles = document.getElementsByClassName('smyle');
	var target = event.target;
	if(smyles[0].style.display == "block" && target.className !='smyle' && target.className !='chat-smyle'){
		smyles[0].style.display = "none";
	}
}

function SendMessage() {
	var messagearea = document.getElementById('chat-message');
	var messagetext = document.getElementById('chat-text');
	messagearea.value += name + ": " + messagetext.value +"\n";
	messagetext.value = "";
}