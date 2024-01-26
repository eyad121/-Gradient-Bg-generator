'use strict';
const H3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("Body");

const background=  () => {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
    	H3.textContent = body.style.background + ";";
}

color1.addEventListener("input", background);

color2.addEventListener("input", background);