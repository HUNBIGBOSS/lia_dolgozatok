class Car {			//itt hozzuk létre Car class-t
 constructor(regnumb, color) {		//a class constructora, a regnumb és color változókkal együtt kell deklarálni a class-al létrehozandó objektumokat
 	this.regnumb = regnumb;
	this.tank = 70;
	this.color = color;
		if (!this.color) {		//ha nem adunk meg színt, akkor...
			this.color = "white";		//a color alapértéke a "white"
		}
	this.consumption = 5;
	this.passengers = [];
	Object.defineProperty(this, 'wheels', {			//a "wheel" tulajdonság részletes jellemzőinek megadása
			value: 4,
			writable: false,
			enumerable: true,
			configurable: true
	});
	}
	printAllInfo() {		//függvény, ami meghíváskor kiírja a Car által létrehozott objektum tulajdonságainak az értékeit
		console.log("Az autó rendszáma: "+ this.regnumb);
		console.log("Az autó színe: "+ this.color);
		console.log("Az autó tankja: "+ this.tank);
		console.log("Az autó fogyasztása: "+ this.consumption);
		console.log("Az autó kerekeinek száma: " +this.wheels);

	}
	going(kilometers) {			//függvény, ami kiszámoja a fogyasztását az adott autónak (objektumnak)
		let fogyaszt = this.consumption / 100;
		console.log(fogyaszt);
		if (this.tank === 0) {
			console.log("A tank üres, az autó nem indulhat el");
		} else {
			while (kilometers >= 0) {
				kilometers--;
				this.tank -= fogyaszt;
				this.tank = Math.round(this.tank * 100) / 100;
			}
			console.log(this.regnumb + " rendszámú autó tankjában " + this.tank + " liter üzemanyag maradt.");

		}
	}
	addPassenger(name, sex) {			//függvény, amely adat bevitelekor feltölti a "passengers tömböt"
		if (this.passengers.length >= 5) {
			console.log("Több utas nem fér az autóba");
		} else {
			let passenger = {
				Neve: name,
				Neme: sex
			};
			this.passengers.push(passenger);
		}
	}
}
let car1 = new Car("123-asd-456", "Red");		//új objektum létrehozása
car1.printAllInfo();
car1.going(50);
car1.addPassenger("Bob", "man");
car1.addPassenger("Bob", "man");
car1.addPassenger("Bob", "man");
car1.addPassenger("Bob", "man");
car1.addPassenger("Bob", "man");
car1.addPassenger("Bob", "man");
var utasok = car1.passengers.map(function(passenger) {
		return passenger.Neve + " is a " + passenger.Neme + " passenger." 
	}); //elég paraszt megoldás, de erre az egyre működik :)
console.log(utasok);

class CrazyCar extends Car {			//öröklődéses class, ami átalakítja a Car class "wheel" tulajdonságát írhatóra
	constructor (regnumb, color) {
		super(regnumb, color)
		Object.defineProperty(this, 'wheels', {
			value: 4,
			writable: true,
			enumerable: true,
			configurable: true
	});
}
}
let crazyCar1 = new CrazyCar("asd-567-fgh", "Purple");		//új objektum létrehozása, ezúttal az öröklődéses Class segítségével
crazyCar1.wheels = 7;
crazyCar1.printAllInfo();