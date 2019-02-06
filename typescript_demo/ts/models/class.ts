class Animales {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snakes extends Animales {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animales {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snakes("Sammy the Python");
let tom: Animales = new Horse("Tommy the Palomino");

sam.move();
tom.move(10);

class mammal {
    private _name: string;
    constructor (theName:string) {
        this._name = theName;
    }
}

class Rhino extends mammal {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private _name:string;
    constructor(theNanme:string) {
        this._name = theNanme;
    }
}
