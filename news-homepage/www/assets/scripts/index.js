//  _____                 _
// |_   _|__   __ _  __ _| | ___     _ __ ___   ___ _ __  _   _
//   | |/ _ \ / _` |/ _` | |/ _ \   | '_ ` _ \ / _ \ '_ \| | | |
//   | | (_) | (_| | (_| | |  __/   | | | | | |  __/ | | | |_| |
//   |_|\___/ \__, |\__, |_|\___|   |_| |_| |_|\___|_| |_|\__,_|
//            |___/ |___/

let toggleOpen = document.querySelector("#toggleOpen");
let toggleClose = document.querySelector("#toggleClose");
let buttons = [toggleOpen, toggleClose];

let body = document.querySelector("body");
let menu = document.querySelector("#menu");

function toggleMenu() {
	if (menu.classList.contains("expanded")) {
		// If the menu is already expanded
		// close it and disable dim on body
		menu.classList.remove("expanded");
		body.classList.remove("dimmed");
	} else {
		// Otherwise, open the menu and dim body
		menu.classList.add("expanded");
		body.classList.add("dimmed");
	}
}

buttons.forEach(function (btn) {
	btn.addEventListener("click", toggleMenu);
});

//  ____  _           _     _               _ _      _
// |  _ \(_)___  __ _| |__ | | ___      ___| (_) ___| | _____
// | | | | / __|/ _` | '_ \| |/ _ \    / __| | |/ __| |/ / __|
// | |_| | \__ \ (_| | |_) | |  __/   | (__| | | (__|   <\__ \
// |____/|_|___/\__,_|_.__/|_|\___|    \___|_|_|\___|_|\_\___/  -- !!! --

let a = document.querySelectorAll("a");

a.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
	});
});
