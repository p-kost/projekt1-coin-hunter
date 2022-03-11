// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// Globální proměnné

let panacek = document.getElementById('panacek');
let panacekX = window.innerWidth / 2;
let panacekY = window.innerHeight / 2;
let panacekSirka = panacek.width;
let panacekVyska = panacek.height;

let mince = document.getElementById('mince');
let minceX = Math.floor(Math.random() * window.innerWidth);
let minceY = Math.floor(Math.random() * window.innerHeight);
let minceSirka = mince.width;
let minceVyska = mince.heiht;


//při načtení obrazovky

function init() {	
	umisteniPanacka();
	umisteniMince();
}

// umistění panáčka

function umisteniPanacka() {
	panacek.style.left = panacekX + "px";
	panacek.style.top = panacekY + "px";
}

// umístění mince

function umisteniMince() {
	mince.style.left = minceX + "px";
	mince.style.top = minceY + "px";
}



// chození panáčka 

function jdi(event) {
	if (event.key === "ArrowUp"){
		console.log("Panáček jde nahoru.");
		panacekY = panacekY-10;
	}
	if (event.key === "ArrowDown") {
		console.log("Panáček jde dolů.");
		panacekY = panacekY+10;
	}
	if (event.key === "ArrowLeft") {
		console.log("Panáček jde doleva.");
		panacekX = panacekX-10;
	}
	if (event.key === "ArrowRight") {
		console.log("Panáček jde doprava.");
		panacekX = panacekX+10;
	}
	umisteniPanacka();
	if (!( panacekX + panacekSirka < minceX || 
		minceX + minceSirka < panacekX || 
		panacekY + panacekVyska < minceY || 
		minceY + minceVyska < panacekY)) {
		console.log("Panáček snědl minci.")
		kolize();
	}
}

function kolize(){
	umisteniMince();
}

