//1
let line = "I am so damn tired";
document.write(line, "<br>");
document.write("Words: ", line.split(" ").length, "<br>",
	"Letters: ", (line.length - line.split(" ").length + 1), "<br>");
document.write("URL: ", document.location.href, "</br>");
document.write("Protocol: ", document.location.protocol, "</br>");
let set = document.location.pathname.split("/");
document.write("Name: ", set[set.length-1].split(".")[0], "</br>");
document.write("Type: ", set[set.length-1].split(".")[1], "</br>");
let params = window.location.search.replace("?", "").replace("&", "=").split("=");
let obj = {};
for (let i = 0; i < params.length-1; i+=2) {
	obj[params[i]] = params[i+1];
}
document.write("Params: <br>");
for (let key in obj) {
	document.write(key, ": ", obj[key], "</br>");
}

//2
let img = document.createElement("img");
img.id = "anch0";
img.src = "images/kitty1.png";
img.width = "600";
img.height = "300";
let anch = document.createElement("a");
anch.href = "#anch0";
anch.innerHTML = "two cute kitties";

document.body.appendChild(img);
document.write("<br>");
document.body.appendChild(anch);
document.write("<br>");

img = document.createElement("img");
img.id = "anch1";
img.src = "images/kitty2.jpg";
img.width = "300";
img.height = "200";
anch = document.createElement("a");
anch.href = "#anch1";
anch.innerHTML = "a cute kitty";

document.body.appendChild(img);
document.write("<br>");
document.body.appendChild(anch);
document.write("<br>");

let link = document.createElement("a");
link.href = "http://google.com/";
link.innerHTML = "google";
link.target = "_blank";
document.body.appendChild(link);
document.write("<br>");

link = document.createElement("a");
link.href = "https://www.yandex.ru/";
link.innerHTML = "Yandex";
link.target = "_blank";
document.body.appendChild(link);
document.write("<br>");

link = document.createElement("a");
link.href = "https://www.vk.com/";
link.innerHTML = "VK";
link.target = "_blank";
document.body.appendChild(link);
document.write("<br>");

let count = 0;
let links = document.getElementsByTagName("a");
let firstAnch = -1;
for (i = 0; i < links.length; i++) {
	if (links[i].href.includes("#")) {
		count++;
		if(firstAnch < 0) {
			firstAnch = i;
		}
	}
}
document.write("Anchors: ", count, "</br>");
document.write("Links: ", links.length, "</br>");
document.write("First anchor: ", links[firstAnch].innerHTML, "</br>");

images = document.getElementsByTagName("img");
document.write("Images: ", images.length, "</br>");
document.write("Width: ", images[0].width, "</br>");
let maxWidth = 0;
for (i = 0; i < images.length; i++) {
	if (maxWidth < images[i].width) {
		maxWidth = images[i].width;
	}
}
document.write("Max width: ", maxWidth, "</br>");
let imagesHeightTotal = 0;
for (i = 0; i < images.length; i++) {
	imagesHeightTotal += images[i].height;
}
document.write("Total height = ", imagesHeightTotal, "</br>");

//3
let form, btns = new Array(4);
for (let i = 1; i < 11; i++) {
	form = document.createElement("form");
	form.id = "form" + i;
	form.name = form.id;
	for (let j = 0; j < 2 + i%3; j++) {
		form.appendChild(document.createElement("input"));
		form.lastElementChild.type = (j%3 == 0 ? "text" : (j%3 == 1 ? "password" : "submit"));
		if (j%3 == 2) {
			form.lastElementChild.className = "submit"
		};
	}
	form.appendChild(document.createElement("br"));
	for(let j = 0; j < 4; j++) {
		btns[j] = document.createElement("button");
		btns[j].form = "form" + i;
		form.appendChild(btns[j]);
	}
	btns[0].type = "button";
	btns[1].type = "button";
	btns[2].type = "reset";
	btns[3].type = "button";
	btns[0].className = "show";
	btns[1].className = "id";
	btns[2].className = "reset";
	btns[3].className = "num";
	btns[0].innerHTML = "Show me this text pls";
	btns[1].innerHTML = "Show form id";
	btns[2].innerHTML = "Reset";
	btns[3].innerHTML = "Show number of fields";
	btns[0].onclick = function(){
		alert(this.innerHTML);
	};
	btns[1].onclick = function(){
		alert("form" + i);
	};
	btns[2].onclick = function(){
		this.form.reset();
	};
	btns[3].onclick = function(){
		alert(this.form.childNodes.length);
	};
	document.body.appendChild(form);
}

document.write("Even forms: ");
for (i = 0; i < document.forms.length; i++) {
	if ((i % 2) != 0) {
		document.write(document.forms[i].name, " ");
	}
}

//4
links = [];
document.write("<br>");
for (let i = 0; i < 10; i++) {
	link = document.createElement("a");
	link.href = "https://somedomain.lul/index" + i + ".html";
	link.innerHTML = i*i%15 + "th link";
	document.body.appendChild(link);
	document.write("<br>");
	links.push(link);
}
createTable();

function createTable() {
	let table = document.createElement("table");
  	table.style.border = "3px solid red";
	let set = new Set();
	let arr = [], count = 0;
	for (i = 0; i < links.length; i++) {
		set.add(links[i].innerHTML);
	}
	for (let item of set) {
		let tr = table.insertRow(item.number);
		let td = tr.insertCell(0);
		td.innerHTML = String(item);
		arr.length = 0;
		count = 0;
		for (i = 0; i < links.length; i++) {
			if (links[i].innerHTML == item) {
				count++;
				arr.push(links[i].href);
			}
		}
		td = tr.insertCell(1);
		td.innerHTML = count;
		td = tr.insertCell(2);
		td.innerHTML = arr;
	}
	document.body.appendChild(table);
}
