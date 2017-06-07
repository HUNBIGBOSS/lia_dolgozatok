/*jshint esnext: true */
/*jshint devel: true */
/*jshint node: true */
/*jshint browser: true */
/*jshint jquery: true */
console.log("------------------------");
console.log("Értékcsere");
var a = 6;
var b = 2;
console.log("A csere előtt\na értéke: "+a+", b értéke: "+b);
var c = a;
a = b;
b = c;
console.log("A csere után\na értéke: "+a+", b értéke: "+b);
console.log("------------------------\nSorozatszámítás");

let tomb1 = [5, 7, 2, 9, 5, 4];
let osszeg = 0;
for (var i = 0; i < tomb1.length; i++) {
	osszeg = osszeg + tomb1[i];
}
console.log("A tömb elemeinek az összege: "+ osszeg);
console.log("------------------------\nEldöntés");

let tomb2 = [5, 7, 2, 9, 5, 4];
let j = 0;
let van1 = false;
while ((j < tomb2.length) && (tomb2[j] !== 2)) {
	j++;
}
if (j < tomb2.length) {
	van1 = true;
}
console.log("Van-e a tömbben kettes: "+van1);
console.log("------------------------\nLineáris keresés");

let tomb3 = [5, 7, 2, 9, 5, 4];
let k = 0;
let van2 = false;
let hanyadik = 0;
while ((k < tomb3.length) && (tomb3[k] !== 2)) {
	k++;
}
if (k < tomb3.length) {
	van2 = true;
}
if (van2 === true) {
	hanyadik = k;
}
console.log("Van-e a tömbben páros szám: "+van2+"\nEz a(z) "+hanyadik+"-ik elem.");
console.log("------------------------\nMegszámlálás");

let tomb4 = [5, 7, 2, 9, 5, 2, 4, 2];
let db = 0;
for (var i = 0; i < tomb4.length; i++) {
	if (tomb4[i]%2 === 0) {
		db++;
	}
}
console.log("Ennyi páros szám van a tömbben: "+db);
console.log("------------------------\nMaximum kiválasztás");

let tomb5 = [5, 7, 2, 9, 5, 2, 4, 2];
let max = 0;
let ind = 0;
for (var i = 0; i < tomb5.length; i++) {
	if (tomb5[i] > max) {
		max = tomb5[i];
		ind = i;
	}
}
console.log("A tömb legnagyobb elemének az indexe: "+ind+", értéke: "+max);
console.log("------------------------\nBuborékrendezés");

let tomb6 = [5, 7, 2, 9, 5, 2, 4, 2];
console.log("A rendezetlen tömb: "+tomb6);
for (var i = tomb6.length; i >= 2; i--) {
	let c;
	for (var l = 0; l <= i-1; l++) {
		if (tomb6[l] > tomb6[l+1]) {
			c=tomb6[l];
			tomb6[l]=tomb6[l+1];
			tomb6[l+1]=c;
		}
	}
}
console.log("A rendezett tömb: "+tomb6);
console.log("------------------------\nMinimum Kiválasztásos rendezés");

let tomb7 = [5, 7, 2, 9, 5, 2, 4, 2];
console.log("A rendezetlen tömb: "+tomb7);
for (var i = 0; i < tomb7.length-1; i++) {
	let min = i;
	let c;
	for (var m = (i+1); m < tomb7.length; m++) {
		if (tomb7[min] > tomb7[m]) {
			min = m;
		}
	}
	c = tomb7[i];
	tomb7[i] = tomb7[min];
	tomb7[min] = c;
}
console.log("A rendezett tömb: "+tomb7);
console.log("------------------------\nFaktoriális");

function fakt(f) {
	if (f === 0) {
		return 1;
	} else {
		return (f*fakt(f-1));
	}
}
console.log("!4 értéke: "+fakt(4));