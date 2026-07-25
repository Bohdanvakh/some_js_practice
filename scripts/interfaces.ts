// Це список полів з їх типами, який каже: "об'єкт такої
// форми повинен мати саме ці поля саме такого типу".

function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label);
}

let myObj = { size: 10, label: "lorem ipsum dolor sit amet" };

printLabel(myObj);

interface LabeledValue {
    label: string;
}

function printLabeledValueLabel(labelObj: LabeledValue) {
    console.log(labelObj.label);
}

printLabeledValueLabel(myObj);

interface SquareConfig {
    color?: string;
    width?:number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 10 };

    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: "black", width: 24});

console.log(mySquare);

interface Point {
    x: number;
    y: number;
};

function printCoords(pt: Point) {
    console.log(`X coordinates: ${pt.x}`);
    console.log(`Y coordinates: ${pt.y}`);
}

printCoords({x: 10, y: 100});