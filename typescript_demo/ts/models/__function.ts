// 可选参数和默认参数
/* function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
console.log(result3); */

/* function buildName(firstName:string, lastName?:string) {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
let result1 = buildName("Bob");                  // error, too few parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
console.log(result1, "\n" + result3); */ 

// 剩余参数
/* function buildName(firstName:string, ...restOfName:string[]) {
    return firstName + "\n" + restOfName.join("\n");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

let buildNameFun: (fname:string, ...rest:string[]) => string = buildName;
employeeName = buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName); */

// this和箭头函数

/* let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit); */

// this参数

/* interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits:string[];
    cards:number[];
    createCardPicker(this: Deck): () => Card;
}

let deck:Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this:Deck) {
        return() => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit); */

// this参数在回调函数里

// 函数重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

/* function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
} */

function pickCard(x:{suit:string; card:number;}[]):number;
function pickCard(x:number): {suit:string; card:number;};
function pickCard(x):any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
