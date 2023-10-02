let tool, colour, valueX, valueY, value1, value2;
let str = "";

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
};

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

function strand() {
	tool = document.forms["stamp"]["tool"].value;
	colour = document.forms["stamp"]["colour"].value;

	valueX = document.forms["stamp"]["valX"].value;
	valueY = document.forms["stamp"]["valY"].value;
	value1 = document.forms["stamp"]["val1"].value;
	value2 = document.forms["stamp"]["val2"].value;

	str += commandMap[tool];
	str += colourMap[colour];

	str += coordMap[valueX];
	str += coordMap[valueY];
	str += coordMap[value1];
	str += coordMap[value2];

	alert(str)
	str = "";
	return false;
}