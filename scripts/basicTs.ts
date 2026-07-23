// Union Types (|)
// Значення може бути одним із кількох типів.

type ID = string | number;

function printId(id: ID) {
    console.log(id);
}

printId(10);
printId("lorem");

// Ключовий момент — type narrowing.
// Компілятор дозволяє викликати тільки ті методи/властивості,
// які спільні для всіх типів у union, поки ти явно не звузиш тип

function process(value: string | number) {
    if (typeof value === "string") {
        value.toUpperCase(); // string
    } else {
        value.toFixed(2); // number
    }
}

process(100);
process("Lorem ipsum");

// чому не any?

function processAny(value: any) {
    value.toUpperCase();
}

processAny("Lorem to upper");
// processAny(199); // TypeError: value.toUpperCase is not a function

// unknown

function processUnknown(value: unknown) {
    value.toUpperCase();

    if (typeof value === "string") {
        return value.toUpperCase();
    }
}

console.log(processUnknown("Lorem to upper")); // LOREM TO UPPER

// discriminated unions
// Це union type, де кожен варіант має спільне поле (discriminant / tag) 
// з унікальним literal-значенням, за яким TS може автоматично звужувати 
// тип — без ручних typeof/instanceof перевірок на кожне поле.

type Circle = {
    kind: "circle";
    radius: number;
};

type Square = {
    kind: "square";
    side: number;
};

type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Square | Rectangle

// Поле kind — дискримінант. Це literal type ("circle", "square", "rectangle"), а не просто string.

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2
        case "rectangle":
            return shape.height * shape.width;
    }
}

const myCircle: Shape = { kind: "circle", radius: 120 };

console.log(area(myCircle));