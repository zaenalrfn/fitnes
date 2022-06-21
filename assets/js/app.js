// bagian jam
Waktu();
function Waktu() {
	const waktu = document.getElementById('tm');
	var j = new Date();
	var h = j.getHours();
	var m = j.getMinutes();
	// h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	var z = h + ":" + m;
	waktu.innerHTML = z;
	let t = setTimeout(function() {
		Waktu();
	}, 1000);
}

// bagian counter

Counter();
function Counter() {
	let counter = document.getElementById('counter');
	var valCounter = 0;
	var c = setInterval(function(){
		counter.innerHTML = ++valCounter;
		if (valCounter == 167) {
			clearInterval(c);
		}
	}, 30);
}

// bagian navbar active
window.addEventListener('scroll', navActive);
function navActive() {
	let nav = document.querySelector("nav");
	let windowPosition = window.scrollY > 500;
	nav.classList.toggle('navActive', windowPosition);
}

// bagian navbar link active
	
const nav_a = document.querySelectorAll("nav a");
let nav = document.querySelector("nav");

nav_a.forEach((liA) => {
	liA.addEventListener('click', function() {
		nav.querySelector(".active").classList.remove("active");
		liA.classList.toggle("active");
	});
});

// bagian bars
function Bar() {
	let ul = document.querySelector("nav ul");	
	ul.classList.toggle('navRes');
}


// bagian footer deskripsi
const cursorArticle = document.querySelectorAll("#article-cursor");
for(let ca of cursorArticle) {
	ca.addEventListener('click', Article);
}
function Article(t) {
	var articleDeskripsi = document.querySelectorAll(".article-deskripsi");
	let ar = t.target;
	if (ar.classList.contains("cursor-1")) {
		articleDeskripsi[0].classList.toggle("active-deskripsi");
	} else if (ar.classList.contains("cursor-2")) {
		articleDeskripsi[1].classList.toggle("active-deskripsi");
	} else if (ar.classList.contains("cursor-3")) {
		articleDeskripsi[2].classList.toggle("active-deskripsi");
	} else if (ar.classList.contains("cursor-4")) {
		articleDeskripsi[3].classList.toggle("active-deskripsi");
	} else {
		articleDeskripsi[4].classList.toggle("active-deskripsi");
	}
}

// bagian nav active scroll
window.addEventListener('scroll', navScroll);

function navScroll() {
	let navA = document.querySelectorAll("nav a");
	let section1 = document.getElementById("jumbotron"),
		section2 = document.getElementById("popular-exercises"),
		section3 = document.getElementById("work"),
		section4 = document.getElementById("trainer");

	const sections = [section1, section2, section3, section4];
	var pageActive = "";
	for(let section of sections) {
		let sectionTop = section.offsetTop - 50;
		if (window.pageYOffset >= sectionTop) {
			pageActive = section.getAttribute("id");
		}
	}

	for(let linkActive of navA) {
		linkActive.classList.remove("active");
		if (linkActive.href.includes(pageActive)) {
			linkActive.classList.add("active");
		}
	}
}

// bagian dark mode

let modeKey = localStorage.getItem('modeKey');

function Dark() {

}

function Light() {

}
