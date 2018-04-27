const a = 0; // No se puede reasignar `a`

var p = 'p';

function A() {
	let p = 8;
	var m = 9;


	function B() {
		console.log(p);
		console.log(m);
	}

	B();
}

A();