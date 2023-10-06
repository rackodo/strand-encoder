let tool, colour;

let stampW = 64;
let stampH = 64;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const coordMap = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
    8: 'I',
    9: 'J',
    10: 'K',
    11: 'L',
    12: 'M',
    13: 'N',
    14: 'O',
    15: 'P',
    16: 'Q',
    17: 'R',
    18: 'S',
    19: 'T',
    20: 'U',
    21: 'V',
    22: 'W',
    23: 'X',
    24: 'Y',
    25: 'Z',
    26: 'a',
    27: 'b',
    28: 'c',
    29: 'd',
    30: 'e',
    31: 'f',
    32: 'g',
    33: 'h',
    34: 'i',
    35: 'j',
    36: 'k',
    37: 'l',
    38: 'm',
    39: 'n',
    40: 'o',
    41: 'p',
    42: 'q',
    43: 'r',
    44: 's',
    45: 't',
    46: 'u',
    47: 'v',
    48: 'w',
    49: 'x',
    50: 'y',
    51: 'z',
    52: '0',
    53: '1',
    54: '2',
    55: '3',
    56: '4',
    57: '5',
    58: '6',
    59: '7',
    60: '8',
    61: '9',
    62: '+',
    63: '/',
    64: '$'
}

const commandMap = {
    'rect': 0, // Rectangle
    'oval': 1, // Oval
    'line': 2 // Line
}

const colourMap = {
    'red': 0,
	'blue': 1,
	'green': 2,
	'yellow': 3,
	'purple': 4,
	'pink': 5,
	'white': 6,
	'black': 7
}

function strand(shouldReport) {
	ctx.clearRect(0,0,64,64);
	init()

	tool = pullData().tool;
	colour = pullData().colour;
	
	let valX = pullData().valueX;
	let valY = pullData().valueY;
	let val1 = pullData().valueA;
	let val2 = pullData().valueB;

	switch (tool) {
		case "line": drawLine(valX, valY, val1, val2, colour); break;
		case "rect": drawRect(valX, valY, val1, val2, colour); break;
		case "oval": drawOval(valX, valY, val1, val2, colour)
	}
	
	if (shouldReport) {
		let str = "";

		str += commandMap[tool];
		str += colourMap[colour];

		str += coordMap[valX];
		str += coordMap[valY];
		str += coordMap[val1];
		str += coordMap[val2];

		alert(str)
		str = "";
	}

	return false;
}

function pullData() {
	return {
		tool: document.forms["stamp"]["tool"].value, 
		colour: document.forms["stamp"]["colour"].value,
		valueX: document.forms["stamp"]["valX"].value,
		valueY: document.forms["stamp"]["valY"].value,
		valueA: document.forms["stamp"]["val1"].value,
		valueB: document.forms["stamp"]["val2"].value
	};
}

function onload() {
	init()
}

function init() {
	canvas.width = 64;
	canvas.height = 64;

	ctx.imageSmoothingEnabled = false;
	
	drawBounds()
}

function drawBounds() {
	ctx.lineWidth = 1;
	ctx.strokeStyle = `rgba(255, 255, 255, 0.5`;

	ctx.beginPath();
	ctx.moveTo(30, 32.5);
	ctx.lineTo(35, 32.5);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(32.5, 30);
	ctx.lineTo(32.5, 35);
	ctx.stroke();

	ctx.strokeRect(0, 0, 64, 64);
}

function drawLine(x, y, a, b, colour) {
	ctx.strokeStyle = colour;
	ctx.lineWidth = .1;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(a, b);
	ctx.stroke();
	ctx.moveTo(x, y);
	ctx.lineTo(a, b);
	ctx.stroke();
	ctx.moveTo(x, y);
	ctx.lineTo(a, b);
	ctx.stroke();
}

function drawRect(x, y, a, b, colour) {
	ctx.fillStyle = colour;
	ctx.lineWidth = 0;
	ctx.fillRect(x, y, a, b);
}

function drawOval(x, y, a, b, colour) {
	ctx.fillStyle = colour;
	ctx.lineWidth = .1;
	ctx.beginPath()
	ctx.ellipse(x, y, a, b, 2 * Math.PI, 0, 2 * Math.PI);
	ctx.fill();
	ctx.ellipse(x, y, a, b, 2 * Math.PI, 0, 2 * Math.PI);
	ctx.fill();
	ctx.ellipse(x, y, a, b, 2 * Math.PI, 0, 2 * Math.PI);
	ctx.fill();
}