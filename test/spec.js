const assert = require('assert');
const { numOfLiveNeighbours, transform } = require('../client/Cell');

describe('Game Of Life', function () {
	describe('Calculate the no. of live heighbours', function () {
		it('middle cell of a 3x3 board', function () {
			const r = 1, c = 1;
			const pCells = [[1, 1, 1],
							[0, 0, 0],
							[1, 1, 1]];
			assert.equal(numOfLiveNeighbours(r, c, pCells), 6);
		});
		it('top-middle of a 3x3 board', function () {
			const r = 0, c = 1;
			const pCells = [[1, 1, 1],
							[0, 0, 0],
							[1, 1, 1]];
			assert.equal(numOfLiveNeighbours(r, c, pCells), 2);
		});
		it('bottom-middle of a 3x3 board', function () {
			const r = 2, c = 1;
			const pCells = [[1, 1, 1],
							[0, 0, 0],
							[1, 1, 1]];
			assert.equal(numOfLiveNeighbours(r, c, pCells), 2);
		});
		it('left-middle of a 3x3 board', function () {
			const r = 1, c = 0;
			const pCells = [[1, 1, 1],
							[0, 0, 0],
							[1, 1, 1]];
			assert.equal(numOfLiveNeighbours(r, c, pCells), 4);
		});
		it('right-middle of a 3x3 board', function () {
			const r = 1, c = 2;
			const pCells = [[1, 1, 1],
							[0, 0, 0],
							[1, 1, 1]];
			assert.equal(numOfLiveNeighbours(r, c, pCells), 4);
		});
		it('top-left cell of a 3x3 board', function () {
			const r = 0, c = 0;
			const pCells = [[1, 1, 1],
							[0, 0, 0],
							[1, 1, 1]];
			assert.equal(numOfLiveNeighbours(r, c, pCells), 1);
		});
		it('top-right cell of a 3x3 board', function () {
			const r = 0, c = 2;
			const pCells = [[1, 1, 1],
							[0, 0, 0],
							[1, 1, 1]];
			assert.equal(numOfLiveNeighbours(r, c, pCells), 1);
		});
		it('bottom-left cell of a 3x3 board', function () {
			const r = 2, c = 0;
			const pCells = [[1, 1, 1],
							[0, 0, 0],
							[1, 1, 1]];
			assert.equal(numOfLiveNeighbours(r, c, pCells), 1);
		});
		it('bottom-right cell of a 3x3 board', function () {
			const r = 2, c = 2;
			const pCells = [[1, 1, 1],
							[0, 0, 0],
							[1, 1, 1]];
			assert.equal(numOfLiveNeighbours(r, c, pCells), 1);
		});
	});

	describe('Transition Rules', function () {
		it('[1 -> 0] Any live cell with fewer than two live neighbours dies, as if caused by under-population', function () {
			const r = 1, c = 1;
			const pCells = [[0, 0, 0],
							[0, 1, 0],
							[0, 0, 0]];
			assert.equal(transform(r, c, pCells), 0);
		});
		it('[1 -> 1] Any live cell with two or three live neighbours lives on to the next generation', function () {
			const r = 1, c = 1;
			const pCells = [[0, 1, 1],
							[0, 1, 0],
							[0, 0, 0]];
			assert.equal(transform(r, c, pCells), 1);
		});
		it('[1 -> 0] Any live cell with more than three live neighbours dies, as if by overcrowding', function () {
			const r = 1, c = 1;
			const pCells = [[1, 1, 1],
							[1, 1, 0],
							[1, 0, 1]];
			assert.equal(transform(r, c, pCells), 0);

		});
		it('[0 -> 1] Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', function () {
			const r = 1, c = 1;
			const pCells = [[0, 1, 1],
							[0, 0, 0],
							[0, 0, 1]];
			assert.equal(transform(r, c, pCells), 1);
		});
		it('[0 -> 0](Implicit Rule 1) Any dead cell with fewer than three live neighbours still a dead cell', function () {
			const r = 1, c = 1;
			const pCells = [[0, 1, 1],
							[0, 0, 0],
							[0, 0, 0]];
			assert.equal(transform(r, c, pCells), 0);
		});
		it('[0 -> 0](Implicit Rule 2) Any dead cell with more than three live neighbours still a dead cell', function () {
			const r = 1, c = 1;
			const pCells = [[1, 1, 1],
							[0, 0, 1],
							[1, 0, 1]];
			assert.equal(transform(r, c, pCells), 0);
		});
	});
});