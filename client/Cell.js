function getCellValue(r, c, pCells) {
	if (r < 0 || r >= pCells.length || c < 0 || c >= pCells[0].length) {
		return 0;
	}
	return pCells[r][c];
}

function numOfLiveNeighbours(r, c, pCells) {
	let n = 0;

	n += getCellValue(r - 1, c - 1, pCells);
	n += getCellValue(r, c - 1, pCells);
	n += getCellValue(r + 1, c - 1, pCells);
	n += getCellValue(r - 1, c, pCells);
	n += getCellValue(r + 1, c, pCells);
	n += getCellValue(r - 1, c + 1, pCells);
	n += getCellValue(r, c + 1, pCells);
	n += getCellValue(r + 1, c + 1, pCells);

	return n;
}

function transform(r, c, pCells) {
	// [1 -> 0] Any live cell with fewer than two live neighbours dies, as if caused by under-population.
	if (pCells[r][c] === 1 && numOfLiveNeighbours(r, c, pCells) < 2) {
		return 0;
	}
	// [1 -> 1] Any live cell with two or three live neighbours lives on to the next generation.
	if (pCells[r][c] === 1 && [2, 3].indexOf(numOfLiveNeighbours(r, c, pCells)) !== -1) {
		return 1;
	}
	// [1 -> 0] Any live cell with more than three live neighbours dies, as if by overcrowding.
	if (pCells[r][c] === 1 && numOfLiveNeighbours(r, c, pCells) > 3) {
		return 0;
	}
	// [0 -> 1] Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	if (pCells[r][c] === 0 && numOfLiveNeighbours(r, c, pCells) === 3) {
		return 1;
	}
	// If no Transition Rules hit, default return previous value
	return pCells[r][c];
}

function tick(pCells) {
	const nNumOfRows = pCells.length;
	const nNumOfColumns = pCells[0].length;
	let pNextCells = [];
	for (let r = 0; r < nNumOfRows; r++) {
		pNextCells[r] = [];
		for (let c = 0; c < nNumOfColumns; c++) {
			pNextCells[r][c] = transform(r, c, pCells);
		}
	}
	return pNextCells;
}

try {
	module.exports = { getCellValue, numOfLiveNeighbours, transform };
} catch (e) { }