
// 1
numberConvert(true);
// 0
numberConvert(false);
// 1
numberConvert(1);
// 0
numberConvert(null);
// NaN
var un;
numberConvert(un);
// 123
numberConvert('123');
// 123.456
numberConvert('123.456');
// 16
numberConvert('0x10');
// 0
numberConvert('');
// NaN
numberConvert('123X');

// 123
parseIntConvert('123X');
// NaN
parseIntConvert('  ');
parseIntConvert('');
// 16
parseIntConvert('0x10');
// 22
parseIntConvert('22.45');
// 10
parseIntConvert('010');
// 8
parseIntConvert('010', 8);
// 15
parseIntConvert('0xf');

// 123
parseFloatConvert('123bule');
// 0
parseFloatConvert('0xA');
// 22.5
parseFloatConvert('22.5');
// 22.5
parseFloatConvert('22.5.34');
// 908.5
parseFloatConvert('0908.5');
// 31250000
parseFloatConvert('3.125e7');

function numberConvert(param){

	var result = Number(param);
	console.log(result);
}

function parseIntConvert(param, radix){

	var result;
	if(radix){
		result = parseInt(param, radix);
	} else {
		result = parseInt(param);
	}
	console.log(result);
}

function parseFloatConvert(param){

	var result = parseFloat(param);
	console.log(result);
}