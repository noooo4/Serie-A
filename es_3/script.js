const t = document.getElementById('serieA');
if (t) {
	console.log('ciao')
    const username = document.getElementById("username");
    console.log(username);
 
	Array.from(t.rows).forEach((tr, rowIdx) => {
		Array.from(tr.cells).forEach((cell, cellIdx) => {
			if (cell.innerText == '') {
				cell.style.backgroundColor = 'RGBA(40, 197, 255, 0.93)';
			} else if (cell.innerText >= 0 && cell.innerText <= 4) {
				cell.style.backgroundColor = 'RGBA(40, 197, 255, 0.93)';
			} else if (cell.innerText > 17 && cell.innerText <= 20) {
				cell.style.backgroundColor = 'rgba(255, 79, 66, 1)';
			} else if (cell.innerText >= 5 && cell.innerText <= 5) {
				cell.style.backgroundColor = 'rgba(255, 230, 66, 1)';
			} else if (cell.innerText >= 6 && cell.innerText <= 6) {
				cell.style.backgroundColor = 'rgba(40, 197, 42, 0.93)';
			};
		});
	});
}


// 'rgba(40, 197, 42, 0.93)' verde CONFERENCE
// 'rgba(40, 197, 255, 0.93)' blu champions
// 'rgba(255, 79, 66, 1)' rosso retrocessione
// 'rgba(255, 230, 66, 1)' giallo EUROPA
