function createRandomBoard(nNumOfRows, nNumOfColumns) {
	let pCells = [];
	for (let r = 0; r < nNumOfRows; r++) {
		pCells[r] = [];
		for (let c = 0; c < nNumOfColumns; c++) {
			pCells[r].push(Math.random() > 0.6 ? 1 : 0);
		}
	}
	return pCells;
}
function createHeart() {
	const nNumOfRows = 9, nNumOfColumns = 11;
	let pCells = [];
	for (let r = 0; r < nNumOfRows; r++) {
		pCells[r] = [];
		for (let c = 0; c < nNumOfColumns; c++) {
			pCells[r].push(0);
		}
	}
	pCells[1][2] = 1;
	pCells[1][3] = 1;
	pCells[1][7] = 1;
	pCells[1][8] = 1;
	pCells[2][1] = 1;
	pCells[2][4] = 1;
	pCells[2][6] = 1;
	pCells[2][9] = 1;
	pCells[3][1] = 1;
	pCells[3][5] = 1;
	pCells[3][9] = 1;
	pCells[4][2] = 1;
	pCells[4][8] = 1;
	pCells[5][3] = 1;
	pCells[5][7] = 1;
	pCells[6][4] = 1;
	pCells[6][6] = 1;
	pCells[7][5] = 1;
	return pCells;
}
function createBlinker() {
	const nNumOfRows = 5, nNumOfColumns = 5;
	let pCells = [];
	for (let r = 0; r < nNumOfRows; r++) {
		pCells[r] = [];
		for (let c = 0; c < nNumOfColumns; c++) {
			pCells[r].push(0);
		}
	}
	pCells[1][2] = 1;
	pCells[2][2] = 1;
	pCells[3][2] = 1;
	return pCells;
}
function createBeehive() {
	const nNumOfRows = 5, nNumOfColumns = 6;
	let pCells = [];
	for (let r = 0; r < nNumOfRows; r++) {
		pCells[r] = [];
		for (let c = 0; c < nNumOfColumns; c++) {
			pCells[r].push(0);
		}
	}
	pCells[1][2] = 1;
	pCells[1][3] = 1;
	pCells[2][1] = 1;
	pCells[2][4] = 1;
	pCells[3][2] = 1;
	pCells[3][3] = 1;
	return pCells;
}
function createGosperGliderGun() {
	const nNumOfRows = 11*10, nNumOfColumns = 38*2;
	let pCells = [];
	for (let r = 0; r < nNumOfRows; r++) {
		pCells[r] = [];
		for (let c = 0; c < nNumOfColumns; c++) {
			pCells[r].push(0);
		}
	}
	const R = 0, C = 0;
	pCells[C + 1][R + 25] = 1;
	pCells[C + 2][R + 23] = 1;
	pCells[C + 2][R + 25] = 1;
	pCells[C + 3][R + 13] = 1;
	pCells[C + 3][R + 14] = 1;
	pCells[C + 3][R + 21] = 1;
	pCells[C + 3][R + 22] = 1;
	pCells[C + 3][R + 35] = 1;
	pCells[C + 3][R + 36] = 1;
	pCells[C + 4][R + 12] = 1;
	pCells[C + 4][R + 16] = 1;
	pCells[C + 4][R + 21] = 1;
	pCells[C + 4][R + 22] = 1;
	pCells[C + 4][R + 35] = 1;
	pCells[C + 4][R + 36] = 1;
	pCells[C + 5][R + 1] = 1;
	pCells[C + 5][R + 2] = 1;
	pCells[C + 5][R + 11] = 1;
	pCells[C + 5][R + 17] = 1;
	pCells[C + 5][R + 21] = 1;
	pCells[C + 5][R + 22] = 1;
	pCells[C + 6][R + 1] = 1;
	pCells[C + 6][R + 2] = 1;
	pCells[C + 6][R + 11] = 1;
	pCells[C + 6][R + 15] = 1;
	pCells[C + 6][R + 17] = 1;
	pCells[C + 6][R + 18] = 1;
	pCells[C + 6][R + 23] = 1;
	pCells[C + 6][R + 25] = 1;
	pCells[C + 7][R + 11] = 1;
	pCells[C + 7][R + 17] = 1;
	pCells[C + 7][R + 25] = 1;
	pCells[C + 8][R + 12] = 1;
	pCells[C + 8][R + 16] = 1;
	pCells[C + 9][R + 13] = 1;
	pCells[C + 9][R + 14] = 1;
	return pCells;
}

function drawBoard(pCells, div) {
	const nNumOfRows = pCells.length;
	const nNumOfColumns = pCells[0].length;

	for (let r = 0; r < nNumOfRows; r++) {
		let row = document.createElement("tr");
		for (let c = 0; c < nNumOfColumns; c++) {
			let col = document.createElement("td");
			col.style.backgroundColor = pCells[r][c] === 1 ? 'black' : 'white';
			row.appendChild(col);
		}
		div.appendChild(row);
	}
}

function updateBoard(pCells, div) {
	const nNumOfRows = pCells.length;
	const nNumOfColumns = pCells[0].length;

	for (let r = 0; r < nNumOfRows; r++) {
		for (let c = 0; c < nNumOfColumns; c++) {
			div.childNodes[r].childNodes[c].style.backgroundColor = pCells[r][c] === 1 ? 'black' : 'white';
		}
	}
}

function startGame(pCells) {
	let div = document.createElement("div");
	document.body.appendChild(div);
	drawBoard(pCells, div);
	setInterval(function () {
		pCells = tick(pCells);
		updateBoard(pCells, div);
	}, 250);
}

const oBoardCollection = {
	"Gosper Glider Gun": createGosperGliderGun(),
	Heart: createHeart(),
	Blinker: createBlinker(),
	Beehive: createBeehive(),
	Random: createRandomBoard(10, 15)
};

Object.keys(oBoardCollection).forEach(function (sBoardName) {
	let h3 = document.createElement("h3");
	h3.innerText = sBoardName;
	document.body.appendChild(h3);
	startGame(oBoardCollection[sBoardName]);
});