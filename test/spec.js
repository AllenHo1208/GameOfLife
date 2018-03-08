const assert = require('assert');
const { leftNeighbour, rightNeighbour, topNeighbour, bottomNeighbour, numOfLiveNeighbours, transform } = require('../client/Board');

describe('Game Of Life', function () {
	describe('Helper functions', function () {
		// left Neighbour
		it('In a 3x3 board, left Neighbour of 0 = 2', function () {
			assert.equal(leftNeighbour(0, 3), 2);
		});
		it('In a 3x3 board, left Neighbour of 1 = 0', function () {
			assert.equal(leftNeighbour(1, 3), 0);
		});
		it('In a 3x3 board, left Neighbour of 2 = 1', function () {
			assert.equal(leftNeighbour(2, 3), 1);
		});
		// right Neighbour
		it('In a 3x3 board, right Neighbour of 0 = 1', function () {
			assert.equal(rightNeighbour(0, 3), 1);
		});
		it('In a 3x3 board, right Neighbour of 1 = 2', function () {
			assert.equal(rightNeighbour(1, 3), 2);
		});
		it('In a 3x3 board, right Neighbour of 2 = 0', function () {
			assert.equal(rightNeighbour(2, 3), 0);
		});
		// top Neighbour
		it('In a 3x3 board, top Neighbour of 0 = 2', function () {
			assert.equal(topNeighbour(0, 3), 2);
		});
		it('In a 3x3 board, top Neighbour of 1 = 0', function () {
			assert.equal(topNeighbour(1, 3), 0);
		});
		it('In a 3x3 board, top Neighbour of 2 = 1', function () {
			assert.equal(topNeighbour(2, 3), 1);
		});
		// bottom Neighbour
		it('In a 3x3 board, bottom Neighbour of 0 = 1', function () {
			assert.equal(bottomNeighbour(0, 3), 1);
		});
		it('In a 3x3 board, bottom Neighbour of 1 = 2', function () {
			assert.equal(bottomNeighbour(1, 3), 2);
		});
		it('In a 3x3 board, bottom Neighbour of 2 = 0', function () {
			assert.equal(bottomNeighbour(2, 3), 0);
		});

		it('can calculate the no. of live neighbours', function () {
			const x = 1, y = 1;
			const oBoard = [[1, 1, 1],
							[0, 0, 0],
							[1, 1, 1]];
			assert.equal(numOfLiveNeighbours(x, y, oBoard), 6);
		});
	});

	describe('Transition Rules', function () {
		it('[1 -> 0] Any live cell with fewer than two live neighbours dies, as if caused by under-population', function () {
			const x = 1, y = 1;
			const oBoard = [[0, 0, 0],
							[0, 1, 0],
							[0, 0, 0]];
			assert.equal(transform(x, y, oBoard), 0);
		});
		it('[1 -> 1] Any live cell with two or three live neighbours lives on to the next generation', function () {
			const x = 1, y = 1;
			const oBoard = [[0, 1, 1],
							[0, 1, 0],
							[0, 0, 0]];
			assert.equal(transform(x, y, oBoard), 1);
		});
		it('[1 -> 0] Any live cell with more than three live neighbours dies, as if by overcrowding', function () {
			const x = 1, y = 1;
			const oBoard = [[1, 1, 1],
							[1, 1, 0],
							[1, 0, 1]];
			assert.equal(transform(x, y, oBoard), 0);

		});
		it('[0 -> 1] Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', function () {
			const x = 1, y = 1;
			const oBoard = [[0, 1, 1],
							[0, 0, 0],
							[0, 0, 1]];
			assert.equal(transform(x, y, oBoard), 1);
		});
	});
});