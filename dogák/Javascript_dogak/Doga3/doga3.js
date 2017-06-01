let tomb1 = [1, 3, 5, 8, 13, 21];
var osszeg1 = 0;
for (var i = 0; i < tomb1.length; i++) {
	osszeg1 += tomb1[i]
}
console.log("A tömb elemeinek összege: " + osszeg1);

let tomb2 = [1, 3, "valami", 5, 8, 13, 21];
var osszeg2 = 0;
for (var i = 0; i < tomb2.length; i++) {
	if (typeof(tomb2[i]) != 'number') {
		console.log("A tömb ezen eleme nem szám: " + tomb2[i]);
	} else {
	osszeg2 += tomb2[i];
	}
}
console.log("A tömb elemeinek összege: " + osszeg2);

let tomb3 = [1, 3, "valami", 5, 8, 13, 21, "12"];
var osszeg3 = 0;
for (var i = 0; i < tomb3.length; i++) {
	if (typeof(tomb3[i]) != 'number') {
		tomb3[i] = parseInt(tomb3[i]);
		if (isNaN(tomb3[i])) {
			console.log("A tömb " + i + "-dik eleme ki lett hagyva.");
		} else {
			console.log("A tömb " + i + "-dik eleme át lett konvertálva számmá.");
			osszeg3 += tomb3[i];
		}
	} else {
	osszeg3 += tomb3[i];
	}
}
console.log("A tömb elemeinek összege: " + osszeg3);