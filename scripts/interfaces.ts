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