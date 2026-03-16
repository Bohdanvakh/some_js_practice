const person1 = {
    firstName: "Sponge Bob",
    lastName: "Square Pents",
    age: 30,
    isEmployed: true,
    sayHello: function() {
        console.log('Hi, I am SpongeBob')
    }
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 32,
    isEmployed: false
};

console.log(person2.firstName);

class House {
    constructor(color) {
        this.color = color
    }

    getFurniture() {
        return 'sofa'
    }
}

const houseObject = new House('red');
console.log(houseObject.getFurniture());

class Bubble {
    constructor() {
        this.x = 250;
        this.y = 200;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}

const bubbleObject = new Bubble();

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    bubbleObject.move();
    bubbleObject.show();
}
