(function() {
	const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

	function css(element, property) {
		return window.getComputedStyle(document.getElementById('cursor'), null).getPropertyValue(property);
	}
	let x, y;
	let px, py;
	px = py = 0;
	var exit = 0;
	var percent = 100;
	document.getElementById('cursor').style.left = window.screen.width / 2;
	document.getElementById('cursor').style.top = window.screen.height / 2;

	function translate(elem, x, y) {
		var left = parseInt(css(elem, 'margin-left')),
			top = parseInt(css(elem, 'margin-top')),
			dx = left - x,
			dy = top - y,
			i = 1,
			count = 10,
			delay = 5;

		function loop() {
			if (i >= count) {
				return;
			}
			i += 1;
			elem.style.marginLeft = (left - (dx * i / count)).toFixed(0) + 'px';
			elem.style.marginTop = (top - (dy * i / count)).toFixed(0) + 'px';
			setTimeout(loop, delay);
		}
		loop();
	};

	let x1, y1;
	let px1, py1;
	px1 = py1 = 0;

	function translateSlow(elem, x, y) {
		var left = parseInt(css(elem, 'padding-left')),
			top = parseInt(css(elem, 'padding-top')),
			dx = left - x,
			dy = top - y,
			i = 0,
			count = 5,
			delay = 10;

		function loop() {
			if (i >= count) {
				return;
			}
			i += 1;
			elem.style.paddingLeft = (left - (dx * i / count)).toFixed(0) + 'px';
			elem.style.paddingTop = (top - (dy * i / count)).toFixed(0) + 'px';
			setTimeout(loop, delay);
		}
		loop();

	};


	setInterval(() => {
		if (exit == 1) {
			return;
		}
		translate(document.getElementById('cursor'), getRandom(0, window.screen.width), getRandom(0, window.screen.height));

	}, 2500);

	setInterval(() => {
		if (exit == 1) {
			return;
		}
		translateSlow(document.getElementById('cursor'), getRandom(0, 25), getRandom(0, 25));
	}, 100);
	
	setInterval(() => {
		if (exit == 1) {
			return;
		}
		if (!(posx > document.getElementById('center').x - 100 &&
		posx < document.getElementById('center').x + 100) ||
		!(posy > document.getElementById('center').y - 100 &&
		posy < document.getElementById('center').y + 100)) {
			percent -= 1;
			document.getElementById('bar').style.width = percent * 2 + 'px';
			document.getElementById('bar').style.backgroundColor = 'red';
			console.log(percent);
		} else if (percent > 0 && percent != 100){
			percent += 5;
			document.getElementById('bar').style.width = percent * 2 + 'px';
			document.getElementById('bar').style.backgroundColor = 'white';
			console.log(percent);
		}
		
		if (percent > 100) {
			percent = 100;
		}
		
		if (percent <= 0) {
			document.getElementById('herespandy>:D').style.visibility = 'visible';
			document.getElementById('yousuck').style.visibility = 'visible';
			document.getElementById('cursor').style.visibility = 'hidden';
			document.getElementById('center').style.visibility = 'hidden';
			document.getElementById('bar').style.visibility = 'hidden';
			exit = 1;
		}
	}, 10);

	setInterval(() => {
		if (exit == 1) {
			return;
		}
		posx = Number(document.getElementById('cursor').style.marginLeft.replace('px', '')) + Number(document.getElementById('cursor').style.paddingLeft.replace('px', '')) + Number(document.getElementById('cursor').style.left.replace('px', ''));
		posy = Number(document.getElementById('cursor').style.marginTop.replace('px', '')) + Number(document.getElementById('cursor').style.paddingTop.replace('px', '')) + Number(document.getElementById('cursor').style.top.replace('px', ''));
		if (posx > window.screen.width) {
			document.getElementById('cursor').style.paddingLeft = String(Number(document.getElementById('cursor').style.paddingLeft.replace('px', '')) - 50) + 'px';
			document.getElementById('cursor').style.marginLeft = String(Number(document.getElementById('cursor').style.marginLeft.replace('px', '')) - 50) + 'px';
			document.getElementById('cursor').style.left = String(Number(document.getElementById('cursor').style.left.replace('px', '')) - 50) + 'px';
			console.log('move');

		}
		if (posx < 0) {
			document.getElementById('cursor').style.paddingLeft = String(Number(document.getElementById('cursor').style.paddingLeft.replace('px', '')) + 50) + 'px';
			document.getElementById('cursor').style.marginLeft = String(Number(document.getElementById('cursor').style.marginLeft.replace('px', '')) + 50) + 'px';
			document.getElementById('cursor').style.left = String(Number(document.getElementById('cursor').style.left.replace('px', '')) + 50) + 'px';
			console.log('move');

		}
		if (posy > window.screen.height) {
			document.getElementById('cursor').style.paddingTop = String(Number(document.getElementById('cursor').style.paddingTop.replace('px', '')) - 50) + 'px';
			document.getElementById('cursor').style.marginTop = String(Number(document.getElementById('cursor').style.marginTop.replace('px', '')) - 50) + 'px';
			document.getElementById('cursor').style.top = String(Number(document.getElementById('cursor').style.top.replace('px', '')) - 50) + 'px';
			console.log('move');

		}
		if (posy < 0) {
			document.getElementById('cursor').style.paddingTop = String(Number(document.getElementById('cursor').style.paddingTop.replace('px', '')) + 50) + 'px';
			document.getElementById('cursor').style.marginTop = String(Number(document.getElementById('cursor').style.marginTop.replace('px', '')) + 50) + 'px';
			document.getElementById('cursor').style.top = String(Number(document.getElementById('cursor').style.top.replace('px', '')) + 50) + 'px';
			console.log('move');

		}
	}, 1);

	function move(event) {
		if (exit == 1) {
			return;
		}
		console.log(`movement: ${event.movementX}, ${event.movementY}\n${log.innerText}`);
		x = event.movementX;
		y = event.movementY;

		// sets the image cursor to new relative position
		if (x < 500 && x > -500) {
			cursor.style.left = String(Number(cursor.style.left.replace('px', '')) + x) + "px";
			cursor.style.top = String(Number(cursor.style.top.replace('px', '')) + y) + "px";
		}
	}
	const log = document.getElementById("in");
	document.addEventListener("mousemove", move);

})();