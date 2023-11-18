let toggleOpen = document.querySelector("#toggleOpen");
let toggleClose = document.querySelector("#toggleClose");
let buttons = [toggleOpen, toggleClose];

let body = document.querySelector("body");
let menu = document.querySelector("#menu");

function toggleMenu() {
	if (menu.classList.contains("expanded")) {
		this.setAttribute("aria-expanded", "false");
		menu.classList.remove("expanded");
		body.classList.remove("dimmed");
	} else {
		menu.classList.add("expanded");
		this.setAttribute("aria-expanded", "true");
		body.classList.add("dimmed");
	}
}

buttons.forEach(function (btn) {
	btn.addEventListener("click", toggleMenu);
});
