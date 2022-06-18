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
	
const nav_a = document.querySelectorAll("nav a");
let nav = document.querySelector("nav");

nav_a.forEach((liA) => {
	liA.addEventListener('click', function() {
		nav.querySelector(".active").classList.remove("active");
		liA.classList.toggle("active");
	});
});

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

// bagian dark mode