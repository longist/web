let answer = prompt("Life is full of pain, isn't it?", "YASS");
confirm("Your answer was " + answer + ". Are you sure?");
let txt = document.getElementById("txt").innerHTML;
document.write("<p>I said: \"" + txt + "\" and I was right.</p>");
let ps = document.getElementsByTagName("p");
for (let i = 0; i < ps.length; i++) {
	document.write("<strong>" + ps[i].innerHTML + "</strong>");
	document.write("<br>");
}
let anchors = document.body.getElementsByTagName("a");
document.write("<p>Number of links is " + anchors.length + ".</p>");
document.write("<p>The first one is " + anchors[0].id + ".</p>");
let num=0;
for (let i = 0; i < anchors.length; i++) {
	if(anchors[i].name)
		num++;
}
document.write("<p>Number of anchors is " + num + ".</p>");
document.write("<p>The first one is " + anchors[0].innerHTML + ".</p>");
anchors = document.body.getElementsByTagName("form");
document.write("<p>Number of forms is " + anchors.length + ".</p>");
document.write("<p>The first one is " + anchors[0].name + ".</p>");
anchors = document.body.getElementsByTagName("img");
document.write("<p>Number of images is " + anchors.length + ".</p>");
document.write("<p>The first one is " + anchors[0].id + ".</p>");
document.write("<p>The domain is " + document.domain + ".</p>");
document.write("<p>The referrer-URL is " + document.referrer + ".</p>");
document.write("<p>The title is " + document.title + ".</p>");
document.write("<p>The full URL is " + document.URL + ".</p>");
//button
anchors = document.getElementById("disabledBtn");
document.write("<p>The button's name, type, text and form id: " + anchors.name + " " + anchors.type + " " + anchors.value + " " + anchors.form.id + ".</p>");
//form
anchors = document.forms.nothingInteresting;
document.write("<p>Action: " + anchors.action + ", enctype: " + anchors.enctype + ", method: " + anchors.method + ", name: " + anchors.name + ".</p>");
anchors = anchors.elements;
document.write("<p>Elements number: " + anchors.length + "; values: ");
for (let i = 0; i < anchors.length; i++) {
	document.write(anchors[i].value + ", ");
}
document.write(".</p>");
//image
anchors = document.body.getElementsByTagName("img");
for (let i = 0; i < anchors.length; i++) {
	anchors[i].style = "display: block; margin: 0 auto; border: solid 3px red; width: 150px; height:150px;";
	document.write("<p>Name: " + anchors[i].name + ", alt: " + anchors[i].alt + ".</p>")
}

//table
let table = document.getElementById("someTable");
table.style.border = "3px solid red";
table.style.borderCollapse = "separate";
table.style.borderSpacing = "15px";
table.createCaption().innerHTML = "someTable";
for (let i = 0; i < table.rows.length; i++) {
	for(let j = 0; j < table.rows[0].cells.length; j++) {
		table.rows[i].cells[j].style.padding = "15px";
		table.rows[i].cells[j].style.border = "3px solid red";
	}
}
table.deleteRow(2);
let row = table.insertRow(2);
let cell = row.insertCell(0);
row.insertCell(1).innerHTML = "!";
cell.innerHTML = "!";
cell.colSpan = "2";

row.style.height = "60px";
row.style.textAlign = "left";
row.style.verticalAlign = "top";
cell.style.textAlign = "right";
cell.style.verticalAlign = "bottom";

document.write("Border: " + table.style.border);

document.body.bgColor = "black";
document.body.style.color = "white";
document.getElementById("txt").innerHTML = "Here comes the end of the world? No I didn't say that."
function changeText() {
	document.getElementById("btn").value = "No you haven't.";
	document.body.bgColor = document.body.bgColor == "white" ? "black" : "white";
	document.body.style.color = document.body.style.color == "black" ? "white" : "black";
	let img = document.getElementById("img");
	img.src = document.body.bgColor == "white" ? "too_stylish.png" : "stylish.png";
}
function disable() {
	document.getElementById("disabledBtn").value = "How dare you...";
	document.getElementById("disabledBtn").disabled = true;
	document.forms.nothingInteresting.submit();
	document.forms.nothingInteresting.reset();
}

//event

document.oncontextmenu = function (event) {
	alert("Click, right button, target: " + event.target.tagName + ", page: " + event.pageX + ", " + event.pageY + "; client: " + event.clientX + ", " + event.clientY);
}

document.onclick = function handle (event) {
	let message = "";
	message += (event.which == 1 ? "Click, left button" : "Click, middle button");
	alert(message + ", target: " + event.target.tagName + ", page: " + event.pageX + ", " + event.pageY + "; client: " + event.clientX + ", " + event.clientY);
}

document.onkeyup = function handle (event) {
	alert("Keycode: " + event.key + ", type: " + event.type);
}