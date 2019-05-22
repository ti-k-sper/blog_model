var text = document.getElementsByClassName("textArticle");
//console.log(text);
for (var i = 0; i < text.length; i++) {
	//console.log(text[i]);
	text[i].innerHTML = text[i].innerHTML.substring(0, 270);
}
