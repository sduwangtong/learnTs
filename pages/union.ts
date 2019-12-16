// Union type A | B | C

function someFn(myArgument:number | string | boolean) {
    let x;
    if (typeof myArgument === 'string') {
        x = myArgument.toUpperCase;
    } else if (typeof myArgument === 'number') {
        x = myArgument.toFixed();
    } else {
        x = myArgument;
    }
}


interface Dog {
    bark(): void;
    walk() : void;
}

interface Cat {
    meow() : void;
    walk(): void;
}
// () to cast a class 
// or just to use !instanceof!
// xyz is Obj to cast as well 

function isDog(someObj: Dog | Cat) : someObj is Dog){
    return (<Dog>someObj).bark !== undefined;
}

function callMyPet(pet: Dog | Cat) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    } else {
        pet.meow();
    }
    
}