// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.getElementById('panacek');

//pocatecni umisteni panacka (když z toho udelam fci, tak to nefunguje)

let pTop = window.innerHeight / 2;
let pLeft = window.innerWidth / 2;
		
panacek.style.top = pTop + "px";
panacek.style.left = pLeft + "px";

//umisteni mince (opět ve fci nefunguje)

let mince = document.getElementById('mince');

let mTop = Math.floor(Math.random() * window.innerHeight);
let mLeft = Math.floor(Math.random() * window.innerWidth);

mince.style.top = mTop + "px";
mince.style.left = mLeft + "px";








