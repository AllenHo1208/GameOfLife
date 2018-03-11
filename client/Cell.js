function leftNeighbour(x, nWidth) {
	return (x - 1) < 0 ? (x - 1) + nWidth : x - 1;
}
function rightNeighbour(x, nWidth) {
	return (x + 1) >= nWidth ? nWidth - (x + 1) : x + 1;
}
function topNeighbour(y, nHeight) {
	return (y - 1) < 0 ? (y - 1) + nHeight : y - 1;
}
function bottomNeighbour(y, nHeight) {
	return (y + 1) >= nHeight ? nHeight - (y + 1) : y + 1;
}

function numOfLiveNeighbours(x, y, oBoard) {
	const nWidth = oBoard.length
	const nHeight = oBoard[0].length;

	// x - 1
	const left = leftNeighbour(x, nWidth);
	// x + 1
	const right = rightNeighbour(x, nWidth);
	// y - 1
	const top = topNeighbour(y, nHeight);
	// y + 1
	const bottom = bottomNeighbour(y, nHeight);

	let n = 0;
	// x - 1, y - 1
	n += oBoard[left][top];
	// x    , y - 1
	n += oBoard[x][top];
	// x + 1, y - 1
	n += oBoard[right][top];
	// x - 1, y
	n += oBoard[left][y];
	// x + 1, y
	n += oBoard[right][y];
	// x - 1, y + 1
	n += oBoard[left][bottom];
	// x    , y + 1
	n += oBoard[x][bottom];
	// x + 1, y + 1
	n += oBoard[right][bottom];

	return n;
}

function transform(x, y, oBoard) {
	// [1 -> 0] Any live cell with fewer than two live neighbours dies, as if caused by under-population.
	if (oBoard[x][y] === 1 && numOfLiveNeighbours(x, y, oBoard) < 2) {
		return 0;
	}
	// [1 -> 1] Any live cell with two or three live neighbours lives on to the next generation.
	if (oBoard[x][y] === 1 && [2, 3].indexOf(numOfLiveNeighbours(x, y, oBoard)) !== -1) {
		return 1;
	}
	// [1 -> 0] Any live cell with more than three live neighbours dies, as if by overcrowding.
	if (oBoard[x][y] === 1 && numOfLiveNeighbours(x, y, oBoard) > 3) {
		return 0;
	}
	// [0 -> 1] Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	if (oBoard[x][y] === 0 && numOfLiveNeighbours(x, y, oBoard) === 3) {
		return 1;
	}
	// If no Transition Rules hit, default return previous value
	return oBoard[x][y];
}

function tick(oBoard) {
	let oNextBoard = [];
	for (let i = 0; i < oBoard.length; i++) {
		oNextBoard[i] = [];
		for (let j = 0; j < oBoard[i].length; j++) {
			oNextBoard[i][j] = transform(i, j, oBoard);
		}
	}
	return oNextBoard;
}

try {
	module.exports = { leftNeighbour, rightNeighbour, topNeighbour, bottomNeighbour, numOfLiveNeighbours, transform };
} catch (e) { }