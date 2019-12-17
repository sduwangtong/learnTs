// Declaration Merging: you can't edit func, declearion in modules 

interface Cart {
    calculateTotal() : number;
}

interface Cart {
    x: number;
}

interface Cart {
    calculateTotal(options: {discountCode:number}) : number;
}
// TS automatically merges all the interfaces with the same name
let myCart: Cart = {
    x: 1,
    calculateTotal(options?: {discountCode: number}) {
        if (options && options.discountCode) {

        }
        return 1;
    }
}

console.log (myCart.calculateTotal);

// add functions or variable to an existing namespace you can't change
// namespace MyNamespace {
//     export const x: number = 10;
// }

// namespace MyNamespace {
//     export const getX = () => x;
//     export interface SomeInterface {
//         x: number;
//     }
// }

// MyNamespace.x;
// MyNamespace.getX();

// to extend object 

// enum Vegetables {
//     Tomato = 'tomato',
//     Onion = 'onion'
// }

// namespace Vegetables {
//     export function makeSalad() {
//         return Vegetables.Tomato + Vegetables.Onion;
//     }
// }
// const salad = Vegetables.makeSalad();
// console.log(salad);

import * as React from 'react';
import {renderToString} from 'react-dom/server';


declare module 'react' {
    interface Component {
        helloWord(): string;
    }
}

React.Component.prototype.helloWord = function() {
    return 'Hello';
};

class MyComponent extends React.Component {
    render() {
        return <div> {this.helloWord()}</div>;
    }
}
console.log(renderToString(<MyComponent />));