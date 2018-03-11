function createRandomBoard(nWidth, nHeight) {
	let pCells = [];
	for (let i = 0; i < nHeight; i++) {
		pCells[i] = [];
		for (let j = 0; j < nWidth; j++) {
			pCells[i].push(Math.random() > 0.6 ? 1 : 0);
		}
	}
	return pCells;
}
function createHeart() {
	const nWidth = 11, nHeight = 9;
	let pCells = [];
	for (let i = 0; i < nHeight; i++) {
		pCells[i] = [];
		for (let j = 0; j < nWidth; j++) {
			pCells[i].push(0);
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
	const nWidth = 5, nHeight = 5;
	let pCells = [];
	for (let i = 0; i < nHeight; i++) {
		pCells[i] = [];
		for (let j = 0; j < nWidth; j++) {
			pCells[i].push(0);
		}
	}
	pCells[2][1] = 1;
	pCells[2][2] = 1;
	pCells[2][3] = 1;
	return pCells;
}
function createBeehive() {
	const nWidth = 6, nHeight = 5;
	let pCells = [];
	for (let i = 0; i < nHeight; i++) {
		pCells[i] = [];
		for (let j = 0; j < nWidth; j++) {
			pCells[i].push(0);
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
	const nWidth = 38 * 1.5, nHeight = 11 * 5;
	let pCells = [];
	for (let i = 0; i < nHeight; i++) {
		pCells[i] = [];
		for (let j = 0; j < nWidth; j++) {
			pCells[i].push(0);
		}
	}
	const m = 10, n = 0;
	pCells[n + 1][m + 25] = 1;
	pCells[n + 2][m + 23] = 1;
	pCells[n + 2][m + 25] = 1;
	pCells[n + 3][m + 13] = 1;
	pCells[n + 3][m + 14] = 1;
	pCells[n + 3][m + 21] = 1;
	pCells[n + 3][m + 22] = 1;
	pCells[n + 3][m + 35] = 1;
	pCells[n + 3][m + 36] = 1;
	pCells[n + 4][m + 12] = 1;
	pCells[n + 4][m + 16] = 1;
	pCells[n + 4][m + 21] = 1;
	pCells[n + 4][m + 22] = 1;
	pCells[n + 4][m + 35] = 1;
	pCells[n + 4][m + 36] = 1;
	pCells[n + 5][m + 1] = 1;
	pCells[n + 5][m + 2] = 1;
	pCells[n + 5][m + 11] = 1;
	pCells[n + 5][m + 17] = 1;
	pCells[n + 5][m + 21] = 1;
	pCells[n + 5][m + 22] = 1;
	pCells[n + 6][m + 1] = 1;
	pCells[n + 6][m + 2] = 1;
	pCells[n + 6][m + 11] = 1;
	pCells[n + 6][m + 15] = 1;
	pCells[n + 6][m + 17] = 1;
	pCells[n + 6][m + 18] = 1;
	pCells[n + 6][m + 23] = 1;
	pCells[n + 6][m + 25] = 1;
	pCells[n + 7][m + 11] = 1;
	pCells[n + 7][m + 17] = 1;
	pCells[n + 7][m + 25] = 1;
	pCells[n + 8][m + 12] = 1;
	pCells[n + 8][m + 16] = 1;
	pCells[n + 9][m + 13] = 1;
	pCells[n + 9][m + 14] = 1;
	return pCells;
}

function drawBoard(pCells, div) {
	for (let i = 0; i < pCells.length; i++) {
		let row = document.createElement("tr");
		for (let j = 0; j < pCells[i].length; j++) {
			let col = document.createElement("td");
			col.style.backgroundColor = pCells[i][j] === 1 ? 'black' : 'white';
			row.appendChild(col);
		}
		div.appendChild(row);
	}
}

function updateBoard(pCells, div) {
	for (let i = 0; i < pCells.length; i++) {
		for (let j = 0; j < pCells[i].length; j++) {
			div.childNodes[i].childNodes[j].style.backgroundColor = pCells[i][j] === 1 ? 'black' : 'white';
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
	}, 100);
}

const oBoardCollection = {
	"Gosper Glider Gun": createGosperGliderGun(),
	Heart: createHeart(),
	Blinker: createBlinker(),
	Beehive: createBeehive(),
	Random: createRandomBoard(15, 10)
};

Object.keys(oBoardCollection).forEach(function (sBoardName) {
	let h3 = document.createElement("h3");
	h3.innerText = sBoardName;
	document.body.appendChild(h3);
	startGame(oBoardCollection[sBoardName]);
});