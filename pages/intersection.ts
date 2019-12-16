export interface IA {
    a: number;
}

interface IB {
    b: number;
}

export function X (obj: IA & IB) {
    return obj.a + obj.b;
}


// use this to combine object
// note that the return type to be specific as ObjA & ObjB
function combine<ObjA extends object, ObjB extends object> (ObjA: ObjA, ObjB: ObjB) : ObjA & ObjB {
    return {...ObjA, ...ObjB};
}

const objA = { a: 1 };
const objcB = { b: 2 };

const result = combine(objA, objcB);
// const wrongTest = combine({a:5}, "");
console.log (result);