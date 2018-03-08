function createRandomBoard(nWidth, nHeight) {
	let oBoard = [];
	for (let i = 0; i < nHeight; i++) {
		oBoard[i] = [];
		for (let j = 0; j < nWidth; j++) {
			oBoard[i].push(Math.random() > 0.6 ? 1 : 0);
		}
	}
	return oBoard;
}
function createBlinker() {
	const nWidth = 5, nHeight = 5;
	let oBoard = [];
	for (let i = 0; i < nHeight; i++) {
		oBoard[i] = [];
		for (let j = 0; j < nWidth; j++) {
			oBoard[i].push(0);
		}
	}
	oBoard[2][1] = 1;
	oBoard[2][2] = 1;
	oBoard[2][3] = 1;
	return oBoard;
}
function createBeehive() {
	const nWidth = 6, nHeight = 5;
	let oBoard = [];
	for (let i = 0; i < nHeight; i++) {
		oBoard[i] = [];
		for (let j = 0; j < nWidth; j++) {
			oBoard[i].push(0);
		}
	}
	oBoard[1][2] = 1;
	oBoard[1][3] = 1;
	oBoard[2][1] = 1;
	oBoard[2][4] = 1;
	oBoard[3][2] = 1;
	oBoard[3][3] = 1;
	return oBoard;
}
function drawBoard(oBoard) {
	let div = document.getElementById("board");
	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}

	for (let i = 0; i < oBoard.length; i++) {
		let row = document.createElement("tr");
		for (let j = 0; j < oBoard[i].length; j++) {
			let col = document.createElement("td");
			col.style.backgroundColor = oBoard[i][j] === 1 ? 'black' : 'white';
			row.appendChild(col);
		}
		div.appendChild(row);
	}
}
let oBoard = createBlinker();
drawBoard(oBoard);
setInterval(function () {
	oBoard = tick(oBoard);
	drawBoard(oBoard);
}, 1000);