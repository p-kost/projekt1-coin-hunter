// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.getElementById('panacek');

//pocatecni umisteni panacka (když z toho udelam fci, tak to nefunguje)

	let veVysce = window.innerHeight / 2;
	let vSirce = window.innerWidth / 2;
		
	panacek.style.top = veVysce + "px";
	panacek.style.left = vSirce + "px";





