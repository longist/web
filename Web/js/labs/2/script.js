let tableStyle = document.getElementById("tableStyle");
let tableBorder = document.createElement("div");
let inputBorder = document.createElement("input");
inputBorder.type = "text";
inputBorder.maxLength = 3;
inputBorder.size = 20;
let selectBorder = document.createElement("select");
let borderBtn = document.createElement("button");

let borderStyle = document.createElement("option");
let set = new Set;
set.add("none");
set.add("dotted");
set.add("dashed");
set.add("solid");
set.add("double");
set.add("groove");
set.add("ridge");
set.add("inset");
set.add("outset");
for (let item of set) {
	borderStyle = document.createElement("option");
	borderStyle.value = String(item);
	borderStyle.innerHTML = String(item);
	selectBorder.appendChild(borderStyle);
}

borderBtn.innerHTML = "Apply 0px none";
inputBorder.oninput = function() {
	borderBtn.innerHTML = "Apply " + (inputBorder.value == "" ? 0 : inputBorder.value) + "px " + selectBorder.value;
};
selectBorder.oninput = function() {
	borderBtn.innerHTML = "Apply " + (inputBorder.value == "" ? 0 : inputBorder.value) + "px " + selectBorder.value;
};
borderBtn.onclick = function() {
	createTable.tableBorder(inputBorder.value, selectBorder.options[selectBorder.selectedIndex].value);
};

tableBorder.appendChild(inputBorder);
tableBorder.appendChild(selectBorder);
tableBorder.appendChild(borderBtn);
tableStyle.appendChild(tableBorder);

let tableCaption = document.createElement("div");
let inputCaption = document.createElement("input");
let captionBtn = document.createElement("button");
captionBtn.innerHTML = "Add caption";
captionBtn.onclick = function() {
	createTable.tableCaption(inputCaption.value);
};

tableCaption.appendChild(inputCaption);
tableCaption.appendChild(captionBtn);
tableStyle.appendChild(tableCaption);

let deleteTableRow = document.createElement("div");
let inputDeleteRow = document.createElement("input");
let deleteRowBtn = document.createElement("button");
deleteRowBtn.innerHTML = "Delete row";
deleteRowBtn.onclick = function() {
	createTable.deleteRow(inputDeleteRow.value);
};

deleteTableRow.appendChild(inputDeleteRow);
deleteTableRow.appendChild(deleteRowBtn);
tableStyle.appendChild(deleteTableRow);

let rand = document.createElement("div");
let randomBtn = document.createElement("button");
randomBtn.innerHTML = "Random";
randomBtn.onclick = function() {
	cells = document.getElementsByTagName("td");
	index = Math.floor(Math.random() * cells.length);
	cells[index].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	cells[index].style.color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	let font = Math.floor(Math.random() * 13 + 15);
	if (font > 25) {
		cells[index].innerHTML = null;
		let form = document.createElement("form")
  		let textArea = document.createElement("textarea");
  		let button = document.createElement("button");
  		button.innerHTML = "Save";
  		button.type = "button";
  		button.onclick = function() {
			form.parentNode.innerHTML = textArea.value;
  		};
  		form.appendChild(textArea);
  		form.appendChild(button);
  		cells[index].appendChild(form);
	} else {
		cells[index].style.fontSize = font + "px";
	}
}
rand.appendChild(randomBtn);
tableStyle.appendChild(rand);

let deleteTable = document.createElement("div");
let deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "Delete all";
deleteBtn.id = "deleteButton"
deleteBtn.onclick = function() {
	createTable.deleteTable();
}

deleteTable.appendChild(deleteBtn);
tableStyle.appendChild(deleteTable);

function createTable(tableStyle) {
	document.getElementById("form").style.display = "none";
	tableStyle.style.display = "flex";
	tableStyle.style.flexFlow = "row wrap";
	tableStyle.style.justifyContent = "center";
	document.getElementById("table").style.display = "flex";
	document.getElementById("table").style.flexFlow = "row wrap";
	document.getElementById("table").style.justifyContent = "center";

	function tableBorder(width, style) { 
		table.style.border = width + "px " + style + " #aaaaaa";
	}

	createTable.tableBorder = tableBorder;

	function tableCaption(value) {
		caption.innerHTML = value;
	}

	createTable.tableCaption = tableCaption;

	function deleteRow(value) {
		if ((!Number.isInteger(+value)) || (+value > table.rows.length) || (+value <= 0)) {
			alert(value + ": invalid value. Must be in range [1;" + table.rows.length + "]");
		}
		else {
			table.deleteRow(value - 1);
		}
	}

	createTable.deleteRow = deleteRow;

	function deleteTable() {
		table.remove();
		tableStyle.style.display = "none";
		document.getElementById("table").style.display = "none";
		document.getElementsByTagName("form")[0].reset();
		document.getElementById("form").style.display = "flex";
		document.getElementById("form").style.flexFlow = "row wrap";
		document.getElementById("form").style.justifyContent = "center";
	}

	createTable.deleteTable = deleteTable;

	tableWidth = (document.getElementById("width").value > 10 ? 10 : document.getElementById("width").value);
	tableHeight = (document.getElementById("height").value > 10 ? 10 : document.getElementById("height").value);
	let table = document.createElement("table");
  	for (i = 0; i < tableHeight; i++) {
  		let tr = table.insertRow(i);
  		for (j = 0; j < tableWidth; j++) {
  			let td = tr.insertCell(j);
  			td.style.textAlign = "center";
  			td.style.verticalAlign = "middle";
  			let form = document.createElement("form")
  			let textArea = document.createElement("textarea");
  			let button = document.createElement("button");
  			button.innerHTML = "Save";
  			button.type = "button";
  			button.onclick = function() {
  				td.innerHTML = textArea.value;
  			}
  			td.appendChild(form);
  			form.appendChild(textArea);
  			form.appendChild(button);
  		}
  	}
  	let caption = document.createElement("caption");
	table.appendChild(caption);
  	document.getElementById("table").appendChild(table);
}