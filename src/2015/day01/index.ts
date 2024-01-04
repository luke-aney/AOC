import run from "aocrunner";
import * as util from '../../utils/index.js';

const parseInput = (rawInput: string) => {
	const lines = util.parseLines(rawInput);
	return lines;
};

const solve = (rawInput: string, isPart1: boolean) => {
	const input = parseInput(rawInput)[ 0 ];

	let floor = 0;
	for ( let i = 0; i < input.length; i++ ) {
		const c = input[i];
		if ( c === '(' ) {
			floor++;
		}
		else if ( c === ')' ) {
			floor--;
		}
		 if (!isPart1 && floor === -1) {
			return i + 1;	
		 }
	}
	return floor;
};

const part1 = (rawInput: string) => solve(rawInput, true);
const part2 = (rawInput: string) => solve(rawInput, false);

run({
	onlyTests: false,
	part1: {
		tests: [
			{
				input: `(()(()(`,
				expected: 3
			}
		],
		solution: part1
	},
	part2: {
		tests: [
			{
				input: `()())`,
				expected: 5
			}
		],
		solution: part2
	},
	trimTestInputs: true
});