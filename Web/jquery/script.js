
$("*").css("fontFamily", "arial");
$(".stylish").css("color", "#aaaaaa");
$(".stylish").css("margin", "1em 0px");
$(".stylish").css("fontSize", "36px");
$("p.stylish").css("fontWeight", "bold");
$("p.stylish").css("letterSpacing", "0.6em");
$("p.stylish").css("textTransform", "uppercase");
$("a.stylish").css("textDecoration", "none");

$(".too_stylish").css("color", "red");
$(".too_stylish").css("margin", "2em 0px");
$(".too_stylish").css("fontSize", "30px");
$("p.too_stylish").css("fontStyle", "italic");
$("p.too_stylish").css("letterSpacing", "1em");
$("p.too_stylish").css("fontVariant", "small-caps");
$("a.too_stylish").css("textDecoration", "none");
$("a.too_stylish:last").css("fontWeight", "bold");

$(document).ready(function() {
	$("form > input").attr("disabled", "disabled");
});

$("a").prepend("<span>↗ </span>");
$("a").attr("target", "_blank");
let href = $("a").attr("href");
$("a").attr("href", function(index, value) {
	return (value + "").replace("http", "https");
});

$("body").prepend("<button onclick='cancelStyle()'>Cancel style</>");
$("button").css("border", "none");
$("button").css("borderRadius", "10px");
$("button").css("backgroundSize", "20px");
$("button").css("backgroundRepeat", "no-repeat");
$("button").css("backgroundPosition", "left 15px center");
$("button").css("backgroundImage", "url(https://fb.ru/misc/i/gallery/2646/43533.jpg)");
$("button").css("padding", "9px 30px 9px 45px");
$("button").css("margin", "15px");
$("button").css("outline", "none");

function cancelStyle() {
	$("a").find("span:first").remove();
	$("a").attr("target", "_self");
}

$("table").css("border", "3px solid grey");
$("td").css("border", "1px solid grey");
$("table").css("borderRadius", "10px");
$("td").css("borderRadius", "10px");



function toggle() {
	$("#text0").toggle("slow");
}

function fade() {
	$("#text1").fadeToggle("slow");
}

function slide() {
	$("#text2").slideToggle("fast");
}

function animation0() {
	$("#text3").animate({width: "+=80px"}, "slow");
	$("#text3").animate({width: "-=80px"}, "fast");
}

function animation1() {
	$("#text4").animate({height: "+=60px"}, "slow");
	$("#text4").animate({height: "-=60px"}, "slow");
}

function animation2() {
	$("#text5").animate({opacity: "0"}, "fast");
	$("#text5").animate({opacity: "1"}, "slow");
}

function reloadPage() {
	let p = document.createElement("p");
	$(p).load("https://inxaoc.github.io/example/ajax-1.html");
	document.body.appendChild(p);
}

function jsonToList(obj, someUl) {
			for (let key in obj) {
				let li = document.createElement("li");
				let item = key + ": ";
				li.innerHTML = item;
				someUl.appendChild(li);
				if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
					let ul = document.createElement("ul");
					jsonToList(obj[key],ul);
					someUl.appendChild(ul);
				} else {
					item += obj[key];
					li.innerHTML = item;
				}
			}
		}

function getJSON(){
	$.getJSON("https://inxaoc.github.io/example/ajax.json", function(data) {
		let ul = document.createElement("ul");
		jsonToList(data, ul);
		document.body.appendChild(ul);
	});
}
