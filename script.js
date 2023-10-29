console.log('hello');

// ---1----
let height = 100;
let width = 200;
let area = height + width;
console.log('The area of the rectangle is:' + area);

// ----2----
let temp = 20;
let f = temp * 1.8 + 32;
console.log(temp + 'C is' + f + 'F');

let fh = 68;
let tempc = (fh - 32) * 0.555;
console.log(fh + 'F is' + tempc + 'C');

// ---3---
let hour = 2;
let second = hour * 60 * 60;
console.log(hour + 'Hours =' + second + 'Seconds');

// ---4---
let grade = 57;
if (grade >= 95) {
	console.log('+A');
} else if (grade >= 90 && grade <= 94) {
	console.log('A');
} else if (grade >= 85 && grade <= 89) {
	console.log('+B');
} else if (grade >= 80 && grade <= 84) {
	console.log('B');
} else if (grade >= 75 && grade <= 79) {
	console.log('+C');
} else if (grade >= 60 && grade <= 74) {
	console.log('C');
} else if (grade >= 55 && grade <= 59) {
	console.log('+D');
} else if (grade >= 50 && grade <= 54) {
	console.log('D');
}
