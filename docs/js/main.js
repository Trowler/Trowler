let nav = document.querySelector("nav");
window.addEventListener("scroll", e => {
	if (window.scrollY > window.innerHeight - 48) {
		nav.style.background = "#fff"
		nav.style["box-shadow"] = "0 -5px 15px 0 #ced4da"
		nav.style.color = "black"
	} else {
		nav.style.background = "none"
		nav.style["box-shadow"] = "none"
		nav.style.color = "white"
	}
})
