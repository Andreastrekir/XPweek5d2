//Exercise 1
//Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
var parraf = document.getElementById("parraf3");
parraf.remove();

//Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
document.getElementById("h2").addEventListener('click', changeColor);
function changeColor(){
	this.style.backgroundColor = "red";
	return false;
}

//Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
document.getElementById("h1").innerHTML =
Math.floor(Math.random() * 101);

//Add an event listener which will hide the h3 when it’s clicked on (use the display property).

document.getElementById("h3").style.display = "none";

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

button.addEventListener('click', () =>{
	article.style.fontStyle = 'bold'}









































