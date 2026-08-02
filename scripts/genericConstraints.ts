function loggingIdentity<Type>(arg: Type): Type {
  // console.log(arg.length); // Property 'length' does not exist on type 'Type'
  return arg;
}

// Instead of working with any and all types, we’d like to constrain this function to
// work with any and all types that also  have the .length property. As long as the type
// has this member, we’ll allow it, but it’s required to have at least this member. 
// To do so, we must list our requirement as a constraint on what Type can be.

interface Lengthwise {
  length: number;
}

function loggingIdent<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

// Because the generic function is now constrained, it will no longer work over any and all types:

// loggingIdent(3); // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'
loggingIdent({ length: 10, value: 2 });     // 10, because length param has value
loggingIdent([1, 2, 3]);                    // 3 because of array length is 3

// Using Type Parameters in Generic Constraints

// We’d like to ensure that we’re not accidentally grabbing a property that does not
// exist on the obj, so we’ll place a constraint between the two types:

function getProperty <Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

const myObject = {a: 1, b: 2, c: 3};

console.log(getProperty(myObject, "b"));
          // function getProperty<{
          //     a: number;
          //     b: number;
          //     c: number;
          // }, "b">(obj: {
          //     a: number;
          //     b: number;
          //     c: number;
          // }, key: "b"): number

// What if the key does not exist in myObject?
// console.log(getProperty(myObject, "x")) // Argument of type '"x"' is not assignable to parameter of type '"b" | "a" | "c"'

// Using Class Types in Generics

// When creating factories in TypeScript using generics, it is necessary to
// refer to class types by their constructor functions. For example,

function create<Type>(c: { new (): Type }): Type {
  return new c();
}

// A more advanced example uses the prototype property to infer and constrain
// relationships between the constructor function and the instance side of class types.

class BeeKeeper {
  hasMask: boolean = true;
  nametag: string = "Lorens";
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

// create instance
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.nametag);

// console.log(createInstance(ZooKeeper));          // Argument of type 'typeof ZooKeeper' is not assignable to parameter of type 'new () => Animal'
console.log(createInstance(Animal).numLegs);        // works well