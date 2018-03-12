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
	const nNumOfRows = 13, nNumOfColumns = 15;
	let pCells = [];
	for (let r = 0; r < nNumOfRows; r++) {
		pCells[r] = [];
		for (let c = 0; c < nNumOfColumns; c++) {
			pCells[r].push(0);
		}
	}
	pCells[3][4] = 1;
	pCells[3][5] = 1;
	pCells[3][9] = 1;
	pCells[3][10] = 1;
	pCells[4][3] = 1;
	pCells[4][6] = 1;
	pCells[4][8] = 1;
	pCells[4][11] = 1;
	pCells[5][3] = 1;
	pCells[5][7] = 1;
	pCells[5][11] = 1;
	pCells[6][4] = 1;
	pCells[6][10] = 1;
	pCells[7][5] = 1;
	pCells[7][9] = 1;
	pCells[8][6] = 1;
	pCells[8][8] = 1;
	pCells[9][7] = 1;
	return pCells;
}
function createBlinker() {
	const nNumOfRows = 9, nNumOfColumns = 9;
	let pCells = [];
	for (let r = 0; r < nNumOfRows; r++) {
		pCells[r] = [];
		for (let c = 0; c < nNumOfColumns; c++) {
			pCells[r].push(0);
		}
	}
	pCells[3][4] = 1;
	pCells[4][4] = 1;
	pCells[5][4] = 1;
	return pCells;
}
function createBeehive() {
	const nNumOfRows = 9, nNumOfColumns = 10;
	let pCells = [];
	for (let r = 0; r < nNumOfRows; r++) {
		pCells[r] = [];
		for (let c = 0; c < nNumOfColumns; c++) {
			pCells[r].push(0);
		}
	}
	pCells[3][4] = 1;
	pCells[3][5] = 1;
	pCells[4][3] = 1;
	pCells[4][6] = 1;
	pCells[5][4] = 1;
	pCells[5][5] = 1;
	return pCells;
}
function createGosperGliderGun() {
	const nNumOfRows = 15 * 3, nNumOfColumns = 42 * 1.5;
	let pCells = [];
	for (let r = 0; r < nNumOfRows; r++) {
		pCells[r] = [];
		for (let c = 0; c < nNumOfColumns; c++) {
			pCells[r].push(0);
		}
	}
	const R = 2, C = 2;
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
	/*
	Calculate but do not show the outermost two layers of cells to simulate an infinite two-dimensional orthogonal grid
	*/
	const nNumOfRows = pCells.length - 4;
	const nNumOfColumns = pCells[0].length - 4;

	for (let r = 0; r < nNumOfRows; r++) {
		let row = document.createElement("tr");
		for (let c = 0; c < nNumOfColumns; c++) {
			let col = document.createElement("td");
			col.style.backgroundColor = pCells[r + 2][c + 2] === 1 ? 'black' : 'white';
			row.appendChild(col);
		}
		div.appendChild(row);
	}
}

function updateBoard(pCells, div) {
	/*
	Calculate but do not show the outermost two layers of cells to simulate an infinite two-dimensional orthogonal grid
	*/
	const nNumOfRows = pCells.length - 4;
	const nNumOfColumns = pCells[0].length - 4;

	for (let r = 0; r < nNumOfRows; r++) {
		for (let c = 0; c < nNumOfColumns; c++) {
			div.childNodes[r].childNodes[c].style.backgroundColor = pCells[r + 2][c + 2] === 1 ? 'black' : 'white';
		}
	}
}

const Game = function (pCells) {
	let pOriginalCells = pCells;
	let div = document.createElement("div");
	document.body.appendChild(div);

	drawBoard(pCells, div);
	let nIntervalFlag = null;
	return {
		start: function (SPEED) {
			nIntervalFlag = setInterval(function () {
				pCells = tick(pCells);
				updateBoard(pCells, div);
			}, SPEED);
		},
		stop: function () {
			clearInterval(nIntervalFlag);
		},
		next: function () {
			this.stop();
			pCells = tick(pCells);
			updateBoard(pCells, div);
		},
		reset: function () {
			this.stop();
			pCells = pOriginalCells;
			updateBoard(pCells, div);
		}
	};
};

const oBoardCollection = {
	"Gosper Glider Gun": createGosperGliderGun(),
	Heart: createHeart(),
	Blinker: createBlinker(),
	Beehive: createBeehive(),
	Random: createRandomBoard(14, 19)
};

Object.keys(oBoardCollection).forEach(function (sBoardName) {
	let label = document.createElement("label");
	label.innerText = sBoardName;
	document.body.appendChild(label);
	let startBtn = document.createElement("button");
	startBtn.innerText = 'START';
	document.body.appendChild(startBtn);

	let nextBtn = document.createElement("button");
	nextBtn.innerText = 'NEXT';
	document.body.appendChild(nextBtn);

	let resetBtn = document.createElement("button");
	resetBtn.innerText = 'RESET';
	document.body.appendChild(resetBtn);

	const oGame = new Game(oBoardCollection[sBoardName]);
	startBtn.onclick = function (e) {
		if (this.innerText === 'START') {
			oGame.start(20);
			this.innerText = 'STOP';
		} else {
			oGame.stop();
			this.innerText = 'START';
		}
	}
	nextBtn.onclick = function (e) {
		oGame.next();
		startBtn.innerText = 'START';
	}
	resetBtn.onclick = function (e) {
		oGame.reset();
		startBtn.innerText = 'START';
	}
});