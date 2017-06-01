var szam = 4;
if (szam > 4) {
	console.log("a szám nagyobb, mint 4");
}
if (szam < 4) {
	console.log("a szám kisebb, mint 4");
}
if (szam === 4) {
	console.log("szám egyenlő 4");
}

let tomb = ["Béla", "Jani", "Pista"];
for (var i = 0; i <= tomb.length; i++) {
	if (tomb[i] == "Pista") {
		van = true;
		aszam = i;
	}
}
if (van = true) {
	console.log("A tömbben benne van a Pista, ami a tömb "+aszam+"-dik eleme.");
} else {
	console.log("A tömbben nincs benne a Pista");
}

let tomb2 = [1, 3, 5, 8, 13, 21];
var osszeg = 0;
for (var i = 0; i < tomb2.length; i++) {
	osszeg = osszeg+tomb2[i];
}
console.log(osszeg);